<?php
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-x-moz-errormessage
if (!$_REQUEST['tag'] || !$_REQUEST['attrib']) die("insufficient data supplied");
$baseURL="http://developer.mozilla.org/en-US/docs/Web/HTML/Element/{$_REQUEST['tag']}"; 

function getURLContent($url){
    $doc = new DOMDocument;
    $doc->preserveWhiteSpace = FALSE;
    @$doc->loadHTMLFile($url);
    return $doc->saveHTML();
}

$docUrl = getURLContent($baseURL);

$matchString = "/^.*?<dt><strong id=\"attr-" . $_REQUEST['attrib'] . "\"><code>.*?" . $_REQUEST['attrib'] . ".*?<\/code><\/strong>(.*?)<\/dt>.*?<dd>(.*?)<\/dd>.*?$/is";
preg_match($matchString, $docUrl, $match); 
$allowedTags = "<p></p><ul></ul><li></li><em></em><strong></strong><code></code>";
$retval = "";
$match[1] = preg_replace('/(?:(?:\r\n|\r|\n)\s*){2}/s', "", $match[1]);
preg_match("/^.*?title=\"(.*?)\">.*?$/is", $match[1], $altMatch);
if ($altMatch[1]) $retval .= "<p><strong>" . $altMatch[1] . "</strong></p>";
else $retval .= "<p><strong>" . strip_tags($match[1], $allowedTags) . "</strong></p>" ;
$retval .= ($match[2]) ? strip_tags($match[2], $allowedTags) : "";
if (trim(strip_tags($retval))=="") $retval = "no data found";
echo $retval;
?>
