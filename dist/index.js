"use strict";var v=function(e,t){return function(){try{return t||e((t={exports:{}}).exports,t),t.exports}catch(n){throw (t=0, n)}};};var c=v(function(M,g){
var x=require('@stdlib/assert-is-plain-object/dist'),l=require('@stdlib/assert-has-own-property/dist'),k=require('@stdlib/utils-index-of/dist'),o=require('@stdlib/error-tools-fmtprodmsg/dist'),f=["values","keys","*"];function P(e,t){return x(t)?(l(t,"thisArg")&&(e.thisArg=t.thisArg),l(t,"returns")&&(e.returns=t.returns,k(f,e.returns)===-1)?new TypeError(o('1UF4S',"returns",f.join('", "'),e.returns)):null):new TypeError(o('1UF2V',t));}g.exports=P
});var p=v(function(N,h){
var E=require('@stdlib/assert-has-own-property/dist');function I(e,t,n){var i,u,r,a,s;i=t.thisArg,u={};for(r in e)a=e[r],s=n.call(i,a,r),E(u,s)?u[s].push(a):u[s]=[a];return u}h.exports=I
});var m=v(function(Q,q){
var T=require('@stdlib/assert-has-own-property/dist');function V(e,t,n){var i,u,r,a;i=t.thisArg,u={};for(r in e)a=n.call(i,e[r],r),T(u,a)?u[a].push(r):u[a]=[r];return u}q.exports=V
});var y=v(function(R,w){
var b=require('@stdlib/assert-has-own-property/dist');function F(e,t,n){var i,u,r,a,s;i=t.thisArg,u={};for(r in e)a=e[r],s=n.call(i,a,r),b(u,s)?u[s].push([r,a]):u[s]=[[r,a]];return u}w.exports=F
});var d=v(function(S,O){
var L=require('@stdlib/assert-is-object-like/dist'),K=require('@stdlib/assert-is-function/dist'),A=require('@stdlib/error-tools-fmtprodmsg/dist'),z=c(),B=p(),C=m(),D=y();function G(e,t,n){var i,u,r;if(!L(e))throw new TypeError(A('1UF3L',e));if(i={returns:"values"},arguments.length===2)r=t;else{if(u=z(i,t),u)throw u;r=n}if(!K(r))throw new TypeError(A('1UF3q',r));return i.returns==="values"?B(e,i,r):i.returns==="keys"?C(e,i,r):D(e,i,r)}O.exports=G
});var H=d();module.exports=H;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
