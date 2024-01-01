// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(r){return"string"==typeof r}var s=Math.abs,f=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,b=/e-(\d)$/,y=/^(\d+)$/,d=/^(\d+)e/,h=/\.0$/,v=/\.0*e/,w=/(\..*[^0])0*e/;function m(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":s(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,v,"e"),n=p.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,b,"e-0$1"),r.alternate&&(n=p.call(n,y,"$1."),n=p.call(n,d,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):f.call(n)}function j(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function _(r,e,t){var n=e-r.length;return n<0?r:r=t?r+j(n):j(n)+r}var E=String.fromCharCode,O=isNaN,S=Array.isArray;function T(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function k(r){var e,t,n,o,a,s,f,l,p;if(!S(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(s="",f=1,l=0;l<r.length;l++)if(c(n=r[l]))s+=n;else{if(e=void 0!==n.precision,!(n=T(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,O(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,O(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!O(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=O(a)?String(n.arg):E(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_(n.arg,n.width,n.padRight)),s+=n.arg||"",f+=1}return s}var A=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function V(r){var e,t,n,i;for(t=[],i=0,n=A.exec(r);n;)(e=r.slice(i,A.lastIndex-n[0].length)).length&&t.push(e),t.push(x(n)),i=A.lastIndex,n=A.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function I(r){return"string"==typeof r}function P(r){var e,t,n;if(!I(r))throw new TypeError(P("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=V(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return k.apply(null,t)}var F,N=Object.prototype,$=N.toString,C=N.__defineGetter__,B=N.__defineSetter__,L=N.__lookupGetter__,R=N.__lookupSetter__;F=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===$.call(r))throw new TypeError(P("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===$.call(t))throw new TypeError(P("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(L.call(r,e)||R.call(r,e)?(n=r.__proto__,r.__proto__=N,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&C&&C.call(r,e,t.get),a&&B&&B.call(r,e,t.set),r};var G=F;function Z(r,e,t){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return M&&"symbol"==typeof Symbol.toStringTag}var U=Object.prototype.toString;var X=Object.prototype.hasOwnProperty;function Y(r,e){return null!=r&&X.call(r,e)}var z="function"==typeof Symbol?Symbol:void 0,q="function"==typeof z?z.toStringTag:"";var D=W()?function(r){var e,t,n;if(null==r)return U.call(r);t=r[q],e=Y(r,q);try{r[q]=void 0}catch(e){return U.call(r)}return n=U.call(r),e?r[q]=t:delete r[q],n}:function(r){return U.call(r)};var H=Array.isArray?Array.isArray:function(r){return"[object Array]"===D(r)};function J(r){return null!==r&&"object"==typeof r}Z(J,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(P("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!H(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(J));var K=/./;function Q(r){return"boolean"==typeof r}var rr=Boolean,er=Boolean.prototype.toString;var tr=W();function nr(r){return"object"==typeof r&&(r instanceof rr||(tr?function(r){try{return er.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===D(r)))}function ir(r){return Q(r)||nr(r)}function or(){return new Function("return this;")()}Z(ir,"isPrimitive",Q),Z(ir,"isObject",nr);var ar="object"==typeof self?self:null,ur="object"==typeof window?window:null,cr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},sr="object"==typeof cr?cr:null,fr="object"==typeof globalThis?globalThis:null;var lr=function(r){if(arguments.length){if(!Q(r))throw new TypeError(P("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return or()}if(fr)return fr;if(ar)return ar;if(ur)return ur;if(sr)return sr;throw new Error("unexpected error. Unable to resolve global object.")}(),pr=lr.document&&lr.document.childNodes,gr=Int8Array;function br(){return/^\s*function\s*([^(]*)/i}var yr=/^\s*function\s*([^(]*)/i;function dr(r){var e,t,n,i;if(("Object"===(t=D(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=yr.exec(n.toString()))return e[1]}return J(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}Z(br,"REGEXP",yr);var hr="function"==typeof K||"object"==typeof gr||"function"==typeof pr?function(r){return dr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?dr(r).toLowerCase():e};function vr(r){return"function"===hr(r)}var wr,mr=Object,jr=Object.getPrototypeOf;wr=vr(Object.getPrototypeOf)?jr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===D(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var _r=wr;var Er=Object.prototype;function Or(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!H(r)}(r)&&(e=function(r){return null==r?null:(r=mr(r),_r(r))}(r),!e||!Y(r,"constructor")&&Y(e,"constructor")&&vr(e.constructor)&&"[object Function]"===D(e.constructor)&&Y(e,"isPrototypeOf")&&vr(e.isPrototypeOf)&&(e===Er||function(r){var e;for(e in r)if(!Y(r,e))return!1;return!0}(r)))}function Sr(r){return"number"==typeof r}var Tr=Number,kr=Tr.prototype.toString;var Ar=W();function xr(r){return"object"==typeof r&&(r instanceof Tr||(Ar?function(r){try{return kr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===D(r)))}function Vr(r){return Sr(r)||xr(r)}function Ir(r){return r!=r}function Pr(r){return Sr(r)&&Ir(r)}function Fr(r){return xr(r)&&Ir(r.valueOf())}function Nr(r){return Pr(r)||Fr(r)}Z(Vr,"isPrimitive",Sr),Z(Vr,"isObject",xr),Z(Nr,"isPrimitive",Pr),Z(Nr,"isObject",Fr);var $r=Math.floor;function Cr(r){return $r(r)===r}function Br(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Cr(r.length)&&r.length>=0&&r.length<=9007199254740991}function Lr(r){return"string"==typeof r}var Rr=String.prototype.valueOf;var Gr=W();function Zr(r){return"object"==typeof r&&(r instanceof String||(Gr?function(r){try{return Rr.call(r),!0}catch(r){return!1}}(r):"[object String]"===D(r)))}function Mr(r){return Lr(r)||Zr(r)}Z(Mr,"isPrimitive",Lr),Z(Mr,"isObject",Zr);var Wr=Number.POSITIVE_INFINITY,Ur=Tr.NEGATIVE_INFINITY;function Xr(r){return r<Wr&&r>Ur&&Cr(r)}function Yr(r){return Sr(r)&&Xr(r)}function zr(r){return xr(r)&&Xr(r.valueOf())}function qr(r){return Yr(r)||zr(r)}Z(qr,"isPrimitive",Yr),Z(qr,"isObject",zr);var Dr=["values","keys","*"];function Hr(r,e){return Or(e)?(Y(e,"thisArg")&&(r.thisArg=e.thisArg),Y(e,"returns")&&(r.returns=e.returns,-1===function(r,e,t){var n,i;if(!Br(r)&&!Lr(r))throw new TypeError(P("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!Yr(t))throw new TypeError(P("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if(Nr(e)){for(;i<n;i++)if(Nr(r[i]))return i}else for(;i<n;i++)if(r[i]===e)return i;return-1}(Dr,r.returns))?new TypeError(P('invalid option. `%s` option must be one of the following: "%s". Option: `%s`.',"returns",Dr.join('", "'),r.returns)):null):new TypeError(P("invalid argument. Options argument must be an object. Value: `%s`.",e))}function Jr(r,e,t){var n,i,o,a,u;for(o in n=e.thisArg,i={},r)a=r[o],Y(i,u=t.call(n,a,o))?i[u].push(a):i[u]=[a];return i}function Kr(r,e,t){var n,i,o,a;for(o in n=e.thisArg,i={},r)Y(i,a=t.call(n,r[o],o))?i[a].push(o):i[a]=[o];return i}function Qr(r,e,t){var n,i,o,a,u;for(o in n=e.thisArg,i={},r)a=r[o],Y(i,u=t.call(n,a,o))?i[u].push([o,a]):i[u]=[[o,a]];return i}function re(r,e,t){var n,i,o;if(!J(r))throw new TypeError(P("invalid argument. First argument must be an object. Value: `%s`.",r));if(n={returns:"values"},2===arguments.length)o=e;else{if(i=Hr(n,e))throw i;o=t}if(!vr(o))throw new TypeError(P("invalid argument. Last argument must be a function. Value: `%s`.",o));return"values"===n.returns?Jr(r,n,o):"keys"===n.returns?Kr(r,n,o):Qr(r,n,o)}export{re as default};
//# sourceMappingURL=mod.js.map
