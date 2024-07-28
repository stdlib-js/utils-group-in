// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var c=Math.abs,s=String.prototype.toLowerCase,f=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,h=/^(\d+)$/,y=/^(\d+)e/,d=/\.0$/,b=/\.0*e/,v=/(\..*[^0])0*e/;function w(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=l.call(n,v,"$1e"),n=l.call(n,b,"e"),n=l.call(n,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=l.call(n,p,"e+0$1"),n=l.call(n,g,"e-0$1"),r.alternate&&(n=l.call(n,h,"$1."),n=l.call(n,y,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===f.call(r.specifier)?f.call(n):s.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var j=String.fromCharCode,_=Array.isArray;function E(r){return r!=r}function O(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function S(r){var e,t,n,o,a,c,s,f,l,p,g,h,y;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",s=1,f=0;f<r.length;f++)if("string"==typeof(n=r[f]))c+=n;else{if(e=void 0!==n.precision,!(n=O(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(o=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,E(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,h=n.padRight,y=void 0,(y=g-p.length)<0?p:p=h?p+m(y):m(y)+p)),c+=n.arg||"",s+=1}return c}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function x(r){var e,t,n,i;for(t=[],i=0,n=T.exec(r);n;)(e=r.slice(i,T.lastIndex-n[0].length)).length&&t.push(e),t.push(k(n)),i=T.lastIndex,n=T.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function A(r){var e,t;if("string"!=typeof r)throw new TypeError(A("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[x(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return S.apply(null,e)}var I,F=Object.prototype,V=F.toString,P=F.__defineGetter__,C=F.__defineSetter__,$=F.__lookupGetter__,N=F.__lookupSetter__;I=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(A("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===V.call(t))throw new TypeError(A("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&($.call(r,e)||N.call(r,e)?(n=r.__proto__,r.__proto__=F,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&P&&P.call(r,e,t.get),a&&C&&C.call(r,e,t.set),r};var R=I;function U(r,e,t){R(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var B="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function L(){return B&&"symbol"==typeof Symbol.toStringTag}var G=Object.prototype.toString,Z=Object.prototype.hasOwnProperty;function M(r,e){return null!=r&&Z.call(r,e)}var W="function"==typeof Symbol?Symbol:void 0,X="function"==typeof W?W.toStringTag:"",Y=L()?function(r){var e,t,n;if(null==r)return G.call(r);t=r[X],e=M(r,X);try{r[X]=void 0}catch(e){return G.call(r)}return n=G.call(r),e?r[X]=t:delete r[X],n}:function(r){return G.call(r)},q=Array.isArray?Array.isArray:function(r){return"[object Array]"===Y(r)};function z(r){return null!==r&&"object"==typeof r}U(z,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(A("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!q(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(z));var D=/./;function H(r){return"boolean"==typeof r}var J=Boolean,K=Boolean.prototype.toString,Q=L();function rr(r){return"object"==typeof r&&(r instanceof J||(Q?function(r){try{return K.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===Y(r)))}function er(r){return H(r)||rr(r)}U(er,"isPrimitive",H),U(er,"isObject",rr);var tr="object"==typeof self?self:null,nr="object"==typeof window?window:null,ir="object"==typeof globalThis?globalThis:null,or=function(r){if(arguments.length){if(!H(r))throw new TypeError(A("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(ir)return ir;if(tr)return tr;if(nr)return nr;throw new Error("unexpected error. Unable to resolve global object.")}(),ar=or.document&&or.document.childNodes,ur=Int8Array;function cr(){return/^\s*function\s*([^(]*)/i}var sr=/^\s*function\s*([^(]*)/i;function fr(r){var e,t,n,i;if(("Object"===(t=Y(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=sr.exec(n.toString()))return e[1]}return z(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}U(cr,"REGEXP",sr);var lr="function"==typeof D||"object"==typeof ur||"function"==typeof ar?function(r){return fr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"==(e=typeof r)?fr(r).toLowerCase():e};function pr(r){return"function"===lr(r)}function gr(){var r,e=arguments,t="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}var hr,yr=Object,dr=Object.getPrototypeOf;hr=pr(Object.getPrototypeOf)?dr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===Y(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var br=hr,vr=Object.prototype;function wr(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!q(r)}(r)&&(e=function(r){return null==r?null:(r=yr(r),br(r))}(r),!e||!M(r,"constructor")&&M(e,"constructor")&&pr(e.constructor)&&"[object Function]"===Y(e.constructor)&&M(e,"isPrototypeOf")&&pr(e.isPrototypeOf)&&(e===vr||function(r){var e;for(e in r)if(!M(r,e))return!1;return!0}(r)))}function mr(r){return"number"==typeof r}var jr=Number,_r=jr.prototype.toString,Er=L();function Or(r){return"object"==typeof r&&(r instanceof jr||(Er?function(r){try{return _r.call(r),!0}catch(r){return!1}}(r):"[object Number]"===Y(r)))}function Sr(r){return mr(r)||Or(r)}function Tr(r){return r!=r}function kr(r){return mr(r)&&Tr(r)}function xr(r){return Or(r)&&Tr(r.valueOf())}function Ar(r){return kr(r)||xr(r)}U(Sr,"isPrimitive",mr),U(Sr,"isObject",Or),U(Ar,"isPrimitive",kr),U(Ar,"isObject",xr);var Ir=Math.floor;function Fr(r){return Ir(r)===r}var Vr=9007199254740991;function Pr(r){return"string"==typeof r}var Cr=String.prototype.valueOf,$r=L();function Nr(r){return"object"==typeof r&&(r instanceof String||($r?function(r){try{return Cr.call(r),!0}catch(r){return!1}}(r):"[object String]"===Y(r)))}function Rr(r){return Pr(r)||Nr(r)}U(Rr,"isPrimitive",Pr),U(Rr,"isObject",Nr);var Ur=Number.POSITIVE_INFINITY,Br=jr.NEGATIVE_INFINITY;function Lr(r){return r<Ur&&r>Br&&Fr(r)}function Gr(r){return mr(r)&&Lr(r)}function Zr(r){return Or(r)&&Lr(r.valueOf())}function Mr(r){return Gr(r)||Zr(r)}function Wr(r,e,t){var n,i,o;if(!("object"==typeof(o=r)&&null!==o&&"number"==typeof o.length&&Fr(o.length)&&o.length>=0&&o.length<=Vr||Pr(r)))throw new TypeError(A("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!Gr(t))throw new TypeError(A("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if(Ar(e)){for(;i<n;i++)if(Ar(r[i]))return i}else for(;i<n;i++)if(r[i]===e)return i;return-1}U(Mr,"isPrimitive",Gr),U(Mr,"isObject",Zr);var Xr=["values","keys","*"];return function(r,e,t){var n,i,o;if(!z(r))throw new TypeError(gr("1UF3L",r));if(n={returns:"values"},2===arguments.length)o=e;else{if(i=function(r,e){return wr(e)?(M(e,"thisArg")&&(r.thisArg=e.thisArg),M(e,"returns")&&(r.returns=e.returns,-1===Wr(Xr,r.returns))?new TypeError(gr("1UF4S","returns",Xr.join('", "'),r.returns)):null):new TypeError(gr("1UF2V",e))}(n,e),i)throw i;o=t}if(!pr(o))throw new TypeError(gr("1UF3q",o));return"values"===n.returns?function(r,e,t){var n,i,o,a,u;for(o in n=e.thisArg,i={},r)a=r[o],M(i,u=t.call(n,a,o))?i[u].push(a):i[u]=[a];return i}(r,n,o):"keys"===n.returns?function(r,e,t){var n,i,o,a;for(o in n=e.thisArg,i={},r)M(i,a=t.call(n,r[o],o))?i[a].push(o):i[a]=[o];return i}(r,n,o):function(r,e,t){var n,i,o,a,u;for(o in n=e.thisArg,i={},r)a=r[o],M(i,u=t.call(n,a,o))?i[u].push([o,a]):i[u]=[[o,a]];return i}(r,n,o)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).groupIn=e();
//# sourceMappingURL=browser.js.map
