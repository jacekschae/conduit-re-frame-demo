goog.provide('mranderson047.re_frame.v0v10v2.re_frame.utils');
goog.require('cljs.core');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.loggers');
/**
 * Dissociates an entry from a nested associative structure returning a new
 *   nested structure. keys is a sequence of keys. Any empty maps that result
 *   will not be present in the new structure.
 *   The key thing is that 'm' remains identical? to istelf if the path was never present
 */
mranderson047.re_frame.v0v10v2.re_frame.utils.dissoc_in = (function mranderson047$re_frame$v0v10v2$re_frame$utils$dissoc_in(m,p__26943){
var vec__26944 = p__26943;
var seq__26945 = cljs.core.seq(vec__26944);
var first__26946 = cljs.core.first(seq__26945);
var seq__26945__$1 = cljs.core.next(seq__26945);
var k = first__26946;
var ks = seq__26945__$1;
var keys = vec__26944;
if(ks){
var temp__5455__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(temp__5455__auto__)){
var nextmap = temp__5455__auto__;
var newmap = (mranderson047.re_frame.v0v10v2.re_frame.utils.dissoc_in.cljs$core$IFn$_invoke$arity$2 ? mranderson047.re_frame.v0v10v2.re_frame.utils.dissoc_in.cljs$core$IFn$_invoke$arity$2(nextmap,ks) : mranderson047.re_frame.v0v10v2.re_frame.utils.dissoc_in.call(null,nextmap,ks));
if(cljs.core.seq(newmap)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,newmap);
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
} else {
return m;
}
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
});
mranderson047.re_frame.v0v10v2.re_frame.utils.first_in_vector = (function mranderson047$re_frame$v0v10v2$re_frame$utils$first_in_vector(v){
if(cljs.core.vector_QMARK_(v)){
return cljs.core.first(v);
} else {
return mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: expected a vector, but got:",v], 0));
}
});

//# sourceMappingURL=mranderson047.re_frame.v0v10v2.re_frame.utils.js.map
