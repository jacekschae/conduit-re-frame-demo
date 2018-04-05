goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if(typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined'){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if(typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined'){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return cljs.core._vreset_BANG_(shadow.cljs.devtools.client.browser.active_modules_ref,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(shadow.cljs.devtools.client.browser.active_modules_ref),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if(typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined'){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4502__auto__ = [];
var len__4499__auto___39364 = arguments.length;
var i__4500__auto___39365 = (0);
while(true){
if((i__4500__auto___39365 < len__4499__auto___39364)){
args__4502__auto__.push((arguments[i__4500__auto___39365]));

var G__39372 = (i__4500__auto___39365 + (1));
i__4500__auto___39365 = G__39372;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
return console.log.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),"color: blue;"], null),args)));
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq39348){
var G__39349 = cljs.core.first(seq39348);
var seq39348__$1 = cljs.core.next(seq39348);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39349,seq39348__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5455__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5455__auto__)){
var s = temp__5455__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if(typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined'){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return goog.object.get(goog.dependencies_.written,name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__39394){
var map__39395 = p__39394;
var map__39395__$1 = ((((!((map__39395 == null)))?(((((map__39395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39395.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39395):map__39395);
var src = map__39395__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39395__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39395__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__3922__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__3922__auto__){
return or__3922__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
/**
 * js/eval doesn't get optimized properly, this hack seems to do the trick
 */
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
var node = document.createElement("script");
node.appendChild(document.createTextNode(code));

document.body.appendChild(node);

return document.body.removeChild(node);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__39399 = cljs.core.seq(sources);
var chunk__39400 = null;
var count__39401 = (0);
var i__39402 = (0);
while(true){
if((i__39402 < count__39401)){
var map__39403 = chunk__39400.cljs$core$IIndexed$_nth$arity$2(null,i__39402);
var map__39403__$1 = ((((!((map__39403 == null)))?(((((map__39403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39403.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39403):map__39403);
var src = map__39403__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39403__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39403__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39403__$1,new cljs.core.Keyword(null,"js","js",1768080579));
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__39407 = seq__39399;
var G__39408 = chunk__39400;
var G__39409 = count__39401;
var G__39410 = (i__39402 + (1));
seq__39399 = G__39407;
chunk__39400 = G__39408;
count__39401 = G__39409;
i__39402 = G__39410;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__39399);
if(temp__5457__auto__){
var seq__39399__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39399__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__39399__$1);
var G__39411 = cljs.core.chunk_rest(seq__39399__$1);
var G__39412 = c__4319__auto__;
var G__39413 = cljs.core.count(c__4319__auto__);
var G__39414 = (0);
seq__39399 = G__39411;
chunk__39400 = G__39412;
count__39401 = G__39413;
i__39402 = G__39414;
continue;
} else {
var map__39405 = cljs.core.first(seq__39399__$1);
var map__39405__$1 = ((((!((map__39405 == null)))?(((((map__39405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39405.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39405):map__39405);
var src = map__39405__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39405__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39405__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39405__$1,new cljs.core.Keyword(null,"js","js",1768080579));
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__39415 = cljs.core.next(seq__39399__$1);
var G__39416 = null;
var G__39417 = (0);
var G__39418 = (0);
seq__39399 = G__39415;
chunk__39400 = G__39416;
count__39401 = G__39417;
i__39402 = G__39418;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__39419 = cljs.core.seq(js_requires);
var chunk__39420 = null;
var count__39421 = (0);
var i__39422 = (0);
while(true){
if((i__39422 < count__39421)){
var js_ns = chunk__39420.cljs$core$IIndexed$_nth$arity$2(null,i__39422);
var require_str_39423 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_39423);


var G__39424 = seq__39419;
var G__39425 = chunk__39420;
var G__39426 = count__39421;
var G__39427 = (i__39422 + (1));
seq__39419 = G__39424;
chunk__39420 = G__39425;
count__39421 = G__39426;
i__39422 = G__39427;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__39419);
if(temp__5457__auto__){
var seq__39419__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39419__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__39419__$1);
var G__39430 = cljs.core.chunk_rest(seq__39419__$1);
var G__39431 = c__4319__auto__;
var G__39432 = cljs.core.count(c__4319__auto__);
var G__39433 = (0);
seq__39419 = G__39430;
chunk__39420 = G__39431;
count__39421 = G__39432;
i__39422 = G__39433;
continue;
} else {
var js_ns = cljs.core.first(seq__39419__$1);
var require_str_39436 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_39436);


var G__39438 = cljs.core.next(seq__39419__$1);
var G__39439 = null;
var G__39440 = (0);
var G__39441 = (0);
seq__39419 = G__39438;
chunk__39420 = G__39439;
count__39421 = G__39440;
i__39422 = G__39441;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__39445 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__39445) : callback.call(null,G__39445));
} else {
var G__39446 = shadow.cljs.devtools.client.env.files_url();
var G__39447 = ((function (G__39446){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__39446))
;
var G__39448 = "POST";
var G__39449 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__39450 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__39446,G__39447,G__39448,G__39449,G__39450);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__39456){
var map__39457 = p__39456;
var map__39457__$1 = ((((!((map__39457 == null)))?(((((map__39457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39457.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39457):map__39457);
var msg = map__39457__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39457__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39457__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__39459 = info;
var map__39459__$1 = ((((!((map__39459 == null)))?(((((map__39459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39459.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39459):map__39459);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39459__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39459__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4292__auto__ = ((function (map__39459,map__39459__$1,sources,compiled,map__39457,map__39457__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39462(s__39463){
return (new cljs.core.LazySeq(null,((function (map__39459,map__39459__$1,sources,compiled,map__39457,map__39457__$1,msg,info,reload_info){
return (function (){
var s__39463__$1 = s__39463;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__39463__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var map__39471 = cljs.core.first(xs__6012__auto__);
var map__39471__$1 = ((((!((map__39471 == null)))?(((((map__39471.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39471.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39471):map__39471);
var src = map__39471__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39471__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39471__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4288__auto__ = ((function (s__39463__$1,map__39471,map__39471__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__39459,map__39459__$1,sources,compiled,map__39457,map__39457__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39462_$_iter__39464(s__39465){
return (new cljs.core.LazySeq(null,((function (s__39463__$1,map__39471,map__39471__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__39459,map__39459__$1,sources,compiled,map__39457,map__39457__$1,msg,info,reload_info){
return (function (){
var s__39465__$1 = s__39465;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__39465__$1);
if(temp__5457__auto____$1){
var s__39465__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__39465__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__39465__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__39467 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__39466 = (0);
while(true){
if((i__39466 < size__4291__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__39466);
cljs.core.chunk_append(b__39467,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__39505 = (i__39466 + (1));
i__39466 = G__39505;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39467),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39462_$_iter__39464(cljs.core.chunk_rest(s__39465__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39467),null);
}
} else {
var warning = cljs.core.first(s__39465__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39462_$_iter__39464(cljs.core.rest(s__39465__$2)));
}
} else {
return null;
}
break;
}
});})(s__39463__$1,map__39471,map__39471__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__39459,map__39459__$1,sources,compiled,map__39457,map__39457__$1,msg,info,reload_info))
,null,null));
});})(s__39463__$1,map__39471,map__39471__$1,src,resource_name,warnings,xs__6012__auto__,temp__5457__auto__,map__39459,map__39459__$1,sources,compiled,map__39457,map__39457__$1,msg,info,reload_info))
;
var fs__4289__auto__ = cljs.core.seq(iterys__4288__auto__(warnings));
if(fs__4289__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4289__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39462(cljs.core.rest(s__39463__$1)));
} else {
var G__39506 = cljs.core.rest(s__39463__$1);
s__39463__$1 = G__39506;
continue;
}
} else {
var G__39507 = cljs.core.rest(s__39463__$1);
s__39463__$1 = G__39507;
continue;
}
} else {
return null;
}
break;
}
});})(map__39459,map__39459__$1,sources,compiled,map__39457,map__39457__$1,msg,info,reload_info))
,null,null));
});})(map__39459,map__39459__$1,sources,compiled,map__39457,map__39457__$1,msg,info,reload_info))
;
return iter__4292__auto__(sources);
})()));
var seq__39473_39508 = cljs.core.seq(warnings);
var chunk__39474_39509 = null;
var count__39475_39510 = (0);
var i__39476_39511 = (0);
while(true){
if((i__39476_39511 < count__39475_39510)){
var map__39477_39512 = chunk__39474_39509.cljs$core$IIndexed$_nth$arity$2(null,i__39476_39511);
var map__39477_39513__$1 = ((((!((map__39477_39512 == null)))?(((((map__39477_39512.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39477_39512.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39477_39512):map__39477_39512);
var w_39514 = map__39477_39513__$1;
var msg_39515__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39477_39513__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_39516 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39477_39513__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39517 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39477_39513__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_39518 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39477_39513__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_39518)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_39516),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_39517),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_39515__$1)].join(''));


var G__39520 = seq__39473_39508;
var G__39521 = chunk__39474_39509;
var G__39522 = count__39475_39510;
var G__39523 = (i__39476_39511 + (1));
seq__39473_39508 = G__39520;
chunk__39474_39509 = G__39521;
count__39475_39510 = G__39522;
i__39476_39511 = G__39523;
continue;
} else {
var temp__5457__auto___39525 = cljs.core.seq(seq__39473_39508);
if(temp__5457__auto___39525){
var seq__39473_39526__$1 = temp__5457__auto___39525;
if(cljs.core.chunked_seq_QMARK_(seq__39473_39526__$1)){
var c__4319__auto___39527 = cljs.core.chunk_first(seq__39473_39526__$1);
var G__39528 = cljs.core.chunk_rest(seq__39473_39526__$1);
var G__39529 = c__4319__auto___39527;
var G__39530 = cljs.core.count(c__4319__auto___39527);
var G__39531 = (0);
seq__39473_39508 = G__39528;
chunk__39474_39509 = G__39529;
count__39475_39510 = G__39530;
i__39476_39511 = G__39531;
continue;
} else {
var map__39479_39532 = cljs.core.first(seq__39473_39526__$1);
var map__39479_39533__$1 = ((((!((map__39479_39532 == null)))?(((((map__39479_39532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39479_39532.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39479_39532):map__39479_39532);
var w_39534 = map__39479_39533__$1;
var msg_39535__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39479_39533__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_39536 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39479_39533__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39537 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39479_39533__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_39538 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39479_39533__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_39538)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_39536),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_39537),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_39535__$1)].join(''));


var G__39544 = cljs.core.next(seq__39473_39526__$1);
var G__39545 = null;
var G__39546 = (0);
var G__39547 = (0);
seq__39473_39508 = G__39544;
chunk__39474_39509 = G__39545;
count__39475_39510 = G__39546;
i__39476_39511 = G__39547;
continue;
}
} else {
}
}
break;
}

if(!(shadow.cljs.devtools.client.env.autoload)){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__39459,map__39459__$1,sources,compiled,warnings,map__39457,map__39457__$1,msg,info,reload_info){
return (function (p__39481){
var map__39482 = p__39481;
var map__39482__$1 = ((((!((map__39482 == null)))?(((((map__39482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39482.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39482):map__39482);
var src = map__39482__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39482__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39482__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__39459,map__39459__$1,sources,compiled,warnings,map__39457,map__39457__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__39459,map__39459__$1,sources,compiled,warnings,map__39457,map__39457__$1,msg,info,reload_info){
return (function (p__39489){
var map__39490 = p__39489;
var map__39490__$1 = ((((!((map__39490 == null)))?(((((map__39490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39490.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39490):map__39490);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39490__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__39459,map__39459__$1,sources,compiled,warnings,map__39457,map__39457__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__39459,map__39459__$1,sources,compiled,warnings,map__39457,map__39457__$1,msg,info,reload_info){
return (function (p__39492){
var map__39493 = p__39492;
var map__39493__$1 = ((((!((map__39493 == null)))?(((((map__39493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39493.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39493):map__39493);
var rc = map__39493__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39493__$1,new cljs.core.Keyword(null,"module","module",1424618191));
var or__3922__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format);
if(or__3922__auto__){
return or__3922__auto__;
} else {
return shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module);
}
});})(map__39459,map__39459__$1,sources,compiled,warnings,map__39457,map__39457__$1,msg,info,reload_info))
,sources))));
if(((cljs.core.empty_QMARK_(warnings)) && (cljs.core.seq(sources_to_get)))){
return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__39459,map__39459__$1,sources,compiled,warnings,map__39457,map__39457__$1,msg,info,reload_info){
return (function (p1__39455_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__39455_SHARP_,shadow.cljs.devtools.client.hud.load_end_success);
});})(sources_to_get,map__39459,map__39459__$1,sources,compiled,warnings,map__39457,map__39457__$1,msg,info,reload_info))
);
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__39549){
var map__39550 = p__39549;
var map__39550__$1 = ((((!((map__39550 == null)))?(((((map__39550.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39550.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39550):map__39550);
var msg = map__39550__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39550__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__39552 = cljs.core.seq(updates);
var chunk__39554 = null;
var count__39555 = (0);
var i__39556 = (0);
while(true){
if((i__39556 < count__39555)){
var path = chunk__39554.cljs$core$IIndexed$_nth$arity$2(null,i__39556);
if(clojure.string.ends_with_QMARK_(path,"css")){
var temp__5457__auto___39560 = document.querySelector(["link[href^=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"\"]"].join(''));
if(cljs.core.truth_(temp__5457__auto___39560)){
var node_39561 = temp__5457__auto___39560;
var new_link_39562 = (function (){var G__39558 = document.createElement("link");
G__39558.setAttribute("rel","stylesheet");

G__39558.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39558;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0));

goog.dom.insertSiblingAfter(new_link_39562,node_39561);

goog.dom.removeNode(node_39561);
} else {
}


var G__39563 = seq__39552;
var G__39564 = chunk__39554;
var G__39565 = count__39555;
var G__39566 = (i__39556 + (1));
seq__39552 = G__39563;
chunk__39554 = G__39564;
count__39555 = G__39565;
i__39556 = G__39566;
continue;
} else {
var G__39567 = seq__39552;
var G__39568 = chunk__39554;
var G__39569 = count__39555;
var G__39570 = (i__39556 + (1));
seq__39552 = G__39567;
chunk__39554 = G__39568;
count__39555 = G__39569;
i__39556 = G__39570;
continue;
}
} else {
var temp__5457__auto__ = cljs.core.seq(seq__39552);
if(temp__5457__auto__){
var seq__39552__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39552__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__39552__$1);
var G__39571 = cljs.core.chunk_rest(seq__39552__$1);
var G__39572 = c__4319__auto__;
var G__39573 = cljs.core.count(c__4319__auto__);
var G__39574 = (0);
seq__39552 = G__39571;
chunk__39554 = G__39572;
count__39555 = G__39573;
i__39556 = G__39574;
continue;
} else {
var path = cljs.core.first(seq__39552__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var temp__5457__auto___39575__$1 = document.querySelector(["link[href^=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"\"]"].join(''));
if(cljs.core.truth_(temp__5457__auto___39575__$1)){
var node_39578 = temp__5457__auto___39575__$1;
var new_link_39581 = (function (){var G__39559 = document.createElement("link");
G__39559.setAttribute("rel","stylesheet");

G__39559.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39559;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0));

goog.dom.insertSiblingAfter(new_link_39581,node_39578);

goog.dom.removeNode(node_39578);
} else {
}


var G__39583 = cljs.core.next(seq__39552__$1);
var G__39584 = null;
var G__39585 = (0);
var G__39586 = (0);
seq__39552 = G__39583;
chunk__39554 = G__39584;
count__39555 = G__39585;
i__39556 = G__39586;
continue;
} else {
var G__39587 = cljs.core.next(seq__39552__$1);
var G__39588 = null;
var G__39589 = (0);
var G__39590 = (0);
seq__39552 = G__39587;
chunk__39554 = G__39588;
count__39555 = G__39589;
i__39556 = G__39590;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__39599){
var map__39600 = p__39599;
var map__39600__$1 = ((((!((map__39600 == null)))?(((((map__39600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39600.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39600):map__39600);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39600__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39600__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__39600,map__39600__$1,id,js){
return (function (){
return eval(js);
});})(map__39600,map__39600__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__39606){
var map__39607 = p__39606;
var map__39607__$1 = ((((!((map__39607 == null)))?(((((map__39607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39607.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39607):map__39607);
var msg = map__39607__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39607__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39607__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39607__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39607__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__39607,map__39607__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__39613){
var map__39614 = p__39613;
var map__39614__$1 = ((((!((map__39614 == null)))?(((((map__39614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39614.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39614):map__39614);
var src = map__39614__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39614__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__3911__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__3911__auto__;
}
});})(map__39607,map__39607__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__39607,map__39607__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});})(sources_to_load,map__39607,map__39607__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__39617){
var map__39618 = p__39617;
var map__39618__$1 = ((((!((map__39618 == null)))?(((((map__39618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39618):map__39618);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39618__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39618__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.repl_ns_ref,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(repl_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current","current",-1088038603),new cljs.core.Keyword(null,"ns","ns",441598760)], null)));

return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__39618,map__39618__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

return shadow.cljs.devtools.client.browser.devtools_msg("REPL init successful");
});})(map__39618,map__39618__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__39620){
var map__39621 = p__39620;
var map__39621__$1 = ((((!((map__39621 == null)))?(((((map__39621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39621.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39621):map__39621);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39621__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39621__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.repl_ns_ref,ns);

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__39623){
var map__39624 = p__39623;
var map__39624__$1 = ((((!((map__39624 == null)))?(((((map__39624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39624.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39624):map__39624);
var msg = map__39624__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39624__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var G__39626 = type;
var G__39626__$1 = (((G__39626 instanceof cljs.core.Keyword))?G__39626.fqn:null);
switch (G__39626__$1) {
case "asset-watch":
return shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
return shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
return shadow.cljs.devtools.client.browser.repl_require(msg);

break;
case "repl/set-ns":
return shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

return shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

return shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
return shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

return shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":
return null;

break;
case "client/stale":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.build_id),"\" not running"].join(''));

break;
default:
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__39628 = ["http",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((shadow.cljs.devtools.client.env.ssl)?"s":null)),"://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.repl_host),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.repl_port),"/worker/compile/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.build_id),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.proc_id),"/browser"].join('');
var G__39629 = ((function (G__39628){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__39628))
;
var G__39630 = "POST";
var G__39631 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__39632 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__39628,G__39629,G__39630,G__39631,G__39632);
});
shadow.cljs.devtools.client.browser.heartbeat_BANG_ = (function shadow$cljs$devtools$client$browser$heartbeat_BANG_(){
var temp__5457__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto__)){
var s = temp__5457__auto__;
s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784),new cljs.core.Keyword(null,"v","v",21465059),Date.now()], null)], 0)));

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

socket.onmessage = ((function (print_fn,ws_url,socket){
return (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e,shadow.cljs.devtools.client.browser.handle_message);
});})(print_fn,ws_url,socket))
;

socket.onopen = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
goog.provide = goog.constructNamespace_;
} else {
}

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
});})(print_fn,ws_url,socket))
;

socket.onclose = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__3922__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return "Connection closed!";
}
})());

return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
});})(print_fn,ws_url,socket))
;

socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
});})(print_fn,ws_url,socket))
;

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5457__auto___39638 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto___39638)){
var s_39639 = temp__5457__auto___39638;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_39639.onclose = ((function (s_39639,temp__5457__auto___39638){
return (function (e){
return null;
});})(s_39639,temp__5457__auto___39638))
;

s_39639.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5457__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5457__auto__)){
var s = temp__5457__auto__;
return s.close();
} else {
return null;
}
}));

shadow.cljs.devtools.client.browser.ws_connect();
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
