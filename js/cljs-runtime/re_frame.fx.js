goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
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
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_38719 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));

try{try{var seq__38723 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__38725 = null;
var count__38726 = (0);
var i__38727 = (0);
while(true){
if((i__38727 < count__38726)){
var vec__38735 = chunk__38725.cljs$core$IIndexed$_nth$arity$2(null,i__38727);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38735,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38735,(1),null);
var temp__5455__auto___38751 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___38751)){
var effect_fn_38752 = temp__5455__auto___38751;
(effect_fn_38752.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38752.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38752.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__38753 = seq__38723;
var G__38754 = chunk__38725;
var G__38755 = count__38726;
var G__38756 = (i__38727 + (1));
seq__38723 = G__38753;
chunk__38725 = G__38754;
count__38726 = G__38755;
i__38727 = G__38756;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__38723);
if(temp__5457__auto__){
var seq__38723__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38723__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__38723__$1);
var G__38757 = cljs.core.chunk_rest(seq__38723__$1);
var G__38758 = c__4319__auto__;
var G__38759 = cljs.core.count(c__4319__auto__);
var G__38760 = (0);
seq__38723 = G__38757;
chunk__38725 = G__38758;
count__38726 = G__38759;
i__38727 = G__38760;
continue;
} else {
var vec__38738 = cljs.core.first(seq__38723__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38738,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38738,(1),null);
var temp__5455__auto___38761 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___38761)){
var effect_fn_38762 = temp__5455__auto___38761;
(effect_fn_38762.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38762.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38762.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__38763 = cljs.core.next(seq__38723__$1);
var G__38764 = null;
var G__38765 = (0);
var G__38766 = (0);
seq__38723 = G__38763;
chunk__38725 = G__38764;
count__38726 = G__38765;
i__38727 = G__38766;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__38171__auto___38767 = re_frame.interop.now();
var duration__38172__auto___38768 = (end__38171__auto___38767 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__38172__auto___38768,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__38171__auto___38767);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_38719;
}} else {
var seq__38741 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__38742 = null;
var count__38743 = (0);
var i__38744 = (0);
while(true){
if((i__38744 < count__38743)){
var vec__38745 = chunk__38742.cljs$core$IIndexed$_nth$arity$2(null,i__38744);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38745,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38745,(1),null);
var temp__5455__auto___38769 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___38769)){
var effect_fn_38770 = temp__5455__auto___38769;
(effect_fn_38770.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38770.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38770.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__38771 = seq__38741;
var G__38772 = chunk__38742;
var G__38773 = count__38743;
var G__38774 = (i__38744 + (1));
seq__38741 = G__38771;
chunk__38742 = G__38772;
count__38743 = G__38773;
i__38744 = G__38774;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__38741);
if(temp__5457__auto__){
var seq__38741__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38741__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__38741__$1);
var G__38775 = cljs.core.chunk_rest(seq__38741__$1);
var G__38776 = c__4319__auto__;
var G__38777 = cljs.core.count(c__4319__auto__);
var G__38778 = (0);
seq__38741 = G__38775;
chunk__38742 = G__38776;
count__38743 = G__38777;
i__38744 = G__38778;
continue;
} else {
var vec__38748 = cljs.core.first(seq__38741__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38748,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38748,(1),null);
var temp__5455__auto___38779 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5455__auto___38779)){
var effect_fn_38780 = temp__5455__auto___38779;
(effect_fn_38780.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38780.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38780.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__38781 = cljs.core.next(seq__38741__$1);
var G__38782 = null;
var G__38783 = (0);
var G__38784 = (0);
seq__38741 = G__38781;
chunk__38742 = G__38782;
count__38743 = G__38783;
i__38744 = G__38784;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__38785 = cljs.core.seq(value);
var chunk__38786 = null;
var count__38787 = (0);
var i__38788 = (0);
while(true){
if((i__38788 < count__38787)){
var map__38789 = chunk__38786.cljs$core$IIndexed$_nth$arity$2(null,i__38788);
var map__38789__$1 = ((((!((map__38789 == null)))?(((((map__38789.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38789.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38789):map__38789);
var effect = map__38789__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38789__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38789__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__38785,chunk__38786,count__38787,i__38788,map__38789,map__38789__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__38785,chunk__38786,count__38787,i__38788,map__38789,map__38789__$1,effect,ms,dispatch))
,ms);
}


var G__38793 = seq__38785;
var G__38794 = chunk__38786;
var G__38795 = count__38787;
var G__38796 = (i__38788 + (1));
seq__38785 = G__38793;
chunk__38786 = G__38794;
count__38787 = G__38795;
i__38788 = G__38796;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__38785);
if(temp__5457__auto__){
var seq__38785__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38785__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__38785__$1);
var G__38797 = cljs.core.chunk_rest(seq__38785__$1);
var G__38798 = c__4319__auto__;
var G__38799 = cljs.core.count(c__4319__auto__);
var G__38800 = (0);
seq__38785 = G__38797;
chunk__38786 = G__38798;
count__38787 = G__38799;
i__38788 = G__38800;
continue;
} else {
var map__38791 = cljs.core.first(seq__38785__$1);
var map__38791__$1 = ((((!((map__38791 == null)))?(((((map__38791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38791.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38791):map__38791);
var effect = map__38791__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38791__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38791__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__38785,chunk__38786,count__38787,i__38788,map__38791,map__38791__$1,effect,ms,dispatch,seq__38785__$1,temp__5457__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__38785,chunk__38786,count__38787,i__38788,map__38791,map__38791__$1,effect,ms,dispatch,seq__38785__$1,temp__5457__auto__))
,ms);
}


var G__38801 = cljs.core.next(seq__38785__$1);
var G__38802 = null;
var G__38803 = (0);
var G__38804 = (0);
seq__38785 = G__38801;
chunk__38786 = G__38802;
count__38787 = G__38803;
i__38788 = G__38804;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_(value))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_(value))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value], 0));
} else {
var seq__38805 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__38806 = null;
var count__38807 = (0);
var i__38808 = (0);
while(true){
if((i__38808 < count__38807)){
var event = chunk__38806.cljs$core$IIndexed$_nth$arity$2(null,i__38808);
re_frame.router.dispatch(event);


var G__38809 = seq__38805;
var G__38810 = chunk__38806;
var G__38811 = count__38807;
var G__38812 = (i__38808 + (1));
seq__38805 = G__38809;
chunk__38806 = G__38810;
count__38807 = G__38811;
i__38808 = G__38812;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__38805);
if(temp__5457__auto__){
var seq__38805__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38805__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__38805__$1);
var G__38813 = cljs.core.chunk_rest(seq__38805__$1);
var G__38814 = c__4319__auto__;
var G__38815 = cljs.core.count(c__4319__auto__);
var G__38816 = (0);
seq__38805 = G__38813;
chunk__38806 = G__38814;
count__38807 = G__38815;
i__38808 = G__38816;
continue;
} else {
var event = cljs.core.first(seq__38805__$1);
re_frame.router.dispatch(event);


var G__38817 = cljs.core.next(seq__38805__$1);
var G__38818 = null;
var G__38819 = (0);
var G__38820 = (0);
seq__38805 = G__38817;
chunk__38806 = G__38818;
count__38807 = G__38819;
i__38808 = G__38820;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__38821 = cljs.core.seq(value);
var chunk__38822 = null;
var count__38823 = (0);
var i__38824 = (0);
while(true){
if((i__38824 < count__38823)){
var event = chunk__38822.cljs$core$IIndexed$_nth$arity$2(null,i__38824);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__38825 = seq__38821;
var G__38826 = chunk__38822;
var G__38827 = count__38823;
var G__38828 = (i__38824 + (1));
seq__38821 = G__38825;
chunk__38822 = G__38826;
count__38823 = G__38827;
i__38824 = G__38828;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__38821);
if(temp__5457__auto__){
var seq__38821__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38821__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__38821__$1);
var G__38829 = cljs.core.chunk_rest(seq__38821__$1);
var G__38830 = c__4319__auto__;
var G__38831 = cljs.core.count(c__4319__auto__);
var G__38832 = (0);
seq__38821 = G__38829;
chunk__38822 = G__38830;
count__38823 = G__38831;
i__38824 = G__38832;
continue;
} else {
var event = cljs.core.first(seq__38821__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__38833 = cljs.core.next(seq__38821__$1);
var G__38834 = null;
var G__38835 = (0);
var G__38836 = (0);
seq__38821 = G__38833;
chunk__38822 = G__38834;
count__38823 = G__38835;
i__38824 = G__38836;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref(re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
