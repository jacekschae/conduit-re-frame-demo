goog.provide('mranderson047.garden.v1v3v3.garden.util');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('mranderson047.garden.v1v3v3.garden.types');
goog.require('goog.string');
goog.require('goog.string.format');
/**
 * Formats a string using goog.string.format.
 */
mranderson047.garden.v1v3v3.garden.util.format = (function mranderson047$garden$v1v3v3$garden$util$format(var_args){
var args__4502__auto__ = [];
var len__4499__auto___25117 = arguments.length;
var i__4500__auto___25118 = (0);
while(true){
if((i__4500__auto___25118 < len__4499__auto___25117)){
args__4502__auto__.push((arguments[i__4500__auto___25118]));

var G__25119 = (i__4500__auto___25118 + (1));
i__4500__auto___25118 = G__25119;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return mranderson047.garden.v1v3v3.garden.util.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

mranderson047.garden.v1v3v3.garden.util.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
});

mranderson047.garden.v1v3v3.garden.util.format.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mranderson047.garden.v1v3v3.garden.util.format.cljs$lang$applyTo = (function (seq25115){
var G__25116 = cljs.core.first(seq25115);
var seq25115__$1 = cljs.core.next(seq25115);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25116,seq25115__$1);
});


/**
 * @interface
 */
mranderson047.garden.v1v3v3.garden.util.ToString = function(){};

/**
 * Convert a value into a string.
 */
mranderson047.garden.v1v3v3.garden.util.to_str = (function mranderson047$garden$v1v3v3$garden$util$to_str(this$){
if(((!((this$ == null))) && (!((this$.mranderson047$garden$v1v3v3$garden$util$ToString$to_str$arity$1 == null))))){
return this$.mranderson047$garden$v1v3v3$garden$util$ToString$to_str$arity$1(this$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (mranderson047.garden.v1v3v3.garden.util.to_str[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto__.call(null,this$));
} else {
var m__4212__auto____$1 = (mranderson047.garden.v1v3v3.garden.util.to_str["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("ToString.to-str",this$);
}
}
}
});

cljs.core.Keyword.prototype.mranderson047$garden$v1v3v3$garden$util$ToString$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.mranderson047$garden$v1v3v3$garden$util$ToString$to_str$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.name(this$__$1);
});

goog.object.set(mranderson047.garden.v1v3v3.garden.util.ToString,"_",true);

var G__25126_25132 = mranderson047.garden.v1v3v3.garden.util.to_str;
var G__25127_25133 = "_";
var G__25128_25134 = ((function (G__25126_25132,G__25127_25133){
return (function (this$){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join('');
});})(G__25126_25132,G__25127_25133))
;
goog.object.set(G__25126_25132,G__25127_25133,G__25128_25134);

goog.object.set(mranderson047.garden.v1v3v3.garden.util.ToString,"null",true);

var G__25129_25135 = mranderson047.garden.v1v3v3.garden.util.to_str;
var G__25130_25136 = "null";
var G__25131_25137 = ((function (G__25129_25135,G__25130_25136){
return (function (this$){
return "";
});})(G__25129_25135,G__25130_25136))
;
goog.object.set(G__25129_25135,G__25130_25136,G__25131_25137);
/**
 * Convert a variable number of values into strings.
 */
mranderson047.garden.v1v3v3.garden.util.as_str = (function mranderson047$garden$v1v3v3$garden$util$as_str(var_args){
var args__4502__auto__ = [];
var len__4499__auto___25139 = arguments.length;
var i__4500__auto___25140 = (0);
while(true){
if((i__4500__auto___25140 < len__4499__auto___25139)){
args__4502__auto__.push((arguments[i__4500__auto___25140]));

var G__25141 = (i__4500__auto___25140 + (1));
i__4500__auto___25140 = G__25141;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return mranderson047.garden.v1v3v3.garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

mranderson047.garden.v1v3v3.garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(mranderson047.garden.v1v3v3.garden.util.to_str,args));
});

mranderson047.garden.v1v3v3.garden.util.as_str.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
mranderson047.garden.v1v3v3.garden.util.as_str.cljs$lang$applyTo = (function (seq25138){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25138));
});

/**
 * Convert a string to an integer with optional base.
 */
mranderson047.garden.v1v3v3.garden.util.string__GT_int = (function mranderson047$garden$v1v3v3$garden$util$string__GT_int(var_args){
var args__4502__auto__ = [];
var len__4499__auto___25148 = arguments.length;
var i__4500__auto___25149 = (0);
while(true){
if((i__4500__auto___25149 < len__4499__auto___25148)){
args__4502__auto__.push((arguments[i__4500__auto___25149]));

var G__25150 = (i__4500__auto___25149 + (1));
i__4500__auto___25149 = G__25150;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return mranderson047.garden.v1v3v3.garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

mranderson047.garden.v1v3v3.garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__25144){
var vec__25145 = p__25144;
var radix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25145,(0),null);
var radix__$1 = (function (){var or__3922__auto__ = radix;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (10);
}
})();
return parseInt(s,radix__$1);
});

mranderson047.garden.v1v3v3.garden.util.string__GT_int.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mranderson047.garden.v1v3v3.garden.util.string__GT_int.cljs$lang$applyTo = (function (seq25142){
var G__25143 = cljs.core.first(seq25142);
var seq25142__$1 = cljs.core.next(seq25142);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25143,seq25142__$1);
});

/**
 * Convert an integer to a string with optional base.
 */
mranderson047.garden.v1v3v3.garden.util.int__GT_string = (function mranderson047$garden$v1v3v3$garden$util$int__GT_string(var_args){
var args__4502__auto__ = [];
var len__4499__auto___25157 = arguments.length;
var i__4500__auto___25158 = (0);
while(true){
if((i__4500__auto___25158 < len__4499__auto___25157)){
args__4502__auto__.push((arguments[i__4500__auto___25158]));

var G__25159 = (i__4500__auto___25158 + (1));
i__4500__auto___25158 = G__25159;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return mranderson047.garden.v1v3v3.garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

mranderson047.garden.v1v3v3.garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic = (function (i,p__25153){
var vec__25154 = p__25153;
var radix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25154,(0),null);
var radix__$1 = (function (){var or__3922__auto__ = radix;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (10);
}
})();
return i.toString(radix__$1);
});

mranderson047.garden.v1v3v3.garden.util.int__GT_string.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mranderson047.garden.v1v3v3.garden.util.int__GT_string.cljs$lang$applyTo = (function (seq25151){
var G__25152 = cljs.core.first(seq25151);
var seq25151__$1 = cljs.core.next(seq25151);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25152,seq25151__$1);
});

/**
 * Return a space separated list of values.
 */
mranderson047.garden.v1v3v3.garden.util.space_join = (function mranderson047$garden$v1v3v3$garden$util$space_join(xs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(mranderson047.garden.v1v3v3.garden.util.to_str,xs));
});
/**
 * Return a comma separated list of values. Subsequences are joined with
 * spaces.
 */
mranderson047.garden.v1v3v3.garden.util.comma_join = (function mranderson047$garden$v1v3v3$garden$util$comma_join(xs){
var ys = (function (){var iter__4292__auto__ = (function mranderson047$garden$v1v3v3$garden$util$comma_join_$_iter__25171(s__25172){
return (new cljs.core.LazySeq(null,(function (){
var s__25172__$1 = s__25172;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__25172__$1);
if(temp__5457__auto__){
var s__25172__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25172__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__25172__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__25180 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__25179 = (0);
while(true){
if((i__25179 < size__4291__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__25179);
cljs.core.chunk_append(b__25180,((cljs.core.sequential_QMARK_(x))?mranderson047.garden.v1v3v3.garden.util.space_join(x):mranderson047.garden.v1v3v3.garden.util.to_str(x)));

var G__25197 = (i__25179 + (1));
i__25179 = G__25197;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25180),mranderson047$garden$v1v3v3$garden$util$comma_join_$_iter__25171(cljs.core.chunk_rest(s__25172__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25180),null);
}
} else {
var x = cljs.core.first(s__25172__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?mranderson047.garden.v1v3v3.garden.util.space_join(x):mranderson047.garden.v1v3v3.garden.util.to_str(x)),mranderson047$garden$v1v3v3$garden$util$comma_join_$_iter__25171(cljs.core.rest(s__25172__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__(xs);
})();
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",ys);
});
/**
 * Wrap a string with double quotes.
 */
mranderson047.garden.v1v3v3.garden.util.wrap_quotes = (function mranderson047$garden$v1v3v3$garden$util$wrap_quotes(s){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join('');
});
/**
 * True if `(map? x)` and `x` does not satisfy `clojure.lang.IRecord`.
 */
mranderson047.garden.v1v3v3.garden.util.hash_map_QMARK_ = (function mranderson047$garden$v1v3v3$garden$util$hash_map_QMARK_(x){
return ((cljs.core.map_QMARK_(x)) && (!(cljs.core.record_QMARK_(x))));
});
/**
 * Alias to `vector?`.
 */
mranderson047.garden.v1v3v3.garden.util.rule_QMARK_ = cljs.core.vector_QMARK_;
/**
 * Alias to `hash-map?`.
 */
mranderson047.garden.v1v3v3.garden.util.declaration_QMARK_ = mranderson047.garden.v1v3v3.garden.util.hash_map_QMARK_;
mranderson047.garden.v1v3v3.garden.util.at_rule_QMARK_ = (function mranderson047$garden$v1v3v3$garden$util$at_rule_QMARK_(x){
return (x instanceof mranderson047.garden.v1v3v3.garden.types.CSSAtRule);
});
/**
 * True if `x` is a CSS `@media` rule.
 */
mranderson047.garden.v1v3v3.garden.util.at_media_QMARK_ = (function mranderson047$garden$v1v3v3$garden$util$at_media_QMARK_(x){
var and__3911__auto__ = mranderson047.garden.v1v3v3.garden.util.at_rule_QMARK_(x);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"media","media",-1066138403));
} else {
return and__3911__auto__;
}
});
/**
 * True if `x` is a CSS `@keyframes` rule.
 */
mranderson047.garden.v1v3v3.garden.util.at_keyframes_QMARK_ = (function mranderson047$garden$v1v3v3$garden$util$at_keyframes_QMARK_(x){
var and__3911__auto__ = mranderson047.garden.v1v3v3.garden.util.at_rule_QMARK_(x);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012));
} else {
return and__3911__auto__;
}
});
/**
 * True if `x` is a CSS `@import` rule.
 */
mranderson047.garden.v1v3v3.garden.util.at_import_QMARK_ = (function mranderson047$garden$v1v3v3$garden$util$at_import_QMARK_(x){
var and__3911__auto__ = mranderson047.garden.v1v3v3.garden.util.at_rule_QMARK_(x);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"import","import",-1399500709));
} else {
return and__3911__auto__;
}
});
/**
 * Attach a CSS style prefix to s.
 */
mranderson047.garden.v1v3v3.garden.util.prefix = (function mranderson047$garden$v1v3v3$garden$util$prefix(p,s){
var p__$1 = mranderson047.garden.v1v3v3.garden.util.to_str(p);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("-",cljs.core.last(p__$1))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
}
});
/**
 * Attach a CSS vendor prefix to s.
 */
mranderson047.garden.v1v3v3.garden.util.vendor_prefix = (function mranderson047$garden$v1v3v3$garden$util$vendor_prefix(p,s){
var p__$1 = mranderson047.garden.v1v3v3.garden.util.to_str(p);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("-",cljs.core.first(p__$1))){
return mranderson047.garden.v1v3v3.garden.util.prefix(p__$1,s);
} else {
return mranderson047.garden.v1v3v3.garden.util.prefix([cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1)].join(''),s);
}
});
/**
 * True if n is a natural number.
 */
mranderson047.garden.v1v3v3.garden.util.natural_QMARK_ = (function mranderson047$garden$v1v3v3$garden$util$natural_QMARK_(n){
return ((cljs.core.integer_QMARK_(n)) && ((n > (0))));
});
/**
 * True if n is a number between a and b.
 */
mranderson047.garden.v1v3v3.garden.util.between_QMARK_ = (function mranderson047$garden$v1v3v3$garden$util$between_QMARK_(n,a,b){
var bottom = (function (){var x__4009__auto__ = a;
var y__4010__auto__ = b;
return ((x__4009__auto__ < y__4010__auto__) ? x__4009__auto__ : y__4010__auto__);
})();
var top = (function (){var x__4006__auto__ = a;
var y__4007__auto__ = b;
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})();
return (((n >= bottom)) && ((n <= top)));
});
/**
 * Return a number such that n is no less than a and no more than b.
 */
mranderson047.garden.v1v3v3.garden.util.clip = (function mranderson047$garden$v1v3v3$garden$util$clip(a,b,n){
var vec__25201 = (((a <= b))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null));
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25201,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25201,(1),null);
var x__4006__auto__ = a__$1;
var y__4007__auto__ = (function (){var x__4009__auto__ = b__$1;
var y__4010__auto__ = n;
return ((x__4009__auto__ < y__4010__auto__) ? x__4009__auto__ : y__4010__auto__);
})();
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
});
/**
 * Return the average of two or more numbers.
 */
mranderson047.garden.v1v3v3.garden.util.average = (function mranderson047$garden$v1v3v3$garden$util$average(var_args){
var args__4502__auto__ = [];
var len__4499__auto___25210 = arguments.length;
var i__4500__auto___25211 = (0);
while(true){
if((i__4500__auto___25211 < len__4499__auto___25210)){
args__4502__auto__.push((arguments[i__4500__auto___25211]));

var G__25213 = (i__4500__auto___25211 + (1));
i__4500__auto___25211 = G__25213;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return mranderson047.garden.v1v3v3.garden.util.average.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

mranderson047.garden.v1v3v3.garden.util.average.cljs$core$IFn$_invoke$arity$variadic = (function (n,m,more){
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core._PLUS_,n,m,more) / (2.0 + cljs.core.count(more)));
});

mranderson047.garden.v1v3v3.garden.util.average.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
mranderson047.garden.v1v3v3.garden.util.average.cljs$lang$applyTo = (function (seq25204){
var G__25205 = cljs.core.first(seq25204);
var seq25204__$1 = cljs.core.next(seq25204);
var G__25206 = cljs.core.first(seq25204__$1);
var seq25204__$2 = cljs.core.next(seq25204__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25205,G__25206,seq25204__$2);
});

/**
 * All the ways to take one item from each sequence.
 */
mranderson047.garden.v1v3v3.garden.util.cartesian_product = (function mranderson047$garden$v1v3v3$garden$util$cartesian_product(var_args){
var args__4502__auto__ = [];
var len__4499__auto___25216 = arguments.length;
var i__4500__auto___25217 = (0);
while(true){
if((i__4500__auto___25217 < len__4499__auto___25216)){
args__4502__auto__.push((arguments[i__4500__auto___25217]));

var G__25218 = (i__4500__auto___25217 + (1));
i__4500__auto___25217 = G__25218;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return mranderson047.garden.v1v3v3.garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

mranderson047.garden.v1v3v3.garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic = (function (seqs){
var v_original_seqs = cljs.core.vec(seqs);
var step = ((function (v_original_seqs){
return (function mranderson047$garden$v1v3v3$garden$util$step(v_seqs){
var increment = ((function (v_original_seqs){
return (function (v_seqs__$1){
var i = (cljs.core.count(v_seqs__$1) - (1));
var v_seqs__$2 = v_seqs__$1;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(-1))){
return null;
} else {
var temp__5455__auto__ = cljs.core.next((v_seqs__$2.cljs$core$IFn$_invoke$arity$1 ? v_seqs__$2.cljs$core$IFn$_invoke$arity$1(i) : v_seqs__$2.call(null,i)));
if(temp__5455__auto__){
var rst = temp__5455__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,rst);
} else {
var G__25219 = (i - (1));
var G__25220 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,(v_original_seqs.cljs$core$IFn$_invoke$arity$1 ? v_original_seqs.cljs$core$IFn$_invoke$arity$1(i) : v_original_seqs.call(null,i)));
i = G__25219;
v_seqs__$2 = G__25220;
continue;
}
}
break;
}
});})(v_original_seqs))
;
if(cljs.core.truth_(v_seqs)){
return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,v_seqs),(new cljs.core.LazySeq(null,((function (increment,v_original_seqs){
return (function (){
return mranderson047$garden$v1v3v3$garden$util$step(increment(v_seqs));
});})(increment,v_original_seqs))
,null,null)));
} else {
return null;
}
});})(v_original_seqs))
;
if(cljs.core.every_QMARK_(cljs.core.seq,seqs)){
return (new cljs.core.LazySeq(null,((function (v_original_seqs,step){
return (function (){
return step(v_original_seqs);
});})(v_original_seqs,step))
,null,null));
} else {
return null;
}
});

mranderson047.garden.v1v3v3.garden.util.cartesian_product.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
mranderson047.garden.v1v3v3.garden.util.cartesian_product.cljs$lang$applyTo = (function (seq25214){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25214));
});


//# sourceMappingURL=mranderson047.garden.v1v3v3.garden.util.js.map
