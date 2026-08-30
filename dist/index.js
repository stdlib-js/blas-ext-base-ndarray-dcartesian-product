"use strict";var q=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var o=q(function(l,d){
var v=require('@stdlib/ndarray-base-numel-dimension/dist'),c=require('@stdlib/ndarray-base-strides/dist'),n=require('@stdlib/ndarray-base-stride/dist'),u=require('@stdlib/ndarray-base-offset/dist'),s=require('@stdlib/ndarray-base-data-buffer/dist'),f=require('@stdlib/blas-ext-base-dcartesian-product/dist').ndarray;function g(e){var r,t,i,a;return i=e[0],a=e[1],r=e[2],t=c(r,!1),f(v(i,0),v(a,0),s(i),n(i,0),u(i),s(a),n(a,0),u(a),s(r),t[0],t[1],u(r)),r}d.exports=g
});var m=o();module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
