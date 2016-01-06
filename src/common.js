// little experiment to test for features
var windowFeatures = ["localStorage", "sessionStorage", "JSON", "XMLHttpRequest", "DOMParser"],
	documentFeatures = ["querySelector", "querySelectorAll", "defaultView", "implementation", "documentElement"],
	features = windowFeatures.concat(documentFeatures);
features.forEach(function(feature){
	baseObj = in_array(feature, windowFeatures) ? window : document;
	console.log(baseObj.constructor);
	if (typeof baseObj[feature] === "undefined") throw new Error(feature+" is not available");
	/*
	try {
		typeof baseObj[feature] !== "undefined";
		console.log(feature+": "+typeof baseObj[feature])
	} catch(e) {
		throw new Error(feature+" is not available");
	}
	*/
});

// from Prototypejs
if (!String.dasherize) Object.defineProperty(String.prototype, "dasherize", {
	enumerable: false,
	writable: true,
	value: function() {
		return this.replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
		   .replace(/([a-z\d])([A-Z])/g, '$1-$2')
		   // added this line for css vendor-specific attributes
		   .replace(/^(apple|Apple|Wap|wap|moz|Ms|ms|WebKit|Webkit|webkit|O)(.*?$)/g, '-$1$2')
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

if (!String.trimSpace) Object.defineProperty(String.prototype, "trimSpace", {
	enumerable: false,
	writable: true,
	value: function() {
		thisStr = String(this);
		return thisStr.replace(/^\s|\s$/gm, '');
	}
});

if (!String.jsStyleToCss) Object.defineProperty(String.prototype, "jsStyleToCss", {
	enumerable: false,
	writable: true,
	value: function() {
		/*
		thisStr = String(this);
		endArr = [];
		thisArr = thisStr.split(/[A-Z]/g);
		thisArr.forEach(function(st){
			endArr.push(/[A-Z]/.test(st.charAt(0)) ? "-"+st.toLowerCase() : st);
		});
		return endArr.join('');
	*/
		thisStr = String(this);
		return thisStr.replace(/([A-Z])/g, '-$1')
//		   .replace(/([a-z\d])([A-Z])/g, '$1-$2')
		   // added this line for css vendor-specific attributes
		   .replace(/^(apple|Apple|Wap|wap|moz|Ms|ms|WebKit|Webkit|webkit|O|o-)(.*?$)/g, '-$1$2')
		   .toLowerCase();
	}
});

//////////// LOCAL / SESSION STORAGE ///////////////////////////////////

//  local storage as objects - by http://stackoverflow.com/users/305830/guria
Storage.prototype.setObject = function(key, value) {
	this.setItem(key, JSON.stringify(value));
}
Storage.prototype.getObject = function(key) {
    var value = this.getItem(key);
   	return value && JSON.parse(value);
}

/////////////// misc own funcs ////////////////////

if (!Element.getStyle) Object.defineProperty(Element.prototype, "getStyle", {
	enumerable: false,
	writable: true,
	value: function(prop, pseudo) {
		return getStyle(this, prop, pseudo)
	}
});

if (!Element.inject) Object.defineProperty(Element.prototype, "inject", {
	enumerable: false,
	writable: true,
	value: function(text, pos) {
		pos = pos || 'beforeend';
//		return this.insertAdjacentHTML(pos, text);
		return inject(text, pos, this);
	}
});

function inject(input, pos, parent) {
	p = parent || document.body;
	pos = pos || 'beforeend';
	return p.insertAdjacentHTML(pos, input);
}

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

// originaly for converting things like DOMnodeMap to iterable array
function nodesToArray(collection) {
	return ([]).slice.call(collection);
}

function wordInString(needle, haystack, flags) {
	reFlags=flags|| 'i';
	// using boolean true to pass the test (signifies universal support)
	return haystack===true || (typeof haystack=="string" && (new RegExp('(^|\\s)'+needle+'(\\s|$)', reFlags)).test(haystack));
}

function getStyle(el, prop, pseudo) { pseu=pseudo || null; return document.defaultView.getComputedStyle(el,pseu).getPropertyValue(prop) || null;};

// used for centrally positioning a div
// http://andylangton.co.uk/blog/development/get-viewport-size-width-and-height-javascript
function getViewport() {
	var e = window, a = 'inner';
	if ( !( 'innerWidth' in window ) ) {
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
}

// browser detection
// need to check specs for iOS, mac and mobile devices for accuracy in this programme
var Browser = {
	ua: navigator.userAgent,
//	Chrome: !!window.chrome && !this.Opera,             // Chrome 1+
	IE: /*@cc_on!@*/false || !!document.documentMode,   // At least IE6
	FirefoxOS: "mozApps" in navigator, // && this.Mobile,
	Firefox: typeof InstallTrigger !== 'undefined',  // Firefox 1.0+
// At least Safari 3+: "[object HTMLElementConstructor]"
	Safari: Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0,
//	SafariMobile: this.Mobile && this.Safari,
//	Webkit: !!/webkit/i.test(this.ua) // || (this.Safari || this.Chrome)
};

Browser.Mobile = /mobi/i.test(Browser.ua);
Browser.Webkit = /webkit/i.test(Browser.ua);
Browser.Edge = /Edge/.test(Browser.ua);
Browser.SafariMobile = Browser.Safari && Browser.Mobile;
Browser.Chrome = !!window.chrome && !Browser.Opera; 
Browser.Opera = !!window.opr || !!window.opera || Browser.ua.indexOf(' OPR/') >= 0;
Browser.base = baseUA();
Browser.cookies = navigator.cookieEnabled;
Browser.online = navigator.onLine;
Browser.OS = navigator.platform;

Browser.version = uaVersion(Browser.ua);
//	Browser.version = (!!Browser.Safari || !!Browser.Opera) ? Browser.ua.match(/Version\/([\.0-9]+)\s/)[1] : !!Browser.Chrome ? Browser.ua.match(/Chrome\/([\.0-9]+)\s/)[1]  : !!Browser.Firefox ? Browser.ua.match(/Firefox\/([\.0-9]+)/)[1]  : !!Browser.IE ? Browser.ua.match(/ rv\:([\.0-9]+)\)/)[1]  : "version undetected";
function uaVersion(ua, baseua) {
	_baseua = baseua || Browser.base;
	return _baseua=="Safari" ? ua.match(/Version\/([\.0-9]+)\s/)[1] :
				_baseua=="Opera" ? ua.match(/\/([\.0-9]+)$/)[1] : 
				_baseua=="Chrome" ? ua.match(/Chrome\/([\.0-9]+)/)[1]  :
				_baseua=="Firefox" ? ua.match(/Firefox\/([\.0-9]+)$/)[1]  :
				_baseua=="IE" ? ua.match(/ rv\:([\.0-9]+).*?$/)[1]  :
				_baseua=="Edge" ? ua.match(/ rv\:([\.0-9]+).*?$/)[1]  :
				"version undetected";
}
// return an object of non-false browser features
function browserObj() {
	tmpObj = {};
	for (b in Browser) {
//		if (Browser[b] && !/(ua|version)/.test(b)) tmpObj[b] = 1;
		if (Browser.hasOwnProperty(b) && !!Browser[b]) tmpObj[b] = Browser[b];
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
		if (Browser[b] && !/Webkit|Mobile|FirefoxOS|SafariMobile|ua|version|base|cookies|online|OS/.test(b)) { //  && !in_array(b, tmpArr)
			tmpArr.push(b);
		}
	}
	// new Edge directive
	if (Browser.Edge) return "IE";
	else if (Browser.Opera) return "Opera";
	// should be only one entry ...
	else return tmpArr.join("");
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
// center a div on the page referenced by its ID
function setDivPosition(div) {
	var s = $(div || 'panel');
	if (s) {
		viewport = getViewport();
		s.style.left = (((viewport.width-parseInt(getStyle(s, "width").replace("px", "")))/2)-32)+'px';
		s.style.top = (((viewport.height-parseInt(getStyle(s, "height").replace("px", "")))/2)-16)+'px';
	}
}

// parse query string to object, optionally to global vars
function parseQueryStringToObj(toGlobals) {
	tmpObj = {};
	if (window.location.search!=="") {
		window.location.search.substring(1).split("&").forEach(function(q){
			qBits = decodeURIComponent(q).split("=");
			// allow unspecified values to return true (by nature of declaration - even if no value is
			// specified, so mypage.html?mobile&html5 will return {mobile:true, html5:true} )
			qVal = (typeof qBits[1]=="undefined" || qBits[1].match(/^true$/)) ? true :
				qBits[1].match(/^false$/) ? false :
				qBits[1].match(/^[\.0-9e]+$/) ? Number(qBits[1]) : decodeURIComponent(qBits[1]).trimSpace() || true;
			tmpObj[qBits[0].trimSpace()] = qVal; // qBits[1].trimSpace();
		});
	}
	return (toGlobals) ? objToVars(tmpObj) : tmpObj;
}
// var qsObj = parseQueryStringToObj();

function objToVars(obj, namespace) {
	ctx = (!!namespace) ? window[namespace] : window;
	for (p in obj) {
		if (obj.hasOwnProperty(p)) ctx[p] = obj[p];
	}
}