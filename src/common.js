// from Prototypejs
if (!String.dasherize) Object.defineProperty(String.prototype, "dasherize", {
	enumerable: false,
	writable: true,
	value: function() {
		return this.replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
		   .replace(/([a-z\d])([A-Z])/g, '$1-$2')
		   // added this line for css vendor-specific attributes
		   .replace(/^(apple|Apple|Wap|wap|Moz|moz|Ms|ms|WebKit|Webkit|webkit|O)(.*?$)/g, '-$1$2')
		   .toLowerCase();
	}
});

if (!String.camelize) Object.defineProperty(String.prototype, "camelize", {
	enumerable: false,
	writable: true,
	value: function() {
		thisStr = String(this);
//		thisStr = (thisStr.charAt(0) == "-") ? thisStr.substring(1) : thisStr;
		return thisStr.replace(/-+(.)?/g, function(match, chr) {
			return chr ? chr.toUpperCase() : '';
		});
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

// used for centrally positioning a div
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
	ua: navigator.userAgent,
	Mobile: /mobi/i.test(this.ua),
 // Opera 8.0+ (UA detection to detect Blink/v8-powered Opera)
//	Opera: !!window.opera || this.ua.indexOf(' OPR/') >= 0,
//	Chrome: !!window.chrome && !this.Opera,             // Chrome 1+
	IE: /*@cc_on!@*/false || !!document.documentMode,   // At least IE6
	FirefoxOS: "mozApps" in navigator, // && this.Mobile,
	Firefox: typeof InstallTrigger !== 'undefined',  // Firefox 1.0+
// At least Safari 3+: "[object HTMLElementConstructor]"
	Safari: Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0,
//	SafariMobile: this.Mobile && this.Safari,
	Webkit: !!/webkit/i.test(this.ua) // || (this.Safari || this.Chrome)
};

Browser.SafariMobile = Browser.Safari && Browser.Mobile;
Browser.Chrome = !!window.chrome && !Browser.Opera; 
Browser.Opera = !!window.opera || Browser.ua.indexOf(' OPR/') >= 0
Browser.base = baseUA();
Browser.cookies = navigator.cookieEnabled;
Browser.online = navigator.onLine;
Browser.platform = navigator.platform;

Browser.version = uaVersion(Browser.ua);
//	Browser.version = (!!Browser.Safari || !!Browser.Opera) ? Browser.ua.match(/Version\/([\.0-9]+)\s/)[1] : !!Browser.Chrome ? Browser.ua.match(/Chrome\/([\.0-9]+)\s/)[1]  : !!Browser.Firefox ? Browser.ua.match(/Firefox\/([\.0-9]+)/)[1]  : !!Browser.IE ? Browser.ua.match(/ rv\:([\.0-9]+)\)/)[1]  : "version undetected";
function uaVersion(ua, baseua) {
	_baseua = baseua || baseUA();
	return _baseua=="Safari" ? ua.match(/Version\/([\.0-9]+)\s/)[1] :
				_baseua=="Opera" ? ua.match(/Version\/([\.0-9]+)$/)[1] :
				_baseua=="Chrome" ? ua.match(/Chrome\/([\.0-9]+)/)[1]  :
				_baseua=="Firefox" ? ua.match(/Firefox\/([\.0-9]+)$/)[1]  :
				_baseua=="IE" ? ua.match(/ rv\:([\.0-9]+).*?$/)[1]  :
				"version undetected";
}
// return an object of matches
function browserObj() {
	tmpObj = {};
	for (b in Browser) {
//		if (Browser[b] && !/(ua|version)/.test(b)) tmpObj[b] = 1;
		if (Browser.hasOwnProperty(b) && Browser[b]) tmpObj[b] = Browser[b];
	}
	return tmpObj;
}
// /Webkit|Mobile|FirefoxOS|ua|version|base|cookies|online|platform/
//	console.log(browserObj());


// return base user agent
function baseUA() {
	tmpArr = [];
	for (b in Browser) {
		// only base types accepted
		if (Browser[b] && !/Webkit|Mobile|FirefoxOS|ua|version|base|cookies|online|platform/.test(b)) { //  && !in_array(b, tmpArr)
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
			console.log("style sheet #"+ss.id+" disabled state: "+!!ss.disabled)
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