goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__27135 = arguments.length;
switch (G__27135) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async27139 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27139 = (function (f,blockable,meta27140){
this.f = f;
this.blockable = blockable;
this.meta27140 = meta27140;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27139.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27141,meta27140__$1){
var self__ = this;
var _27141__$1 = this;
return (new cljs.core.async.t_cljs$core$async27139(self__.f,self__.blockable,meta27140__$1));
});

cljs.core.async.t_cljs$core$async27139.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27141){
var self__ = this;
var _27141__$1 = this;
return self__.meta27140;
});

cljs.core.async.t_cljs$core$async27139.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27139.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27139.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27139.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27139.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27140","meta27140",-1945482638,null)], null);
});

cljs.core.async.t_cljs$core$async27139.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27139.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27139";

cljs.core.async.t_cljs$core$async27139.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async27139");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27139.
 */
cljs.core.async.__GT_t_cljs$core$async27139 = (function cljs$core$async$__GT_t_cljs$core$async27139(f__$1,blockable__$1,meta27140){
return (new cljs.core.async.t_cljs$core$async27139(f__$1,blockable__$1,meta27140));
});

}

return (new cljs.core.async.t_cljs$core$async27139(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__27182 = arguments.length;
switch (G__27182) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__27194 = arguments.length;
switch (G__27194) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__27198 = arguments.length;
switch (G__27198) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_27200 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_27200) : fn1.call(null,val_27200));
} else {
cljs.core.async.impl.dispatch.run(((function (val_27200,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_27200) : fn1.call(null,val_27200));
});})(val_27200,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__27202 = arguments.length;
switch (G__27202) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5455__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4376__auto___27212 = n;
var x_27213 = (0);
while(true){
if((x_27213 < n__4376__auto___27212)){
(a[x_27213] = (0));

var G__27214 = (x_27213 + (1));
x_27213 = G__27214;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__27215 = (i + (1));
i = G__27215;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if(typeof cljs.core.async.t_cljs$core$async27216 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27216 = (function (flag,meta27217){
this.flag = flag;
this.meta27217 = meta27217;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27216.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27218,meta27217__$1){
var self__ = this;
var _27218__$1 = this;
return (new cljs.core.async.t_cljs$core$async27216(self__.flag,meta27217__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27216.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27218){
var self__ = this;
var _27218__$1 = this;
return self__.meta27217;
});})(flag))
;

cljs.core.async.t_cljs$core$async27216.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27216.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27216.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27216.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27216.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27217","meta27217",999603215,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27216.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27216.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27216";

cljs.core.async.t_cljs$core$async27216.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async27216");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27216.
 */
cljs.core.async.__GT_t_cljs$core$async27216 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27216(flag__$1,meta27217){
return (new cljs.core.async.t_cljs$core$async27216(flag__$1,meta27217));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27216(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27219 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27219 = (function (flag,cb,meta27220){
this.flag = flag;
this.cb = cb;
this.meta27220 = meta27220;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27219.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27221,meta27220__$1){
var self__ = this;
var _27221__$1 = this;
return (new cljs.core.async.t_cljs$core$async27219(self__.flag,self__.cb,meta27220__$1));
});

cljs.core.async.t_cljs$core$async27219.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27221){
var self__ = this;
var _27221__$1 = this;
return self__.meta27220;
});

cljs.core.async.t_cljs$core$async27219.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27219.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async27219.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27219.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27219.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27220","meta27220",-845269911,null)], null);
});

cljs.core.async.t_cljs$core$async27219.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27219.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27219";

cljs.core.async.t_cljs$core$async27219.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async27219");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27219.
 */
cljs.core.async.__GT_t_cljs$core$async27219 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27219(flag__$1,cb__$1,meta27220){
return (new cljs.core.async.t_cljs$core$async27219(flag__$1,cb__$1,meta27220));
});

}

return (new cljs.core.async.t_cljs$core$async27219(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27222_SHARP_){
var G__27224 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27222_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__27224) : fret.call(null,G__27224));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27223_SHARP_){
var G__27225 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27223_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__27225) : fret.call(null,G__27225));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__3922__auto__ = wport;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27243 = (i + (1));
i = G__27243;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3922__auto__ = ret;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3911__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27255 = arguments.length;
var i__4500__auto___27256 = (0);
while(true){
if((i__4500__auto___27256 < len__4499__auto___27255)){
args__4502__auto__.push((arguments[i__4500__auto___27256]));

var G__27257 = (i__4500__auto___27256 + (1));
i__4500__auto___27256 = G__27257;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27251){
var map__27252 = p__27251;
var map__27252__$1 = ((((!((map__27252 == null)))?(((((map__27252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27252):map__27252);
var opts = map__27252__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27247){
var G__27248 = cljs.core.first(seq27247);
var seq27247__$1 = cljs.core.next(seq27247);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27248,seq27247__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__27259 = arguments.length;
switch (G__27259) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__27055__auto___27312 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27055__auto___27312){
return (function (){
var f__27056__auto__ = (function (){var switch__26823__auto__ = ((function (c__27055__auto___27312){
return (function (state_27283){
var state_val_27284 = (state_27283[(1)]);
if((state_val_27284 === (7))){
var inst_27279 = (state_27283[(2)]);
var state_27283__$1 = state_27283;
var statearr_27285_27313 = state_27283__$1;
(statearr_27285_27313[(2)] = inst_27279);

(statearr_27285_27313[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27284 === (1))){
var state_27283__$1 = state_27283;
var statearr_27286_27314 = state_27283__$1;
(statearr_27286_27314[(2)] = null);

(statearr_27286_27314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27284 === (4))){
var inst_27262 = (state_27283[(7)]);
var inst_27262__$1 = (state_27283[(2)]);
var inst_27263 = (inst_27262__$1 == null);
var state_27283__$1 = (function (){var statearr_27287 = state_27283;
(statearr_27287[(7)] = inst_27262__$1);

return statearr_27287;
})();
if(cljs.core.truth_(inst_27263)){
var statearr_27288_27315 = state_27283__$1;
(statearr_27288_27315[(1)] = (5));

} else {
var statearr_27289_27316 = state_27283__$1;
(statearr_27289_27316[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27284 === (13))){
var state_27283__$1 = state_27283;
var statearr_27290_27317 = state_27283__$1;
(statearr_27290_27317[(2)] = null);

(statearr_27290_27317[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27284 === (6))){
var inst_27262 = (state_27283[(7)]);
var state_27283__$1 = state_27283;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27283__$1,(11),to,inst_27262);
} else {
if((state_val_27284 === (3))){
var inst_27281 = (state_27283[(2)]);
var state_27283__$1 = state_27283;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27283__$1,inst_27281);
} else {
if((state_val_27284 === (12))){
var state_27283__$1 = state_27283;
var statearr_27291_27320 = state_27283__$1;
(statearr_27291_27320[(2)] = null);

(statearr_27291_27320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27284 === (2))){
var state_27283__$1 = state_27283;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27283__$1,(4),from);
} else {
if((state_val_27284 === (11))){
var inst_27272 = (state_27283[(2)]);
var state_27283__$1 = state_27283;
if(cljs.core.truth_(inst_27272)){
var statearr_27296_27321 = state_27283__$1;
(statearr_27296_27321[(1)] = (12));

} else {
var statearr_27297_27322 = state_27283__$1;
(statearr_27297_27322[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27284 === (9))){
var state_27283__$1 = state_27283;
var statearr_27298_27323 = state_27283__$1;
(statearr_27298_27323[(2)] = null);

(statearr_27298_27323[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27284 === (5))){
var state_27283__$1 = state_27283;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27299_27324 = state_27283__$1;
(statearr_27299_27324[(1)] = (8));

} else {
var statearr_27300_27325 = state_27283__$1;
(statearr_27300_27325[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27284 === (14))){
var inst_27277 = (state_27283[(2)]);
var state_27283__$1 = state_27283;
var statearr_27301_27326 = state_27283__$1;
(statearr_27301_27326[(2)] = inst_27277);

(statearr_27301_27326[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27284 === (10))){
var inst_27269 = (state_27283[(2)]);
var state_27283__$1 = state_27283;
var statearr_27302_27327 = state_27283__$1;
(statearr_27302_27327[(2)] = inst_27269);

(statearr_27302_27327[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27284 === (8))){
var inst_27266 = cljs.core.async.close_BANG_(to);
var state_27283__$1 = state_27283;
var statearr_27303_27329 = state_27283__$1;
(statearr_27303_27329[(2)] = inst_27266);

(statearr_27303_27329[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27055__auto___27312))
;
return ((function (switch__26823__auto__,c__27055__auto___27312){
return (function() {
var cljs$core$async$state_machine__26824__auto__ = null;
var cljs$core$async$state_machine__26824__auto____0 = (function (){
var statearr_27307 = [null,null,null,null,null,null,null,null];
(statearr_27307[(0)] = cljs$core$async$state_machine__26824__auto__);

(statearr_27307[(1)] = (1));

return statearr_27307;
});
var cljs$core$async$state_machine__26824__auto____1 = (function (state_27283){
while(true){
var ret_value__26825__auto__ = (function (){try{while(true){
var result__26826__auto__ = switch__26823__auto__(state_27283);
if(cljs.core.keyword_identical_QMARK_(result__26826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26826__auto__;
}
break;
}
}catch (e27308){if((e27308 instanceof Object)){
var ex__26827__auto__ = e27308;
var statearr_27309_27330 = state_27283;
(statearr_27309_27330[(5)] = ex__26827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27283);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27308;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27331 = state_27283;
state_27283 = G__27331;
continue;
} else {
return ret_value__26825__auto__;
}
break;
}
});
cljs$core$async$state_machine__26824__auto__ = function(state_27283){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26824__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26824__auto____1.call(this,state_27283);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26824__auto____0;
cljs$core$async$state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26824__auto____1;
return cljs$core$async$state_machine__26824__auto__;
})()
;})(switch__26823__auto__,c__27055__auto___27312))
})();
var state__27057__auto__ = (function (){var statearr_27310 = (f__27056__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27056__auto__.cljs$core$IFn$_invoke$arity$0() : f__27056__auto__.call(null));
(statearr_27310[(6)] = c__27055__auto___27312);

return statearr_27310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27057__auto__);
});})(c__27055__auto___27312))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__27332){
var vec__27333 = p__27332;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27333,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27333,(1),null);
var job = vec__27333;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__27055__auto___27595 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27055__auto___27595,res,vec__27333,v,p,job,jobs,results){
return (function (){
var f__27056__auto__ = (function (){var switch__26823__auto__ = ((function (c__27055__auto___27595,res,vec__27333,v,p,job,jobs,results){
return (function (state_27340){
var state_val_27341 = (state_27340[(1)]);
if((state_val_27341 === (1))){
var state_27340__$1 = state_27340;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27340__$1,(2),res,v);
} else {
if((state_val_27341 === (2))){
var inst_27337 = (state_27340[(2)]);
var inst_27338 = cljs.core.async.close_BANG_(res);
var state_27340__$1 = (function (){var statearr_27342 = state_27340;
(statearr_27342[(7)] = inst_27337);

return statearr_27342;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_27340__$1,inst_27338);
} else {
return null;
}
}
});})(c__27055__auto___27595,res,vec__27333,v,p,job,jobs,results))
;
return ((function (switch__26823__auto__,c__27055__auto___27595,res,vec__27333,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26824__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26824__auto____0 = (function (){
var statearr_27343 = [null,null,null,null,null,null,null,null];
(statearr_27343[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26824__auto__);

(statearr_27343[(1)] = (1));

return statearr_27343;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26824__auto____1 = (function (state_27340){
while(true){
var ret_value__26825__auto__ = (function (){try{while(true){
var result__26826__auto__ = switch__26823__auto__(state_27340);
if(cljs.core.keyword_identical_QMARK_(result__26826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26826__auto__;
}
break;
}
}catch (e27344){if((e27344 instanceof Object)){
var ex__26827__auto__ = e27344;
var statearr_27345_27596 = state_27340;
(statearr_27345_27596[(5)] = ex__26827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27340);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27344;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27597 = state_27340;
state_27340 = G__27597;
continue;
} else {
return ret_value__26825__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26824__auto__ = function(state_27340){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26824__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26824__auto____1.call(this,state_27340);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26824__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26824__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26824__auto__;
})()
;})(switch__26823__auto__,c__27055__auto___27595,res,vec__27333,v,p,job,jobs,results))
})();
var state__27057__auto__ = (function (){var statearr_27346 = (f__27056__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27056__auto__.cljs$core$IFn$_invoke$arity$0() : f__27056__auto__.call(null));
(statearr_27346[(6)] = c__27055__auto___27595);

return statearr_27346;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27057__auto__);
});})(c__27055__auto___27595,res,vec__27333,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27347){
var vec__27348 = p__27347;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27348,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27348,(1),null);
var job = vec__27348;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4376__auto___27598 = n;
var __27599 = (0);
while(true){
if((__27599 < n__4376__auto___27598)){
var G__27351_27600 = type;
var G__27351_27601__$1 = (((G__27351_27600 instanceof cljs.core.Keyword))?G__27351_27600.fqn:null);
switch (G__27351_27601__$1) {
case "compute":
var c__27055__auto___27603 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__27599,c__27055__auto___27603,G__27351_27600,G__27351_27601__$1,n__4376__auto___27598,jobs,results,process,async){
return (function (){
var f__27056__auto__ = (function (){var switch__26823__auto__ = ((function (__27599,c__27055__auto___27603,G__27351_27600,G__27351_27601__$1,n__4376__auto___27598,jobs,results,process,async){
return (function (state_27364){
var state_val_27365 = (state_27364[(1)]);
if((state_val_27365 === (1))){
var state_27364__$1 = state_27364;
var statearr_27366_27604 = state_27364__$1;
(statearr_27366_27604[(2)] = null);

(statearr_27366_27604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27365 === (2))){
var state_27364__$1 = state_27364;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27364__$1,(4),jobs);
} else {
if((state_val_27365 === (3))){
var inst_27362 = (state_27364[(2)]);
var state_27364__$1 = state_27364;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27364__$1,inst_27362);
} else {
if((state_val_27365 === (4))){
var inst_27354 = (state_27364[(2)]);
var inst_27355 = process(inst_27354);
var state_27364__$1 = state_27364;
if(cljs.core.truth_(inst_27355)){
var statearr_27367_27605 = state_27364__$1;
(statearr_27367_27605[(1)] = (5));

} else {
var statearr_27368_27606 = state_27364__$1;
(statearr_27368_27606[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27365 === (5))){
var state_27364__$1 = state_27364;
var statearr_27369_27607 = state_27364__$1;
(statearr_27369_27607[(2)] = null);

(statearr_27369_27607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27365 === (6))){
var state_27364__$1 = state_27364;
var statearr_27370_27608 = state_27364__$1;
(statearr_27370_27608[(2)] = null);

(statearr_27370_27608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27365 === (7))){
var inst_27360 = (state_27364[(2)]);
var state_27364__$1 = state_27364;
var statearr_27371_27609 = state_27364__$1;
(statearr_27371_27609[(2)] = inst_27360);

(statearr_27371_27609[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__27599,c__27055__auto___27603,G__27351_27600,G__27351_27601__$1,n__4376__auto___27598,jobs,results,process,async))
;
return ((function (__27599,switch__26823__auto__,c__27055__auto___27603,G__27351_27600,G__27351_27601__$1,n__4376__auto___27598,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26824__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26824__auto____0 = (function (){
var statearr_27375 = [null,null,null,null,null,null,null];
(statearr_27375[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26824__auto__);

(statearr_27375[(1)] = (1));

return statearr_27375;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26824__auto____1 = (function (state_27364){
while(true){
var ret_value__26825__auto__ = (function (){try{while(true){
var result__26826__auto__ = switch__26823__auto__(state_27364);
if(cljs.core.keyword_identical_QMARK_(result__26826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26826__auto__;
}
break;
}
}catch (e27379){if((e27379 instanceof Object)){
var ex__26827__auto__ = e27379;
var statearr_27380_27610 = state_27364;
(statearr_27380_27610[(5)] = ex__26827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27364);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27379;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27611 = state_27364;
state_27364 = G__27611;
continue;
} else {
return ret_value__26825__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26824__auto__ = function(state_27364){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26824__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26824__auto____1.call(this,state_27364);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26824__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26824__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26824__auto__;
})()
;})(__27599,switch__26823__auto__,c__27055__auto___27603,G__27351_27600,G__27351_27601__$1,n__4376__auto___27598,jobs,results,process,async))
})();
var state__27057__auto__ = (function (){var statearr_27384 = (f__27056__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27056__auto__.cljs$core$IFn$_invoke$arity$0() : f__27056__auto__.call(null));
(statearr_27384[(6)] = c__27055__auto___27603);

return statearr_27384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27057__auto__);
});})(__27599,c__27055__auto___27603,G__27351_27600,G__27351_27601__$1,n__4376__auto___27598,jobs,results,process,async))
);


break;
case "async":
var c__27055__auto___27612 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__27599,c__27055__auto___27612,G__27351_27600,G__27351_27601__$1,n__4376__auto___27598,jobs,results,process,async){
return (function (){
var f__27056__auto__ = (function (){var switch__26823__auto__ = ((function (__27599,c__27055__auto___27612,G__27351_27600,G__27351_27601__$1,n__4376__auto___27598,jobs,results,process,async){
return (function (state_27400){
var state_val_27401 = (state_27400[(1)]);
if((state_val_27401 === (1))){
var state_27400__$1 = state_27400;
var statearr_27405_27613 = state_27400__$1;
(statearr_27405_27613[(2)] = null);

(statearr_27405_27613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27401 === (2))){
var state_27400__$1 = state_27400;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27400__$1,(4),jobs);
} else {
if((state_val_27401 === (3))){
var inst_27398 = (state_27400[(2)]);
var state_27400__$1 = state_27400;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27400__$1,inst_27398);
} else {
if((state_val_27401 === (4))){
var inst_27390 = (state_27400[(2)]);
var inst_27391 = async(inst_27390);
var state_27400__$1 = state_27400;
if(cljs.core.truth_(inst_27391)){
var statearr_27409_27614 = state_27400__$1;
(statearr_27409_27614[(1)] = (5));

} else {
var statearr_27410_27615 = state_27400__$1;
(statearr_27410_27615[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27401 === (5))){
var state_27400__$1 = state_27400;
var statearr_27414_27616 = state_27400__$1;
(statearr_27414_27616[(2)] = null);

(statearr_27414_27616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27401 === (6))){
var state_27400__$1 = state_27400;
var statearr_27416_27617 = state_27400__$1;
(statearr_27416_27617[(2)] = null);

(statearr_27416_27617[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27401 === (7))){
var inst_27396 = (state_27400[(2)]);
var state_27400__$1 = state_27400;
var statearr_27418_27618 = state_27400__$1;
(statearr_27418_27618[(2)] = inst_27396);

(statearr_27418_27618[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__27599,c__27055__auto___27612,G__27351_27600,G__27351_27601__$1,n__4376__auto___27598,jobs,results,process,async))
;
return ((function (__27599,switch__26823__auto__,c__27055__auto___27612,G__27351_27600,G__27351_27601__$1,n__4376__auto___27598,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26824__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26824__auto____0 = (function (){
var statearr_27420 = [null,null,null,null,null,null,null];
(statearr_27420[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26824__auto__);

(statearr_27420[(1)] = (1));

return statearr_27420;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26824__auto____1 = (function (state_27400){
while(true){
var ret_value__26825__auto__ = (function (){try{while(true){
var result__26826__auto__ = switch__26823__auto__(state_27400);
if(cljs.core.keyword_identical_QMARK_(result__26826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26826__auto__;
}
break;
}
}catch (e27424){if((e27424 instanceof Object)){
var ex__26827__auto__ = e27424;
var statearr_27425_27619 = state_27400;
(statearr_27425_27619[(5)] = ex__26827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27400);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27424;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27620 = state_27400;
state_27400 = G__27620;
continue;
} else {
return ret_value__26825__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26824__auto__ = function(state_27400){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26824__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26824__auto____1.call(this,state_27400);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26824__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26824__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26824__auto__;
})()
;})(__27599,switch__26823__auto__,c__27055__auto___27612,G__27351_27600,G__27351_27601__$1,n__4376__auto___27598,jobs,results,process,async))
})();
var state__27057__auto__ = (function (){var statearr_27432 = (f__27056__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27056__auto__.cljs$core$IFn$_invoke$arity$0() : f__27056__auto__.call(null));
(statearr_27432[(6)] = c__27055__auto___27612);

return statearr_27432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27057__auto__);
});})(__27599,c__27055__auto___27612,G__27351_27600,G__27351_27601__$1,n__4376__auto___27598,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27351_27601__$1)].join('')));

}

var G__27621 = (__27599 + (1));
__27599 = G__27621;
continue;
} else {
}
break;
}

var c__27055__auto___27622 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27055__auto___27622,jobs,results,process,async){
return (function (){
var f__27056__auto__ = (function (){var switch__26823__auto__ = ((function (c__27055__auto___27622,jobs,results,process,async){
return (function (state_27466){
var state_val_27467 = (state_27466[(1)]);
if((state_val_27467 === (1))){
var state_27466__$1 = state_27466;
var statearr_27468_27623 = state_27466__$1;
(statearr_27468_27623[(2)] = null);

(statearr_27468_27623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27467 === (2))){
var state_27466__$1 = state_27466;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27466__$1,(4),from);
} else {
if((state_val_27467 === (3))){
var inst_27464 = (state_27466[(2)]);
var state_27466__$1 = state_27466;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27466__$1,inst_27464);
} else {
if((state_val_27467 === (4))){
var inst_27444 = (state_27466[(7)]);
var inst_27444__$1 = (state_27466[(2)]);
var inst_27448 = (inst_27444__$1 == null);
var state_27466__$1 = (function (){var statearr_27478 = state_27466;
(statearr_27478[(7)] = inst_27444__$1);

return statearr_27478;
})();
if(cljs.core.truth_(inst_27448)){
var statearr_27482_27624 = state_27466__$1;
(statearr_27482_27624[(1)] = (5));

} else {
var statearr_27483_27625 = state_27466__$1;
(statearr_27483_27625[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27467 === (5))){
var inst_27450 = cljs.core.async.close_BANG_(jobs);
var state_27466__$1 = state_27466;
var statearr_27484_27626 = state_27466__$1;
(statearr_27484_27626[(2)] = inst_27450);

(statearr_27484_27626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27467 === (6))){
var inst_27452 = (state_27466[(8)]);
var inst_27444 = (state_27466[(7)]);
var inst_27452__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_27453 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27454 = [inst_27444,inst_27452__$1];
var inst_27455 = (new cljs.core.PersistentVector(null,2,(5),inst_27453,inst_27454,null));
var state_27466__$1 = (function (){var statearr_27491 = state_27466;
(statearr_27491[(8)] = inst_27452__$1);

return statearr_27491;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27466__$1,(8),jobs,inst_27455);
} else {
if((state_val_27467 === (7))){
var inst_27462 = (state_27466[(2)]);
var state_27466__$1 = state_27466;
var statearr_27496_27627 = state_27466__$1;
(statearr_27496_27627[(2)] = inst_27462);

(statearr_27496_27627[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27467 === (8))){
var inst_27452 = (state_27466[(8)]);
var inst_27457 = (state_27466[(2)]);
var state_27466__$1 = (function (){var statearr_27497 = state_27466;
(statearr_27497[(9)] = inst_27457);

return statearr_27497;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27466__$1,(9),results,inst_27452);
} else {
if((state_val_27467 === (9))){
var inst_27459 = (state_27466[(2)]);
var state_27466__$1 = (function (){var statearr_27500 = state_27466;
(statearr_27500[(10)] = inst_27459);

return statearr_27500;
})();
var statearr_27501_27628 = state_27466__$1;
(statearr_27501_27628[(2)] = null);

(statearr_27501_27628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__27055__auto___27622,jobs,results,process,async))
;
return ((function (switch__26823__auto__,c__27055__auto___27622,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26824__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26824__auto____0 = (function (){
var statearr_27502 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27502[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26824__auto__);

(statearr_27502[(1)] = (1));

return statearr_27502;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26824__auto____1 = (function (state_27466){
while(true){
var ret_value__26825__auto__ = (function (){try{while(true){
var result__26826__auto__ = switch__26823__auto__(state_27466);
if(cljs.core.keyword_identical_QMARK_(result__26826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26826__auto__;
}
break;
}
}catch (e27506){if((e27506 instanceof Object)){
var ex__26827__auto__ = e27506;
var statearr_27507_27629 = state_27466;
(statearr_27507_27629[(5)] = ex__26827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27466);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27506;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27630 = state_27466;
state_27466 = G__27630;
continue;
} else {
return ret_value__26825__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26824__auto__ = function(state_27466){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26824__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26824__auto____1.call(this,state_27466);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26824__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26824__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26824__auto__;
})()
;})(switch__26823__auto__,c__27055__auto___27622,jobs,results,process,async))
})();
var state__27057__auto__ = (function (){var statearr_27514 = (f__27056__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27056__auto__.cljs$core$IFn$_invoke$arity$0() : f__27056__auto__.call(null));
(statearr_27514[(6)] = c__27055__auto___27622);

return statearr_27514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27057__auto__);
});})(c__27055__auto___27622,jobs,results,process,async))
);


var c__27055__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27055__auto__,jobs,results,process,async){
return (function (){
var f__27056__auto__ = (function (){var switch__26823__auto__ = ((function (c__27055__auto__,jobs,results,process,async){
return (function (state_27561){
var state_val_27562 = (state_27561[(1)]);
if((state_val_27562 === (7))){
var inst_27557 = (state_27561[(2)]);
var state_27561__$1 = state_27561;
var statearr_27567_27631 = state_27561__$1;
(statearr_27567_27631[(2)] = inst_27557);

(statearr_27567_27631[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27562 === (20))){
var state_27561__$1 = state_27561;
var statearr_27568_27632 = state_27561__$1;
(statearr_27568_27632[(2)] = null);

(statearr_27568_27632[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27562 === (1))){
var state_27561__$1 = state_27561;
var statearr_27569_27633 = state_27561__$1;
(statearr_27569_27633[(2)] = null);

(statearr_27569_27633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27562 === (4))){
var inst_27520 = (state_27561[(7)]);
var inst_27520__$1 = (state_27561[(2)]);
var inst_27521 = (inst_27520__$1 == null);
var state_27561__$1 = (function (){var statearr_27570 = state_27561;
(statearr_27570[(7)] = inst_27520__$1);

return statearr_27570;
})();
if(cljs.core.truth_(inst_27521)){
var statearr_27571_27634 = state_27561__$1;
(statearr_27571_27634[(1)] = (5));

} else {
var statearr_27572_27635 = state_27561__$1;
(statearr_27572_27635[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27562 === (15))){
var inst_27536 = (state_27561[(8)]);
var state_27561__$1 = state_27561;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27561__$1,(18),to,inst_27536);
} else {
if((state_val_27562 === (21))){
var inst_27552 = (state_27561[(2)]);
var state_27561__$1 = state_27561;
var statearr_27573_27636 = state_27561__$1;
(statearr_27573_27636[(2)] = inst_27552);

(statearr_27573_27636[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27562 === (13))){
var inst_27554 = (state_27561[(2)]);
var state_27561__$1 = (function (){var statearr_27574 = state_27561;
(statearr_27574[(9)] = inst_27554);

return statearr_27574;
})();
var statearr_27575_27637 = state_27561__$1;
(statearr_27575_27637[(2)] = null);

(statearr_27575_27637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27562 === (6))){
var inst_27520 = (state_27561[(7)]);
var state_27561__$1 = state_27561;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27561__$1,(11),inst_27520);
} else {
if((state_val_27562 === (17))){
var inst_27547 = (state_27561[(2)]);
var state_27561__$1 = state_27561;
if(cljs.core.truth_(inst_27547)){
var statearr_27576_27638 = state_27561__$1;
(statearr_27576_27638[(1)] = (19));

} else {
var statearr_27577_27639 = state_27561__$1;
(statearr_27577_27639[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27562 === (3))){
var inst_27559 = (state_27561[(2)]);
var state_27561__$1 = state_27561;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27561__$1,inst_27559);
} else {
if((state_val_27562 === (12))){
var inst_27533 = (state_27561[(10)]);
var state_27561__$1 = state_27561;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27561__$1,(14),inst_27533);
} else {
if((state_val_27562 === (2))){
var state_27561__$1 = state_27561;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27561__$1,(4),results);
} else {
if((state_val_27562 === (19))){
var state_27561__$1 = state_27561;
var statearr_27578_27640 = state_27561__$1;
(statearr_27578_27640[(2)] = null);

(statearr_27578_27640[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27562 === (11))){
var inst_27533 = (state_27561[(2)]);
var state_27561__$1 = (function (){var statearr_27579 = state_27561;
(statearr_27579[(10)] = inst_27533);

return statearr_27579;
})();
var statearr_27580_27641 = state_27561__$1;
(statearr_27580_27641[(2)] = null);

(statearr_27580_27641[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27562 === (9))){
var state_27561__$1 = state_27561;
var statearr_27581_27642 = state_27561__$1;
(statearr_27581_27642[(2)] = null);

(statearr_27581_27642[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27562 === (5))){
var state_27561__$1 = state_27561;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27582_27643 = state_27561__$1;
(statearr_27582_27643[(1)] = (8));

} else {
var statearr_27583_27644 = state_27561__$1;
(statearr_27583_27644[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27562 === (14))){
var inst_27538 = (state_27561[(11)]);
var inst_27536 = (state_27561[(8)]);
var inst_27536__$1 = (state_27561[(2)]);
var inst_27537 = (inst_27536__$1 == null);
var inst_27538__$1 = cljs.core.not(inst_27537);
var state_27561__$1 = (function (){var statearr_27584 = state_27561;
(statearr_27584[(11)] = inst_27538__$1);

(statearr_27584[(8)] = inst_27536__$1);

return statearr_27584;
})();
if(inst_27538__$1){
var statearr_27585_27645 = state_27561__$1;
(statearr_27585_27645[(1)] = (15));

} else {
var statearr_27586_27646 = state_27561__$1;
(statearr_27586_27646[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27562 === (16))){
var inst_27538 = (state_27561[(11)]);
var state_27561__$1 = state_27561;
var statearr_27587_27647 = state_27561__$1;
(statearr_27587_27647[(2)] = inst_27538);

(statearr_27587_27647[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27562 === (10))){
var inst_27527 = (state_27561[(2)]);
var state_27561__$1 = state_27561;
var statearr_27588_27648 = state_27561__$1;
(statearr_27588_27648[(2)] = inst_27527);

(statearr_27588_27648[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27562 === (18))){
var inst_27544 = (state_27561[(2)]);
var state_27561__$1 = state_27561;
var statearr_27589_27649 = state_27561__$1;
(statearr_27589_27649[(2)] = inst_27544);

(statearr_27589_27649[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27562 === (8))){
var inst_27524 = cljs.core.async.close_BANG_(to);
var state_27561__$1 = state_27561;
var statearr_27590_27650 = state_27561__$1;
(statearr_27590_27650[(2)] = inst_27524);

(statearr_27590_27650[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27055__auto__,jobs,results,process,async))
;
return ((function (switch__26823__auto__,c__27055__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26824__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26824__auto____0 = (function (){
var statearr_27591 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27591[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26824__auto__);

(statearr_27591[(1)] = (1));

return statearr_27591;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26824__auto____1 = (function (state_27561){
while(true){
var ret_value__26825__auto__ = (function (){try{while(true){
var result__26826__auto__ = switch__26823__auto__(state_27561);
if(cljs.core.keyword_identical_QMARK_(result__26826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26826__auto__;
}
break;
}
}catch (e27592){if((e27592 instanceof Object)){
var ex__26827__auto__ = e27592;
var statearr_27593_27651 = state_27561;
(statearr_27593_27651[(5)] = ex__26827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27561);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27592;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27652 = state_27561;
state_27561 = G__27652;
continue;
} else {
return ret_value__26825__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26824__auto__ = function(state_27561){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26824__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26824__auto____1.call(this,state_27561);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26824__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26824__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26824__auto__;
})()
;})(switch__26823__auto__,c__27055__auto__,jobs,results,process,async))
})();
var state__27057__auto__ = (function (){var statearr_27594 = (f__27056__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27056__auto__.cljs$core$IFn$_invoke$arity$0() : f__27056__auto__.call(null));
(statearr_27594[(6)] = c__27055__auto__);

return statearr_27594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27057__auto__);
});})(c__27055__auto__,jobs,results,process,async))
);

return c__27055__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__27654 = arguments.length;
switch (G__27654) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__27657 = arguments.length;
switch (G__27657) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__27661 = arguments.length;
switch (G__27661) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__27055__auto___27713 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27055__auto___27713,tc,fc){
return (function (){
var f__27056__auto__ = (function (){var switch__26823__auto__ = ((function (c__27055__auto___27713,tc,fc){
return (function (state_27687){
var state_val_27688 = (state_27687[(1)]);
if((state_val_27688 === (7))){
var inst_27683 = (state_27687[(2)]);
var state_27687__$1 = state_27687;
var statearr_27689_27714 = state_27687__$1;
(statearr_27689_27714[(2)] = inst_27683);

(statearr_27689_27714[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27688 === (1))){
var state_27687__$1 = state_27687;
var statearr_27690_27715 = state_27687__$1;
(statearr_27690_27715[(2)] = null);

(statearr_27690_27715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27688 === (4))){
var inst_27664 = (state_27687[(7)]);
var inst_27664__$1 = (state_27687[(2)]);
var inst_27665 = (inst_27664__$1 == null);
var state_27687__$1 = (function (){var statearr_27691 = state_27687;
(statearr_27691[(7)] = inst_27664__$1);

return statearr_27691;
})();
if(cljs.core.truth_(inst_27665)){
var statearr_27692_27716 = state_27687__$1;
(statearr_27692_27716[(1)] = (5));

} else {
var statearr_27693_27717 = state_27687__$1;
(statearr_27693_27717[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27688 === (13))){
var state_27687__$1 = state_27687;
var statearr_27694_27718 = state_27687__$1;
(statearr_27694_27718[(2)] = null);

(statearr_27694_27718[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27688 === (6))){
var inst_27664 = (state_27687[(7)]);
var inst_27670 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_27664) : p.call(null,inst_27664));
var state_27687__$1 = state_27687;
if(cljs.core.truth_(inst_27670)){
var statearr_27695_27721 = state_27687__$1;
(statearr_27695_27721[(1)] = (9));

} else {
var statearr_27696_27722 = state_27687__$1;
(statearr_27696_27722[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27688 === (3))){
var inst_27685 = (state_27687[(2)]);
var state_27687__$1 = state_27687;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27687__$1,inst_27685);
} else {
if((state_val_27688 === (12))){
var state_27687__$1 = state_27687;
var statearr_27697_27723 = state_27687__$1;
(statearr_27697_27723[(2)] = null);

(statearr_27697_27723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27688 === (2))){
var state_27687__$1 = state_27687;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27687__$1,(4),ch);
} else {
if((state_val_27688 === (11))){
var inst_27664 = (state_27687[(7)]);
var inst_27674 = (state_27687[(2)]);
var state_27687__$1 = state_27687;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27687__$1,(8),inst_27674,inst_27664);
} else {
if((state_val_27688 === (9))){
var state_27687__$1 = state_27687;
var statearr_27698_27726 = state_27687__$1;
(statearr_27698_27726[(2)] = tc);

(statearr_27698_27726[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27688 === (5))){
var inst_27667 = cljs.core.async.close_BANG_(tc);
var inst_27668 = cljs.core.async.close_BANG_(fc);
var state_27687__$1 = (function (){var statearr_27702 = state_27687;
(statearr_27702[(8)] = inst_27667);

return statearr_27702;
})();
var statearr_27703_27728 = state_27687__$1;
(statearr_27703_27728[(2)] = inst_27668);

(statearr_27703_27728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27688 === (14))){
var inst_27681 = (state_27687[(2)]);
var state_27687__$1 = state_27687;
var statearr_27704_27729 = state_27687__$1;
(statearr_27704_27729[(2)] = inst_27681);

(statearr_27704_27729[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27688 === (10))){
var state_27687__$1 = state_27687;
var statearr_27705_27730 = state_27687__$1;
(statearr_27705_27730[(2)] = fc);

(statearr_27705_27730[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27688 === (8))){
var inst_27676 = (state_27687[(2)]);
var state_27687__$1 = state_27687;
if(cljs.core.truth_(inst_27676)){
var statearr_27706_27731 = state_27687__$1;
(statearr_27706_27731[(1)] = (12));

} else {
var statearr_27707_27732 = state_27687__$1;
(statearr_27707_27732[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27055__auto___27713,tc,fc))
;
return ((function (switch__26823__auto__,c__27055__auto___27713,tc,fc){
return (function() {
var cljs$core$async$state_machine__26824__auto__ = null;
var cljs$core$async$state_machine__26824__auto____0 = (function (){
var statearr_27708 = [null,null,null,null,null,null,null,null,null];
(statearr_27708[(0)] = cljs$core$async$state_machine__26824__auto__);

(statearr_27708[(1)] = (1));

return statearr_27708;
});
var cljs$core$async$state_machine__26824__auto____1 = (function (state_27687){
while(true){
var ret_value__26825__auto__ = (function (){try{while(true){
var result__26826__auto__ = switch__26823__auto__(state_27687);
if(cljs.core.keyword_identical_QMARK_(result__26826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26826__auto__;
}
break;
}
}catch (e27709){if((e27709 instanceof Object)){
var ex__26827__auto__ = e27709;
var statearr_27710_27733 = state_27687;
(statearr_27710_27733[(5)] = ex__26827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27687);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27709;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27735 = state_27687;
state_27687 = G__27735;
continue;
} else {
return ret_value__26825__auto__;
}
break;
}
});
cljs$core$async$state_machine__26824__auto__ = function(state_27687){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26824__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26824__auto____1.call(this,state_27687);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26824__auto____0;
cljs$core$async$state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26824__auto____1;
return cljs$core$async$state_machine__26824__auto__;
})()
;})(switch__26823__auto__,c__27055__auto___27713,tc,fc))
})();
var state__27057__auto__ = (function (){var statearr_27711 = (f__27056__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27056__auto__.cljs$core$IFn$_invoke$arity$0() : f__27056__auto__.call(null));
(statearr_27711[(6)] = c__27055__auto___27713);

return statearr_27711;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27057__auto__);
});})(c__27055__auto___27713,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__27055__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27055__auto__){
return (function (){
var f__27056__auto__ = (function (){var switch__26823__auto__ = ((function (c__27055__auto__){
return (function (state_27758){
var state_val_27759 = (state_27758[(1)]);
if((state_val_27759 === (7))){
var inst_27754 = (state_27758[(2)]);
var state_27758__$1 = state_27758;
var statearr_27760_27778 = state_27758__$1;
(statearr_27760_27778[(2)] = inst_27754);

(statearr_27760_27778[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27759 === (1))){
var inst_27738 = init;
var state_27758__$1 = (function (){var statearr_27761 = state_27758;
(statearr_27761[(7)] = inst_27738);

return statearr_27761;
})();
var statearr_27762_27779 = state_27758__$1;
(statearr_27762_27779[(2)] = null);

(statearr_27762_27779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27759 === (4))){
var inst_27741 = (state_27758[(8)]);
var inst_27741__$1 = (state_27758[(2)]);
var inst_27742 = (inst_27741__$1 == null);
var state_27758__$1 = (function (){var statearr_27763 = state_27758;
(statearr_27763[(8)] = inst_27741__$1);

return statearr_27763;
})();
if(cljs.core.truth_(inst_27742)){
var statearr_27764_27780 = state_27758__$1;
(statearr_27764_27780[(1)] = (5));

} else {
var statearr_27765_27781 = state_27758__$1;
(statearr_27765_27781[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27759 === (6))){
var inst_27741 = (state_27758[(8)]);
var inst_27738 = (state_27758[(7)]);
var inst_27745 = (state_27758[(9)]);
var inst_27745__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_27738,inst_27741) : f.call(null,inst_27738,inst_27741));
var inst_27746 = cljs.core.reduced_QMARK_(inst_27745__$1);
var state_27758__$1 = (function (){var statearr_27766 = state_27758;
(statearr_27766[(9)] = inst_27745__$1);

return statearr_27766;
})();
if(inst_27746){
var statearr_27767_27782 = state_27758__$1;
(statearr_27767_27782[(1)] = (8));

} else {
var statearr_27768_27783 = state_27758__$1;
(statearr_27768_27783[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27759 === (3))){
var inst_27756 = (state_27758[(2)]);
var state_27758__$1 = state_27758;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27758__$1,inst_27756);
} else {
if((state_val_27759 === (2))){
var state_27758__$1 = state_27758;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27758__$1,(4),ch);
} else {
if((state_val_27759 === (9))){
var inst_27745 = (state_27758[(9)]);
var inst_27738 = inst_27745;
var state_27758__$1 = (function (){var statearr_27769 = state_27758;
(statearr_27769[(7)] = inst_27738);

return statearr_27769;
})();
var statearr_27770_27784 = state_27758__$1;
(statearr_27770_27784[(2)] = null);

(statearr_27770_27784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27759 === (5))){
var inst_27738 = (state_27758[(7)]);
var state_27758__$1 = state_27758;
var statearr_27771_27785 = state_27758__$1;
(statearr_27771_27785[(2)] = inst_27738);

(statearr_27771_27785[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27759 === (10))){
var inst_27752 = (state_27758[(2)]);
var state_27758__$1 = state_27758;
var statearr_27772_27786 = state_27758__$1;
(statearr_27772_27786[(2)] = inst_27752);

(statearr_27772_27786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27759 === (8))){
var inst_27745 = (state_27758[(9)]);
var inst_27748 = cljs.core.deref(inst_27745);
var state_27758__$1 = state_27758;
var statearr_27773_27787 = state_27758__$1;
(statearr_27773_27787[(2)] = inst_27748);

(statearr_27773_27787[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__27055__auto__))
;
return ((function (switch__26823__auto__,c__27055__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__26824__auto__ = null;
var cljs$core$async$reduce_$_state_machine__26824__auto____0 = (function (){
var statearr_27774 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27774[(0)] = cljs$core$async$reduce_$_state_machine__26824__auto__);

(statearr_27774[(1)] = (1));

return statearr_27774;
});
var cljs$core$async$reduce_$_state_machine__26824__auto____1 = (function (state_27758){
while(true){
var ret_value__26825__auto__ = (function (){try{while(true){
var result__26826__auto__ = switch__26823__auto__(state_27758);
if(cljs.core.keyword_identical_QMARK_(result__26826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26826__auto__;
}
break;
}
}catch (e27775){if((e27775 instanceof Object)){
var ex__26827__auto__ = e27775;
var statearr_27776_27788 = state_27758;
(statearr_27776_27788[(5)] = ex__26827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27758);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27775;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27789 = state_27758;
state_27758 = G__27789;
continue;
} else {
return ret_value__26825__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26824__auto__ = function(state_27758){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26824__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26824__auto____1.call(this,state_27758);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26824__auto____0;
cljs$core$async$reduce_$_state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26824__auto____1;
return cljs$core$async$reduce_$_state_machine__26824__auto__;
})()
;})(switch__26823__auto__,c__27055__auto__))
})();
var state__27057__auto__ = (function (){var statearr_27777 = (f__27056__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27056__auto__.cljs$core$IFn$_invoke$arity$0() : f__27056__auto__.call(null));
(statearr_27777[(6)] = c__27055__auto__);

return statearr_27777;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27057__auto__);
});})(c__27055__auto__))
);

return c__27055__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__27055__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27055__auto__,f__$1){
return (function (){
var f__27056__auto__ = (function (){var switch__26823__auto__ = ((function (c__27055__auto__,f__$1){
return (function (state_27795){
var state_val_27796 = (state_27795[(1)]);
if((state_val_27796 === (1))){
var inst_27790 = cljs.core.async.reduce(f__$1,init,ch);
var state_27795__$1 = state_27795;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27795__$1,(2),inst_27790);
} else {
if((state_val_27796 === (2))){
var inst_27792 = (state_27795[(2)]);
var inst_27793 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_27792) : f__$1.call(null,inst_27792));
var state_27795__$1 = state_27795;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27795__$1,inst_27793);
} else {
return null;
}
}
});})(c__27055__auto__,f__$1))
;
return ((function (switch__26823__auto__,c__27055__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__26824__auto__ = null;
var cljs$core$async$transduce_$_state_machine__26824__auto____0 = (function (){
var statearr_27797 = [null,null,null,null,null,null,null];
(statearr_27797[(0)] = cljs$core$async$transduce_$_state_machine__26824__auto__);

(statearr_27797[(1)] = (1));

return statearr_27797;
});
var cljs$core$async$transduce_$_state_machine__26824__auto____1 = (function (state_27795){
while(true){
var ret_value__26825__auto__ = (function (){try{while(true){
var result__26826__auto__ = switch__26823__auto__(state_27795);
if(cljs.core.keyword_identical_QMARK_(result__26826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26826__auto__;
}
break;
}
}catch (e27798){if((e27798 instanceof Object)){
var ex__26827__auto__ = e27798;
var statearr_27799_27801 = state_27795;
(statearr_27799_27801[(5)] = ex__26827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27795);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27798;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27802 = state_27795;
state_27795 = G__27802;
continue;
} else {
return ret_value__26825__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__26824__auto__ = function(state_27795){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__26824__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__26824__auto____1.call(this,state_27795);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__26824__auto____0;
cljs$core$async$transduce_$_state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__26824__auto____1;
return cljs$core$async$transduce_$_state_machine__26824__auto__;
})()
;})(switch__26823__auto__,c__27055__auto__,f__$1))
})();
var state__27057__auto__ = (function (){var statearr_27800 = (f__27056__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27056__auto__.cljs$core$IFn$_invoke$arity$0() : f__27056__auto__.call(null));
(statearr_27800[(6)] = c__27055__auto__);

return statearr_27800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27057__auto__);
});})(c__27055__auto__,f__$1))
);

return c__27055__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__27804 = arguments.length;
switch (G__27804) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__27055__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27055__auto__){
return (function (){
var f__27056__auto__ = (function (){var switch__26823__auto__ = ((function (c__27055__auto__){
return (function (state_27829){
var state_val_27830 = (state_27829[(1)]);
if((state_val_27830 === (7))){
var inst_27811 = (state_27829[(2)]);
var state_27829__$1 = state_27829;
var statearr_27831_27852 = state_27829__$1;
(statearr_27831_27852[(2)] = inst_27811);

(statearr_27831_27852[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27830 === (1))){
var inst_27805 = cljs.core.seq(coll);
var inst_27806 = inst_27805;
var state_27829__$1 = (function (){var statearr_27832 = state_27829;
(statearr_27832[(7)] = inst_27806);

return statearr_27832;
})();
var statearr_27833_27853 = state_27829__$1;
(statearr_27833_27853[(2)] = null);

(statearr_27833_27853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27830 === (4))){
var inst_27806 = (state_27829[(7)]);
var inst_27809 = cljs.core.first(inst_27806);
var state_27829__$1 = state_27829;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27829__$1,(7),ch,inst_27809);
} else {
if((state_val_27830 === (13))){
var inst_27823 = (state_27829[(2)]);
var state_27829__$1 = state_27829;
var statearr_27834_27854 = state_27829__$1;
(statearr_27834_27854[(2)] = inst_27823);

(statearr_27834_27854[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27830 === (6))){
var inst_27814 = (state_27829[(2)]);
var state_27829__$1 = state_27829;
if(cljs.core.truth_(inst_27814)){
var statearr_27835_27855 = state_27829__$1;
(statearr_27835_27855[(1)] = (8));

} else {
var statearr_27836_27856 = state_27829__$1;
(statearr_27836_27856[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27830 === (3))){
var inst_27827 = (state_27829[(2)]);
var state_27829__$1 = state_27829;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27829__$1,inst_27827);
} else {
if((state_val_27830 === (12))){
var state_27829__$1 = state_27829;
var statearr_27837_27857 = state_27829__$1;
(statearr_27837_27857[(2)] = null);

(statearr_27837_27857[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27830 === (2))){
var inst_27806 = (state_27829[(7)]);
var state_27829__$1 = state_27829;
if(cljs.core.truth_(inst_27806)){
var statearr_27838_27858 = state_27829__$1;
(statearr_27838_27858[(1)] = (4));

} else {
var statearr_27839_27859 = state_27829__$1;
(statearr_27839_27859[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27830 === (11))){
var inst_27820 = cljs.core.async.close_BANG_(ch);
var state_27829__$1 = state_27829;
var statearr_27840_27860 = state_27829__$1;
(statearr_27840_27860[(2)] = inst_27820);

(statearr_27840_27860[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27830 === (9))){
var state_27829__$1 = state_27829;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27841_27861 = state_27829__$1;
(statearr_27841_27861[(1)] = (11));

} else {
var statearr_27842_27862 = state_27829__$1;
(statearr_27842_27862[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27830 === (5))){
var inst_27806 = (state_27829[(7)]);
var state_27829__$1 = state_27829;
var statearr_27843_27863 = state_27829__$1;
(statearr_27843_27863[(2)] = inst_27806);

(statearr_27843_27863[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27830 === (10))){
var inst_27825 = (state_27829[(2)]);
var state_27829__$1 = state_27829;
var statearr_27844_27864 = state_27829__$1;
(statearr_27844_27864[(2)] = inst_27825);

(statearr_27844_27864[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27830 === (8))){
var inst_27806 = (state_27829[(7)]);
var inst_27816 = cljs.core.next(inst_27806);
var inst_27806__$1 = inst_27816;
var state_27829__$1 = (function (){var statearr_27845 = state_27829;
(statearr_27845[(7)] = inst_27806__$1);

return statearr_27845;
})();
var statearr_27846_27865 = state_27829__$1;
(statearr_27846_27865[(2)] = null);

(statearr_27846_27865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27055__auto__))
;
return ((function (switch__26823__auto__,c__27055__auto__){
return (function() {
var cljs$core$async$state_machine__26824__auto__ = null;
var cljs$core$async$state_machine__26824__auto____0 = (function (){
var statearr_27847 = [null,null,null,null,null,null,null,null];
(statearr_27847[(0)] = cljs$core$async$state_machine__26824__auto__);

(statearr_27847[(1)] = (1));

return statearr_27847;
});
var cljs$core$async$state_machine__26824__auto____1 = (function (state_27829){
while(true){
var ret_value__26825__auto__ = (function (){try{while(true){
var result__26826__auto__ = switch__26823__auto__(state_27829);
if(cljs.core.keyword_identical_QMARK_(result__26826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26826__auto__;
}
break;
}
}catch (e27848){if((e27848 instanceof Object)){
var ex__26827__auto__ = e27848;
var statearr_27849_27866 = state_27829;
(statearr_27849_27866[(5)] = ex__26827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_27829);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27848;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27867 = state_27829;
state_27829 = G__27867;
continue;
} else {
return ret_value__26825__auto__;
}
break;
}
});
cljs$core$async$state_machine__26824__auto__ = function(state_27829){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26824__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26824__auto____1.call(this,state_27829);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26824__auto____0;
cljs$core$async$state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26824__auto____1;
return cljs$core$async$state_machine__26824__auto__;
})()
;})(switch__26823__auto__,c__27055__auto__))
})();
var state__27057__auto__ = (function (){var statearr_27850 = (f__27056__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27056__auto__.cljs$core$IFn$_invoke$arity$0() : f__27056__auto__.call(null));
(statearr_27850[(6)] = c__27055__auto__);

return statearr_27850;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27057__auto__);
});})(c__27055__auto__))
);

return c__27055__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4212__auto__.call(null,_));
} else {
var m__4212__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__4212__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4212__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4212__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4212__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4212__auto__.call(null,m,ch));
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4212__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4212__auto__.call(null,m));
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4212__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async27868 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27868 = (function (ch,cs,meta27869){
this.ch = ch;
this.cs = cs;
this.meta27869 = meta27869;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27868.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27870,meta27869__$1){
var self__ = this;
var _27870__$1 = this;
return (new cljs.core.async.t_cljs$core$async27868(self__.ch,self__.cs,meta27869__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async27868.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27870){
var self__ = this;
var _27870__$1 = this;
return self__.meta27869;
});})(cs))
;

cljs.core.async.t_cljs$core$async27868.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27868.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async27868.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27868.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27868.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27868.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27868.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta27869","meta27869",1096955499,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async27868.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27868.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27868";

cljs.core.async.t_cljs$core$async27868.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async27868");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27868.
 */
cljs.core.async.__GT_t_cljs$core$async27868 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async27868(ch__$1,cs__$1,meta27869){
return (new cljs.core.async.t_cljs$core$async27868(ch__$1,cs__$1,meta27869));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async27868(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__27055__auto___28122 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27055__auto___28122,cs,m,dchan,dctr,done){
return (function (){
var f__27056__auto__ = (function (){var switch__26823__auto__ = ((function (c__27055__auto___28122,cs,m,dchan,dctr,done){
return (function (state_28020){
var state_val_28021 = (state_28020[(1)]);
if((state_val_28021 === (7))){
var inst_28014 = (state_28020[(2)]);
var state_28020__$1 = state_28020;
var statearr_28022_28123 = state_28020__$1;
(statearr_28022_28123[(2)] = inst_28014);

(statearr_28022_28123[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28021 === (20))){
var inst_27911 = (state_28020[(7)]);
var inst_27926 = cljs.core.first(inst_27911);
var inst_27927 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27926,(0),null);
var inst_27928 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27926,(1),null);
var state_28020__$1 = (function (){var statearr_28024 = state_28020;
(statearr_28024[(8)] = inst_27927);

return statearr_28024;
})();
if(cljs.core.truth_(inst_27928)){
var statearr_28025_28127 = state_28020__$1;
(statearr_28025_28127[(1)] = (22));

} else {
var statearr_28027_28128 = state_28020__$1;
(statearr_28027_28128[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28021 === (27))){
var inst_27879 = (state_28020[(9)]);
var inst_27956 = (state_28020[(10)]);
var inst_27958 = (state_28020[(11)]);
var inst_27963 = (state_28020[(12)]);
var inst_27963__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_27956,inst_27958);
var inst_27965 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_27963__$1,inst_27879,done);
var state_28020__$1 = (function (){var statearr_28028 = state_28020;
(statearr_28028[(12)] = inst_27963__$1);

return statearr_28028;
})();
if(cljs.core.truth_(inst_27965)){
var statearr_28029_28129 = state_28020__$1;
(statearr_28029_28129[(1)] = (30));

} else {
var statearr_28030_28130 = state_28020__$1;
(statearr_28030_28130[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28021 === (1))){
var state_28020__$1 = state_28020;
var statearr_28031_28131 = state_28020__$1;
(statearr_28031_28131[(2)] = null);

(statearr_28031_28131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28021 === (24))){
var inst_27911 = (state_28020[(7)]);
var inst_27933 = (state_28020[(2)]);
var inst_27934 = cljs.core.next(inst_27911);
var inst_27888 = inst_27934;
var inst_27889 = null;
var inst_27890 = (0);
var inst_27891 = (0);
var state_28020__$1 = (function (){var statearr_28032 = state_28020;
(statearr_28032[(13)] = inst_27889);

(statearr_28032[(14)] = inst_27890);

(statearr_28032[(15)] = inst_27933);

(statearr_28032[(16)] = inst_27888);

(statearr_28032[(17)] = inst_27891);

return statearr_28032;
})();
var statearr_28033_28133 = state_28020__$1;
(statearr_28033_28133[(2)] = null);

(statearr_28033_28133[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28021 === (39))){
var state_28020__$1 = state_28020;
var statearr_28037_28134 = state_28020__$1;
(statearr_28037_28134[(2)] = null);

(statearr_28037_28134[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28021 === (4))){
var inst_27879 = (state_28020[(9)]);
var inst_27879__$1 = (state_28020[(2)]);
var inst_27880 = (inst_27879__$1 == null);
var state_28020__$1 = (function (){var statearr_28039 = state_28020;
(statearr_28039[(9)] = inst_27879__$1);

return statearr_28039;
})();
if(cljs.core.truth_(inst_27880)){
var statearr_28040_28136 = state_28020__$1;
(statearr_28040_28136[(1)] = (5));

} else {
var statearr_28041_28137 = state_28020__$1;
(statearr_28041_28137[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28021 === (15))){
var inst_27889 = (state_28020[(13)]);
var inst_27890 = (state_28020[(14)]);
var inst_27888 = (state_28020[(16)]);
var inst_27891 = (state_28020[(17)]);
var inst_27906 = (state_28020[(2)]);
var inst_27907 = (inst_27891 + (1));
var tmp28034 = inst_27889;
var tmp28035 = inst_27890;
var tmp28036 = inst_27888;
var inst_27888__$1 = tmp28036;
var inst_27889__$1 = tmp28034;
var inst_27890__$1 = tmp28035;
var inst_27891__$1 = inst_27907;
var state_28020__$1 = (function (){var statearr_28042 = state_28020;
(statearr_28042[(13)] = inst_27889__$1);

(statearr_28042[(14)] = inst_27890__$1);

(statearr_28042[(18)] = inst_27906);

(statearr_28042[(16)] = inst_27888__$1);

(statearr_28042[(17)] = inst_27891__$1);

return statearr_28042;
})();
var statearr_28043_28138 = state_28020__$1;
(statearr_28043_28138[(2)] = null);

(statearr_28043_28138[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28021 === (21))){
var inst_27937 = (state_28020[(2)]);
var state_28020__$1 = state_28020;
var statearr_28047_28145 = state_28020__$1;
(statearr_28047_28145[(2)] = inst_27937);

(statearr_28047_28145[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28021 === (31))){
var inst_27963 = (state_28020[(12)]);
var inst_27968 = done(null);
var inst_27969 = cljs.core.async.untap_STAR_(m,inst_27963);
var state_28020__$1 = (function (){var statearr_28053 = state_28020;
(statearr_28053[(19)] = inst_27968);

return statearr_28053;
})();
var statearr_28054_28146 = state_28020__$1;
(statearr_28054_28146[(2)] = inst_27969);

(statearr_28054_28146[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28021 === (32))){
var inst_27956 = (state_28020[(10)]);
var inst_27955 = (state_28020[(20)]);
var inst_27957 = (state_28020[(21)]);
var inst_27958 = (state_28020[(11)]);
var inst_27971 = (state_28020[(2)]);
var inst_27972 = (inst_27958 + (1));
var tmp28044 = inst_27956;
var tmp28045 = inst_27955;
var tmp28046 = inst_27957;
var inst_27955__$1 = tmp28045;
var inst_27956__$1 = tmp28044;
var inst_27957__$1 = tmp28046;
var inst_27958__$1 = inst_27972;
var state_28020__$1 = (function (){var statearr_28055 = state_28020;
(statearr_28055[(10)] = inst_27956__$1);

(statearr_28055[(20)] = inst_27955__$1);

(statearr_28055[(21)] = inst_27957__$1);

(statearr_28055[(11)] = inst_27958__$1);

(statearr_28055[(22)] = inst_27971);

return statearr_28055;
})();
var statearr_28056_28147 = state_28020__$1;
(statearr_28056_28147[(2)] = null);

(statearr_28056_28147[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28021 === (40))){
var inst_27984 = (state_28020[(23)]);
var inst_27988 = done(null);
var inst_27990 = cljs.core.async.untap_STAR_(m,inst_27984);
var state_28020__$1 = (function (){var statearr_28057 = state_28020;
(statearr_28057[(24)] = inst_27988);

return statearr_28057;
})();
var statearr_28058_28148 = state_28020__$1;
(statearr_28058_28148[(2)] = inst_27990);

(statearr_28058_28148[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28021 === (33))){
var inst_27975 = (state_28020[(25)]);
var inst_27977 = cljs.core.chunked_seq_QMARK_(inst_27975);
var state_28020__$1 = state_28020;
if(inst_27977){
var statearr_28059_28149 = state_28020__$1;
(statearr_28059_28149[(1)] = (36));

} else {
var statearr_28060_28150 = state_28020__$1;
(statearr_28060_28150[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28021 === (13))){
var inst_27900 = (state_28020[(26)]);
var inst_27903 = cljs.core.async.close_BANG_(inst_27900);
var state_28020__$1 = state_28020;
var statearr_28061_28151 = state_28020__$1;
(statearr_28061_28151[(2)] = inst_27903);

(statearr_28061_28151[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28021 === (22))){
var inst_27927 = (state_28020[(8)]);
var inst_27930 = cljs.core.async.close_BANG_(inst_27927);
var state_28020__$1 = state_28020;
var statearr_28062_28152 = state_28020__$1;
(statearr_28062_28152[(2)] = inst_27930);

(statearr_28062_28152[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28021 === (36))){
var inst_27975 = (state_28020[(25)]);
var inst_27979 = cljs.core.chunk_first(inst_27975);
var inst_27980 = cljs.core.chunk_rest(inst_27975);
var inst_27981 = cljs.core.count(inst_27979);
var inst_27955 = inst_27980;
var inst_27956 = inst_27979;
var inst_27957 = inst_27981;
var inst_27958 = (0);
var state_28020__$1 = (function (){var statearr_28063 = state_28020;
(statearr_28063[(10)] = inst_27956);

(statearr_28063[(20)] = inst_27955);

(statearr_28063[(21)] = inst_27957);

(statearr_28063[(11)] = inst_27958);

return statearr_28063;
})();
var statearr_28064_28159 = state_28020__$1;
(statearr_28064_28159[(2)] = null);

(statearr_28064_28159[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28021 === (41))){
var inst_27975 = (state_28020[(25)]);
var inst_27992 = (state_28020[(2)]);
var inst_27994 = cljs.core.next(inst_27975);
var inst_27955 = inst_27994;
var inst_27956 = null;
var inst_27957 = (0);
var inst_27958 = (0);
var state_28020__$1 = (function (){var statearr_28065 = state_28020;
(statearr_28065[(10)] = inst_27956);

(statearr_28065[(20)] = inst_27955);

(statearr_28065[(21)] = inst_27957);

(statearr_28065[(27)] = inst_27992);

(statearr_28065[(11)] = inst_27958);

return statearr_28065;
})();
var statearr_28066_28160 = state_28020__$1;
(statearr_28066_28160[(2)] = null);

(statearr_28066_28160[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28021 === (43))){
var state_28020__$1 = state_28020;
var statearr_28069_28161 = state_28020__$1;
(statearr_28069_28161[(2)] = null);

(statearr_28069_28161[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28021 === (29))){
var inst_28002 = (state_28020[(2)]);
var state_28020__$1 = state_28020;
var statearr_28070_28162 = state_28020__$1;
(statearr_28070_28162[(2)] = inst_28002);

(statearr_28070_28162[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28021 === (44))){
var inst_28011 = (state_28020[(2)]);
var state_28020__$1 = (function (){var statearr_28071 = state_28020;
(statearr_28071[(28)] = inst_28011);

return statearr_28071;
})();
var statearr_28072_28163 = state_28020__$1;
(statearr_28072_28163[(2)] = null);

(statearr_28072_28163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28021 === (6))){
var inst_27947 = (state_28020[(29)]);
var inst_27946 = cljs.core.deref(cs);
var inst_27947__$1 = cljs.core.keys(inst_27946);
var inst_27948 = cljs.core.count(inst_27947__$1);
var inst_27949 = cljs.core.reset_BANG_(dctr,inst_27948);
var inst_27954 = cljs.core.seq(inst_27947__$1);
var inst_27955 = inst_27954;
var inst_27956 = null;
var inst_27957 = (0);
var inst_27958 = (0);
var state_28020__$1 = (function (){var statearr_28073 = state_28020;
(statearr_28073[(10)] = inst_27956);

(statearr_28073[(20)] = inst_27955);

(statearr_28073[(30)] = inst_27949);

(statearr_28073[(21)] = inst_27957);

(statearr_28073[(11)] = inst_27958);

(statearr_28073[(29)] = inst_27947__$1);

return statearr_28073;
})();
var statearr_28074_28170 = state_28020__$1;
(statearr_28074_28170[(2)] = null);

(statearr_28074_28170[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28021 === (28))){
var inst_27955 = (state_28020[(20)]);
var inst_27975 = (state_28020[(25)]);
var inst_27975__$1 = cljs.core.seq(inst_27955);
var state_28020__$1 = (function (){var statearr_28075 = state_28020;
(statearr_28075[(25)] = inst_27975__$1);

return statearr_28075;
})();
if(inst_27975__$1){
var statearr_28077_28171 = state_28020__$1;
(statearr_28077_28171[(1)] = (33));

} else {
var statearr_28078_28172 = state_28020__$1;
(statearr_28078_28172[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28021 === (25))){
var inst_27957 = (state_28020[(21)]);
var inst_27958 = (state_28020[(11)]);
var inst_27960 = (inst_27958 < inst_27957);
var inst_27961 = inst_27960;
var state_28020__$1 = state_28020;
if(cljs.core.truth_(inst_27961)){
var statearr_28080_28173 = state_28020__$1;
(statearr_28080_28173[(1)] = (27));

} else {
var statearr_28081_28174 = state_28020__$1;
(statearr_28081_28174[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28021 === (34))){
var state_28020__$1 = state_28020;
var statearr_28082_28175 = state_28020__$1;
(statearr_28082_28175[(2)] = null);

(statearr_28082_28175[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28021 === (17))){
var state_28020__$1 = state_28020;
var statearr_28083_28176 = state_28020__$1;
(statearr_28083_28176[(2)] = null);

(statearr_28083_28176[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28021 === (3))){
var inst_28016 = (state_28020[(2)]);
var state_28020__$1 = state_28020;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28020__$1,inst_28016);
} else {
if((state_val_28021 === (12))){
var inst_27942 = (state_28020[(2)]);
var state_28020__$1 = state_28020;
var statearr_28084_28177 = state_28020__$1;
(statearr_28084_28177[(2)] = inst_27942);

(statearr_28084_28177[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28021 === (2))){
var state_28020__$1 = state_28020;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28020__$1,(4),ch);
} else {
if((state_val_28021 === (23))){
var state_28020__$1 = state_28020;
var statearr_28085_28178 = state_28020__$1;
(statearr_28085_28178[(2)] = null);

(statearr_28085_28178[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28021 === (35))){
var inst_28000 = (state_28020[(2)]);
var state_28020__$1 = state_28020;
var statearr_28086_28179 = state_28020__$1;
(statearr_28086_28179[(2)] = inst_28000);

(statearr_28086_28179[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28021 === (19))){
var inst_27911 = (state_28020[(7)]);
var inst_27918 = cljs.core.chunk_first(inst_27911);
var inst_27919 = cljs.core.chunk_rest(inst_27911);
var inst_27920 = cljs.core.count(inst_27918);
var inst_27888 = inst_27919;
var inst_27889 = inst_27918;
var inst_27890 = inst_27920;
var inst_27891 = (0);
var state_28020__$1 = (function (){var statearr_28088 = state_28020;
(statearr_28088[(13)] = inst_27889);

(statearr_28088[(14)] = inst_27890);

(statearr_28088[(16)] = inst_27888);

(statearr_28088[(17)] = inst_27891);

return statearr_28088;
})();
var statearr_28089_28180 = state_28020__$1;
(statearr_28089_28180[(2)] = null);

(statearr_28089_28180[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28021 === (11))){
var inst_27911 = (state_28020[(7)]);
var inst_27888 = (state_28020[(16)]);
var inst_27911__$1 = cljs.core.seq(inst_27888);
var state_28020__$1 = (function (){var statearr_28090 = state_28020;
(statearr_28090[(7)] = inst_27911__$1);

return statearr_28090;
})();
if(inst_27911__$1){
var statearr_28091_28181 = state_28020__$1;
(statearr_28091_28181[(1)] = (16));

} else {
var statearr_28093_28182 = state_28020__$1;
(statearr_28093_28182[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28021 === (9))){
var inst_27944 = (state_28020[(2)]);
var state_28020__$1 = state_28020;
var statearr_28095_28183 = state_28020__$1;
(statearr_28095_28183[(2)] = inst_27944);

(statearr_28095_28183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28021 === (5))){
var inst_27886 = cljs.core.deref(cs);
var inst_27887 = cljs.core.seq(inst_27886);
var inst_27888 = inst_27887;
var inst_27889 = null;
var inst_27890 = (0);
var inst_27891 = (0);
var state_28020__$1 = (function (){var statearr_28096 = state_28020;
(statearr_28096[(13)] = inst_27889);

(statearr_28096[(14)] = inst_27890);

(statearr_28096[(16)] = inst_27888);

(statearr_28096[(17)] = inst_27891);

return statearr_28096;
})();
var statearr_28097_28185 = state_28020__$1;
(statearr_28097_28185[(2)] = null);

(statearr_28097_28185[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28021 === (14))){
var state_28020__$1 = state_28020;
var statearr_28100_28186 = state_28020__$1;
(statearr_28100_28186[(2)] = null);

(statearr_28100_28186[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28021 === (45))){
var inst_28008 = (state_28020[(2)]);
var state_28020__$1 = state_28020;
var statearr_28101_28187 = state_28020__$1;
(statearr_28101_28187[(2)] = inst_28008);

(statearr_28101_28187[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28021 === (26))){
var inst_27947 = (state_28020[(29)]);
var inst_28004 = (state_28020[(2)]);
var inst_28005 = cljs.core.seq(inst_27947);
var state_28020__$1 = (function (){var statearr_28102 = state_28020;
(statearr_28102[(31)] = inst_28004);

return statearr_28102;
})();
if(inst_28005){
var statearr_28103_28188 = state_28020__$1;
(statearr_28103_28188[(1)] = (42));

} else {
var statearr_28104_28189 = state_28020__$1;
(statearr_28104_28189[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28021 === (16))){
var inst_27911 = (state_28020[(7)]);
var inst_27915 = cljs.core.chunked_seq_QMARK_(inst_27911);
var state_28020__$1 = state_28020;
if(inst_27915){
var statearr_28105_28190 = state_28020__$1;
(statearr_28105_28190[(1)] = (19));

} else {
var statearr_28106_28192 = state_28020__$1;
(statearr_28106_28192[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28021 === (38))){
var inst_27997 = (state_28020[(2)]);
var state_28020__$1 = state_28020;
var statearr_28107_28193 = state_28020__$1;
(statearr_28107_28193[(2)] = inst_27997);

(statearr_28107_28193[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28021 === (30))){
var state_28020__$1 = state_28020;
var statearr_28108_28194 = state_28020__$1;
(statearr_28108_28194[(2)] = null);

(statearr_28108_28194[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28021 === (10))){
var inst_27889 = (state_28020[(13)]);
var inst_27891 = (state_28020[(17)]);
var inst_27899 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_27889,inst_27891);
var inst_27900 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27899,(0),null);
var inst_27901 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27899,(1),null);
var state_28020__$1 = (function (){var statearr_28109 = state_28020;
(statearr_28109[(26)] = inst_27900);

return statearr_28109;
})();
if(cljs.core.truth_(inst_27901)){
var statearr_28110_28197 = state_28020__$1;
(statearr_28110_28197[(1)] = (13));

} else {
var statearr_28111_28198 = state_28020__$1;
(statearr_28111_28198[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28021 === (18))){
var inst_27940 = (state_28020[(2)]);
var state_28020__$1 = state_28020;
var statearr_28112_28199 = state_28020__$1;
(statearr_28112_28199[(2)] = inst_27940);

(statearr_28112_28199[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28021 === (42))){
var state_28020__$1 = state_28020;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28020__$1,(45),dchan);
} else {
if((state_val_28021 === (37))){
var inst_27879 = (state_28020[(9)]);
var inst_27984 = (state_28020[(23)]);
var inst_27975 = (state_28020[(25)]);
var inst_27984__$1 = cljs.core.first(inst_27975);
var inst_27985 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_27984__$1,inst_27879,done);
var state_28020__$1 = (function (){var statearr_28113 = state_28020;
(statearr_28113[(23)] = inst_27984__$1);

return statearr_28113;
})();
if(cljs.core.truth_(inst_27985)){
var statearr_28114_28201 = state_28020__$1;
(statearr_28114_28201[(1)] = (39));

} else {
var statearr_28115_28202 = state_28020__$1;
(statearr_28115_28202[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28021 === (8))){
var inst_27890 = (state_28020[(14)]);
var inst_27891 = (state_28020[(17)]);
var inst_27893 = (inst_27891 < inst_27890);
var inst_27894 = inst_27893;
var state_28020__$1 = state_28020;
if(cljs.core.truth_(inst_27894)){
var statearr_28116_28203 = state_28020__$1;
(statearr_28116_28203[(1)] = (10));

} else {
var statearr_28117_28204 = state_28020__$1;
(statearr_28117_28204[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27055__auto___28122,cs,m,dchan,dctr,done))
;
return ((function (switch__26823__auto__,c__27055__auto___28122,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__26824__auto__ = null;
var cljs$core$async$mult_$_state_machine__26824__auto____0 = (function (){
var statearr_28118 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28118[(0)] = cljs$core$async$mult_$_state_machine__26824__auto__);

(statearr_28118[(1)] = (1));

return statearr_28118;
});
var cljs$core$async$mult_$_state_machine__26824__auto____1 = (function (state_28020){
while(true){
var ret_value__26825__auto__ = (function (){try{while(true){
var result__26826__auto__ = switch__26823__auto__(state_28020);
if(cljs.core.keyword_identical_QMARK_(result__26826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26826__auto__;
}
break;
}
}catch (e28119){if((e28119 instanceof Object)){
var ex__26827__auto__ = e28119;
var statearr_28120_28206 = state_28020;
(statearr_28120_28206[(5)] = ex__26827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28020);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28119;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28207 = state_28020;
state_28020 = G__28207;
continue;
} else {
return ret_value__26825__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26824__auto__ = function(state_28020){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26824__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26824__auto____1.call(this,state_28020);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26824__auto____0;
cljs$core$async$mult_$_state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26824__auto____1;
return cljs$core$async$mult_$_state_machine__26824__auto__;
})()
;})(switch__26823__auto__,c__27055__auto___28122,cs,m,dchan,dctr,done))
})();
var state__27057__auto__ = (function (){var statearr_28121 = (f__27056__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27056__auto__.cljs$core$IFn$_invoke$arity$0() : f__27056__auto__.call(null));
(statearr_28121[(6)] = c__27055__auto___28122);

return statearr_28121;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27057__auto__);
});})(c__27055__auto___28122,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__28209 = arguments.length;
switch (G__28209) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4212__auto__.call(null,m,ch));
} else {
var m__4212__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4212__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4212__auto__.call(null,m,ch));
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4212__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4212__auto__.call(null,m));
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__4212__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4212__auto__.call(null,m,state_map));
} else {
var m__4212__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4212__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4212__auto__.call(null,m,mode));
} else {
var m__4212__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4212__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___28237 = arguments.length;
var i__4500__auto___28238 = (0);
while(true){
if((i__4500__auto___28238 < len__4499__auto___28237)){
args__4502__auto__.push((arguments[i__4500__auto___28238]));

var G__28239 = (i__4500__auto___28238 + (1));
i__4500__auto___28238 = G__28239;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28231){
var map__28232 = p__28231;
var map__28232__$1 = ((((!((map__28232 == null)))?(((((map__28232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28232.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28232):map__28232);
var opts = map__28232__$1;
var statearr_28234_28244 = state;
(statearr_28234_28244[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts(((function (map__28232,map__28232__$1,opts){
return (function (val){
var statearr_28235_28246 = state;
(statearr_28235_28246[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__28232,map__28232__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_28236_28247 = state;
(statearr_28236_28247[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28227){
var G__28228 = cljs.core.first(seq28227);
var seq28227__$1 = cljs.core.next(seq28227);
var G__28229 = cljs.core.first(seq28227__$1);
var seq28227__$2 = cljs.core.next(seq28227__$1);
var G__28230 = cljs.core.first(seq28227__$2);
var seq28227__$3 = cljs.core.next(seq28227__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28228,G__28229,G__28230,seq28227__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_(solos)))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async28253 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28253 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta28254){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta28254 = meta28254;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28253.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28255,meta28254__$1){
var self__ = this;
var _28255__$1 = this;
return (new cljs.core.async.t_cljs$core$async28253(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta28254__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28253.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28255){
var self__ = this;
var _28255__$1 = this;
return self__.meta28254;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28253.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28253.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28253.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28253.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28253.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28253.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28253.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28253.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28253.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta28254","meta28254",337748536,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28253.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28253.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28253";

cljs.core.async.t_cljs$core$async28253.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async28253");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28253.
 */
cljs.core.async.__GT_t_cljs$core$async28253 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async28253(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta28254){
return (new cljs.core.async.t_cljs$core$async28253(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta28254));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async28253(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27055__auto___28468 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27055__auto___28468,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__27056__auto__ = (function (){var switch__26823__auto__ = ((function (c__27055__auto___28468,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28365){
var state_val_28366 = (state_28365[(1)]);
if((state_val_28366 === (7))){
var inst_28280 = (state_28365[(2)]);
var state_28365__$1 = state_28365;
var statearr_28367_28469 = state_28365__$1;
(statearr_28367_28469[(2)] = inst_28280);

(statearr_28367_28469[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (20))){
var inst_28292 = (state_28365[(7)]);
var state_28365__$1 = state_28365;
var statearr_28368_28470 = state_28365__$1;
(statearr_28368_28470[(2)] = inst_28292);

(statearr_28368_28470[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (27))){
var state_28365__$1 = state_28365;
var statearr_28369_28471 = state_28365__$1;
(statearr_28369_28471[(2)] = null);

(statearr_28369_28471[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (1))){
var inst_28267 = (state_28365[(8)]);
var inst_28267__$1 = calc_state();
var inst_28269 = (inst_28267__$1 == null);
var inst_28270 = cljs.core.not(inst_28269);
var state_28365__$1 = (function (){var statearr_28370 = state_28365;
(statearr_28370[(8)] = inst_28267__$1);

return statearr_28370;
})();
if(inst_28270){
var statearr_28371_28472 = state_28365__$1;
(statearr_28371_28472[(1)] = (2));

} else {
var statearr_28372_28473 = state_28365__$1;
(statearr_28372_28473[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (24))){
var inst_28316 = (state_28365[(9)]);
var inst_28339 = (state_28365[(10)]);
var inst_28325 = (state_28365[(11)]);
var inst_28339__$1 = (inst_28316.cljs$core$IFn$_invoke$arity$1 ? inst_28316.cljs$core$IFn$_invoke$arity$1(inst_28325) : inst_28316.call(null,inst_28325));
var state_28365__$1 = (function (){var statearr_28373 = state_28365;
(statearr_28373[(10)] = inst_28339__$1);

return statearr_28373;
})();
if(cljs.core.truth_(inst_28339__$1)){
var statearr_28374_28474 = state_28365__$1;
(statearr_28374_28474[(1)] = (29));

} else {
var statearr_28375_28475 = state_28365__$1;
(statearr_28375_28475[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (4))){
var inst_28283 = (state_28365[(2)]);
var state_28365__$1 = state_28365;
if(cljs.core.truth_(inst_28283)){
var statearr_28376_28476 = state_28365__$1;
(statearr_28376_28476[(1)] = (8));

} else {
var statearr_28377_28477 = state_28365__$1;
(statearr_28377_28477[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (15))){
var inst_28310 = (state_28365[(2)]);
var state_28365__$1 = state_28365;
if(cljs.core.truth_(inst_28310)){
var statearr_28379_28478 = state_28365__$1;
(statearr_28379_28478[(1)] = (19));

} else {
var statearr_28386_28479 = state_28365__$1;
(statearr_28386_28479[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (21))){
var inst_28315 = (state_28365[(12)]);
var inst_28315__$1 = (state_28365[(2)]);
var inst_28316 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28315__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28317 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28315__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28318 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28315__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28365__$1 = (function (){var statearr_28387 = state_28365;
(statearr_28387[(13)] = inst_28317);

(statearr_28387[(12)] = inst_28315__$1);

(statearr_28387[(9)] = inst_28316);

return statearr_28387;
})();
return cljs.core.async.ioc_alts_BANG_(state_28365__$1,(22),inst_28318);
} else {
if((state_val_28366 === (31))){
var inst_28347 = (state_28365[(2)]);
var state_28365__$1 = state_28365;
if(cljs.core.truth_(inst_28347)){
var statearr_28388_28491 = state_28365__$1;
(statearr_28388_28491[(1)] = (32));

} else {
var statearr_28389_28492 = state_28365__$1;
(statearr_28389_28492[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (32))){
var inst_28324 = (state_28365[(14)]);
var state_28365__$1 = state_28365;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28365__$1,(35),out,inst_28324);
} else {
if((state_val_28366 === (33))){
var inst_28315 = (state_28365[(12)]);
var inst_28292 = inst_28315;
var state_28365__$1 = (function (){var statearr_28390 = state_28365;
(statearr_28390[(7)] = inst_28292);

return statearr_28390;
})();
var statearr_28391_28493 = state_28365__$1;
(statearr_28391_28493[(2)] = null);

(statearr_28391_28493[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (13))){
var inst_28292 = (state_28365[(7)]);
var inst_28299 = inst_28292.cljs$lang$protocol_mask$partition0$;
var inst_28300 = (inst_28299 & (64));
var inst_28301 = inst_28292.cljs$core$ISeq$;
var inst_28302 = (cljs.core.PROTOCOL_SENTINEL === inst_28301);
var inst_28303 = ((inst_28300) || (inst_28302));
var state_28365__$1 = state_28365;
if(cljs.core.truth_(inst_28303)){
var statearr_28392_28494 = state_28365__$1;
(statearr_28392_28494[(1)] = (16));

} else {
var statearr_28393_28495 = state_28365__$1;
(statearr_28393_28495[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (22))){
var inst_28325 = (state_28365[(11)]);
var inst_28324 = (state_28365[(14)]);
var inst_28323 = (state_28365[(2)]);
var inst_28324__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28323,(0),null);
var inst_28325__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28323,(1),null);
var inst_28326 = (inst_28324__$1 == null);
var inst_28327 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_28325__$1,change);
var inst_28328 = ((inst_28326) || (inst_28327));
var state_28365__$1 = (function (){var statearr_28394 = state_28365;
(statearr_28394[(11)] = inst_28325__$1);

(statearr_28394[(14)] = inst_28324__$1);

return statearr_28394;
})();
if(cljs.core.truth_(inst_28328)){
var statearr_28395_28496 = state_28365__$1;
(statearr_28395_28496[(1)] = (23));

} else {
var statearr_28396_28497 = state_28365__$1;
(statearr_28396_28497[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (36))){
var inst_28315 = (state_28365[(12)]);
var inst_28292 = inst_28315;
var state_28365__$1 = (function (){var statearr_28397 = state_28365;
(statearr_28397[(7)] = inst_28292);

return statearr_28397;
})();
var statearr_28404_28498 = state_28365__$1;
(statearr_28404_28498[(2)] = null);

(statearr_28404_28498[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (29))){
var inst_28339 = (state_28365[(10)]);
var state_28365__$1 = state_28365;
var statearr_28412_28499 = state_28365__$1;
(statearr_28412_28499[(2)] = inst_28339);

(statearr_28412_28499[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (6))){
var state_28365__$1 = state_28365;
var statearr_28413_28500 = state_28365__$1;
(statearr_28413_28500[(2)] = false);

(statearr_28413_28500[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (28))){
var inst_28335 = (state_28365[(2)]);
var inst_28336 = calc_state();
var inst_28292 = inst_28336;
var state_28365__$1 = (function (){var statearr_28414 = state_28365;
(statearr_28414[(15)] = inst_28335);

(statearr_28414[(7)] = inst_28292);

return statearr_28414;
})();
var statearr_28415_28501 = state_28365__$1;
(statearr_28415_28501[(2)] = null);

(statearr_28415_28501[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (25))){
var inst_28361 = (state_28365[(2)]);
var state_28365__$1 = state_28365;
var statearr_28416_28502 = state_28365__$1;
(statearr_28416_28502[(2)] = inst_28361);

(statearr_28416_28502[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (34))){
var inst_28359 = (state_28365[(2)]);
var state_28365__$1 = state_28365;
var statearr_28417_28503 = state_28365__$1;
(statearr_28417_28503[(2)] = inst_28359);

(statearr_28417_28503[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (17))){
var state_28365__$1 = state_28365;
var statearr_28418_28504 = state_28365__$1;
(statearr_28418_28504[(2)] = false);

(statearr_28418_28504[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (3))){
var state_28365__$1 = state_28365;
var statearr_28419_28505 = state_28365__$1;
(statearr_28419_28505[(2)] = false);

(statearr_28419_28505[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (12))){
var inst_28363 = (state_28365[(2)]);
var state_28365__$1 = state_28365;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28365__$1,inst_28363);
} else {
if((state_val_28366 === (2))){
var inst_28267 = (state_28365[(8)]);
var inst_28272 = inst_28267.cljs$lang$protocol_mask$partition0$;
var inst_28273 = (inst_28272 & (64));
var inst_28274 = inst_28267.cljs$core$ISeq$;
var inst_28275 = (cljs.core.PROTOCOL_SENTINEL === inst_28274);
var inst_28276 = ((inst_28273) || (inst_28275));
var state_28365__$1 = state_28365;
if(cljs.core.truth_(inst_28276)){
var statearr_28420_28506 = state_28365__$1;
(statearr_28420_28506[(1)] = (5));

} else {
var statearr_28421_28509 = state_28365__$1;
(statearr_28421_28509[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (23))){
var inst_28324 = (state_28365[(14)]);
var inst_28330 = (inst_28324 == null);
var state_28365__$1 = state_28365;
if(cljs.core.truth_(inst_28330)){
var statearr_28422_28510 = state_28365__$1;
(statearr_28422_28510[(1)] = (26));

} else {
var statearr_28423_28511 = state_28365__$1;
(statearr_28423_28511[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (35))){
var inst_28350 = (state_28365[(2)]);
var state_28365__$1 = state_28365;
if(cljs.core.truth_(inst_28350)){
var statearr_28425_28512 = state_28365__$1;
(statearr_28425_28512[(1)] = (36));

} else {
var statearr_28426_28513 = state_28365__$1;
(statearr_28426_28513[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (19))){
var inst_28292 = (state_28365[(7)]);
var inst_28312 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_28292);
var state_28365__$1 = state_28365;
var statearr_28430_28514 = state_28365__$1;
(statearr_28430_28514[(2)] = inst_28312);

(statearr_28430_28514[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (11))){
var inst_28292 = (state_28365[(7)]);
var inst_28296 = (inst_28292 == null);
var inst_28297 = cljs.core.not(inst_28296);
var state_28365__$1 = state_28365;
if(inst_28297){
var statearr_28431_28515 = state_28365__$1;
(statearr_28431_28515[(1)] = (13));

} else {
var statearr_28434_28516 = state_28365__$1;
(statearr_28434_28516[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (9))){
var inst_28267 = (state_28365[(8)]);
var state_28365__$1 = state_28365;
var statearr_28437_28519 = state_28365__$1;
(statearr_28437_28519[(2)] = inst_28267);

(statearr_28437_28519[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (5))){
var state_28365__$1 = state_28365;
var statearr_28441_28520 = state_28365__$1;
(statearr_28441_28520[(2)] = true);

(statearr_28441_28520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (14))){
var state_28365__$1 = state_28365;
var statearr_28442_28521 = state_28365__$1;
(statearr_28442_28521[(2)] = false);

(statearr_28442_28521[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (26))){
var inst_28325 = (state_28365[(11)]);
var inst_28332 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_28325);
var state_28365__$1 = state_28365;
var statearr_28443_28522 = state_28365__$1;
(statearr_28443_28522[(2)] = inst_28332);

(statearr_28443_28522[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (16))){
var state_28365__$1 = state_28365;
var statearr_28444_28523 = state_28365__$1;
(statearr_28444_28523[(2)] = true);

(statearr_28444_28523[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (38))){
var inst_28355 = (state_28365[(2)]);
var state_28365__$1 = state_28365;
var statearr_28445_28524 = state_28365__$1;
(statearr_28445_28524[(2)] = inst_28355);

(statearr_28445_28524[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (30))){
var inst_28317 = (state_28365[(13)]);
var inst_28316 = (state_28365[(9)]);
var inst_28325 = (state_28365[(11)]);
var inst_28342 = cljs.core.empty_QMARK_(inst_28316);
var inst_28343 = (inst_28317.cljs$core$IFn$_invoke$arity$1 ? inst_28317.cljs$core$IFn$_invoke$arity$1(inst_28325) : inst_28317.call(null,inst_28325));
var inst_28344 = cljs.core.not(inst_28343);
var inst_28345 = ((inst_28342) && (inst_28344));
var state_28365__$1 = state_28365;
var statearr_28448_28525 = state_28365__$1;
(statearr_28448_28525[(2)] = inst_28345);

(statearr_28448_28525[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (10))){
var inst_28267 = (state_28365[(8)]);
var inst_28288 = (state_28365[(2)]);
var inst_28289 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28288,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28290 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28288,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28291 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28288,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28292 = inst_28267;
var state_28365__$1 = (function (){var statearr_28450 = state_28365;
(statearr_28450[(7)] = inst_28292);

(statearr_28450[(16)] = inst_28289);

(statearr_28450[(17)] = inst_28291);

(statearr_28450[(18)] = inst_28290);

return statearr_28450;
})();
var statearr_28451_28526 = state_28365__$1;
(statearr_28451_28526[(2)] = null);

(statearr_28451_28526[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (18))){
var inst_28307 = (state_28365[(2)]);
var state_28365__$1 = state_28365;
var statearr_28452_28527 = state_28365__$1;
(statearr_28452_28527[(2)] = inst_28307);

(statearr_28452_28527[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (37))){
var state_28365__$1 = state_28365;
var statearr_28453_28528 = state_28365__$1;
(statearr_28453_28528[(2)] = null);

(statearr_28453_28528[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28366 === (8))){
var inst_28267 = (state_28365[(8)]);
var inst_28285 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_28267);
var state_28365__$1 = state_28365;
var statearr_28454_28530 = state_28365__$1;
(statearr_28454_28530[(2)] = inst_28285);

(statearr_28454_28530[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27055__auto___28468,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__26823__auto__,c__27055__auto___28468,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__26824__auto__ = null;
var cljs$core$async$mix_$_state_machine__26824__auto____0 = (function (){
var statearr_28455 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28455[(0)] = cljs$core$async$mix_$_state_machine__26824__auto__);

(statearr_28455[(1)] = (1));

return statearr_28455;
});
var cljs$core$async$mix_$_state_machine__26824__auto____1 = (function (state_28365){
while(true){
var ret_value__26825__auto__ = (function (){try{while(true){
var result__26826__auto__ = switch__26823__auto__(state_28365);
if(cljs.core.keyword_identical_QMARK_(result__26826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26826__auto__;
}
break;
}
}catch (e28456){if((e28456 instanceof Object)){
var ex__26827__auto__ = e28456;
var statearr_28457_28533 = state_28365;
(statearr_28457_28533[(5)] = ex__26827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28456;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28534 = state_28365;
state_28365 = G__28534;
continue;
} else {
return ret_value__26825__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26824__auto__ = function(state_28365){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26824__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26824__auto____1.call(this,state_28365);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26824__auto____0;
cljs$core$async$mix_$_state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26824__auto____1;
return cljs$core$async$mix_$_state_machine__26824__auto__;
})()
;})(switch__26823__auto__,c__27055__auto___28468,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__27057__auto__ = (function (){var statearr_28458 = (f__27056__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27056__auto__.cljs$core$IFn$_invoke$arity$0() : f__27056__auto__.call(null));
(statearr_28458[(6)] = c__27055__auto___28468);

return statearr_28458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27057__auto__);
});})(c__27055__auto___28468,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4212__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4212__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4212__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4212__auto__.call(null,p,v,ch));
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4212__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__28541 = arguments.length;
switch (G__28541) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4212__auto__.call(null,p));
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__4212__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4212__auto__.call(null,p,v));
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__4212__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__28545 = arguments.length;
switch (G__28545) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__3922__auto__,mults){
return (function (p1__28543_SHARP_){
if(cljs.core.truth_((p1__28543_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__28543_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__28543_SHARP_.call(null,topic)))){
return p1__28543_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__28543_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async28547 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28547 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28548){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28548 = meta28548;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28547.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28549,meta28548__$1){
var self__ = this;
var _28549__$1 = this;
return (new cljs.core.async.t_cljs$core$async28547(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28548__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28547.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28549){
var self__ = this;
var _28549__$1 = this;
return self__.meta28548;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28547.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28547.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28547.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28547.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28547.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28547.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28547.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28547.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28548","meta28548",-2000739861,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28547.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28547.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28547";

cljs.core.async.t_cljs$core$async28547.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async28547");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28547.
 */
cljs.core.async.__GT_t_cljs$core$async28547 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async28547(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28548){
return (new cljs.core.async.t_cljs$core$async28547(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28548));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async28547(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27055__auto___28680 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27055__auto___28680,mults,ensure_mult,p){
return (function (){
var f__27056__auto__ = (function (){var switch__26823__auto__ = ((function (c__27055__auto___28680,mults,ensure_mult,p){
return (function (state_28623){
var state_val_28624 = (state_28623[(1)]);
if((state_val_28624 === (7))){
var inst_28619 = (state_28623[(2)]);
var state_28623__$1 = state_28623;
var statearr_28626_28681 = state_28623__$1;
(statearr_28626_28681[(2)] = inst_28619);

(statearr_28626_28681[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (20))){
var state_28623__$1 = state_28623;
var statearr_28627_28682 = state_28623__$1;
(statearr_28627_28682[(2)] = null);

(statearr_28627_28682[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (1))){
var state_28623__$1 = state_28623;
var statearr_28629_28683 = state_28623__$1;
(statearr_28629_28683[(2)] = null);

(statearr_28629_28683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (24))){
var inst_28602 = (state_28623[(7)]);
var inst_28611 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_28602);
var state_28623__$1 = state_28623;
var statearr_28630_28685 = state_28623__$1;
(statearr_28630_28685[(2)] = inst_28611);

(statearr_28630_28685[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (4))){
var inst_28554 = (state_28623[(8)]);
var inst_28554__$1 = (state_28623[(2)]);
var inst_28555 = (inst_28554__$1 == null);
var state_28623__$1 = (function (){var statearr_28631 = state_28623;
(statearr_28631[(8)] = inst_28554__$1);

return statearr_28631;
})();
if(cljs.core.truth_(inst_28555)){
var statearr_28632_28687 = state_28623__$1;
(statearr_28632_28687[(1)] = (5));

} else {
var statearr_28633_28688 = state_28623__$1;
(statearr_28633_28688[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (15))){
var inst_28596 = (state_28623[(2)]);
var state_28623__$1 = state_28623;
var statearr_28635_28689 = state_28623__$1;
(statearr_28635_28689[(2)] = inst_28596);

(statearr_28635_28689[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (21))){
var inst_28616 = (state_28623[(2)]);
var state_28623__$1 = (function (){var statearr_28636 = state_28623;
(statearr_28636[(9)] = inst_28616);

return statearr_28636;
})();
var statearr_28637_28690 = state_28623__$1;
(statearr_28637_28690[(2)] = null);

(statearr_28637_28690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (13))){
var inst_28578 = (state_28623[(10)]);
var inst_28580 = cljs.core.chunked_seq_QMARK_(inst_28578);
var state_28623__$1 = state_28623;
if(inst_28580){
var statearr_28639_28692 = state_28623__$1;
(statearr_28639_28692[(1)] = (16));

} else {
var statearr_28640_28693 = state_28623__$1;
(statearr_28640_28693[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (22))){
var inst_28608 = (state_28623[(2)]);
var state_28623__$1 = state_28623;
if(cljs.core.truth_(inst_28608)){
var statearr_28641_28696 = state_28623__$1;
(statearr_28641_28696[(1)] = (23));

} else {
var statearr_28642_28697 = state_28623__$1;
(statearr_28642_28697[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (6))){
var inst_28604 = (state_28623[(11)]);
var inst_28554 = (state_28623[(8)]);
var inst_28602 = (state_28623[(7)]);
var inst_28602__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_28554) : topic_fn.call(null,inst_28554));
var inst_28603 = cljs.core.deref(mults);
var inst_28604__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28603,inst_28602__$1);
var state_28623__$1 = (function (){var statearr_28643 = state_28623;
(statearr_28643[(11)] = inst_28604__$1);

(statearr_28643[(7)] = inst_28602__$1);

return statearr_28643;
})();
if(cljs.core.truth_(inst_28604__$1)){
var statearr_28645_28698 = state_28623__$1;
(statearr_28645_28698[(1)] = (19));

} else {
var statearr_28646_28699 = state_28623__$1;
(statearr_28646_28699[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (25))){
var inst_28613 = (state_28623[(2)]);
var state_28623__$1 = state_28623;
var statearr_28649_28701 = state_28623__$1;
(statearr_28649_28701[(2)] = inst_28613);

(statearr_28649_28701[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (17))){
var inst_28578 = (state_28623[(10)]);
var inst_28587 = cljs.core.first(inst_28578);
var inst_28588 = cljs.core.async.muxch_STAR_(inst_28587);
var inst_28589 = cljs.core.async.close_BANG_(inst_28588);
var inst_28590 = cljs.core.next(inst_28578);
var inst_28564 = inst_28590;
var inst_28565 = null;
var inst_28566 = (0);
var inst_28567 = (0);
var state_28623__$1 = (function (){var statearr_28650 = state_28623;
(statearr_28650[(12)] = inst_28564);

(statearr_28650[(13)] = inst_28565);

(statearr_28650[(14)] = inst_28589);

(statearr_28650[(15)] = inst_28566);

(statearr_28650[(16)] = inst_28567);

return statearr_28650;
})();
var statearr_28651_28702 = state_28623__$1;
(statearr_28651_28702[(2)] = null);

(statearr_28651_28702[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (3))){
var inst_28621 = (state_28623[(2)]);
var state_28623__$1 = state_28623;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28623__$1,inst_28621);
} else {
if((state_val_28624 === (12))){
var inst_28598 = (state_28623[(2)]);
var state_28623__$1 = state_28623;
var statearr_28652_28703 = state_28623__$1;
(statearr_28652_28703[(2)] = inst_28598);

(statearr_28652_28703[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (2))){
var state_28623__$1 = state_28623;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28623__$1,(4),ch);
} else {
if((state_val_28624 === (23))){
var state_28623__$1 = state_28623;
var statearr_28653_28705 = state_28623__$1;
(statearr_28653_28705[(2)] = null);

(statearr_28653_28705[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (19))){
var inst_28604 = (state_28623[(11)]);
var inst_28554 = (state_28623[(8)]);
var inst_28606 = cljs.core.async.muxch_STAR_(inst_28604);
var state_28623__$1 = state_28623;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28623__$1,(22),inst_28606,inst_28554);
} else {
if((state_val_28624 === (11))){
var inst_28564 = (state_28623[(12)]);
var inst_28578 = (state_28623[(10)]);
var inst_28578__$1 = cljs.core.seq(inst_28564);
var state_28623__$1 = (function (){var statearr_28654 = state_28623;
(statearr_28654[(10)] = inst_28578__$1);

return statearr_28654;
})();
if(inst_28578__$1){
var statearr_28655_28707 = state_28623__$1;
(statearr_28655_28707[(1)] = (13));

} else {
var statearr_28656_28708 = state_28623__$1;
(statearr_28656_28708[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (9))){
var inst_28600 = (state_28623[(2)]);
var state_28623__$1 = state_28623;
var statearr_28657_28710 = state_28623__$1;
(statearr_28657_28710[(2)] = inst_28600);

(statearr_28657_28710[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (5))){
var inst_28561 = cljs.core.deref(mults);
var inst_28562 = cljs.core.vals(inst_28561);
var inst_28563 = cljs.core.seq(inst_28562);
var inst_28564 = inst_28563;
var inst_28565 = null;
var inst_28566 = (0);
var inst_28567 = (0);
var state_28623__$1 = (function (){var statearr_28658 = state_28623;
(statearr_28658[(12)] = inst_28564);

(statearr_28658[(13)] = inst_28565);

(statearr_28658[(15)] = inst_28566);

(statearr_28658[(16)] = inst_28567);

return statearr_28658;
})();
var statearr_28659_28711 = state_28623__$1;
(statearr_28659_28711[(2)] = null);

(statearr_28659_28711[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (14))){
var state_28623__$1 = state_28623;
var statearr_28663_28712 = state_28623__$1;
(statearr_28663_28712[(2)] = null);

(statearr_28663_28712[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (16))){
var inst_28578 = (state_28623[(10)]);
var inst_28582 = cljs.core.chunk_first(inst_28578);
var inst_28583 = cljs.core.chunk_rest(inst_28578);
var inst_28584 = cljs.core.count(inst_28582);
var inst_28564 = inst_28583;
var inst_28565 = inst_28582;
var inst_28566 = inst_28584;
var inst_28567 = (0);
var state_28623__$1 = (function (){var statearr_28664 = state_28623;
(statearr_28664[(12)] = inst_28564);

(statearr_28664[(13)] = inst_28565);

(statearr_28664[(15)] = inst_28566);

(statearr_28664[(16)] = inst_28567);

return statearr_28664;
})();
var statearr_28665_28715 = state_28623__$1;
(statearr_28665_28715[(2)] = null);

(statearr_28665_28715[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (10))){
var inst_28564 = (state_28623[(12)]);
var inst_28565 = (state_28623[(13)]);
var inst_28566 = (state_28623[(15)]);
var inst_28567 = (state_28623[(16)]);
var inst_28572 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_28565,inst_28567);
var inst_28573 = cljs.core.async.muxch_STAR_(inst_28572);
var inst_28574 = cljs.core.async.close_BANG_(inst_28573);
var inst_28575 = (inst_28567 + (1));
var tmp28660 = inst_28564;
var tmp28661 = inst_28565;
var tmp28662 = inst_28566;
var inst_28564__$1 = tmp28660;
var inst_28565__$1 = tmp28661;
var inst_28566__$1 = tmp28662;
var inst_28567__$1 = inst_28575;
var state_28623__$1 = (function (){var statearr_28666 = state_28623;
(statearr_28666[(12)] = inst_28564__$1);

(statearr_28666[(17)] = inst_28574);

(statearr_28666[(13)] = inst_28565__$1);

(statearr_28666[(15)] = inst_28566__$1);

(statearr_28666[(16)] = inst_28567__$1);

return statearr_28666;
})();
var statearr_28667_28716 = state_28623__$1;
(statearr_28667_28716[(2)] = null);

(statearr_28667_28716[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (18))){
var inst_28593 = (state_28623[(2)]);
var state_28623__$1 = state_28623;
var statearr_28668_28717 = state_28623__$1;
(statearr_28668_28717[(2)] = inst_28593);

(statearr_28668_28717[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28624 === (8))){
var inst_28566 = (state_28623[(15)]);
var inst_28567 = (state_28623[(16)]);
var inst_28569 = (inst_28567 < inst_28566);
var inst_28570 = inst_28569;
var state_28623__$1 = state_28623;
if(cljs.core.truth_(inst_28570)){
var statearr_28669_28718 = state_28623__$1;
(statearr_28669_28718[(1)] = (10));

} else {
var statearr_28670_28719 = state_28623__$1;
(statearr_28670_28719[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27055__auto___28680,mults,ensure_mult,p))
;
return ((function (switch__26823__auto__,c__27055__auto___28680,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__26824__auto__ = null;
var cljs$core$async$state_machine__26824__auto____0 = (function (){
var statearr_28671 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28671[(0)] = cljs$core$async$state_machine__26824__auto__);

(statearr_28671[(1)] = (1));

return statearr_28671;
});
var cljs$core$async$state_machine__26824__auto____1 = (function (state_28623){
while(true){
var ret_value__26825__auto__ = (function (){try{while(true){
var result__26826__auto__ = switch__26823__auto__(state_28623);
if(cljs.core.keyword_identical_QMARK_(result__26826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26826__auto__;
}
break;
}
}catch (e28672){if((e28672 instanceof Object)){
var ex__26827__auto__ = e28672;
var statearr_28673_28723 = state_28623;
(statearr_28673_28723[(5)] = ex__26827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28623);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28672;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28724 = state_28623;
state_28623 = G__28724;
continue;
} else {
return ret_value__26825__auto__;
}
break;
}
});
cljs$core$async$state_machine__26824__auto__ = function(state_28623){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26824__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26824__auto____1.call(this,state_28623);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26824__auto____0;
cljs$core$async$state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26824__auto____1;
return cljs$core$async$state_machine__26824__auto__;
})()
;})(switch__26823__auto__,c__27055__auto___28680,mults,ensure_mult,p))
})();
var state__27057__auto__ = (function (){var statearr_28674 = (f__27056__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27056__auto__.cljs$core$IFn$_invoke$arity$0() : f__27056__auto__.call(null));
(statearr_28674[(6)] = c__27055__auto___28680);

return statearr_28674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27057__auto__);
});})(c__27055__auto___28680,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__28726 = arguments.length;
switch (G__28726) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__28729 = arguments.length;
switch (G__28729) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__28732 = arguments.length;
switch (G__28732) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__27055__auto___28799 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27055__auto___28799,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__27056__auto__ = (function (){var switch__26823__auto__ = ((function (c__27055__auto___28799,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28771){
var state_val_28772 = (state_28771[(1)]);
if((state_val_28772 === (7))){
var state_28771__$1 = state_28771;
var statearr_28773_28800 = state_28771__$1;
(statearr_28773_28800[(2)] = null);

(statearr_28773_28800[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28772 === (1))){
var state_28771__$1 = state_28771;
var statearr_28774_28801 = state_28771__$1;
(statearr_28774_28801[(2)] = null);

(statearr_28774_28801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28772 === (4))){
var inst_28735 = (state_28771[(7)]);
var inst_28737 = (inst_28735 < cnt);
var state_28771__$1 = state_28771;
if(cljs.core.truth_(inst_28737)){
var statearr_28775_28802 = state_28771__$1;
(statearr_28775_28802[(1)] = (6));

} else {
var statearr_28776_28803 = state_28771__$1;
(statearr_28776_28803[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28772 === (15))){
var inst_28767 = (state_28771[(2)]);
var state_28771__$1 = state_28771;
var statearr_28777_28804 = state_28771__$1;
(statearr_28777_28804[(2)] = inst_28767);

(statearr_28777_28804[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28772 === (13))){
var inst_28760 = cljs.core.async.close_BANG_(out);
var state_28771__$1 = state_28771;
var statearr_28778_28805 = state_28771__$1;
(statearr_28778_28805[(2)] = inst_28760);

(statearr_28778_28805[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28772 === (6))){
var state_28771__$1 = state_28771;
var statearr_28779_28806 = state_28771__$1;
(statearr_28779_28806[(2)] = null);

(statearr_28779_28806[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28772 === (3))){
var inst_28769 = (state_28771[(2)]);
var state_28771__$1 = state_28771;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28771__$1,inst_28769);
} else {
if((state_val_28772 === (12))){
var inst_28757 = (state_28771[(8)]);
var inst_28757__$1 = (state_28771[(2)]);
var inst_28758 = cljs.core.some(cljs.core.nil_QMARK_,inst_28757__$1);
var state_28771__$1 = (function (){var statearr_28780 = state_28771;
(statearr_28780[(8)] = inst_28757__$1);

return statearr_28780;
})();
if(cljs.core.truth_(inst_28758)){
var statearr_28781_28807 = state_28771__$1;
(statearr_28781_28807[(1)] = (13));

} else {
var statearr_28782_28808 = state_28771__$1;
(statearr_28782_28808[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28772 === (2))){
var inst_28734 = cljs.core.reset_BANG_(dctr,cnt);
var inst_28735 = (0);
var state_28771__$1 = (function (){var statearr_28783 = state_28771;
(statearr_28783[(7)] = inst_28735);

(statearr_28783[(9)] = inst_28734);

return statearr_28783;
})();
var statearr_28784_28809 = state_28771__$1;
(statearr_28784_28809[(2)] = null);

(statearr_28784_28809[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28772 === (11))){
var inst_28735 = (state_28771[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_28771,(10),Object,null,(9));
var inst_28744 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_28735) : chs__$1.call(null,inst_28735));
var inst_28745 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_28735) : done.call(null,inst_28735));
var inst_28746 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_28744,inst_28745);
var state_28771__$1 = state_28771;
var statearr_28785_28810 = state_28771__$1;
(statearr_28785_28810[(2)] = inst_28746);


cljs.core.async.impl.ioc_helpers.process_exception(state_28771__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28772 === (9))){
var inst_28735 = (state_28771[(7)]);
var inst_28748 = (state_28771[(2)]);
var inst_28749 = (inst_28735 + (1));
var inst_28735__$1 = inst_28749;
var state_28771__$1 = (function (){var statearr_28786 = state_28771;
(statearr_28786[(10)] = inst_28748);

(statearr_28786[(7)] = inst_28735__$1);

return statearr_28786;
})();
var statearr_28787_28811 = state_28771__$1;
(statearr_28787_28811[(2)] = null);

(statearr_28787_28811[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28772 === (5))){
var inst_28755 = (state_28771[(2)]);
var state_28771__$1 = (function (){var statearr_28788 = state_28771;
(statearr_28788[(11)] = inst_28755);

return statearr_28788;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28771__$1,(12),dchan);
} else {
if((state_val_28772 === (14))){
var inst_28757 = (state_28771[(8)]);
var inst_28762 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_28757);
var state_28771__$1 = state_28771;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28771__$1,(16),out,inst_28762);
} else {
if((state_val_28772 === (16))){
var inst_28764 = (state_28771[(2)]);
var state_28771__$1 = (function (){var statearr_28789 = state_28771;
(statearr_28789[(12)] = inst_28764);

return statearr_28789;
})();
var statearr_28790_28812 = state_28771__$1;
(statearr_28790_28812[(2)] = null);

(statearr_28790_28812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28772 === (10))){
var inst_28739 = (state_28771[(2)]);
var inst_28740 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_28771__$1 = (function (){var statearr_28791 = state_28771;
(statearr_28791[(13)] = inst_28739);

return statearr_28791;
})();
var statearr_28792_28813 = state_28771__$1;
(statearr_28792_28813[(2)] = inst_28740);


cljs.core.async.impl.ioc_helpers.process_exception(state_28771__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28772 === (8))){
var inst_28753 = (state_28771[(2)]);
var state_28771__$1 = state_28771;
var statearr_28793_28814 = state_28771__$1;
(statearr_28793_28814[(2)] = inst_28753);

(statearr_28793_28814[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27055__auto___28799,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__26823__auto__,c__27055__auto___28799,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__26824__auto__ = null;
var cljs$core$async$state_machine__26824__auto____0 = (function (){
var statearr_28794 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28794[(0)] = cljs$core$async$state_machine__26824__auto__);

(statearr_28794[(1)] = (1));

return statearr_28794;
});
var cljs$core$async$state_machine__26824__auto____1 = (function (state_28771){
while(true){
var ret_value__26825__auto__ = (function (){try{while(true){
var result__26826__auto__ = switch__26823__auto__(state_28771);
if(cljs.core.keyword_identical_QMARK_(result__26826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26826__auto__;
}
break;
}
}catch (e28795){if((e28795 instanceof Object)){
var ex__26827__auto__ = e28795;
var statearr_28796_28815 = state_28771;
(statearr_28796_28815[(5)] = ex__26827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28771);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28795;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28816 = state_28771;
state_28771 = G__28816;
continue;
} else {
return ret_value__26825__auto__;
}
break;
}
});
cljs$core$async$state_machine__26824__auto__ = function(state_28771){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26824__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26824__auto____1.call(this,state_28771);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26824__auto____0;
cljs$core$async$state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26824__auto____1;
return cljs$core$async$state_machine__26824__auto__;
})()
;})(switch__26823__auto__,c__27055__auto___28799,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__27057__auto__ = (function (){var statearr_28797 = (f__27056__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27056__auto__.cljs$core$IFn$_invoke$arity$0() : f__27056__auto__.call(null));
(statearr_28797[(6)] = c__27055__auto___28799);

return statearr_28797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27057__auto__);
});})(c__27055__auto___28799,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__28819 = arguments.length;
switch (G__28819) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__27055__auto___28873 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27055__auto___28873,out){
return (function (){
var f__27056__auto__ = (function (){var switch__26823__auto__ = ((function (c__27055__auto___28873,out){
return (function (state_28851){
var state_val_28852 = (state_28851[(1)]);
if((state_val_28852 === (7))){
var inst_28831 = (state_28851[(7)]);
var inst_28830 = (state_28851[(8)]);
var inst_28830__$1 = (state_28851[(2)]);
var inst_28831__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28830__$1,(0),null);
var inst_28832 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28830__$1,(1),null);
var inst_28833 = (inst_28831__$1 == null);
var state_28851__$1 = (function (){var statearr_28853 = state_28851;
(statearr_28853[(7)] = inst_28831__$1);

(statearr_28853[(9)] = inst_28832);

(statearr_28853[(8)] = inst_28830__$1);

return statearr_28853;
})();
if(cljs.core.truth_(inst_28833)){
var statearr_28854_28874 = state_28851__$1;
(statearr_28854_28874[(1)] = (8));

} else {
var statearr_28855_28875 = state_28851__$1;
(statearr_28855_28875[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28852 === (1))){
var inst_28820 = cljs.core.vec(chs);
var inst_28821 = inst_28820;
var state_28851__$1 = (function (){var statearr_28856 = state_28851;
(statearr_28856[(10)] = inst_28821);

return statearr_28856;
})();
var statearr_28857_28876 = state_28851__$1;
(statearr_28857_28876[(2)] = null);

(statearr_28857_28876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28852 === (4))){
var inst_28821 = (state_28851[(10)]);
var state_28851__$1 = state_28851;
return cljs.core.async.ioc_alts_BANG_(state_28851__$1,(7),inst_28821);
} else {
if((state_val_28852 === (6))){
var inst_28847 = (state_28851[(2)]);
var state_28851__$1 = state_28851;
var statearr_28858_28877 = state_28851__$1;
(statearr_28858_28877[(2)] = inst_28847);

(statearr_28858_28877[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28852 === (3))){
var inst_28849 = (state_28851[(2)]);
var state_28851__$1 = state_28851;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28851__$1,inst_28849);
} else {
if((state_val_28852 === (2))){
var inst_28821 = (state_28851[(10)]);
var inst_28823 = cljs.core.count(inst_28821);
var inst_28824 = (inst_28823 > (0));
var state_28851__$1 = state_28851;
if(cljs.core.truth_(inst_28824)){
var statearr_28860_28878 = state_28851__$1;
(statearr_28860_28878[(1)] = (4));

} else {
var statearr_28861_28879 = state_28851__$1;
(statearr_28861_28879[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28852 === (11))){
var inst_28821 = (state_28851[(10)]);
var inst_28840 = (state_28851[(2)]);
var tmp28859 = inst_28821;
var inst_28821__$1 = tmp28859;
var state_28851__$1 = (function (){var statearr_28862 = state_28851;
(statearr_28862[(11)] = inst_28840);

(statearr_28862[(10)] = inst_28821__$1);

return statearr_28862;
})();
var statearr_28863_28880 = state_28851__$1;
(statearr_28863_28880[(2)] = null);

(statearr_28863_28880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28852 === (9))){
var inst_28831 = (state_28851[(7)]);
var state_28851__$1 = state_28851;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28851__$1,(11),out,inst_28831);
} else {
if((state_val_28852 === (5))){
var inst_28845 = cljs.core.async.close_BANG_(out);
var state_28851__$1 = state_28851;
var statearr_28864_28881 = state_28851__$1;
(statearr_28864_28881[(2)] = inst_28845);

(statearr_28864_28881[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28852 === (10))){
var inst_28843 = (state_28851[(2)]);
var state_28851__$1 = state_28851;
var statearr_28865_28882 = state_28851__$1;
(statearr_28865_28882[(2)] = inst_28843);

(statearr_28865_28882[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28852 === (8))){
var inst_28831 = (state_28851[(7)]);
var inst_28832 = (state_28851[(9)]);
var inst_28830 = (state_28851[(8)]);
var inst_28821 = (state_28851[(10)]);
var inst_28835 = (function (){var cs = inst_28821;
var vec__28826 = inst_28830;
var v = inst_28831;
var c = inst_28832;
return ((function (cs,vec__28826,v,c,inst_28831,inst_28832,inst_28830,inst_28821,state_val_28852,c__27055__auto___28873,out){
return (function (p1__28817_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__28817_SHARP_);
});
;})(cs,vec__28826,v,c,inst_28831,inst_28832,inst_28830,inst_28821,state_val_28852,c__27055__auto___28873,out))
})();
var inst_28836 = cljs.core.filterv(inst_28835,inst_28821);
var inst_28821__$1 = inst_28836;
var state_28851__$1 = (function (){var statearr_28866 = state_28851;
(statearr_28866[(10)] = inst_28821__$1);

return statearr_28866;
})();
var statearr_28867_28883 = state_28851__$1;
(statearr_28867_28883[(2)] = null);

(statearr_28867_28883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__27055__auto___28873,out))
;
return ((function (switch__26823__auto__,c__27055__auto___28873,out){
return (function() {
var cljs$core$async$state_machine__26824__auto__ = null;
var cljs$core$async$state_machine__26824__auto____0 = (function (){
var statearr_28868 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28868[(0)] = cljs$core$async$state_machine__26824__auto__);

(statearr_28868[(1)] = (1));

return statearr_28868;
});
var cljs$core$async$state_machine__26824__auto____1 = (function (state_28851){
while(true){
var ret_value__26825__auto__ = (function (){try{while(true){
var result__26826__auto__ = switch__26823__auto__(state_28851);
if(cljs.core.keyword_identical_QMARK_(result__26826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26826__auto__;
}
break;
}
}catch (e28869){if((e28869 instanceof Object)){
var ex__26827__auto__ = e28869;
var statearr_28870_28884 = state_28851;
(statearr_28870_28884[(5)] = ex__26827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28851);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28869;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28885 = state_28851;
state_28851 = G__28885;
continue;
} else {
return ret_value__26825__auto__;
}
break;
}
});
cljs$core$async$state_machine__26824__auto__ = function(state_28851){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26824__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26824__auto____1.call(this,state_28851);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26824__auto____0;
cljs$core$async$state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26824__auto____1;
return cljs$core$async$state_machine__26824__auto__;
})()
;})(switch__26823__auto__,c__27055__auto___28873,out))
})();
var state__27057__auto__ = (function (){var statearr_28871 = (f__27056__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27056__auto__.cljs$core$IFn$_invoke$arity$0() : f__27056__auto__.call(null));
(statearr_28871[(6)] = c__27055__auto___28873);

return statearr_28871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27057__auto__);
});})(c__27055__auto___28873,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__28887 = arguments.length;
switch (G__28887) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__27055__auto___28932 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27055__auto___28932,out){
return (function (){
var f__27056__auto__ = (function (){var switch__26823__auto__ = ((function (c__27055__auto___28932,out){
return (function (state_28911){
var state_val_28912 = (state_28911[(1)]);
if((state_val_28912 === (7))){
var inst_28893 = (state_28911[(7)]);
var inst_28893__$1 = (state_28911[(2)]);
var inst_28894 = (inst_28893__$1 == null);
var inst_28895 = cljs.core.not(inst_28894);
var state_28911__$1 = (function (){var statearr_28913 = state_28911;
(statearr_28913[(7)] = inst_28893__$1);

return statearr_28913;
})();
if(inst_28895){
var statearr_28914_28933 = state_28911__$1;
(statearr_28914_28933[(1)] = (8));

} else {
var statearr_28915_28934 = state_28911__$1;
(statearr_28915_28934[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28912 === (1))){
var inst_28888 = (0);
var state_28911__$1 = (function (){var statearr_28916 = state_28911;
(statearr_28916[(8)] = inst_28888);

return statearr_28916;
})();
var statearr_28917_28935 = state_28911__$1;
(statearr_28917_28935[(2)] = null);

(statearr_28917_28935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28912 === (4))){
var state_28911__$1 = state_28911;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28911__$1,(7),ch);
} else {
if((state_val_28912 === (6))){
var inst_28906 = (state_28911[(2)]);
var state_28911__$1 = state_28911;
var statearr_28918_28936 = state_28911__$1;
(statearr_28918_28936[(2)] = inst_28906);

(statearr_28918_28936[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28912 === (3))){
var inst_28908 = (state_28911[(2)]);
var inst_28909 = cljs.core.async.close_BANG_(out);
var state_28911__$1 = (function (){var statearr_28919 = state_28911;
(statearr_28919[(9)] = inst_28908);

return statearr_28919;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_28911__$1,inst_28909);
} else {
if((state_val_28912 === (2))){
var inst_28888 = (state_28911[(8)]);
var inst_28890 = (inst_28888 < n);
var state_28911__$1 = state_28911;
if(cljs.core.truth_(inst_28890)){
var statearr_28920_28937 = state_28911__$1;
(statearr_28920_28937[(1)] = (4));

} else {
var statearr_28921_28938 = state_28911__$1;
(statearr_28921_28938[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28912 === (11))){
var inst_28888 = (state_28911[(8)]);
var inst_28898 = (state_28911[(2)]);
var inst_28899 = (inst_28888 + (1));
var inst_28888__$1 = inst_28899;
var state_28911__$1 = (function (){var statearr_28922 = state_28911;
(statearr_28922[(8)] = inst_28888__$1);

(statearr_28922[(10)] = inst_28898);

return statearr_28922;
})();
var statearr_28923_28939 = state_28911__$1;
(statearr_28923_28939[(2)] = null);

(statearr_28923_28939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28912 === (9))){
var state_28911__$1 = state_28911;
var statearr_28924_28940 = state_28911__$1;
(statearr_28924_28940[(2)] = null);

(statearr_28924_28940[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28912 === (5))){
var state_28911__$1 = state_28911;
var statearr_28925_28941 = state_28911__$1;
(statearr_28925_28941[(2)] = null);

(statearr_28925_28941[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28912 === (10))){
var inst_28903 = (state_28911[(2)]);
var state_28911__$1 = state_28911;
var statearr_28926_28942 = state_28911__$1;
(statearr_28926_28942[(2)] = inst_28903);

(statearr_28926_28942[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28912 === (8))){
var inst_28893 = (state_28911[(7)]);
var state_28911__$1 = state_28911;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28911__$1,(11),out,inst_28893);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__27055__auto___28932,out))
;
return ((function (switch__26823__auto__,c__27055__auto___28932,out){
return (function() {
var cljs$core$async$state_machine__26824__auto__ = null;
var cljs$core$async$state_machine__26824__auto____0 = (function (){
var statearr_28927 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28927[(0)] = cljs$core$async$state_machine__26824__auto__);

(statearr_28927[(1)] = (1));

return statearr_28927;
});
var cljs$core$async$state_machine__26824__auto____1 = (function (state_28911){
while(true){
var ret_value__26825__auto__ = (function (){try{while(true){
var result__26826__auto__ = switch__26823__auto__(state_28911);
if(cljs.core.keyword_identical_QMARK_(result__26826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26826__auto__;
}
break;
}
}catch (e28928){if((e28928 instanceof Object)){
var ex__26827__auto__ = e28928;
var statearr_28929_28943 = state_28911;
(statearr_28929_28943[(5)] = ex__26827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28911);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28928;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28944 = state_28911;
state_28911 = G__28944;
continue;
} else {
return ret_value__26825__auto__;
}
break;
}
});
cljs$core$async$state_machine__26824__auto__ = function(state_28911){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26824__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26824__auto____1.call(this,state_28911);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26824__auto____0;
cljs$core$async$state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26824__auto____1;
return cljs$core$async$state_machine__26824__auto__;
})()
;})(switch__26823__auto__,c__27055__auto___28932,out))
})();
var state__27057__auto__ = (function (){var statearr_28930 = (f__27056__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27056__auto__.cljs$core$IFn$_invoke$arity$0() : f__27056__auto__.call(null));
(statearr_28930[(6)] = c__27055__auto___28932);

return statearr_28930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27057__auto__);
});})(c__27055__auto___28932,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28946 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28946 = (function (f,ch,meta28947){
this.f = f;
this.ch = ch;
this.meta28947 = meta28947;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28946.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28948,meta28947__$1){
var self__ = this;
var _28948__$1 = this;
return (new cljs.core.async.t_cljs$core$async28946(self__.f,self__.ch,meta28947__$1));
});

cljs.core.async.t_cljs$core$async28946.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28948){
var self__ = this;
var _28948__$1 = this;
return self__.meta28947;
});

cljs.core.async.t_cljs$core$async28946.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28946.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async28946.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async28946.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28946.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async28949 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28949 = (function (f,ch,meta28947,_,fn1,meta28950){
this.f = f;
this.ch = ch;
this.meta28947 = meta28947;
this._ = _;
this.fn1 = fn1;
this.meta28950 = meta28950;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28949.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28951,meta28950__$1){
var self__ = this;
var _28951__$1 = this;
return (new cljs.core.async.t_cljs$core$async28949(self__.f,self__.ch,self__.meta28947,self__._,self__.fn1,meta28950__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async28949.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28951){
var self__ = this;
var _28951__$1 = this;
return self__.meta28950;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28949.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28949.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28949.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28949.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__28945_SHARP_){
var G__28952 = (((p1__28945_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__28945_SHARP_) : self__.f.call(null,p1__28945_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__28952) : f1.call(null,G__28952));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async28949.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28947","meta28947",1166746928,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async28946","cljs.core.async/t_cljs$core$async28946",1842444898,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta28950","meta28950",1844040286,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28949.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28949.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28949";

cljs.core.async.t_cljs$core$async28949.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async28949");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28949.
 */
cljs.core.async.__GT_t_cljs$core$async28949 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28949(f__$1,ch__$1,meta28947__$1,___$2,fn1__$1,meta28950){
return (new cljs.core.async.t_cljs$core$async28949(f__$1,ch__$1,meta28947__$1,___$2,fn1__$1,meta28950));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async28949(self__.f,self__.ch,self__.meta28947,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3911__auto__ = ret;
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__28953 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__28953) : self__.f.call(null,G__28953));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async28946.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28946.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async28946.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28947","meta28947",1166746928,null)], null);
});

cljs.core.async.t_cljs$core$async28946.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28946.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28946";

cljs.core.async.t_cljs$core$async28946.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async28946");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28946.
 */
cljs.core.async.__GT_t_cljs$core$async28946 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28946(f__$1,ch__$1,meta28947){
return (new cljs.core.async.t_cljs$core$async28946(f__$1,ch__$1,meta28947));
});

}

return (new cljs.core.async.t_cljs$core$async28946(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28954 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28954 = (function (f,ch,meta28955){
this.f = f;
this.ch = ch;
this.meta28955 = meta28955;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28954.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28956,meta28955__$1){
var self__ = this;
var _28956__$1 = this;
return (new cljs.core.async.t_cljs$core$async28954(self__.f,self__.ch,meta28955__$1));
});

cljs.core.async.t_cljs$core$async28954.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28956){
var self__ = this;
var _28956__$1 = this;
return self__.meta28955;
});

cljs.core.async.t_cljs$core$async28954.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28954.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async28954.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28954.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28954.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28954.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async28954.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28955","meta28955",1524007738,null)], null);
});

cljs.core.async.t_cljs$core$async28954.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28954.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28954";

cljs.core.async.t_cljs$core$async28954.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async28954");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28954.
 */
cljs.core.async.__GT_t_cljs$core$async28954 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async28954(f__$1,ch__$1,meta28955){
return (new cljs.core.async.t_cljs$core$async28954(f__$1,ch__$1,meta28955));
});

}

return (new cljs.core.async.t_cljs$core$async28954(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async28957 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28957 = (function (p,ch,meta28958){
this.p = p;
this.ch = ch;
this.meta28958 = meta28958;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28957.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28959,meta28958__$1){
var self__ = this;
var _28959__$1 = this;
return (new cljs.core.async.t_cljs$core$async28957(self__.p,self__.ch,meta28958__$1));
});

cljs.core.async.t_cljs$core$async28957.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28959){
var self__ = this;
var _28959__$1 = this;
return self__.meta28958;
});

cljs.core.async.t_cljs$core$async28957.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28957.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async28957.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async28957.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28957.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28957.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28957.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async28957.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28958","meta28958",1448293279,null)], null);
});

cljs.core.async.t_cljs$core$async28957.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28957.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28957";

cljs.core.async.t_cljs$core$async28957.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"cljs.core.async/t_cljs$core$async28957");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28957.
 */
cljs.core.async.__GT_t_cljs$core$async28957 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async28957(p__$1,ch__$1,meta28958){
return (new cljs.core.async.t_cljs$core$async28957(p__$1,ch__$1,meta28958));
});

}

return (new cljs.core.async.t_cljs$core$async28957(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__28961 = arguments.length;
switch (G__28961) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__27055__auto___29001 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27055__auto___29001,out){
return (function (){
var f__27056__auto__ = (function (){var switch__26823__auto__ = ((function (c__27055__auto___29001,out){
return (function (state_28982){
var state_val_28983 = (state_28982[(1)]);
if((state_val_28983 === (7))){
var inst_28978 = (state_28982[(2)]);
var state_28982__$1 = state_28982;
var statearr_28984_29002 = state_28982__$1;
(statearr_28984_29002[(2)] = inst_28978);

(statearr_28984_29002[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (1))){
var state_28982__$1 = state_28982;
var statearr_28985_29003 = state_28982__$1;
(statearr_28985_29003[(2)] = null);

(statearr_28985_29003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (4))){
var inst_28964 = (state_28982[(7)]);
var inst_28964__$1 = (state_28982[(2)]);
var inst_28965 = (inst_28964__$1 == null);
var state_28982__$1 = (function (){var statearr_28986 = state_28982;
(statearr_28986[(7)] = inst_28964__$1);

return statearr_28986;
})();
if(cljs.core.truth_(inst_28965)){
var statearr_28987_29004 = state_28982__$1;
(statearr_28987_29004[(1)] = (5));

} else {
var statearr_28988_29005 = state_28982__$1;
(statearr_28988_29005[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (6))){
var inst_28964 = (state_28982[(7)]);
var inst_28969 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_28964) : p.call(null,inst_28964));
var state_28982__$1 = state_28982;
if(cljs.core.truth_(inst_28969)){
var statearr_28989_29006 = state_28982__$1;
(statearr_28989_29006[(1)] = (8));

} else {
var statearr_28990_29007 = state_28982__$1;
(statearr_28990_29007[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (3))){
var inst_28980 = (state_28982[(2)]);
var state_28982__$1 = state_28982;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28982__$1,inst_28980);
} else {
if((state_val_28983 === (2))){
var state_28982__$1 = state_28982;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28982__$1,(4),ch);
} else {
if((state_val_28983 === (11))){
var inst_28972 = (state_28982[(2)]);
var state_28982__$1 = state_28982;
var statearr_28991_29008 = state_28982__$1;
(statearr_28991_29008[(2)] = inst_28972);

(statearr_28991_29008[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (9))){
var state_28982__$1 = state_28982;
var statearr_28992_29009 = state_28982__$1;
(statearr_28992_29009[(2)] = null);

(statearr_28992_29009[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (5))){
var inst_28967 = cljs.core.async.close_BANG_(out);
var state_28982__$1 = state_28982;
var statearr_28993_29010 = state_28982__$1;
(statearr_28993_29010[(2)] = inst_28967);

(statearr_28993_29010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (10))){
var inst_28975 = (state_28982[(2)]);
var state_28982__$1 = (function (){var statearr_28994 = state_28982;
(statearr_28994[(8)] = inst_28975);

return statearr_28994;
})();
var statearr_28995_29011 = state_28982__$1;
(statearr_28995_29011[(2)] = null);

(statearr_28995_29011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28983 === (8))){
var inst_28964 = (state_28982[(7)]);
var state_28982__$1 = state_28982;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28982__$1,(11),out,inst_28964);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__27055__auto___29001,out))
;
return ((function (switch__26823__auto__,c__27055__auto___29001,out){
return (function() {
var cljs$core$async$state_machine__26824__auto__ = null;
var cljs$core$async$state_machine__26824__auto____0 = (function (){
var statearr_28996 = [null,null,null,null,null,null,null,null,null];
(statearr_28996[(0)] = cljs$core$async$state_machine__26824__auto__);

(statearr_28996[(1)] = (1));

return statearr_28996;
});
var cljs$core$async$state_machine__26824__auto____1 = (function (state_28982){
while(true){
var ret_value__26825__auto__ = (function (){try{while(true){
var result__26826__auto__ = switch__26823__auto__(state_28982);
if(cljs.core.keyword_identical_QMARK_(result__26826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26826__auto__;
}
break;
}
}catch (e28997){if((e28997 instanceof Object)){
var ex__26827__auto__ = e28997;
var statearr_28998_29012 = state_28982;
(statearr_28998_29012[(5)] = ex__26827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_28982);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28997;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29013 = state_28982;
state_28982 = G__29013;
continue;
} else {
return ret_value__26825__auto__;
}
break;
}
});
cljs$core$async$state_machine__26824__auto__ = function(state_28982){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26824__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26824__auto____1.call(this,state_28982);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26824__auto____0;
cljs$core$async$state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26824__auto____1;
return cljs$core$async$state_machine__26824__auto__;
})()
;})(switch__26823__auto__,c__27055__auto___29001,out))
})();
var state__27057__auto__ = (function (){var statearr_28999 = (f__27056__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27056__auto__.cljs$core$IFn$_invoke$arity$0() : f__27056__auto__.call(null));
(statearr_28999[(6)] = c__27055__auto___29001);

return statearr_28999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27057__auto__);
});})(c__27055__auto___29001,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__29015 = arguments.length;
switch (G__29015) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__27055__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27055__auto__){
return (function (){
var f__27056__auto__ = (function (){var switch__26823__auto__ = ((function (c__27055__auto__){
return (function (state_29078){
var state_val_29079 = (state_29078[(1)]);
if((state_val_29079 === (7))){
var inst_29074 = (state_29078[(2)]);
var state_29078__$1 = state_29078;
var statearr_29080_29118 = state_29078__$1;
(statearr_29080_29118[(2)] = inst_29074);

(statearr_29080_29118[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29079 === (20))){
var inst_29044 = (state_29078[(7)]);
var inst_29055 = (state_29078[(2)]);
var inst_29056 = cljs.core.next(inst_29044);
var inst_29030 = inst_29056;
var inst_29031 = null;
var inst_29032 = (0);
var inst_29033 = (0);
var state_29078__$1 = (function (){var statearr_29081 = state_29078;
(statearr_29081[(8)] = inst_29030);

(statearr_29081[(9)] = inst_29031);

(statearr_29081[(10)] = inst_29032);

(statearr_29081[(11)] = inst_29055);

(statearr_29081[(12)] = inst_29033);

return statearr_29081;
})();
var statearr_29082_29119 = state_29078__$1;
(statearr_29082_29119[(2)] = null);

(statearr_29082_29119[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29079 === (1))){
var state_29078__$1 = state_29078;
var statearr_29083_29120 = state_29078__$1;
(statearr_29083_29120[(2)] = null);

(statearr_29083_29120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29079 === (4))){
var inst_29019 = (state_29078[(13)]);
var inst_29019__$1 = (state_29078[(2)]);
var inst_29020 = (inst_29019__$1 == null);
var state_29078__$1 = (function (){var statearr_29084 = state_29078;
(statearr_29084[(13)] = inst_29019__$1);

return statearr_29084;
})();
if(cljs.core.truth_(inst_29020)){
var statearr_29085_29121 = state_29078__$1;
(statearr_29085_29121[(1)] = (5));

} else {
var statearr_29086_29122 = state_29078__$1;
(statearr_29086_29122[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29079 === (15))){
var state_29078__$1 = state_29078;
var statearr_29090_29123 = state_29078__$1;
(statearr_29090_29123[(2)] = null);

(statearr_29090_29123[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29079 === (21))){
var state_29078__$1 = state_29078;
var statearr_29091_29124 = state_29078__$1;
(statearr_29091_29124[(2)] = null);

(statearr_29091_29124[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29079 === (13))){
var inst_29030 = (state_29078[(8)]);
var inst_29031 = (state_29078[(9)]);
var inst_29032 = (state_29078[(10)]);
var inst_29033 = (state_29078[(12)]);
var inst_29040 = (state_29078[(2)]);
var inst_29041 = (inst_29033 + (1));
var tmp29087 = inst_29030;
var tmp29088 = inst_29031;
var tmp29089 = inst_29032;
var inst_29030__$1 = tmp29087;
var inst_29031__$1 = tmp29088;
var inst_29032__$1 = tmp29089;
var inst_29033__$1 = inst_29041;
var state_29078__$1 = (function (){var statearr_29092 = state_29078;
(statearr_29092[(8)] = inst_29030__$1);

(statearr_29092[(9)] = inst_29031__$1);

(statearr_29092[(14)] = inst_29040);

(statearr_29092[(10)] = inst_29032__$1);

(statearr_29092[(12)] = inst_29033__$1);

return statearr_29092;
})();
var statearr_29093_29125 = state_29078__$1;
(statearr_29093_29125[(2)] = null);

(statearr_29093_29125[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29079 === (22))){
var state_29078__$1 = state_29078;
var statearr_29094_29126 = state_29078__$1;
(statearr_29094_29126[(2)] = null);

(statearr_29094_29126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29079 === (6))){
var inst_29019 = (state_29078[(13)]);
var inst_29028 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_29019) : f.call(null,inst_29019));
var inst_29029 = cljs.core.seq(inst_29028);
var inst_29030 = inst_29029;
var inst_29031 = null;
var inst_29032 = (0);
var inst_29033 = (0);
var state_29078__$1 = (function (){var statearr_29095 = state_29078;
(statearr_29095[(8)] = inst_29030);

(statearr_29095[(9)] = inst_29031);

(statearr_29095[(10)] = inst_29032);

(statearr_29095[(12)] = inst_29033);

return statearr_29095;
})();
var statearr_29096_29127 = state_29078__$1;
(statearr_29096_29127[(2)] = null);

(statearr_29096_29127[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29079 === (17))){
var inst_29044 = (state_29078[(7)]);
var inst_29048 = cljs.core.chunk_first(inst_29044);
var inst_29049 = cljs.core.chunk_rest(inst_29044);
var inst_29050 = cljs.core.count(inst_29048);
var inst_29030 = inst_29049;
var inst_29031 = inst_29048;
var inst_29032 = inst_29050;
var inst_29033 = (0);
var state_29078__$1 = (function (){var statearr_29097 = state_29078;
(statearr_29097[(8)] = inst_29030);

(statearr_29097[(9)] = inst_29031);

(statearr_29097[(10)] = inst_29032);

(statearr_29097[(12)] = inst_29033);

return statearr_29097;
})();
var statearr_29098_29128 = state_29078__$1;
(statearr_29098_29128[(2)] = null);

(statearr_29098_29128[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29079 === (3))){
var inst_29076 = (state_29078[(2)]);
var state_29078__$1 = state_29078;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29078__$1,inst_29076);
} else {
if((state_val_29079 === (12))){
var inst_29064 = (state_29078[(2)]);
var state_29078__$1 = state_29078;
var statearr_29099_29129 = state_29078__$1;
(statearr_29099_29129[(2)] = inst_29064);

(statearr_29099_29129[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29079 === (2))){
var state_29078__$1 = state_29078;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29078__$1,(4),in$);
} else {
if((state_val_29079 === (23))){
var inst_29072 = (state_29078[(2)]);
var state_29078__$1 = state_29078;
var statearr_29100_29130 = state_29078__$1;
(statearr_29100_29130[(2)] = inst_29072);

(statearr_29100_29130[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29079 === (19))){
var inst_29059 = (state_29078[(2)]);
var state_29078__$1 = state_29078;
var statearr_29101_29131 = state_29078__$1;
(statearr_29101_29131[(2)] = inst_29059);

(statearr_29101_29131[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29079 === (11))){
var inst_29030 = (state_29078[(8)]);
var inst_29044 = (state_29078[(7)]);
var inst_29044__$1 = cljs.core.seq(inst_29030);
var state_29078__$1 = (function (){var statearr_29102 = state_29078;
(statearr_29102[(7)] = inst_29044__$1);

return statearr_29102;
})();
if(inst_29044__$1){
var statearr_29103_29132 = state_29078__$1;
(statearr_29103_29132[(1)] = (14));

} else {
var statearr_29104_29133 = state_29078__$1;
(statearr_29104_29133[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29079 === (9))){
var inst_29066 = (state_29078[(2)]);
var inst_29067 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_29078__$1 = (function (){var statearr_29105 = state_29078;
(statearr_29105[(15)] = inst_29066);

return statearr_29105;
})();
if(cljs.core.truth_(inst_29067)){
var statearr_29106_29134 = state_29078__$1;
(statearr_29106_29134[(1)] = (21));

} else {
var statearr_29107_29135 = state_29078__$1;
(statearr_29107_29135[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29079 === (5))){
var inst_29022 = cljs.core.async.close_BANG_(out);
var state_29078__$1 = state_29078;
var statearr_29108_29136 = state_29078__$1;
(statearr_29108_29136[(2)] = inst_29022);

(statearr_29108_29136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29079 === (14))){
var inst_29044 = (state_29078[(7)]);
var inst_29046 = cljs.core.chunked_seq_QMARK_(inst_29044);
var state_29078__$1 = state_29078;
if(inst_29046){
var statearr_29109_29137 = state_29078__$1;
(statearr_29109_29137[(1)] = (17));

} else {
var statearr_29110_29138 = state_29078__$1;
(statearr_29110_29138[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29079 === (16))){
var inst_29062 = (state_29078[(2)]);
var state_29078__$1 = state_29078;
var statearr_29111_29139 = state_29078__$1;
(statearr_29111_29139[(2)] = inst_29062);

(statearr_29111_29139[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29079 === (10))){
var inst_29031 = (state_29078[(9)]);
var inst_29033 = (state_29078[(12)]);
var inst_29038 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_29031,inst_29033);
var state_29078__$1 = state_29078;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29078__$1,(13),out,inst_29038);
} else {
if((state_val_29079 === (18))){
var inst_29044 = (state_29078[(7)]);
var inst_29053 = cljs.core.first(inst_29044);
var state_29078__$1 = state_29078;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29078__$1,(20),out,inst_29053);
} else {
if((state_val_29079 === (8))){
var inst_29032 = (state_29078[(10)]);
var inst_29033 = (state_29078[(12)]);
var inst_29035 = (inst_29033 < inst_29032);
var inst_29036 = inst_29035;
var state_29078__$1 = state_29078;
if(cljs.core.truth_(inst_29036)){
var statearr_29112_29140 = state_29078__$1;
(statearr_29112_29140[(1)] = (10));

} else {
var statearr_29113_29141 = state_29078__$1;
(statearr_29113_29141[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27055__auto__))
;
return ((function (switch__26823__auto__,c__27055__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__26824__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__26824__auto____0 = (function (){
var statearr_29114 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29114[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26824__auto__);

(statearr_29114[(1)] = (1));

return statearr_29114;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26824__auto____1 = (function (state_29078){
while(true){
var ret_value__26825__auto__ = (function (){try{while(true){
var result__26826__auto__ = switch__26823__auto__(state_29078);
if(cljs.core.keyword_identical_QMARK_(result__26826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26826__auto__;
}
break;
}
}catch (e29115){if((e29115 instanceof Object)){
var ex__26827__auto__ = e29115;
var statearr_29116_29142 = state_29078;
(statearr_29116_29142[(5)] = ex__26827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29078);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29115;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29143 = state_29078;
state_29078 = G__29143;
continue;
} else {
return ret_value__26825__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26824__auto__ = function(state_29078){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26824__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26824__auto____1.call(this,state_29078);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26824__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26824__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26824__auto__;
})()
;})(switch__26823__auto__,c__27055__auto__))
})();
var state__27057__auto__ = (function (){var statearr_29117 = (f__27056__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27056__auto__.cljs$core$IFn$_invoke$arity$0() : f__27056__auto__.call(null));
(statearr_29117[(6)] = c__27055__auto__);

return statearr_29117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27057__auto__);
});})(c__27055__auto__))
);

return c__27055__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__29145 = arguments.length;
switch (G__29145) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__29148 = arguments.length;
switch (G__29148) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__29151 = arguments.length;
switch (G__29151) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__27055__auto___29198 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27055__auto___29198,out){
return (function (){
var f__27056__auto__ = (function (){var switch__26823__auto__ = ((function (c__27055__auto___29198,out){
return (function (state_29175){
var state_val_29176 = (state_29175[(1)]);
if((state_val_29176 === (7))){
var inst_29170 = (state_29175[(2)]);
var state_29175__$1 = state_29175;
var statearr_29177_29199 = state_29175__$1;
(statearr_29177_29199[(2)] = inst_29170);

(statearr_29177_29199[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29176 === (1))){
var inst_29152 = null;
var state_29175__$1 = (function (){var statearr_29178 = state_29175;
(statearr_29178[(7)] = inst_29152);

return statearr_29178;
})();
var statearr_29179_29200 = state_29175__$1;
(statearr_29179_29200[(2)] = null);

(statearr_29179_29200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29176 === (4))){
var inst_29155 = (state_29175[(8)]);
var inst_29155__$1 = (state_29175[(2)]);
var inst_29156 = (inst_29155__$1 == null);
var inst_29157 = cljs.core.not(inst_29156);
var state_29175__$1 = (function (){var statearr_29180 = state_29175;
(statearr_29180[(8)] = inst_29155__$1);

return statearr_29180;
})();
if(inst_29157){
var statearr_29181_29201 = state_29175__$1;
(statearr_29181_29201[(1)] = (5));

} else {
var statearr_29182_29202 = state_29175__$1;
(statearr_29182_29202[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29176 === (6))){
var state_29175__$1 = state_29175;
var statearr_29183_29203 = state_29175__$1;
(statearr_29183_29203[(2)] = null);

(statearr_29183_29203[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29176 === (3))){
var inst_29172 = (state_29175[(2)]);
var inst_29173 = cljs.core.async.close_BANG_(out);
var state_29175__$1 = (function (){var statearr_29184 = state_29175;
(statearr_29184[(9)] = inst_29172);

return statearr_29184;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29175__$1,inst_29173);
} else {
if((state_val_29176 === (2))){
var state_29175__$1 = state_29175;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29175__$1,(4),ch);
} else {
if((state_val_29176 === (11))){
var inst_29155 = (state_29175[(8)]);
var inst_29164 = (state_29175[(2)]);
var inst_29152 = inst_29155;
var state_29175__$1 = (function (){var statearr_29185 = state_29175;
(statearr_29185[(7)] = inst_29152);

(statearr_29185[(10)] = inst_29164);

return statearr_29185;
})();
var statearr_29186_29204 = state_29175__$1;
(statearr_29186_29204[(2)] = null);

(statearr_29186_29204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29176 === (9))){
var inst_29155 = (state_29175[(8)]);
var state_29175__$1 = state_29175;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29175__$1,(11),out,inst_29155);
} else {
if((state_val_29176 === (5))){
var inst_29155 = (state_29175[(8)]);
var inst_29152 = (state_29175[(7)]);
var inst_29159 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29155,inst_29152);
var state_29175__$1 = state_29175;
if(inst_29159){
var statearr_29188_29205 = state_29175__$1;
(statearr_29188_29205[(1)] = (8));

} else {
var statearr_29189_29206 = state_29175__$1;
(statearr_29189_29206[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29176 === (10))){
var inst_29167 = (state_29175[(2)]);
var state_29175__$1 = state_29175;
var statearr_29190_29207 = state_29175__$1;
(statearr_29190_29207[(2)] = inst_29167);

(statearr_29190_29207[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29176 === (8))){
var inst_29152 = (state_29175[(7)]);
var tmp29187 = inst_29152;
var inst_29152__$1 = tmp29187;
var state_29175__$1 = (function (){var statearr_29191 = state_29175;
(statearr_29191[(7)] = inst_29152__$1);

return statearr_29191;
})();
var statearr_29192_29208 = state_29175__$1;
(statearr_29192_29208[(2)] = null);

(statearr_29192_29208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__27055__auto___29198,out))
;
return ((function (switch__26823__auto__,c__27055__auto___29198,out){
return (function() {
var cljs$core$async$state_machine__26824__auto__ = null;
var cljs$core$async$state_machine__26824__auto____0 = (function (){
var statearr_29193 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29193[(0)] = cljs$core$async$state_machine__26824__auto__);

(statearr_29193[(1)] = (1));

return statearr_29193;
});
var cljs$core$async$state_machine__26824__auto____1 = (function (state_29175){
while(true){
var ret_value__26825__auto__ = (function (){try{while(true){
var result__26826__auto__ = switch__26823__auto__(state_29175);
if(cljs.core.keyword_identical_QMARK_(result__26826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26826__auto__;
}
break;
}
}catch (e29194){if((e29194 instanceof Object)){
var ex__26827__auto__ = e29194;
var statearr_29195_29209 = state_29175;
(statearr_29195_29209[(5)] = ex__26827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29175);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29194;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29210 = state_29175;
state_29175 = G__29210;
continue;
} else {
return ret_value__26825__auto__;
}
break;
}
});
cljs$core$async$state_machine__26824__auto__ = function(state_29175){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26824__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26824__auto____1.call(this,state_29175);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26824__auto____0;
cljs$core$async$state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26824__auto____1;
return cljs$core$async$state_machine__26824__auto__;
})()
;})(switch__26823__auto__,c__27055__auto___29198,out))
})();
var state__27057__auto__ = (function (){var statearr_29196 = (f__27056__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27056__auto__.cljs$core$IFn$_invoke$arity$0() : f__27056__auto__.call(null));
(statearr_29196[(6)] = c__27055__auto___29198);

return statearr_29196;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27057__auto__);
});})(c__27055__auto___29198,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__29212 = arguments.length;
switch (G__29212) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__27055__auto___29278 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27055__auto___29278,out){
return (function (){
var f__27056__auto__ = (function (){var switch__26823__auto__ = ((function (c__27055__auto___29278,out){
return (function (state_29250){
var state_val_29251 = (state_29250[(1)]);
if((state_val_29251 === (7))){
var inst_29246 = (state_29250[(2)]);
var state_29250__$1 = state_29250;
var statearr_29252_29279 = state_29250__$1;
(statearr_29252_29279[(2)] = inst_29246);

(statearr_29252_29279[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29251 === (1))){
var inst_29213 = (new Array(n));
var inst_29214 = inst_29213;
var inst_29215 = (0);
var state_29250__$1 = (function (){var statearr_29253 = state_29250;
(statearr_29253[(7)] = inst_29214);

(statearr_29253[(8)] = inst_29215);

return statearr_29253;
})();
var statearr_29254_29280 = state_29250__$1;
(statearr_29254_29280[(2)] = null);

(statearr_29254_29280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29251 === (4))){
var inst_29218 = (state_29250[(9)]);
var inst_29218__$1 = (state_29250[(2)]);
var inst_29219 = (inst_29218__$1 == null);
var inst_29220 = cljs.core.not(inst_29219);
var state_29250__$1 = (function (){var statearr_29255 = state_29250;
(statearr_29255[(9)] = inst_29218__$1);

return statearr_29255;
})();
if(inst_29220){
var statearr_29256_29281 = state_29250__$1;
(statearr_29256_29281[(1)] = (5));

} else {
var statearr_29257_29282 = state_29250__$1;
(statearr_29257_29282[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29251 === (15))){
var inst_29240 = (state_29250[(2)]);
var state_29250__$1 = state_29250;
var statearr_29258_29283 = state_29250__$1;
(statearr_29258_29283[(2)] = inst_29240);

(statearr_29258_29283[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29251 === (13))){
var state_29250__$1 = state_29250;
var statearr_29259_29284 = state_29250__$1;
(statearr_29259_29284[(2)] = null);

(statearr_29259_29284[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29251 === (6))){
var inst_29215 = (state_29250[(8)]);
var inst_29236 = (inst_29215 > (0));
var state_29250__$1 = state_29250;
if(cljs.core.truth_(inst_29236)){
var statearr_29260_29285 = state_29250__$1;
(statearr_29260_29285[(1)] = (12));

} else {
var statearr_29261_29286 = state_29250__$1;
(statearr_29261_29286[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29251 === (3))){
var inst_29248 = (state_29250[(2)]);
var state_29250__$1 = state_29250;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29250__$1,inst_29248);
} else {
if((state_val_29251 === (12))){
var inst_29214 = (state_29250[(7)]);
var inst_29238 = cljs.core.vec(inst_29214);
var state_29250__$1 = state_29250;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29250__$1,(15),out,inst_29238);
} else {
if((state_val_29251 === (2))){
var state_29250__$1 = state_29250;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29250__$1,(4),ch);
} else {
if((state_val_29251 === (11))){
var inst_29230 = (state_29250[(2)]);
var inst_29231 = (new Array(n));
var inst_29214 = inst_29231;
var inst_29215 = (0);
var state_29250__$1 = (function (){var statearr_29262 = state_29250;
(statearr_29262[(10)] = inst_29230);

(statearr_29262[(7)] = inst_29214);

(statearr_29262[(8)] = inst_29215);

return statearr_29262;
})();
var statearr_29263_29287 = state_29250__$1;
(statearr_29263_29287[(2)] = null);

(statearr_29263_29287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29251 === (9))){
var inst_29214 = (state_29250[(7)]);
var inst_29228 = cljs.core.vec(inst_29214);
var state_29250__$1 = state_29250;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29250__$1,(11),out,inst_29228);
} else {
if((state_val_29251 === (5))){
var inst_29223 = (state_29250[(11)]);
var inst_29218 = (state_29250[(9)]);
var inst_29214 = (state_29250[(7)]);
var inst_29215 = (state_29250[(8)]);
var inst_29222 = (inst_29214[inst_29215] = inst_29218);
var inst_29223__$1 = (inst_29215 + (1));
var inst_29224 = (inst_29223__$1 < n);
var state_29250__$1 = (function (){var statearr_29264 = state_29250;
(statearr_29264[(11)] = inst_29223__$1);

(statearr_29264[(12)] = inst_29222);

return statearr_29264;
})();
if(cljs.core.truth_(inst_29224)){
var statearr_29265_29288 = state_29250__$1;
(statearr_29265_29288[(1)] = (8));

} else {
var statearr_29266_29289 = state_29250__$1;
(statearr_29266_29289[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29251 === (14))){
var inst_29243 = (state_29250[(2)]);
var inst_29244 = cljs.core.async.close_BANG_(out);
var state_29250__$1 = (function (){var statearr_29268 = state_29250;
(statearr_29268[(13)] = inst_29243);

return statearr_29268;
})();
var statearr_29269_29290 = state_29250__$1;
(statearr_29269_29290[(2)] = inst_29244);

(statearr_29269_29290[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29251 === (10))){
var inst_29234 = (state_29250[(2)]);
var state_29250__$1 = state_29250;
var statearr_29270_29291 = state_29250__$1;
(statearr_29270_29291[(2)] = inst_29234);

(statearr_29270_29291[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29251 === (8))){
var inst_29223 = (state_29250[(11)]);
var inst_29214 = (state_29250[(7)]);
var tmp29267 = inst_29214;
var inst_29214__$1 = tmp29267;
var inst_29215 = inst_29223;
var state_29250__$1 = (function (){var statearr_29271 = state_29250;
(statearr_29271[(7)] = inst_29214__$1);

(statearr_29271[(8)] = inst_29215);

return statearr_29271;
})();
var statearr_29272_29292 = state_29250__$1;
(statearr_29272_29292[(2)] = null);

(statearr_29272_29292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27055__auto___29278,out))
;
return ((function (switch__26823__auto__,c__27055__auto___29278,out){
return (function() {
var cljs$core$async$state_machine__26824__auto__ = null;
var cljs$core$async$state_machine__26824__auto____0 = (function (){
var statearr_29273 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29273[(0)] = cljs$core$async$state_machine__26824__auto__);

(statearr_29273[(1)] = (1));

return statearr_29273;
});
var cljs$core$async$state_machine__26824__auto____1 = (function (state_29250){
while(true){
var ret_value__26825__auto__ = (function (){try{while(true){
var result__26826__auto__ = switch__26823__auto__(state_29250);
if(cljs.core.keyword_identical_QMARK_(result__26826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26826__auto__;
}
break;
}
}catch (e29274){if((e29274 instanceof Object)){
var ex__26827__auto__ = e29274;
var statearr_29275_29293 = state_29250;
(statearr_29275_29293[(5)] = ex__26827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29250);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29274;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29294 = state_29250;
state_29250 = G__29294;
continue;
} else {
return ret_value__26825__auto__;
}
break;
}
});
cljs$core$async$state_machine__26824__auto__ = function(state_29250){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26824__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26824__auto____1.call(this,state_29250);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26824__auto____0;
cljs$core$async$state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26824__auto____1;
return cljs$core$async$state_machine__26824__auto__;
})()
;})(switch__26823__auto__,c__27055__auto___29278,out))
})();
var state__27057__auto__ = (function (){var statearr_29276 = (f__27056__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27056__auto__.cljs$core$IFn$_invoke$arity$0() : f__27056__auto__.call(null));
(statearr_29276[(6)] = c__27055__auto___29278);

return statearr_29276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27057__auto__);
});})(c__27055__auto___29278,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__29296 = arguments.length;
switch (G__29296) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__27055__auto___29366 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27055__auto___29366,out){
return (function (){
var f__27056__auto__ = (function (){var switch__26823__auto__ = ((function (c__27055__auto___29366,out){
return (function (state_29338){
var state_val_29339 = (state_29338[(1)]);
if((state_val_29339 === (7))){
var inst_29334 = (state_29338[(2)]);
var state_29338__$1 = state_29338;
var statearr_29340_29367 = state_29338__$1;
(statearr_29340_29367[(2)] = inst_29334);

(statearr_29340_29367[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29339 === (1))){
var inst_29297 = [];
var inst_29298 = inst_29297;
var inst_29299 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29338__$1 = (function (){var statearr_29341 = state_29338;
(statearr_29341[(7)] = inst_29299);

(statearr_29341[(8)] = inst_29298);

return statearr_29341;
})();
var statearr_29342_29368 = state_29338__$1;
(statearr_29342_29368[(2)] = null);

(statearr_29342_29368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29339 === (4))){
var inst_29302 = (state_29338[(9)]);
var inst_29302__$1 = (state_29338[(2)]);
var inst_29303 = (inst_29302__$1 == null);
var inst_29304 = cljs.core.not(inst_29303);
var state_29338__$1 = (function (){var statearr_29343 = state_29338;
(statearr_29343[(9)] = inst_29302__$1);

return statearr_29343;
})();
if(inst_29304){
var statearr_29344_29369 = state_29338__$1;
(statearr_29344_29369[(1)] = (5));

} else {
var statearr_29345_29370 = state_29338__$1;
(statearr_29345_29370[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29339 === (15))){
var inst_29328 = (state_29338[(2)]);
var state_29338__$1 = state_29338;
var statearr_29346_29371 = state_29338__$1;
(statearr_29346_29371[(2)] = inst_29328);

(statearr_29346_29371[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29339 === (13))){
var state_29338__$1 = state_29338;
var statearr_29347_29372 = state_29338__$1;
(statearr_29347_29372[(2)] = null);

(statearr_29347_29372[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29339 === (6))){
var inst_29298 = (state_29338[(8)]);
var inst_29323 = inst_29298.length;
var inst_29324 = (inst_29323 > (0));
var state_29338__$1 = state_29338;
if(cljs.core.truth_(inst_29324)){
var statearr_29348_29373 = state_29338__$1;
(statearr_29348_29373[(1)] = (12));

} else {
var statearr_29349_29374 = state_29338__$1;
(statearr_29349_29374[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29339 === (3))){
var inst_29336 = (state_29338[(2)]);
var state_29338__$1 = state_29338;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29338__$1,inst_29336);
} else {
if((state_val_29339 === (12))){
var inst_29298 = (state_29338[(8)]);
var inst_29326 = cljs.core.vec(inst_29298);
var state_29338__$1 = state_29338;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29338__$1,(15),out,inst_29326);
} else {
if((state_val_29339 === (2))){
var state_29338__$1 = state_29338;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29338__$1,(4),ch);
} else {
if((state_val_29339 === (11))){
var inst_29306 = (state_29338[(10)]);
var inst_29302 = (state_29338[(9)]);
var inst_29316 = (state_29338[(2)]);
var inst_29317 = [];
var inst_29318 = inst_29317.push(inst_29302);
var inst_29298 = inst_29317;
var inst_29299 = inst_29306;
var state_29338__$1 = (function (){var statearr_29350 = state_29338;
(statearr_29350[(11)] = inst_29318);

(statearr_29350[(7)] = inst_29299);

(statearr_29350[(12)] = inst_29316);

(statearr_29350[(8)] = inst_29298);

return statearr_29350;
})();
var statearr_29351_29375 = state_29338__$1;
(statearr_29351_29375[(2)] = null);

(statearr_29351_29375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29339 === (9))){
var inst_29298 = (state_29338[(8)]);
var inst_29314 = cljs.core.vec(inst_29298);
var state_29338__$1 = state_29338;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29338__$1,(11),out,inst_29314);
} else {
if((state_val_29339 === (5))){
var inst_29306 = (state_29338[(10)]);
var inst_29302 = (state_29338[(9)]);
var inst_29299 = (state_29338[(7)]);
var inst_29306__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_29302) : f.call(null,inst_29302));
var inst_29307 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29306__$1,inst_29299);
var inst_29308 = cljs.core.keyword_identical_QMARK_(inst_29299,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29309 = ((inst_29307) || (inst_29308));
var state_29338__$1 = (function (){var statearr_29352 = state_29338;
(statearr_29352[(10)] = inst_29306__$1);

return statearr_29352;
})();
if(cljs.core.truth_(inst_29309)){
var statearr_29353_29376 = state_29338__$1;
(statearr_29353_29376[(1)] = (8));

} else {
var statearr_29354_29377 = state_29338__$1;
(statearr_29354_29377[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29339 === (14))){
var inst_29331 = (state_29338[(2)]);
var inst_29332 = cljs.core.async.close_BANG_(out);
var state_29338__$1 = (function (){var statearr_29356 = state_29338;
(statearr_29356[(13)] = inst_29331);

return statearr_29356;
})();
var statearr_29357_29378 = state_29338__$1;
(statearr_29357_29378[(2)] = inst_29332);

(statearr_29357_29378[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29339 === (10))){
var inst_29321 = (state_29338[(2)]);
var state_29338__$1 = state_29338;
var statearr_29358_29379 = state_29338__$1;
(statearr_29358_29379[(2)] = inst_29321);

(statearr_29358_29379[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29339 === (8))){
var inst_29306 = (state_29338[(10)]);
var inst_29302 = (state_29338[(9)]);
var inst_29298 = (state_29338[(8)]);
var inst_29311 = inst_29298.push(inst_29302);
var tmp29355 = inst_29298;
var inst_29298__$1 = tmp29355;
var inst_29299 = inst_29306;
var state_29338__$1 = (function (){var statearr_29359 = state_29338;
(statearr_29359[(14)] = inst_29311);

(statearr_29359[(7)] = inst_29299);

(statearr_29359[(8)] = inst_29298__$1);

return statearr_29359;
})();
var statearr_29360_29380 = state_29338__$1;
(statearr_29360_29380[(2)] = null);

(statearr_29360_29380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27055__auto___29366,out))
;
return ((function (switch__26823__auto__,c__27055__auto___29366,out){
return (function() {
var cljs$core$async$state_machine__26824__auto__ = null;
var cljs$core$async$state_machine__26824__auto____0 = (function (){
var statearr_29361 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29361[(0)] = cljs$core$async$state_machine__26824__auto__);

(statearr_29361[(1)] = (1));

return statearr_29361;
});
var cljs$core$async$state_machine__26824__auto____1 = (function (state_29338){
while(true){
var ret_value__26825__auto__ = (function (){try{while(true){
var result__26826__auto__ = switch__26823__auto__(state_29338);
if(cljs.core.keyword_identical_QMARK_(result__26826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26826__auto__;
}
break;
}
}catch (e29362){if((e29362 instanceof Object)){
var ex__26827__auto__ = e29362;
var statearr_29363_29381 = state_29338;
(statearr_29363_29381[(5)] = ex__26827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29338);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29362;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29382 = state_29338;
state_29338 = G__29382;
continue;
} else {
return ret_value__26825__auto__;
}
break;
}
});
cljs$core$async$state_machine__26824__auto__ = function(state_29338){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26824__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26824__auto____1.call(this,state_29338);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26824__auto____0;
cljs$core$async$state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26824__auto____1;
return cljs$core$async$state_machine__26824__auto__;
})()
;})(switch__26823__auto__,c__27055__auto___29366,out))
})();
var state__27057__auto__ = (function (){var statearr_29364 = (f__27056__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27056__auto__.cljs$core$IFn$_invoke$arity$0() : f__27056__auto__.call(null));
(statearr_29364[(6)] = c__27055__auto___29366);

return statearr_29364;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27057__auto__);
});})(c__27055__auto___29366,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
