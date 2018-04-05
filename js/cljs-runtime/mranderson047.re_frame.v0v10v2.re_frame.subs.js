goog.provide('mranderson047.re_frame.v0v10v2.re_frame.subs');
goog.require('cljs.core');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.db');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.interop');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.loggers');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.utils');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.registrar');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.trace');
mranderson047.re_frame.v0v10v2.re_frame.subs.kind = new cljs.core.Keyword(null,"sub","sub",-2093760025);
if(cljs.core.truth_((mranderson047.re_frame.v0v10v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(mranderson047.re_frame.v0v10v2.re_frame.subs.kind) : mranderson047.re_frame.v0v10v2.re_frame.registrar.kinds.call(null,mranderson047.re_frame.v0v10v2.re_frame.subs.kind)))){
} else {
throw (new Error("Assert failed: (mranderson047.re-frame.v0v10v2.re-frame.registrar/kinds kind)"));
}
mranderson047.re_frame.v0v10v2.re_frame.subs.query__GT_reaction = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Causes all subscriptions to be removed from the cache.
 *   Does this by:
 *   1. running on-dispose on all cached subscriptions
 *   2. These on-dispose will then do the removal of themselves.
 * 
 *   This is a development time tool. Useful when reloading Figwheel code
 *   after a React exception, because React components won't have been
 *   cleaned up properly. And this, in turn, means the subscriptions within those
 *   components won't have been cleaned up correctly. So this forces the issue.
 */
mranderson047.re_frame.v0v10v2.re_frame.subs.clear_subscription_cache_BANG_ = (function mranderson047$re_frame$v0v10v2$re_frame$subs$clear_subscription_cache_BANG_(){
var seq__27259_27271 = cljs.core.seq(cljs.core.deref(mranderson047.re_frame.v0v10v2.re_frame.subs.query__GT_reaction));
var chunk__27260_27272 = null;
var count__27261_27273 = (0);
var i__27262_27274 = (0);
while(true){
if((i__27262_27274 < count__27261_27273)){
var vec__27263_27282 = chunk__27260_27272.cljs$core$IIndexed$_nth$arity$2(null,i__27262_27274);
var k_27283 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27263_27282,(0),null);
var rxn_27284 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27263_27282,(1),null);
mranderson047.re_frame.v0v10v2.re_frame.interop.dispose_BANG_(rxn_27284);


var G__27286 = seq__27259_27271;
var G__27287 = chunk__27260_27272;
var G__27288 = count__27261_27273;
var G__27289 = (i__27262_27274 + (1));
seq__27259_27271 = G__27286;
chunk__27260_27272 = G__27287;
count__27261_27273 = G__27288;
i__27262_27274 = G__27289;
continue;
} else {
var temp__5457__auto___27290 = cljs.core.seq(seq__27259_27271);
if(temp__5457__auto___27290){
var seq__27259_27291__$1 = temp__5457__auto___27290;
if(cljs.core.chunked_seq_QMARK_(seq__27259_27291__$1)){
var c__4319__auto___27292 = cljs.core.chunk_first(seq__27259_27291__$1);
var G__27293 = cljs.core.chunk_rest(seq__27259_27291__$1);
var G__27294 = c__4319__auto___27292;
var G__27295 = cljs.core.count(c__4319__auto___27292);
var G__27296 = (0);
seq__27259_27271 = G__27293;
chunk__27260_27272 = G__27294;
count__27261_27273 = G__27295;
i__27262_27274 = G__27296;
continue;
} else {
var vec__27268_27297 = cljs.core.first(seq__27259_27291__$1);
var k_27298 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27268_27297,(0),null);
var rxn_27299 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27268_27297,(1),null);
mranderson047.re_frame.v0v10v2.re_frame.interop.dispose_BANG_(rxn_27299);


var G__27301 = cljs.core.next(seq__27259_27291__$1);
var G__27302 = null;
var G__27303 = (0);
var G__27304 = (0);
seq__27259_27271 = G__27301;
chunk__27260_27272 = G__27302;
count__27261_27273 = G__27303;
i__27262_27274 = G__27304;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.not_empty(cljs.core.deref(mranderson047.re_frame.v0v10v2.re_frame.subs.query__GT_reaction)))){
return mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Subscription cache should be empty after clearing it."], 0));
} else {
return null;
}
});
/**
 * Unregisters all existing subscription handlers
 */
mranderson047.re_frame.v0v10v2.re_frame.subs.clear_all_handlers_BANG_ = (function mranderson047$re_frame$v0v10v2$re_frame$subs$clear_all_handlers_BANG_(){
mranderson047.re_frame.v0v10v2.re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$1(mranderson047.re_frame.v0v10v2.re_frame.subs.kind);

return mranderson047.re_frame.v0v10v2.re_frame.subs.clear_subscription_cache_BANG_();
});
/**
 * cache the reaction r
 */
mranderson047.re_frame.v0v10v2.re_frame.subs.cache_and_return = (function mranderson047$re_frame$v0v10v2$re_frame$subs$cache_and_return(query_v,dynv,r){
var cache_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dynv], null);
mranderson047.re_frame.v0v10v2.re_frame.interop.add_on_dispose_BANG_(r,((function (cache_key){
return (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mranderson047.re_frame.v0v10v2.re_frame.subs.query__GT_reaction,cljs.core.dissoc,cache_key);

if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_27310 = mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_;
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = mranderson047.re_frame.v0v10v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),mranderson047.re_frame.v0v10v2.re_frame.utils.first_in_vector(query_v),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_v,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson047.re_frame.v0v10v2.re_frame.interop.reagent_id(r)], null)], null));

try{try{return null;
}finally {if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__27221__auto___27356 = mranderson047.re_frame.v0v10v2.re_frame.interop.now();
var duration__27222__auto___27357 = (end__27221__auto___27356 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_));
var seq__27311_27358 = cljs.core.seq(cljs.core.deref(mranderson047.re_frame.v0v10v2.re_frame.trace.trace_cbs));
var chunk__27312_27359 = null;
var count__27313_27360 = (0);
var i__27314_27361 = (0);
while(true){
if((i__27314_27361 < count__27313_27360)){
var vec__27321_27362 = chunk__27312_27359.cljs$core$IIndexed$_nth$arity$2(null,i__27314_27361);
var k__27223__auto___27363 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27321_27362,(0),null);
var cb__27224__auto___27364 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27321_27362,(1),null);
try{var G__27328_27365 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__27222__auto___27357,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),mranderson047.re_frame.v0v10v2.re_frame.interop.now()], 0))], null);
(cb__27224__auto___27364.cljs$core$IFn$_invoke$arity$1 ? cb__27224__auto___27364.cljs$core$IFn$_invoke$arity$1(G__27328_27365) : cb__27224__auto___27364.call(null,G__27328_27365));
}catch (e27324){if((e27324 instanceof java.lang.Exception)){
var e__27225__auto___27366 = e27324;
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__27223__auto___27363,"while storing",mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__27225__auto___27366], 0));
} else {
throw e27324;

}
}

var G__27367 = seq__27311_27358;
var G__27368 = chunk__27312_27359;
var G__27369 = count__27313_27360;
var G__27370 = (i__27314_27361 + (1));
seq__27311_27358 = G__27367;
chunk__27312_27359 = G__27368;
count__27313_27360 = G__27369;
i__27314_27361 = G__27370;
continue;
} else {
var temp__5457__auto___27371 = cljs.core.seq(seq__27311_27358);
if(temp__5457__auto___27371){
var seq__27311_27372__$1 = temp__5457__auto___27371;
if(cljs.core.chunked_seq_QMARK_(seq__27311_27372__$1)){
var c__4319__auto___27373 = cljs.core.chunk_first(seq__27311_27372__$1);
var G__27374 = cljs.core.chunk_rest(seq__27311_27372__$1);
var G__27375 = c__4319__auto___27373;
var G__27376 = cljs.core.count(c__4319__auto___27373);
var G__27377 = (0);
seq__27311_27358 = G__27374;
chunk__27312_27359 = G__27375;
count__27313_27360 = G__27376;
i__27314_27361 = G__27377;
continue;
} else {
var vec__27331_27378 = cljs.core.first(seq__27311_27372__$1);
var k__27223__auto___27379 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27331_27378,(0),null);
var cb__27224__auto___27380 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27331_27378,(1),null);
try{var G__27340_27381 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__27222__auto___27357,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),mranderson047.re_frame.v0v10v2.re_frame.interop.now()], 0))], null);
(cb__27224__auto___27380.cljs$core$IFn$_invoke$arity$1 ? cb__27224__auto___27380.cljs$core$IFn$_invoke$arity$1(G__27340_27381) : cb__27224__auto___27380.call(null,G__27340_27381));
}catch (e27338){if((e27338 instanceof java.lang.Exception)){
var e__27225__auto___27382 = e27338;
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__27223__auto___27379,"while storing",mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__27225__auto___27382], 0));
} else {
throw e27338;

}
}

var G__27383 = cljs.core.next(seq__27311_27372__$1);
var G__27384 = null;
var G__27385 = (0);
var G__27386 = (0);
seq__27311_27358 = G__27383;
chunk__27312_27359 = G__27384;
count__27313_27360 = G__27385;
i__27314_27361 = G__27386;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_27310;
}} else {
return null;
}
});})(cache_key))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(mranderson047.re_frame.v0v10v2.re_frame.subs.query__GT_reaction,cljs.core.assoc,cache_key,r);

if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__27226__auto___27387 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson047.re_frame.v0v10v2.re_frame.interop.reagent_id(r)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson047.re_frame.v0v10v2.re_frame.interop.reagent_id(r)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__27226__auto___27387;

} else {
}

return r;
});
mranderson047.re_frame.v0v10v2.re_frame.subs.cache_lookup = (function mranderson047$re_frame$v0v10v2$re_frame$subs$cache_lookup(var_args){
var G__27392 = arguments.length;
switch (G__27392) {
case 1:
return mranderson047.re_frame.v0v10v2.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mranderson047.re_frame.v0v10v2.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson047.re_frame.v0v10v2.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1 = (function (query_v){
return mranderson047.re_frame.v0v10v2.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2(query_v,cljs.core.PersistentVector.EMPTY);
});

mranderson047.re_frame.v0v10v2.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2 = (function (query_v,dyn_v){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mranderson047.re_frame.v0v10v2.re_frame.subs.query__GT_reaction),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dyn_v], null));
});

mranderson047.re_frame.v0v10v2.re_frame.subs.cache_lookup.cljs$lang$maxFixedArity = 2;

/**
 * Given a `query`, returns a Reagent `reaction` which, over
 *   time, reactively delivers a stream of values. So in FRP-ish terms,
 *   it returns a Signal.
 * 
 *   To obtain the returned Signal/Stream's current value, it must be `deref`ed.
 * 
 *   `query` is a vector of at least one element. The first element is the
 *   `query-id`, typically a namespaced keyword. The rest of the vector's
 *   elements are optional, additional values which parameterise the query
 *   performed.
 * 
 *   `dynv` is an optional 3rd argument, `which is a vector of further input
 *   signals (atoms, reactions, etc), NOT values. This argument exists for
 *   historical reasons and is borderline deprecated these days.
 * 
 *   Example Usage:
 *   --------------
 * 
 *  (subscribe [:items])
 *  (subscribe [:items "blue" :small])
 *  (subscribe [:items {:colour "blue"  :size :small}])
 * 
 *   Note: for any given call to `subscribe` there must have been a previous call
 *   to `reg-sub`, registering the query handler (function) for the `query-id` given.
 * 
 *   Hint
 *   ----
 * 
 *   When used in a view function BE SURE to `deref` the returned value.
 *   In fact, to avoid any mistakes, some prefer to define:
 * 
 *   (def <sub  (comp deref mranderson047.re-frame.v0v10v2.re-frame.core/subscribe))
 * 
 *   And then, within their views, they call  `(<sub [:items :small])` rather
 *   than using `subscribe` directly.
 * 
 *   De-duplication
 *   --------------
 * 
 *   XXX
 *   
 */
mranderson047.re_frame.v0v10v2.re_frame.subs.subscribe = (function mranderson047$re_frame$v0v10v2$re_frame$subs$subscribe(var_args){
var G__27399 = arguments.length;
switch (G__27399) {
case 1:
return mranderson047.re_frame.v0v10v2.re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mranderson047.re_frame.v0v10v2.re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson047.re_frame.v0v10v2.re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1 = (function (query){
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_27400 = mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_;
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = mranderson047.re_frame.v0v10v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),mranderson047.re_frame.v0v10v2.re_frame.utils.first_in_vector(query),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","create","sub/create",-1301317560),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query], null)], null));

try{try{var temp__5455__auto__ = mranderson047.re_frame.v0v10v2.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1(query);
if(cljs.core.truth_(temp__5455__auto__)){
var cached = temp__5455__auto__;
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__27226__auto___27445 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson047.re_frame.v0v10v2.re_frame.interop.reagent_id(cached)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson047.re_frame.v0v10v2.re_frame.interop.reagent_id(cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__27226__auto___27445;

} else {
}

return cached;
} else {
var query_id = mranderson047.re_frame.v0v10v2.re_frame.utils.first_in_vector(query);
var handler_fn = mranderson047.re_frame.v0v10v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(mranderson047.re_frame.v0v10v2.re_frame.subs.kind,query_id);
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__27226__auto___27446 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__27226__auto___27446;

} else {
}

if((handler_fn == null)){
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__27226__auto___27447 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__27226__auto___27447;

} else {
}

return mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["re-frame: no subscription handler registered for: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),"\". Returning a nil subscription."].join('')], 0));
} else {
return mranderson047.re_frame.v0v10v2.re_frame.subs.cache_and_return(query,cljs.core.PersistentVector.EMPTY,(handler_fn.cljs$core$IFn$_invoke$arity$2 ? handler_fn.cljs$core$IFn$_invoke$arity$2(mranderson047.re_frame.v0v10v2.re_frame.db.app_db,query) : handler_fn.call(null,mranderson047.re_frame.v0v10v2.re_frame.db.app_db,query)));
}
}
}finally {if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__27221__auto___27448 = mranderson047.re_frame.v0v10v2.re_frame.interop.now();
var duration__27222__auto___27449 = (end__27221__auto___27448 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_));
var seq__27401_27450 = cljs.core.seq(cljs.core.deref(mranderson047.re_frame.v0v10v2.re_frame.trace.trace_cbs));
var chunk__27402_27451 = null;
var count__27403_27452 = (0);
var i__27404_27453 = (0);
while(true){
if((i__27404_27453 < count__27403_27452)){
var vec__27405_27454 = chunk__27402_27451.cljs$core$IIndexed$_nth$arity$2(null,i__27404_27453);
var k__27223__auto___27455 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27405_27454,(0),null);
var cb__27224__auto___27456 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27405_27454,(1),null);
try{var G__27409_27457 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__27222__auto___27449,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),mranderson047.re_frame.v0v10v2.re_frame.interop.now()], 0))], null);
(cb__27224__auto___27456.cljs$core$IFn$_invoke$arity$1 ? cb__27224__auto___27456.cljs$core$IFn$_invoke$arity$1(G__27409_27457) : cb__27224__auto___27456.call(null,G__27409_27457));
}catch (e27408){if((e27408 instanceof java.lang.Exception)){
var e__27225__auto___27458 = e27408;
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__27223__auto___27455,"while storing",mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__27225__auto___27458], 0));
} else {
throw e27408;

}
}

var G__27461 = seq__27401_27450;
var G__27462 = chunk__27402_27451;
var G__27463 = count__27403_27452;
var G__27464 = (i__27404_27453 + (1));
seq__27401_27450 = G__27461;
chunk__27402_27451 = G__27462;
count__27403_27452 = G__27463;
i__27404_27453 = G__27464;
continue;
} else {
var temp__5457__auto___27468 = cljs.core.seq(seq__27401_27450);
if(temp__5457__auto___27468){
var seq__27401_27469__$1 = temp__5457__auto___27468;
if(cljs.core.chunked_seq_QMARK_(seq__27401_27469__$1)){
var c__4319__auto___27470 = cljs.core.chunk_first(seq__27401_27469__$1);
var G__27471 = cljs.core.chunk_rest(seq__27401_27469__$1);
var G__27472 = c__4319__auto___27470;
var G__27473 = cljs.core.count(c__4319__auto___27470);
var G__27474 = (0);
seq__27401_27450 = G__27471;
chunk__27402_27451 = G__27472;
count__27403_27452 = G__27473;
i__27404_27453 = G__27474;
continue;
} else {
var vec__27410_27475 = cljs.core.first(seq__27401_27469__$1);
var k__27223__auto___27476 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27410_27475,(0),null);
var cb__27224__auto___27477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27410_27475,(1),null);
try{var G__27416_27478 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__27222__auto___27449,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),mranderson047.re_frame.v0v10v2.re_frame.interop.now()], 0))], null);
(cb__27224__auto___27477.cljs$core$IFn$_invoke$arity$1 ? cb__27224__auto___27477.cljs$core$IFn$_invoke$arity$1(G__27416_27478) : cb__27224__auto___27477.call(null,G__27416_27478));
}catch (e27414){if((e27414 instanceof java.lang.Exception)){
var e__27225__auto___27479 = e27414;
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__27223__auto___27476,"while storing",mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__27225__auto___27479], 0));
} else {
throw e27414;

}
}

var G__27480 = cljs.core.next(seq__27401_27469__$1);
var G__27481 = null;
var G__27482 = (0);
var G__27483 = (0);
seq__27401_27450 = G__27480;
chunk__27402_27451 = G__27481;
count__27403_27452 = G__27482;
i__27404_27453 = G__27483;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_27400;
}} else {
var temp__5455__auto__ = mranderson047.re_frame.v0v10v2.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1(query);
if(cljs.core.truth_(temp__5455__auto__)){
var cached = temp__5455__auto__;
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__27226__auto___27484 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson047.re_frame.v0v10v2.re_frame.interop.reagent_id(cached)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson047.re_frame.v0v10v2.re_frame.interop.reagent_id(cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__27226__auto___27484;

} else {
}

return cached;
} else {
var query_id = mranderson047.re_frame.v0v10v2.re_frame.utils.first_in_vector(query);
var handler_fn = mranderson047.re_frame.v0v10v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(mranderson047.re_frame.v0v10v2.re_frame.subs.kind,query_id);
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__27226__auto___27485 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__27226__auto___27485;

} else {
}

if((handler_fn == null)){
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__27226__auto___27489 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__27226__auto___27489;

} else {
}

return mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["re-frame: no subscription handler registered for: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),"\". Returning a nil subscription."].join('')], 0));
} else {
return mranderson047.re_frame.v0v10v2.re_frame.subs.cache_and_return(query,cljs.core.PersistentVector.EMPTY,(handler_fn.cljs$core$IFn$_invoke$arity$2 ? handler_fn.cljs$core$IFn$_invoke$arity$2(mranderson047.re_frame.v0v10v2.re_frame.db.app_db,query) : handler_fn.call(null,mranderson047.re_frame.v0v10v2.re_frame.db.app_db,query)));
}
}
}
});

mranderson047.re_frame.v0v10v2.re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2 = (function (query,dynv){
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_27419 = mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_;
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = mranderson047.re_frame.v0v10v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),mranderson047.re_frame.v0v10v2.re_frame.utils.first_in_vector(query),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","create","sub/create",-1301317560),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query,new cljs.core.Keyword(null,"dyn-v","dyn-v",949994592),dynv], null)], null));

try{try{var temp__5455__auto__ = mranderson047.re_frame.v0v10v2.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2(query,dynv);
if(cljs.core.truth_(temp__5455__auto__)){
var cached = temp__5455__auto__;
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__27226__auto___27490 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson047.re_frame.v0v10v2.re_frame.interop.reagent_id(cached)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson047.re_frame.v0v10v2.re_frame.interop.reagent_id(cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__27226__auto___27490;

} else {
}

return cached;
} else {
var query_id = mranderson047.re_frame.v0v10v2.re_frame.utils.first_in_vector(query);
var handler_fn = mranderson047.re_frame.v0v10v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(mranderson047.re_frame.v0v10v2.re_frame.subs.kind,query_id);
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__27226__auto___27491 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__27226__auto___27491;

} else {
}

if(mranderson047.re_frame.v0v10v2.re_frame.interop.debug_enabled_QMARK_){
var temp__5457__auto___27492 = cljs.core.not_empty(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(mranderson047.re_frame.v0v10v2.re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__5457__auto___27492)){
var not_reactive_27493 = temp__5457__auto___27492;
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_27493], 0));
} else {
}
} else {
}

if((handler_fn == null)){
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__27226__auto___27494 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__27226__auto___27494;

} else {
}

return mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["re-frame: no subscription handler registered for: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),"\". Returning a nil subscription."].join('')], 0));
} else {
var dyn_vals = mranderson047.re_frame.v0v10v2.re_frame.interop.make_reaction(((function (query_id,handler_fn,temp__5455__auto__,_STAR_current_trace_STAR_27419){
return (function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__5455__auto__,_STAR_current_trace_STAR_27419))
);
var sub = mranderson047.re_frame.v0v10v2.re_frame.interop.make_reaction(((function (dyn_vals,query_id,handler_fn,temp__5455__auto__,_STAR_current_trace_STAR_27419){
return (function (){
var G__27438 = mranderson047.re_frame.v0v10v2.re_frame.db.app_db;
var G__27439 = query;
var G__27440 = cljs.core.deref(dyn_vals);
return (handler_fn.cljs$core$IFn$_invoke$arity$3 ? handler_fn.cljs$core$IFn$_invoke$arity$3(G__27438,G__27439,G__27440) : handler_fn.call(null,G__27438,G__27439,G__27440));
});})(dyn_vals,query_id,handler_fn,temp__5455__auto__,_STAR_current_trace_STAR_27419))
);
return mranderson047.re_frame.v0v10v2.re_frame.subs.cache_and_return(query,dynv,mranderson047.re_frame.v0v10v2.re_frame.interop.make_reaction(((function (dyn_vals,sub,query_id,handler_fn,temp__5455__auto__,_STAR_current_trace_STAR_27419){
return (function (){
return cljs.core.deref(cljs.core.deref(sub));
});})(dyn_vals,sub,query_id,handler_fn,temp__5455__auto__,_STAR_current_trace_STAR_27419))
));
}
}
}finally {if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__27221__auto___27496 = mranderson047.re_frame.v0v10v2.re_frame.interop.now();
var duration__27222__auto___27497 = (end__27221__auto___27496 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_));
var seq__27420_27498 = cljs.core.seq(cljs.core.deref(mranderson047.re_frame.v0v10v2.re_frame.trace.trace_cbs));
var chunk__27421_27499 = null;
var count__27422_27500 = (0);
var i__27423_27501 = (0);
while(true){
if((i__27423_27501 < count__27422_27500)){
var vec__27424_27502 = chunk__27421_27499.cljs$core$IIndexed$_nth$arity$2(null,i__27423_27501);
var k__27223__auto___27503 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27424_27502,(0),null);
var cb__27224__auto___27504 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27424_27502,(1),null);
try{var G__27428_27505 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__27222__auto___27497,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),mranderson047.re_frame.v0v10v2.re_frame.interop.now()], 0))], null);
(cb__27224__auto___27504.cljs$core$IFn$_invoke$arity$1 ? cb__27224__auto___27504.cljs$core$IFn$_invoke$arity$1(G__27428_27505) : cb__27224__auto___27504.call(null,G__27428_27505));
}catch (e27427){if((e27427 instanceof java.lang.Exception)){
var e__27225__auto___27506 = e27427;
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__27223__auto___27503,"while storing",mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__27225__auto___27506], 0));
} else {
throw e27427;

}
}

var G__27507 = seq__27420_27498;
var G__27508 = chunk__27421_27499;
var G__27509 = count__27422_27500;
var G__27510 = (i__27423_27501 + (1));
seq__27420_27498 = G__27507;
chunk__27421_27499 = G__27508;
count__27422_27500 = G__27509;
i__27423_27501 = G__27510;
continue;
} else {
var temp__5457__auto___27511 = cljs.core.seq(seq__27420_27498);
if(temp__5457__auto___27511){
var seq__27420_27512__$1 = temp__5457__auto___27511;
if(cljs.core.chunked_seq_QMARK_(seq__27420_27512__$1)){
var c__4319__auto___27513 = cljs.core.chunk_first(seq__27420_27512__$1);
var G__27514 = cljs.core.chunk_rest(seq__27420_27512__$1);
var G__27515 = c__4319__auto___27513;
var G__27516 = cljs.core.count(c__4319__auto___27513);
var G__27517 = (0);
seq__27420_27498 = G__27514;
chunk__27421_27499 = G__27515;
count__27422_27500 = G__27516;
i__27423_27501 = G__27517;
continue;
} else {
var vec__27430_27518 = cljs.core.first(seq__27420_27512__$1);
var k__27223__auto___27519 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27430_27518,(0),null);
var cb__27224__auto___27520 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27430_27518,(1),null);
try{var G__27434_27521 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__27222__auto___27497,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),mranderson047.re_frame.v0v10v2.re_frame.interop.now()], 0))], null);
(cb__27224__auto___27520.cljs$core$IFn$_invoke$arity$1 ? cb__27224__auto___27520.cljs$core$IFn$_invoke$arity$1(G__27434_27521) : cb__27224__auto___27520.call(null,G__27434_27521));
}catch (e27433){if((e27433 instanceof java.lang.Exception)){
var e__27225__auto___27522 = e27433;
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__27223__auto___27519,"while storing",mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__27225__auto___27522], 0));
} else {
throw e27433;

}
}

var G__27523 = cljs.core.next(seq__27420_27512__$1);
var G__27524 = null;
var G__27525 = (0);
var G__27526 = (0);
seq__27420_27498 = G__27523;
chunk__27421_27499 = G__27524;
count__27422_27500 = G__27525;
i__27423_27501 = G__27526;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_27419;
}} else {
var temp__5455__auto__ = mranderson047.re_frame.v0v10v2.re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2(query,dynv);
if(cljs.core.truth_(temp__5455__auto__)){
var cached = temp__5455__auto__;
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__27226__auto___27527 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson047.re_frame.v0v10v2.re_frame.interop.reagent_id(cached)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),mranderson047.re_frame.v0v10v2.re_frame.interop.reagent_id(cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__27226__auto___27527;

} else {
}

return cached;
} else {
var query_id = mranderson047.re_frame.v0v10v2.re_frame.utils.first_in_vector(query);
var handler_fn = mranderson047.re_frame.v0v10v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(mranderson047.re_frame.v0v10v2.re_frame.subs.kind,query_id);
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__27226__auto___27528 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__27226__auto___27528;

} else {
}

if(mranderson047.re_frame.v0v10v2.re_frame.interop.debug_enabled_QMARK_){
var temp__5457__auto___27529 = cljs.core.not_empty(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(mranderson047.re_frame.v0v10v2.re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__5457__auto___27529)){
var not_reactive_27530 = temp__5457__auto___27529;
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_27530], 0));
} else {
}
} else {
}

if((handler_fn == null)){
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__27226__auto___27531 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__27226__auto___27531;

} else {
}

return mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["re-frame: no subscription handler registered for: \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),"\". Returning a nil subscription."].join('')], 0));
} else {
var dyn_vals = mranderson047.re_frame.v0v10v2.re_frame.interop.make_reaction(((function (query_id,handler_fn,temp__5455__auto__){
return (function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__5455__auto__))
);
var sub = mranderson047.re_frame.v0v10v2.re_frame.interop.make_reaction(((function (dyn_vals,query_id,handler_fn,temp__5455__auto__){
return (function (){
var G__27441 = mranderson047.re_frame.v0v10v2.re_frame.db.app_db;
var G__27442 = query;
var G__27443 = cljs.core.deref(dyn_vals);
return (handler_fn.cljs$core$IFn$_invoke$arity$3 ? handler_fn.cljs$core$IFn$_invoke$arity$3(G__27441,G__27442,G__27443) : handler_fn.call(null,G__27441,G__27442,G__27443));
});})(dyn_vals,query_id,handler_fn,temp__5455__auto__))
);
return mranderson047.re_frame.v0v10v2.re_frame.subs.cache_and_return(query,dynv,mranderson047.re_frame.v0v10v2.re_frame.interop.make_reaction(((function (dyn_vals,sub,query_id,handler_fn,temp__5455__auto__){
return (function (){
return cljs.core.deref(cljs.core.deref(sub));
});})(dyn_vals,sub,query_id,handler_fn,temp__5455__auto__))
));
}
}
}
});

mranderson047.re_frame.v0v10v2.re_frame.subs.subscribe.cljs$lang$maxFixedArity = 2;

/**
 * Returns a new version of 'm' in which 'f' has been applied to each value.
 *   (map-vals inc {:a 4, :b 2}) => {:a 5, :b 3}
 */
mranderson047.re_frame.v0v10v2.re_frame.subs.map_vals = (function mranderson047$re_frame$v0v10v2$re_frame$subs$map_vals(f,m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.empty(m),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__27532){
var vec__27533 = p__27532;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27533,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27533,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v))], null);
})),m);
});
mranderson047.re_frame.v0v10v2.re_frame.subs.deref_input_signals = (function mranderson047$re_frame$v0v10v2$re_frame$subs$deref_input_signals(signals,query_id){
var signals__$1 = ((cljs.core.sequential_QMARK_(signals))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref,signals):((cljs.core.map_QMARK_(signals))?mranderson047.re_frame.v0v10v2.re_frame.subs.map_vals(cljs.core.deref,signals):(cljs.core.truth_(mranderson047.re_frame.v0v10v2.re_frame.interop.deref_QMARK_(signals))?cljs.core.deref(signals):mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in the reg-sub for ",query_id,", the input-signals function returns: ",signals], 0))
)));
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__27226__auto___27536 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-signals","input-signals",563633497),cljs.core.map.cljs$core$IFn$_invoke$arity$2(mranderson047.re_frame.v0v10v2.re_frame.interop.reagent_id,signals__$1)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-signals","input-signals",563633497),cljs.core.map.cljs$core$IFn$_invoke$arity$2(mranderson047.re_frame.v0v10v2.re_frame.interop.reagent_id,signals__$1)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__27226__auto___27536;

} else {
}

return signals__$1;
});
/**
 * For a given `query-id`, register a `computation` function and input `signals`.
 * 
 *   At an abstract level, a call to this function allows you to register 'the mechanism'
 *   to later fulfil a call to `(subscribe [query-id ...])`.
 * 
 *   To say that another way, reg-sub allows you to create a template for a node
 *   in the signal graph. But note: reg-sub does not cause a node to be created.
 *   It simply allows you to register the template from which such a
 *   node could be created, if it were needed, sometime later, when the call
 *   to `subscribe` is made.
 * 
 *   reg-sub needs three things:
 *  - a `query-id`
 *  - the required inputs for this node
 *  - a computation function for this node
 * 
 *   The `query-id` is always the 1st argument to reg-sub and it is typically
 *   a namespaced keyword.
 * 
 *   A computation function is always the last argument and it has this general form:
 *  `(input-signals, query-vector) -> a-value`
 * 
 *   What goes in between the 1st and last args can vary, but whatever is there will
 *   define the input signals part of the template, and, as a result, it will control
 *   what values the computation functions gets as a first argument.
 * 
 *   There's 3 ways this function can be called - 3 ways to supply input signals:
 * 
 *   1. No input signals given:
 * 
 *   (reg-sub
 *     :query-id
 *     a-computation-fn)   ;; (fn [db v]  ... a-value)
 * 
 *   The node's input signal defaults to `app-db`, and the value within `app-db` is
 *   is given as the 1st argument to the computation function.
 * 
 *   2. A signal function is supplied:
 * 
 *   (reg-sub
 *     :query-id
 *     signal-fn     ;; <-- here
 *     computation-fn)
 * 
 *   When a node is created from the template, the `signal-fn` will be called and it
 *   is expected to return the input signal(s) as either a singleton, if there is only
 *   one, or a sequence if there are many, or a map with the signals as the values.
 * 
 *   The values from the nominated signals will be supplied as the 1st argument to the
 *   computation function - either a singleton, sequence or map of them, paralleling
 *   the structure returned by the signal function.
 * 
 *   Here, is an example signal-fn, which returns a vector of input signals.
 * 
 *     (fn [query-vec dynamic-vec]
 *       [(subscribe [:a-sub])
 *        (subscribe [:b-sub])])
 * 
 *   For that signal function, the computation function must be written
 *   to expect a vector of values for its first argument.
 *     (fn [[a b] _] ....)
 * 
 *   If the signal function was simpler and returned a singleton, like this:
 *      (fn [query-vec dynamic-vec]
 *        (subscribe [:a-sub]))
 * 
 *   then the computation function must be written to expect a single value
 *   as the 1st argument:
 * 
 *      (fn [a _] ...)
 * 
 *   3. Syntax Sugar
 * 
 *   (reg-sub
 *     :a-b-sub
 *     :<- [:a-sub]
 *     :<- [:b-sub]
 *     (fn [[a b] [_]] {:a a :b b}))
 * 
 *   This 3rd variation is syntactic sugar for the 2nd. Pairs are supplied instead
 *   of an `input signals` functions. Each pair starts with a `:<-` and a subscription
 *   vector follows.
 * 
 *   For further understanding, read `/docs`, and look at the detailed comments in
 *   /examples/todomvc/src/subs.cljs
 *   
 */
mranderson047.re_frame.v0v10v2.re_frame.subs.reg_sub = (function mranderson047$re_frame$v0v10v2$re_frame$subs$reg_sub(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27583 = arguments.length;
var i__4500__auto___27584 = (0);
while(true){
if((i__4500__auto___27584 < len__4499__auto___27583)){
args__4502__auto__.push((arguments[i__4500__auto___27584]));

var G__27585 = (i__4500__auto___27584 + (1));
i__4500__auto___27584 = G__27585;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return mranderson047.re_frame.v0v10v2.re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

mranderson047.re_frame.v0v10v2.re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic = (function (query_id,args){
var computation_fn = cljs.core.last(args);
var input_args = cljs.core.butlast(args);
var err_header = ["re-frame: reg-sub for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),", "].join('');
var inputs_fn = (function (){var G__27539 = cljs.core.count(input_args);
switch (G__27539) {
case (0):
return ((function (G__27539,computation_fn,input_args,err_header){
return (function() {
var G__27587 = null;
var G__27587__1 = (function (_){
return mranderson047.re_frame.v0v10v2.re_frame.db.app_db;
});
var G__27587__2 = (function (_,___$1){
return mranderson047.re_frame.v0v10v2.re_frame.db.app_db;
});
G__27587 = function(_,___$1){
switch(arguments.length){
case 1:
return G__27587__1.call(this,_);
case 2:
return G__27587__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__27587.cljs$core$IFn$_invoke$arity$1 = G__27587__1;
G__27587.cljs$core$IFn$_invoke$arity$2 = G__27587__2;
return G__27587;
})()
;})(G__27539,computation_fn,input_args,err_header))

break;
case (1):
var f = cljs.core.first(input_args);
if(cljs.core.fn_QMARK_(f)){
} else {
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([err_header,"2nd argument expected to be an inputs function, got:",f], 0));
}

return f;

break;
case (2):
var vec__27540 = input_args;
var marker = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27540,(0),null);
var vec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27540,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"<-","<-",760412998),marker)){
} else {
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([err_header,"expected :<-, got:",marker], 0));
}

return ((function (vec__27540,marker,vec,G__27539,computation_fn,input_args,err_header){
return (function() {
var mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn = null;
var mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn__1 = (function (_){
return mranderson047.re_frame.v0v10v2.re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1(vec);
});
var mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn__2 = (function (_,___$1){
return mranderson047.re_frame.v0v10v2.re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1(vec);
});
mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn__1.call(this,_);
case 2:
return mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn__1;
mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn__2;
return mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn;
})()
;})(vec__27540,marker,vec,G__27539,computation_fn,input_args,err_header))

break;
default:
var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),input_args);
var markers = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs);
var vecs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,pairs);
if(((cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"<-","<-",760412998),null], null), null),markers)) && (cljs.core.every_QMARK_(cljs.core.vector_QMARK_,vecs)))){
} else {
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([err_header,"expected pairs of :<- and vectors, got:",pairs], 0));
}

return ((function (pairs,markers,vecs,G__27539,computation_fn,input_args,err_header){
return (function() {
var mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn = null;
var mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn__1 = (function (_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(mranderson047.re_frame.v0v10v2.re_frame.subs.subscribe,vecs);
});
var mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn__2 = (function (_,___$1){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(mranderson047.re_frame.v0v10v2.re_frame.subs.subscribe,vecs);
});
mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn__1.call(this,_);
case 2:
return mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn__1;
mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn__2;
return mranderson047$re_frame$v0v10v2$re_frame$subs$inp_fn;
})()
;})(pairs,markers,vecs,G__27539,computation_fn,input_args,err_header))

}
})();
return mranderson047.re_frame.v0v10v2.re_frame.registrar.register_handler(mranderson047.re_frame.v0v10v2.re_frame.subs.kind,query_id,((function (computation_fn,input_args,err_header,inputs_fn){
return (function() {
var mranderson047$re_frame$v0v10v2$re_frame$subs$subs_handler_fn = null;
var mranderson047$re_frame$v0v10v2$re_frame$subs$subs_handler_fn__2 = (function (db,query_vec){
var subscriptions = (inputs_fn.cljs$core$IFn$_invoke$arity$1 ? inputs_fn.cljs$core$IFn$_invoke$arity$1(query_vec) : inputs_fn.call(null,query_vec));
var reaction_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var reaction = mranderson047.re_frame.v0v10v2.re_frame.interop.make_reaction(((function (subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn){
return (function (){
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_27543 = mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_;
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = mranderson047.re_frame.v0v10v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),mranderson047.re_frame.v0v10v2.re_frame.utils.first_in_vector(query_vec),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","run","sub/run",-1821315581),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_vec,new cljs.core.Keyword(null,"reaction","reaction",490869788),cljs.core.deref(reaction_id)], null)], null));

try{try{var subscription = (function (){var G__27558 = mranderson047.re_frame.v0v10v2.re_frame.subs.deref_input_signals(subscriptions,query_id);
var G__27559 = query_vec;
return (computation_fn.cljs$core$IFn$_invoke$arity$2 ? computation_fn.cljs$core$IFn$_invoke$arity$2(G__27558,G__27559) : computation_fn.call(null,G__27558,G__27559));
})();
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__27226__auto___27589 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__27226__auto___27589;

} else {
}

return subscription;
}finally {if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__27221__auto___27591 = mranderson047.re_frame.v0v10v2.re_frame.interop.now();
var duration__27222__auto___27592 = (end__27221__auto___27591 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_));
var seq__27544_27594 = cljs.core.seq(cljs.core.deref(mranderson047.re_frame.v0v10v2.re_frame.trace.trace_cbs));
var chunk__27545_27595 = null;
var count__27546_27596 = (0);
var i__27547_27597 = (0);
while(true){
if((i__27547_27597 < count__27546_27596)){
var vec__27548_27604 = chunk__27545_27595.cljs$core$IIndexed$_nth$arity$2(null,i__27547_27597);
var k__27223__auto___27605 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27548_27604,(0),null);
var cb__27224__auto___27606 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27548_27604,(1),null);
try{var G__27552_27609 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__27222__auto___27592,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),mranderson047.re_frame.v0v10v2.re_frame.interop.now()], 0))], null);
(cb__27224__auto___27606.cljs$core$IFn$_invoke$arity$1 ? cb__27224__auto___27606.cljs$core$IFn$_invoke$arity$1(G__27552_27609) : cb__27224__auto___27606.call(null,G__27552_27609));
}catch (e27551){if((e27551 instanceof java.lang.Exception)){
var e__27225__auto___27619 = e27551;
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__27223__auto___27605,"while storing",mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__27225__auto___27619], 0));
} else {
throw e27551;

}
}

var G__27620 = seq__27544_27594;
var G__27621 = chunk__27545_27595;
var G__27622 = count__27546_27596;
var G__27623 = (i__27547_27597 + (1));
seq__27544_27594 = G__27620;
chunk__27545_27595 = G__27621;
count__27546_27596 = G__27622;
i__27547_27597 = G__27623;
continue;
} else {
var temp__5457__auto___27624 = cljs.core.seq(seq__27544_27594);
if(temp__5457__auto___27624){
var seq__27544_27625__$1 = temp__5457__auto___27624;
if(cljs.core.chunked_seq_QMARK_(seq__27544_27625__$1)){
var c__4319__auto___27626 = cljs.core.chunk_first(seq__27544_27625__$1);
var G__27627 = cljs.core.chunk_rest(seq__27544_27625__$1);
var G__27628 = c__4319__auto___27626;
var G__27629 = cljs.core.count(c__4319__auto___27626);
var G__27630 = (0);
seq__27544_27594 = G__27627;
chunk__27545_27595 = G__27628;
count__27546_27596 = G__27629;
i__27547_27597 = G__27630;
continue;
} else {
var vec__27553_27631 = cljs.core.first(seq__27544_27625__$1);
var k__27223__auto___27632 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27553_27631,(0),null);
var cb__27224__auto___27633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27553_27631,(1),null);
try{var G__27557_27634 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__27222__auto___27592,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),mranderson047.re_frame.v0v10v2.re_frame.interop.now()], 0))], null);
(cb__27224__auto___27633.cljs$core$IFn$_invoke$arity$1 ? cb__27224__auto___27633.cljs$core$IFn$_invoke$arity$1(G__27557_27634) : cb__27224__auto___27633.call(null,G__27557_27634));
}catch (e27556){if((e27556 instanceof java.lang.Exception)){
var e__27225__auto___27635 = e27556;
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__27223__auto___27632,"while storing",mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__27225__auto___27635], 0));
} else {
throw e27556;

}
}

var G__27636 = cljs.core.next(seq__27544_27625__$1);
var G__27637 = null;
var G__27638 = (0);
var G__27639 = (0);
seq__27544_27594 = G__27636;
chunk__27545_27595 = G__27637;
count__27546_27596 = G__27638;
i__27547_27597 = G__27639;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_27543;
}} else {
var subscription = (function (){var G__27560 = mranderson047.re_frame.v0v10v2.re_frame.subs.deref_input_signals(subscriptions,query_id);
var G__27561 = query_vec;
return (computation_fn.cljs$core$IFn$_invoke$arity$2 ? computation_fn.cljs$core$IFn$_invoke$arity$2(G__27560,G__27561) : computation_fn.call(null,G__27560,G__27561));
})();
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__27226__auto___27640 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__27226__auto___27640;

} else {
}

return subscription;
}
});})(subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn))
);
cljs.core.reset_BANG_(reaction_id,mranderson047.re_frame.v0v10v2.re_frame.interop.reagent_id(reaction));

return reaction;
});
var mranderson047$re_frame$v0v10v2$re_frame$subs$subs_handler_fn__3 = (function (db,query_vec,dyn_vec){
var subscriptions = (inputs_fn.cljs$core$IFn$_invoke$arity$2 ? inputs_fn.cljs$core$IFn$_invoke$arity$2(query_vec,dyn_vec) : inputs_fn.call(null,query_vec,dyn_vec));
var reaction_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var reaction = mranderson047.re_frame.v0v10v2.re_frame.interop.make_reaction(((function (subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn){
return (function (){
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_27562 = mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_;
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = mranderson047.re_frame.v0v10v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),mranderson047.re_frame.v0v10v2.re_frame.utils.first_in_vector(query_vec),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","run","sub/run",-1821315581),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_vec,new cljs.core.Keyword(null,"dyn-v","dyn-v",949994592),dyn_vec,new cljs.core.Keyword(null,"reaction","reaction",490869788),cljs.core.deref(reaction_id)], null)], null));

try{try{var subscription = (function (){var G__27577 = mranderson047.re_frame.v0v10v2.re_frame.subs.deref_input_signals(subscriptions,query_id);
var G__27578 = query_vec;
var G__27579 = dyn_vec;
return (computation_fn.cljs$core$IFn$_invoke$arity$3 ? computation_fn.cljs$core$IFn$_invoke$arity$3(G__27577,G__27578,G__27579) : computation_fn.call(null,G__27577,G__27578,G__27579));
})();
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__27226__auto___27641 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__27226__auto___27641;

} else {
}

return subscription;
}finally {if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__27221__auto___27642 = mranderson047.re_frame.v0v10v2.re_frame.interop.now();
var duration__27222__auto___27643 = (end__27221__auto___27642 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_));
var seq__27563_27644 = cljs.core.seq(cljs.core.deref(mranderson047.re_frame.v0v10v2.re_frame.trace.trace_cbs));
var chunk__27564_27645 = null;
var count__27565_27646 = (0);
var i__27566_27647 = (0);
while(true){
if((i__27566_27647 < count__27565_27646)){
var vec__27567_27648 = chunk__27564_27645.cljs$core$IIndexed$_nth$arity$2(null,i__27566_27647);
var k__27223__auto___27649 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27567_27648,(0),null);
var cb__27224__auto___27650 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27567_27648,(1),null);
try{var G__27571_27651 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__27222__auto___27643,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),mranderson047.re_frame.v0v10v2.re_frame.interop.now()], 0))], null);
(cb__27224__auto___27650.cljs$core$IFn$_invoke$arity$1 ? cb__27224__auto___27650.cljs$core$IFn$_invoke$arity$1(G__27571_27651) : cb__27224__auto___27650.call(null,G__27571_27651));
}catch (e27570){if((e27570 instanceof java.lang.Exception)){
var e__27225__auto___27652 = e27570;
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__27223__auto___27649,"while storing",mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__27225__auto___27652], 0));
} else {
throw e27570;

}
}

var G__27653 = seq__27563_27644;
var G__27654 = chunk__27564_27645;
var G__27655 = count__27565_27646;
var G__27656 = (i__27566_27647 + (1));
seq__27563_27644 = G__27653;
chunk__27564_27645 = G__27654;
count__27565_27646 = G__27655;
i__27566_27647 = G__27656;
continue;
} else {
var temp__5457__auto___27657 = cljs.core.seq(seq__27563_27644);
if(temp__5457__auto___27657){
var seq__27563_27658__$1 = temp__5457__auto___27657;
if(cljs.core.chunked_seq_QMARK_(seq__27563_27658__$1)){
var c__4319__auto___27659 = cljs.core.chunk_first(seq__27563_27658__$1);
var G__27660 = cljs.core.chunk_rest(seq__27563_27658__$1);
var G__27661 = c__4319__auto___27659;
var G__27662 = cljs.core.count(c__4319__auto___27659);
var G__27663 = (0);
seq__27563_27644 = G__27660;
chunk__27564_27645 = G__27661;
count__27565_27646 = G__27662;
i__27566_27647 = G__27663;
continue;
} else {
var vec__27572_27664 = cljs.core.first(seq__27563_27658__$1);
var k__27223__auto___27665 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27572_27664,(0),null);
var cb__27224__auto___27666 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27572_27664,(1),null);
try{var G__27576_27667 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__27222__auto___27643,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),mranderson047.re_frame.v0v10v2.re_frame.interop.now()], 0))], null);
(cb__27224__auto___27666.cljs$core$IFn$_invoke$arity$1 ? cb__27224__auto___27666.cljs$core$IFn$_invoke$arity$1(G__27576_27667) : cb__27224__auto___27666.call(null,G__27576_27667));
}catch (e27575){if((e27575 instanceof java.lang.Exception)){
var e__27225__auto___27668 = e27575;
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__27223__auto___27665,"while storing",mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__27225__auto___27668], 0));
} else {
throw e27575;

}
}

var G__27669 = cljs.core.next(seq__27563_27658__$1);
var G__27670 = null;
var G__27671 = (0);
var G__27672 = (0);
seq__27563_27644 = G__27669;
chunk__27564_27645 = G__27670;
count__27565_27646 = G__27671;
i__27566_27647 = G__27672;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_27562;
}} else {
var subscription = (function (){var G__27580 = mranderson047.re_frame.v0v10v2.re_frame.subs.deref_input_signals(subscriptions,query_id);
var G__27581 = query_vec;
var G__27582 = dyn_vec;
return (computation_fn.cljs$core$IFn$_invoke$arity$3 ? computation_fn.cljs$core$IFn$_invoke$arity$3(G__27580,G__27581,G__27582) : computation_fn.call(null,G__27580,G__27581,G__27582));
})();
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__27226__auto___27673 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__27226__auto___27673;

} else {
}

return subscription;
}
});})(subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn))
);
cljs.core.reset_BANG_(reaction_id,mranderson047.re_frame.v0v10v2.re_frame.interop.reagent_id(reaction));

return reaction;
});
mranderson047$re_frame$v0v10v2$re_frame$subs$subs_handler_fn = function(db,query_vec,dyn_vec){
switch(arguments.length){
case 2:
return mranderson047$re_frame$v0v10v2$re_frame$subs$subs_handler_fn__2.call(this,db,query_vec);
case 3:
return mranderson047$re_frame$v0v10v2$re_frame$subs$subs_handler_fn__3.call(this,db,query_vec,dyn_vec);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
mranderson047$re_frame$v0v10v2$re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$2 = mranderson047$re_frame$v0v10v2$re_frame$subs$subs_handler_fn__2;
mranderson047$re_frame$v0v10v2$re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$3 = mranderson047$re_frame$v0v10v2$re_frame$subs$subs_handler_fn__3;
return mranderson047$re_frame$v0v10v2$re_frame$subs$subs_handler_fn;
})()
;})(computation_fn,input_args,err_header,inputs_fn))
);
});

mranderson047.re_frame.v0v10v2.re_frame.subs.reg_sub.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mranderson047.re_frame.v0v10v2.re_frame.subs.reg_sub.cljs$lang$applyTo = (function (seq27537){
var G__27538 = cljs.core.first(seq27537);
var seq27537__$1 = cljs.core.next(seq27537);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27538,seq27537__$1);
});


//# sourceMappingURL=mranderson047.re_frame.v0v10v2.re_frame.subs.js.map
