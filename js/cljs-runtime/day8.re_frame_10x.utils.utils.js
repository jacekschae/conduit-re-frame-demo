goog.provide('day8.re_frame_10x.utils.utils');
goog.require('cljs.core');
day8.re_frame_10x.utils.utils.diff_link = "https://github.com/Day8/re-frame-10x/blob/master/docs/HyperlinkedInformation/Diffs.md";
/**
 * Get the last element in the vector
 */
day8.re_frame_10x.utils.utils.last_in_vec = (function day8$re_frame_10x$utils$utils$last_in_vec(v){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(cljs.core.count(v) - (1)));
});
/**
 * Gets the index of all items in vec that match the predicate
 */
day8.re_frame_10x.utils.utils.find_all_indexes_in_vec = (function day8$re_frame_10x$utils$utils$find_all_indexes_in_vec(pred,v){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__25971_SHARP_,p2__25970_SHARP_){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(p2__25970_SHARP_) : pred.call(null,p2__25970_SHARP_)))){
return p1__25971_SHARP_;
} else {
return null;
}
}),v);
});
/**
 * Gets the index of the first item in vec that matches the predicate
 */
day8.re_frame_10x.utils.utils.find_index_in_vec = (function day8$re_frame_10x$utils$utils$find_index_in_vec(pred,v){
return cljs.core.first(day8.re_frame_10x.utils.utils.find_all_indexes_in_vec(pred,v));
});
/**
 * Returns a transducer that filters for :id between beginning and ending.
 */
day8.re_frame_10x.utils.utils.id_between_xf = (function day8$re_frame_10x$utils$utils$id_between_xf(beginning,ending){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__25978_SHARP_){
return (((beginning <= new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__25978_SHARP_))) && ((new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__25978_SHARP_) <= ending)));
}));
});
day8.re_frame_10x.utils.utils.spy = (function day8$re_frame_10x$utils$utils$spy(var_args){
var G__25988 = arguments.length;
switch (G__25988) {
case 1:
return day8.re_frame_10x.utils.utils.spy.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.utils.utils.spy.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame_10x.utils.utils.spy.cljs$core$IFn$_invoke$arity$1 = (function (x){
console.log(x);

return x;
});

day8.re_frame_10x.utils.utils.spy.cljs$core$IFn$_invoke$arity$2 = (function (label,x){
console.log(label,x);

return x;
});

day8.re_frame_10x.utils.utils.spy.cljs$lang$maxFixedArity = 2;

/**
 * Return a pluralized phrase, appending an s to the singular form if no plural is provided.
 *   For example:
 *   (pluralize 5 "month") => "5 months"
 *   (pluralize 1 "month") => "1 month"
 *   (pluralize 1 "radius" "radii") => "1 radius"
 *   (pluralize 9 "radius" "radii") => "9 radii"
 *   From https://github.com/flatland/useful/blob/194950/src/flatland/useful/string.clj#L25-L33
 */
day8.re_frame_10x.utils.utils.pluralize = (function day8$re_frame_10x$utils$utils$pluralize(var_args){
var args__4502__auto__ = [];
var len__4499__auto___26003 = arguments.length;
var i__4500__auto___26004 = (0);
while(true){
if((i__4500__auto___26004 < len__4499__auto___26003)){
args__4502__auto__.push((arguments[i__4500__auto___26004]));

var G__26005 = (i__4500__auto___26004 + (1));
i__4500__auto___26004 = G__26005;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.utils.utils.pluralize.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

day8.re_frame_10x.utils.utils.pluralize.cljs$core$IFn$_invoke$arity$variadic = (function (num,singular,p__25999){
var vec__26000 = p__25999;
var plural = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26000,(0),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(num)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),num))?singular:(function (){var or__3922__auto__ = plural;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(singular),"s"].join('');
}
})()))].join('');
});

day8.re_frame_10x.utils.utils.pluralize.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
day8.re_frame_10x.utils.utils.pluralize.cljs$lang$applyTo = (function (seq25995){
var G__25996 = cljs.core.first(seq25995);
var seq25995__$1 = cljs.core.next(seq25995);
var G__25997 = cljs.core.first(seq25995__$1);
var seq25995__$2 = cljs.core.next(seq25995__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25996,G__25997,seq25995__$2);
});

/**
 * Same as pluralize, but doesn't prepend the number to the pluralized string.
 */
day8.re_frame_10x.utils.utils.pluralize_ = (function day8$re_frame_10x$utils$utils$pluralize_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___26015 = arguments.length;
var i__4500__auto___26016 = (0);
while(true){
if((i__4500__auto___26016 < len__4499__auto___26015)){
args__4502__auto__.push((arguments[i__4500__auto___26016]));

var G__26017 = (i__4500__auto___26016 + (1));
i__4500__auto___26016 = G__26017;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.utils.utils.pluralize_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

day8.re_frame_10x.utils.utils.pluralize_.cljs$core$IFn$_invoke$arity$variadic = (function (num,singular,p__26011){
var vec__26012 = p__26011;
var plural = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26012,(0),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),num)){
return singular;
} else {
var or__3922__auto__ = plural;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(singular),"s"].join('');
}
}
});

day8.re_frame_10x.utils.utils.pluralize_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
day8.re_frame_10x.utils.utils.pluralize_.cljs$lang$applyTo = (function (seq26008){
var G__26009 = cljs.core.first(seq26008);
var seq26008__$1 = cljs.core.next(seq26008);
var G__26010 = cljs.core.first(seq26008__$1);
var seq26008__$2 = cljs.core.next(seq26008__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26009,G__26010,seq26008__$2);
});


//# sourceMappingURL=day8.re_frame_10x.utils.utils.js.map
