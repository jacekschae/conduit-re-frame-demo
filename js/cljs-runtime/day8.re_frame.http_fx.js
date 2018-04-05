goog.provide('day8.re_frame.http_fx');
goog.require('cljs.core');
goog.require('goog.net.ErrorCode');
goog.require('re_frame.core');
goog.require('ajax.core');
/**
 * ajax-request only provides a single handler for success and errors
 */
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__41901){
var vec__41903 = p__41901;
var success_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41903,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41903,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(response) : on_success.call(null,response));
} else {
var details = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uri","uri",-774711847),xhrio.getLastUri(),new cljs.core.Keyword(null,"last-method","last-method",-563909920),xhrio.lastMethod_,new cljs.core.Keyword(null,"last-error","last-error",1848699973),xhrio.getLastError(),new cljs.core.Keyword(null,"last-error-code","last-error-code",276598110),xhrio.getLastErrorCode(),new cljs.core.Keyword(null,"debug-message","debug-message",-502855302),(function (){var G__41909 = xhrio.getLastErrorCode();
return goog.net.ErrorCode.getDebugMessage(G__41909);
})()], null),response], 0));
return (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(details) : on_failure.call(null,details));
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__41930){
var map__41935 = p__41930;
var map__41935__$1 = ((((!((map__41935 == null)))?(((((map__41935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41935.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41935):map__41935);
var request = map__41935__$1;
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41935__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-success","http-no-on-success",-1593227158)], null));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41935__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-failure","http-no-on-failure",962976084)], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,new cljs.core.Keyword(null,"api","api",-899839580),api,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.partial.cljs$core$IFn$_invoke$arity$4(day8.re_frame.http_fx.ajax_xhrio_handler,((function (api,map__41935,map__41935__$1,request,on_success,on_failure){
return (function (p1__41928_SHARP_){
var G__41943 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,p1__41928_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__41943) : re_frame.core.dispatch.call(null,G__41943));
});})(api,map__41935,map__41935__$1,request,on_success,on_failure))
,((function (api,map__41935,map__41935__$1,request,on_success,on_failure){
return (function (p1__41929_SHARP_){
var G__41947 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,p1__41929_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__41947) : re_frame.core.dispatch.call(null,G__41947));
});})(api,map__41935,map__41935__$1,request,on_success,on_failure))
,api)], 0)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-failure","on-failure",842888245)], 0));
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_(request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__41949 = cljs.core.seq(seq_request_maps);
var chunk__41950 = null;
var count__41951 = (0);
var i__41952 = (0);
while(true){
if((i__41952 < count__41951)){
var request__$1 = chunk__41950.cljs$core$IIndexed$_nth$arity$2(null,i__41952);
var G__41954_41960 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__41954_41960) : ajax.core.ajax_request.call(null,G__41954_41960));


var G__41961 = seq__41949;
var G__41962 = chunk__41950;
var G__41963 = count__41951;
var G__41964 = (i__41952 + (1));
seq__41949 = G__41961;
chunk__41950 = G__41962;
count__41951 = G__41963;
i__41952 = G__41964;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__41949);
if(temp__5457__auto__){
var seq__41949__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41949__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__41949__$1);
var G__41966 = cljs.core.chunk_rest(seq__41949__$1);
var G__41967 = c__4319__auto__;
var G__41968 = cljs.core.count(c__4319__auto__);
var G__41969 = (0);
seq__41949 = G__41966;
chunk__41950 = G__41967;
count__41951 = G__41968;
i__41952 = G__41969;
continue;
} else {
var request__$1 = cljs.core.first(seq__41949__$1);
var G__41958_41970 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__41958_41970) : ajax.core.ajax_request.call(null,G__41958_41970));


var G__41971 = cljs.core.next(seq__41949__$1);
var G__41972 = null;
var G__41973 = (0);
var G__41974 = (0);
seq__41949 = G__41971;
chunk__41950 = G__41972;
count__41951 = G__41973;
i__41952 = G__41974;
continue;
}
} else {
return null;
}
}
break;
}
});
var G__41975_41977 = new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714);
var G__41976_41978 = day8.re_frame.http_fx.http_effect;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__41975_41977,G__41976_41978) : re_frame.core.reg_fx.call(null,G__41975_41977,G__41976_41978));

//# sourceMappingURL=day8.re_frame.http_fx.js.map
