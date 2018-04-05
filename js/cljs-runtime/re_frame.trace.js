goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if(typeof re_frame.trace.traces !== 'undefined'){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if(typeof re_frame.trace.next_delivery !== 'undefined'){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-trace#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__38191){
var map__38192 = p__38191;
var map__38192__$1 = ((((!((map__38192 == null)))?(((((map__38192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38192):map__38192);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38192__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38192__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38192__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38192__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__3922__auto__ = child_of;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__38194_38208 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__38195_38209 = null;
var count__38196_38210 = (0);
var i__38197_38211 = (0);
while(true){
if((i__38197_38211 < count__38196_38210)){
var vec__38198_38212 = chunk__38195_38209.cljs$core$IIndexed$_nth$arity$2(null,i__38197_38211);
var k_38213 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38198_38212,(0),null);
var cb_38214 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38198_38212,(1),null);
try{var G__38202_38215 = cljs.core.deref(re_frame.trace.traces);
(cb_38214.cljs$core$IFn$_invoke$arity$1 ? cb_38214.cljs$core$IFn$_invoke$arity$1(G__38202_38215) : cb_38214.call(null,G__38202_38215));
}catch (e38201){var e_38216 = e38201;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_38213,"while storing",cljs.core.deref(re_frame.trace.traces),e_38216], 0));
}

var G__38217 = seq__38194_38208;
var G__38218 = chunk__38195_38209;
var G__38219 = count__38196_38210;
var G__38220 = (i__38197_38211 + (1));
seq__38194_38208 = G__38217;
chunk__38195_38209 = G__38218;
count__38196_38210 = G__38219;
i__38197_38211 = G__38220;
continue;
} else {
var temp__5457__auto___38221 = cljs.core.seq(seq__38194_38208);
if(temp__5457__auto___38221){
var seq__38194_38222__$1 = temp__5457__auto___38221;
if(cljs.core.chunked_seq_QMARK_(seq__38194_38222__$1)){
var c__4319__auto___38223 = cljs.core.chunk_first(seq__38194_38222__$1);
var G__38224 = cljs.core.chunk_rest(seq__38194_38222__$1);
var G__38225 = c__4319__auto___38223;
var G__38226 = cljs.core.count(c__4319__auto___38223);
var G__38227 = (0);
seq__38194_38208 = G__38224;
chunk__38195_38209 = G__38225;
count__38196_38210 = G__38226;
i__38197_38211 = G__38227;
continue;
} else {
var vec__38203_38228 = cljs.core.first(seq__38194_38222__$1);
var k_38229 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38203_38228,(0),null);
var cb_38230 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38203_38228,(1),null);
try{var G__38207_38231 = cljs.core.deref(re_frame.trace.traces);
(cb_38230.cljs$core$IFn$_invoke$arity$1 ? cb_38230.cljs$core$IFn$_invoke$arity$1(G__38207_38231) : cb_38230.call(null,G__38207_38231));
}catch (e38206){var e_38232 = e38206;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_38229,"while storing",cljs.core.deref(re_frame.trace.traces),e_38232], 0));
}

var G__38233 = cljs.core.next(seq__38194_38222__$1);
var G__38234 = null;
var G__38235 = (0);
var G__38236 = (0);
seq__38194_38208 = G__38233;
chunk__38195_38209 = G__38234;
count__38196_38210 = G__38235;
i__38197_38211 = G__38236;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (10)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
