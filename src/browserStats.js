// 2015-08-21-22:00
var browserStats = {
	Chrome: {"ua":"Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36","baseua":"Chrome","data":[{"name":"Standard tags","elms":76,"badelmsattrs":[],"attrs":333,"badattrs":[{"elm":"a","attr":"media"},{"elm":"area","attr":"download"},{"elm":"area","attr":"hreflang"},{"elm":"area","attr":"media"},{"elm":"area","attr":"rel"},{"elm":"html","attr":"manifest"},{"elm":"html","attr":"xmlns"},{"elm":"iframe","attr":"seamless"},{"elm":"input","attr":"autosave"},{"elm":"link","attr":"integrity"},{"elm":"object","attr":"typeMustMatch"},{"elm":"script","attr":"integrity"},{"elm":"style","attr":"scoped"},{"elm":"textarea","attr":"autocomplete"}],"vendattrs":[{"elm":"input","attr":"autocapitalize","vend":"Webkit"},{"elm":"textarea","attr":"autocapitalize","vend":"Webkit"}],"nonstandardattrs":[{"elm":"dl","attr":"compact"},{"elm":"hr","attr":"color"},{"elm":"iframe","attr":"allowFullscreen"},{"elm":"link","attr":"disabled"},{"elm":"link","attr":"target"},{"elm":"td","attr":"bgColor"},{"elm":"th","attr":"bgColor"},{"elm":"tr","attr":"bgColor"}],"otherattrs":[]},{"name":"Deprecated tags","elms":30,"badelmsattrs":[{"elm":"basefont"},{"elm":"bgsound"},{"elm":"blink"},{"elm":"command"},{"elm":"image"},{"elm":"isindex"},{"elm":"multicol"},{"elm":"nextid"},{"elm":"rb"},{"elm":"spacer"}],"attrs":70,"badattrs":[{"elm":"basefont","attr":"color"},{"elm":"basefont","attr":"face"},{"elm":"basefont","attr":"size"},{"elm":"basefont","attr":"width"},{"elm":"command","attr":"checked"},{"elm":"command","attr":"disabled"},{"elm":"command","attr":"icon"},{"elm":"command","attr":"label"},{"elm":"command","attr":"radioGroup"},{"elm":"command","attr":"type"}],"vendattrs":[],"nonstandardattrs":[],"otherattrs":[]},{"name":"HTML5 tags","elms":21,"badelmsattrs":[{"elm":"data"},{"elm":"menuitem"},{"elm":"time"}],"attrs":68,"badattrs":[{"elm":"meter","attr":"form"},{"elm":"progress","attr":"form"},{"elm":"track","attr":"srcLang"}],"vendattrs":[],"nonstandardattrs":[],"otherattrs":[{"elm":"audio","attr":"crossOrigin"},{"elm":"video","attr":"volume"}]},{"name":"HTML5 semantic tags","elms":12,"badelmsattrs":[],"attrs":0,"badattrs":[],"vendattrs":[],"nonstandardattrs":[],"otherattrs":[]},{"name":"Web Components","elms":5,"badelmsattrs":[{"elm":"decorator"},{"elm":"element"}],"attrs":1,"badattrs":[],"vendattrs":[],"nonstandardattrs":[],"otherattrs":[]}]},
	IE: {"ua":"Mozilla/5.0 (Windows NT 6.1; Trident/7.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; Tablet PC 2.0; InfoPath.2; .NET4.0E; rv:11.0) like Gecko","baseua":"IE","data":[{"name":"Standard tags","elms":76,"badelmsattrs":[{"elm":"blockquote"}],"attrs":333,"badattrs":[{"elm":"a","attr":"download"},{"elm":"a","attr":"media"},{"elm":"a","attr":"ping"},{"elm":"area","attr":"download"},{"elm":"area","attr":"hreflang"},{"elm":"area","attr":"media"},{"elm":"area","attr":"ping"},{"elm":"blockquote","attr":"cite"},{"elm":"html","attr":"manifest"},{"elm":"html","attr":"xmlns"},{"elm":"iframe","attr":"seamless"},{"elm":"iframe","attr":"srcdoc"},{"elm":"img","attr":"sizes"},{"elm":"img","attr":"srcset"},{"elm":"input","attr":"autosave"},{"elm":"input","attr":"dirName"},{"elm":"input","attr":"minLength"},{"elm":"link","attr":"crossOrigin"},{"elm":"link","attr":"integrity"},{"elm":"link","attr":"sizes"},{"elm":"object","attr":"typeMustMatch"},{"elm":"ol","attr":"reversed"},{"elm":"script","attr":"crossOrigin"},{"elm":"script","attr":"integrity"},{"elm":"style","attr":"scoped"},{"elm":"textarea","attr":"autocomplete"},{"elm":"textarea","attr":"dirName"},{"elm":"textarea","attr":"minLength"}],"vendattrs":[{"elm":"a","attr":"urn","vend":"IE"},{"elm":"area","attr":"shape","vend":"IE"},{"elm":"table","attr":"borderColor","vend":"IE"},{"elm":"table","attr":"borderColorDark","vend":"IE"},{"elm":"table","attr":"borderColorLight","vend":"IE"},{"elm":"td","attr":"borderColor","vend":"IE"},{"elm":"td","attr":"borderColorDark","vend":"IE"},{"elm":"td","attr":"borderColorLight","vend":"IE"},{"elm":"th","attr":"borderColor","vend":"IE"},{"elm":"th","attr":"borderColorDark","vend":"IE"},{"elm":"th","attr":"borderColorLight","vend":"IE"},{"elm":"tr","attr":"borderColor","vend":"IE"},{"elm":"tr","attr":"borderColorDark","vend":"IE"},{"elm":"tr","attr":"borderColorLight","vend":"IE"}],"nonstandardattrs":[{"elm":"dl","attr":"compact"},{"elm":"hr","attr":"color"},{"elm":"link","attr":"disabled"},{"elm":"link","attr":"target"},{"elm":"tbody","attr":"bgColor"},{"elm":"td","attr":"bgColor"},{"elm":"tfoot","attr":"bgColor"},{"elm":"th","attr":"bgColor"},{"elm":"thead","attr":"bgColor"},{"elm":"tr","attr":"bgColor"}],"otherattrs":[{"elm":"body","attr":"noWrap"},{"elm":"caption","attr":"vAlign"},{"elm":"div","attr":"noWrap"},{"elm":"dt","attr":"noWrap"},{"elm":"fieldset","attr":"align"},{"elm":"iframe","attr":"border"},{"elm":"iframe","attr":"noResize"},{"elm":"img","attr":"href"},{"elm":"img","attr":"loop"},{"elm":"img","attr":"start"},{"elm":"input","attr":"border"},{"elm":"input","attr":"loop"},{"elm":"input","attr":"lowsrc"},{"elm":"input","attr":"start"},{"elm":"object","attr":"alt"},{"elm":"object","attr":"object"},{"elm":"optgroup","attr":"form"},{"elm":"optgroup","attr":"selected"},{"elm":"optgroup","attr":"text"},{"elm":"optgroup","attr":"value"},{"elm":"table","attr":"background"},{"elm":"table","attr":"height"},{"elm":"td","attr":"background"},{"elm":"th","attr":"background"},{"elm":"tr","attr":"height"}]},{"name":"Deprecated tags","elms":30,"badelmsattrs":[{"elm":"command"},{"elm":"keygen"},{"elm":"multicol"},{"elm":"rb"},{"elm":"spacer"}],"attrs":70,"badattrs":[{"elm":"keygen","attr":"autofocus"},{"elm":"keygen","attr":"challenge"},{"elm":"keygen","attr":"disabled"},{"elm":"keygen","attr":"form"},{"elm":"keygen","attr":"keytype"},{"elm":"keygen","attr":"name"},{"elm":"keygen","attr":"autofocus"},{"elm":"keygen","attr":"challenge"},{"elm":"keygen","attr":"form"},{"elm":"keygen","attr":"keytype"}],"vendattrs":[{"elm":"frame","attr":"borderColor","vend":"IE"},{"elm":"frameset","attr":"borderColor","vend":"IE"}],"nonstandardattrs":[],"otherattrs":[{"elm":"applet","attr":"border"},{"elm":"applet","attr":"codeType"},{"elm":"applet","attr":"data"},{"elm":"applet","attr":"declare"},{"elm":"applet","attr":"form"},{"elm":"applet","attr":"standby"},{"elm":"applet","attr":"type"},{"elm":"applet","attr":"useMap"},{"elm":"dir","attr":"type"},{"elm":"frame","attr":"border"},{"elm":"frameset","attr":"border"},{"elm":"frameset","attr":"frameBorder"},{"elm":"frameset","attr":"name"},{"elm":"image","attr":"align"},{"elm":"image","attr":"alt"},{"elm":"image","attr":"border"},{"elm":"image","attr":"crossOrigin"},{"elm":"image","attr":"height"},{"elm":"image","attr":"href"},{"elm":"image","attr":"hspace"},{"elm":"image","attr":"isMap"},{"elm":"image","attr":"longDesc"},{"elm":"image","attr":"loop"},{"elm":"image","attr":"lowsrc"},{"elm":"image","attr":"name"},{"elm":"image","attr":"start"},{"elm":"image","attr":"useMap"},{"elm":"image","attr":"vspace"},{"elm":"isindex","attr":"form"}]},{"name":"HTML5 tags","elms":21,"badelmsattrs":[{"elm":"bdi"},{"elm":"data"},{"elm":"details"},{"elm":"dialog"},{"elm":"menuitem"},{"elm":"meter"},{"elm":"output"},{"elm":"picture"},{"elm":"time"}],"attrs":68,"badattrs":[{"elm":"source","attr":"sizes"},{"elm":"source","attr":"srcset"},{"elm":"track","attr":"srcLang"},{"elm":"video","attr":"crossOrigin"}],"vendattrs":[],"nonstandardattrs":[{"elm":"audio","attr":"autobuffer"},{"elm":"video","attr":"autobuffer"}],"otherattrs":[{"elm":"video","attr":"volume"}]},{"name":"HTML5 semantic tags","elms":12,"badelmsattrs":[{"elm":"main"},{"elm":"summary"}],"attrs":0,"badattrs":[],"vendattrs":[],"nonstandardattrs":[],"otherattrs":[]},{"name":"Web Components","elms":5,"badelmsattrs":[{"elm":"content"},{"elm":"decorator"},{"elm":"element"},{"elm":"shadow"},{"elm":"template"}],"attrs":1,"badattrs":[],"vendattrs":[],"nonstandardattrs":[],"otherattrs":[]}]},
	Firefox: {"ua":"Mozilla/5.0 (Windows NT 6.1; rv:39.0) Gecko/20100101 Firefox/39.0","baseua":"Firefox","data":[{"name":"Standard tags","elms":76,"badelmsattrs":[],"attrs":333,"badattrs":[{"elm":"a","attr":"media"},{"elm":"area","attr":"hreflang"},{"elm":"area","attr":"media"},{"elm":"html","attr":"manifest"},{"elm":"html","attr":"xmlns"},{"elm":"iframe","attr":"seamless"},{"elm":"input","attr":"autosave"},{"elm":"input","attr":"dirName"},{"elm":"input","attr":"minLength"},{"elm":"link","attr":"integrity"},{"elm":"script","attr":"integrity"},{"elm":"textarea","attr":"autocomplete"},{"elm":"textarea","attr":"dirName"},{"elm":"textarea","attr":"minLength"}],"vendattrs":[],"nonstandardattrs":[{"elm":"dl","attr":"compact"},{"elm":"hr","attr":"color"},{"elm":"iframe","attr":"allowFullscreen"},{"elm":"link","attr":"disabled"},{"elm":"link","attr":"target"},{"elm":"td","attr":"bgColor"},{"elm":"th","attr":"bgColor"},{"elm":"tr","attr":"bgColor"}],"otherattrs":[]},{"name":"Deprecated tags","elms":30,"badelmsattrs":[{"elm":"basefont"},{"elm":"bgsound"},{"elm":"blink"},{"elm":"command"},{"elm":"isindex"},{"elm":"multicol"},{"elm":"nextid"},{"elm":"spacer"}],"attrs":70,"badattrs":[{"elm":"basefont","attr":"color"},{"elm":"basefont","attr":"face"},{"elm":"basefont","attr":"size"},{"elm":"basefont","attr":"width"},{"elm":"keygen","attr":"autofocus"},{"elm":"keygen","attr":"challenge"},{"elm":"keygen","attr":"disabled"},{"elm":"keygen","attr":"form"},{"elm":"keygen","attr":"keytype"},{"elm":"marquee","attr":"behavior"},{"elm":"marquee","attr":"direction"},{"elm":"marquee","attr":"loop"},{"elm":"marquee","attr":"scrollAmount"},{"elm":"marquee","attr":"scrollDelay"},{"elm":"marquee","attr":"trueSpeed"}],"vendattrs":[],"nonstandardattrs":[],"otherattrs":[{"elm":"marquee","attr":"align"}]},{"name":"HTML5 tags","elms":21,"badelmsattrs":[{"elm":"bdi"},{"elm":"details"},{"elm":"dialog"}],"attrs":68,"badattrs":[{"elm":"menuitem","attr":"command"},{"elm":"menuitem","attr":"default"},{"elm":"menuitem","attr":"radioGroup"},{"elm":"meter","attr":"form"},{"elm":"progress","attr":"form"},{"elm":"time","attr":"pubDate"},{"elm":"track","attr":"srcLang"}],"vendattrs":[{"elm":"canvas","attr":"mozOpaque","vend":"Firefox"}],"nonstandardattrs":[],"otherattrs":[{"elm":"audio","attr":"crossOrigin"},{"elm":"video","attr":"volume"}]},{"name":"HTML5 semantic tags","elms":12,"badelmsattrs":[{"elm":"summary"}],"attrs":0,"badattrs":[],"vendattrs":[],"nonstandardattrs":[],"otherattrs":[]},{"name":"Web Components","elms":5,"badelmsattrs":[{"elm":"decorator"},{"elm":"element"}],"attrs":1,"badattrs":[],"vendattrs":[],"nonstandardattrs":[],"otherattrs":[]}]},
	Safari:{"ua":"Mozilla/5.0 (Windows NT 6.1) AppleWebKit/534.57.2 (KHTML, like Gecko) Version/5.1.7 Safari/534.57.2","baseua":"Safari","data":[{"name":"Standard tags","elms":76,"badelmsattrs":[],"attrs":333,"badattrs":[{"elm":"a","attr":"download"},{"elm":"a","attr":"media"},{"elm":"area","attr":"download"},{"elm":"area","attr":"hreflang"},{"elm":"area","attr":"media"},{"elm":"area","attr":"rel"},{"elm":"fieldset","attr":"disabled"},{"elm":"form","attr":"autocomplete"},{"elm":"html","attr":"xmlns"},{"elm":"iframe","attr":"seamless"},{"elm":"iframe","attr":"srcdoc"},{"elm":"img","attr":"crossOrigin"},{"elm":"img","attr":"sizes"},{"elm":"img","attr":"srcset"},{"elm":"input","attr":"autocomplete"},{"elm":"input","attr":"autosave"},{"elm":"input","attr":"dirName"},{"elm":"input","attr":"minLength"},{"elm":"link","attr":"crossOrigin"},{"elm":"link","attr":"integrity"},{"elm":"link","attr":"sizes"},{"elm":"object","attr":"typeMustMatch"},{"elm":"ol","attr":"reversed"},{"elm":"script","attr":"crossOrigin"},{"elm":"script","attr":"integrity"},{"elm":"style","attr":"scoped"},{"elm":"textarea","attr":"autocomplete"},{"elm":"textarea","attr":"dirName"},{"elm":"textarea","attr":"minLength"},{"elm":"textarea","attr":"wrap"}],"vendattrs":[],"nonstandardattrs":[{"elm":"dl","attr":"compact"},{"elm":"link","attr":"disabled"},{"elm":"link","attr":"target"},{"elm":"pre","attr":"wrap"},{"elm":"td","attr":"bgColor"},{"elm":"th","attr":"bgColor"},{"elm":"tr","attr":"bgColor"}],"otherattrs":[]},{"name":"Deprecated tags","elms":30,"badelmsattrs":[{"elm":"bgsound"},{"elm":"command"},{"elm":"spacer"}],"attrs":70,"badattrs":[{"elm":"bgsound","attr":"balance"},{"elm":"bgsound","attr":"loop"},{"elm":"bgsound","attr":"src"},{"elm":"bgsound","attr":"volume"},{"elm":"command","attr":"checked"},{"elm":"command","attr":"disabled"},{"elm":"command","attr":"icon"},{"elm":"command","attr":"label"},{"elm":"command","attr":"radioGroup"},{"elm":"command","attr":"type"},{"elm":"isindex","attr":"action"},{"elm":"spacer","attr":"height"},{"elm":"spacer","attr":"size"},{"elm":"spacer","attr":"type"},{"elm":"spacer","attr":"width"},{"elm":"spacer","attr":"align"}],"vendattrs":[],"nonstandardattrs":[],"otherattrs":[{"elm":"image","attr":"align"},{"elm":"image","attr":"alt"},{"elm":"image","attr":"border"},{"elm":"image","attr":"height"},{"elm":"image","attr":"hspace"},{"elm":"image","attr":"isMap"},{"elm":"image","attr":"longDesc"},{"elm":"image","attr":"lowsrc"},{"elm":"image","attr":"name"},{"elm":"image","attr":"useMap"},{"elm":"image","attr":"vspace"},{"elm":"image","attr":"width"},{"elm":"isindex","attr":"accept"},{"elm":"isindex","attr":"align"},{"elm":"isindex","attr":"alt"},{"elm":"isindex","attr":"autofocus"},{"elm":"isindex","attr":"checked"},{"elm":"isindex","attr":"form"},{"elm":"isindex","attr":"formAction"},{"elm":"isindex","attr":"formEnctype"},{"elm":"isindex","attr":"formMethod"},{"elm":"isindex","attr":"formNoValidate"},{"elm":"isindex","attr":"formTarget"},{"elm":"isindex","attr":"indeterminate"},{"elm":"isindex","attr":"list"},{"elm":"isindex","attr":"max"},{"elm":"isindex","attr":"maxLength"},{"elm":"isindex","attr":"min"},{"elm":"isindex","attr":"multiple"},{"elm":"isindex","attr":"name"},{"elm":"isindex","attr":"pattern"},{"elm":"isindex","attr":"placeholder"},{"elm":"isindex","attr":"readOnly"},{"elm":"isindex","attr":"required"},{"elm":"isindex","attr":"select"},{"elm":"isindex","attr":"size"},{"elm":"isindex","attr":"step"},{"elm":"isindex","attr":"type"},{"elm":"isindex","attr":"useMap"},{"elm":"isindex","attr":"value"}]},{"name":"HTML5 tags","elms":21,"badelmsattrs":[{"elm":"audio"},{"elm":"data"},{"elm":"details"},{"elm":"dialog"},{"elm":"menuitem"},{"elm":"meter"},{"elm":"progress"},{"elm":"source"},{"elm":"time"},{"elm":"track"},{"elm":"video"}],"attrs":68,"badattrs":[{"elm":"audio","attr":"autoplay"},{"elm":"audio","attr":"controls"},{"elm":"audio","attr":"loop"},{"elm":"audio","attr":"muted"},{"elm":"audio","attr":"played"},{"elm":"audio","attr":"preload"},{"elm":"audio","attr":"src"},{"elm":"audio","attr":"volume"},{"elm":"audio","attr":"autobuffer"},{"elm":"data","attr":"value"},{"elm":"details","attr":"open"},{"elm":"dialog","attr":"open"},{"elm":"menuitem","attr":"checked"},{"elm":"menuitem","attr":"command"},{"elm":"menuitem","attr":"default"},{"elm":"menuitem","attr":"disabled"},{"elm":"menuitem","attr":"icon"},{"elm":"menuitem","attr":"label"},{"elm":"menuitem","attr":"radioGroup"},{"elm":"menuitem","attr":"type"},{"elm":"meter","attr":"form"},{"elm":"meter","attr":"high"},{"elm":"meter","attr":"low"},{"elm":"meter","attr":"max"},{"elm":"meter","attr":"min"},{"elm":"meter","attr":"optimum"},{"elm":"meter","attr":"value"},{"elm":"progress","attr":"form"},{"elm":"progress","attr":"max"},{"elm":"progress","attr":"value"},{"elm":"source","attr":"media"},{"elm":"source","attr":"sizes"},{"elm":"source","attr":"src"},{"elm":"source","attr":"srcset"},{"elm":"source","attr":"type"},{"elm":"time","attr":"dateTime"},{"elm":"time","attr":"pubDate"},{"elm":"track","attr":"default"},{"elm":"track","attr":"kind"},{"elm":"track","attr":"label"},{"elm":"track","attr":"src"},{"elm":"track","attr":"srcLang"},{"elm":"video","attr":"autoplay"},{"elm":"video","attr":"controls"},{"elm":"video","attr":"crossOrigin"},{"elm":"video","attr":"height"},{"elm":"video","attr":"loop"},{"elm":"video","attr":"muted"},{"elm":"video","attr":"played"},{"elm":"video","attr":"poster"},{"elm":"video","attr":"preload"},{"elm":"video","attr":"src"},{"elm":"video","attr":"width"},{"elm":"video","attr":"autobuffer"}],"vendattrs":[],"nonstandardattrs":[],"otherattrs":[]},{"name":"HTML5 semantic tags","elms":12,"badelmsattrs":[],"attrs":0,"badattrs":[],"vendattrs":[],"nonstandardattrs":[],"otherattrs":[]},{"name":"Web Components","elms":5,"badelmsattrs":[{"elm":"content"}],"attrs":1,"badattrs":[{"elm":"content","attr":"select"}],"vendattrs":[],"nonstandardattrs":[],"otherattrs":[]}]},
	Opera: {"ua":"Opera/9.80 (Windows NT 6.1) Presto/2.12.388 Version/12.17","baseua":"Opera","data":[{"name":"Standard tags","elms":76,"badelmsattrs":[],"attrs":333,"badattrs":[{"elm":"a","attr":"download"},{"elm":"a","attr":"media"},{"elm":"a","attr":"ping"},{"elm":"area","attr":"download"},{"elm":"area","attr":"hreflang"},{"elm":"area","attr":"media"},{"elm":"area","attr":"ping"},{"elm":"area","attr":"rel"},{"elm":"form","attr":"autocomplete"},{"elm":"html","attr":"manifest"},{"elm":"html","attr":"xmlns"},{"elm":"iframe","attr":"sandbox"},{"elm":"iframe","attr":"seamless"},{"elm":"iframe","attr":"srcdoc"},{"elm":"img","attr":"sizes"},{"elm":"img","attr":"srcset"},{"elm":"input","attr":"autosave"},{"elm":"input","attr":"minLength"},{"elm":"link","attr":"crossOrigin"},{"elm":"link","attr":"integrity"},{"elm":"link","attr":"sizes"},{"elm":"object","attr":"typeMustMatch"},{"elm":"script","attr":"async"},{"elm":"script","attr":"crossOrigin"},{"elm":"script","attr":"integrity"},{"elm":"style","attr":"scoped"},{"elm":"textarea","attr":"autocomplete"},{"elm":"textarea","attr":"minLength"}],"vendattrs":[],"nonstandardattrs":[{"elm":"dl","attr":"compact"},{"elm":"link","attr":"disabled"},{"elm":"link","attr":"target"},{"elm":"td","attr":"bgColor"},{"elm":"th","attr":"bgColor"},{"elm":"tr","attr":"bgColor"}],"otherattrs":[{"elm":"iframe","attr":"noResize"},{"elm":"optgroup","attr":"form"},{"elm":"textarea","attr":"pattern"},{"elm":"tr","attr":"height"},{"elm":"tr","attr":"width"}]},{"name":"Deprecated tags","elms":30,"badelmsattrs":[{"elm":"basefont"},{"elm":"bgsound"},{"elm":"command"},{"elm":"multicol"},{"elm":"nextid"},{"elm":"rb"},{"elm":"spacer"}],"attrs":70,"badattrs":[{"elm":"basefont","attr":"color"},{"elm":"basefont","attr":"face"},{"elm":"basefont","attr":"size"},{"elm":"basefont","attr":"width"},{"elm":"bgsound","attr":"balance"},{"elm":"bgsound","attr":"loop"},{"elm":"bgsound","attr":"src"},{"elm":"bgsound","attr":"volume"},{"elm":"command","attr":"checked"},{"elm":"command","attr":"disabled"},{"elm":"command","attr":"icon"},{"elm":"command","attr":"label"},{"elm":"command","attr":"radioGroup"},{"elm":"command","attr":"type"},{"elm":"isindex","attr":"action"},{"elm":"marquee","attr":"trueSpeed"}],"vendattrs":[],"nonstandardattrs":[],"otherattrs":[{"elm":"isindex","attr":"form"}]},{"name":"HTML5 tags","elms":21,"badelmsattrs":[{"elm":"bdi"},{"elm":"data"},{"elm":"details"},{"elm":"dialog"},{"elm":"menuitem"},{"elm":"picture"}],"attrs":68,"badattrs":[{"elm":"details","attr":"open"},{"elm":"output","attr":"htmlFor"},{"elm":"source","attr":"sizes"},{"elm":"source","attr":"srcset"},{"elm":"track","attr":"srcLang"},{"elm":"video","attr":"crossOrigin"}],"vendattrs":[],"nonstandardattrs":[],"otherattrs":[{"elm":"video","attr":"volume"}]},{"name":"HTML5 semantic tags","elms":12,"badelmsattrs":[{"elm":"main"}],"attrs":0,"badattrs":[],"vendattrs":[],"nonstandardattrs":[],"otherattrs":[]},{"name":"Web Components","elms":5,"badelmsattrs":[{"elm":"content"},{"elm":"decorator"},{"elm":"element"},{"elm":"shadow"}],"attrs":1,"badattrs":[],"vendattrs":[],"nonstandardattrs":[],"otherattrs":[]}]}
}