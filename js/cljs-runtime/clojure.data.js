goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__27292){
var vec__27293 = p__27292;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27293,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27293,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__27304 = (clojure.data.diff.cljs$core$IFn$_invoke$arity$2 ? clojure.data.diff.cljs$core$IFn$_invoke$arity$2(va,vb) : clojure.data.diff.call(null,va,vb));
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27304,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27304,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27304,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && (((!((ab == null))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && (((!((a_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && (((!((b_STAR_ == null))) || (!(same))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__27319 = arguments.length;
switch (G__27319) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4006__auto__ = cljs.core.count(a);
var y__4007__auto__ = cljs.core.count(b);
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if(((!((x == null))) && (!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4211__auto__ = (((x == null))?null:x);
var m__4212__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4212__auto__.call(null,x));
} else {
var m__4212__auto____$1 = (clojure.data.equality_partition["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(x) : m__4212__auto____$1.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if(((!((a == null))) && (!((a.clojure$data$Diff$diff_similar$arity$2 == null))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4211__auto__ = (((a == null))?null:a);
var m__4212__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4212__auto__.call(null,a,b));
} else {
var m__4212__auto____$1 = (clojure.data.diff_similar["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(a,b) : m__4212__auto____$1.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__27372_27421 = clojure.data.equality_partition;
var G__27373_27422 = "null";
var G__27374_27423 = ((function (G__27372_27421,G__27373_27422){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__27372_27421,G__27373_27422))
;
goog.object.set(G__27372_27421,G__27373_27422,G__27374_27423);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__27376_27426 = clojure.data.equality_partition;
var G__27377_27427 = "string";
var G__27378_27428 = ((function (G__27376_27426,G__27377_27427){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__27376_27426,G__27377_27427))
;
goog.object.set(G__27376_27426,G__27377_27427,G__27378_27428);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__27381_27429 = clojure.data.equality_partition;
var G__27382_27430 = "number";
var G__27383_27431 = ((function (G__27381_27429,G__27382_27430){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__27381_27429,G__27382_27430))
;
goog.object.set(G__27381_27429,G__27382_27430,G__27383_27431);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__27386_27433 = clojure.data.equality_partition;
var G__27387_27434 = "array";
var G__27388_27435 = ((function (G__27386_27433,G__27387_27434){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});})(G__27386_27433,G__27387_27434))
;
goog.object.set(G__27386_27433,G__27387_27434,G__27388_27435);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__27402_27436 = clojure.data.equality_partition;
var G__27403_27437 = "function";
var G__27404_27438 = ((function (G__27402_27436,G__27403_27437){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__27402_27436,G__27403_27437))
;
goog.object.set(G__27402_27436,G__27403_27437,G__27404_27438);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__27406_27439 = clojure.data.equality_partition;
var G__27407_27440 = "boolean";
var G__27408_27441 = ((function (G__27406_27439,G__27407_27440){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__27406_27439,G__27407_27440))
;
goog.object.set(G__27406_27439,G__27407_27440,G__27408_27441);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__27411_27445 = clojure.data.equality_partition;
var G__27412_27446 = "_";
var G__27413_27447 = ((function (G__27411_27445,G__27412_27446){
return (function (x){
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
} else {
return new cljs.core.Keyword(null,"atom","atom",-397043653);

}
}
}
});})(G__27411_27445,G__27412_27446))
;
goog.object.set(G__27411_27445,G__27412_27446,G__27413_27447);
goog.object.set(clojure.data.Diff,"null",true);

var G__27469_27503 = clojure.data.diff_similar;
var G__27470_27504 = "null";
var G__27471_27505 = ((function (G__27469_27503,G__27470_27504){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__27469_27503,G__27470_27504))
;
goog.object.set(G__27469_27503,G__27470_27504,G__27471_27505);

goog.object.set(clojure.data.Diff,"string",true);

var G__27472_27508 = clojure.data.diff_similar;
var G__27473_27509 = "string";
var G__27474_27510 = ((function (G__27472_27508,G__27473_27509){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__27472_27508,G__27473_27509))
;
goog.object.set(G__27472_27508,G__27473_27509,G__27474_27510);

goog.object.set(clojure.data.Diff,"number",true);

var G__27475_27511 = clojure.data.diff_similar;
var G__27476_27512 = "number";
var G__27477_27513 = ((function (G__27475_27511,G__27476_27512){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__27475_27511,G__27476_27512))
;
goog.object.set(G__27475_27511,G__27476_27512,G__27477_27513);

goog.object.set(clojure.data.Diff,"array",true);

var G__27479_27515 = clojure.data.diff_similar;
var G__27480_27517 = "array";
var G__27481_27518 = ((function (G__27479_27515,G__27480_27517){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__27479_27515,G__27480_27517))
;
goog.object.set(G__27479_27515,G__27480_27517,G__27481_27518);

goog.object.set(clojure.data.Diff,"function",true);

var G__27485_27529 = clojure.data.diff_similar;
var G__27486_27530 = "function";
var G__27487_27531 = ((function (G__27485_27529,G__27486_27530){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__27485_27529,G__27486_27530))
;
goog.object.set(G__27485_27529,G__27486_27530,G__27487_27531);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__27488_27539 = clojure.data.diff_similar;
var G__27489_27540 = "boolean";
var G__27490_27541 = ((function (G__27488_27539,G__27489_27540){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__27488_27539,G__27489_27540))
;
goog.object.set(G__27488_27539,G__27489_27540,G__27490_27541);

goog.object.set(clojure.data.Diff,"_",true);

var G__27492_27563 = clojure.data.diff_similar;
var G__27493_27564 = "_";
var G__27494_27565 = ((function (G__27492_27563,G__27493_27564){
return (function (a,b){
var fexpr__27498 = (function (){var G__27499 = clojure.data.equality_partition(a);
var G__27499__$1 = (((G__27499 instanceof cljs.core.Keyword))?G__27499.fqn:null);
switch (G__27499__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27499__$1)].join('')));

}
})();
return (fexpr__27498.cljs$core$IFn$_invoke$arity$2 ? fexpr__27498.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__27498.call(null,a,b));
});})(G__27492_27563,G__27493_27564))
;
goog.object.set(G__27492_27563,G__27493_27564,G__27494_27565);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});

//# sourceMappingURL=clojure.data.js.map
