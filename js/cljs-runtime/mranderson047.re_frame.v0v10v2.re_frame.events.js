goog.provide('mranderson047.re_frame.v0v10v2.re_frame.events');
goog.require('cljs.core');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.db');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.utils');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.interop');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.registrar');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.loggers');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.interceptor');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.trace');
mranderson047.re_frame.v0v10v2.re_frame.events.kind = new cljs.core.Keyword(null,"event","event",301435442);
if(cljs.core.truth_((mranderson047.re_frame.v0v10v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(mranderson047.re_frame.v0v10v2.re_frame.events.kind) : mranderson047.re_frame.v0v10v2.re_frame.registrar.kinds.call(null,mranderson047.re_frame.v0v10v2.re_frame.events.kind)))){
} else {
throw (new Error("Assert failed: (mranderson047.re-frame.v0v10v2.re-frame.registrar/kinds kind)"));
}
/**
 * `interceptors` might have nested collections, and contain nil elements.
 *   return a flat collection, with all nils removed.
 *   This function is 9/10 about giving good error messages.
 */
mranderson047.re_frame.v0v10v2.re_frame.events.flatten_and_remove_nils = (function mranderson047$re_frame$v0v10v2$re_frame$events$flatten_and_remove_nils(id,interceptors){
var make_chain = (function (p1__27256_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(p1__27256_SHARP_));
});
if(!(mranderson047.re_frame.v0v10v2.re_frame.interop.debug_enabled_QMARK_)){
return make_chain(interceptors);
} else {
if(cljs.core.coll_QMARK_(interceptors)){
} else {
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: when registering ",id,", expected a collection of interceptors, got: ",interceptors], 0));
}

var chain = make_chain(interceptors);
if(cljs.core.empty_QMARK_(chain)){
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: when registering ",id,", given an empty interceptor chain"], 0));
} else {
}

var temp__5457__auto___27257 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(mranderson047.re_frame.v0v10v2.re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__5457__auto___27257)){
var not_i_27258 = temp__5457__auto___27257;
if(cljs.core.fn_QMARK_(not_i_27258)){
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: when registering ",id,", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got: ",not_i_27258], 0));
} else {
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: when registering ",id,", expected interceptors, but got: ",not_i_27258], 0));
}
} else {
}

return chain;
}
});
/**
 * Associate the given event `id` with the given collection of `interceptors`.
 * 
 * `interceptors` may contain nested collections and there may be nils
 * at any level,so process this structure into a simple, nil-less vector
 * before registration.
 * 
 * Typically, an `event handler` will be at the end of the chain (wrapped
 * in an interceptor).
 */
mranderson047.re_frame.v0v10v2.re_frame.events.register = (function mranderson047$re_frame$v0v10v2$re_frame$events$register(id,interceptors){
return mranderson047.re_frame.v0v10v2.re_frame.registrar.register_handler(mranderson047.re_frame.v0v10v2.re_frame.events.kind,id,mranderson047.re_frame.v0v10v2.re_frame.events.flatten_and_remove_nils(id,interceptors));
});
mranderson047.re_frame.v0v10v2.re_frame.events._STAR_handling_STAR_ = null;
/**
 * Given an event vector `event-v`, look up the associated interceptor chain, and execute it.
 */
mranderson047.re_frame.v0v10v2.re_frame.events.handle = (function mranderson047$re_frame$v0v10v2$re_frame$events$handle(event_v){
var event_id = mranderson047.re_frame.v0v10v2.re_frame.utils.first_in_vector(event_v);
var temp__5455__auto__ = mranderson047.re_frame.v0v10v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(mranderson047.re_frame.v0v10v2.re_frame.events.kind,event_id,true);
if(cljs.core.truth_(temp__5455__auto__)){
var interceptors = temp__5455__auto__;
if(cljs.core.truth_(mranderson047.re_frame.v0v10v2.re_frame.events._STAR_handling_STAR_)){
return mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: while handling \"",mranderson047.re_frame.v0v10v2.re_frame.events._STAR_handling_STAR_,"\", dispatch-sync was called for \"",event_v,"\". You can't call dispatch-sync within an event handler."], 0));
} else {
var _STAR_handling_STAR_27266 = mranderson047.re_frame.v0v10v2.re_frame.events._STAR_handling_STAR_;
mranderson047.re_frame.v0v10v2.re_frame.events._STAR_handling_STAR_ = event_v;

try{if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_27267 = mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_;
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = mranderson047.re_frame.v0v10v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),mranderson047.re_frame.v0v10v2.re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return mranderson047.re_frame.v0v10v2.re_frame.interceptor.execute(event_v,interceptors);
}finally {if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__27221__auto___27315 = mranderson047.re_frame.v0v10v2.re_frame.interop.now();
var duration__27222__auto___27316 = (end__27221__auto___27315 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_));
var seq__27275_27317 = cljs.core.seq(cljs.core.deref(mranderson047.re_frame.v0v10v2.re_frame.trace.trace_cbs));
var chunk__27276_27318 = null;
var count__27277_27319 = (0);
var i__27278_27320 = (0);
while(true){
if((i__27278_27320 < count__27277_27319)){
var vec__27279_27325 = chunk__27276_27318.cljs$core$IIndexed$_nth$arity$2(null,i__27278_27320);
var k__27223__auto___27326 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27279_27325,(0),null);
var cb__27224__auto___27327 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27279_27325,(1),null);
try{var G__27300_27329 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__27222__auto___27316,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),mranderson047.re_frame.v0v10v2.re_frame.interop.now()], 0))], null);
(cb__27224__auto___27327.cljs$core$IFn$_invoke$arity$1 ? cb__27224__auto___27327.cljs$core$IFn$_invoke$arity$1(G__27300_27329) : cb__27224__auto___27327.call(null,G__27300_27329));
}catch (e27285){if((e27285 instanceof java.lang.Exception)){
var e__27225__auto___27330 = e27285;
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__27223__auto___27326,"while storing",mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__27225__auto___27330], 0));
} else {
throw e27285;

}
}

var G__27334 = seq__27275_27317;
var G__27335 = chunk__27276_27318;
var G__27336 = count__27277_27319;
var G__27337 = (i__27278_27320 + (1));
seq__27275_27317 = G__27334;
chunk__27276_27318 = G__27335;
count__27277_27319 = G__27336;
i__27278_27320 = G__27337;
continue;
} else {
var temp__5457__auto___27339 = cljs.core.seq(seq__27275_27317);
if(temp__5457__auto___27339){
var seq__27275_27341__$1 = temp__5457__auto___27339;
if(cljs.core.chunked_seq_QMARK_(seq__27275_27341__$1)){
var c__4319__auto___27342 = cljs.core.chunk_first(seq__27275_27341__$1);
var G__27343 = cljs.core.chunk_rest(seq__27275_27341__$1);
var G__27344 = c__4319__auto___27342;
var G__27345 = cljs.core.count(c__4319__auto___27342);
var G__27346 = (0);
seq__27275_27317 = G__27343;
chunk__27276_27318 = G__27344;
count__27277_27319 = G__27345;
i__27278_27320 = G__27346;
continue;
} else {
var vec__27305_27347 = cljs.core.first(seq__27275_27341__$1);
var k__27223__auto___27348 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27305_27347,(0),null);
var cb__27224__auto___27349 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27305_27347,(1),null);
try{var G__27309_27350 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__27222__auto___27316,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),mranderson047.re_frame.v0v10v2.re_frame.interop.now()], 0))], null);
(cb__27224__auto___27349.cljs$core$IFn$_invoke$arity$1 ? cb__27224__auto___27349.cljs$core$IFn$_invoke$arity$1(G__27309_27350) : cb__27224__auto___27349.call(null,G__27309_27350));
}catch (e27308){if((e27308 instanceof java.lang.Exception)){
var e__27225__auto___27351 = e27308;
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__27223__auto___27348,"while storing",mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__27225__auto___27351], 0));
} else {
throw e27308;

}
}

var G__27352 = cljs.core.next(seq__27275_27341__$1);
var G__27353 = null;
var G__27354 = (0);
var G__27355 = (0);
seq__27275_27317 = G__27352;
chunk__27276_27318 = G__27353;
count__27277_27319 = G__27354;
i__27278_27320 = G__27355;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_27267;
}} else {
return mranderson047.re_frame.v0v10v2.re_frame.interceptor.execute(event_v,interceptors);
}
}finally {mranderson047.re_frame.v0v10v2.re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_27266;
}}
} else {
return null;
}
});

//# sourceMappingURL=mranderson047.re_frame.v0v10v2.re_frame.events.js.map
