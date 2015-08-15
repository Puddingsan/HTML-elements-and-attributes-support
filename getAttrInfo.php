<?php
//	error_reporting(E_ERROR | E_WARNING | E_PARSE | E_NOTICE | E_ALL);
//	header("content-type:application/x-json");
error_reporting();
$source = NULL;
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-x-moz-errormessage
$tag = isset($_REQUEST['tag']) ? $_REQUEST['tag'] : false;
$attrib = isset($_REQUEST['attrib']) ? $_REQUEST['attrib'] : false;
//	if (!$tag || !$attrib) die('{"error":"ERROR_BAD_PARAMETERS", "data":false, "source":"' . $source . '"}');
if (!$tag || !$attrib) die("ERROR_BAD_PARAMETERS");
$baseURL="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/$tag"; 

function getURLContent($url){
    $doc = new DOMDocument;
    $doc->preserveWhiteSpace = FALSE;
    @$doc->loadHTMLFile($url);
    return $doc->saveHTML();
}
// look for a cached version first, othewise write a new one (keep for a week)
$lastModLimit = time()-(86400*7);
$localSrc = "pages/$tag.txt";
if (is_file($localSrc) && (filemtime($localSrc) && filemtime($localSrc) > $lastModLimit)) {
	$source = 'local';
	$docUrl = getURLContent($localSrc);
	$lastModTime = filemtime($localSrc);
} else {
	$lastModTime = 0;
	$source = 'www';
	$docUrl = getURLContent($baseURL);
	$docUrl = preg_replace('/(\r\n|\r|\n)/s', "", $docUrl);
	$pagefile = fopen($localSrc, "w") or die("ERROR_NEWFILE_PERMISSIONS\n<!-- source: $source -->");
//	$pagefile = fopen($localSrc, "w") or die('{"error":"ERROR_NEWFILE_PERMISSIONS", "data":false, "source":"' . $source . '"}');
	fwrite($pagefile, $docUrl);
	fclose($pagefile);
}
//	echo $docUrl;
//	$matchString = "/^.*?<dt><strong id=\"attr-$attrib\"><code>.*?$attrib.*?<\/code><\/strong>(.*?)<\/dt>.*?<dd>(.*?)<\/dd>.*?$/is";
$matchString = "/^.*?<dt><strong id=\"attr-$attrib\"><code>.*?$attrib.*?<\/code><\/strong>(.*?)<\/dt>(.*?)<dt>.*?$/is";
$allowedTags = "p ul ol li em strong code table tbody tfoot thead tr td th dd"; // span 
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
////////////////////////
$retval = ""; $err=NULL;
preg_match($matchString, $docUrl, $match); 
//	$match[1] = preg_replace('/(?:(?:\r\n|\r|\n)\s*){2}/s', "", $match[1]);
$match[1] = preg_replace('/(\r\n|\r|\n)/s', "", $match[1]);
preg_match("/^.*?title=\"(.*?)\">.*?$/is", $match[1], $altMatch);
$stripped = strip_tags($match[1], allowedTags());
if ($altMatch[1]) $retval .= "<p><strong>" . $altMatch[1] . "</strong></p>";
else if ($stripped!=="") $retval .= "<p><strong>" . $stripped . "</strong></p>" ;
$retval .= ($match[2]) ? strip_tags($match[2], allowedTags()) : "";
//	if (trim(strip_tags($retval))=="") $err = "ERROR_NO_DATA";
if (trim(strip_tags($retval))=="") $retval = "ERROR_NO_DATA";
//	echo '{"error":"' . $err . '", "data":"' . addslashes($retval) . '", "source":"' . $source . '", "lastmod":' . $lastModTime . '}';
echo (strstr($retval, "\'") || strstr($retval, '\"')) ? $retval . "\n<!-- source: $source -->\n<!-- last modified: $lastModTime -->" : addslashes($retval) . "\n<!-- source: $source -->\n<!-- last modified: $lastModTime -->";
//	echo json_encode(array('error'=>$err, 'data'=>$retval, 'source'=>$source), JSON_PRETTY_PRINT);
?>
