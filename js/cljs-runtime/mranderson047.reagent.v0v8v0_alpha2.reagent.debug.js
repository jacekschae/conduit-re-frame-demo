goog.provide('mranderson047.reagent.v0v8v0_alpha2.reagent.debug');
goog.require('cljs.core');
mranderson047.reagent.v0v8v0_alpha2.reagent.debug.has_console = typeof console !== 'undefined';
mranderson047.reagent.v0v8v0_alpha2.reagent.debug.tracking = false;
if(typeof mranderson047.reagent.v0v8v0_alpha2.reagent.debug.warnings !== 'undefined'){
} else {
mranderson047.reagent.v0v8v0_alpha2.reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if(typeof mranderson047.reagent.v0v8v0_alpha2.reagent.debug.track_console !== 'undefined'){
} else {
mranderson047.reagent.v0v8v0_alpha2.reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__25120__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(mranderson047.reagent.v0v8v0_alpha2.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__25120 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25121__i = 0, G__25121__a = new Array(arguments.length -  0);
while (G__25121__i < G__25121__a.length) {G__25121__a[G__25121__i] = arguments[G__25121__i + 0]; ++G__25121__i;}
  args = new cljs.core.IndexedSeq(G__25121__a,0,null);
} 
return G__25120__delegate.call(this,args);};
G__25120.cljs$lang$maxFixedArity = 0;
G__25120.cljs$lang$applyTo = (function (arglist__25122){
var args = cljs.core.seq(arglist__25122);
return G__25120__delegate(args);
});
G__25120.cljs$core$IFn$_invoke$arity$variadic = G__25120__delegate;
return G__25120;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__25123__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(mranderson047.reagent.v0v8v0_alpha2.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__25123 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25124__i = 0, G__25124__a = new Array(arguments.length -  0);
while (G__25124__i < G__25124__a.length) {G__25124__a[G__25124__i] = arguments[G__25124__i + 0]; ++G__25124__i;}
  args = new cljs.core.IndexedSeq(G__25124__a,0,null);
} 
return G__25123__delegate.call(this,args);};
G__25123.cljs$lang$maxFixedArity = 0;
G__25123.cljs$lang$applyTo = (function (arglist__25125){
var args = cljs.core.seq(arglist__25125);
return G__25123__delegate(args);
});
G__25123.cljs$core$IFn$_invoke$arity$variadic = G__25123__delegate;
return G__25123;
})()
;})(o))
;

return o;
})();
}
mranderson047.reagent.v0v8v0_alpha2.reagent.debug.track_warnings = (function mranderson047$reagent$v0v8v0_alpha2$reagent$debug$track_warnings(f){
mranderson047.reagent.v0v8v0_alpha2.reagent.debug.tracking = true;

cljs.core.reset_BANG_(mranderson047.reagent.v0v8v0_alpha2.reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(mranderson047.reagent.v0v8v0_alpha2.reagent.debug.warnings);
cljs.core.reset_BANG_(mranderson047.reagent.v0v8v0_alpha2.reagent.debug.warnings,null);

mranderson047.reagent.v0v8v0_alpha2.reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=mranderson047.reagent.v0v8v0_alpha2.reagent.debug.js.map
