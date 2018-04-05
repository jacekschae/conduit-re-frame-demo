goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__41563 = e.target.readyState;
var fexpr__41562 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__41562.cljs$core$IFn$_invoke$arity$1 ? fexpr__41562.cljs$core$IFn$_invoke$arity$1(G__41563) : fexpr__41562.call(null,G__41563));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():window.XMLHttpRequest);
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__41565,handler){
var map__41567 = p__41565;
var map__41567__$1 = ((((!((map__41567 == null)))?(((((map__41567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41567.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41567):map__41567);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41567__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41567__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41567__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41567__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41567__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41567__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41567__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__41567,map__41567__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__41564_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__41564_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
});})(this$__$1,map__41567,map__41567__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__5457__auto___41584 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5457__auto___41584)){
var response_type_41585 = temp__5457__auto___41584;
this$__$1.responseType = cljs.core.name(response_type_41585);
} else {
}

var seq__41571_41586 = cljs.core.seq(headers);
var chunk__41572_41587 = null;
var count__41573_41588 = (0);
var i__41574_41589 = (0);
while(true){
if((i__41574_41589 < count__41573_41588)){
var vec__41575_41590 = chunk__41572_41587.cljs$core$IIndexed$_nth$arity$2(null,i__41574_41589);
var k_41591 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41575_41590,(0),null);
var v_41592 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41575_41590,(1),null);
this$__$1.setRequestHeader(k_41591,v_41592);


var G__41593 = seq__41571_41586;
var G__41594 = chunk__41572_41587;
var G__41595 = count__41573_41588;
var G__41596 = (i__41574_41589 + (1));
seq__41571_41586 = G__41593;
chunk__41572_41587 = G__41594;
count__41573_41588 = G__41595;
i__41574_41589 = G__41596;
continue;
} else {
var temp__5457__auto___41597 = cljs.core.seq(seq__41571_41586);
if(temp__5457__auto___41597){
var seq__41571_41598__$1 = temp__5457__auto___41597;
if(cljs.core.chunked_seq_QMARK_(seq__41571_41598__$1)){
var c__4319__auto___41599 = cljs.core.chunk_first(seq__41571_41598__$1);
var G__41600 = cljs.core.chunk_rest(seq__41571_41598__$1);
var G__41601 = c__4319__auto___41599;
var G__41602 = cljs.core.count(c__4319__auto___41599);
var G__41603 = (0);
seq__41571_41586 = G__41600;
chunk__41572_41587 = G__41601;
count__41573_41588 = G__41602;
i__41574_41589 = G__41603;
continue;
} else {
var vec__41578_41604 = cljs.core.first(seq__41571_41598__$1);
var k_41605 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41578_41604,(0),null);
var v_41606 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41578_41604,(1),null);
this$__$1.setRequestHeader(k_41605,v_41606);


var G__41607 = cljs.core.next(seq__41571_41598__$1);
var G__41608 = null;
var G__41609 = (0);
var G__41610 = (0);
seq__41571_41586 = G__41607;
chunk__41572_41587 = G__41608;
count__41573_41588 = G__41609;
i__41574_41589 = G__41610;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__3922__auto__ = body;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "";
}
})());

return this$__$1;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
});

//# sourceMappingURL=ajax.xml_http_request.js.map
