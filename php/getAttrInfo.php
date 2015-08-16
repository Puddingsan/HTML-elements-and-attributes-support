<?php
//	error_reporting(E_ERROR | E_WARNING | E_PARSE | E_NOTICE | E_ALL);
//	header("content-type:application/x-json");
error_reporting(0);
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
$localSrc = "../pages/$tag.txt";
if (is_file($localSrc) && (filemtime($localSrc) && filemtime($localSrc) > $lastModLimit)) {
	$source = 'local';
	$docUrl = getURLContent($localSrc);
	$lastModTime = filemtime($localSrc);
} else {
	$lastModTime = 0;
	$source = 'www';
	$docUrl = getURLContent($baseURL);
	$docUrl = preg_replace('/(\r\n|\r|\n)/s', "", $docUrl);
	// will exit if cannot access cached files
	$pagefile = fopen($localSrc, "w") or die("ERROR_NOFILE_ACCESS\n<!-- source: $source -->");
//	$pagefile = fopen($localSrc, "w") or die('{"error":"ERROR_NEWFILE_PERMISSIONS", "data":false, "source":"' . $source . '"}');
	fwrite($pagefile, $docUrl);
	fclose($pagefile);
}
//	echo $docUrl;
//	$matchString = "/^.*?<dt><strong id=\"attr-$attrib\"><code>.*?$attrib.*?<\/code><\/strong>(.*?)<\/dt>.*?<dd>(.*?)<\/dd>.*?$/is";
$matchString = "/^.*?<dt><strong id=\"attr-$attrib\"><code>$attrib<\/code><\/strong>(.*?)<\/dt>(.*?)<dt>.*?$/is";
//	$matchString2 = "/^.*?<dt><strong><code><a name=\"attr-$attrib\">$attrib<\/a><\/code><\/strong><\/dt>(.*?)<dd>(.*?)<\/dd>(.*?)<\/dl>(.*?)<dt><strong>.*?$/is";
$matchString2 = "/^.*?<dt><strong><code><a name=\"attr-$attrib\">$attrib<\/a><\/code><\/strong>(.*?)<dt><strong>.*?$/is";
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
////////////////////////
$retval = ""; $err=NULL;
preg_match($matchString, $docUrl, $match); 
$match[1] = preg_replace('/(?:(?:\r\n|\r|\n)\s*){2}/s', "", $match[1]);
$match[1] = preg_replace('/(\r\n|\r|\n)/s', "", $match[1]);
preg_match("/^.*?title=\"(.*?)\">.*?$/is", $match[1], $altMatch);
$stripped = strip_tags($match[1], allowedTags());
if ($altMatch[1]) $retval .= "<p><strong>" . $altMatch[1] . "</strong></p>";
else if ($stripped!=="") $retval .= "<p><strong>" . $stripped . "</strong></p>" ;
$retval .= ($match[2]) ? strip_tags($match[2], allowedTags()) : "";
//	if (trim(strip_tags($retval))=="") $err = "ERROR_NO_DATA";
// if (trim(strip_tags($retval))=="") {
	preg_match($matchString2, $docUrl, $match2); 
	$match2[1] = preg_replace('/(\r\n|\r|\n)/s', "", $match2[1]);
//	echo $matchString2 . "\n";
//	echo "match2: " . print_r($match2) . "\n";
//	echo "match2: " . var_dump($match2) . "\n";
	$match2[1] = preg_replace('/(\r\n|\r|\n)/s', "", $match2[1]);
	$stripped2 = strip_tags($match2[1], allowedTags());	
	if ($stripped2!=="") $retval .= "<p>" . $stripped2 . "</p>" ;
//}
// no matching data            
if (trim(strip_tags($retval))=="") $retval = "ERROR_NO_DATA";
//	echo '{"error":"' . $err . '", "data":"' . addslashes($retval) . '", "source":"' . $source . '", "lastmod":' . $lastModTime . '}';
echo (strstr($retval, "\'") || strstr($retval, '\"')) ? $retval . "\n<!-- source: $source -->\n<!-- last modified: $lastModTime -->" : addslashes($retval) . "\n<!-- source: $source -->\n<!-- last modified: $lastModTime -->";
//	echo json_encode(array('error'=>$err, 'data'=>$retval, 'source'=>$source), JSON_PRETTY_PRINT);
?>
