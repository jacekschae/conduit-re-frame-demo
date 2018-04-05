goog.provide('mranderson047.re_frame.v0v10v2.re_frame.fx');
goog.require('cljs.core');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.router');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.db');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.interceptor');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.interop');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.events');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.registrar');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.loggers');
mranderson047.re_frame.v0v10v2.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((mranderson047.re_frame.v0v10v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(mranderson047.re_frame.v0v10v2.re_frame.fx.kind) : mranderson047.re_frame.v0v10v2.re_frame.registrar.kinds.call(null,mranderson047.re_frame.v0v10v2.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (mranderson047.re-frame.v0v10v2.re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
mranderson047.re_frame.v0v10v2.re_frame.fx.reg_fx = (function mranderson047$re_frame$v0v10v2$re_frame$fx$reg_fx(id,handler){
return mranderson047.re_frame.v0v10v2.re_frame.registrar.register_handler(mranderson047.re_frame.v0v10v2.re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
mranderson047.re_frame.v0v10v2.re_frame.fx.do_fx = mranderson047.re_frame.v0v10v2.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function mranderson047$re_frame$v0v10v2$re_frame$fx$do_fx_after(context){
var seq__27735 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__27736 = null;
var count__27737 = (0);
var i__27738 = (0);
while(true){
if((i__27738 < count__27737)){
var vec__27739 = chunk__27736.cljs$core$IIndexed$_nth$arity$2(null,i__27738);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27739,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27739,(1),null);
var temp__5455__auto___27745 = mranderson047.re_frame.v0v10v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(mranderson047.re_frame.v0v10v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___27745)){
var effect_fn_27746 = temp__5455__auto___27745;
(effect_fn_27746.cljs$core$IFn$_invoke$arity$1 ? effect_fn_27746.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_27746.call(null,effect_value));
} else {
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring."], 0));
}


var G__27747 = seq__27735;
var G__27748 = chunk__27736;
var G__27749 = count__27737;
var G__27750 = (i__27738 + (1));
seq__27735 = G__27747;
chunk__27736 = G__27748;
count__27737 = G__27749;
i__27738 = G__27750;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__27735);
if(temp__5457__auto__){
var seq__27735__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27735__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__27735__$1);
var G__27751 = cljs.core.chunk_rest(seq__27735__$1);
var G__27752 = c__4319__auto__;
var G__27753 = cljs.core.count(c__4319__auto__);
var G__27754 = (0);
seq__27735 = G__27751;
chunk__27736 = G__27752;
count__27737 = G__27753;
i__27738 = G__27754;
continue;
} else {
var vec__27742 = cljs.core.first(seq__27735__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27742,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27742,(1),null);
var temp__5455__auto___27755 = mranderson047.re_frame.v0v10v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(mranderson047.re_frame.v0v10v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___27755)){
var effect_fn_27756 = temp__5455__auto___27755;
(effect_fn_27756.cljs$core$IFn$_invoke$arity$1 ? effect_fn_27756.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_27756.call(null,effect_value));
} else {
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring."], 0));
}


var G__27757 = cljs.core.next(seq__27735__$1);
var G__27758 = null;
var G__27759 = (0);
var G__27760 = (0);
seq__27735 = G__27757;
chunk__27736 = G__27758;
count__27737 = G__27759;
i__27738 = G__27760;
continue;
}
} else {
return null;
}
}
break;
}
})], 0));
mranderson047.re_frame.v0v10v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__27761 = cljs.core.seq(value);
var chunk__27762 = null;
var count__27763 = (0);
var i__27764 = (0);
while(true){
if((i__27764 < count__27763)){
var map__27765 = chunk__27762.cljs$core$IIndexed$_nth$arity$2(null,i__27764);
var map__27765__$1 = ((((!((map__27765 == null)))?(((((map__27765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27765.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27765):map__27765);
var effect = map__27765__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27765__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27765__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number')))){
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
mranderson047.re_frame.v0v10v2.re_frame.interop.set_timeout_BANG_(((function (seq__27761,chunk__27762,count__27763,i__27764,map__27765,map__27765__$1,effect,ms,dispatch){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router.dispatch(dispatch);
});})(seq__27761,chunk__27762,count__27763,i__27764,map__27765,map__27765__$1,effect,ms,dispatch))
,ms);
}


var G__27769 = seq__27761;
var G__27770 = chunk__27762;
var G__27771 = count__27763;
var G__27772 = (i__27764 + (1));
seq__27761 = G__27769;
chunk__27762 = G__27770;
count__27763 = G__27771;
i__27764 = G__27772;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__27761);
if(temp__5457__auto__){
var seq__27761__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27761__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__27761__$1);
var G__27773 = cljs.core.chunk_rest(seq__27761__$1);
var G__27774 = c__4319__auto__;
var G__27775 = cljs.core.count(c__4319__auto__);
var G__27776 = (0);
seq__27761 = G__27773;
chunk__27762 = G__27774;
count__27763 = G__27775;
i__27764 = G__27776;
continue;
} else {
var map__27767 = cljs.core.first(seq__27761__$1);
var map__27767__$1 = ((((!((map__27767 == null)))?(((((map__27767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27767.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27767):map__27767);
var effect = map__27767__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27767__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27767__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number')))){
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
mranderson047.re_frame.v0v10v2.re_frame.interop.set_timeout_BANG_(((function (seq__27761,chunk__27762,count__27763,i__27764,map__27767,map__27767__$1,effect,ms,dispatch,seq__27761__$1,temp__5457__auto__){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router.dispatch(dispatch);
});})(seq__27761,chunk__27762,count__27763,i__27764,map__27767,map__27767__$1,effect,ms,dispatch,seq__27761__$1,temp__5457__auto__))
,ms);
}


var G__27777 = cljs.core.next(seq__27761__$1);
var G__27778 = null;
var G__27779 = (0);
var G__27780 = (0);
seq__27761 = G__27777;
chunk__27762 = G__27778;
count__27763 = G__27779;
i__27764 = G__27780;
continue;
}
} else {
return null;
}
}
break;
}
}));
mranderson047.re_frame.v0v10v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_(value))){
return mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return mranderson047.re_frame.v0v10v2.re_frame.router.dispatch(value);
}
}));
mranderson047.re_frame.v0v10v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_(value))){
return mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value], 0));
} else {
var seq__27781 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__27782 = null;
var count__27783 = (0);
var i__27784 = (0);
while(true){
if((i__27784 < count__27783)){
var event = chunk__27782.cljs$core$IIndexed$_nth$arity$2(null,i__27784);
mranderson047.re_frame.v0v10v2.re_frame.router.dispatch(event);


var G__27785 = seq__27781;
var G__27786 = chunk__27782;
var G__27787 = count__27783;
var G__27788 = (i__27784 + (1));
seq__27781 = G__27785;
chunk__27782 = G__27786;
count__27783 = G__27787;
i__27784 = G__27788;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__27781);
if(temp__5457__auto__){
var seq__27781__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27781__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__27781__$1);
var G__27789 = cljs.core.chunk_rest(seq__27781__$1);
var G__27790 = c__4319__auto__;
var G__27791 = cljs.core.count(c__4319__auto__);
var G__27792 = (0);
seq__27781 = G__27789;
chunk__27782 = G__27790;
count__27783 = G__27791;
i__27784 = G__27792;
continue;
} else {
var event = cljs.core.first(seq__27781__$1);
mranderson047.re_frame.v0v10v2.re_frame.router.dispatch(event);


var G__27793 = cljs.core.next(seq__27781__$1);
var G__27794 = null;
var G__27795 = (0);
var G__27796 = (0);
seq__27781 = G__27793;
chunk__27782 = G__27794;
count__27783 = G__27795;
i__27784 = G__27796;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
mranderson047.re_frame.v0v10v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(mranderson047.re_frame.v0v10v2.re_frame.registrar.clear_handlers,mranderson047.re_frame.v0v10v2.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__27797 = cljs.core.seq(value);
var chunk__27798 = null;
var count__27799 = (0);
var i__27800 = (0);
while(true){
if((i__27800 < count__27799)){
var event = chunk__27798.cljs$core$IIndexed$_nth$arity$2(null,i__27800);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__27801 = seq__27797;
var G__27802 = chunk__27798;
var G__27803 = count__27799;
var G__27804 = (i__27800 + (1));
seq__27797 = G__27801;
chunk__27798 = G__27802;
count__27799 = G__27803;
i__27800 = G__27804;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__27797);
if(temp__5457__auto__){
var seq__27797__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27797__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__27797__$1);
var G__27807 = cljs.core.chunk_rest(seq__27797__$1);
var G__27808 = c__4319__auto__;
var G__27809 = cljs.core.count(c__4319__auto__);
var G__27810 = (0);
seq__27797 = G__27807;
chunk__27798 = G__27808;
count__27799 = G__27809;
i__27800 = G__27810;
continue;
} else {
var event = cljs.core.first(seq__27797__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__27811 = cljs.core.next(seq__27797__$1);
var G__27812 = null;
var G__27813 = (0);
var G__27814 = (0);
seq__27797 = G__27811;
chunk__27798 = G__27812;
count__27799 = G__27813;
i__27800 = G__27814;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
mranderson047.re_frame.v0v10v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref(mranderson047.re_frame.v0v10v2.re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_(mranderson047.re_frame.v0v10v2.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=mranderson047.re_frame.v0v10v2.re_frame.fx.js.map
