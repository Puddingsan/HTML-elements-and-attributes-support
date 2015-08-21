<?php
//	error_reporting(E_ERROR | E_WARNING | E_PARSE | E_NOTICE | E_ALL);
//	header("content-type:application/x-json");
header('Expires: Sun, 01 Jan 2014 00:00:00 GMT');
header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");
header("Connection: close");
error_reporting(0);
$source = NULL;
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-x-moz-errormessage
$tag = isset($_REQUEST['tag']) ? $_REQUEST['tag'] : false;
$attrib = isset($_REQUEST['attrib']) ? $_REQUEST['attrib'] : false;
/*	if (!$tag || !$attrib) die('{"error":"ERROR_BAD_PARAMETER", "data":false, "source":"' . $source . '"}');	*/
/*	if (!$tag) die("ERROR_BAD_PARAMETER"); //  || $attrib!=="null"	*/
$baseURL="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/$tag"; 

function getURLContent($url){
    $doc = new DOMDocument;
    $doc->preserveWhiteSpace = FALSE;
    @$doc->loadHTMLFile($url);
    return $doc->saveHTML();
}
// look for a cached version first, othewise write a new one (keep for a week)
$lastModLimit = time()-(86400*7);
$localSrc = "../cache/$tag.txt";
if (is_file($localSrc) && (filemtime($localSrc) && filemtime($localSrc) > $lastModLimit)) {
	$source = 'cache';
	$docUrl = getURLContent($localSrc);
	$lastModTime = filemtime($localSrc);
} else {
	$lastModTime = 0;
	$source = 'www';
	$docUrl = getURLContent($baseURL);
	$docUrl = preg_replace('/(\r\n|\r|\n)/s', "", $docUrl);
//	$docUrl = preg_replace('/<script.*?\/script>/gs', "", $docUrl);
	// will exit if cannot write to file
	$pagefile = fopen($localSrc, "w") or die("ERROR_NOFILE_ACCESS\n<!-- source: $source -->");
//	$pagefile = fopen($localSrc, "w") or die('{"error":"ERROR_NEWFILE_PERMISSIONS", "data":false, "source":"' . $source . '"}');
	fwrite($pagefile, $docUrl);
	fclose($pagefile);
}
//	echo $docUrl;

$allowedTags = "p ul ol li em strong code table tbody tfoot thead tr td th dd div"; // span 
function allowedTags() {
	global $allowedTags;
	$retStr = "";
	$tagsArr = explode(" ", $allowedTags);
	foreach ($tagsArr as$tag) {
		$retStr .= "<$tag></$tag>";
	}
	return $retStr;
}
//	echo htmlentities(allowedTags());
$retval = ""; $err=NULL;

////////////////////////

// attrib lookup first
if (isset($attrib) && $attrib!=="null") {
	//	$matchString = "/^.*?<dt><strong id=\"attr-$attrib\"><code>.*?$attrib.*?<\/code><\/strong>(.*?)<\/dt>.*?<dd>(.*?)<\/dd>.*?$/is";
	$matchString = "/^.*?<dt>.*?<strong id=\"attr-$attrib\"><code>$attrib<\/code><\/strong>(.*?)<\/dt>(.*?)<dt>.*?$/is";
	//	$matchString = "/^.*?<dt><strong id=\"attr-$attrib\"><code>$attrib<\/code><\/strong>(.*?)<\/dt>(.*?)[<dt>|<\/dl>].*?$/is";
	//	$matchString2 = "/^.*?<dt><strong><code><a name=\"attr-$attrib\">$attrib<\/a><\/code><\/strong><\/dt>(.*?)<dd>(.*?)<\/dd>(.*?)<\/dl>(.*?)<dt><strong>.*?$/is";
	$matchString2 = "/^.*?<dt>.*?<strong><code><a name=\"attr-$attrib\">$attrib<\/a><\/code><\/strong>(.*?)<dt>.*?$/is";
	$matchString3 = "/^.*?<dt>.*?<strong id=\"attr-$attrib\"><code>$attrib<\/code><\/strong>(.*?)<\/dl>.*?$/is";
	preg_match($matchString, $docUrl, $match); 
	$match[1] = preg_replace('/(?:(?:\r\n|\r|\n)\s*){2}/s', "", $match[1]);
	$match[1] = preg_replace('/(\r\n|\r|\n)/s', "", $match[1]);
	preg_match("/^.*?title=\"(.*?)\">.*?$/is", $match[1], $altMatch);
	$stripped = trim(strip_tags($match[1], allowedTags()));
	if ($altMatch[1]) $retval .= "<p><strong>" . $altMatch[1] . "</strong></p>";
	else if ($stripped!=="") $retval .= "<p><strong>" . $stripped . "</strong></p>" ;
	$retval .= (!!$match[2]) ? strip_tags($match[2], allowedTags()) : "";
	
	preg_match($matchString2, $docUrl, $match2); 
	$match2[1] = preg_replace('/(\r\n|\r|\n)/s', "", $match2[1]);
	$match2[1] = preg_replace('/(\r\n|\r|\n)/s', "", $match2[1]);
	$stripped2 = trim(strip_tags($match2[1], allowedTags()));	
	if ($stripped2!=="") $retval .= "<p>" . $stripped2 . "</p>" ;
	/*
	*/
	preg_match($matchString3, $docUrl, $match3); 
	$match3[1] = preg_replace('/(\r\n|\r|\n)/s', "", $match3[1]);
	$match3[1] = preg_replace('/(\r\n|\r|\n)/s', "", $match3[1]);
	$stripped3 = trim(strip_tags($match3[1], allowedTags()));	
	if ($stripped3!=="" && $retval=="") $retval .= "<p>" . $stripped3 . "</p>" ;
} else if ($attrib=="null") {
	// element lookup
	include_once("funcs.php");
//	$matchStringElem = '/(\stitle="(.*?)"><code>&lt;$tag&gt;).*$/gis';
//	$docUrl = getURLContent("../src/list_info_elements.txt");
//	preg_match($matchStringElem, $docUrl, $matchElem); 
	$retval .= $elemsdesc[$tag] ? "<p>".$elemsdesc[$tag]."</p>\n<!-- elem lookup only -->" : "ELEMENT_DATA_NOT_FOUND";
//	$retval .= $matchStringElem[1] ? "<p>".$matchStringElem[1]."</p><!-- $matchStringElem[1] -->\n<!-- elem lookup only -->" : "ELEMENT_DATA_NOT_FOUND";
}

// no matching data? show error msg
if (trim(strip_tags($retval))=="") $retval = "ERROR_NO_DATA";
//	echo '{"error":"' . $err . '", "data":"' . addslashes($retval) . '", "source":"' . $source . '", "lastmod":' . $lastModTime . '}';
echo (strstr($retval, "\'") || strstr($retval, '\"')) ? $retval . "\n<!-- source: $source -->\n<!-- last modified: $lastModTime -->" : addslashes($retval) . "\n<!-- source: $source -->\n<!-- last modified: $lastModTime -->" ; // . (!!$match[2] ? "\n<!-- match[2]: ".$match[2]." -->" : "");
//	echo json_encode(array('error'=>$err, 'data'=>$retval, 'source'=>$source), JSON_PRETTY_PRINT);
?>
