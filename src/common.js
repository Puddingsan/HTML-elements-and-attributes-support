// from Prototypejs
if (!String.dasherize) Object.defineProperty(String.prototype, "dasherize", {
	enumerable: false,
	writable: true,
	value: function() {
		return this.replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
		   .replace(/([a-z\d])([A-Z])/g, '$1-$2')
		   .toLowerCase();
	}
});
function $(id) {
	return document.getElementById(id);
}


function objLen(obj) {
	var leng = 0, s;
	for(s in obj) 
		if (obj.hasOwnProperty(s)) leng++;
	return leng;
}

function in_array(needle, haystack) {
	retVal = false;
	if (typeof haystack == "object" && haystack.length) // arrays only,please
	haystack.forEach(function(n) {
		if (n===needle) retVal = true;
	});
	return retVal;
}

function wordInString(needle, haystack, flags) {
	reFlags=flags|| 'i';
	// using booean true to pass the test (universally supported)
	return haystack===true || (typeof haystack=="string" && (new RegExp('(^|\\s)'+needle+'(\\s|$)', reFlags)).test(haystack));
}

function getStyle(el, prop, pseudo) { pseu=pseudo || null; return document.defaultView.getComputedStyle(el,pseu).getPropertyValue(prop) || null;};

//for positioning the stats div
// http://andylangton.co.uk/blog/development/get-viewport-size-width-and-height-javascript
function viewport() {
	var e = window, a = 'inner';
	if ( !( 'innerWidth' in window ) ) {
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
}

// browser detection
var Browser = {
	Mobile: /mobi/i.test(navigator.userAgent),
 // Opera 8.0+ (UA detection to detect Blink/v8-powered Opera)
	Opera: !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0,
//	Chrome: !!window.chrome && !this.Opera,             // Chrome 1+
	IE: /*@cc_on!@*/false || !!document.documentMode,   // At least IE6
//	SafariMobile: this.Mobile && this.Safari,
	FirefoxOS: "mozApps" in navigator, // && this.Mobile,
	Firefox: typeof InstallTrigger !== 'undefined',  // Firefox 1.0+
// At least Safari 3+: "[object HTMLElementConstructor]"
	Safari: Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0,
	Webkit: /webkit/i.test(navigator.userAgent) // || (this.Safari || this.Chrome)
};

Browser.SafariMobile = Browser.Safari && Browser.Mobile;
Browser.Chrome = !!window.chrome && !Browser.Opera; 

// return an object of matches
function browserObj() {
	tmpObj = {};
	for (b in Browser) {
		if (Browser[b]) tmpObj[b] = 1;
	}
	return tmpObj;
}
//	console.log(browserObj());


// return base user agent
function baseUA() {
	tmpArr = [];
	for (b in Browser) {
		// only base types accepted
		if (Browser[b] && !in_array(b, tmpArr) && /Webkit|Mobile|FirefoxOS/.test(b)!==true) {
			tmpArr.push(b);
//		if (Browser[b] && /Webkit|Mobile|FirefoxOS/.test(b)!==true) {
//			return b;
		}
	}
	// should be only one entry ...
	return tmpArr.join("");
//	return null;
}

// switch style sheets
function switchStyles() {
	(([]).slice.call(document.getElementsByTagName("STYLE"))).forEach(function(ss){
		if (ss.id && /old|new/.test(ss.id)) { // only for sheets with an id of old or new
			ss.disabled = (ss.disabled==false) ? true : false;
			console.log("sheet #"+ss.id+" disabled state: "+!!ss.disabled)
		}
	});
}
// center a div on the page
function setDivPosition(div) {
	var s = $(div || 'panel');
	if (s) {
		s.style.left = (((viewport().width-parseInt(getStyle(s, "width").replace("px", ""))) / 2)-32)+'px'; //
		s.style.top = (((viewport().height-parseInt(getStyle(s, "height").replace("px", ""))) / 2)-16)+'px'; // 
	}
}