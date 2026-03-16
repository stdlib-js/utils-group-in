"use strict";var v=function(e,u){return function(){return u||e((u={exports:{}}).exports,u),u.exports}};var c=v(function(M,g){
var x=require('@stdlib/assert-is-plain-object/dist'),l=require('@stdlib/assert-has-own-property/dist'),k=require('@stdlib/utils-index-of/dist'),o=require('@stdlib/error-tools-fmtprodmsg/dist'),f=["values","keys","*"];function P(e,u){return x(u)?(l(u,"thisArg")&&(e.thisArg=u.thisArg),l(u,"returns")&&(e.returns=u.returns,k(f,e.returns)===-1)?new TypeError(o('1UF4S',"returns",f.join('", "'),e.returns)):null):new TypeError(o('1UF2V',u));}g.exports=P
});var p=v(function(N,h){
var E=require('@stdlib/assert-has-own-property/dist');function I(e,u,s){var i,t,r,a,n;i=u.thisArg,t={};for(r in e)a=e[r],n=s.call(i,a,r),E(t,n)?t[n].push(a):t[n]=[a];return t}h.exports=I
});var m=v(function(Q,q){
var T=require('@stdlib/assert-has-own-property/dist');function V(e,u,s){var i,t,r,a;i=u.thisArg,t={};for(r in e)a=s.call(i,e[r],r),T(t,a)?t[a].push(r):t[a]=[r];return t}q.exports=V
});var y=v(function(R,w){
var b=require('@stdlib/assert-has-own-property/dist');function F(e,u,s){var i,t,r,a,n;i=u.thisArg,t={};for(r in e)a=e[r],n=s.call(i,a,r),b(t,n)?t[n].push([r,a]):t[n]=[[r,a]];return t}w.exports=F
});var d=v(function(S,O){
var L=require('@stdlib/assert-is-object-like/dist'),K=require('@stdlib/assert-is-function/dist'),A=require('@stdlib/error-tools-fmtprodmsg/dist'),z=c(),B=p(),C=m(),D=y();function G(e,u,s){var i,t,r;if(!L(e))throw new TypeError(A('1UF3L',e));if(i={returns:"values"},arguments.length===2)r=u;else{if(t=z(i,u),t)throw t;r=s}if(!K(r))throw new TypeError(A('1UF3q',r));return i.returns==="values"?B(e,i,r):i.returns==="keys"?C(e,i,r):D(e,i,r)}O.exports=G
});var H=d();module.exports=H;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
