(()=>{"use strict";var e={516:(e,t,n)=>{function r(e,t){void 0===t&&(t=!1);var n=e.length,r=0,s="",l=0,c=16,u=0,f=0,p=0,d=0,h=0;function g(t,n){for(var o=0,i=0;o<t||!n;){var a=e.charCodeAt(r);if(a>=48&&a<=57)i=16*i+a-48;else if(a>=65&&a<=70)i=16*i+a-65+10;else{if(!(a>=97&&a<=102))break;i=16*i+a-97+10}r++,o++}return o<t&&(i=-1),i}function m(){if(s="",h=0,l=r,f=u,d=p,r>=n)return l=n,c=17;var t=e.charCodeAt(r);if(o(t)){do{r++,s+=String.fromCharCode(t),t=e.charCodeAt(r)}while(o(t));return c=15}if(i(t))return r++,s+=String.fromCharCode(t),13===t&&10===e.charCodeAt(r)&&(r++,s+="\n"),u++,p=r,c=14;switch(t){case 123:return r++,c=1;case 125:return r++,c=2;case 91:return r++,c=3;case 93:return r++,c=4;case 58:return r++,c=6;case 44:return r++,c=5;case 34:return r++,s=function(){for(var t="",o=r;;){if(r>=n){t+=e.substring(o,r),h=2;break}var a=e.charCodeAt(r);if(34===a){t+=e.substring(o,r),r++;break}if(92!==a){if(a>=0&&a<=31){if(i(a)){t+=e.substring(o,r),h=2;break}h=6}r++}else{if(t+=e.substring(o,r),++r>=n){h=2;break}switch(e.charCodeAt(r++)){case 34:t+='"';break;case 92:t+="\\";break;case 47:t+="/";break;case 98:t+="\b";break;case 102:t+="\f";break;case 110:t+="\n";break;case 114:t+="\r";break;case 116:t+="\t";break;case 117:var s=g(4,!0);s>=0?t+=String.fromCharCode(s):h=4;break;default:h=5}o=r}}return t}(),c=10;case 47:var m=r-1;if(47===e.charCodeAt(r+1)){for(r+=2;r<n&&!i(e.charCodeAt(r));)r++;return s=e.substring(m,r),c=12}if(42===e.charCodeAt(r+1)){r+=2;for(var b=n-1,y=!1;r<b;){var w=e.charCodeAt(r);if(42===w&&47===e.charCodeAt(r+1)){r+=2,y=!0;break}r++,i(w)&&(13===w&&10===e.charCodeAt(r)&&r++,u++,p=r)}return y||(r++,h=1),s=e.substring(m,r),c=13}return s+=String.fromCharCode(t),r++,c=16;case 45:if(s+=String.fromCharCode(t),++r===n||!a(e.charCodeAt(r)))return c=16;case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return s+=function(){var t=r;if(48===e.charCodeAt(r))r++;else for(r++;r<e.length&&a(e.charCodeAt(r));)r++;if(r<e.length&&46===e.charCodeAt(r)){if(!(++r<e.length&&a(e.charCodeAt(r))))return h=3,e.substring(t,r);for(r++;r<e.length&&a(e.charCodeAt(r));)r++}var n=r;if(r<e.length&&(69===e.charCodeAt(r)||101===e.charCodeAt(r)))if((++r<e.length&&43===e.charCodeAt(r)||45===e.charCodeAt(r))&&r++,r<e.length&&a(e.charCodeAt(r))){for(r++;r<e.length&&a(e.charCodeAt(r));)r++;n=r}else h=3;return e.substring(t,n)}(),c=11;default:for(;r<n&&v(t);)r++,t=e.charCodeAt(r);if(l!==r){switch(s=e.substring(l,r)){case"true":return c=8;case"false":return c=9;case"null":return c=7}return c=16}return s+=String.fromCharCode(t),r++,c=16}}function v(e){if(o(e)||i(e))return!1;switch(e){case 125:case 93:case 123:case 91:case 34:case 58:case 44:case 47:return!1}return!0}return{setPosition:function(e){r=e,s="",l=0,c=16,h=0},getPosition:function(){return r},scan:t?function(){var e;do{e=m()}while(e>=12&&e<=15);return e}:m,getToken:function(){return c},getTokenValue:function(){return s},getTokenOffset:function(){return l},getTokenLength:function(){return r-l},getTokenStartLine:function(){return f},getTokenStartCharacter:function(){return l-d},getTokenError:function(){return h}}}function o(e){return 32===e||9===e||11===e||12===e||160===e||5760===e||e>=8192&&e<=8203||8239===e||8287===e||12288===e||65279===e}function i(e){return 10===e||13===e||8232===e||8233===e}function a(e){return e>=48&&e<=57}function s(e,t,n){var o,i,a,s,u;if(t){for(s=t.offset,u=s+t.length,a=s;a>0&&!c(e,a-1);)a--;for(var f=u;f<e.length&&!c(e,f);)f++;i=e.substring(a,f),o=function(e,t){for(var n=0,r=0,o=t.tabSize||4;n<e.length;){var i=e.charAt(n);if(" "===i)r++;else{if("\t"!==i)break;r+=o}n++}return Math.floor(r/o)}(i,n)}else i=e,o=0,a=0,s=0,u=e.length;var p,d=function(e,t){for(var n=0;n<t.length;n++){var r=t.charAt(n);if("\r"===r)return n+1<t.length&&"\n"===t.charAt(n+1)?"\r\n":"\r";if("\n"===r)return"\n"}return e&&e.eol||"\n"}(n,e),h=!1,g=0;p=n.insertSpaces?l(" ",n.tabSize||4):"\t";var m=r(i,!1),v=!1;function b(){return d+l(p,o+g)}function y(){var e=m.scan();for(h=!1;15===e||14===e;)h=h||14===e,e=m.scan();return v=16===e||0!==m.getTokenError(),e}var w=[];function C(t,n,r){!v&&n<u&&r>s&&e.substring(n,r)!==t&&w.push({offset:n,length:r-n,content:t})}var k=y();if(17!==k){var x=m.getTokenOffset()+a;C(l(p,o),a,x)}for(;17!==k;){for(var A=m.getTokenOffset()+m.getTokenLength()+a,T=y(),S="";!h&&(12===T||13===T);)C(" ",A,m.getTokenOffset()+a),A=m.getTokenOffset()+m.getTokenLength()+a,S=12===T?b():"",T=y();if(2===T)1!==k&&(g--,S=b());else if(4===T)3!==k&&(g--,S=b());else{switch(k){case 3:case 1:g++,S=b();break;case 5:case 12:S=b();break;case 13:S=h?b():" ";break;case 6:S=" ";break;case 10:if(6===T){S="";break}case 7:case 8:case 9:case 11:case 2:case 4:12===T||13===T?S=" ":5!==T&&17!==T&&(v=!0);break;case 16:v=!0}!h||12!==T&&13!==T||(S=b())}C(S,A,m.getTokenOffset()+a),k=T}return w}function l(e,t){for(var n="",r=0;r<t;r++)n+=e;return n}function c(e,t){return-1!=="\r\n".indexOf(e.charAt(t))}var u;function f(e,t,n){void 0===t&&(t=[]),void 0===n&&(n=u.DEFAULT);var r={type:"array",offset:-1,length:-1,children:[],parent:void 0};function o(e){"property"===r.type&&(r.length=e-r.offset,r=r.parent)}function i(e){return r.children.push(e),e}d(e,{onObjectBegin:function(e){r=i({type:"object",offset:e,length:-1,parent:r,children:[]})},onObjectProperty:function(e,t,n){(r=i({type:"property",offset:t,length:-1,parent:r,children:[]})).children.push({type:"string",value:e,offset:t,length:n,parent:r})},onObjectEnd:function(e,t){o(e+t),r.length=e+t-r.offset,r=r.parent,o(e+t)},onArrayBegin:function(e,t){r=i({type:"array",offset:e,length:-1,parent:r,children:[]})},onArrayEnd:function(e,t){r.length=e+t-r.offset,r=r.parent,o(e+t)},onLiteralValue:function(e,t,n){i({type:h(e),offset:t,length:n,parent:r,value:e}),o(t+n)},onSeparator:function(e,t,n){"property"===r.type&&(":"===e?r.colonOffset=t:","===e&&o(t))},onError:function(e,n,r){t.push({error:e,offset:n,length:r})}},n);var a=r.children[0];return a&&delete a.parent,a}function p(e,t){if(e){for(var n=e,r=0,o=t;r<o.length;r++){var i=o[r];if("string"==typeof i){if("object"!==n.type||!Array.isArray(n.children))return;for(var a=!1,s=0,l=n.children;s<l.length;s++){var c=l[s];if(Array.isArray(c.children)&&c.children[0].value===i){n=c.children[1],a=!0;break}}if(!a)return}else{var u=i;if("array"!==n.type||u<0||!Array.isArray(n.children)||u>=n.children.length)return;n=n.children[u]}}return n}}function d(e,t,n){void 0===n&&(n=u.DEFAULT);var o=r(e,!1);function i(e){return e?function(){return e(o.getTokenOffset(),o.getTokenLength(),o.getTokenStartLine(),o.getTokenStartCharacter())}:function(){return!0}}function a(e){return e?function(t){return e(t,o.getTokenOffset(),o.getTokenLength(),o.getTokenStartLine(),o.getTokenStartCharacter())}:function(){return!0}}var s=i(t.onObjectBegin),l=a(t.onObjectProperty),c=i(t.onObjectEnd),f=i(t.onArrayBegin),p=i(t.onArrayEnd),d=a(t.onLiteralValue),h=a(t.onSeparator),g=i(t.onComment),m=a(t.onError),v=n&&n.disallowComments,b=n&&n.allowTrailingComma;function y(){for(;;){var e=o.scan();switch(o.getTokenError()){case 4:w(14);break;case 5:w(15);break;case 3:w(13);break;case 1:v||w(11);break;case 2:w(12);break;case 6:w(16)}switch(e){case 12:case 13:v?w(10):g();break;case 16:w(1);break;case 15:case 14:break;default:return e}}}function w(e,t,n){if(void 0===t&&(t=[]),void 0===n&&(n=[]),m(e),t.length+n.length>0)for(var r=o.getToken();17!==r;){if(-1!==t.indexOf(r)){y();break}if(-1!==n.indexOf(r))break;r=y()}}function C(e){var t=o.getTokenValue();return e?d(t):l(t),y(),!0}return y(),17===o.getToken()?!!n.allowEmptyContent||(w(4,[],[]),!1):function e(){switch(o.getToken()){case 3:return function(){f(),y();for(var t=!1;4!==o.getToken()&&17!==o.getToken();){if(5===o.getToken()){if(t||w(4,[],[]),h(","),y(),4===o.getToken()&&b)break}else t&&w(6,[],[]);e()||w(4,[],[4,5]),t=!0}return p(),4!==o.getToken()?w(8,[4],[]):y(),!0}();case 1:return function(){s(),y();for(var t=!1;2!==o.getToken()&&17!==o.getToken();){if(5===o.getToken()){if(t||w(4,[],[]),h(","),y(),2===o.getToken()&&b)break}else t&&w(6,[],[]);(10!==o.getToken()?(w(3,[],[2,5]),0):(C(!1),6===o.getToken()?(h(":"),y(),e()||w(4,[],[2,5])):w(5,[],[2,5]),1))||w(4,[],[2,5]),t=!0}return c(),2!==o.getToken()?w(7,[2],[]):y(),!0}();case 10:return C(!0);default:return function(){switch(o.getToken()){case 11:var e=0;try{"number"!=typeof(e=JSON.parse(o.getTokenValue()))&&(w(2),e=0)}catch(e){w(2)}d(e);break;case 7:d(null);break;case 8:d(!0);break;case 9:d(!1);break;default:return!1}return y(),!0}()}}()?(17!==o.getToken()&&w(9,[],[]),!0):(w(4,[],[]),!1)}function h(e){switch(typeof e){case"boolean":return"boolean";case"number":return"number";case"string":return"string";case"object":return e?Array.isArray(e)?"array":"object":"null";default:return"null"}}function g(e,t,n){var r=m(e,t),o=t.offset,i=t.offset+t.content.length;if(0===t.length||0===t.content.length){for(;o>0&&!c(r,o-1);)o--;for(;i<r.length&&!c(r,i);)i++}for(var a=s(r,{offset:o,length:i-o},n),l=a.length-1;l>=0;l--){var u=a[l];r=m(r,u),o=Math.min(o,u.offset),i=Math.max(i,u.offset+u.length),i+=u.content.length-u.length}return[{offset:o,length:e.length-(r.length-i)-o,content:r.substring(o,i)}]}function m(e,t){return e.substring(0,t.offset)+t.content+e.substring(t.offset+t.length)}n.r(t),n.d(t,{applyEdits:()=>F,createScanner:()=>v,findNodeAtLocation:()=>C,findNodeAtOffset:()=>k,format:()=>P,getLocation:()=>b,getNodePath:()=>x,getNodeValue:()=>A,modify:()=>E,parse:()=>y,parseTree:()=>w,printParseErrorCode:()=>I,stripComments:()=>S,visit:()=>T}),function(e){e.DEFAULT={allowTrailingComma:!1}}(u||(u={}));var v=r,b=function(e,t){var n=[],r=new Object,o=void 0,i={value:{},offset:0,length:0,type:"object",parent:void 0},a=!1;function s(e,t,n,r){i.value=e,i.offset=t,i.length=n,i.type=r,i.colonOffset=void 0,o=i}try{d(e,{onObjectBegin:function(e,i){if(t<=e)throw r;o=void 0,a=t>e,n.push("")},onObjectProperty:function(e,o,i){if(t<o)throw r;if(s(e,o,i,"property"),n[n.length-1]=e,t<=o+i)throw r},onObjectEnd:function(e,i){if(t<=e)throw r;o=void 0,n.pop()},onArrayBegin:function(e,i){if(t<=e)throw r;o=void 0,n.push(0)},onArrayEnd:function(e,i){if(t<=e)throw r;o=void 0,n.pop()},onLiteralValue:function(e,n,o){if(t<n)throw r;if(s(e,n,o,h(e)),t<=n+o)throw r},onSeparator:function(e,i,s){if(t<=i)throw r;if(":"===e&&o&&"property"===o.type)o.colonOffset=i,a=!1,o=void 0;else if(","===e){var l=n[n.length-1];"number"==typeof l?n[n.length-1]=l+1:(a=!0,n[n.length-1]=""),o=void 0}}})}catch(e){if(e!==r)throw e}return{path:n,previousNode:o,isAtPropertyKey:a,matches:function(e){for(var t=0,r=0;t<e.length&&r<n.length;r++)if(e[t]===n[r]||"*"===e[t])t++;else if("**"!==e[t])return!1;return t===e.length}}},y=function(e,t,n){void 0===t&&(t=[]),void 0===n&&(n=u.DEFAULT);var r=null,o=[],i=[];function a(e){Array.isArray(o)?o.push(e):null!==r&&(o[r]=e)}return d(e,{onObjectBegin:function(){var e={};a(e),i.push(o),o=e,r=null},onObjectProperty:function(e){r=e},onObjectEnd:function(){o=i.pop()},onArrayBegin:function(){var e=[];a(e),i.push(o),o=e,r=null},onArrayEnd:function(){o=i.pop()},onLiteralValue:a,onError:function(e,n,r){t.push({error:e,offset:n,length:r})}},n),o[0]},w=f,C=p,k=function e(t,n,r){if(void 0===r&&(r=!1),function(e,t,n){return void 0===n&&(n=!1),t>=e.offset&&t<e.offset+e.length||n&&t===e.offset+e.length}(t,n,r)){var o=t.children;if(Array.isArray(o))for(var i=0;i<o.length&&o[i].offset<=n;i++){var a=e(o[i],n,r);if(a)return a}return t}},x=function e(t){if(!t.parent||!t.parent.children)return[];var n=e(t.parent);if("property"===t.parent.type){var r=t.parent.children[0].value;n.push(r)}else if("array"===t.parent.type){var o=t.parent.children.indexOf(t);-1!==o&&n.push(o)}return n},A=function e(t){switch(t.type){case"array":return t.children.map(e);case"object":for(var n=Object.create(null),r=0,o=t.children;r<o.length;r++){var i=o[r],a=i.children[1];a&&(n[i.children[0].value]=e(a))}return n;case"null":case"string":case"number":case"boolean":return t.value;default:return}},T=d,S=function(e,t){var n,o,i=r(e),a=[],s=0;do{switch(o=i.getPosition(),n=i.scan()){case 12:case 13:case 17:s!==o&&a.push(e.substring(s,o)),void 0!==t&&a.push(i.getTokenValue().replace(/[^\r\n]/g,t)),s=i.getPosition()}}while(17!==n);return a.join("")};function I(e){switch(e){case 1:return"InvalidSymbol";case 2:return"InvalidNumberFormat";case 3:return"PropertyNameExpected";case 4:return"ValueExpected";case 5:return"ColonExpected";case 6:return"CommaExpected";case 7:return"CloseBraceExpected";case 8:return"CloseBracketExpected";case 9:return"EndOfFileExpected";case 10:return"InvalidCommentToken";case 11:return"UnexpectedEndOfComment";case 12:return"UnexpectedEndOfString";case 13:return"UnexpectedEndOfNumber";case 14:return"InvalidUnicode";case 15:return"InvalidEscapeCharacter";case 16:return"InvalidCharacter"}return"<unknown ParseErrorCode>"}function P(e,t,n){return s(e,t,n)}function E(e,t,n,r){return function(e,t,n,r,o){for(var i,a=t.slice(),s=f(e,[]),l=void 0,c=void 0;a.length>0&&(c=a.pop(),void 0===(l=p(s,a))&&void 0!==n);)"string"==typeof c?((i={})[c]=n,n=i):n=[n];if(l){if("object"===l.type&&"string"==typeof c&&Array.isArray(l.children)){var u=p(l,[c]);if(void 0!==u){if(void 0===n){if(!u.parent)throw new Error("Malformed AST");var d=l.children.indexOf(u.parent),h=void 0,m=u.parent.offset+u.parent.length;return d>0?h=(k=l.children[d-1]).offset+k.length:(h=l.offset+1,l.children.length>1&&(m=l.children[1].offset)),g(e,{offset:h,length:m-h,content:""},r)}return g(e,{offset:u.offset,length:u.length,content:JSON.stringify(n)},r)}if(void 0===n)return[];var v=JSON.stringify(c)+": "+JSON.stringify(n),b=o?o(l.children.map((function(e){return e.children[0].value}))):l.children.length,y=void 0;return g(e,y=b>0?{offset:(k=l.children[b-1]).offset+k.length,length:0,content:","+v}:0===l.children.length?{offset:l.offset+1,length:0,content:v}:{offset:l.offset+1,length:0,content:v+","},r)}if("array"===l.type&&"number"==typeof c&&Array.isArray(l.children)){if(-1===c)return v=""+JSON.stringify(n),y=void 0,g(e,y=0===l.children.length?{offset:l.offset+1,length:0,content:v}:{offset:(k=l.children[l.children.length-1]).offset+k.length,length:0,content:","+v},r);if(void 0===n&&l.children.length>=0){var w=c,C=l.children[w];if(y=void 0,1===l.children.length)y={offset:l.offset+1,length:l.length-2,content:""};else if(l.children.length-1===w){var k,x=(k=l.children[w-1]).offset+k.length;y={offset:x,length:l.offset+l.length-2-x,content:""}}else y={offset:C.offset,length:l.children[w+1].offset-C.offset,content:""};return g(e,y,r)}throw new Error("Array modification not supported yet")}throw new Error("Can not add "+("number"!=typeof c?"index":"property")+" to parent of type "+l.type)}if(void 0===n)throw new Error("Can not delete in empty document");return g(e,{offset:s?s.offset:0,length:s?s.length:0,content:JSON.stringify(n)},r)}(e,t,n,r.formattingOptions,r.getInsertionIndex)}function F(e,t){for(var n=t.length-1;n>=0;n--)e=m(e,t[n]);return e}},189:function(e,t,n){var r=this&&this.__spreadArrays||function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var i=arguments[t],a=0,s=i.length;a<s;a++,o++)r[o]=i[a];return r};Object.defineProperty(t,"__esModule",{value:!0}),t.config=t.loadMessageBundle=void 0;var o=n(926),i=n(800),a=n(800);function s(e){return function(e,t){for(var n=[],o=2;o<arguments.length;o++)n[o-2]=arguments[o];if("number"==typeof e)throw new Error("Browser implementation does currently not support externalized strings.");return i.localize.apply(void 0,r([e,t],n))}}function l(e){return i.setPseudo("pseudo"===(null==e?void 0:e.locale.toLowerCase())),s}Object.defineProperty(t,"MessageFormat",{enumerable:!0,get:function(){return a.MessageFormat}}),Object.defineProperty(t,"BundleFormat",{enumerable:!0,get:function(){return a.BundleFormat}}),t.loadMessageBundle=s,t.config=l,o.default.install(Object.freeze({loadMessageBundle:s,config:l}))},800:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.config=t.loadMessageBundle=t.localize=t.format=t.setPseudo=t.isPseudo=t.isDefined=t.BundleFormat=t.MessageFormat=void 0;var r,o,i,a=n(926);function s(e){return void 0!==e}function l(e,n){return t.isPseudo&&(e="［"+e.replace(/[aouei]/g,"$&$&")+"］"),0===n.length?e:e.replace(/\{(\d+)\}/g,(function(e,t){var r=t[0],o=n[r],i=e;return"string"==typeof o?i=o:"number"!=typeof o&&"boolean"!=typeof o&&null!=o||(i=String(o)),i}))}(i=t.MessageFormat||(t.MessageFormat={})).file="file",i.bundle="bundle",i.both="both",(o=t.BundleFormat||(t.BundleFormat={})).standalone="standalone",o.languagePack="languagePack",function(e){e.is=function(e){var t=e;return t&&s(t.key)&&s(t.comment)}}(r||(r={})),t.isDefined=s,t.isPseudo=!1,t.setPseudo=function(e){t.isPseudo=e},t.format=l,t.localize=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];return l(t,n)},t.loadMessageBundle=function(e){return a.default().loadMessageBundle(e)},t.config=function(e){return a.default().config(e)}},926:(e,t)=>{var n;function r(){if(void 0===n)throw new Error("No runtime abstraction layer installed");return n}Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.install=function(e){if(void 0===e)throw new Error("No runtime abstraction layer provided");n=e}}(r||(r={})),t.default=r},248:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.provideWorkspaceTrustExtensionProposals=t.provideInstalledExtensionProposals=void 0;const r=n(549),o=n(189).loadMessageBundle();t.provideInstalledExtensionProposals=function(e,t,n,i){if(Array.isArray(e)){const a=(i?r.extensions.all:r.extensions.all.filter((e=>!(e.id.startsWith("vscode.")||"Microsoft.vscode-markdown"===e.id)))).filter((t=>-1===e.indexOf(t.id)));if(a.length)return a.map((e=>{const o=new r.CompletionItem(e.id),i=`"${e.id}"${t}`;return o.kind=r.CompletionItemKind.Value,o.insertText=i,o.range=n,o.filterText=i,o}));{const e=new r.CompletionItem(o("exampleExtension","Example"));return e.insertText='"vscode.csharp"',e.kind=r.CompletionItemKind.Value,e.range=n,[e]}}},t.provideWorkspaceTrustExtensionProposals=function(e,t){if(Array.isArray(e)){const n=r.extensions.all.filter((e=>e.packageJSON.main)).filter((t=>-1===e.indexOf(t.id)));if(n.length)return n.map((e=>{const n=new r.CompletionItem(e.id),o=`"${e.id}": {\n\t"supported": false,\n\t"version": "${e.packageJSON.version}"\n}`;return n.kind=r.CompletionItemKind.Value,n.insertText=o,n.range=t,n.filterText=o,n}));{const e=new r.CompletionItem(o("exampleExtension","Example"));return e.insertText='"vscode.csharp: {\n\t"supported": false,\n\t"version": "0.0.0"\n}`;"',e.kind=r.CompletionItemKind.Value,e.range=t,[e]}}}},46:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SettingsDocument=void 0;const r=n(549),o=n(516),i=n(189),a=n(248),s=i.loadMessageBundle(),l=/\[([^\[\]]*)\]/g;t.SettingsDocument=class{constructor(e){this.document=e}provideCompletionItems(e,t){const n=(0,o.getLocation)(this.document.getText(),this.document.offsetAt(e)),i=this.document.getWordRangeAtPosition(e)||new r.Range(e,e);if("window.title"===n.path[0])return this.provideWindowTitleCompletionItems(n,i);if("files.associations"===n.path[0])return this.provideFilesAssociationsCompletionItems(n,i);if("files.exclude"===n.path[0]||"search.exclude"===n.path[0])return this.provideExcludeCompletionItems(n,i);if("files.defaultLanguage"===n.path[0])return this.provideLanguageCompletionItems(n,i).then((e=>[this.newSimpleCompletionItem(JSON.stringify("${activeEditorLanguage}"),i,s("activeEditor","Use the language of the currently active text editor if any")),...e]));if("settingsSync.ignoredExtensions"===n.path[0]){let e=[];try{e=(0,o.parse)(this.document.getText())["settingsSync.ignoredExtensions"]}catch(e){}return(0,a.provideInstalledExtensionProposals)(e,"",i,!0)}if("remote.extensionKind"===n.path[0]&&2===n.path.length&&n.isAtPropertyKey){let e=[];try{e=Object.keys((0,o.parse)(this.document.getText())["remote.extensionKind"])}catch(e){}return(0,a.provideInstalledExtensionProposals)(e,': [\n\t"ui"\n]',i,!0)}return"remote.portsAttributes"===n.path[0]&&2===n.path.length&&n.isAtPropertyKey?this.providePortsAttributesCompletionItem(i):this.provideLanguageOverridesCompletionItems(n,e)}provideWindowTitleCompletionItems(e,t){const n=[];return n.push(this.newSimpleCompletionItem("${activeEditorShort}",t,s("activeEditorShort","the file name (e.g. myFile.txt)"))),n.push(this.newSimpleCompletionItem("${activeEditorMedium}",t,s("activeEditorMedium","the path of the file relative to the workspace folder (e.g. myFolder/myFileFolder/myFile.txt)"))),n.push(this.newSimpleCompletionItem("${activeEditorLong}",t,s("activeEditorLong","the full path of the file (e.g. /Users/Development/myFolder/myFileFolder/myFile.txt)"))),n.push(this.newSimpleCompletionItem("${activeFolderShort}",t,s("activeFolderShort","the name of the folder the file is contained in (e.g. myFileFolder)"))),n.push(this.newSimpleCompletionItem("${activeFolderMedium}",t,s("activeFolderMedium","the path of the folder the file is contained in, relative to the workspace folder (e.g. myFolder/myFileFolder)"))),n.push(this.newSimpleCompletionItem("${activeFolderLong}",t,s("activeFolderLong","the full path of the folder the file is contained in (e.g. /Users/Development/myFolder/myFileFolder)"))),n.push(this.newSimpleCompletionItem("${rootName}",t,s("rootName","name of the workspace (e.g. myFolder or myWorkspace)"))),n.push(this.newSimpleCompletionItem("${rootPath}",t,s("rootPath","file path of the workspace (e.g. /Users/Development/myWorkspace)"))),n.push(this.newSimpleCompletionItem("${folderName}",t,s("folderName","name of the workspace folder the file is contained in (e.g. myFolder)"))),n.push(this.newSimpleCompletionItem("${folderPath}",t,s("folderPath","file path of the workspace folder the file is contained in (e.g. /Users/Development/myFolder)"))),n.push(this.newSimpleCompletionItem("${appName}",t,s("appName","e.g. VS Code"))),n.push(this.newSimpleCompletionItem("${remoteName}",t,s("remoteName","e.g. SSH"))),n.push(this.newSimpleCompletionItem("${dirty}",t,s("dirty","an indicator for when the active editor has unsaved changes"))),n.push(this.newSimpleCompletionItem("${separator}",t,s("separator","a conditional separator (' - ') that only shows when surrounded by variables with values"))),Promise.resolve(n)}provideFilesAssociationsCompletionItems(e,t){const n=[];if(2===e.path.length){if(e.isAtPropertyKey&&""!==e.path[1])return this.provideLanguageCompletionItemsForLanguageOverrides(e,t);n.push(this.newSnippetCompletionItem({label:s("assocLabelFile","Files with Extension"),documentation:s("assocDescriptionFile","Map all files matching the glob pattern in their filename to the language with the given identifier."),snippet:e.isAtPropertyKey?'"*.${1:extension}": "${2:language}"':'{ "*.${1:extension}": "${2:language}" }',range:t})),n.push(this.newSnippetCompletionItem({label:s("assocLabelPath","Files with Path"),documentation:s("assocDescriptionPath","Map all files matching the absolute path glob pattern in their path to the language with the given identifier."),snippet:e.isAtPropertyKey?'"/${1:path to file}/*.${2:extension}": "${3:language}"':'{ "/${1:path to file}/*.${2:extension}": "${3:language}" }',range:t}))}return Promise.resolve(n)}provideExcludeCompletionItems(e,t){const n=[];return 1===e.path.length?(n.push(this.newSnippetCompletionItem({label:s("fileLabel","Files by Extension"),documentation:s("fileDescription","Match all files of a specific file extension."),snippet:e.isAtPropertyKey?'"**/*.${1:extension}": true':'{ "**/*.${1:extension}": true }',range:t})),n.push(this.newSnippetCompletionItem({label:s("filesLabel","Files with Multiple Extensions"),documentation:s("filesDescription","Match all files with any of the file extensions."),snippet:e.isAtPropertyKey?'"**/*.{ext1,ext2,ext3}": true':'{ "**/*.{ext1,ext2,ext3}": true }',range:t})),n.push(this.newSnippetCompletionItem({label:s("derivedLabel","Files with Siblings by Name"),documentation:s("derivedDescription","Match files that have siblings with the same name but a different extension."),snippet:e.isAtPropertyKey?'"**/*.${1:source-extension}": { "when": "$(basename).${2:target-extension}" }':'{ "**/*.${1:source-extension}": { "when": "$(basename).${2:target-extension}" } }',range:t})),n.push(this.newSnippetCompletionItem({label:s("topFolderLabel","Folder by Name (Top Level)"),documentation:s("topFolderDescription","Match a top level folder with a specific name."),snippet:e.isAtPropertyKey?'"${1:name}": true':'{ "${1:name}": true }',range:t})),n.push(this.newSnippetCompletionItem({label:s("topFoldersLabel","Folders with Multiple Names (Top Level)"),documentation:s("topFoldersDescription","Match multiple top level folders."),snippet:e.isAtPropertyKey?'"{folder1,folder2,folder3}": true':'{ "{folder1,folder2,folder3}": true }',range:t})),n.push(this.newSnippetCompletionItem({label:s("folderLabel","Folder by Name (Any Location)"),documentation:s("folderDescription","Match a folder with a specific name in any location."),snippet:e.isAtPropertyKey?'"**/${1:name}": true':'{ "**/${1:name}": true }',range:t}))):(n.push(this.newSimpleCompletionItem("false",t,s("falseDescription","Disable the pattern."))),n.push(this.newSimpleCompletionItem("true",t,s("trueDescription","Enable the pattern."))),n.push(this.newSnippetCompletionItem({label:s("derivedLabel","Files with Siblings by Name"),documentation:s("siblingsDescription","Match files that have siblings with the same name but a different extension."),snippet:'{ "when": "$(basename).${1:extension}" }',range:t}))),Promise.resolve(n)}provideLanguageCompletionItems(e,t,n=(e=>JSON.stringify(e))){return r.languages.getLanguages().then((e=>e.map((e=>this.newSimpleCompletionItem(n(e),t)))))}async provideLanguageCompletionItemsForLanguageOverrides(e,t){const n=await r.languages.getLanguages(),o=[];for(const e of n){const n=new r.CompletionItem(JSON.stringify(e));n.kind=r.CompletionItemKind.Property,n.range=t,o.push(n)}return o}async provideLanguageOverridesCompletionItems(e,t){if(1===e.path.length&&e.previousNode&&"string"==typeof e.previousNode.value&&e.previousNode.value.startsWith("[")){const n=this.document.positionAt(e.previousNode.offset+1),o=n.translate(void 0,e.previousNode.value.length),i=[],a=[];let s,c=l.exec(e.previousNode.value);for(;c?.length;)s=new r.Range(this.document.positionAt(e.previousNode.offset+1+c.index),this.document.positionAt(e.previousNode.offset+1+c.index+c[0].length)),a.push(s),s.contains(t)||i.push(c[1].trim()),c=l.exec(e.previousNode.value);const u=s?s.end:n;u.isBefore(o)&&a.push(new r.Range(u,o));const f=a.find((e=>e.contains(t)));if(f&&!f.isEqual(a[0])){const e=await r.languages.getLanguages(),t=[];for(const n of e)if(!i.includes(n)){const e=new r.CompletionItem(`[${n}]`);e.kind=r.CompletionItemKind.Property,e.range=f,t.push(e)}return t}}return[]}providePortsAttributesCompletionItem(e){return[this.newSnippetCompletionItem({label:'"3000"',documentation:"Single Port Attribute",range:e,snippet:'\n  "${1:3000}": {\n    "label": "${2:Application}",\n    "onAutoForward": "${3:openPreview}"\n  }\n'}),this.newSnippetCompletionItem({label:'"5000-6000"',documentation:"Ranged Port Attribute",range:e,snippet:'\n  "${1:40000-55000}": {\n    "onAutoForward": "${2:ignore}"\n  }\n'}),this.newSnippetCompletionItem({label:'".+\\\\/server.js"',documentation:"Command Match Port Attribute",range:e,snippet:'\n  "${1:.+\\\\/server.js}": {\n    "label": "${2:Application}",\n    "onAutoForward": "${3:openPreview}"\n  }\n'})]}newSimpleCompletionItem(e,t,n,o){const i=new r.CompletionItem(e);return i.kind=r.CompletionItemKind.Value,i.detail=n,i.insertText=o||e,i.range=t,i}newSnippetCompletionItem(e){const t=new r.CompletionItem(e.label);return t.kind=r.CompletionItemKind.Value,t.documentation=e.documentation,t.insertText=new r.SnippetString(e.snippet),t.range=e.range,t}}},549:e=>{e.exports=require("vscode")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};(()=>{var e=r;Object.defineProperty(e,"__esModule",{value:!0}),e.activate=void 0;const t=n(516),o=n(549),i=n(189),a=n(46),s=n(248),l=i.loadMessageBundle();function c(e){return o.languages.registerCompletionItemProvider({language:"jsonc",pattern:e},{provideCompletionItems(e,n,r){const i=(0,t.getLocation)(e.getText(),e.offsetAt(n));if(!i.isAtPropertyKey&&i.previousNode&&"string"===i.previousNode.type){const t=e.lineAt(n.line).text.indexOf("$"),r=t>=0?new o.Position(n.line,t):n;return[{label:"workspaceFolder",detail:l("workspaceFolder","The path of the folder opened in VS Code")},{label:"workspaceFolderBasename",detail:l("workspaceFolderBasename","The name of the folder opened in VS Code without any slashes (/)")},{label:"relativeFile",detail:l("relativeFile","The current opened file relative to ${workspaceFolder}")},{label:"relativeFileDirname",detail:l("relativeFileDirname","The current opened file's dirname relative to ${workspaceFolder}")},{label:"file",detail:l("file","The current opened file")},{label:"cwd",detail:l("cwd","The task runner's current working directory on startup")},{label:"lineNumber",detail:l("lineNumber","The current selected line number in the active file")},{label:"selectedText",detail:l("selectedText","The current selected text in the active file")},{label:"fileDirname",detail:l("fileDirname","The current opened file's dirname")},{label:"fileExtname",detail:l("fileExtname","The current opened file's extension")},{label:"fileBasename",detail:l("fileBasename","The current opened file's basename")},{label:"fileBasenameNoExtension",detail:l("fileBasenameNoExtension","The current opened file's basename with no file extension")},{label:"defaultBuildTask",detail:l("defaultBuildTask","The name of the default build task. If there is not a single default build task then a quick pick is shown to choose the build task.")},{label:"pathSeparator",detail:l("pathSeparator","The character used by the operating system to separate components in file paths")}].map((e=>({label:"${"+e.label+"}",range:new o.Range(r,n),detail:e.detail})))}return[]}})}e.activate=function(e){e.subscriptions.push(o.languages.registerCompletionItemProvider({language:"jsonc",pattern:"**/settings.json"},{provideCompletionItems:(e,t,n)=>new a.SettingsDocument(e).provideCompletionItems(t,n)})),e.subscriptions.push(o.languages.registerCompletionItemProvider({pattern:"**/extensions.json"},{provideCompletionItems(e,n,r){const i=(0,t.getLocation)(e.getText(),e.offsetAt(n)),a=e.getWordRangeAtPosition(n)||new o.Range(n,n);if("recommendations"===i.path[0]){const n=(0,t.parse)(e.getText());return(0,s.provideInstalledExtensionProposals)(n&&n.recommendations||[],"",a,!1)}return[]}}),o.languages.registerCompletionItemProvider({pattern:"**/*.code-workspace"},{provideCompletionItems(e,n,r){const i=(0,t.getLocation)(e.getText(),e.offsetAt(n)),a=e.getWordRangeAtPosition(n)||new o.Range(n,n);if("extensions"===i.path[0]&&"recommendations"===i.path[1]){const n=(0,t.parse)(e.getText()).extensions;return(0,s.provideInstalledExtensionProposals)(n&&n.recommendations||[],"",a,!1)}return[]}})),e.subscriptions.push(c("**/launch.json")),e.subscriptions.push(c("**/tasks.json")),e.subscriptions.push(function(){const e=new Map([[{language:"jsonc",pattern:"**/keybindings.json"},[["*","when"]]],[{language:"json",pattern:"**/package.json"},[["contributes","menus","*","*","when"],["contributes","views","*","*","when"],["contributes","viewsWelcome","*","when"],["contributes","keybindings","*","when"],["contributes","keybindings","when"]]]]);return o.languages.registerCompletionItemProvider([...e.keys()],{async provideCompletionItems(n,r,i){const a=(0,t.getLocation)(n.getText(),n.offsetAt(r));if(a.isAtPropertyKey)return;let s=!1;for(const[t,r]of e)if(o.languages.match(t,n)&&r.some(a.matches.bind(a))){s=!0;break}if(!s)return;const l=n.getWordRangeAtPosition(r);if(!l||l.start.isEqual(r)||l.end.isEqual(r))return;let c;if(c=l.end.character-l.start.character==2||n.getWordRangeAtPosition(r,/\s+/)?new o.Range(r,r):n.getWordRangeAtPosition(r,/[a-zA-Z.]+/),!c)return;const u=c.with(void 0,r),f=await o.commands.executeCommand("getContextKeyInfo");if(i.isCancellationRequested||!f)return;const p=new o.CompletionList;for(const e of f){const t=new o.CompletionItem(e.key,o.CompletionItemKind.Constant);t.detail=e.type,t.range={replacing:c,inserting:u},t.documentation=e.description,p.items.push(t)}return p}})}())},o.languages.registerDocumentSymbolProvider({pattern:"**/launch.json",language:"jsonc"},{provideDocumentSymbols(e,n){const r=[];let i="",a="",s=0,l=0;return(0,t.visit)(e.getText(),{onObjectProperty:(e,t,n)=>{a=e},onLiteralValue:(e,t,n)=>{"name"===a&&(i=e)},onObjectBegin:(e,t)=>{l++,2===l&&(s=e)},onObjectEnd:(t,n)=>{i&&2===l&&r.push(new o.SymbolInformation(i,o.SymbolKind.Object,new o.Range(e.positionAt(s),e.positionAt(t)))),l--}}),r}},{label:"Launch Targets"})})();var o=exports;for(var i in r)o[i]=r[i];r.__esModule&&Object.defineProperty(o,"__esModule",{value:!0})})();
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/454f312b3b5fe5a98eff902ddbd43eda91a40934/extensions/configuration-editing/dist/browser/configurationEditingMain.js.map