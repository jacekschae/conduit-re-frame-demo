goog.provide('conduit.core');
goog.require('cljs.core');
goog.require('goog.History');
goog.require('secretary.core');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('conduit.events');
goog.require('conduit.subs');
goog.require('conduit.views');
conduit.core.is_service_worker_supported_QMARK_ = (function conduit$core$is_service_worker_supported_QMARK_(){
return ((typeof navigator.serviceWorker !== 'undefined') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(location.protocol,"https:")));
});
conduit.core.register_service_worker = (function conduit$core$register_service_worker(path_to_sw){
if(cljs.core.truth_(conduit.core.is_service_worker_supported_QMARK_())){
return navigator.serviceWorker.register(path_to_sw);
} else {
return null;
}
});
conduit.core.hook_browser_navigation_BANG_ = (function conduit$core$hook_browser_navigation_BANG_(){
var G__28964 = (new goog.History());
var G__28965_28968 = G__28964;
var G__28966_28969 = goog.history.EventType.NAVIGATE;
var G__28967_28970 = ((function (G__28965_28968,G__28966_28969,G__28964){
return (function (event){
return secretary.core.dispatch_BANG_(event.token);
});})(G__28965_28968,G__28966_28969,G__28964))
;
goog.events.listen(G__28965_28968,G__28966_28969,G__28967_28970);

G__28964.setEnabled(true);

return G__28964;
});
conduit.core.routes = (function conduit$core$routes(){
var slug = null;
var profile = null;
secretary.core.set_config_BANG_(new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__26486__auto___29041 = ((function (slug,profile){
return (function (params__26487__auto__){
if(cljs.core.map_QMARK_(params__26487__auto__)){
var map__28971 = params__26487__auto__;
var map__28971__$1 = ((((!((map__28971 == null)))?(((((map__28971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28971.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28971):map__28971);
var G__28973 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__28973) : re_frame.core.dispatch.call(null,G__28973));
} else {
if(cljs.core.vector_QMARK_(params__26487__auto__)){
var vec__28974 = params__26487__auto__;
var G__28977 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__28977) : re_frame.core.dispatch.call(null,G__28977));
} else {
return null;
}
}
});})(slug,profile))
;
secretary.core.add_route_BANG_("/",action__26486__auto___29041);


var action__26486__auto___29042 = ((function (slug,profile){
return (function (params__26487__auto__){
if(cljs.core.map_QMARK_(params__26487__auto__)){
var map__28978 = params__26487__auto__;
var map__28978__$1 = ((((!((map__28978 == null)))?(((((map__28978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28978.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28978):map__28978);
var G__28980 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"login","login",55217519)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__28980) : re_frame.core.dispatch.call(null,G__28980));
} else {
if(cljs.core.vector_QMARK_(params__26487__auto__)){
var vec__28981 = params__26487__auto__;
var G__28984 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"login","login",55217519)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__28984) : re_frame.core.dispatch.call(null,G__28984));
} else {
return null;
}
}
});})(slug,profile))
;
secretary.core.add_route_BANG_("/login",action__26486__auto___29042);


var action__26486__auto___29043 = ((function (slug,profile){
return (function (params__26487__auto__){
if(cljs.core.map_QMARK_(params__26487__auto__)){
var map__28985 = params__26487__auto__;
var map__28985__$1 = ((((!((map__28985 == null)))?(((((map__28985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28985.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28985):map__28985);
var G__28987 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"register","register",1968522516)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__28987) : re_frame.core.dispatch.call(null,G__28987));
} else {
if(cljs.core.vector_QMARK_(params__26487__auto__)){
var vec__28988 = params__26487__auto__;
var G__28991 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"register","register",1968522516)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__28991) : re_frame.core.dispatch.call(null,G__28991));
} else {
return null;
}
}
});})(slug,profile))
;
secretary.core.add_route_BANG_("/register",action__26486__auto___29043);


var action__26486__auto___29044 = ((function (slug,profile){
return (function (params__26487__auto__){
if(cljs.core.map_QMARK_(params__26487__auto__)){
var map__28992 = params__26487__auto__;
var map__28992__$1 = ((((!((map__28992 == null)))?(((((map__28992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28992.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28992):map__28992);
var G__28994 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"settings","settings",1556144875)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__28994) : re_frame.core.dispatch.call(null,G__28994));
} else {
if(cljs.core.vector_QMARK_(params__26487__auto__)){
var vec__28995 = params__26487__auto__;
var G__28998 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"settings","settings",1556144875)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__28998) : re_frame.core.dispatch.call(null,G__28998));
} else {
return null;
}
}
});})(slug,profile))
;
secretary.core.add_route_BANG_("/settings",action__26486__auto___29044);


var action__26486__auto___29045 = ((function (slug,profile){
return (function (params__26487__auto__){
if(cljs.core.map_QMARK_(params__26487__auto__)){
var map__28999 = params__26487__auto__;
var map__28999__$1 = ((((!((map__28999 == null)))?(((((map__28999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28999.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28999):map__28999);
var G__29001 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"editor","editor",-989377770)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__29001) : re_frame.core.dispatch.call(null,G__29001));
} else {
if(cljs.core.vector_QMARK_(params__26487__auto__)){
var vec__29002 = params__26487__auto__;
var G__29005 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"editor","editor",-989377770)], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__29005) : re_frame.core.dispatch.call(null,G__29005));
} else {
return null;
}
}
});})(slug,profile))
;
secretary.core.add_route_BANG_("/editor",action__26486__auto___29045);


var action__26486__auto___29046 = ((function (slug,profile){
return (function (params__26487__auto__){
if(cljs.core.map_QMARK_(params__26487__auto__)){
var map__29006 = params__26487__auto__;
var map__29006__$1 = ((((!((map__29006 == null)))?(((((map__29006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29006.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29006):map__29006);
var slug__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29006__$1,new cljs.core.Keyword(null,"slug","slug",2029314850));
var G__29008 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"editor","editor",-989377770),new cljs.core.Keyword(null,"slug","slug",2029314850),slug__$1], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__29008) : re_frame.core.dispatch.call(null,G__29008));
} else {
if(cljs.core.vector_QMARK_(params__26487__auto__)){
var vec__29009 = params__26487__auto__;
var slug__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29009,(0),null);
var G__29012 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"editor","editor",-989377770),new cljs.core.Keyword(null,"slug","slug",2029314850),slug__$1], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__29012) : re_frame.core.dispatch.call(null,G__29012));
} else {
return null;
}
}
});})(slug,profile))
;
secretary.core.add_route_BANG_("/editor/:slug",action__26486__auto___29046);


var action__26486__auto___29047 = ((function (slug,profile){
return (function (params__26487__auto__){
if(cljs.core.map_QMARK_(params__26487__auto__)){
var map__29013 = params__26487__auto__;
var map__29013__$1 = ((((!((map__29013 == null)))?(((((map__29013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29013.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29013):map__29013);
var G__29015 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"logout","logout",1418564329)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__29015) : re_frame.core.dispatch.call(null,G__29015));
} else {
if(cljs.core.vector_QMARK_(params__26487__auto__)){
var vec__29016 = params__26487__auto__;
var G__29019 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"logout","logout",1418564329)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__29019) : re_frame.core.dispatch.call(null,G__29019));
} else {
return null;
}
}
});})(slug,profile))
;
secretary.core.add_route_BANG_("/logout",action__26486__auto___29047);


var action__26486__auto___29048 = ((function (slug,profile){
return (function (params__26487__auto__){
if(cljs.core.map_QMARK_(params__26487__auto__)){
var map__29020 = params__26487__auto__;
var map__29020__$1 = ((((!((map__29020 == null)))?(((((map__29020.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29020.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29020):map__29020);
var slug__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29020__$1,new cljs.core.Keyword(null,"slug","slug",2029314850));
var G__29022 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"article","article",-21685045),new cljs.core.Keyword(null,"slug","slug",2029314850),slug__$1], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__29022) : re_frame.core.dispatch.call(null,G__29022));
} else {
if(cljs.core.vector_QMARK_(params__26487__auto__)){
var vec__29023 = params__26487__auto__;
var slug__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29023,(0),null);
var G__29026 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"article","article",-21685045),new cljs.core.Keyword(null,"slug","slug",2029314850),slug__$1], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__29026) : re_frame.core.dispatch.call(null,G__29026));
} else {
return null;
}
}
});})(slug,profile))
;
secretary.core.add_route_BANG_("/article/:slug",action__26486__auto___29048);


var action__26486__auto___29049 = ((function (slug,profile){
return (function (params__26487__auto__){
if(cljs.core.map_QMARK_(params__26487__auto__)){
var map__29027 = params__26487__auto__;
var map__29027__$1 = ((((!((map__29027 == null)))?(((((map__29027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29027.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29027):map__29027);
var profile__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29027__$1,new cljs.core.Keyword(null,"profile","profile",-545963874));
var G__29029 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"favorited","favorited",-1400766725),new cljs.core.Keyword(null,"favorited","favorited",-1400766725),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(profile__$1,(1))], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__29029) : re_frame.core.dispatch.call(null,G__29029));
} else {
if(cljs.core.vector_QMARK_(params__26487__auto__)){
var vec__29030 = params__26487__auto__;
var profile__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29030,(0),null);
var G__29033 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"favorited","favorited",-1400766725),new cljs.core.Keyword(null,"favorited","favorited",-1400766725),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(profile__$1,(1))], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__29033) : re_frame.core.dispatch.call(null,G__29033));
} else {
return null;
}
}
});})(slug,profile))
;
secretary.core.add_route_BANG_("/:profile/favorites",action__26486__auto___29049);


var action__26486__auto___29050 = ((function (slug,profile){
return (function (params__26487__auto__){
if(cljs.core.map_QMARK_(params__26487__auto__)){
var map__29034 = params__26487__auto__;
var map__29034__$1 = ((((!((map__29034 == null)))?(((((map__29034.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29034.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29034):map__29034);
var profile__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29034__$1,new cljs.core.Keyword(null,"profile","profile",-545963874));
var G__29036 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"profile","profile",-545963874),new cljs.core.Keyword(null,"profile","profile",-545963874),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(profile__$1,(1))], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__29036) : re_frame.core.dispatch.call(null,G__29036));
} else {
if(cljs.core.vector_QMARK_(params__26487__auto__)){
var vec__29037 = params__26487__auto__;
var profile__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29037,(0),null);
var G__29040 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-page","set-active-page",440775698),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"profile","profile",-545963874),new cljs.core.Keyword(null,"profile","profile",-545963874),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(profile__$1,(1))], null)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__29040) : re_frame.core.dispatch.call(null,G__29040));
} else {
return null;
}
}
});})(slug,profile))
;
secretary.core.add_route_BANG_("/:profile",action__26486__auto___29050);


return conduit.core.hook_browser_navigation_BANG_();
});
conduit.core.main = (function conduit$core$main(){
conduit.core.routes();

var G__29051_29052 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialise-db","initialise-db",-533872578)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__29051_29052) : re_frame.core.dispatch_sync.call(null,G__29051_29052));

return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conduit.views.conduit_app], null),document.getElementById("app"));
});
goog.exportSymbol('conduit.core.main', conduit.core.main);

//# sourceMappingURL=conduit.core.js.map
