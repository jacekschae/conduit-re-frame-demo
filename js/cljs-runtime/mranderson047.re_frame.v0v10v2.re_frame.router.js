goog.provide('mranderson047.re_frame.v0v10v2.re_frame.router');
goog.require('cljs.core');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.events');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.interop');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.loggers');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.trace');
mranderson047.re_frame.v0v10v2.re_frame.router.later_fns = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flush-dom","flush-dom",-933676816),(function (f){
var G__27495 = (function (){
return (mranderson047.re_frame.v0v10v2.re_frame.interop.next_tick.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.interop.next_tick.cljs$core$IFn$_invoke$arity$1(f) : mranderson047.re_frame.v0v10v2.re_frame.interop.next_tick.call(null,f));
});
return (mranderson047.re_frame.v0v10v2.re_frame.interop.after_render.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.interop.after_render.cljs$core$IFn$_invoke$arity$1(G__27495) : mranderson047.re_frame.v0v10v2.re_frame.interop.after_render.call(null,G__27495));
}),new cljs.core.Keyword(null,"yield","yield",177875009),mranderson047.re_frame.v0v10v2.re_frame.interop.next_tick], null);

/**
 * @interface
 */
mranderson047.re_frame.v0v10v2.re_frame.router.IEventQueue = function(){};

mranderson047.re_frame.v0v10v2.re_frame.router.push = (function mranderson047$re_frame$v0v10v2$re_frame$router$push(this$,event){
if(((!((this$ == null))) && (!((this$.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$push$arity$2 == null))))){
return this$.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$push$arity$2(this$,event);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (mranderson047.re_frame.v0v10v2.re_frame.router.push[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__4212__auto__.call(null,this$,event));
} else {
var m__4212__auto____$1 = (mranderson047.re_frame.v0v10v2.re_frame.router.push["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,event) : m__4212__auto____$1.call(null,this$,event));
} else {
throw cljs.core.missing_protocol("IEventQueue.push",this$);
}
}
}
});

mranderson047.re_frame.v0v10v2.re_frame.router.add_post_event_callback = (function mranderson047$re_frame$v0v10v2$re_frame$router$add_post_event_callback(this$,id,callack){
if(((!((this$ == null))) && (!((this$.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$add_post_event_callback$arity$3 == null))))){
return this$.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$add_post_event_callback$arity$3(this$,id,callack);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (mranderson047.re_frame.v0v10v2.re_frame.router.add_post_event_callback[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$3(this$,id,callack) : m__4212__auto__.call(null,this$,id,callack));
} else {
var m__4212__auto____$1 = (mranderson047.re_frame.v0v10v2.re_frame.router.add_post_event_callback["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,id,callack) : m__4212__auto____$1.call(null,this$,id,callack));
} else {
throw cljs.core.missing_protocol("IEventQueue.add-post-event-callback",this$);
}
}
}
});

mranderson047.re_frame.v0v10v2.re_frame.router.remove_post_event_callback = (function mranderson047$re_frame$v0v10v2$re_frame$router$remove_post_event_callback(this$,f){
if(((!((this$ == null))) && (!((this$.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$remove_post_event_callback$arity$2 == null))))){
return this$.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$remove_post_event_callback$arity$2(this$,f);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (mranderson047.re_frame.v0v10v2.re_frame.router.remove_post_event_callback[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(this$,f) : m__4212__auto__.call(null,this$,f));
} else {
var m__4212__auto____$1 = (mranderson047.re_frame.v0v10v2.re_frame.router.remove_post_event_callback["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,f) : m__4212__auto____$1.call(null,this$,f));
} else {
throw cljs.core.missing_protocol("IEventQueue.remove-post-event-callback",this$);
}
}
}
});

mranderson047.re_frame.v0v10v2.re_frame.router._fsm_trigger = (function mranderson047$re_frame$v0v10v2$re_frame$router$_fsm_trigger(this$,trigger,arg){
if(((!((this$ == null))) && (!((this$.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_fsm_trigger$arity$3 == null))))){
return this$.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_fsm_trigger$arity$3(this$,trigger,arg);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (mranderson047.re_frame.v0v10v2.re_frame.router._fsm_trigger[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$3(this$,trigger,arg) : m__4212__auto__.call(null,this$,trigger,arg));
} else {
var m__4212__auto____$1 = (mranderson047.re_frame.v0v10v2.re_frame.router._fsm_trigger["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,trigger,arg) : m__4212__auto____$1.call(null,this$,trigger,arg));
} else {
throw cljs.core.missing_protocol("IEventQueue.-fsm-trigger",this$);
}
}
}
});

mranderson047.re_frame.v0v10v2.re_frame.router._add_event = (function mranderson047$re_frame$v0v10v2$re_frame$router$_add_event(this$,event){
if(((!((this$ == null))) && (!((this$.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_add_event$arity$2 == null))))){
return this$.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_add_event$arity$2(this$,event);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (mranderson047.re_frame.v0v10v2.re_frame.router._add_event[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__4212__auto__.call(null,this$,event));
} else {
var m__4212__auto____$1 = (mranderson047.re_frame.v0v10v2.re_frame.router._add_event["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,event) : m__4212__auto____$1.call(null,this$,event));
} else {
throw cljs.core.missing_protocol("IEventQueue.-add-event",this$);
}
}
}
});

mranderson047.re_frame.v0v10v2.re_frame.router._process_1st_event_in_queue = (function mranderson047$re_frame$v0v10v2$re_frame$router$_process_1st_event_in_queue(this$){
if(((!((this$ == null))) && (!((this$.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_process_1st_event_in_queue$arity$1 == null))))){
return this$.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_process_1st_event_in_queue$arity$1(this$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (mranderson047.re_frame.v0v10v2.re_frame.router._process_1st_event_in_queue[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto__.call(null,this$));
} else {
var m__4212__auto____$1 = (mranderson047.re_frame.v0v10v2.re_frame.router._process_1st_event_in_queue["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEventQueue.-process-1st-event-in-queue",this$);
}
}
}
});

mranderson047.re_frame.v0v10v2.re_frame.router._run_next_tick = (function mranderson047$re_frame$v0v10v2$re_frame$router$_run_next_tick(this$){
if(((!((this$ == null))) && (!((this$.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_run_next_tick$arity$1 == null))))){
return this$.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_run_next_tick$arity$1(this$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (mranderson047.re_frame.v0v10v2.re_frame.router._run_next_tick[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto__.call(null,this$));
} else {
var m__4212__auto____$1 = (mranderson047.re_frame.v0v10v2.re_frame.router._run_next_tick["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEventQueue.-run-next-tick",this$);
}
}
}
});

mranderson047.re_frame.v0v10v2.re_frame.router._run_queue = (function mranderson047$re_frame$v0v10v2$re_frame$router$_run_queue(this$){
if(((!((this$ == null))) && (!((this$.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_run_queue$arity$1 == null))))){
return this$.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_run_queue$arity$1(this$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (mranderson047.re_frame.v0v10v2.re_frame.router._run_queue[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto__.call(null,this$));
} else {
var m__4212__auto____$1 = (mranderson047.re_frame.v0v10v2.re_frame.router._run_queue["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEventQueue.-run-queue",this$);
}
}
}
});

mranderson047.re_frame.v0v10v2.re_frame.router._exception = (function mranderson047$re_frame$v0v10v2$re_frame$router$_exception(this$,ex){
if(((!((this$ == null))) && (!((this$.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_exception$arity$2 == null))))){
return this$.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_exception$arity$2(this$,ex);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (mranderson047.re_frame.v0v10v2.re_frame.router._exception[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(this$,ex) : m__4212__auto__.call(null,this$,ex));
} else {
var m__4212__auto____$1 = (mranderson047.re_frame.v0v10v2.re_frame.router._exception["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,ex) : m__4212__auto____$1.call(null,this$,ex));
} else {
throw cljs.core.missing_protocol("IEventQueue.-exception",this$);
}
}
}
});

mranderson047.re_frame.v0v10v2.re_frame.router._pause = (function mranderson047$re_frame$v0v10v2$re_frame$router$_pause(this$,later_fn){
if(((!((this$ == null))) && (!((this$.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_pause$arity$2 == null))))){
return this$.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_pause$arity$2(this$,later_fn);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (mranderson047.re_frame.v0v10v2.re_frame.router._pause[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(this$,later_fn) : m__4212__auto__.call(null,this$,later_fn));
} else {
var m__4212__auto____$1 = (mranderson047.re_frame.v0v10v2.re_frame.router._pause["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,later_fn) : m__4212__auto____$1.call(null,this$,later_fn));
} else {
throw cljs.core.missing_protocol("IEventQueue.-pause",this$);
}
}
}
});

mranderson047.re_frame.v0v10v2.re_frame.router._resume = (function mranderson047$re_frame$v0v10v2$re_frame$router$_resume(this$){
if(((!((this$ == null))) && (!((this$.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_resume$arity$1 == null))))){
return this$.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_resume$arity$1(this$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (mranderson047.re_frame.v0v10v2.re_frame.router._resume[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto__.call(null,this$));
} else {
var m__4212__auto____$1 = (mranderson047.re_frame.v0v10v2.re_frame.router._resume["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEventQueue.-resume",this$);
}
}
}
});

mranderson047.re_frame.v0v10v2.re_frame.router._call_post_event_callbacks = (function mranderson047$re_frame$v0v10v2$re_frame$router$_call_post_event_callbacks(this$,event){
if(((!((this$ == null))) && (!((this$.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_call_post_event_callbacks$arity$2 == null))))){
return this$.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_call_post_event_callbacks$arity$2(this$,event);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (mranderson047.re_frame.v0v10v2.re_frame.router._call_post_event_callbacks[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__4212__auto__.call(null,this$,event));
} else {
var m__4212__auto____$1 = (mranderson047.re_frame.v0v10v2.re_frame.router._call_post_event_callbacks["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,event) : m__4212__auto____$1.call(null,this$,event));
} else {
throw cljs.core.missing_protocol("IEventQueue.-call-post-event-callbacks",this$);
}
}
}
});


/**
* @constructor
 * @implements {mranderson047.re_frame.v0v10v2.re_frame.router.IEventQueue}
*/
mranderson047.re_frame.v0v10v2.re_frame.router.EventQueue = (function (fsm_state,queue,post_event_callback_fns){
this.fsm_state = fsm_state;
this.queue = queue;
this.post_event_callback_fns = post_event_callback_fns;
});
mranderson047.re_frame.v0v10v2.re_frame.router.EventQueue.prototype.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$ = cljs.core.PROTOCOL_SENTINEL;

mranderson047.re_frame.v0v10v2.re_frame.router.EventQueue.prototype.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_run_queue$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var n = cljs.core.count(self__.queue);
while(true){
if((n === (0))){
return mranderson047.re_frame.v0v10v2.re_frame.router._fsm_trigger(this$__$1,new cljs.core.Keyword(null,"finish-run","finish-run",753148477),null);
} else {
var temp__5455__auto__ = cljs.core.some(mranderson047.re_frame.v0v10v2.re_frame.router.later_fns,cljs.core.keys(cljs.core.meta(cljs.core.peek(self__.queue))));
if(cljs.core.truth_(temp__5455__auto__)){
var later_fn = temp__5455__auto__;
return mranderson047.re_frame.v0v10v2.re_frame.router._fsm_trigger(this$__$1,new cljs.core.Keyword(null,"pause","pause",-2095325672),later_fn);
} else {
mranderson047.re_frame.v0v10v2.re_frame.router._process_1st_event_in_queue(this$__$1);

var G__27684 = (n - (1));
n = G__27684;
continue;
}
}
break;
}
});

mranderson047.re_frame.v0v10v2.re_frame.router.EventQueue.prototype.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$remove_post_event_callback$arity$2 = (function (_,id){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.contains_QMARK_(self__.post_event_callback_fns,id))){
return mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: could not remove post event call back with id:",id], 0));
} else {
return self__.post_event_callback_fns = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.post_event_callback_fns,id);
}
});

mranderson047.re_frame.v0v10v2.re_frame.router.EventQueue.prototype.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_add_event$arity$2 = (function (_,event){
var self__ = this;
var ___$1 = this;
return self__.queue = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.queue,event);
});

mranderson047.re_frame.v0v10v2.re_frame.router.EventQueue.prototype.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_resume$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
mranderson047.re_frame.v0v10v2.re_frame.router._process_1st_event_in_queue(this$__$1);

return mranderson047.re_frame.v0v10v2.re_frame.router._run_queue(this$__$1);
});

mranderson047.re_frame.v0v10v2.re_frame.router.EventQueue.prototype.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$push$arity$2 = (function (this$,event){
var self__ = this;
var this$__$1 = this;
return mranderson047.re_frame.v0v10v2.re_frame.router._fsm_trigger(this$__$1,new cljs.core.Keyword(null,"add-event","add-event",938429088),event);
});

mranderson047.re_frame.v0v10v2.re_frame.router.EventQueue.prototype.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_run_next_tick$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__27588 = ((function (this$__$1){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router._fsm_trigger(this$__$1,new cljs.core.Keyword(null,"run-queue","run-queue",-1701798027),null);
});})(this$__$1))
;
return (mranderson047.re_frame.v0v10v2.re_frame.interop.next_tick.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.interop.next_tick.cljs$core$IFn$_invoke$arity$1(G__27588) : mranderson047.re_frame.v0v10v2.re_frame.interop.next_tick.call(null,G__27588));
});

mranderson047.re_frame.v0v10v2.re_frame.router.EventQueue.prototype.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_fsm_trigger$arity$3 = (function (this$,trigger,arg){
var self__ = this;
var this$__$1 = this;
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR_27590 = mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_;
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = mranderson047.re_frame.v0v10v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("mranderson047.re-frame.v0v10v2.re-frame.router","fsm-trigger","mranderson047.re-frame.v0v10v2.re-frame.router/fsm-trigger",-1325599698)], null));

try{try{var vec__27615 = (function (){var G__27618 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idle","idle",-2007156861),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__27618)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),((function (G__27618,_STAR_current_trace_STAR_27590,this$__$1){
return (function (){
mranderson047.re_frame.v0v10v2.re_frame.router._add_event(this$__$1,arg);

return mranderson047.re_frame.v0v10v2.re_frame.router._run_next_tick(this$__$1);
});})(G__27618,_STAR_current_trace_STAR_27590,this$__$1))
], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__27618)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),((function (G__27618,_STAR_current_trace_STAR_27590,this$__$1){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router._add_event(this$__$1,arg);
});})(G__27618,_STAR_current_trace_STAR_27590,this$__$1))
], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),new cljs.core.Keyword(null,"run-queue","run-queue",-1701798027)], null),G__27618)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),((function (G__27618,_STAR_current_trace_STAR_27590,this$__$1){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router._run_queue(this$__$1);
});})(G__27618,_STAR_current_trace_STAR_27590,this$__$1))
], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__27618)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),((function (G__27618,_STAR_current_trace_STAR_27590,this$__$1){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router._add_event(this$__$1,arg);
});})(G__27618,_STAR_current_trace_STAR_27590,this$__$1))
], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"pause","pause",-2095325672)], null),G__27618)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),((function (G__27618,_STAR_current_trace_STAR_27590,this$__$1){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router._pause(this$__$1,arg);
});})(G__27618,_STAR_current_trace_STAR_27590,this$__$1))
], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"exception","exception",-335277064)], null),G__27618)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idle","idle",-2007156861),((function (G__27618,_STAR_current_trace_STAR_27590,this$__$1){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router._exception(this$__$1,arg);
});})(G__27618,_STAR_current_trace_STAR_27590,this$__$1))
], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"finish-run","finish-run",753148477)], null),G__27618)){
if(cljs.core.empty_QMARK_(self__.queue)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idle","idle",-2007156861)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),((function (G__27618,_STAR_current_trace_STAR_27590,this$__$1){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router._run_next_tick(this$__$1);
});})(G__27618,_STAR_current_trace_STAR_27590,this$__$1))
], null);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__27618)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),((function (G__27618,_STAR_current_trace_STAR_27590,this$__$1){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router._add_event(this$__$1,arg);
});})(G__27618,_STAR_current_trace_STAR_27590,this$__$1))
], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),new cljs.core.Keyword(null,"resume","resume",-118572261)], null),G__27618)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),((function (G__27618,_STAR_current_trace_STAR_27590,this$__$1){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router._resume(this$__$1);
});})(G__27618,_STAR_current_trace_STAR_27590,this$__$1))
], null);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["re-frame: router state transition not found. ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.fsm_state)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(trigger)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fsm-state","fsm-state",1656310533),self__.fsm_state,new cljs.core.Keyword(null,"trigger","trigger",103466139),trigger], null));

}
}
}
}
}
}
}
}
}
})();
var new_fsm_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27615,(0),null);
var action_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27615,(1),null);
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__27226__auto___27685 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"operation","operation",-1267664310),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-state","current-state",1048284452),self__.fsm_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),new_fsm_state], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"operation","operation",-1267664310),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-state","current-state",1048284452),self__.fsm_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),new_fsm_state], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__27226__auto___27685;

} else {
}

self__.fsm_state = new_fsm_state;

if(cljs.core.truth_(action_fn)){
return (action_fn.cljs$core$IFn$_invoke$arity$0 ? action_fn.cljs$core$IFn$_invoke$arity$0() : action_fn.call(null));
} else {
return null;
}
}finally {if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__27221__auto___27686 = mranderson047.re_frame.v0v10v2.re_frame.interop.now();
var duration__27222__auto___27687 = (end__27221__auto___27686 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_));
var seq__27593_27688 = cljs.core.seq(cljs.core.deref(mranderson047.re_frame.v0v10v2.re_frame.trace.trace_cbs));
var chunk__27598_27689 = null;
var count__27599_27690 = (0);
var i__27600_27691 = (0);
while(true){
if((i__27600_27691 < count__27599_27690)){
var vec__27601_27692 = chunk__27598_27689.cljs$core$IIndexed$_nth$arity$2(null,i__27600_27691);
var k__27223__auto___27693 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27601_27692,(0),null);
var cb__27224__auto___27694 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27601_27692,(1),null);
try{var G__27608_27695 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__27222__auto___27687,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),mranderson047.re_frame.v0v10v2.re_frame.interop.now()], 0))], null);
(cb__27224__auto___27694.cljs$core$IFn$_invoke$arity$1 ? cb__27224__auto___27694.cljs$core$IFn$_invoke$arity$1(G__27608_27695) : cb__27224__auto___27694.call(null,G__27608_27695));
}catch (e27607){if((e27607 instanceof java.lang.Exception)){
var e__27225__auto___27696 = e27607;
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__27223__auto___27693,"while storing",mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__27225__auto___27696], 0));
} else {
throw e27607;

}
}

var G__27697 = seq__27593_27688;
var G__27698 = chunk__27598_27689;
var G__27699 = count__27599_27690;
var G__27700 = (i__27600_27691 + (1));
seq__27593_27688 = G__27697;
chunk__27598_27689 = G__27698;
count__27599_27690 = G__27699;
i__27600_27691 = G__27700;
continue;
} else {
var temp__5457__auto___27701 = cljs.core.seq(seq__27593_27688);
if(temp__5457__auto___27701){
var seq__27593_27702__$1 = temp__5457__auto___27701;
if(cljs.core.chunked_seq_QMARK_(seq__27593_27702__$1)){
var c__4319__auto___27703 = cljs.core.chunk_first(seq__27593_27702__$1);
var G__27704 = cljs.core.chunk_rest(seq__27593_27702__$1);
var G__27705 = c__4319__auto___27703;
var G__27706 = cljs.core.count(c__4319__auto___27703);
var G__27707 = (0);
seq__27593_27688 = G__27704;
chunk__27598_27689 = G__27705;
count__27599_27690 = G__27706;
i__27600_27691 = G__27707;
continue;
} else {
var vec__27610_27708 = cljs.core.first(seq__27593_27702__$1);
var k__27223__auto___27709 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27610_27708,(0),null);
var cb__27224__auto___27710 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27610_27708,(1),null);
try{var G__27614_27711 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__27222__auto___27687,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),mranderson047.re_frame.v0v10v2.re_frame.interop.now()], 0))], null);
(cb__27224__auto___27710.cljs$core$IFn$_invoke$arity$1 ? cb__27224__auto___27710.cljs$core$IFn$_invoke$arity$1(G__27614_27711) : cb__27224__auto___27710.call(null,G__27614_27711));
}catch (e27613){if((e27613 instanceof java.lang.Exception)){
var e__27225__auto___27712 = e27613;
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k__27223__auto___27709,"while storing",mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__27225__auto___27712], 0));
} else {
throw e27613;

}
}

var G__27713 = cljs.core.next(seq__27593_27702__$1);
var G__27714 = null;
var G__27715 = (0);
var G__27716 = (0);
seq__27593_27688 = G__27713;
chunk__27598_27689 = G__27714;
count__27599_27690 = G__27715;
i__27600_27691 = G__27716;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_27590;
}} else {
var vec__27674 = (function (){var G__27677 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idle","idle",-2007156861),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__27677)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),((function (G__27677,this$__$1){
return (function (){
mranderson047.re_frame.v0v10v2.re_frame.router._add_event(this$__$1,arg);

return mranderson047.re_frame.v0v10v2.re_frame.router._run_next_tick(this$__$1);
});})(G__27677,this$__$1))
], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__27677)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),((function (G__27677,this$__$1){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router._add_event(this$__$1,arg);
});})(G__27677,this$__$1))
], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),new cljs.core.Keyword(null,"run-queue","run-queue",-1701798027)], null),G__27677)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),((function (G__27677,this$__$1){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router._run_queue(this$__$1);
});})(G__27677,this$__$1))
], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__27677)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),((function (G__27677,this$__$1){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router._add_event(this$__$1,arg);
});})(G__27677,this$__$1))
], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"pause","pause",-2095325672)], null),G__27677)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),((function (G__27677,this$__$1){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router._pause(this$__$1,arg);
});})(G__27677,this$__$1))
], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"exception","exception",-335277064)], null),G__27677)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idle","idle",-2007156861),((function (G__27677,this$__$1){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router._exception(this$__$1,arg);
});})(G__27677,this$__$1))
], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),new cljs.core.Keyword(null,"finish-run","finish-run",753148477)], null),G__27677)){
if(cljs.core.empty_QMARK_(self__.queue)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"idle","idle",-2007156861)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheduled","scheduled",553898551),((function (G__27677,this$__$1){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router._run_next_tick(this$__$1);
});})(G__27677,this$__$1))
], null);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),new cljs.core.Keyword(null,"add-event","add-event",938429088)], null),G__27677)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),((function (G__27677,this$__$1){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router._add_event(this$__$1,arg);
});})(G__27677,this$__$1))
], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paused","paused",-1710376127),new cljs.core.Keyword(null,"resume","resume",-118572261)], null),G__27677)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",1554969103),((function (G__27677,this$__$1){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router._resume(this$__$1);
});})(G__27677,this$__$1))
], null);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["re-frame: router state transition not found. ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.fsm_state)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(trigger)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fsm-state","fsm-state",1656310533),self__.fsm_state,new cljs.core.Keyword(null,"trigger","trigger",103466139),trigger], null));

}
}
}
}
}
}
}
}
}
})();
var new_fsm_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27674,(0),null);
var action_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27674,(1),null);
if(mranderson047.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__27226__auto___27717 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"operation","operation",-1267664310),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-state","current-state",1048284452),self__.fsm_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),new_fsm_state], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"operation","operation",-1267664310),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.fsm_state,trigger], null),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-state","current-state",1048284452),self__.fsm_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),new_fsm_state], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
mranderson047.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = new_trace__27226__auto___27717;

} else {
}

self__.fsm_state = new_fsm_state;

if(cljs.core.truth_(action_fn)){
return (action_fn.cljs$core$IFn$_invoke$arity$0 ? action_fn.cljs$core$IFn$_invoke$arity$0() : action_fn.call(null));
} else {
return null;
}
}
});

mranderson047.re_frame.v0v10v2.re_frame.router.EventQueue.prototype.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_pause$arity$2 = (function (this$,later_fn){
var self__ = this;
var this$__$1 = this;
var G__27678 = ((function (this$__$1){
return (function (){
return mranderson047.re_frame.v0v10v2.re_frame.router._fsm_trigger(this$__$1,new cljs.core.Keyword(null,"resume","resume",-118572261),null);
});})(this$__$1))
;
return (later_fn.cljs$core$IFn$_invoke$arity$1 ? later_fn.cljs$core$IFn$_invoke$arity$1(G__27678) : later_fn.call(null,G__27678));
});

mranderson047.re_frame.v0v10v2.re_frame.router.EventQueue.prototype.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$add_post_event_callback$arity$3 = (function (_,id,callback_fn){
var self__ = this;
var ___$1 = this;
if(cljs.core.contains_QMARK_(self__.post_event_callback_fns,id)){
mranderson047.re_frame.v0v10v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: overwriting existing post event call back with id:",id], 0));
} else {
}

return self__.post_event_callback_fns = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.post_event_callback_fns,id,callback_fn);
});

mranderson047.re_frame.v0v10v2.re_frame.router.EventQueue.prototype.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_process_1st_event_in_queue$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var event_v = cljs.core.peek(self__.queue);
try{mranderson047.re_frame.v0v10v2.re_frame.events.handle(event_v);

self__.queue = cljs.core.pop(self__.queue);

return mranderson047.re_frame.v0v10v2.re_frame.router._call_post_event_callbacks(this$__$1,event_v);
}catch (e27679){var ex = e27679;
return mranderson047.re_frame.v0v10v2.re_frame.router._fsm_trigger(this$__$1,new cljs.core.Keyword(null,"exception","exception",-335277064),ex);
}});

mranderson047.re_frame.v0v10v2.re_frame.router.EventQueue.prototype.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_call_post_event_callbacks$arity$2 = (function (_,event_v){
var self__ = this;
var ___$1 = this;
var seq__27680 = cljs.core.seq(cljs.core.vals(self__.post_event_callback_fns));
var chunk__27681 = null;
var count__27682 = (0);
var i__27683 = (0);
while(true){
if((i__27683 < count__27682)){
var callback = chunk__27681.cljs$core$IIndexed$_nth$arity$2(null,i__27683);
(callback.cljs$core$IFn$_invoke$arity$2 ? callback.cljs$core$IFn$_invoke$arity$2(event_v,self__.queue) : callback.call(null,event_v,self__.queue));


var G__27718 = seq__27680;
var G__27719 = chunk__27681;
var G__27720 = count__27682;
var G__27721 = (i__27683 + (1));
seq__27680 = G__27718;
chunk__27681 = G__27719;
count__27682 = G__27720;
i__27683 = G__27721;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__27680);
if(temp__5457__auto__){
var seq__27680__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27680__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__27680__$1);
var G__27722 = cljs.core.chunk_rest(seq__27680__$1);
var G__27723 = c__4319__auto__;
var G__27724 = cljs.core.count(c__4319__auto__);
var G__27725 = (0);
seq__27680 = G__27722;
chunk__27681 = G__27723;
count__27682 = G__27724;
i__27683 = G__27725;
continue;
} else {
var callback = cljs.core.first(seq__27680__$1);
(callback.cljs$core$IFn$_invoke$arity$2 ? callback.cljs$core$IFn$_invoke$arity$2(event_v,self__.queue) : callback.call(null,event_v,self__.queue));


var G__27726 = cljs.core.next(seq__27680__$1);
var G__27727 = null;
var G__27728 = (0);
var G__27729 = (0);
seq__27680 = G__27726;
chunk__27681 = G__27727;
count__27682 = G__27728;
i__27683 = G__27729;
continue;
}
} else {
return null;
}
}
break;
}
});

mranderson047.re_frame.v0v10v2.re_frame.router.EventQueue.prototype.mranderson047$re_frame$v0v10v2$re_frame$router$IEventQueue$_exception$arity$2 = (function (_,ex){
var self__ = this;
var ___$1 = this;
self__.queue = mranderson047.re_frame.v0v10v2.re_frame.interop.empty_queue;

throw ex;
});

mranderson047.re_frame.v0v10v2.re_frame.router.EventQueue.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fsm-state","fsm-state",-998125236,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"queue","queue",-1198599890,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"post-event-callback-fns","post-event-callback-fns",-297038335,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

mranderson047.re_frame.v0v10v2.re_frame.router.EventQueue.cljs$lang$type = true;

mranderson047.re_frame.v0v10v2.re_frame.router.EventQueue.cljs$lang$ctorStr = "mranderson047.re-frame.v0v10v2.re-frame.router/EventQueue";

mranderson047.re_frame.v0v10v2.re_frame.router.EventQueue.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"mranderson047.re-frame.v0v10v2.re-frame.router/EventQueue");
});

/**
 * Positional factory function for mranderson047.re-frame.v0v10v2.re-frame.router/EventQueue.
 */
mranderson047.re_frame.v0v10v2.re_frame.router.__GT_EventQueue = (function mranderson047$re_frame$v0v10v2$re_frame$router$__GT_EventQueue(fsm_state,queue,post_event_callback_fns){
return (new mranderson047.re_frame.v0v10v2.re_frame.router.EventQueue(fsm_state,queue,post_event_callback_fns));
});

mranderson047.re_frame.v0v10v2.re_frame.router.event_queue = mranderson047.re_frame.v0v10v2.re_frame.router.__GT_EventQueue(new cljs.core.Keyword(null,"idle","idle",-2007156861),mranderson047.re_frame.v0v10v2.re_frame.interop.empty_queue,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Enqueue `event` for processing by event handling machinery.
 * 
 *   `event` is a vector of length >= 1. The 1st element identifies the kind of event.
 * 
 *   Note: the event handler is not run immediately - it is not run
 *   synchronously. It will likely be run 'very soon', although it may be
 *   added to the end of a FIFO queue which already contain events.
 * 
 *   Usage:
 *   (dispatch [:order-pizza {:supreme 2 :meatlovers 1 :veg 1})
 */
mranderson047.re_frame.v0v10v2.re_frame.router.dispatch = (function mranderson047$re_frame$v0v10v2$re_frame$router$dispatch(event){
if((event == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("re-frame: you called \"dispatch\" without an event vector.",cljs.core.PersistentArrayMap.EMPTY);
} else {
mranderson047.re_frame.v0v10v2.re_frame.router.push(mranderson047.re_frame.v0v10v2.re_frame.router.event_queue,event);
}

return null;
});
/**
 * Synchronously (immediately) process `event`. Do not queue.
 * 
 *   Generally, don't use this. Instead use `dispatch`. It is an error
 *   to use `dispatch-sync` within an event handler.
 * 
 *   Useful when any delay in processing is a problem:
 *   1. the `:on-change` handler of a text field where we are expecting fast typing.
 *   2  when initialising your app - see 'main' in todomvc examples
 *   3. in a unit test where we don't want the action 'later'
 * 
 *   Usage:
 *   (dispatch-sync [:sing :falsetto 634])
 */
mranderson047.re_frame.v0v10v2.re_frame.router.dispatch_sync = (function mranderson047$re_frame$v0v10v2$re_frame$router$dispatch_sync(event_v){
mranderson047.re_frame.v0v10v2.re_frame.events.handle(event_v);

mranderson047.re_frame.v0v10v2.re_frame.router._call_post_event_callbacks(mranderson047.re_frame.v0v10v2.re_frame.router.event_queue,event_v);

return null;
});

//# sourceMappingURL=mranderson047.re_frame.v0v10v2.re_frame.router.js.map
