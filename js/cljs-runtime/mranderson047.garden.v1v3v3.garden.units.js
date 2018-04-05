goog.provide('mranderson047.garden.v1v3v3.garden.units');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('mranderson047.garden.v1v3v3.garden.types');
goog.require('mranderson047.garden.v1v3v3.garden.util');
mranderson047.garden.v1v3v3.garden.units.length_units = cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"mm","mm",-1652850560),new cljs.core.Keyword(null,"pt","pt",556460867),new cljs.core.Keyword(null,"px","px",281329899),new cljs.core.Keyword(null,"pc","pc",512913453),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("%"),new cljs.core.Keyword(null,"cm","cm",540591536),new cljs.core.Keyword(null,"in","in",-1531184865)]);
mranderson047.garden.v1v3v3.garden.units.angular_units = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"deg","deg",-681556081),null,new cljs.core.Keyword(null,"turn","turn",75759344),null,new cljs.core.Keyword(null,"rad","rad",-833983012),null,new cljs.core.Keyword(null,"grad","grad",1125187229),null], null), null);
mranderson047.garden.v1v3v3.garden.units.time_units = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"s","s",1705939918),null,new cljs.core.Keyword(null,"ms","ms",-1152709733),null], null), null);
mranderson047.garden.v1v3v3.garden.units.frequency_units = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kHz","kHz",240398466),null,new cljs.core.Keyword(null,"Hz","Hz",-1958732916),null], null), null);
mranderson047.garden.v1v3v3.garden.units.resolution_units = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dppx","dppx",1920508843),null,new cljs.core.Keyword(null,"dpcm","dpcm",-1187601236),null,new cljs.core.Keyword(null,"dpi","dpi",-986162832),null], null), null);
/**
 * True if x is of type CSSUnit.
 */
mranderson047.garden.v1v3v3.garden.units.unit_QMARK_ = (function mranderson047$garden$v1v3v3$garden$units$unit_QMARK_(x){
return (x instanceof mranderson047.garden.v1v3v3.garden.types.CSSUnit);
});
mranderson047.garden.v1v3v3.garden.units.length_QMARK_ = (function mranderson047$garden$v1v3v3$garden$units$length_QMARK_(x){
var and__3911__auto__ = mranderson047.garden.v1v3v3.garden.units.unit_QMARK_(x);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.contains_QMARK_(mranderson047.garden.v1v3v3.garden.units.length_units,new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(x));
} else {
return and__3911__auto__;
}
});
mranderson047.garden.v1v3v3.garden.units.angle_QMARK_ = (function mranderson047$garden$v1v3v3$garden$units$angle_QMARK_(x){
var and__3911__auto__ = mranderson047.garden.v1v3v3.garden.units.unit_QMARK_(x);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.contains_QMARK_(mranderson047.garden.v1v3v3.garden.units.angular_units,new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(x));
} else {
return and__3911__auto__;
}
});
mranderson047.garden.v1v3v3.garden.units.time_QMARK_ = (function mranderson047$garden$v1v3v3$garden$units$time_QMARK_(x){
var and__3911__auto__ = mranderson047.garden.v1v3v3.garden.units.unit_QMARK_(x);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.contains_QMARK_(mranderson047.garden.v1v3v3.garden.units.time_units,new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(x));
} else {
return and__3911__auto__;
}
});
mranderson047.garden.v1v3v3.garden.units.frequency_QMARK_ = (function mranderson047$garden$v1v3v3$garden$units$frequency_QMARK_(x){
var and__3911__auto__ = mranderson047.garden.v1v3v3.garden.units.unit_QMARK_(x);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.contains_QMARK_(mranderson047.garden.v1v3v3.garden.units.frequency_units,new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(x));
} else {
return and__3911__auto__;
}
});
mranderson047.garden.v1v3v3.garden.units.resolution_QMARK_ = (function mranderson047$garden$v1v3v3$garden$units$resolution_QMARK_(x){
var and__3911__auto__ = mranderson047.garden.v1v3v3.garden.units.unit_QMARK_(x);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.contains_QMARK_(mranderson047.garden.v1v3v3.garden.units.resolution_units,new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(x));
} else {
return and__3911__auto__;
}
});
/**
 * Map associating CSS unit types to their conversion values.
 */
mranderson047.garden.v1v3v3.garden.units.conversions = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"mm","mm",-1652850560),new cljs.core.Keyword(null,"kHz","kHz",240398466),new cljs.core.Keyword(null,"pt","pt",556460867),new cljs.core.Keyword(null,"px","px",281329899),new cljs.core.Keyword(null,"rem","rem",-976484757),new cljs.core.Keyword(null,"em","em",707813035),new cljs.core.Keyword(null,"Hz","Hz",-1958732916),new cljs.core.Keyword(null,"pc","pc",512913453),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("%"),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"deg","deg",-681556081),new cljs.core.Keyword(null,"cm","cm",540591536),new cljs.core.Keyword(null,"turn","turn",75759344),new cljs.core.Keyword(null,"ms","ms",-1152709733),new cljs.core.Keyword(null,"rad","rad",-833983012),new cljs.core.Keyword(null,"grad","grad",1125187229),new cljs.core.Keyword(null,"in","in",-1531184865)],[new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"mm","mm",-1652850560),(1),new cljs.core.Keyword(null,"pt","pt",556460867),2.83464567,new cljs.core.Keyword(null,"px","px",281329899),3.7795275591], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"kHz","kHz",240398466),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pt","pt",556460867),(1),new cljs.core.Keyword(null,"px","px",281329899),1.3333333333], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"px","px",281329899),(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rem","rem",-976484757),(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"em","em",707813035),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Hz","Hz",-1958732916),(1),new cljs.core.Keyword(null,"kHz","kHz",240398466),0.001], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mm","mm",-1652850560),4.23333333,new cljs.core.Keyword(null,"pc","pc",512913453),(1),new cljs.core.Keyword(null,"pt","pt",556460867),(12),new cljs.core.Keyword(null,"px","px",281329899),(16)], null),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("%"),(1)]),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(1000),new cljs.core.Keyword(null,"s","s",1705939918),(1)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"deg","deg",-681556081),(1),new cljs.core.Keyword(null,"grad","grad",1125187229),1.111111111,new cljs.core.Keyword(null,"rad","rad",-833983012),0.0174532925,new cljs.core.Keyword(null,"turn","turn",75759344),0.002777778], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cm","cm",540591536),(1),new cljs.core.Keyword(null,"mm","mm",-1652850560),(10),new cljs.core.Keyword(null,"pc","pc",512913453),2.36220473,new cljs.core.Keyword(null,"pt","pt",556460867),28.3464567,new cljs.core.Keyword(null,"px","px",281329899),37.795275591], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"turn","turn",75759344),(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rad","rad",-833983012),(1),new cljs.core.Keyword(null,"turn","turn",75759344),0.159154943], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"grad","grad",1125187229),(1),new cljs.core.Keyword(null,"rad","rad",-833983012),63.661977237,new cljs.core.Keyword(null,"turn","turn",75759344),0.0025], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cm","cm",540591536),2.54,new cljs.core.Keyword(null,"in","in",-1531184865),(1),new cljs.core.Keyword(null,"mm","mm",-1652850560),25.4,new cljs.core.Keyword(null,"pc","pc",512913453),(6),new cljs.core.Keyword(null,"pt","pt",556460867),(72),new cljs.core.Keyword(null,"px","px",281329899),(96)], null)]);
/**
 * True if unit is a key of convertable-units, false otherwise.
 */
mranderson047.garden.v1v3v3.garden.units.convertable_QMARK_ = (function mranderson047$garden$v1v3v3$garden$units$convertable_QMARK_(unit){
return cljs.core.contains_QMARK_(mranderson047.garden.v1v3v3.garden.units.conversions,unit);
});
/**
 * Convert a Unit with :unit left to a Unit with :unit right if possible.
 */
mranderson047.garden.v1v3v3.garden.units.convert = (function mranderson047$garden$v1v3v3$garden$units$convert(p__25596,right){
var map__25600 = p__25596;
var map__25600__$1 = ((((!((map__25600 == null)))?(((((map__25600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25600.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25600):map__25600);
var m = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25600__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25600__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
if(cljs.core.every_QMARK_(mranderson047.garden.v1v3v3.garden.units.convertable_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,right], null))){
var v1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(mranderson047.garden.v1v3v3.garden.units.conversions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,right], null));
var v2 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(mranderson047.garden.v1v3v3.garden.units.conversions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [right,left], null));
if(cljs.core.truth_(v1)){
return (new mranderson047.garden.v1v3v3.garden.types.CSSUnit(right,(v1 * m),null,null,null));
} else {
if(cljs.core.truth_(v2)){
return (new mranderson047.garden.v1v3v3.garden.types.CSSUnit(right,(m / v2),null,null,null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(mranderson047.garden.v1v3v3.garden.util.format.cljs$core$IFn$_invoke$arity$variadic("Can't convert %s to %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.name(left),cljs.core.name(right)], 0)),cljs.core.PersistentArrayMap.EMPTY);

}
}
} else {
var x = cljs.core.first(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(mranderson047.garden.v1v3v3.garden.units.convertable_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,right], null)));
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Inconvertible unit ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(x))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});
/**
 * Regular expression for matching a CSS unit. The magnitude
 *           and unit are captured.
 */
mranderson047.garden.v1v3v3.garden.units.unit_re = /([+-]?\d+(?:\.?\d+)?)(p[xtc]|in|[cm]m|%|r?em|ex|ch|v(?:[wh]|m(?:in|ax))|deg|g?rad|turn|m?s|k?Hz|dp(?:i|cm|px))/;
/**
 * Read a `CSSUnit` object from the string `s`.
 */
mranderson047.garden.v1v3v3.garden.units.read_unit = (function mranderson047$garden$v1v3v3$garden$units$read_unit(s){
var temp__5457__auto__ = cljs.core.re_matches(mranderson047.garden.v1v3v3.garden.units.unit_re,s);
if(cljs.core.truth_(temp__5457__auto__)){
var vec__25622 = temp__5457__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25622,(0),null);
var magnitude = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25622,(1),null);
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25622,(2),null);
var unit__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(unit);
var magnitude__$1 = (cljs.core.truth_(magnitude)?cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(magnitude):(0));
return (new mranderson047.garden.v1v3v3.garden.types.CSSUnit(unit__$1,magnitude__$1,null,null,null));
} else {
return null;
}
});
/**
 * Creates a function for verifying the given unit type.
 */
mranderson047.garden.v1v3v3.garden.units.make_unit_predicate = (function mranderson047$garden$v1v3v3$garden$units$make_unit_predicate(unit){
return (function (x){
var and__3911__auto__ = mranderson047.garden.v1v3v3.garden.units.unit_QMARK_(x);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(x),unit);
} else {
return and__3911__auto__;
}
});
});
/**
 * Creates a function for creating and converting `CSSUnit`s for the
 *   given unit. If a number n is passed the function it will produce a
 *   new `CSSUnit` record with a the magnitude set to n. If a `CSSUnit`
 *   is passed the function will attempt to convert it.
 */
mranderson047.garden.v1v3v3.garden.units.make_unit_fn = (function mranderson047$garden$v1v3v3$garden$units$make_unit_fn(unit){
return (function (x){
if(typeof x === 'number'){
return (new mranderson047.garden.v1v3v3.garden.types.CSSUnit(unit,x,null,null,null));
} else {
if(cljs.core.truth_(mranderson047.garden.v1v3v3.garden.units.unit_QMARK_(x))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((unit.cljs$core$IFn$_invoke$arity$1 ? unit.cljs$core$IFn$_invoke$arity$1(x) : unit.call(null,x)),unit)){
return x;
} else {
return mranderson047.garden.v1v3v3.garden.units.convert(x,unit);
}
} else {
var ex_message = mranderson047.garden.v1v3v3.garden.util.format.cljs$core$IFn$_invoke$arity$variadic("Unable to convert from %s to %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type.getName(),cljs.core.name(unit)], 0));
var ex_data = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"given","given",716253602),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type,new cljs.core.Keyword(null,"unit","unit",375175175),unit], null)], null);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(ex_message,ex_data);

}
}
});
});
/**
 * Create a addition function for adding Units.
 */
mranderson047.garden.v1v3v3.garden.units.make_unit_adder = (function mranderson047$garden$v1v3v3$garden$units$make_unit_adder(unit){
var u = mranderson047.garden.v1v3v3.garden.units.make_unit_fn(unit);
return ((function (u){
return (function() {
var mranderson047$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS_ = null;
var mranderson047$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS___0 = (function (){
return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1((0)) : u.call(null,(0)));
});
var mranderson047$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS___1 = (function (x){
return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(x) : u.call(null,x));
});
var mranderson047$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS___2 = (function (x,y){
var map__25658 = (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(x) : u.call(null,x));
var map__25658__$1 = ((((!((map__25658 == null)))?(((((map__25658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25658.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25658):map__25658);
var m1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25658__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
var map__25659 = (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(y) : u.call(null,y));
var map__25659__$1 = ((((!((map__25659 == null)))?(((((map__25659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25659.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25659):map__25659);
var m2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25659__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
var G__25666 = (m1 + m2);
return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(G__25666) : u.call(null,G__25666));
});
var mranderson047$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS___3 = (function() { 
var G__25673__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(mranderson047$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS_,mranderson047$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS_.cljs$core$IFn$_invoke$arity$2(x,y),more);
};
var G__25673 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__25675__i = 0, G__25675__a = new Array(arguments.length -  2);
while (G__25675__i < G__25675__a.length) {G__25675__a[G__25675__i] = arguments[G__25675__i + 2]; ++G__25675__i;}
  more = new cljs.core.IndexedSeq(G__25675__a,0,null);
} 
return G__25673__delegate.call(this,x,y,more);};
G__25673.cljs$lang$maxFixedArity = 2;
G__25673.cljs$lang$applyTo = (function (arglist__25676){
var x = cljs.core.first(arglist__25676);
arglist__25676 = cljs.core.next(arglist__25676);
var y = cljs.core.first(arglist__25676);
var more = cljs.core.rest(arglist__25676);
return G__25673__delegate(x,y,more);
});
G__25673.cljs$core$IFn$_invoke$arity$variadic = G__25673__delegate;
return G__25673;
})()
;
mranderson047$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return mranderson047$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS___0.call(this);
case 1:
return mranderson047$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS___1.call(this,x);
case 2:
return mranderson047$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS___2.call(this,x,y);
default:
var G__25677 = null;
if (arguments.length > 2) {
var G__25678__i = 0, G__25678__a = new Array(arguments.length -  2);
while (G__25678__i < G__25678__a.length) {G__25678__a[G__25678__i] = arguments[G__25678__i + 2]; ++G__25678__i;}
G__25677 = new cljs.core.IndexedSeq(G__25678__a,0,null);
}
return mranderson047$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS___3.cljs$core$IFn$_invoke$arity$variadic(x,y, G__25677);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
mranderson047$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS_.cljs$lang$maxFixedArity = 2;
mranderson047$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS_.cljs$lang$applyTo = mranderson047$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS___3.cljs$lang$applyTo;
mranderson047$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS_.cljs$core$IFn$_invoke$arity$0 = mranderson047$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS___0;
mranderson047$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS_.cljs$core$IFn$_invoke$arity$1 = mranderson047$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS___1;
mranderson047$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS_.cljs$core$IFn$_invoke$arity$2 = mranderson047$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS___2;
mranderson047$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS_.cljs$core$IFn$_invoke$arity$variadic = mranderson047$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS___3.cljs$core$IFn$_invoke$arity$variadic;
return mranderson047$garden$v1v3v3$garden$units$make_unit_adder_$_u_PLUS_;
})()
;})(u))
});
/**
 * Create a subtraction function for subtracting Units.
 */
mranderson047.garden.v1v3v3.garden.units.make_unit_subtractor = (function mranderson047$garden$v1v3v3$garden$units$make_unit_subtractor(unit){
var u = mranderson047.garden.v1v3v3.garden.units.make_unit_fn(unit);
return ((function (u){
return (function() {
var mranderson047$garden$v1v3v3$garden$units$make_unit_subtractor_$_u_ = null;
var mranderson047$garden$v1v3v3$garden$units$make_unit_subtractor_$_u___1 = (function (x){
var G__25682 = (- x);
return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(G__25682) : u.call(null,G__25682));
});
var mranderson047$garden$v1v3v3$garden$units$make_unit_subtractor_$_u___2 = (function (x,y){
var map__25683 = (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(x) : u.call(null,x));
var map__25683__$1 = ((((!((map__25683 == null)))?(((((map__25683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25683.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25683):map__25683);
var m1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25683__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
var map__25684 = (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(y) : u.call(null,y));
var map__25684__$1 = ((((!((map__25684 == null)))?(((((map__25684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25684.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25684):map__25684);
var m2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25684__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
var G__25688 = (m1 - m2);
return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(G__25688) : u.call(null,G__25688));
});
var mranderson047$garden$v1v3v3$garden$units$make_unit_subtractor_$_u___3 = (function() { 
var G__25690__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(mranderson047$garden$v1v3v3$garden$units$make_unit_subtractor_$_u_,mranderson047$garden$v1v3v3$garden$units$make_unit_subtractor_$_u_.cljs$core$IFn$_invoke$arity$2(x,y),more);
};
var G__25690 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__25692__i = 0, G__25692__a = new Array(arguments.length -  2);
while (G__25692__i < G__25692__a.length) {G__25692__a[G__25692__i] = arguments[G__25692__i + 2]; ++G__25692__i;}
  more = new cljs.core.IndexedSeq(G__25692__a,0,null);
} 
return G__25690__delegate.call(this,x,y,more);};
G__25690.cljs$lang$maxFixedArity = 2;
G__25690.cljs$lang$applyTo = (function (arglist__25693){
var x = cljs.core.first(arglist__25693);
arglist__25693 = cljs.core.next(arglist__25693);
var y = cljs.core.first(arglist__25693);
var more = cljs.core.rest(arglist__25693);
return G__25690__delegate(x,y,more);
});
G__25690.cljs$core$IFn$_invoke$arity$variadic = G__25690__delegate;
return G__25690;
})()
;
mranderson047$garden$v1v3v3$garden$units$make_unit_subtractor_$_u_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return mranderson047$garden$v1v3v3$garden$units$make_unit_subtractor_$_u___1.call(this,x);
case 2:
return mranderson047$garden$v1v3v3$garden$units$make_unit_subtractor_$_u___2.call(this,x,y);
default:
var G__25694 = null;
if (arguments.length > 2) {
var G__25695__i = 0, G__25695__a = new Array(arguments.length -  2);
while (G__25695__i < G__25695__a.length) {G__25695__a[G__25695__i] = arguments[G__25695__i + 2]; ++G__25695__i;}
G__25694 = new cljs.core.IndexedSeq(G__25695__a,0,null);
}
return mranderson047$garden$v1v3v3$garden$units$make_unit_subtractor_$_u___3.cljs$core$IFn$_invoke$arity$variadic(x,y, G__25694);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
mranderson047$garden$v1v3v3$garden$units$make_unit_subtractor_$_u_.cljs$lang$maxFixedArity = 2;
mranderson047$garden$v1v3v3$garden$units$make_unit_subtractor_$_u_.cljs$lang$applyTo = mranderson047$garden$v1v3v3$garden$units$make_unit_subtractor_$_u___3.cljs$lang$applyTo;
mranderson047$garden$v1v3v3$garden$units$make_unit_subtractor_$_u_.cljs$core$IFn$_invoke$arity$1 = mranderson047$garden$v1v3v3$garden$units$make_unit_subtractor_$_u___1;
mranderson047$garden$v1v3v3$garden$units$make_unit_subtractor_$_u_.cljs$core$IFn$_invoke$arity$2 = mranderson047$garden$v1v3v3$garden$units$make_unit_subtractor_$_u___2;
mranderson047$garden$v1v3v3$garden$units$make_unit_subtractor_$_u_.cljs$core$IFn$_invoke$arity$variadic = mranderson047$garden$v1v3v3$garden$units$make_unit_subtractor_$_u___3.cljs$core$IFn$_invoke$arity$variadic;
return mranderson047$garden$v1v3v3$garden$units$make_unit_subtractor_$_u_;
})()
;})(u))
});
/**
 * Create a multiplication function for multiplying Units.
 */
mranderson047.garden.v1v3v3.garden.units.make_unit_multiplier = (function mranderson047$garden$v1v3v3$garden$units$make_unit_multiplier(unit){
var u = mranderson047.garden.v1v3v3.garden.units.make_unit_fn(unit);
return ((function (u){
return (function() {
var mranderson047$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR_ = null;
var mranderson047$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR___0 = (function (){
return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1((1)) : u.call(null,(1)));
});
var mranderson047$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR___1 = (function (x){
return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(x) : u.call(null,x));
});
var mranderson047$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR___2 = (function (x,y){
var map__25700 = (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(x) : u.call(null,x));
var map__25700__$1 = ((((!((map__25700 == null)))?(((((map__25700.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25700.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25700):map__25700);
var m1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25700__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
var map__25701 = (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(y) : u.call(null,y));
var map__25701__$1 = ((((!((map__25701 == null)))?(((((map__25701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25701):map__25701);
var m2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25701__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
var G__25708 = (m1 * m2);
return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(G__25708) : u.call(null,G__25708));
});
var mranderson047$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR___3 = (function() { 
var G__25716__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(mranderson047$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR_,mranderson047$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR_.cljs$core$IFn$_invoke$arity$2(x,y),more);
};
var G__25716 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__25717__i = 0, G__25717__a = new Array(arguments.length -  2);
while (G__25717__i < G__25717__a.length) {G__25717__a[G__25717__i] = arguments[G__25717__i + 2]; ++G__25717__i;}
  more = new cljs.core.IndexedSeq(G__25717__a,0,null);
} 
return G__25716__delegate.call(this,x,y,more);};
G__25716.cljs$lang$maxFixedArity = 2;
G__25716.cljs$lang$applyTo = (function (arglist__25718){
var x = cljs.core.first(arglist__25718);
arglist__25718 = cljs.core.next(arglist__25718);
var y = cljs.core.first(arglist__25718);
var more = cljs.core.rest(arglist__25718);
return G__25716__delegate(x,y,more);
});
G__25716.cljs$core$IFn$_invoke$arity$variadic = G__25716__delegate;
return G__25716;
})()
;
mranderson047$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return mranderson047$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR___0.call(this);
case 1:
return mranderson047$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR___1.call(this,x);
case 2:
return mranderson047$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR___2.call(this,x,y);
default:
var G__25720 = null;
if (arguments.length > 2) {
var G__25721__i = 0, G__25721__a = new Array(arguments.length -  2);
while (G__25721__i < G__25721__a.length) {G__25721__a[G__25721__i] = arguments[G__25721__i + 2]; ++G__25721__i;}
G__25720 = new cljs.core.IndexedSeq(G__25721__a,0,null);
}
return mranderson047$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR___3.cljs$core$IFn$_invoke$arity$variadic(x,y, G__25720);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
mranderson047$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR_.cljs$lang$maxFixedArity = 2;
mranderson047$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR_.cljs$lang$applyTo = mranderson047$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR___3.cljs$lang$applyTo;
mranderson047$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR_.cljs$core$IFn$_invoke$arity$0 = mranderson047$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR___0;
mranderson047$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR_.cljs$core$IFn$_invoke$arity$1 = mranderson047$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR___1;
mranderson047$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR_.cljs$core$IFn$_invoke$arity$2 = mranderson047$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR___2;
mranderson047$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR_.cljs$core$IFn$_invoke$arity$variadic = mranderson047$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR___3.cljs$core$IFn$_invoke$arity$variadic;
return mranderson047$garden$v1v3v3$garden$units$make_unit_multiplier_$_u_STAR_;
})()
;})(u))
});
/**
 * Create a division function for dividing Units.
 */
mranderson047.garden.v1v3v3.garden.units.make_unit_divider = (function mranderson047$garden$v1v3v3$garden$units$make_unit_divider(unit){
var u = mranderson047.garden.v1v3v3.garden.units.make_unit_fn(unit);
return ((function (u){
return (function() {
var mranderson047$garden$v1v3v3$garden$units$make_unit_divider_$_ud = null;
var mranderson047$garden$v1v3v3$garden$units$make_unit_divider_$_ud__1 = (function (x){
var G__25724 = ((1) / x);
return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(G__25724) : u.call(null,G__25724));
});
var mranderson047$garden$v1v3v3$garden$units$make_unit_divider_$_ud__2 = (function (x,y){
var map__25726 = (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(x) : u.call(null,x));
var map__25726__$1 = ((((!((map__25726 == null)))?(((((map__25726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25726.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25726):map__25726);
var m1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25726__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
var map__25727 = (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(y) : u.call(null,y));
var map__25727__$1 = ((((!((map__25727 == null)))?(((((map__25727.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25727.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25727):map__25727);
var m2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25727__$1,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222));
var G__25731 = (m1 / m2);
return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(G__25731) : u.call(null,G__25731));
});
var mranderson047$garden$v1v3v3$garden$units$make_unit_divider_$_ud__3 = (function() { 
var G__25734__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(mranderson047$garden$v1v3v3$garden$units$make_unit_divider_$_ud,mranderson047$garden$v1v3v3$garden$units$make_unit_divider_$_ud.cljs$core$IFn$_invoke$arity$2(x,y),more);
};
var G__25734 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__25735__i = 0, G__25735__a = new Array(arguments.length -  2);
while (G__25735__i < G__25735__a.length) {G__25735__a[G__25735__i] = arguments[G__25735__i + 2]; ++G__25735__i;}
  more = new cljs.core.IndexedSeq(G__25735__a,0,null);
} 
return G__25734__delegate.call(this,x,y,more);};
G__25734.cljs$lang$maxFixedArity = 2;
G__25734.cljs$lang$applyTo = (function (arglist__25736){
var x = cljs.core.first(arglist__25736);
arglist__25736 = cljs.core.next(arglist__25736);
var y = cljs.core.first(arglist__25736);
var more = cljs.core.rest(arglist__25736);
return G__25734__delegate(x,y,more);
});
G__25734.cljs$core$IFn$_invoke$arity$variadic = G__25734__delegate;
return G__25734;
})()
;
mranderson047$garden$v1v3v3$garden$units$make_unit_divider_$_ud = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return mranderson047$garden$v1v3v3$garden$units$make_unit_divider_$_ud__1.call(this,x);
case 2:
return mranderson047$garden$v1v3v3$garden$units$make_unit_divider_$_ud__2.call(this,x,y);
default:
var G__25738 = null;
if (arguments.length > 2) {
var G__25739__i = 0, G__25739__a = new Array(arguments.length -  2);
while (G__25739__i < G__25739__a.length) {G__25739__a[G__25739__i] = arguments[G__25739__i + 2]; ++G__25739__i;}
G__25738 = new cljs.core.IndexedSeq(G__25739__a,0,null);
}
return mranderson047$garden$v1v3v3$garden$units$make_unit_divider_$_ud__3.cljs$core$IFn$_invoke$arity$variadic(x,y, G__25738);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
mranderson047$garden$v1v3v3$garden$units$make_unit_divider_$_ud.cljs$lang$maxFixedArity = 2;
mranderson047$garden$v1v3v3$garden$units$make_unit_divider_$_ud.cljs$lang$applyTo = mranderson047$garden$v1v3v3$garden$units$make_unit_divider_$_ud__3.cljs$lang$applyTo;
mranderson047$garden$v1v3v3$garden$units$make_unit_divider_$_ud.cljs$core$IFn$_invoke$arity$1 = mranderson047$garden$v1v3v3$garden$units$make_unit_divider_$_ud__1;
mranderson047$garden$v1v3v3$garden$units$make_unit_divider_$_ud.cljs$core$IFn$_invoke$arity$2 = mranderson047$garden$v1v3v3$garden$units$make_unit_divider_$_ud__2;
mranderson047$garden$v1v3v3$garden$units$make_unit_divider_$_ud.cljs$core$IFn$_invoke$arity$variadic = mranderson047$garden$v1v3v3$garden$units$make_unit_divider_$_ud__3.cljs$core$IFn$_invoke$arity$variadic;
return mranderson047$garden$v1v3v3$garden$units$make_unit_divider_$_ud;
})()
;})(u))
});
mranderson047.garden.v1v3v3.garden.units.cm = mranderson047.garden.v1v3v3.garden.units.make_unit_fn(new cljs.core.Keyword(null,"cm","cm",540591536));

mranderson047.garden.v1v3v3.garden.units.cm_QMARK_ = mranderson047.garden.v1v3v3.garden.units.make_unit_predicate(new cljs.core.Keyword(null,"cm","cm",540591536));

mranderson047.garden.v1v3v3.garden.units.cm_PLUS_ = mranderson047.garden.v1v3v3.garden.units.make_unit_adder(new cljs.core.Keyword(null,"cm","cm",540591536));

mranderson047.garden.v1v3v3.garden.units.cm_ = mranderson047.garden.v1v3v3.garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"cm","cm",540591536));

mranderson047.garden.v1v3v3.garden.units.cm_STAR_ = mranderson047.garden.v1v3v3.garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"cm","cm",540591536));

mranderson047.garden.v1v3v3.garden.units.cm_div = mranderson047.garden.v1v3v3.garden.units.make_unit_divider(new cljs.core.Keyword(null,"cm","cm",540591536));
mranderson047.garden.v1v3v3.garden.units.mm = mranderson047.garden.v1v3v3.garden.units.make_unit_fn(new cljs.core.Keyword(null,"mm","mm",-1652850560));

mranderson047.garden.v1v3v3.garden.units.mm_QMARK_ = mranderson047.garden.v1v3v3.garden.units.make_unit_predicate(new cljs.core.Keyword(null,"mm","mm",-1652850560));

mranderson047.garden.v1v3v3.garden.units.mm_PLUS_ = mranderson047.garden.v1v3v3.garden.units.make_unit_adder(new cljs.core.Keyword(null,"mm","mm",-1652850560));

mranderson047.garden.v1v3v3.garden.units.mm_ = mranderson047.garden.v1v3v3.garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"mm","mm",-1652850560));

mranderson047.garden.v1v3v3.garden.units.mm_STAR_ = mranderson047.garden.v1v3v3.garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"mm","mm",-1652850560));

mranderson047.garden.v1v3v3.garden.units.mm_div = mranderson047.garden.v1v3v3.garden.units.make_unit_divider(new cljs.core.Keyword(null,"mm","mm",-1652850560));
mranderson047.garden.v1v3v3.garden.units.in$ = mranderson047.garden.v1v3v3.garden.units.make_unit_fn(new cljs.core.Keyword(null,"in","in",-1531184865));

mranderson047.garden.v1v3v3.garden.units.in_QMARK_ = mranderson047.garden.v1v3v3.garden.units.make_unit_predicate(new cljs.core.Keyword(null,"in","in",-1531184865));

mranderson047.garden.v1v3v3.garden.units.in_PLUS_ = mranderson047.garden.v1v3v3.garden.units.make_unit_adder(new cljs.core.Keyword(null,"in","in",-1531184865));

mranderson047.garden.v1v3v3.garden.units.in_ = mranderson047.garden.v1v3v3.garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"in","in",-1531184865));

mranderson047.garden.v1v3v3.garden.units.in_STAR_ = mranderson047.garden.v1v3v3.garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"in","in",-1531184865));

mranderson047.garden.v1v3v3.garden.units.in_div = mranderson047.garden.v1v3v3.garden.units.make_unit_divider(new cljs.core.Keyword(null,"in","in",-1531184865));
mranderson047.garden.v1v3v3.garden.units.px = mranderson047.garden.v1v3v3.garden.units.make_unit_fn(new cljs.core.Keyword(null,"px","px",281329899));

mranderson047.garden.v1v3v3.garden.units.px_QMARK_ = mranderson047.garden.v1v3v3.garden.units.make_unit_predicate(new cljs.core.Keyword(null,"px","px",281329899));

mranderson047.garden.v1v3v3.garden.units.px_PLUS_ = mranderson047.garden.v1v3v3.garden.units.make_unit_adder(new cljs.core.Keyword(null,"px","px",281329899));

mranderson047.garden.v1v3v3.garden.units.px_ = mranderson047.garden.v1v3v3.garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"px","px",281329899));

mranderson047.garden.v1v3v3.garden.units.px_STAR_ = mranderson047.garden.v1v3v3.garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"px","px",281329899));

mranderson047.garden.v1v3v3.garden.units.px_div = mranderson047.garden.v1v3v3.garden.units.make_unit_divider(new cljs.core.Keyword(null,"px","px",281329899));
mranderson047.garden.v1v3v3.garden.units.pt = mranderson047.garden.v1v3v3.garden.units.make_unit_fn(new cljs.core.Keyword(null,"pt","pt",556460867));

mranderson047.garden.v1v3v3.garden.units.pt_QMARK_ = mranderson047.garden.v1v3v3.garden.units.make_unit_predicate(new cljs.core.Keyword(null,"pt","pt",556460867));

mranderson047.garden.v1v3v3.garden.units.pt_PLUS_ = mranderson047.garden.v1v3v3.garden.units.make_unit_adder(new cljs.core.Keyword(null,"pt","pt",556460867));

mranderson047.garden.v1v3v3.garden.units.pt_ = mranderson047.garden.v1v3v3.garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"pt","pt",556460867));

mranderson047.garden.v1v3v3.garden.units.pt_STAR_ = mranderson047.garden.v1v3v3.garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"pt","pt",556460867));

mranderson047.garden.v1v3v3.garden.units.pt_div = mranderson047.garden.v1v3v3.garden.units.make_unit_divider(new cljs.core.Keyword(null,"pt","pt",556460867));
mranderson047.garden.v1v3v3.garden.units.pc = mranderson047.garden.v1v3v3.garden.units.make_unit_fn(new cljs.core.Keyword(null,"pc","pc",512913453));

mranderson047.garden.v1v3v3.garden.units.pc_QMARK_ = mranderson047.garden.v1v3v3.garden.units.make_unit_predicate(new cljs.core.Keyword(null,"pc","pc",512913453));

mranderson047.garden.v1v3v3.garden.units.pc_PLUS_ = mranderson047.garden.v1v3v3.garden.units.make_unit_adder(new cljs.core.Keyword(null,"pc","pc",512913453));

mranderson047.garden.v1v3v3.garden.units.pc_ = mranderson047.garden.v1v3v3.garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"pc","pc",512913453));

mranderson047.garden.v1v3v3.garden.units.pc_STAR_ = mranderson047.garden.v1v3v3.garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"pc","pc",512913453));

mranderson047.garden.v1v3v3.garden.units.pc_div = mranderson047.garden.v1v3v3.garden.units.make_unit_divider(new cljs.core.Keyword(null,"pc","pc",512913453));
mranderson047.garden.v1v3v3.garden.units.percent = mranderson047.garden.v1v3v3.garden.units.make_unit_fn(new cljs.core.Keyword(null,"%","%",1704198600));

mranderson047.garden.v1v3v3.garden.units.percent_QMARK_ = mranderson047.garden.v1v3v3.garden.units.make_unit_predicate(new cljs.core.Keyword(null,"%","%",1704198600));

mranderson047.garden.v1v3v3.garden.units.percent_PLUS_ = mranderson047.garden.v1v3v3.garden.units.make_unit_adder(new cljs.core.Keyword(null,"%","%",1704198600));

mranderson047.garden.v1v3v3.garden.units.percent_ = mranderson047.garden.v1v3v3.garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"%","%",1704198600));

mranderson047.garden.v1v3v3.garden.units.percent_STAR_ = mranderson047.garden.v1v3v3.garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"%","%",1704198600));

mranderson047.garden.v1v3v3.garden.units.percent_div = mranderson047.garden.v1v3v3.garden.units.make_unit_divider(new cljs.core.Keyword(null,"%","%",1704198600));
mranderson047.garden.v1v3v3.garden.units.em = mranderson047.garden.v1v3v3.garden.units.make_unit_fn(new cljs.core.Keyword(null,"em","em",707813035));

mranderson047.garden.v1v3v3.garden.units.em_QMARK_ = mranderson047.garden.v1v3v3.garden.units.make_unit_predicate(new cljs.core.Keyword(null,"em","em",707813035));

mranderson047.garden.v1v3v3.garden.units.em_PLUS_ = mranderson047.garden.v1v3v3.garden.units.make_unit_adder(new cljs.core.Keyword(null,"em","em",707813035));

mranderson047.garden.v1v3v3.garden.units.em_ = mranderson047.garden.v1v3v3.garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"em","em",707813035));

mranderson047.garden.v1v3v3.garden.units.em_STAR_ = mranderson047.garden.v1v3v3.garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"em","em",707813035));

mranderson047.garden.v1v3v3.garden.units.em_div = mranderson047.garden.v1v3v3.garden.units.make_unit_divider(new cljs.core.Keyword(null,"em","em",707813035));
mranderson047.garden.v1v3v3.garden.units.ex = mranderson047.garden.v1v3v3.garden.units.make_unit_fn(new cljs.core.Keyword(null,"ex","ex",-1413771341));

mranderson047.garden.v1v3v3.garden.units.ex_QMARK_ = mranderson047.garden.v1v3v3.garden.units.make_unit_predicate(new cljs.core.Keyword(null,"ex","ex",-1413771341));

mranderson047.garden.v1v3v3.garden.units.ex_PLUS_ = mranderson047.garden.v1v3v3.garden.units.make_unit_adder(new cljs.core.Keyword(null,"ex","ex",-1413771341));

mranderson047.garden.v1v3v3.garden.units.ex_ = mranderson047.garden.v1v3v3.garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"ex","ex",-1413771341));

mranderson047.garden.v1v3v3.garden.units.ex_STAR_ = mranderson047.garden.v1v3v3.garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"ex","ex",-1413771341));

mranderson047.garden.v1v3v3.garden.units.ex_div = mranderson047.garden.v1v3v3.garden.units.make_unit_divider(new cljs.core.Keyword(null,"ex","ex",-1413771341));
mranderson047.garden.v1v3v3.garden.units.ch = mranderson047.garden.v1v3v3.garden.units.make_unit_fn(new cljs.core.Keyword(null,"ch","ch",-554717905));

mranderson047.garden.v1v3v3.garden.units.ch_QMARK_ = mranderson047.garden.v1v3v3.garden.units.make_unit_predicate(new cljs.core.Keyword(null,"ch","ch",-554717905));

mranderson047.garden.v1v3v3.garden.units.ch_PLUS_ = mranderson047.garden.v1v3v3.garden.units.make_unit_adder(new cljs.core.Keyword(null,"ch","ch",-554717905));

mranderson047.garden.v1v3v3.garden.units.ch_ = mranderson047.garden.v1v3v3.garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"ch","ch",-554717905));

mranderson047.garden.v1v3v3.garden.units.ch_STAR_ = mranderson047.garden.v1v3v3.garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"ch","ch",-554717905));

mranderson047.garden.v1v3v3.garden.units.ch_div = mranderson047.garden.v1v3v3.garden.units.make_unit_divider(new cljs.core.Keyword(null,"ch","ch",-554717905));
mranderson047.garden.v1v3v3.garden.units.rem = mranderson047.garden.v1v3v3.garden.units.make_unit_fn(new cljs.core.Keyword(null,"rem","rem",-976484757));

mranderson047.garden.v1v3v3.garden.units.rem_QMARK_ = mranderson047.garden.v1v3v3.garden.units.make_unit_predicate(new cljs.core.Keyword(null,"rem","rem",-976484757));

mranderson047.garden.v1v3v3.garden.units.rem_PLUS_ = mranderson047.garden.v1v3v3.garden.units.make_unit_adder(new cljs.core.Keyword(null,"rem","rem",-976484757));

mranderson047.garden.v1v3v3.garden.units.rem_ = mranderson047.garden.v1v3v3.garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"rem","rem",-976484757));

mranderson047.garden.v1v3v3.garden.units.rem_STAR_ = mranderson047.garden.v1v3v3.garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"rem","rem",-976484757));

mranderson047.garden.v1v3v3.garden.units.rem_div = mranderson047.garden.v1v3v3.garden.units.make_unit_divider(new cljs.core.Keyword(null,"rem","rem",-976484757));
mranderson047.garden.v1v3v3.garden.units.vw = mranderson047.garden.v1v3v3.garden.units.make_unit_fn(new cljs.core.Keyword(null,"vw","vw",1941049135));

mranderson047.garden.v1v3v3.garden.units.vw_QMARK_ = mranderson047.garden.v1v3v3.garden.units.make_unit_predicate(new cljs.core.Keyword(null,"vw","vw",1941049135));

mranderson047.garden.v1v3v3.garden.units.vw_PLUS_ = mranderson047.garden.v1v3v3.garden.units.make_unit_adder(new cljs.core.Keyword(null,"vw","vw",1941049135));

mranderson047.garden.v1v3v3.garden.units.vw_ = mranderson047.garden.v1v3v3.garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"vw","vw",1941049135));

mranderson047.garden.v1v3v3.garden.units.vw_STAR_ = mranderson047.garden.v1v3v3.garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"vw","vw",1941049135));

mranderson047.garden.v1v3v3.garden.units.vw_div = mranderson047.garden.v1v3v3.garden.units.make_unit_divider(new cljs.core.Keyword(null,"vw","vw",1941049135));
mranderson047.garden.v1v3v3.garden.units.vh = mranderson047.garden.v1v3v3.garden.units.make_unit_fn(new cljs.core.Keyword(null,"vh","vh",79552846));

mranderson047.garden.v1v3v3.garden.units.vh_QMARK_ = mranderson047.garden.v1v3v3.garden.units.make_unit_predicate(new cljs.core.Keyword(null,"vh","vh",79552846));

mranderson047.garden.v1v3v3.garden.units.vh_PLUS_ = mranderson047.garden.v1v3v3.garden.units.make_unit_adder(new cljs.core.Keyword(null,"vh","vh",79552846));

mranderson047.garden.v1v3v3.garden.units.vh_ = mranderson047.garden.v1v3v3.garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"vh","vh",79552846));

mranderson047.garden.v1v3v3.garden.units.vh_STAR_ = mranderson047.garden.v1v3v3.garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"vh","vh",79552846));

mranderson047.garden.v1v3v3.garden.units.vh_div = mranderson047.garden.v1v3v3.garden.units.make_unit_divider(new cljs.core.Keyword(null,"vh","vh",79552846));
mranderson047.garden.v1v3v3.garden.units.vmin = mranderson047.garden.v1v3v3.garden.units.make_unit_fn(new cljs.core.Keyword(null,"vmin","vmin",446546816));

mranderson047.garden.v1v3v3.garden.units.vmin_QMARK_ = mranderson047.garden.v1v3v3.garden.units.make_unit_predicate(new cljs.core.Keyword(null,"vmin","vmin",446546816));

mranderson047.garden.v1v3v3.garden.units.vmin_PLUS_ = mranderson047.garden.v1v3v3.garden.units.make_unit_adder(new cljs.core.Keyword(null,"vmin","vmin",446546816));

mranderson047.garden.v1v3v3.garden.units.vmin_ = mranderson047.garden.v1v3v3.garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"vmin","vmin",446546816));

mranderson047.garden.v1v3v3.garden.units.vmin_STAR_ = mranderson047.garden.v1v3v3.garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"vmin","vmin",446546816));

mranderson047.garden.v1v3v3.garden.units.vmin_div = mranderson047.garden.v1v3v3.garden.units.make_unit_divider(new cljs.core.Keyword(null,"vmin","vmin",446546816));
mranderson047.garden.v1v3v3.garden.units.vmax = mranderson047.garden.v1v3v3.garden.units.make_unit_fn(new cljs.core.Keyword(null,"vmax","vmax",-1435213544));

mranderson047.garden.v1v3v3.garden.units.vmax_QMARK_ = mranderson047.garden.v1v3v3.garden.units.make_unit_predicate(new cljs.core.Keyword(null,"vmax","vmax",-1435213544));

mranderson047.garden.v1v3v3.garden.units.vmax_PLUS_ = mranderson047.garden.v1v3v3.garden.units.make_unit_adder(new cljs.core.Keyword(null,"vmax","vmax",-1435213544));

mranderson047.garden.v1v3v3.garden.units.vmax_ = mranderson047.garden.v1v3v3.garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"vmax","vmax",-1435213544));

mranderson047.garden.v1v3v3.garden.units.vmax_STAR_ = mranderson047.garden.v1v3v3.garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"vmax","vmax",-1435213544));

mranderson047.garden.v1v3v3.garden.units.vmax_div = mranderson047.garden.v1v3v3.garden.units.make_unit_divider(new cljs.core.Keyword(null,"vmax","vmax",-1435213544));
mranderson047.garden.v1v3v3.garden.units.deg = mranderson047.garden.v1v3v3.garden.units.make_unit_fn(new cljs.core.Keyword(null,"deg","deg",-681556081));

mranderson047.garden.v1v3v3.garden.units.deg_QMARK_ = mranderson047.garden.v1v3v3.garden.units.make_unit_predicate(new cljs.core.Keyword(null,"deg","deg",-681556081));

mranderson047.garden.v1v3v3.garden.units.deg_PLUS_ = mranderson047.garden.v1v3v3.garden.units.make_unit_adder(new cljs.core.Keyword(null,"deg","deg",-681556081));

mranderson047.garden.v1v3v3.garden.units.deg_ = mranderson047.garden.v1v3v3.garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"deg","deg",-681556081));

mranderson047.garden.v1v3v3.garden.units.deg_STAR_ = mranderson047.garden.v1v3v3.garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"deg","deg",-681556081));

mranderson047.garden.v1v3v3.garden.units.deg_div = mranderson047.garden.v1v3v3.garden.units.make_unit_divider(new cljs.core.Keyword(null,"deg","deg",-681556081));
mranderson047.garden.v1v3v3.garden.units.grad = mranderson047.garden.v1v3v3.garden.units.make_unit_fn(new cljs.core.Keyword(null,"grad","grad",1125187229));

mranderson047.garden.v1v3v3.garden.units.grad_QMARK_ = mranderson047.garden.v1v3v3.garden.units.make_unit_predicate(new cljs.core.Keyword(null,"grad","grad",1125187229));

mranderson047.garden.v1v3v3.garden.units.grad_PLUS_ = mranderson047.garden.v1v3v3.garden.units.make_unit_adder(new cljs.core.Keyword(null,"grad","grad",1125187229));

mranderson047.garden.v1v3v3.garden.units.grad_ = mranderson047.garden.v1v3v3.garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"grad","grad",1125187229));

mranderson047.garden.v1v3v3.garden.units.grad_STAR_ = mranderson047.garden.v1v3v3.garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"grad","grad",1125187229));

mranderson047.garden.v1v3v3.garden.units.grad_div = mranderson047.garden.v1v3v3.garden.units.make_unit_divider(new cljs.core.Keyword(null,"grad","grad",1125187229));
mranderson047.garden.v1v3v3.garden.units.rad = mranderson047.garden.v1v3v3.garden.units.make_unit_fn(new cljs.core.Keyword(null,"rad","rad",-833983012));

mranderson047.garden.v1v3v3.garden.units.rad_QMARK_ = mranderson047.garden.v1v3v3.garden.units.make_unit_predicate(new cljs.core.Keyword(null,"rad","rad",-833983012));

mranderson047.garden.v1v3v3.garden.units.rad_PLUS_ = mranderson047.garden.v1v3v3.garden.units.make_unit_adder(new cljs.core.Keyword(null,"rad","rad",-833983012));

mranderson047.garden.v1v3v3.garden.units.rad_ = mranderson047.garden.v1v3v3.garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"rad","rad",-833983012));

mranderson047.garden.v1v3v3.garden.units.rad_STAR_ = mranderson047.garden.v1v3v3.garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"rad","rad",-833983012));

mranderson047.garden.v1v3v3.garden.units.rad_div = mranderson047.garden.v1v3v3.garden.units.make_unit_divider(new cljs.core.Keyword(null,"rad","rad",-833983012));
mranderson047.garden.v1v3v3.garden.units.turn = mranderson047.garden.v1v3v3.garden.units.make_unit_fn(new cljs.core.Keyword(null,"turn","turn",75759344));

mranderson047.garden.v1v3v3.garden.units.turn_QMARK_ = mranderson047.garden.v1v3v3.garden.units.make_unit_predicate(new cljs.core.Keyword(null,"turn","turn",75759344));

mranderson047.garden.v1v3v3.garden.units.turn_PLUS_ = mranderson047.garden.v1v3v3.garden.units.make_unit_adder(new cljs.core.Keyword(null,"turn","turn",75759344));

mranderson047.garden.v1v3v3.garden.units.turn_ = mranderson047.garden.v1v3v3.garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"turn","turn",75759344));

mranderson047.garden.v1v3v3.garden.units.turn_STAR_ = mranderson047.garden.v1v3v3.garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"turn","turn",75759344));

mranderson047.garden.v1v3v3.garden.units.turn_div = mranderson047.garden.v1v3v3.garden.units.make_unit_divider(new cljs.core.Keyword(null,"turn","turn",75759344));
mranderson047.garden.v1v3v3.garden.units.s = mranderson047.garden.v1v3v3.garden.units.make_unit_fn(new cljs.core.Keyword(null,"s","s",1705939918));

mranderson047.garden.v1v3v3.garden.units.s_QMARK_ = mranderson047.garden.v1v3v3.garden.units.make_unit_predicate(new cljs.core.Keyword(null,"s","s",1705939918));

mranderson047.garden.v1v3v3.garden.units.s_PLUS_ = mranderson047.garden.v1v3v3.garden.units.make_unit_adder(new cljs.core.Keyword(null,"s","s",1705939918));

mranderson047.garden.v1v3v3.garden.units.s_ = mranderson047.garden.v1v3v3.garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"s","s",1705939918));

mranderson047.garden.v1v3v3.garden.units.s_STAR_ = mranderson047.garden.v1v3v3.garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"s","s",1705939918));

mranderson047.garden.v1v3v3.garden.units.s_div = mranderson047.garden.v1v3v3.garden.units.make_unit_divider(new cljs.core.Keyword(null,"s","s",1705939918));
mranderson047.garden.v1v3v3.garden.units.ms = mranderson047.garden.v1v3v3.garden.units.make_unit_fn(new cljs.core.Keyword(null,"ms","ms",-1152709733));

mranderson047.garden.v1v3v3.garden.units.ms_QMARK_ = mranderson047.garden.v1v3v3.garden.units.make_unit_predicate(new cljs.core.Keyword(null,"ms","ms",-1152709733));

mranderson047.garden.v1v3v3.garden.units.ms_PLUS_ = mranderson047.garden.v1v3v3.garden.units.make_unit_adder(new cljs.core.Keyword(null,"ms","ms",-1152709733));

mranderson047.garden.v1v3v3.garden.units.ms_ = mranderson047.garden.v1v3v3.garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"ms","ms",-1152709733));

mranderson047.garden.v1v3v3.garden.units.ms_STAR_ = mranderson047.garden.v1v3v3.garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"ms","ms",-1152709733));

mranderson047.garden.v1v3v3.garden.units.ms_div = mranderson047.garden.v1v3v3.garden.units.make_unit_divider(new cljs.core.Keyword(null,"ms","ms",-1152709733));
mranderson047.garden.v1v3v3.garden.units.Hz = mranderson047.garden.v1v3v3.garden.units.make_unit_fn(new cljs.core.Keyword(null,"Hz","Hz",-1958732916));

mranderson047.garden.v1v3v3.garden.units.Hz_QMARK_ = mranderson047.garden.v1v3v3.garden.units.make_unit_predicate(new cljs.core.Keyword(null,"Hz","Hz",-1958732916));

mranderson047.garden.v1v3v3.garden.units.Hz_PLUS_ = mranderson047.garden.v1v3v3.garden.units.make_unit_adder(new cljs.core.Keyword(null,"Hz","Hz",-1958732916));

mranderson047.garden.v1v3v3.garden.units.Hz_ = mranderson047.garden.v1v3v3.garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"Hz","Hz",-1958732916));

mranderson047.garden.v1v3v3.garden.units.Hz_STAR_ = mranderson047.garden.v1v3v3.garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"Hz","Hz",-1958732916));

mranderson047.garden.v1v3v3.garden.units.Hz_div = mranderson047.garden.v1v3v3.garden.units.make_unit_divider(new cljs.core.Keyword(null,"Hz","Hz",-1958732916));
mranderson047.garden.v1v3v3.garden.units.kHz = mranderson047.garden.v1v3v3.garden.units.make_unit_fn(new cljs.core.Keyword(null,"kHz","kHz",240398466));

mranderson047.garden.v1v3v3.garden.units.kHz_QMARK_ = mranderson047.garden.v1v3v3.garden.units.make_unit_predicate(new cljs.core.Keyword(null,"kHz","kHz",240398466));

mranderson047.garden.v1v3v3.garden.units.kHz_PLUS_ = mranderson047.garden.v1v3v3.garden.units.make_unit_adder(new cljs.core.Keyword(null,"kHz","kHz",240398466));

mranderson047.garden.v1v3v3.garden.units.kHz_ = mranderson047.garden.v1v3v3.garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"kHz","kHz",240398466));

mranderson047.garden.v1v3v3.garden.units.kHz_STAR_ = mranderson047.garden.v1v3v3.garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"kHz","kHz",240398466));

mranderson047.garden.v1v3v3.garden.units.kHz_div = mranderson047.garden.v1v3v3.garden.units.make_unit_divider(new cljs.core.Keyword(null,"kHz","kHz",240398466));
mranderson047.garden.v1v3v3.garden.units.dpi = mranderson047.garden.v1v3v3.garden.units.make_unit_fn(new cljs.core.Keyword(null,"dpi","dpi",-986162832));

mranderson047.garden.v1v3v3.garden.units.dpi_QMARK_ = mranderson047.garden.v1v3v3.garden.units.make_unit_predicate(new cljs.core.Keyword(null,"dpi","dpi",-986162832));

mranderson047.garden.v1v3v3.garden.units.dpi_PLUS_ = mranderson047.garden.v1v3v3.garden.units.make_unit_adder(new cljs.core.Keyword(null,"dpi","dpi",-986162832));

mranderson047.garden.v1v3v3.garden.units.dpi_ = mranderson047.garden.v1v3v3.garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"dpi","dpi",-986162832));

mranderson047.garden.v1v3v3.garden.units.dpi_STAR_ = mranderson047.garden.v1v3v3.garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"dpi","dpi",-986162832));

mranderson047.garden.v1v3v3.garden.units.dpi_div = mranderson047.garden.v1v3v3.garden.units.make_unit_divider(new cljs.core.Keyword(null,"dpi","dpi",-986162832));
mranderson047.garden.v1v3v3.garden.units.dpcm = mranderson047.garden.v1v3v3.garden.units.make_unit_fn(new cljs.core.Keyword(null,"dpcm","dpcm",-1187601236));

mranderson047.garden.v1v3v3.garden.units.dpcm_QMARK_ = mranderson047.garden.v1v3v3.garden.units.make_unit_predicate(new cljs.core.Keyword(null,"dpcm","dpcm",-1187601236));

mranderson047.garden.v1v3v3.garden.units.dpcm_PLUS_ = mranderson047.garden.v1v3v3.garden.units.make_unit_adder(new cljs.core.Keyword(null,"dpcm","dpcm",-1187601236));

mranderson047.garden.v1v3v3.garden.units.dpcm_ = mranderson047.garden.v1v3v3.garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"dpcm","dpcm",-1187601236));

mranderson047.garden.v1v3v3.garden.units.dpcm_STAR_ = mranderson047.garden.v1v3v3.garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"dpcm","dpcm",-1187601236));

mranderson047.garden.v1v3v3.garden.units.dpcm_div = mranderson047.garden.v1v3v3.garden.units.make_unit_divider(new cljs.core.Keyword(null,"dpcm","dpcm",-1187601236));
mranderson047.garden.v1v3v3.garden.units.dppx = mranderson047.garden.v1v3v3.garden.units.make_unit_fn(new cljs.core.Keyword(null,"dppx","dppx",1920508843));

mranderson047.garden.v1v3v3.garden.units.dppx_QMARK_ = mranderson047.garden.v1v3v3.garden.units.make_unit_predicate(new cljs.core.Keyword(null,"dppx","dppx",1920508843));

mranderson047.garden.v1v3v3.garden.units.dppx_PLUS_ = mranderson047.garden.v1v3v3.garden.units.make_unit_adder(new cljs.core.Keyword(null,"dppx","dppx",1920508843));

mranderson047.garden.v1v3v3.garden.units.dppx_ = mranderson047.garden.v1v3v3.garden.units.make_unit_subtractor(new cljs.core.Keyword(null,"dppx","dppx",1920508843));

mranderson047.garden.v1v3v3.garden.units.dppx_STAR_ = mranderson047.garden.v1v3v3.garden.units.make_unit_multiplier(new cljs.core.Keyword(null,"dppx","dppx",1920508843));

mranderson047.garden.v1v3v3.garden.units.dppx_div = mranderson047.garden.v1v3v3.garden.units.make_unit_divider(new cljs.core.Keyword(null,"dppx","dppx",1920508843));

//# sourceMappingURL=mranderson047.garden.v1v3v3.garden.units.js.map
