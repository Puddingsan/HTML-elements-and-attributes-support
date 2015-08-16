
var nativeTypes = {
	
	Safari: {
		blockquote: "Blockquote",
	},

	Opera: {},

	Firefox: {},

	Chrome: {
//		foo: "bar",
	},

	IE: {
		abbr: "Phrase",
		acronym: "Phrase",
		address: "Block",
		b: "Phrase",
		bdo: "Phrase",
		big: "Phrase",
		blink: "Phrase",
		blockquote: "Block",
		center: "Block", 
		cite: "Phrase", 
		code: "Phrase", 
		dd: "DD", 
		dfn: "Phrase", 
		dt: "DT", 
		em: "Phrase", 
		i: "Phrase", 
		kbd: "Phrase", 
		keygen: "Block", 
		listing: "Block", 
		nobr: "Phrase",
		plaintext: "Block", 
		rp: "Phrase", 
		rt: "Phrase", 
		ruby: "Phrase", 
		s: "Phrase", 
		samp: "Phrase", 
		small: "Phrase", 
		strike: "Phrase", 
		strong: "Phrase", 
		sub: "Phrase", 
		sup: "Phrase", 
		td: "TableDataCell", 
		th: "TableHeaderCell", 
		thead: "TableSection",
		tt: "Phrase", 
		u: "Phrase", 
		var: "Phrase", 
		xmp: "Block"
	},
// base list
	Base: {
		a: "Anchor",
		abbr: "",
		acronym: "",
		address: "",
		article: "",
		aside: "",
		b: "",
	//	b: "Bold",
		basefont: "BaseFont",
		bdi: "",
		bdo: "",
		bgsound: "BGSound",
		big: "",
		blink: "",
		blockquote: "Quote",
		br: "BR",
		caption: "TableCaption",
		center: "",
		cite: "",
		code: "",
		col: "TableCol", // col, colgroup
		colgroup: "TableCol", // col, colgroup
		dd: "",
		del: "Mod", // ins, del
		dfn: "",
		dir: "Directory",
		dl: "DList",
		dt: "",
		datalist: "DataList",
		em: "",
		fieldset: "FieldSet",
		figcaption: "",
		figure: "",
		footer: "",
		frameset: "FrameSet",
		h1: "Heading",
		h2: "Heading",
		h3: "Heading",
		h4: "Heading",
		h5: "Heading",
		h6: "Heading",
		header: "",
		hgroup: "",
		hr: "HR",
		html: "Html", 
		i: "",
		iframe: "IFrame",
		image: "",
		img: "Image",
		ins: "Mod", // ins, del
		isindex: "IsIndex",
		li: "LI",
		listing: "Pre",
		kbd: "",
		main: "",
		mark: "",
		menuitem: "MenuItem",
		nav: "",
		nextid: "NextId",
		nobr: "",
		noembed: "",
		noframes: "",
		noscript: "",
		ol: "OList",
		optgroup: "OptGroup",
		p: "Paragraph",
		plaintext: "Pre",
		q: "Quote",
		rp: "",
		rt: "",
		ruby: "",
		s: "",
		samp: "",
		section: "",
		small: "",
		strike: "",
		strong: "",
		sup: "",
		sub: "",
		summary: "",
		tbody: "TableSection", 
		td: "TableCell", 
		textarea: "TextArea",
		tfoot: "TableSection", 
		th: "TableCell", 
		thead: "TableSection", 
		tr: "TableRow",
		tt: "",
		u: "",
		ul: "UList",
		var: "",
		wbr: "",
		xmp: "Pre"
	}
},
attribsMap = {
	// array members: 0 - still supported, 1 - deprecated, 2 - replacement method (new attr or "css"), 3 - css array / other repl. options / error message if applicabe (args[2]===false)
	abbr: [null, "td th", "title"], // th.abbr or td.title
	accept: ["input", "form"], //	List of types the server accepts, typically a file type. now used on input[type=file] only
	acceptCharset: ["form"], //	List of supported charsets.
	accessKey: ["global"], //	Defines a keyboard shortcut to activate or add focus to the element.
	action: ["form isindex"], //	The URI of a program that processes the information submitted via the form.
	align: [null, "applet caption col colgroup div embed h1 h2 h3 h4 h5 h6 hr iframe img input legend object p spacer table tbody td tfoot th thead tr", "css", ["textAlign"]], //	Specifies the horizontal alignment of the element. (derprecated)
	aLink: [null, "body", "css", ["a:active"]],
//	allowFullscreen: ["iframe"],
	alt: ["area img input", "applet"], //	 Alternative text in case an image can't be displayed.
	archive: [null, "applet object"], // null, Use the data and type attributes to invoke plugins. To set parameters with these names in particular, the param element can be used
	async: ["script"], //Indicates that the script should be executed asynchronously.
	autobuffer: [null, "audio video"], //	, "video"
//	autocapitalize: ["form input textarea"], // safari moile only, Chrome detected aug 2015
	autocomplete: ["form input textarea"], //	Indicates whether controls in this form can by default have their values automatically completed by the browser.
//	autocorrect: ["input"], // safari
	autofocus: ["button input keygen select textarea"], //	The element should be automatically focused after the page loaded.
	autoplay: ["audio video"], //	The audio or video should play as soon as possible.
	autosave: ["input"], //	Previous values should persist dropdowns of selectable values across page loads.
	axis: [null, "td th"], // Use the scope attribute on the relevant th instead
	background:[null, "body frame iframe", "css", ["backgroundImage"]],
	balance: ["bgsound"],
	bgColor: [null, "body col colgroup marquee table tbody tfoot td th thead tr", "css", ["backgroundColor"]], //	Background color of the element. Note: This is a legacy attribute. Please use the CSS background-color property instead.
	behavior: ["marquee"],
	border: [null, "img object table", "css", ["borderWidth"]], //	The border width. Note: This is a legacy attribute. Please use the CSS border property instead.
	bottomMargin: [null, "body", "css", ["marginBottom"]],
	cellPadding: [null, "table", "css", "borderCollapse"], // needs some juggling with css on descendants (padding)
	cellSpacing: [null, "table", "css", "padding"], //
	challenge: ["keygen"], //	A challenge string that is submitted along with the public key.
	ch: [null, "col colgroup tbody td tfoot th thead tr", "css"], // css
	chOff: [null, "col colgroup tbody td tfoot th thead tr", "css"], // css
	charset: ["meta script", "a link"], //	Declares the character encoding of the page or script.
	checked: ["command input menuitem"], //	Indicates whether the element should be checked on page load.
	cite: ["blockquote del ins q"], //	Contains a URI which points to the source of the quote or change.
	className: ["global"], //	Often used with CSS to style elements with common properties.
	classId: [null, "object"], // null Use the data and type attributes to invoke plugins. To set parameters with these names in particular, the param element can be used
	clear: [null, "br", "css", ["clear"]], // css
	code: [null, "applet object"], // null, Use the data and type attributes to invoke plugins. To set parameters with these names in particular, the param element can be used
	codeBase: [null, "applet object"], // null Use the data and type attributes to invoke plugins. To set parameters with these names in particular, the param element can be used
//	codeTag: [null, "object"], //
	codeType: [null, "object"], // Use the data and type attributes to invoke plugins. To set parameters with these names in particular, the param element can be used
	color: [null, "basefont font", "css", ["color"]], //	This attribute sets the text color using either a named color or a color specified in the hexadecimal #RRGGBB format. Note: This is a legacy attribute. Please use the CSS color property instead.
	cols: ["textarea frameset", "pre"], //	Defines the number of columns in a textarea. // frame
	colSpan: ["td th"], //	The colspan attribute defines the number of columns a cell should span.
	command: ["menuitem"],
	compact: ["dir menu", "ol ul"], // dl, ol, ul => css, else null, dl is non-standardised
	content: ["meta"], //	A value associated with http-equiv or name depending on the context.
	contentEditable: ["global"], //	Indicates whether the element's content is editable.
	contextMenu: ["global"], //	Defines the ID of a <menu> element which will serve as the element's context menu.
	controls: ["audio video"], //	Indicates whether the browser should show playback controls to the user.
	coords: ["area", "a"], //		A set of values specifying the coordinates of the hot-spot region.
	crossOrigin: ["img link script video"],
	data: ["object"], //	 Specifies the URL of the resource.
	dataPageSize: [null, "table"], // null obsoete
	dataset: ["global"], // Lets you attach custom attributes to an HTML element. (data-*)
	dateTime: ["del ins time"], //	Indicates the date and time associated with the element.
	declare: [null, "object"], // Repeat the object element completely each time the resource is to be reused
	default: ["track menuitem"], //	Indicates that the track should be enabled unless the user's preferences indicate something different.
	defer	: ["script"], //		Indicates that the script should be executed after the page has been parsed.
	dir: ["global"], //	Defines the text direction. Allowed values are ltr (Left-To-Right) or rtl (Right-To-Left)
	direction: ["marquee"],
	dirName: ["input textarea"], //		 
	disabled: ["button command fieldset input keygen menuitem optgroup option select style textarea"], //	Indicates whether the user can interact with the element.
	download: ["a area"], //	Indicates that the hyperlink is to be used for downloading a resource.
	draggable: ["global"], //	Defines whether the element can be dragged.
	dropzone: ["global"], //	Indicates that the element accept the dropping of content on it.
	enctype: ["form"], //	Defines the content type of the form date when the method is POST.
	event: [null, "script"],  // null Use DOM Events mechanisms to register event listeners
	face: [null, "font basefont"], //	Deprecated attribute
	htmlFor: ["label output", "script"], //	Describes elements which belongs to this one. // null Use DOM Events mechanisms to register event listeners
	form: ["button fieldset input keygen label meter output progress select textarea"], //	 Indicates the form that is the owner of the element.
	formAction: ["button input"], //	Indicates the action of the element, overriding the action defined in the <form>.
	formEnctype: ["button input"],
	formMethod: ["button input"],
	formNoValidate: ["button input"],
	formTarget: ["button input"],
	frame: [null, "table"], //
	frameBorder: ["frame", "iframe"],
//	hAlign: [null, "col thead td th tr div", "css", ["textAlign"]],
	hAlign: [null, null, "css", ["textAlign"]], // looks like not supported anymore [confirm]
	headers: ["td th"], //	 IDs of the <th> elements which applies to this element.
	height: ["canvas embed iframe img input marquee object spacer video", "td th applet div frame", "css", ["height"]], //	Note: In some instances, such as <div>, this is a legacy attribute, in which case the CSS height property should be used instead. In other cases, such as <canvas>, the height must be specified with this attribute.
	// when using height with input type:image it refers to the height of the image
	hidden: ["global"], // attribute	Prevents rendering of given element, while keeping child elements, e.g. script elements, active.
	high: ["meter"], //	Indicates the lower bound of the upper range.
	href: ["a area base link"], //The URL of a linked resource.
	hreflang	: ["a area link"], //Specifies the language of the linked resource.
	hspace: [null, "applet div embed iframe input img marquee object", "css", ["paddingLeft", "paddingRight"]], //
	httpEquiv: ["meta"], //	 
	icon: ["command menuitem"], // Specifies a picture which represents the command.
	id: ["global"],  //	Often used with CSS to style a specific element. The value of this attribute must be unique.
//	incremental: ["input"], // debounced event firing on search inputs (Safari?)
	indeterminate: ["input"],
//	inputMode: ["input"], // switches between keyboard layouts for portable devices
	integrity: ["link script"],
	isMap: ["img", "input"], // Indicates that the image is part of a server-side image map.// null Unnecessary. Omit it altogether. All input elements with a type attribute in the Image Button state are processed as server-side image maps
//	itemprop: ["global"], //
	keytype: ["keygen"], // Specifies the type of key generated.
	kind: ["track"], // Specifies the kind of text track.
	label: ["command track menuitem optgroup option", "menu tr"], // Specifies a user-readable title of the text track.
	lang: ["global"],  //	Defines the language used in the element.
	language: [null, "script"], // 	Defines the script language used in the element.// convert to type
	leftMargin: [null, "body", "css", ["marginLeft"]],
	link:[null, "body", "css", ["a:link"]],
	list: ["input"], // Identifies a list of pre-defined options to suggest to the user.
	longDesc: ["img", "frame iframe"], // <a>
	loop: ["audio bgsound marquee video"], // 	Indicates whether the media should start playing from the start when it's finished.
	low: ["meter"], // 	Indicates the upper bound of the lower range.
	lowsrc: [null, "img"], // progressive jpg
	manifest: ["html"], // Specifies the URL of the document's cache manifest.
	max: ["input meter progress"], // Indicates the maximum value allowed.
	maxLength: ["input textarea"], // Defines the maximum number of characters allowed in the element. // email password search tel text url
	marginHeight: ["frame", "body iframe", "css", ["marginBottom", "marginTop"]], // css
	marginWidth: ["frame", "body iframe", "css", ["marginLeft", "marginRight"]], 
	media: ["a area link style source"], // Specifies a hint of the media for which the linked resource was designed.// null Use script to select the media resource(s) to use
	method: ["form"], // Defines which HTTP method to use when submitting the form. Can be GET (default) or POST.
//	methods: [null, "a link"], // null Use the HTTP OPTIONS feature instead
	min: ["input meter"], // Indicates the minimum value allowed.
	minLength: ["input textarea"],
//	mozActionHint: ["input"], // enter key styling on mobile devices
//	mozApp: ["iframe"],
//	mozBrowser: ["iframe"],
//	mozOpaque: ["canvas"],
	multiple: ["input select"], // Indicates whether multiple values can be entered in an input of the type email or file.
	muted: ["audio video"],
	name: ["button form fieldset frame iframe input keygen map meta object output param select textarea", "a area applet embed img option"], // Name of the element. For example used by the server to identify the fields in form submits. // null/Use the id attribute instead
	noHref: [null, "area"], // This attribute indicates that the form shouldn't be validated when submitted. // null obsolete
	noResize: ["frame"], // 
	noShade: [null, "hr"], // deprecated
	noValidate: ["form"], // This attribute indicates that the form shouldn't be validated when submitted.
//	noWrap: ["dd", "td th", "css", ["whiteSpace"]], // white-space: nowrap;
	noWrap: ["dd", "td th", "css", ["whiteSpace"]], // white-space: nowrap;
	object: [null, "applet"], // null
	open: ["details dialog"], //	Indicates whether the details will be shown on page load.
	optimum: ["meter"], // Indicates the optimal numeric value.
	pattern: ["input"], //Defines a regular expression which the element's value will be validated against.
	ping: ["a area"], //	 
	placeholder: ["input textarea"], // Provides a hint to the user of what can be entered in the field.
	played: ["audio video"],
	poster: ["video"], //	A URL indicating a poster frame to show until the user plays or seeks.
	preload: ["audio video"], // Indicates whether the whole resource, parts of it or nothing should be preloaded.
	profile: [null, "head"], // depercated in html5
	prompt: ["isindex"],
	pubDate: ["time"], // Indicates whether this date and time is the date of the nearest <article> ancestor element.
	radioGroup: ["command menuitem"], //
	readOnly: ["input textarea", "iframe"], // Indicates whether the element can be edited.
	rel	: ["a area link"], // Specifies the relationship of the target object to the link object.
	required: ["input select textarea"], // Indicates whether this element is required to fill out or not.
	rev: [null, "a link"], //null Use the rel attribute instead, with an opposite term. (For example, instead of rev="made", use rel="author"
	rightMargin: [null, "body", "css", ["marginRight"]], // css
	reversed: ["ol"], // Indicates whether the list should be displayed in a descending order instead of a ascending.
	rows: ["textarea frameset"], // Defines the number of rows in a textarea. // frame
	rowSpan: ["td th"], //	Defines the number of rows a table cell should span over.
//	results: ["input"], // safari
	reversed: ["ol"],
	rules: [null, "table"], //
	sandbox: ["iframe"], // 
	scheme: [null, "meta"], //	  "Use only one scheme per field, or make the scheme declaration part of the value"
	scope: ["th", "td"], //	 Use th elements for heading cells
	scoped: ["style"], // 
	scrollAmount: ["marquee"],
	scrollDelay: ["marquee"],
	scrolling: ["frame", "iframe"],
	seamless: ["iframe"], // 
	select: ["content"], // 
	selected: ["option"], // Defines a value which will be selected on page load.
	shape: ["area", "a"], //   Use area instead of a for image maps
	size: ["input select spacer", "applet hr font basefont", "css"], //Defines the width of the element (in pixels). If the element's type attribute is text or password then it's the number of characters. deprecated elements added.
	sizes: ["link img source"], // 
	span: ["col colgroup"], //	 
	spellcheck: ["global"], // 	Indicates whether spell checking is allowed for the element.
	src: ["audio bgsound embed frame iframe img input script source track video"], //The URL of the embeddable content.
	srcdoc: ["iframe"], //	 
	srcLang: ["track"], //	 
	srcset: ["img source"], // 
	standby: [null, "object"], // null Optimise the linked resource so that it loads quickly or, at least, incrementally
	start: ["ol"], //	Defines the first number if other than 1. no replacement  MAYBE css ["counterReset"]
	step: ["input"], //	 
	style: ["global"], //	Defines CSS styles which will override styles previously set.
	summary: [null, "table"], //  null (re-code)
	tabIndex: ["global"], //		, "area object"	// Overrides the browser's default tab order and follows the one specified instead.
	target: ["a area base form"], // 
	text: [null, "body", "css", ["color"]],
	title: ["global style"], //	Text to be displayed in a tooltip when hovering over the element.
	topMargin: [null, "body", "css", ["marginTop"]], // css
	trueSpeed: ["marquee"],
	type: ["a area button input command embed link menu menuitem object ol script source spacer style type", "li ul param"], // Defines the type of the element. // null/param: Use the name and value attributes without declaring value types
	typeMustMatch: ["object"],
	urn: [null, "link", "href"], // => href
	useMap	: ["img object", "input"], // <img>
	value: ["button data input li meter option output progress param"], // Defines a default value which will be displayed in the element on page load. // ??
	valueType: [null, "param"], // null Use the name and value attributes without declaring value types
	version: [null, "html"],
	vLink: [null, "body", "css", ["a:visited"]],
	vAlign: [null, "col colgroup tbody thead tfoot td th thead tr div", "css", ["verticalAlign"]],
	volume: ["audio bgsound"],
	vspace: [null, "applet div embed iframe input img marquee object", "css", ["paddingTop", "paddingBottom"]], // css
	width: ["canvas embed iframe img input marquee object spacer video", "col basefont colgroup frame hr table td th applet pre div", "css", ["width"]], // Note: In some instances, such as <div>, this is a legacy attribute, in which case the CSS width property should be used instead. In other cases, such as <canvas>, the width must be specified with this attribute.
	wrap: ["textarea", "pre"], // Indicates whether the text should be wrapped.
	xmlns: ["html"]
},
requiredAttrMap = {
//	a: "href", // no longer mandatory
	applet: "width",
//	area: "href alt",
	basefont: "size",
	bgsound: "src",
	form: "action",
	frame: "src",
	img: "src alt",
	input: "type",
	link: "href",
	map: "name",
	meta: "content",
	optgroup: "label",
	param: "name",
	script: "type",
	style: "type",
	textarea: "cols rows"
},
stdTags = "a abbr address area b base bdo blockquote body br button caption cite code col colgroup dd del dfn div dl dt em fieldset form h1 h2 h3 h4 h5 h6 head hr html i iframe img input ins kbd label legend li link map meta noscript object ol optgroup option p param pre q samp script select span strong style sub sup table tbody td textarea tfoot th thead title tr tt u ul var",
deprTags = "applet acronym basefont bgsound big blink center command dir font frame frameset image isindex keygen listing marquee menu multicol nextid nobr noembed noframes plaintext rb s small spacer strike xmp",
html5tags = "audio bdi canvas data datalist details dialog embed menuitem meter output picture progress rp rt ruby source time track video wbr",
html5semantics = "article aside figcaption figure footer header hgroup main mark nav section summary",
webComponents = "content decorator element shadow template",

// secondary attribute matrices
// newest attributes
html5attribs = {
	async: "script",
	autobuffer: "audio video",
	autocomplete: "button input textarea form",
	autofocus: "button input keygen select textarea",
	autoplay: "audio video",
	autosave: "input",
	challenge: "keygen",
	charset: "meta",
	checked: "menuitem",
	command: "menuitem",
	contentEditable: true,
	contextMenu: true,
	controls: "audio video",
	crossOrigin: "audio img link script video",
	dataset: true,
	dateTime: "del ins time",
	"default": "menuitem track",
	disabled: "fieldset keygen menuitem",
	download: "a area",
	draggable: true,
	dropzone: true,
	"for": "output",
	form: "button fieldset input keygen label meter object output progress select textarea",
	formAction: "input button",
	formEnctype: "button input",
	formMethod: "button input",
	formNoValidate: "button input",
	formTarget: "button input",
	height: "canvas video",
	hreflang: "area",
	high: "meter",
	htmlFor: "output",
	icon: "menuitem",
	incremental: "input", // debounced event firing on search inputs
	indeterminate: "input",
	inputMode: "input",
	integrity: "link script",
	keytype: "keygen",
	kind: "track",
	label: "menuitem track",
	list: "input",
	loop: "audio video",
	low: "meter",
	manifest: "html",
	max: "input meter progress",
	min: "input meter",
	maxLength: "textarea",
	minLength: "input textarea",
	media: "a area source",
	multiple: "input",
	muted: "audio video",
	name: "fieldset keygen output",
	noValidate: "form",
	mozOpaque: "canvas",
	open: "details dialog",
	optimum: "meter",
	pattern: "input",
	ping: "a",
	preload: "audio video",
	placeholder: "input textarea",
	played: "audio video",
	poster: "video",
	pubDate: "time",
	radioGroup: "menuitem",
	readOnly: "input",
	rel: "area",
	required: "input select textarea",
	reversed: "object ol",
	sandbox: "iframe",
	seamless: "iframe",
	sizes: "img link source",
//	spellcheck: "input textarea",
	spellcheck: true,
	src: "audio source track video",
	srcdoc: "iframe",
	srcLang: "track", //	 
	srcset: "img source",
	start: "object ol",
	step: "input",
	type: "ol source menuitem",
	typeMustMatch: "object",
	value: "data li meter option output progress",
	volume: "audio video",
	width: "canvas video",
	wrap: "textarea",
	xMozErrormessage: "input"
},
// tag name list, deprecated since
html5attribsDepr = {
	abbr: ["td th"],
	accept: ["form", "5"],
	accessKey: ["area input", "5"],
	align: ["applet caption col colgroup div embed h1 h2 h3 h4 h5 h6 hr iframe img input legend object p table tbody td tfoot th thead tr", "4.01"], //	,  div - 5, th - 4
	align: ["div", "5"],
	archive: ["object", "5"],
	axis: ["td th"],
	background: ["frame"],
	bgColor: ["tbody td tr", "4.01"],
	border: ["img object", "4.01"],
	ch: ["col colgroup tbody td tfoot th thead tr", "4.01"],
	charset: ["a", "5"],
	chOff: ["col colgroup tbody td tfoot th thead tr", "4.01"],
	cellPadding: ["table"], // needs some juggling with css on descendants (padding)
	cellSpacing: ["table"], //
	classId: ["object", "5"],
	clear: ["br", "4.01"],
	codeBase: ["object", "5"],
//	codeTag: ["object", "5"],
	codeType: ["object", "5"],
	coords: ["a", "5"],
	declare: ["object", "5"],
	frame: ["table"], //
	frameBorder: ["iframe", "4"],
	hAlign: ["col colgroup td th thead tr", "4.01"],
	height: ["frame"],
	hspace: ["img", "4.01"],
	longDesc: ["iframe frame", "5"],
	marginHeight: ["iframe", "5"],
	marginWidth: ["iframe", "5"],
	name: ["a area img", "5"],
	noHref: ["area", "5"],
	noShade: ["hr"],
	profile: ["head", "5"],
	rev: ["a", "5"],
	rules: ["table"], //
	shape: ["a", "5"],
	size: ["hr", "4.01"],
	scope: ["td"],
	scrolling: ["iframe", "5"],
	standby: ["object", "5"],
	summary: ["table"], //
	tabIndex: ["area object", "5"], // 
	type: ["ul"],
	useMap: ["input", "5"],
	vAlign: ["col colgroup tbody td th thead tr", "4.01"],
	version: ["html", "4.01"],
	vspace: ["img", "4.01"],
	width: ["col colgroup frame hr td th", "4.01"], // colgroup, hr deprecated in html5, special values		
},
// tagstring, since version number
attribsObsolete = {
	abbr: ["td th", "5"],
	accessKey: ["input", "5"],
	archive: ["object", "5"],
	align: ["caption col h1 h2 h3 h4 h5 h6 hr iframe img tbody td th thead tr", "5"],
	autobuffer: ["audio video"],
	axis: ["td th", "5"],
	background: ["frame"],
	bgColor: ["tr", "5"],
	border: ["img object", "5"],
	ch: ["col colgroup tbody td tfoot th thead tr", "5"],
	charset: ["a", "5"],
	chOff: ["col colgroup tbody td tfoot th thead tr", "5"],
	classId: ["object", "5"],
	clear: ["br", "4.01"],
	codeBase: ["object", "5"],
//	codeTag: ["object", "5"],
	codeType: ["object", "5"],
	coords: ["a", "5"],
	declare: ["object", "5"],
	height: ["frame"],
	hspace: ["img", "5"],
	longDesc: ["iframe frame", "5"],
	noHref: ["area", "5"],
	noShade: ["hr", "5"],
	name: ["a img", "5"],
	profile: ["head", "5"],
	rev: ["a", "5"],
	shape: ["a", "5"],
	size: ["hr", "5"],
	standby: ["object", "5"],
	tabIndex: ["col object", "5"],
	vAlign: ["tbody th thead tfoot tr", "5"],
	vspace: ["img", "5"],
	useMap: ["input", "5"],
	width: ["basefont col frame hr", "5"]
},
attribsToKebabCase = "acceptCharset httpEquiv xMozErrormessage formatDetection".split(" "),
// tag name, user agent
attribsNonStandard = {
	allowFullscreen: ["iframe"], // Firefox""
	autobuffer: ["audio video"],
	autocapitalize: ["form input textarea", "WK"], // safari mobile
	autocomplete: ["button", "FF"],
	autocorrect: ["input", "SAF"], // safari
	bgColor: ["col colgroup tbody td tfoot th thead tr"],
	borderColor: [true, "IE"], // string 
	borderColorDark: [true, "IE"], // string 
	borderColorLight: [true, "IE"], 
	color: ["hr"],
	cols: ["pre"],
	compact: ["dl"],
	datafld: ["a applet button div fieldset frame iframe img input label legend marquee object param select textarea", "IE"],
	dataFormatAs: ["button div input label legend marquee object option select span table", "IE"], // null Use script and a mechanism such as XMLHttpRequest to populate the page
	datasrc: ["a applet button div frame iframe img input label legend marquee object option select span table textarea", "IE"],
	disabled: ["link"],
	inputMode: ["input", "MOB"],
	mayscript: ["applet", "FF"], // Netscape
	methods: ["a link", "IE"],
	mozActionHint: ["input", "FFOS"], // mobile devices MOB
	mozAllowFullscreen: ["iframe", "FF"],
	mozApp: ["iframe", "FFOS"], // Firefox OS
	mozBrowser: ["iframe", "FFOS"],
	mozOpaque: ["canvas", "FF"],
//	nowrap: ["dd"],
	remote: ["iframe", "FFOS"],
	results: ["input", "SAF"],
	shape: ["area", "IE"],
	src: ["applet", "IE"],
	target: ["link"],
	urn: ["a", "IE"],
	webkitAllowFullscreen: ["iframe", "WK"],
	wrap: ["pre"],
	xMozErrormessage: ["input", "FF"]
},
// match codes to Browser object property
uaName = {
	CH: "Chrome",
	FF: "Firefox",
	OP: "Opera",
	SAF: "Safari",
	IE: "IE",
	FFOS: "FirefoxOS",
	SM: "SafariMobie",
	MOB: "Mobile",
	WK: "Webkit"
},
// dependant
// attribs, required attribute
attribDepend = {
	area: ["hreflang media rel target type", "href"],
	a: ["hreflang rel target type", "href"]
},
html5events = {
	onafterprint: "body",
	onbeforeprint: "body",
	onbeforeunload: "body",
//	onblur: "body",
	onerror: "body",
//	onfocus: "body",
	onhashchange: "body",
	onlanguagechange: "body",
	onmessage: "body",
	onoffline: "body",
	ononline: "body",
	onpopstate: "body",
	onredo: "body",
	onstorage: "body",
	onundo: "body"
},
globalAttribsStr = "accessKey className contentEditable contextMenu dataset dir draggable dropzone hidden id lang spellcheck style tabIndex title translate"+(Browser.IE ? " disabled language" : ""),
attribsFalsePositives = {
	// not attributes, but function properties
	content: "template",
	form: "legend option object",
	item: "select",
	rows: "table tbody tfoot thead",
	select: "input textarea",
	start: "marquee",
	text: "a option script title",
	type: "fieldset keygen link output select textarea",
	value: "select textarea",
	width: "listing xmp" ,// some browsers (i.e. Chrome) convert these tags to a <pre>
	wrap: "listing xmp"
},
// Microdata model, not used as it emulates the fate of betamax :-(
microdataAttribs = "item itemid itemprop itemref itemscope itemtype".split(" ");
// add conditions per browser
function updateObj(refObj) {
	tmpObj = nativeTypes.Base;
	modObj = nativeTypes[refObj] || false;
//	if (!modObj) console.log("could not ceate lookup object using "+refObj);
	if (typeof modObj == "object") {
		for (z in modObj) {
			if (modObj.hasOwnProperty(z)) tmpObj[z] = modObj[z];
		}
	}
	return tmpObj;
}
// returns: 1st array supported, 2nd array deprecated
function getProperties(tagName) {
	var propSupp = [], propDepr = [];
	for (var b in attribsMap) {
		if (wordInString(tagName, attribsMap[b][0])) {
			propSupp.push(b); 
		}
		if (wordInString(tagName, attribsMap[b][1])) {
			propDepr.push(b);
		}
	}
	return [propSupp, propDepr];
}


var propNamesExpand={
	ch:"char",
	chOff:"charoff",
	htmlFor:"for",
	className:"class",
	dataset: "data-*"
}

var newInputTypes = "color date datetime datetime-local email month number range search tel time url week".split(" ");

var inputAttribs = {
	accept: ["file"],
	accessKey: [null], // deprecated in html5
	checked: ["radio checkbox"],
	formAction: ["submit image"],
	formEnctype: ["submit image"],
	formMethod: ["submit image"],
	formNoValidate: ["submit image"],
	formTarget: ["submit image"],
	height: ["image"],
	incremental: ["search", "SAF"],
	inputMode: ["email password text url" , "MOB"], // typeof keyboard layout to render //
	list: ["color date datetime datetime-local email image month number password range reset search submit tel text time url week"], //  (, submit?)
	max: ["number date datetime datetime-local range"], // numeric vaues
	maxLength: ["email password search tel text url"], // overrides the size attribute
	min: ["number date datetime datetime-local range"],
	minLength: ["email password search tel text url"], 
	mozActionHint: ["submit button", "FF"],
	multiple: ["email file"],
	pattern: ["email search tel text url"],
	placeholder: ["email search tel text url"],
	readOnly: ["date datetime datetime-local email image month number password search tel text time url week"],
	required: ["checkbox color date datetime datetime-local email file month number password radio range search tel text time url week"],
	results: ["search", "SAF"],
	size: ["email password search tel text url"], // text/password: size in chars, otherwise pixels, defaults to 20
	src: ["image"],
	step: ["number range"],
	width: ["image"],
	xMozErrormessage: ["input", "FF"]
},
// see main function for inculding some globals dependent on element type, these belong to IE:
//
//    HTMLBlockElement: cite, dateTime
//
//    HTMLPhraseElement:  clear, width
//
inputAttribsGlobal = {
	autocapitalize: "WK",
	autocomplete: "FF",
	autocorrect: "SAF",
	autofocus: true,
	autosave: true, // persistent data
	disabled: true,
	form: true,
	name: true,
	spellcheck: true,
	tabIndex: true,
	usemap: true, // deprecated in html5
	value: true,
	xMozErrormessage: "FF"
}