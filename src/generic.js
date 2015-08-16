// Copyright 2015 Nick O'Connor. Feel free to use with credit attached
// function for Prototype.js or non-library pure DOM node construction
// elements with children need the Element.addDOMnode version or a name to reference, as in:
// var para = addDOMnode('p', document.body, 'Click on this link to visit the site: ');
// [followed by]
// addDOMnode('a', para, 'visit site', {href:"http://www.example.com/", target:"_blank"});
// OR para.addDOMnode('a', 'visit site', {href:"http://www.example.com/", target:"_blank"});
// 
// arguments
// @ tagName: (string) HTML element [REQUIRED]
// @ parentElm: (variable) the parent element,  or body tag if not defined
// @ content: (string) textual content within the tag - a text node
// @ attribsObj: (object) miscellaneous attributes to add
// @ styleRules: (object or string) styles to be added, if object properties are camelCased
// @ insertPos: (string) insertion position relative to the parent element (before, after, top or bottom), default is botton
//
// form elements that use the value attribute: the code will look first for a value attribute passed via attribObj, otherwise it will use the content parameter
//
// to do: validation
// begin

if (window.Prototype) {

	////////////////// PROTOTYPEJS-BASED //////////////////////
	
	function addDOMnode(tagName, parentElm, content, attribs, cssRules, insertPos) {
		var a = new Element(tagName, attribs);
		if (cssRules) a.setStyle(cssRules);
		if (content && content.length>0) a.update(content);
		var h = new Hash();
		var where = insertPos || 'bottom';
		h.set(where, a); 
		[parentElm || document.body].insert(h._object);
		return a;
	}

} else {
	
	/// NON - PROTOTYPE VERSION //////
	
	function addDOMnode(tagName, parentElm, content, attribsObj, styleRules, insertPos) {
		if (!tagName || typeof tagName!=="string") throw new TypeError("Cannot create element (tag name must be a string)");
		var a = document.createElement(tagName), parent = parentElm || document.body;
		// attributes object 	
		if (attribsObj && typeof attribsObj == "object") {
			var attrib, propa;
			for (attrib in attribsObj) {
				// workarounds
				propa = (tagName == "label" && attrib == "for") ? "htmlFor" : (attrib == "class") ? "className" : attrib;
				if (attribsObj.hasOwnProperty(attrib)) a[propa] = attribsObj[attrib];
			}
		}
		// css rules,  object or inline style string
		if (styleRules && typeof styleRules == "object") {
			var rule, propr;
			for (rule in styleRules) {
				// workarounds
				propr = (rule == "float") ? "cssFloat" : rule;
				if (styleRules.hasOwnProperty(rule)) a.style[propr] = styleRules[rule];
			}
		} else if (styleRules && typeof styleRules == "string") {
			a.style.cssText = styleRules;
		}
		// strings only, no empty text nodes
		if (content && typeof content == "string" && content.length > 0) {
			// check to see if form elements have been specified a 'value' attibute
			var hasValueAttr = attribsObj && attribsObj.hasOwnProperty("value");
			// datalist > option tag is a special case 
			if (parent!==document.body && parent.nodeName.toLowerCase()=="datalist" && tagName=="option" && hasValueAttr===false) a.setAttribute("value", content);
			// select (or optgroup) > option elements can have different value attributes and text node values
			else if (parent!==document.body && parent.nodeName.toLowerCase().match(/select|optgroup/) && tagName=="option") a.appendChild(document.createTextNode(content));
			// for content without HTML tags: if element is input and no value specified, value is content - otherwise use createTextNode
			// for content containing HTML tags: use insertAdjacentHTML
			else (content.match(/(<\/[a-zA-Z]>|<.*?\/>)/) === null) ? ((tagName=="input" && hasValueAttr===false) ? a.setAttribute("value", content) : a.appendChild(document.createTextNode(content))) : a.insertAdjacentHTML('beforeend', content);
		}
		// insert position
		// to do: try/catch for unreachable nodes (?)
		switch (insertPos) {
			case "before":
				parent.parentNode.insertBefore(a, parent);
				break;
			case "after":
				parent.parentNode.insertBefore(a, parent.nextSibling);
				break;
			case "top":
				parent.insertBefore(a, parent.firstChild);
				break;
			case "bottom":
			default:
				parent.appendChild(a);
				break;
		}
		return a;
	}

}
// add method to Element
// note the second argument dropped
Object.defineProperty(Element.prototype, "addDOMnode", {
    enumerable: false,
    writable: true,
    value: function(tagName, content, attribsObj, styleRules, insertPos) {
        addDOMnode(tagName, this, content, attribsObj, styleRules, insertPos);
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

///////////// STRING FUNCTIONS ///////////////////////////////////

String.prototype.nl2br = function() {
	return this.replace(/(\r\n|\n|\r)/gm,"<br>");	
}
String.prototype.br2nl = function() {
	return this.replace(/(<br>)/gm,"\n");	
}
String.prototype.stripTags = function(){
	inStr = this.replace(/&(lt|gt);/g, function (strMatch, p1){
		return (p1 == "lt")? "<" : ">";
	});
	var outStr = inStr.replace(/<\/?[^>]+(>|$)/g, "");
	return outStr;	
}
String.prototype.linkify = function(target){
	target = target || '_blank';
	var match_url = new RegExp("(http|https):\/\/([a-z0-9\-\.,\?!%\*_\#:;~\\&$@\/=\+]+)", "ig");
	return this.replace(match_url, "<a href=\"$1://$2\" title=\"opens link in a new page\" target=\""+target+"\">$1://$2</a>");
	
};
// mimics the PHP function (well, sort of... gets just the actual page name and extension. Hashes, query string and path stripped from window.location)
function basename() {
	var pagename = /[^\/]+\.[^\/]+$/.exec(window.location);
	pagename =new String(pagename);
	if (window.location.hash.length > 0) {
		pagename = pagename.replace(pagename.substring(pagename.indexOf("#")), '');
	}
	if (window.location.search.length > 0) {
		theQstring = new String(window.location.search);
		pagename = pagename.replace(theQstring, '');
	}
	return pagename;
}

function trimSpace(respdata) {
	return respdata.replace(/(\r\n|\n|\r)/gm,"");	
}

///////////// ARRAY FUNCTIONS ///////////////////////////////////

// typeof with array support http://bonta-kun.net/wp/2007/07/05/javascript-typeof-with-array-support/
function typeOf(obj) {
  if (typeof(obj)=='object') { // obj!==null && 
    if (obj.length) {
      return 'array';
	} else {
      return 'object';
	}
  } else {
	  return typeof(obj);
	}
}

function in_array(arr, obj) {
   if (arr && arr.length>0) {
	  for(var i=0; i<arr.length; i++) {
		if (arr[i] == obj) return true;
	  }
   } else {
	   return false;
   }
}

function dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1, property.length - 1);
    }
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}
/*

// So you can have an array of objects like this:

var People = [
    {Name: "Name", Surname: "Surname"},
    {Name:"AAA", Surname:"ZZZ"},
    {Name: "Name", Surname: "AAA"}
];

...and it will work when you do:

People.sort(dynamicSort("Name"));
People.sort(dynamicSort("Surname"));
People.sort(dynamicSort("-Surname"));
I wouldn't recommend changing a native object prototype but just to give an example so you can implement it on your 

own objects (For the environments that support it, you can also use Object.defineProperty, which doesn't have the 

negative side-effects of fiddling with a native object's prototype):

*/

Array.prototype.sortByProperty = function(property) {
    return this.sort(dynamicSort(property))
}

// http://wolfram.kriesing.de/blog/index.php/2008/javascript-remove-element-from-array
Array.prototype.remove = function(toRemove) {
	var arrCopy = this;
	var indx = arrCopy.indexOf(toRemove); // Find the index
	if(indx!=-1) arrCopy.splice(indx, 1); // Remove it if really found!
	return arrCopy;
}

///////////// new foreach function ////////
/*
// copyright 2012 Michaël Duerinckx www.michd.me
(function () {
    "use strict";
 
    // Iterate over an Object, Array of String with a given callBack function
     //
     // @param {Object|Array|String} collection
     // @param {Function} callBack
     // @return {Null}
     //
    function forEach(collection, callBack) {
        var
            i = 0, // Array and string iteration
            iMax = 0, // Collection length storage for loop initialisation
            key = '', // Object iteration
            collectionType = '';
 
        // Verify that callBack is a function
        if (typeof callBack !== 'function') {
            throw new TypeError("forEach: callBack should be function, " + typeof callBack + "given.");
        }
 
        // Find out whether collection is array, string or object
        switch (Object.prototype.toString.call(collection)) {
        case "[object Array]":
            collectionType = 'array';
            break;
 
        case "[object Object]":
            collectionType = 'object';
            break;
 
        case "[object String]":
            collectionType = 'string';
            break;
 
        default:
            collectionType = Object.prototype.toString.call(collection);
            throw new TypeError("forEach: collection should be array, object or string, " + collectionType + " given.");
        }
 
        switch (collectionType) {
        case "array":
            for (i = 0, iMax = collection.length; i < iMax; i += 1) {
                callBack(collection[i], i);
            }
            break;
 
        case "string":
            for (i = 0, iMax = collection.length; i < iMax; i += 1) {
                callBack(collection.charAt(i), i);
            }
            break;
 
        case "object":
            for (key in collection) {
                // Omit prototype chain properties and methods
                if (collection.hasOwnProperty(key)) {
                    callBack(collection[key], key);
                }
            }
            break;
 
        default:
            throw new Error("Continuity error in forEach, this should not be possible.");
        }
 
        return null;
    }
 
    //Example uses
 
    // Array example
    forEach(["a", "b", "c"], function (value, index) {
        console.log(index + ": " + value);
    });
 
    // Object example
    forEach({"foo": "bar", "barfoo": "foobar"}, function (value, key) {
        console.log(key + ": " + value);
    });
 
    // String example
    forEach("Hello, world!", function (character, index) {
        console.log(index + ": " + character);
    });
 
}());
*/