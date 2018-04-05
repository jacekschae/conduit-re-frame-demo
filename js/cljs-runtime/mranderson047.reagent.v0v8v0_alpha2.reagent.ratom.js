goog.provide('mranderson047.reagent.v0v8v0_alpha2.reagent.ratom');
goog.require('cljs.core');
goog.require('mranderson047.reagent.v0v8v0_alpha2.reagent.impl.util');
goog.require('mranderson047.reagent.v0v8v0_alpha2.reagent.debug');
goog.require('mranderson047.reagent.v0v8v0_alpha2.reagent.impl.batching');
goog.require('clojure.set');
if(typeof mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.debug !== 'undefined'){
} else {
mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.debug = false;
}
if(typeof mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.generation !== 'undefined'){
} else {
mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.generation = (0);
}
if(typeof mranderson047.reagent.v0v8v0_alpha2.reagent.ratom._running !== 'undefined'){
} else {
mranderson047.reagent.v0v8v0_alpha2.reagent.ratom._running = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.reactive_QMARK_ = (function mranderson047$reagent$v0v8v0_alpha2$reagent$ratom$reactive_QMARK_(){
return !((mranderson047.reagent.v0v8v0_alpha2.reagent.ratom._STAR_ratom_context_STAR_ == null));
});
mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.running = (function mranderson047$reagent$v0v8v0_alpha2$reagent$ratom$running(){
return cljs.core.deref(mranderson047.reagent.v0v8v0_alpha2.reagent.ratom._running);
});
mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.arr_len = (function mranderson047$reagent$v0v8v0_alpha2$reagent$ratom$arr_len(x){
if((x == null)){
return (0);
} else {
return x.length;
}
});
mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.arr_eq = (function mranderson047$reagent$v0v8v0_alpha2$reagent$ratom$arr_eq(x,y){
var len = mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.arr_len(x);
var and__3911__auto__ = (len === mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.arr_len(y));
if(and__3911__auto__){
var i = (0);
while(true){
var or__3922__auto__ = (i === len);
if(or__3922__auto__){
return or__3922__auto__;
} else {
if(((x[i]) === (y[i]))){
var G__25921 = (i + (1));
i = G__25921;
continue;
} else {
return false;
}
}
break;
}
} else {
return and__3911__auto__;
}
});
mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.in_context = (function mranderson047$reagent$v0v8v0_alpha2$reagent$ratom$in_context(obj,f){
var _STAR_ratom_context_STAR_25922 = mranderson047.reagent.v0v8v0_alpha2.reagent.ratom._STAR_ratom_context_STAR_;
mranderson047.reagent.v0v8v0_alpha2.reagent.ratom._STAR_ratom_context_STAR_ = obj;

try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}finally {mranderson047.reagent.v0v8v0_alpha2.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_25922;
}});
mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.deref_capture = (function mranderson047$reagent$v0v8v0_alpha2$reagent$ratom$deref_capture(f,r){
r.captured = null;

r.ratomGeneration = mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.generation = (mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.generation + (1));


var res = mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.in_context(r,f);
var c = r.captured;
r.dirty_QMARK_ = false;

if(mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.arr_eq(c,r.watching)){
} else {
r._update_watching(c);
}

return res;
});
mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.notify_deref_watcher_BANG_ = (function mranderson047$reagent$v0v8v0_alpha2$reagent$ratom$notify_deref_watcher_BANG_(derefed){
var temp__5461__auto__ = mranderson047.reagent.v0v8v0_alpha2.reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5461__auto__ == null)){
return null;
} else {
var r = temp__5461__auto__;
var c = r.captured;
if((c == null)){
return r.captured = [derefed];
} else {
return c.push(derefed);
}
}
});
mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.check_watches = (function mranderson047$reagent$v0v8v0_alpha2$reagent$ratom$check_watches(old,new$){
if(mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.debug){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mranderson047.reagent.v0v8v0_alpha2.reagent.ratom._running,cljs.core._PLUS_,(cljs.core.count(new$) - cljs.core.count(old)));
} else {
}

return new$;
});
mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.add_w = (function mranderson047$reagent$v0v8v0_alpha2$reagent$ratom$add_w(this$,key,f){
var w = this$.watches;
this$.watches = mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.check_watches(w,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(w,key,f));

return this$.watchesArr = null;
});
mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.remove_w = (function mranderson047$reagent$v0v8v0_alpha2$reagent$ratom$remove_w(this$,key){
var w = this$.watches;
this$.watches = mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.check_watches(w,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(w,key));

return this$.watchesArr = null;
});
mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.notify_w = (function mranderson047$reagent$v0v8v0_alpha2$reagent$ratom$notify_w(this$,old,new$){
var w = this$.watchesArr;
var a = (((w == null))?this$.watchesArr = cljs.core.reduce_kv(((function (w){
return (function (p1__25929_SHARP_,p2__25930_SHARP_,p3__25931_SHARP_){
var G__25933 = p1__25929_SHARP_;
G__25933.push(p2__25930_SHARP_);

G__25933.push(p3__25931_SHARP_);

return G__25933;
});})(w))
,[],this$.watches):w);
var len = a.length;
var i = (0);
while(true){
if((i < len)){
var k_25934 = (a[i]);
var f_25935 = (a[(i + (1))]);
(f_25935.cljs$core$IFn$_invoke$arity$4 ? f_25935.cljs$core$IFn$_invoke$arity$4(k_25934,this$,old,new$) : f_25935.call(null,k_25934,this$,old,new$));

var G__25936 = ((2) + i);
i = G__25936;
continue;
} else {
return null;
}
break;
}
});
mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.pr_atom = (function mranderson047$reagent$v0v8v0_alpha2$reagent$ratom$pr_atom(a,writer,opts,s){
cljs.core._write(writer,["#<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," "].join(''));

cljs.core.pr_writer((function (){var _STAR_ratom_context_STAR_25937 = mranderson047.reagent.v0v8v0_alpha2.reagent.ratom._STAR_ratom_context_STAR_;
mranderson047.reagent.v0v8v0_alpha2.reagent.ratom._STAR_ratom_context_STAR_ = null;

try{return cljs.core._deref(a);
}finally {mranderson047.reagent.v0v8v0_alpha2.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_25937;
}})(),writer,opts);

return cljs.core._write(writer,">");
});
if(typeof mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.rea_queue !== 'undefined'){
} else {
mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.rea_queue = null;
}
mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.rea_enqueue = (function mranderson047$reagent$v0v8v0_alpha2$reagent$ratom$rea_enqueue(r){
if((mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.rea_queue == null)){
mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.rea_queue = [];

mranderson047.reagent.v0v8v0_alpha2.reagent.impl.batching.schedule();
} else {
}

return mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.rea_queue.push(r);
});
mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.flush_BANG_ = (function mranderson047$reagent$v0v8v0_alpha2$reagent$ratom$flush_BANG_(){
while(true){
var q = mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.rea_queue;
if((q == null)){
return null;
} else {
mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.rea_queue = null;

var n__4376__auto___25945 = q.length;
var i_25946 = (0);
while(true){
if((i_25946 < n__4376__auto___25945)){
(q[i_25946])._queued_run();

var G__25947 = (i_25946 + (1));
i_25946 = G__25947;
continue;
} else {
}
break;
}

continue;
}
break;
}
});
mranderson047.reagent.v0v8v0_alpha2.reagent.impl.batching.ratom_flush = mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.flush_BANG_;

/**
 * @interface
 */
mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.IReactiveAtom = function(){};


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
 * @implements {mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.IReactiveAtom}
*/
mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.RAtom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2154201088;
this.cljs$lang$protocol_mask$partition1$ = 114690;
});
mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.RAtom.prototype.mranderson047$reagent$v0v8v0_alpha2$reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL;

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.RAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.pr_atom(a__$1,w,opts,"Atom:");
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.RAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.RAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.RAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.RAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
if((self__.validator == null)){
} else {
if(cljs.core.truth_((self__.validator.cljs$core$IFn$_invoke$arity$1 ? self__.validator.cljs$core$IFn$_invoke$arity$1(new_value) : self__.validator.call(null,new_value)))){
} else {
throw (new Error(["Assert failed: ","Validator rejected reference state","\n","(validator new-value)"].join('')));
}
}

var old_value = self__.state;
self__.state = new_value;

if((self__.watches == null)){
} else {
mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.notify_w(a__$1,old_value,new_value);
}

return new_value;
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(self__.state) : f.call(null,self__.state)));
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(self__.state,x) : f.call(null,self__.state,x)));
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(self__.state,x,y) : f.call(null,self__.state,x,y)));
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,self__.state,x,y,more));
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.notify_w(this$__$1,old,new$);
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.add_w(this$__$1,key,f);
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.remove_w(this$__$1,key);
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.RAtom.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.RAtom(self__.state,new_meta,self__.validator,self__.watches));
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.RAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.notify_deref_watcher_BANG_(this$__$1);

return self__.state;
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.RAtom.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"meta","meta",-1154898805,null),new cljs.core.Symbol(null,"validator","validator",-325659154,null),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.RAtom.cljs$lang$type = true;

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.RAtom.cljs$lang$ctorStr = "mranderson047.reagent.v0v8v0-alpha2.reagent.ratom/RAtom";

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"mranderson047.reagent.v0v8v0-alpha2.reagent.ratom/RAtom");
});

/**
 * Positional factory function for mranderson047.reagent.v0v8v0-alpha2.reagent.ratom/RAtom.
 */
mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.__GT_RAtom = (function mranderson047$reagent$v0v8v0_alpha2$reagent$ratom$__GT_RAtom(state,meta,validator,watches){
return (new mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.RAtom(state,meta,validator,watches));
});

/**
 * Like clojure.core/atom, except that it keeps track of derefs.
 */
mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.atom = (function mranderson047$reagent$v0v8v0_alpha2$reagent$ratom$atom(var_args){
var G__25968 = arguments.length;
switch (G__25968) {
case 1:
return mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___25980 = arguments.length;
var i__4500__auto___25981 = (0);
while(true){
if((i__4500__auto___25981 < len__4499__auto___25980)){
args_arr__4514__auto__.push((arguments[i__4500__auto___25981]));

var G__25982 = (i__4500__auto___25981 + (1));
i__4500__auto___25981 = G__25982;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((1)),(0),null));
return mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4515__auto__);

}
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1 = (function (x){
return mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.__GT_RAtom(x,null,null,null);
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__25973){
var map__25974 = p__25973;
var map__25974__$1 = ((((!((map__25974 == null)))?(((((map__25974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25974.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25974):map__25974);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25974__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var validator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25974__$1,new cljs.core.Keyword(null,"validator","validator",-1966190681));
return mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.__GT_RAtom(x,meta,validator,null);
});

/** @this {Function} */
mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.atom.cljs$lang$applyTo = (function (seq25965){
var G__25966 = cljs.core.first(seq25965);
var seq25965__$1 = cljs.core.next(seq25965);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25966,seq25965__$1);
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.atom.cljs$lang$maxFixedArity = (1);

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.cache_key = "reagReactionCache";
mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.cached_reaction = (function mranderson047$reagent$v0v8v0_alpha2$reagent$ratom$cached_reaction(f,o,k,obj,destroy){
var m = (o["reagReactionCache"]);
var m__$1 = (((m == null))?cljs.core.PersistentArrayMap.EMPTY:m);
var r = (m__$1.cljs$core$IFn$_invoke$arity$2 ? m__$1.cljs$core$IFn$_invoke$arity$2(k,null) : m__$1.call(null,k,null));
if(!((r == null))){
return cljs.core._deref(r);
} else {
if((mranderson047.reagent.v0v8v0_alpha2.reagent.ratom._STAR_ratom_context_STAR_ == null)){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
var r__$1 = (function (){var G__25992 = f;
var G__25993 = new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360);
var G__25994 = ((function (G__25992,G__25993,m,m__$1,r){
return (function (x){
if(mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.debug){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mranderson047.reagent.v0v8v0_alpha2.reagent.ratom._running,cljs.core.dec);
} else {
}

var __26006 = (o["reagReactionCache"]);
var __26007__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(__26006,k);
(o["reagReactionCache"] = __26007__$1);

if(!((obj == null))){
obj.reaction = null;
} else {
}

if(!((destroy == null))){
return (destroy.cljs$core$IFn$_invoke$arity$1 ? destroy.cljs$core$IFn$_invoke$arity$1(x) : destroy.call(null,x));
} else {
return null;
}
});})(G__25992,G__25993,m,m__$1,r))
;
return (mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3 ? mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3(G__25992,G__25993,G__25994) : mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.make_reaction.call(null,G__25992,G__25993,G__25994));
})();
var v = cljs.core._deref(r__$1);
(o["reagReactionCache"] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,r__$1));

if(mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.debug){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mranderson047.reagent.v0v8v0_alpha2.reagent.ratom._running,cljs.core.inc);
} else {
}

if(!((obj == null))){
obj.reaction = r__$1;
} else {
}

return v;

}
}
});

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.IReactiveAtom}
*/
mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.Track = (function (f,args,reaction){
this.f = f;
this.args = args;
this.reaction = reaction;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.Track.prototype.mranderson047$reagent$v0v8v0_alpha2$reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL;

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.Track.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var temp__5459__auto__ = self__.reaction;
if((temp__5459__auto__ == null)){
return mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.cached_reaction(((function (temp__5459__auto__,this$__$1){
return (function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(self__.f,self__.args);
});})(temp__5459__auto__,this$__$1))
,self__.f,self__.args,this$__$1,null);
} else {
var r = temp__5459__auto__;
return cljs.core._deref(r);
}
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.Track.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (((other instanceof mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.Track)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.f,other.f)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.args,other.args)));
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.Track.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.f,self__.args], null));
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.Track.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.pr_atom(a__$1,w,opts,"Track:");
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.Track.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),cljs.core.with_meta(new cljs.core.Symbol(null,"reaction","reaction",2131401315,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.Track.cljs$lang$type = true;

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.Track.cljs$lang$ctorStr = "mranderson047.reagent.v0v8v0-alpha2.reagent.ratom/Track";

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.Track.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"mranderson047.reagent.v0v8v0-alpha2.reagent.ratom/Track");
});

/**
 * Positional factory function for mranderson047.reagent.v0v8v0-alpha2.reagent.ratom/Track.
 */
mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.__GT_Track = (function mranderson047$reagent$v0v8v0_alpha2$reagent$ratom$__GT_Track(f,args,reaction){
return (new mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.Track(f,args,reaction));
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.make_track = (function mranderson047$reagent$v0v8v0_alpha2$reagent$ratom$make_track(f,args){
return (new mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.Track(f,args,null));
});
mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.make_track_BANG_ = (function mranderson047$reagent$v0v8v0_alpha2$reagent$ratom$make_track_BANG_(f,args){
var t = mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.make_track(f,args);
var r = (function (){var G__26019 = ((function (t){
return (function (){
return cljs.core._deref(t);
});})(t))
;
var G__26020 = new cljs.core.Keyword(null,"auto-run","auto-run",1958400437);
var G__26021 = true;
return (mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3 ? mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$3(G__26019,G__26020,G__26021) : mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.make_reaction.call(null,G__26019,G__26020,G__26021));
})();
cljs.core.deref(r);

return r;
});
mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.track = (function mranderson047$reagent$v0v8v0_alpha2$reagent$ratom$track(var_args){
var args__4502__auto__ = [];
var len__4499__auto___26024 = arguments.length;
var i__4500__auto___26025 = (0);
while(true){
if((i__4500__auto___26025 < len__4499__auto___26024)){
args__4502__auto__.push((arguments[i__4500__auto___26025]));

var G__26026 = (i__4500__auto___26025 + (1));
i__4500__auto___26025 = G__26026;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.track.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.make_track(f,args);
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.track.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.track.cljs$lang$applyTo = (function (seq26022){
var G__26023 = cljs.core.first(seq26022);
var seq26022__$1 = cljs.core.next(seq26022);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26023,seq26022__$1);
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.track_BANG_ = (function mranderson047$reagent$v0v8v0_alpha2$reagent$ratom$track_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___26029 = arguments.length;
var i__4500__auto___26030 = (0);
while(true){
if((i__4500__auto___26030 < len__4499__auto___26029)){
args__4502__auto__.push((arguments[i__4500__auto___26030]));

var G__26031 = (i__4500__auto___26030 + (1));
i__4500__auto___26030 = G__26031;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.track_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.track_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.make_track_BANG_(f,args);
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.track_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.track_BANG_.cljs$lang$applyTo = (function (seq26027){
var G__26028 = cljs.core.first(seq26027);
var seq26027__$1 = cljs.core.next(seq26027);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26028,seq26027__$1);
});


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.IReactiveAtom}
*/
mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.RCursor = (function (ratom,path,reaction,state,watches){
this.ratom = ratom;
this.path = path;
this.reaction = reaction;
this.state = state;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
});
mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.RCursor.prototype._peek = (function (){
var self__ = this;
var this$ = this;
var _STAR_ratom_context_STAR_26039 = mranderson047.reagent.v0v8v0_alpha2.reagent.ratom._STAR_ratom_context_STAR_;
mranderson047.reagent.v0v8v0_alpha2.reagent.ratom._STAR_ratom_context_STAR_ = null;

try{return cljs.core._deref(this$);
}finally {mranderson047.reagent.v0v8v0_alpha2.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_26039;
}});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.RCursor.prototype._set_state = (function (oldstate,newstate){
var self__ = this;
var this$ = this;
if((oldstate === newstate)){
return null;
} else {
self__.state = newstate;

if(!((self__.watches == null))){
return mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.notify_w(this$,oldstate,newstate);
} else {
return null;
}
}
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.RCursor.prototype.mranderson047$reagent$v0v8v0_alpha2$reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL;

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.RCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.pr_atom(a__$1,w,opts,["Cursor: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.path)].join(''));
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.RCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.ratom,self__.path], null));
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.RCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (((other instanceof mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.RCursor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.path,other.path)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.ratom,other.ratom)));
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.RCursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,new_value){
var self__ = this;
var this$__$1 = this;
var oldstate = self__.state;
this$__$1._set_state(oldstate,new_value);

if(((!((self__.ratom == null)))?(((((self__.ratom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === self__.ratom.cljs$core$IDeref$))))?true:(((!self__.ratom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,self__.ratom):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,self__.ratom))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.path,cljs.core.PersistentVector.EMPTY)){
cljs.core.reset_BANG_(self__.ratom,new_value);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.ratom,cljs.core.assoc_in,self__.path,new_value);
}
} else {
(self__.ratom.cljs$core$IFn$_invoke$arity$2 ? self__.ratom.cljs$core$IFn$_invoke$arity$2(self__.path,new_value) : self__.ratom.call(null,self__.path,new_value));
}

return new_value;
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__26041 = a__$1._peek();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__26041) : f.call(null,G__26041));
})());
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__26042 = a__$1._peek();
var G__26043 = x;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__26042,G__26043) : f.call(null,G__26042,G__26043));
})());
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__26044 = a__$1._peek();
var G__26045 = x;
var G__26046 = y;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__26044,G__26045,G__26046) : f.call(null,G__26044,G__26045,G__26046));
})());
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,a__$1._peek(),x,y,more));
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.notify_w(this$__$1,old,new$);
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.add_w(this$__$1,key,f);
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.remove_w(this$__$1,key);
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.RCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var oldstate = self__.state;
var newstate = (function (){var temp__5459__auto__ = self__.reaction;
if((temp__5459__auto__ == null)){
var f = ((((!((self__.ratom == null)))?(((((self__.ratom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === self__.ratom.cljs$core$IDeref$))))?true:(((!self__.ratom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,self__.ratom):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,self__.ratom)))?((function (temp__5459__auto__,oldstate,this$__$1){
return (function (){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.ratom),self__.path);
});})(temp__5459__auto__,oldstate,this$__$1))
:((function (temp__5459__auto__,oldstate,this$__$1){
return (function (){
return (self__.ratom.cljs$core$IFn$_invoke$arity$1 ? self__.ratom.cljs$core$IFn$_invoke$arity$1(self__.path) : self__.ratom.call(null,self__.path));
});})(temp__5459__auto__,oldstate,this$__$1))
);
return mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.cached_reaction(f,self__.ratom,self__.path,this$__$1,null);
} else {
var r = temp__5459__auto__;
return cljs.core._deref(r);
}
})();
this$__$1._set_state(oldstate,newstate);

return newstate;
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.RCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ratom","ratom",1514010260,null),new cljs.core.Symbol(null,"path","path",1452340359,null),cljs.core.with_meta(new cljs.core.Symbol(null,"reaction","reaction",2131401315,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.RCursor.cljs$lang$type = true;

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.RCursor.cljs$lang$ctorStr = "mranderson047.reagent.v0v8v0-alpha2.reagent.ratom/RCursor";

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.RCursor.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"mranderson047.reagent.v0v8v0-alpha2.reagent.ratom/RCursor");
});

/**
 * Positional factory function for mranderson047.reagent.v0v8v0-alpha2.reagent.ratom/RCursor.
 */
mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.__GT_RCursor = (function mranderson047$reagent$v0v8v0_alpha2$reagent$ratom$__GT_RCursor(ratom,path,reaction,state,watches){
return (new mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.RCursor(ratom,path,reaction,state,watches));
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.cursor = (function mranderson047$reagent$v0v8v0_alpha2$reagent$ratom$cursor(src,path){
if((function (){var or__3922__auto__ = ((!((src == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === src.mranderson047$reagent$v0v8v0_alpha2$reagent$ratom$IReactiveAtom$))))?true:(((!src.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.IReactiveAtom,src):false)):cljs.core.native_satisfies_QMARK_(mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.IReactiveAtom,src));
if(or__3922__auto__){
return or__3922__auto__;
} else {
return ((cljs.core.ifn_QMARK_(src)) && (!(cljs.core.vector_QMARK_(src))));
}
})()){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["src must be a reactive atom or a function, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)))].join('')),"\n","(or (satisfies? IReactiveAtom src) (and (ifn? src) (not (vector? src))))"].join('')));
}

return mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.__GT_RCursor(src,path,null,null,null);
});
mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.with_let_destroy = (function mranderson047$reagent$v0v8v0_alpha2$reagent$ratom$with_let_destroy(v){
var temp__5461__auto__ = v.destroy;
if((temp__5461__auto__ == null)){
return null;
} else {
var f = temp__5461__auto__;
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}
});
mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.with_let_values = (function mranderson047$reagent$v0v8v0_alpha2$reagent$ratom$with_let_values(key){
var temp__5459__auto__ = mranderson047.reagent.v0v8v0_alpha2.reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5459__auto__ == null)){
return [];
} else {
var c = temp__5459__auto__;
return mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.cached_reaction(cljs.core.array,c,key,null,mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.with_let_destroy);
}
});

/**
 * @interface
 */
mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.IDisposable = function(){};

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.dispose_BANG_ = (function mranderson047$reagent$v0v8v0_alpha2$reagent$ratom$dispose_BANG_(this$){
if(((!((this$ == null))) && (!((this$.mranderson047$reagent$v0v8v0_alpha2$reagent$ratom$IDisposable$dispose_BANG_$arity$1 == null))))){
return this$.mranderson047$reagent$v0v8v0_alpha2$reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.dispose_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto__.call(null,this$));
} else {
var m__4212__auto____$1 = (mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.dispose_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IDisposable.dispose!",this$);
}
}
}
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.add_on_dispose_BANG_ = (function mranderson047$reagent$v0v8v0_alpha2$reagent$ratom$add_on_dispose_BANG_(this$,f){
if(((!((this$ == null))) && (!((this$.mranderson047$reagent$v0v8v0_alpha2$reagent$ratom$IDisposable$add_on_dispose_BANG_$arity$2 == null))))){
return this$.mranderson047$reagent$v0v8v0_alpha2$reagent$ratom$IDisposable$add_on_dispose_BANG_$arity$2(this$,f);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.add_on_dispose_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(this$,f) : m__4212__auto__.call(null,this$,f));
} else {
var m__4212__auto____$1 = (mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.add_on_dispose_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,f) : m__4212__auto____$1.call(null,this$,f));
} else {
throw cljs.core.missing_protocol("IDisposable.add-on-dispose!",this$);
}
}
}
});


/**
 * @interface
 */
mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.IRunnable = function(){};

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.run = (function mranderson047$reagent$v0v8v0_alpha2$reagent$ratom$run(this$){
if(((!((this$ == null))) && (!((this$.mranderson047$reagent$v0v8v0_alpha2$reagent$ratom$IRunnable$run$arity$1 == null))))){
return this$.mranderson047$reagent$v0v8v0_alpha2$reagent$ratom$IRunnable$run$arity$1(this$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.run[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto__.call(null,this$));
} else {
var m__4212__auto____$1 = (mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.run["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IRunnable.run",this$);
}
}
}
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.handle_reaction_change = (function mranderson047$reagent$v0v8v0_alpha2$reagent$ratom$handle_reaction_change(this$,sender,old,new$){
return this$._handle_change(sender,old,new$);
});

/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.IDisposable}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.IRunnable}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.IReactiveAtom}
*/
mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.Reaction = (function (f,state,dirty_QMARK_,nocache_QMARK_,watching,watches,auto_run,caught){
this.f = f;
this.state = state;
this.dirty_QMARK_ = dirty_QMARK_;
this.nocache_QMARK_ = nocache_QMARK_;
this.watching = watching;
this.watches = watches;
this.auto_run = auto_run;
this.caught = caught;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
});
mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.Reaction.prototype._peek_at = (function (){
var self__ = this;
var this$ = this;
var _STAR_ratom_context_STAR_26050 = mranderson047.reagent.v0v8v0_alpha2.reagent.ratom._STAR_ratom_context_STAR_;
mranderson047.reagent.v0v8v0_alpha2.reagent.ratom._STAR_ratom_context_STAR_ = null;

try{return cljs.core._deref(this$);
}finally {mranderson047.reagent.v0v8v0_alpha2.reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_26050;
}});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.Reaction.prototype._handle_change = (function (sender,oldval,newval){
var self__ = this;
var this$ = this;
if((((oldval === newval)) || (self__.dirty_QMARK_))){
return null;
} else {
if((self__.auto_run == null)){
self__.dirty_QMARK_ = true;

return mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.rea_enqueue(this$);
} else {
if(self__.auto_run === true){
return this$._run(false);
} else {
return (self__.auto_run.cljs$core$IFn$_invoke$arity$1 ? self__.auto_run.cljs$core$IFn$_invoke$arity$1(this$) : self__.auto_run.call(null,this$));
}
}
}
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.Reaction.prototype._update_watching = (function (derefed){
var self__ = this;
var this$ = this;
var new$ = cljs.core.set(derefed);
var old = cljs.core.set(self__.watching);
self__.watching = derefed;

var seq__26051_26074 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(new$,old));
var chunk__26052_26075 = null;
var count__26053_26076 = (0);
var i__26054_26077 = (0);
while(true){
if((i__26054_26077 < count__26053_26076)){
var w_26078 = chunk__26052_26075.cljs$core$IIndexed$_nth$arity$2(null,i__26054_26077);
cljs.core._add_watch(w_26078,this$,mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.handle_reaction_change);


var G__26079 = seq__26051_26074;
var G__26080 = chunk__26052_26075;
var G__26081 = count__26053_26076;
var G__26082 = (i__26054_26077 + (1));
seq__26051_26074 = G__26079;
chunk__26052_26075 = G__26080;
count__26053_26076 = G__26081;
i__26054_26077 = G__26082;
continue;
} else {
var temp__5457__auto___26083 = cljs.core.seq(seq__26051_26074);
if(temp__5457__auto___26083){
var seq__26051_26084__$1 = temp__5457__auto___26083;
if(cljs.core.chunked_seq_QMARK_(seq__26051_26084__$1)){
var c__4319__auto___26085 = cljs.core.chunk_first(seq__26051_26084__$1);
var G__26086 = cljs.core.chunk_rest(seq__26051_26084__$1);
var G__26087 = c__4319__auto___26085;
var G__26088 = cljs.core.count(c__4319__auto___26085);
var G__26089 = (0);
seq__26051_26074 = G__26086;
chunk__26052_26075 = G__26087;
count__26053_26076 = G__26088;
i__26054_26077 = G__26089;
continue;
} else {
var w_26090 = cljs.core.first(seq__26051_26084__$1);
cljs.core._add_watch(w_26090,this$,mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.handle_reaction_change);


var G__26091 = cljs.core.next(seq__26051_26084__$1);
var G__26092 = null;
var G__26093 = (0);
var G__26094 = (0);
seq__26051_26074 = G__26091;
chunk__26052_26075 = G__26092;
count__26053_26076 = G__26093;
i__26054_26077 = G__26094;
continue;
}
} else {
}
}
break;
}

var seq__26055 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__26056 = null;
var count__26057 = (0);
var i__26058 = (0);
while(true){
if((i__26058 < count__26057)){
var w = chunk__26056.cljs$core$IIndexed$_nth$arity$2(null,i__26058);
cljs.core._remove_watch(w,this$);


var G__26095 = seq__26055;
var G__26096 = chunk__26056;
var G__26097 = count__26057;
var G__26098 = (i__26058 + (1));
seq__26055 = G__26095;
chunk__26056 = G__26096;
count__26057 = G__26097;
i__26058 = G__26098;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__26055);
if(temp__5457__auto__){
var seq__26055__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26055__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__26055__$1);
var G__26099 = cljs.core.chunk_rest(seq__26055__$1);
var G__26100 = c__4319__auto__;
var G__26101 = cljs.core.count(c__4319__auto__);
var G__26102 = (0);
seq__26055 = G__26099;
chunk__26056 = G__26100;
count__26057 = G__26101;
i__26058 = G__26102;
continue;
} else {
var w = cljs.core.first(seq__26055__$1);
cljs.core._remove_watch(w,this$);


var G__26103 = cljs.core.next(seq__26055__$1);
var G__26104 = null;
var G__26105 = (0);
var G__26106 = (0);
seq__26055 = G__26103;
chunk__26056 = G__26104;
count__26057 = G__26105;
i__26058 = G__26106;
continue;
}
} else {
return null;
}
}
break;
}
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.Reaction.prototype._queued_run = (function (){
var self__ = this;
var this$ = this;
if(((self__.dirty_QMARK_) && (!((self__.watching == null))))){
return this$._run(true);
} else {
return null;
}
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.Reaction.prototype._try_capture = (function (f__$1){
var self__ = this;
var this$ = this;
try{self__.caught = null;

return mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.deref_capture(f__$1,this$);
}catch (e26059){var e = e26059;
self__.state = e;

self__.caught = e;

return self__.dirty_QMARK_ = false;
}});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.Reaction.prototype._run = (function (check){
var self__ = this;
var this$ = this;
var oldstate = self__.state;
var res = (cljs.core.truth_(check)?this$._try_capture(self__.f):mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.deref_capture(self__.f,this$));
if(self__.nocache_QMARK_){
} else {
self__.state = res;

if((((self__.watches == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(oldstate,res)))){
} else {
mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.notify_w(this$,oldstate,res);
}
}

return res;
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.Reaction.prototype._set_opts = (function (p__26060){
var self__ = this;
var map__26061 = p__26060;
var map__26061__$1 = ((((!((map__26061 == null)))?(((((map__26061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26061.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26061):map__26061);
var auto_run__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26061__$1,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437));
var on_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26061__$1,new cljs.core.Keyword(null,"on-set","on-set",-140953470));
var on_dispose = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26061__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360));
var no_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26061__$1,new cljs.core.Keyword(null,"no-cache","no-cache",1588056370));
var this$ = this;
if(!((auto_run__$1 == null))){
this$.auto_run = auto_run__$1;
} else {
}

if(!((on_set == null))){
this$.on_set = on_set;
} else {
}

if(!((on_dispose == null))){
this$.on_dispose = on_dispose;
} else {
}

if(!((no_cache == null))){
return this$.nocache_QMARK_ = no_cache;
} else {
return null;
}
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.Reaction.prototype.mranderson047$reagent$v0v8v0_alpha2$reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL;

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.Reaction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.pr_atom(a__$1,w,opts,["Reaction ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(a__$1)),":"].join(''));
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.Reaction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.Reaction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.Reaction.prototype.mranderson047$reagent$v0v8v0_alpha2$reagent$ratom$IDisposable$ = cljs.core.PROTOCOL_SENTINEL;

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.Reaction.prototype.mranderson047$reagent$v0v8v0_alpha2$reagent$ratom$IDisposable$dispose_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var s = self__.state;
var wg = self__.watching;
self__.watching = null;

self__.state = null;

self__.auto_run = null;

self__.dirty_QMARK_ = true;

var seq__26063_26107 = cljs.core.seq(cljs.core.set(wg));
var chunk__26064_26108 = null;
var count__26065_26109 = (0);
var i__26066_26110 = (0);
while(true){
if((i__26066_26110 < count__26065_26109)){
var w_26111 = chunk__26064_26108.cljs$core$IIndexed$_nth$arity$2(null,i__26066_26110);
cljs.core._remove_watch(w_26111,this$__$1);


var G__26112 = seq__26063_26107;
var G__26113 = chunk__26064_26108;
var G__26114 = count__26065_26109;
var G__26115 = (i__26066_26110 + (1));
seq__26063_26107 = G__26112;
chunk__26064_26108 = G__26113;
count__26065_26109 = G__26114;
i__26066_26110 = G__26115;
continue;
} else {
var temp__5457__auto___26116 = cljs.core.seq(seq__26063_26107);
if(temp__5457__auto___26116){
var seq__26063_26117__$1 = temp__5457__auto___26116;
if(cljs.core.chunked_seq_QMARK_(seq__26063_26117__$1)){
var c__4319__auto___26118 = cljs.core.chunk_first(seq__26063_26117__$1);
var G__26119 = cljs.core.chunk_rest(seq__26063_26117__$1);
var G__26120 = c__4319__auto___26118;
var G__26121 = cljs.core.count(c__4319__auto___26118);
var G__26122 = (0);
seq__26063_26107 = G__26119;
chunk__26064_26108 = G__26120;
count__26065_26109 = G__26121;
i__26066_26110 = G__26122;
continue;
} else {
var w_26123 = cljs.core.first(seq__26063_26117__$1);
cljs.core._remove_watch(w_26123,this$__$1);


var G__26124 = cljs.core.next(seq__26063_26117__$1);
var G__26125 = null;
var G__26126 = (0);
var G__26127 = (0);
seq__26063_26107 = G__26124;
chunk__26064_26108 = G__26125;
count__26065_26109 = G__26126;
i__26066_26110 = G__26127;
continue;
}
} else {
}
}
break;
}

if(!((this$__$1.on_dispose == null))){
this$__$1.on_dispose(s);
} else {
}

var temp__5461__auto__ = this$__$1.on_dispose_arr;
if((temp__5461__auto__ == null)){
return null;
} else {
var a = temp__5461__auto__;
var n__4376__auto__ = a.length;
var i = (0);
while(true){
if((i < n__4376__auto__)){
var fexpr__26067_26128 = (a[i]);
(fexpr__26067_26128.cljs$core$IFn$_invoke$arity$1 ? fexpr__26067_26128.cljs$core$IFn$_invoke$arity$1(this$__$1) : fexpr__26067_26128.call(null,this$__$1));

var G__26129 = (i + (1));
i = G__26129;
continue;
} else {
return null;
}
break;
}
}
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.Reaction.prototype.mranderson047$reagent$v0v8v0_alpha2$reagent$ratom$IDisposable$add_on_dispose_BANG_$arity$2 = (function (this$,f__$1){
var self__ = this;
var this$__$1 = this;
var temp__5459__auto__ = this$__$1.on_dispose_arr;
if((temp__5459__auto__ == null)){
return this$__$1.on_dispose_arr = [f__$1];
} else {
var a = temp__5459__auto__;
return a.push(f__$1);
}
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.Reaction.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,newval){
var self__ = this;
var a__$1 = this;
if(cljs.core.fn_QMARK_(a__$1.on_set)){
} else {
throw (new Error(["Assert failed: ","Reaction is read only; on-set is not allowed","\n","(fn? (.-on-set a))"].join('')));
}

var oldval = self__.state;
self__.state = newval;

a__$1.on_set(oldval,newval);

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.notify_w(a__$1,oldval,newval);

return newval;
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f__$1){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__26068 = a__$1._peek_at();
return (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__26068) : f__$1.call(null,G__26068));
})());
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__26069 = a__$1._peek_at();
var G__26070 = x;
return (f__$1.cljs$core$IFn$_invoke$arity$2 ? f__$1.cljs$core$IFn$_invoke$arity$2(G__26069,G__26070) : f__$1.call(null,G__26069,G__26070));
})());
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(function (){var G__26071 = a__$1._peek_at();
var G__26072 = x;
var G__26073 = y;
return (f__$1.cljs$core$IFn$_invoke$arity$3 ? f__$1.cljs$core$IFn$_invoke$arity$3(G__26071,G__26072,G__26073) : f__$1.call(null,G__26071,G__26072,G__26073));
})());
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f__$1,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f__$1,a__$1._peek_at(),x,y,more));
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.Reaction.prototype.mranderson047$reagent$v0v8v0_alpha2$reagent$ratom$IRunnable$ = cljs.core.PROTOCOL_SENTINEL;

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.Reaction.prototype.mranderson047$reagent$v0v8v0_alpha2$reagent$ratom$IRunnable$run$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.flush_BANG_();

return this$__$1._run(false);
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.notify_w(this$__$1,old,new$);
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f__$1){
var self__ = this;
var this$__$1 = this;
return mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.add_w(this$__$1,key,f__$1);
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
var was_empty = cljs.core.empty_QMARK_(self__.watches);
mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.remove_w(this$__$1,key);

if(((!(was_empty)) && (cljs.core.empty_QMARK_(self__.watches)) && ((self__.auto_run == null)))){
return mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.dispose_BANG_(this$__$1);
} else {
return null;
}
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.Reaction.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var temp__5461__auto___26130 = self__.caught;
if((temp__5461__auto___26130 == null)){
} else {
var e_26131 = temp__5461__auto___26130;
throw e_26131;
}

var non_reactive_26132 = (mranderson047.reagent.v0v8v0_alpha2.reagent.ratom._STAR_ratom_context_STAR_ == null);
if(non_reactive_26132){
mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.flush_BANG_();
} else {
}

if(((non_reactive_26132) && ((self__.auto_run == null)))){
if(self__.dirty_QMARK_){
var oldstate_26133 = self__.state;
self__.state = (self__.f.cljs$core$IFn$_invoke$arity$0 ? self__.f.cljs$core$IFn$_invoke$arity$0() : self__.f.call(null));

if((((self__.watches == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(oldstate_26133,self__.state)))){
} else {
mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.notify_w(this$__$1,oldstate_26133,self__.state);
}
} else {
}
} else {
mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.notify_deref_watcher_BANG_(this$__$1);

if(self__.dirty_QMARK_){
this$__$1._run(false);
} else {
}
}

return self__.state;
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.Reaction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty?","dirty?",-419314319,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"nocache?","nocache?",-1065670978,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watching","watching",1947648227,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"auto-run","auto-run",-696035332,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"caught","caught",2084008322,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.Reaction.cljs$lang$type = true;

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.Reaction.cljs$lang$ctorStr = "mranderson047.reagent.v0v8v0-alpha2.reagent.ratom/Reaction";

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"mranderson047.reagent.v0v8v0-alpha2.reagent.ratom/Reaction");
});

/**
 * Positional factory function for mranderson047.reagent.v0v8v0-alpha2.reagent.ratom/Reaction.
 */
mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.__GT_Reaction = (function mranderson047$reagent$v0v8v0_alpha2$reagent$ratom$__GT_Reaction(f,state,dirty_QMARK_,nocache_QMARK_,watching,watches,auto_run,caught){
return (new mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.Reaction(f,state,dirty_QMARK_,nocache_QMARK_,watching,watches,auto_run,caught));
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.make_reaction = (function mranderson047$reagent$v0v8v0_alpha2$reagent$ratom$make_reaction(var_args){
var args__4502__auto__ = [];
var len__4499__auto___26139 = arguments.length;
var i__4500__auto___26140 = (0);
while(true){
if((i__4500__auto___26140 < len__4499__auto___26139)){
args__4502__auto__.push((arguments[i__4500__auto___26140]));

var G__26141 = (i__4500__auto___26140 + (1));
i__4500__auto___26140 = G__26141;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic = (function (f,p__26136){
var map__26137 = p__26136;
var map__26137__$1 = ((((!((map__26137 == null)))?(((((map__26137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26137.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26137):map__26137);
var auto_run = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26137__$1,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437));
var on_set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26137__$1,new cljs.core.Keyword(null,"on-set","on-set",-140953470));
var on_dispose = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26137__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360));
var reaction = mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.__GT_Reaction(f,null,true,false,null,null,null,null);
reaction._set_opts(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"auto-run","auto-run",1958400437),auto_run,new cljs.core.Keyword(null,"on-set","on-set",-140953470),on_set,new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360),on_dispose], null));

return reaction;
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.make_reaction.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.make_reaction.cljs$lang$applyTo = (function (seq26134){
var G__26135 = cljs.core.first(seq26134);
var seq26134__$1 = cljs.core.next(seq26134);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26135,seq26134__$1);
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.temp_reaction = mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.make_reaction(null);
mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.run_in_reaction = (function mranderson047$reagent$v0v8v0_alpha2$reagent$ratom$run_in_reaction(f,obj,key,run,opts){
var r = mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.temp_reaction;
var res = mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.deref_capture(f,r);
if((r.watching == null)){
} else {
mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.temp_reaction = mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.make_reaction(null);

r._set_opts(opts);

r.f = f;

r.auto_run = ((function (r,res){
return (function (){
return (run.cljs$core$IFn$_invoke$arity$1 ? run.cljs$core$IFn$_invoke$arity$1(obj) : run.call(null,obj));
});})(r,res))
;

(obj[key] = r);
}

return res;
});
mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.check_derefs = (function mranderson047$reagent$v0v8v0_alpha2$reagent$ratom$check_derefs(f){
var ctx = {};
var res = mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.in_context(ctx,f);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [res,!((ctx.captured == null))], null);
});

/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
*/
mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.Wrapper = (function (state,callback,changed,watches){
this.state = state;
this.callback = callback;
this.changed = changed;
this.watches = watches;
this.cljs$lang$protocol_mask$partition1$ = 114690;
this.cljs$lang$protocol_mask$partition0$ = 2149613568;
});
mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.Wrapper.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(((self__.changed) && (!((mranderson047.reagent.v0v8v0_alpha2.reagent.ratom._STAR_ratom_context_STAR_ == null))))){
if(cljs.core.truth_(mranderson047.reagent.v0v8v0_alpha2.reagent.debug.has_console)){
(cljs.core.truth_(mranderson047.reagent.v0v8v0_alpha2.reagent.debug.tracking)?mranderson047.reagent.v0v8v0_alpha2.reagent.debug.track_console:console).warn(["Warning: ","derefing stale wrap: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$__$1], 0)))].join(''));
} else {
}
} else {
}


return self__.state;
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.Wrapper.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,newval){
var self__ = this;
var this$__$1 = this;
var oldval = self__.state;
self__.changed = true;

self__.state = newval;

if(!((self__.watches == null))){
mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.notify_w(this$__$1,oldval,newval);
} else {
}

(self__.callback.cljs$core$IFn$_invoke$arity$1 ? self__.callback.cljs$core$IFn$_invoke$arity$1(newval) : self__.callback.call(null,newval));

return newval;
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(self__.state) : f.call(null,self__.state)));
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(self__.state,x) : f.call(null,self__.state,x)));
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(self__.state,x,y) : f.call(null,self__.state,x,y)));
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_(a__$1,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,self__.state,x,y,more));
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.Wrapper.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (((other instanceof mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.Wrapper)) && (!(self__.changed)) && (cljs.core.not(other.changed)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.state,other.state)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.callback,other.callback)));
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.notify_w(this$__$1,old,new$);
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.add_w(this$__$1,key,f);
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.remove_w(this$__$1,key);
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.Wrapper.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.pr_atom(a__$1,w,opts,"Wrap:");
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.Wrapper.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"callback","callback",935395299,null),cljs.core.with_meta(new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.Wrapper.cljs$lang$type = true;

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.Wrapper.cljs$lang$ctorStr = "mranderson047.reagent.v0v8v0-alpha2.reagent.ratom/Wrapper";

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.Wrapper.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"mranderson047.reagent.v0v8v0-alpha2.reagent.ratom/Wrapper");
});

/**
 * Positional factory function for mranderson047.reagent.v0v8v0-alpha2.reagent.ratom/Wrapper.
 */
mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.__GT_Wrapper = (function mranderson047$reagent$v0v8v0_alpha2$reagent$ratom$__GT_Wrapper(state,callback,changed,watches){
return (new mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.Wrapper(state,callback,changed,watches));
});

mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.make_wrapper = (function mranderson047$reagent$v0v8v0_alpha2$reagent$ratom$make_wrapper(value,callback_fn,args){
return mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.__GT_Wrapper(value,mranderson047.reagent.v0v8v0_alpha2.reagent.impl.util.make_partial_fn(callback_fn,args),false,null);
});

//# sourceMappingURL=mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.js.map
