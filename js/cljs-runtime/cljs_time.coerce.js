goog.provide('cljs_time.coerce');
goog.require('cljs.core');
goog.require('cljs_time.core');
goog.require('cljs_time.format');
goog.require('goog.date.UtcDateTime');

/**
 * @interface
 */
cljs_time.coerce.ICoerce = function(){};

/**
 * Convert `obj` to a goog.date.DateTime instance.
 */
cljs_time.coerce.to_date_time = (function cljs_time$coerce$to_date_time(obj){
if(((!((obj == null))) && (!((obj.cljs_time$coerce$ICoerce$to_date_time$arity$1 == null))))){
return obj.cljs_time$coerce$ICoerce$to_date_time$arity$1(obj);
} else {
var x__4211__auto__ = (((obj == null))?null:obj);
var m__4212__auto__ = (cljs_time.coerce.to_date_time[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(obj) : m__4212__auto__.call(null,obj));
} else {
var m__4212__auto____$1 = (cljs_time.coerce.to_date_time["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(obj) : m__4212__auto____$1.call(null,obj));
} else {
throw cljs.core.missing_protocol("ICoerce.to-date-time",obj);
}
}
}
});

/**
 * Returns a DateTime instance in the UTC time zone corresponding to the given
 *   number of milliseconds after the Unix epoch.
 */
cljs_time.coerce.from_long = (function cljs_time$coerce$from_long(millis){
var G__42561 = millis;
if((G__42561 == null)){
return null;
} else {
return (goog.date.UtcDateTime.fromTimestamp.cljs$core$IFn$_invoke$arity$1 ? goog.date.UtcDateTime.fromTimestamp.cljs$core$IFn$_invoke$arity$1(G__42561) : goog.date.UtcDateTime.fromTimestamp.call(null,G__42561));
}
});
/**
 * Returns DateTime instance from string using formatters in cljs-time.format,
 *   returning first which parses
 */
cljs_time.coerce.from_string = (function cljs_time$coerce$from_string(s){
if(cljs.core.truth_(s)){
return cljs.core.first((function (){var iter__4292__auto__ = (function cljs_time$coerce$from_string_$_iter__42562(s__42563){
return (new cljs.core.LazySeq(null,(function (){
var s__42563__$1 = s__42563;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__42563__$1);
if(temp__5457__auto__){
var s__42563__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__42563__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__42563__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__42565 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__42564 = (0);
while(true){
if((i__42564 < size__4291__auto__)){
var f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__42564);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e42566){if((e42566 instanceof Error)){
var _ = e42566;
return null;
} else {
throw e42566;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append(b__42565,d);

var G__42568 = (i__42564 + (1));
i__42564 = G__42568;
continue;
} else {
var G__42569 = (i__42564 + (1));
i__42564 = G__42569;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42565),cljs_time$coerce$from_string_$_iter__42562(cljs.core.chunk_rest(s__42563__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42565),null);
}
} else {
var f = cljs.core.first(s__42563__$2);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e42567){if((e42567 instanceof Error)){
var _ = e42567;
return null;
} else {
throw e42567;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons(d,cljs_time$coerce$from_string_$_iter__42562(cljs.core.rest(s__42563__$2)));
} else {
var G__42570 = cljs.core.rest(s__42563__$2);
s__42563__$1 = G__42570;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__(cljs.core.vals(cljs_time.format.formatters));
})());
} else {
return null;
}
});
/**
 * Returns a DateTime instance in the UTC time zone corresponding to the given
 *   js Date object.
 */
cljs_time.coerce.from_date = (function cljs_time$coerce$from_date(date){
var G__42571 = date;
var G__42571__$1 = (((G__42571 == null))?null:G__42571.getTime());
if((G__42571__$1 == null)){
return null;
} else {
return cljs_time.coerce.from_long(G__42571__$1);
}
});
/**
 * Convert `obj` to the number of milliseconds after the Unix epoch.
 */
cljs_time.coerce.to_long = (function cljs_time$coerce$to_long(obj){
var G__42572 = obj;
var G__42572__$1 = (((G__42572 == null))?null:cljs_time.coerce.to_date_time(G__42572));
if((G__42572__$1 == null)){
return null;
} else {
return G__42572__$1.getTime();
}
});
/**
 * Convert `obj` to Unix epoch.
 */
cljs_time.coerce.to_epoch = (function cljs_time$coerce$to_epoch(obj){
var millis = cljs_time.coerce.to_long(obj);
var and__3911__auto__ = millis;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.quot(millis,(1000));
} else {
return and__3911__auto__;
}
});
/**
 * Convert `obj` to a JavaScript Date instance.
 */
cljs_time.coerce.to_date = (function cljs_time$coerce$to_date(obj){
var G__42573 = obj;
var G__42573__$1 = (((G__42573 == null))?null:cljs_time.coerce.to_date_time(G__42573));
var G__42573__$2 = (((G__42573__$1 == null))?null:G__42573__$1.getTime());
if((G__42573__$2 == null)){
return null;
} else {
return (new Date(G__42573__$2));
}
});
/**
 * Returns a string representation of obj in UTC time-zone
 *   using "yyyy-MM-dd'T'HH:mm:ss.SSSZZ" date-time representation.
 */
cljs_time.coerce.to_string = (function cljs_time$coerce$to_string(obj){
var G__42574 = obj;
var G__42574__$1 = (((G__42574 == null))?null:cljs_time.coerce.to_date_time(G__42574));
if((G__42574__$1 == null)){
return null;
} else {
return cljs_time.format.unparse(new cljs.core.Keyword(null,"date-time","date-time",177938180).cljs$core$IFn$_invoke$arity$1(cljs_time.format.formatters),G__42574__$1);
}
});
/**
 * Convert `obj` to a goog.date.Date instance
 */
cljs_time.coerce.to_local_date = (function cljs_time$coerce$to_local_date(obj){
if(cljs.core.truth_(obj)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(goog.date.Date,cljs.core.type(obj))){
return obj;
} else {
var temp__5455__auto__ = cljs_time.coerce.to_date_time(obj);
if(cljs.core.truth_(temp__5455__auto__)){
var dt = temp__5455__auto__;
return (new goog.date.Date(dt.getYear(),dt.getMonth(),dt.getDate()));
} else {
return null;
}
}
} else {
return null;
}
});
/**
 * Convert `obj` to a goog.date.DateTime instance
 */
cljs_time.coerce.to_local_date_time = (function cljs_time$coerce$to_local_date_time(obj){
if(cljs.core.truth_(obj)){
var temp__5455__auto__ = cljs_time.coerce.to_date_time(obj);
if(cljs.core.truth_(temp__5455__auto__)){
var dt = temp__5455__auto__;
var G__42575 = (new goog.date.DateTime(dt.getYear(),dt.getMonth(),dt.getDate()));
G__42575.setHours(dt.getHours());

G__42575.setMinutes(dt.getMinutes());

G__42575.setSeconds(dt.getSeconds());

G__42575.setMilliseconds(dt.getMilliseconds());

return G__42575;
} else {
return null;
}
} else {
return null;
}
});
goog.object.set(cljs_time.coerce.ICoerce,"null",true);

var G__42576_42585 = cljs_time.coerce.to_date_time;
var G__42577_42586 = "null";
var G__42578_42587 = ((function (G__42576_42585,G__42577_42586){
return (function (_){
return null;
});})(G__42576_42585,G__42577_42586))
;
goog.object.set(G__42576_42585,G__42577_42586,G__42578_42587);

Date.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL;

Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date){
var date__$1 = this;
return cljs_time.coerce.from_date(date__$1);
});

goog.date.Date.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (local_date){
var local_date__$1 = this;
if(cljs.core.truth_(local_date__$1)){
return cljs_time.core.to_utc_time_zone(local_date__$1);
} else {
return null;
}
});

goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (local_date_time){
var local_date_time__$1 = this;
if(cljs.core.truth_(local_date_time__$1)){
return cljs_time.core.to_utc_time_zone(local_date_time__$1);
} else {
return null;
}
});

goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date_time){
var date_time__$1 = this;
return date_time__$1;
});

goog.object.set(cljs_time.coerce.ICoerce,"number",true);

var G__42579_42588 = cljs_time.coerce.to_date_time;
var G__42580_42589 = "number";
var G__42581_42590 = ((function (G__42579_42588,G__42580_42589){
return (function (long$){
return cljs_time.coerce.from_long(long$);
});})(G__42579_42588,G__42580_42589))
;
goog.object.set(G__42579_42588,G__42580_42589,G__42581_42590);

goog.object.set(cljs_time.coerce.ICoerce,"string",true);

var G__42582_42591 = cljs_time.coerce.to_date_time;
var G__42583_42592 = "string";
var G__42584_42593 = ((function (G__42582_42591,G__42583_42592){
return (function (string){
return cljs_time.coerce.from_string(string);
});})(G__42582_42591,G__42583_42592))
;
goog.object.set(G__42582_42591,G__42583_42592,G__42584_42593);

//# sourceMappingURL=cljs_time.coerce.js.map
