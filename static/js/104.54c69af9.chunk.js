(this["webpackJsonp@uiw/react-heat-map"]=this["webpackJsonp@uiw/react-heat-map"]||[]).push([[104],{1149:function(e,t,r){!function(e){"use strict";e.defineMode("tcl",(function(){function e(e){for(var t={},r=e.split(" "),n=0;n<r.length;++n)t[r[n]]=!0;return t}var t=e("Tcl safe after append array auto_execok auto_import auto_load auto_mkindex auto_mkindex_old auto_qualify auto_reset bgerror binary break catch cd close concat continue dde eof encoding error eval exec exit expr fblocked fconfigure fcopy file fileevent filename filename flush for foreach format gets glob global history http if incr info interp join lappend lindex linsert list llength load lrange lreplace lsearch lset lsort memory msgcat namespace open package parray pid pkg::create pkg_mkIndex proc puts pwd re_syntax read regex regexp registry regsub rename resource return scan seek set socket source split string subst switch tcl_endOfWord tcl_findLibrary tcl_startOfNextWord tcl_wordBreakAfter tcl_startOfPreviousWord tcl_wordBreakBefore tcltest tclvars tell time trace unknown unset update uplevel upvar variable vwait"),r=e("if elseif else and not or eq ne in ni for foreach while switch"),n=/[+\-*&%=<>!?^\/\|]/;function a(e,t,r){return t.tokenize=r,r(e,t)}function o(e,o){var u=o.beforeParams;o.beforeParams=!1;var f=e.next();if('"'!=f&&"'"!=f||!o.inParams){if(/[\[\]{}\(\),;\.]/.test(f))return"("==f&&u?o.inParams=!0:")"==f&&(o.inParams=!1),null;if(/\d/.test(f))return e.eatWhile(/[\w\.]/),"number";if("#"==f)return e.eat("*")?a(e,o,l):"#"==f&&e.match(/ *\[ *\[/)?a(e,o,c):(e.skipToEnd(),"comment");if('"'==f)return e.skipTo(/"/),"comment";if("$"==f)return e.eatWhile(/[$_a-z0-9A-Z\.{:]/),e.eatWhile(/}/),o.beforeParams=!0,"builtin";if(n.test(f))return e.eatWhile(n),"comment";e.eatWhile(/[\w\$_{}\xa1-\uffff]/);var s=e.current().toLowerCase();return t&&t.propertyIsEnumerable(s)?"keyword":r&&r.propertyIsEnumerable(s)?(o.beforeParams=!0,"keyword"):null}return a(e,o,i(f))}function i(e){return function(t,r){for(var n,a=!1,i=!1;null!=(n=t.next());){if(n==e&&!a){i=!0;break}a=!a&&"\\"==n}return i&&(r.tokenize=o),"string"}}function l(e,t){for(var r,n=!1;r=e.next();){if("#"==r&&n){t.tokenize=o;break}n="*"==r}return"comment"}function c(e,t){for(var r,n=0;r=e.next();){if("#"==r&&2==n){t.tokenize=o;break}"]"==r?n++:" "!=r&&(n=0)}return"meta"}return{startState:function(){return{tokenize:o,beforeParams:!1,inParams:!1}},token:function(e,t){return e.eatSpace()?null:t.tokenize(e,t)},lineComment:"#"}})),e.defineMIME("text/x-tcl","tcl")}(r(79))}}]);
//# sourceMappingURL=104.54c69af9.chunk.js.map