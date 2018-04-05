goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = ((typeof window !== 'undefined')?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if(((!((this$ == null))) && (!((this$.shadow$dom$IElement$_to_dom$arity$1 == null))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto__.call(null,this$));
} else {
var m__4212__auto____$1 = (shadow.dom._to_dom["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if(((!((this$ == null))) && (!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto__.call(null,this$));
} else {
var m__4212__auto____$1 = (shadow.dom._to_svg["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__30412 = coll;
var G__30413 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__30412,G__30413) : shadow.dom.lazy_native_coll_seq.call(null,G__30412,G__30413));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__3922__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"shadow.dom/NativeColl");
});

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if(((!((el == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode([cljs.core.str.cljs$core$IFn$_invoke$arity$1(el)].join(''));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__30449 = arguments.length;
switch (G__30449) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var G__30452 = arguments.length;
switch (G__30452) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__30461 = arguments.length;
switch (G__30461) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__30467 = arguments.length;
switch (G__30467) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__30476 = arguments.length;
switch (G__30476) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__30477 = document;
var G__30478 = shadow.dom.dom_node(el);
return goog.dom.contains(G__30477,G__30478);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__30479 = shadow.dom.dom_node(parent);
var G__30480 = shadow.dom.dom_node(el);
return goog.dom.contains(G__30479,G__30480);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__30482 = shadow.dom.dom_node(el);
var G__30483 = cls;
return goog.dom.classlist.add(G__30482,G__30483);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__30487 = shadow.dom.dom_node(el);
var G__30488 = cls;
return goog.dom.classlist.remove(G__30487,G__30488);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__30490 = arguments.length;
switch (G__30490) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__30491 = shadow.dom.dom_node(el);
var G__30492 = cls;
return goog.dom.classlist.toggle(G__30491,G__30492);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__3922__auto__ = !(typeof document !== 'undefined');
if(or__3922__auto__){
return or__3922__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e30500){if((e30500 instanceof Object)){
var e = e30500;
return console.log("didnt support attachEvent",el,e);
} else {
throw e30500;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__3922__auto__ = !(typeof document !== 'undefined');
if(or__3922__auto__){
return or__3922__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__30504 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__30505 = null;
var count__30506 = (0);
var i__30507 = (0);
while(true){
if((i__30507 < count__30506)){
var el = chunk__30505.cljs$core$IIndexed$_nth$arity$2(null,i__30507);
var handler_30514__$1 = ((function (seq__30504,chunk__30505,count__30506,i__30507,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__30504,chunk__30505,count__30506,i__30507,el))
;
var G__30508_30515 = el;
var G__30509_30516 = cljs.core.name(ev);
var G__30510_30517 = handler_30514__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__30508_30515,G__30509_30516,G__30510_30517) : shadow.dom.dom_listen.call(null,G__30508_30515,G__30509_30516,G__30510_30517));


var G__30520 = seq__30504;
var G__30521 = chunk__30505;
var G__30522 = count__30506;
var G__30523 = (i__30507 + (1));
seq__30504 = G__30520;
chunk__30505 = G__30521;
count__30506 = G__30522;
i__30507 = G__30523;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__30504);
if(temp__5457__auto__){
var seq__30504__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30504__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__30504__$1);
var G__30525 = cljs.core.chunk_rest(seq__30504__$1);
var G__30526 = c__4319__auto__;
var G__30527 = cljs.core.count(c__4319__auto__);
var G__30528 = (0);
seq__30504 = G__30525;
chunk__30505 = G__30526;
count__30506 = G__30527;
i__30507 = G__30528;
continue;
} else {
var el = cljs.core.first(seq__30504__$1);
var handler_30529__$1 = ((function (seq__30504,chunk__30505,count__30506,i__30507,el,seq__30504__$1,temp__5457__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__30504,chunk__30505,count__30506,i__30507,el,seq__30504__$1,temp__5457__auto__))
;
var G__30511_30536 = el;
var G__30512_30537 = cljs.core.name(ev);
var G__30513_30538 = handler_30529__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__30511_30536,G__30512_30537,G__30513_30538) : shadow.dom.dom_listen.call(null,G__30511_30536,G__30512_30537,G__30513_30538));


var G__30539 = cljs.core.next(seq__30504__$1);
var G__30540 = null;
var G__30541 = (0);
var G__30542 = (0);
seq__30504 = G__30539;
chunk__30505 = G__30540;
count__30506 = G__30541;
i__30507 = G__30542;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__30550 = arguments.length;
switch (G__30550) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__30551 = shadow.dom.dom_node(el);
var G__30552 = cljs.core.name(ev);
var G__30553 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__30551,G__30552,G__30553) : shadow.dom.dom_listen.call(null,G__30551,G__30552,G__30553));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__30555 = shadow.dom.dom_node(el);
var G__30556 = cljs.core.name(ev);
var G__30557 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__30555,G__30556,G__30557) : shadow.dom.dom_listen_remove.call(null,G__30555,G__30556,G__30557));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__30558 = cljs.core.seq(events);
var chunk__30559 = null;
var count__30560 = (0);
var i__30561 = (0);
while(true){
if((i__30561 < count__30560)){
var vec__30564 = chunk__30559.cljs$core$IIndexed$_nth$arity$2(null,i__30561);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30564,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30564,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__30581 = seq__30558;
var G__30582 = chunk__30559;
var G__30583 = count__30560;
var G__30584 = (i__30561 + (1));
seq__30558 = G__30581;
chunk__30559 = G__30582;
count__30560 = G__30583;
i__30561 = G__30584;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__30558);
if(temp__5457__auto__){
var seq__30558__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30558__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__30558__$1);
var G__30587 = cljs.core.chunk_rest(seq__30558__$1);
var G__30588 = c__4319__auto__;
var G__30589 = cljs.core.count(c__4319__auto__);
var G__30590 = (0);
seq__30558 = G__30587;
chunk__30559 = G__30588;
count__30560 = G__30589;
i__30561 = G__30590;
continue;
} else {
var vec__30568 = cljs.core.first(seq__30558__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30568,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30568,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__30591 = cljs.core.next(seq__30558__$1);
var G__30592 = null;
var G__30593 = (0);
var G__30594 = (0);
seq__30558 = G__30591;
chunk__30559 = G__30592;
count__30560 = G__30593;
i__30561 = G__30594;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__30602 = cljs.core.seq(styles);
var chunk__30603 = null;
var count__30604 = (0);
var i__30605 = (0);
while(true){
if((i__30605 < count__30604)){
var vec__30608 = chunk__30603.cljs$core$IIndexed$_nth$arity$2(null,i__30605);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30608,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30608,(1),null);
var G__30612_30624 = dom;
var G__30613_30625 = cljs.core.name(k);
var G__30614_30626 = (((v == null))?"":v);
goog.style.setStyle(G__30612_30624,G__30613_30625,G__30614_30626);


var G__30629 = seq__30602;
var G__30630 = chunk__30603;
var G__30631 = count__30604;
var G__30632 = (i__30605 + (1));
seq__30602 = G__30629;
chunk__30603 = G__30630;
count__30604 = G__30631;
i__30605 = G__30632;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__30602);
if(temp__5457__auto__){
var seq__30602__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30602__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__30602__$1);
var G__30633 = cljs.core.chunk_rest(seq__30602__$1);
var G__30634 = c__4319__auto__;
var G__30635 = cljs.core.count(c__4319__auto__);
var G__30636 = (0);
seq__30602 = G__30633;
chunk__30603 = G__30634;
count__30604 = G__30635;
i__30605 = G__30636;
continue;
} else {
var vec__30615 = cljs.core.first(seq__30602__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30615,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30615,(1),null);
var G__30618_30637 = dom;
var G__30619_30638 = cljs.core.name(k);
var G__30620_30639 = (((v == null))?"":v);
goog.style.setStyle(G__30618_30637,G__30619_30638,G__30620_30639);


var G__30640 = cljs.core.next(seq__30602__$1);
var G__30641 = null;
var G__30642 = (0);
var G__30643 = (0);
seq__30602 = G__30640;
chunk__30603 = G__30641;
count__30604 = G__30642;
i__30605 = G__30643;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__30644_30654 = key;
var G__30644_30655__$1 = (((G__30644_30654 instanceof cljs.core.Keyword))?G__30644_30654.fqn:null);
switch (G__30644_30655__$1) {
case "id":
el.id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('');

break;
case "class":
el.className = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('');

break;
case "for":
el.htmlFor = value;

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_30664 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__3922__auto__ = goog.string.startsWith(ks_30664,"data-");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return goog.string.startsWith(ks_30664,"aria-");
}
})())){
el.setAttribute(ks_30664,value);
} else {
(el[ks_30664] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__30666 = shadow.dom.dom_node(el);
var G__30667 = cls;
return goog.dom.classlist.contains(G__30666,G__30667);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec__$1)].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__30671){
var map__30672 = p__30671;
var map__30672__$1 = ((((!((map__30672 == null)))?(((((map__30672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30672.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30672):map__30672);
var props = map__30672__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30672__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__30674 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30674,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30674,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30674,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__30677 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__30677,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__30677;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__30685 = arguments.length;
switch (G__30685) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5457__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5457__auto__)){
var n = temp__5457__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5457__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5457__auto__)){
var n = temp__5457__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__30691){
var vec__30692 = p__30691;
var seq__30693 = cljs.core.seq(vec__30692);
var first__30694 = cljs.core.first(seq__30693);
var seq__30693__$1 = cljs.core.next(seq__30693);
var nn = first__30694;
var first__30694__$1 = cljs.core.first(seq__30693__$1);
var seq__30693__$2 = cljs.core.next(seq__30693__$1);
var np = first__30694__$1;
var nc = seq__30693__$2;
var node = vec__30692;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__30695 = nn;
var G__30696 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__30695,G__30696) : create_fn.call(null,G__30695,G__30696));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__30697 = nn;
var G__30698 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__30697,G__30698) : create_fn.call(null,G__30697,G__30698));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__30700 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30700,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30700,(1),null);
var seq__30703_30729 = cljs.core.seq(node_children);
var chunk__30704_30730 = null;
var count__30705_30731 = (0);
var i__30706_30732 = (0);
while(true){
if((i__30706_30732 < count__30705_30731)){
var child_struct_30733 = chunk__30704_30730.cljs$core$IIndexed$_nth$arity$2(null,i__30706_30732);
var children_30736 = shadow.dom.dom_node(child_struct_30733);
if(cljs.core.seq_QMARK_(children_30736)){
var seq__30707_30737 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_30736));
var chunk__30709_30738 = null;
var count__30710_30739 = (0);
var i__30711_30740 = (0);
while(true){
if((i__30711_30740 < count__30710_30739)){
var child_30741 = chunk__30709_30738.cljs$core$IIndexed$_nth$arity$2(null,i__30711_30740);
if(cljs.core.truth_(child_30741)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_30741);


var G__30742 = seq__30707_30737;
var G__30743 = chunk__30709_30738;
var G__30744 = count__30710_30739;
var G__30745 = (i__30711_30740 + (1));
seq__30707_30737 = G__30742;
chunk__30709_30738 = G__30743;
count__30710_30739 = G__30744;
i__30711_30740 = G__30745;
continue;
} else {
var G__30746 = seq__30707_30737;
var G__30747 = chunk__30709_30738;
var G__30748 = count__30710_30739;
var G__30749 = (i__30711_30740 + (1));
seq__30707_30737 = G__30746;
chunk__30709_30738 = G__30747;
count__30710_30739 = G__30748;
i__30711_30740 = G__30749;
continue;
}
} else {
var temp__5457__auto___30750 = cljs.core.seq(seq__30707_30737);
if(temp__5457__auto___30750){
var seq__30707_30752__$1 = temp__5457__auto___30750;
if(cljs.core.chunked_seq_QMARK_(seq__30707_30752__$1)){
var c__4319__auto___30753 = cljs.core.chunk_first(seq__30707_30752__$1);
var G__30754 = cljs.core.chunk_rest(seq__30707_30752__$1);
var G__30755 = c__4319__auto___30753;
var G__30756 = cljs.core.count(c__4319__auto___30753);
var G__30757 = (0);
seq__30707_30737 = G__30754;
chunk__30709_30738 = G__30755;
count__30710_30739 = G__30756;
i__30711_30740 = G__30757;
continue;
} else {
var child_30758 = cljs.core.first(seq__30707_30752__$1);
if(cljs.core.truth_(child_30758)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_30758);


var G__30759 = cljs.core.next(seq__30707_30752__$1);
var G__30760 = null;
var G__30761 = (0);
var G__30762 = (0);
seq__30707_30737 = G__30759;
chunk__30709_30738 = G__30760;
count__30710_30739 = G__30761;
i__30711_30740 = G__30762;
continue;
} else {
var G__30765 = cljs.core.next(seq__30707_30752__$1);
var G__30766 = null;
var G__30767 = (0);
var G__30768 = (0);
seq__30707_30737 = G__30765;
chunk__30709_30738 = G__30766;
count__30710_30739 = G__30767;
i__30711_30740 = G__30768;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_30736);
}


var G__30773 = seq__30703_30729;
var G__30774 = chunk__30704_30730;
var G__30775 = count__30705_30731;
var G__30776 = (i__30706_30732 + (1));
seq__30703_30729 = G__30773;
chunk__30704_30730 = G__30774;
count__30705_30731 = G__30775;
i__30706_30732 = G__30776;
continue;
} else {
var temp__5457__auto___30777 = cljs.core.seq(seq__30703_30729);
if(temp__5457__auto___30777){
var seq__30703_30780__$1 = temp__5457__auto___30777;
if(cljs.core.chunked_seq_QMARK_(seq__30703_30780__$1)){
var c__4319__auto___30785 = cljs.core.chunk_first(seq__30703_30780__$1);
var G__30786 = cljs.core.chunk_rest(seq__30703_30780__$1);
var G__30787 = c__4319__auto___30785;
var G__30788 = cljs.core.count(c__4319__auto___30785);
var G__30789 = (0);
seq__30703_30729 = G__30786;
chunk__30704_30730 = G__30787;
count__30705_30731 = G__30788;
i__30706_30732 = G__30789;
continue;
} else {
var child_struct_30790 = cljs.core.first(seq__30703_30780__$1);
var children_30791 = shadow.dom.dom_node(child_struct_30790);
if(cljs.core.seq_QMARK_(children_30791)){
var seq__30715_30792 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_30791));
var chunk__30717_30793 = null;
var count__30718_30794 = (0);
var i__30719_30795 = (0);
while(true){
if((i__30719_30795 < count__30718_30794)){
var child_30796 = chunk__30717_30793.cljs$core$IIndexed$_nth$arity$2(null,i__30719_30795);
if(cljs.core.truth_(child_30796)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_30796);


var G__30797 = seq__30715_30792;
var G__30798 = chunk__30717_30793;
var G__30799 = count__30718_30794;
var G__30800 = (i__30719_30795 + (1));
seq__30715_30792 = G__30797;
chunk__30717_30793 = G__30798;
count__30718_30794 = G__30799;
i__30719_30795 = G__30800;
continue;
} else {
var G__30805 = seq__30715_30792;
var G__30806 = chunk__30717_30793;
var G__30807 = count__30718_30794;
var G__30808 = (i__30719_30795 + (1));
seq__30715_30792 = G__30805;
chunk__30717_30793 = G__30806;
count__30718_30794 = G__30807;
i__30719_30795 = G__30808;
continue;
}
} else {
var temp__5457__auto___30810__$1 = cljs.core.seq(seq__30715_30792);
if(temp__5457__auto___30810__$1){
var seq__30715_30812__$1 = temp__5457__auto___30810__$1;
if(cljs.core.chunked_seq_QMARK_(seq__30715_30812__$1)){
var c__4319__auto___30818 = cljs.core.chunk_first(seq__30715_30812__$1);
var G__30819 = cljs.core.chunk_rest(seq__30715_30812__$1);
var G__30820 = c__4319__auto___30818;
var G__30821 = cljs.core.count(c__4319__auto___30818);
var G__30822 = (0);
seq__30715_30792 = G__30819;
chunk__30717_30793 = G__30820;
count__30718_30794 = G__30821;
i__30719_30795 = G__30822;
continue;
} else {
var child_30829 = cljs.core.first(seq__30715_30812__$1);
if(cljs.core.truth_(child_30829)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_30829);


var G__30830 = cljs.core.next(seq__30715_30812__$1);
var G__30831 = null;
var G__30832 = (0);
var G__30833 = (0);
seq__30715_30792 = G__30830;
chunk__30717_30793 = G__30831;
count__30718_30794 = G__30832;
i__30719_30795 = G__30833;
continue;
} else {
var G__30834 = cljs.core.next(seq__30715_30812__$1);
var G__30835 = null;
var G__30836 = (0);
var G__30837 = (0);
seq__30715_30792 = G__30834;
chunk__30717_30793 = G__30835;
count__30718_30794 = G__30836;
i__30719_30795 = G__30837;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_30791);
}


var G__30838 = cljs.core.next(seq__30703_30780__$1);
var G__30839 = null;
var G__30840 = (0);
var G__30841 = (0);
seq__30703_30729 = G__30838;
chunk__30704_30730 = G__30839;
count__30705_30731 = G__30840;
i__30706_30732 = G__30841;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__30852 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__30852);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if(((!((node == null)))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__30857 = cljs.core.seq(node);
var chunk__30858 = null;
var count__30859 = (0);
var i__30860 = (0);
while(true){
if((i__30860 < count__30859)){
var n = chunk__30858.cljs$core$IIndexed$_nth$arity$2(null,i__30860);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__30865 = seq__30857;
var G__30866 = chunk__30858;
var G__30867 = count__30859;
var G__30868 = (i__30860 + (1));
seq__30857 = G__30865;
chunk__30858 = G__30866;
count__30859 = G__30867;
i__30860 = G__30868;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__30857);
if(temp__5457__auto__){
var seq__30857__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30857__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__30857__$1);
var G__30869 = cljs.core.chunk_rest(seq__30857__$1);
var G__30870 = c__4319__auto__;
var G__30871 = cljs.core.count(c__4319__auto__);
var G__30872 = (0);
seq__30857 = G__30869;
chunk__30858 = G__30870;
count__30859 = G__30871;
i__30860 = G__30872;
continue;
} else {
var n = cljs.core.first(seq__30857__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__30875 = cljs.core.next(seq__30857__$1);
var G__30876 = null;
var G__30877 = (0);
var G__30878 = (0);
seq__30857 = G__30875;
chunk__30858 = G__30876;
count__30859 = G__30877;
i__30860 = G__30878;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__30881 = shadow.dom.dom_node(new$);
var G__30882 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__30881,G__30882);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__30889 = arguments.length;
switch (G__30889) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var G__30898 = arguments.length;
switch (G__30898) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__30911 = arguments.length;
switch (G__30911) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__3922__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join(''));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4502__auto__ = [];
var len__4499__auto___30950 = arguments.length;
var i__4500__auto___30951 = (0);
while(true){
if((i__4500__auto___30951 < len__4499__auto___30950)){
args__4502__auto__.push((arguments[i__4500__auto___30951]));

var G__30952 = (i__4500__auto___30951 + (1));
i__4500__auto___30951 = G__30952;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__30934_30954 = cljs.core.seq(nodes);
var chunk__30935_30955 = null;
var count__30936_30956 = (0);
var i__30937_30957 = (0);
while(true){
if((i__30937_30957 < count__30936_30956)){
var node_30958 = chunk__30935_30955.cljs$core$IIndexed$_nth$arity$2(null,i__30937_30957);
fragment.appendChild(shadow.dom._to_dom(node_30958));


var G__30959 = seq__30934_30954;
var G__30960 = chunk__30935_30955;
var G__30961 = count__30936_30956;
var G__30962 = (i__30937_30957 + (1));
seq__30934_30954 = G__30959;
chunk__30935_30955 = G__30960;
count__30936_30956 = G__30961;
i__30937_30957 = G__30962;
continue;
} else {
var temp__5457__auto___30963 = cljs.core.seq(seq__30934_30954);
if(temp__5457__auto___30963){
var seq__30934_30964__$1 = temp__5457__auto___30963;
if(cljs.core.chunked_seq_QMARK_(seq__30934_30964__$1)){
var c__4319__auto___30965 = cljs.core.chunk_first(seq__30934_30964__$1);
var G__30967 = cljs.core.chunk_rest(seq__30934_30964__$1);
var G__30968 = c__4319__auto___30965;
var G__30969 = cljs.core.count(c__4319__auto___30965);
var G__30970 = (0);
seq__30934_30954 = G__30967;
chunk__30935_30955 = G__30968;
count__30936_30956 = G__30969;
i__30937_30957 = G__30970;
continue;
} else {
var node_30972 = cljs.core.first(seq__30934_30964__$1);
fragment.appendChild(shadow.dom._to_dom(node_30972));


var G__30973 = cljs.core.next(seq__30934_30964__$1);
var G__30974 = null;
var G__30975 = (0);
var G__30976 = (0);
seq__30934_30954 = G__30973;
chunk__30935_30955 = G__30974;
count__30936_30956 = G__30975;
i__30937_30957 = G__30976;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.dom.fragment.cljs$lang$applyTo = (function (seq30932){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30932));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__30983_31002 = cljs.core.seq(scripts);
var chunk__30984_31003 = null;
var count__30985_31004 = (0);
var i__30986_31005 = (0);
while(true){
if((i__30986_31005 < count__30985_31004)){
var vec__30987_31007 = chunk__30984_31003.cljs$core$IIndexed$_nth$arity$2(null,i__30986_31005);
var script_tag_31008 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30987_31007,(0),null);
var script_body_31009 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30987_31007,(1),null);
eval(script_body_31009);


var G__31010 = seq__30983_31002;
var G__31011 = chunk__30984_31003;
var G__31012 = count__30985_31004;
var G__31013 = (i__30986_31005 + (1));
seq__30983_31002 = G__31010;
chunk__30984_31003 = G__31011;
count__30985_31004 = G__31012;
i__30986_31005 = G__31013;
continue;
} else {
var temp__5457__auto___31015 = cljs.core.seq(seq__30983_31002);
if(temp__5457__auto___31015){
var seq__30983_31017__$1 = temp__5457__auto___31015;
if(cljs.core.chunked_seq_QMARK_(seq__30983_31017__$1)){
var c__4319__auto___31018 = cljs.core.chunk_first(seq__30983_31017__$1);
var G__31021 = cljs.core.chunk_rest(seq__30983_31017__$1);
var G__31022 = c__4319__auto___31018;
var G__31023 = cljs.core.count(c__4319__auto___31018);
var G__31024 = (0);
seq__30983_31002 = G__31021;
chunk__30984_31003 = G__31022;
count__30985_31004 = G__31023;
i__30986_31005 = G__31024;
continue;
} else {
var vec__30991_31025 = cljs.core.first(seq__30983_31017__$1);
var script_tag_31026 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30991_31025,(0),null);
var script_body_31027 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30991_31025,(1),null);
eval(script_body_31027);


var G__31028 = cljs.core.next(seq__30983_31017__$1);
var G__31029 = null;
var G__31030 = (0);
var G__31031 = (0);
seq__30983_31002 = G__31028;
chunk__30984_31003 = G__31029;
count__30985_31004 = G__31030;
i__30986_31005 = G__31031;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__30996){
var vec__30997 = p__30996;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30997,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30997,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
el.innerHTML = s;

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__31038 = shadow.dom.dom_node(el);
var G__31039 = cls;
return goog.dom.getAncestorByClass(G__31038,G__31039);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__31041 = arguments.length;
switch (G__31041) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__31045 = shadow.dom.dom_node(el);
var G__31046 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__31045,G__31046);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__31047 = shadow.dom.dom_node(el);
var G__31048 = cljs.core.name(tag);
var G__31049 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__31047,G__31048,G__31049);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__31053 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__31053);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__31056 = shadow.dom.dom_node(dom);
var G__31057 = value;
return goog.dom.forms.setValue(G__31056,G__31057);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__31076 = cljs.core.seq(style_keys);
var chunk__31077 = null;
var count__31078 = (0);
var i__31079 = (0);
while(true){
if((i__31079 < count__31078)){
var it = chunk__31077.cljs$core$IIndexed$_nth$arity$2(null,i__31079);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__31082 = seq__31076;
var G__31083 = chunk__31077;
var G__31084 = count__31078;
var G__31085 = (i__31079 + (1));
seq__31076 = G__31082;
chunk__31077 = G__31083;
count__31078 = G__31084;
i__31079 = G__31085;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__31076);
if(temp__5457__auto__){
var seq__31076__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31076__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__31076__$1);
var G__31087 = cljs.core.chunk_rest(seq__31076__$1);
var G__31088 = c__4319__auto__;
var G__31089 = cljs.core.count(c__4319__auto__);
var G__31090 = (0);
seq__31076 = G__31087;
chunk__31077 = G__31088;
count__31078 = G__31089;
i__31079 = G__31090;
continue;
} else {
var it = cljs.core.first(seq__31076__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__31091 = cljs.core.next(seq__31076__$1);
var G__31092 = null;
var G__31093 = (0);
var G__31094 = (0);
seq__31076 = G__31091;
chunk__31077 = G__31092;
count__31078 = G__31093;
i__31079 = G__31094;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11972__auto__,k__11973__auto__){
var self__ = this;
var this__11972__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__11972__auto____$1,k__11973__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11974__auto__,k31096,else__11975__auto__){
var self__ = this;
var this__11974__auto____$1 = this;
var G__31101 = k31096;
var G__31101__$1 = (((G__31101 instanceof cljs.core.Keyword))?G__31101.fqn:null);
switch (G__31101__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k31096,else__11975__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11986__auto__,writer__11987__auto__,opts__11988__auto__){
var self__ = this;
var this__11986__auto____$1 = this;
var pr_pair__11989__auto__ = ((function (this__11986__auto____$1){
return (function (keyval__11990__auto__){
return cljs.core.pr_sequential_writer(writer__11987__auto__,cljs.core.pr_writer,""," ","",opts__11988__auto__,keyval__11990__auto__);
});})(this__11986__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__11987__auto__,pr_pair__11989__auto__,"#shadow.dom.Coordinate{",", ","}",opts__11988__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31095){
var self__ = this;
var G__31095__$1 = this;
return (new cljs.core.RecordIter((0),G__31095__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11970__auto__){
var self__ = this;
var this__11970__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11967__auto__){
var self__ = this;
var this__11967__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11976__auto__){
var self__ = this;
var this__11976__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11968__auto__){
var self__ = this;
var this__11968__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = (function (){var fexpr__31105 = ((function (h__4030__auto__,this__11968__auto____$1){
return (function (coll__11969__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__11969__auto__));
});})(h__4030__auto__,this__11968__auto____$1))
;
return fexpr__31105(this__11968__auto____$1);
})();
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this31097,other31098){
var self__ = this;
var this31097__$1 = this;
return ((!((other31098 == null))) && ((this31097__$1.constructor === other31098.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31097__$1.x,other31098.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31097__$1.y,other31098.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31097__$1.__extmap,other31098.__extmap)));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11981__auto__,k__11982__auto__){
var self__ = this;
var this__11981__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__11982__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__11981__auto____$1),self__.__meta),k__11982__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__11982__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11979__auto__,k__11980__auto__,G__31095){
var self__ = this;
var this__11979__auto____$1 = this;
var pred__31109 = cljs.core.keyword_identical_QMARK_;
var expr__31110 = k__11980__auto__;
if(cljs.core.truth_((function (){var G__31112 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__31113 = expr__31110;
return (pred__31109.cljs$core$IFn$_invoke$arity$2 ? pred__31109.cljs$core$IFn$_invoke$arity$2(G__31112,G__31113) : pred__31109.call(null,G__31112,G__31113));
})())){
return (new shadow.dom.Coordinate(G__31095,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__31114 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__31115 = expr__31110;
return (pred__31109.cljs$core$IFn$_invoke$arity$2 ? pred__31109.cljs$core$IFn$_invoke$arity$2(G__31114,G__31115) : pred__31109.call(null,G__31114,G__31115));
})())){
return (new shadow.dom.Coordinate(self__.x,G__31095,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11980__auto__,G__31095),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11984__auto__){
var self__ = this;
var this__11984__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11971__auto__,G__31095){
var self__ = this;
var this__11971__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__31095,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11977__auto__,entry__11978__auto__){
var self__ = this;
var this__11977__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__11978__auto__)){
return cljs.core._assoc(this__11977__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11978__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11978__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__11977__auto____$1,entry__11978__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write(writer__4209__auto__,"shadow.dom/Coordinate");
});

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__31099){
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__31099),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__31099),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__31099,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0))),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__31162 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__31162);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__31163 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__31163);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__31165 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__31165);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11972__auto__,k__11973__auto__){
var self__ = this;
var this__11972__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__11972__auto____$1,k__11973__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11974__auto__,k31167,else__11975__auto__){
var self__ = this;
var this__11974__auto____$1 = this;
var G__31172 = k31167;
var G__31172__$1 = (((G__31172 instanceof cljs.core.Keyword))?G__31172.fqn:null);
switch (G__31172__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k31167,else__11975__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11986__auto__,writer__11987__auto__,opts__11988__auto__){
var self__ = this;
var this__11986__auto____$1 = this;
var pr_pair__11989__auto__ = ((function (this__11986__auto____$1){
return (function (keyval__11990__auto__){
return cljs.core.pr_sequential_writer(writer__11987__auto__,cljs.core.pr_writer,""," ","",opts__11988__auto__,keyval__11990__auto__);
});})(this__11986__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__11987__auto__,pr_pair__11989__auto__,"#shadow.dom.Size{",", ","}",opts__11988__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31166){
var self__ = this;
var G__31166__$1 = this;
return (new cljs.core.RecordIter((0),G__31166__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11970__auto__){
var self__ = this;
var this__11970__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11967__auto__){
var self__ = this;
var this__11967__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11976__auto__){
var self__ = this;
var this__11976__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11968__auto__){
var self__ = this;
var this__11968__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = (function (){var fexpr__31183 = ((function (h__4030__auto__,this__11968__auto____$1){
return (function (coll__11969__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__11969__auto__));
});})(h__4030__auto__,this__11968__auto____$1))
;
return fexpr__31183(this__11968__auto____$1);
})();
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this31168,other31169){
var self__ = this;
var this31168__$1 = this;
return ((!((other31169 == null))) && ((this31168__$1.constructor === other31169.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31168__$1.w,other31169.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31168__$1.h,other31169.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31168__$1.__extmap,other31169.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11981__auto__,k__11982__auto__){
var self__ = this;
var this__11981__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__11982__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__11981__auto____$1),self__.__meta),k__11982__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__11982__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11979__auto__,k__11980__auto__,G__31166){
var self__ = this;
var this__11979__auto____$1 = this;
var pred__31185 = cljs.core.keyword_identical_QMARK_;
var expr__31186 = k__11980__auto__;
if(cljs.core.truth_((function (){var G__31188 = new cljs.core.Keyword(null,"w","w",354169001);
var G__31189 = expr__31186;
return (pred__31185.cljs$core$IFn$_invoke$arity$2 ? pred__31185.cljs$core$IFn$_invoke$arity$2(G__31188,G__31189) : pred__31185.call(null,G__31188,G__31189));
})())){
return (new shadow.dom.Size(G__31166,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__31190 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__31191 = expr__31186;
return (pred__31185.cljs$core$IFn$_invoke$arity$2 ? pred__31185.cljs$core$IFn$_invoke$arity$2(G__31190,G__31191) : pred__31185.call(null,G__31190,G__31191));
})())){
return (new shadow.dom.Size(self__.w,G__31166,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11980__auto__,G__31166),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11984__auto__){
var self__ = this;
var this__11984__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11971__auto__,G__31166){
var self__ = this;
var this__11971__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__31166,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11977__auto__,entry__11978__auto__){
var self__ = this;
var this__11977__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__11978__auto__)){
return cljs.core._assoc(this__11977__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11978__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11978__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__11977__auto____$1,entry__11978__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write(writer__4209__auto__,"shadow.dom/Size");
});

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__31170){
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__31170),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__31170),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__31170,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0))),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__31199 = shadow.dom.dom_node(el);
return goog.style.getSize(G__31199);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4373__auto__ = opts;
var l__4374__auto__ = a__4373__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4374__auto__)){
var G__31200 = (i + (1));
var G__31201 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__31200;
ret = G__31201;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__31203){
var vec__31205 = p__31203;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31205,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31205,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k)),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent([cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__31213 = arguments.length;
switch (G__31213) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__31219_31221 = new_node;
var G__31220_31222 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__31219_31221,G__31220_31222);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__31223_31225 = new_node;
var G__31224_31226 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__31223_31225,G__31224_31226);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5455__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5455__auto__)){
var child = temp__5455__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__31231 = ps;
var G__31232 = (i + (1));
el__$1 = G__31231;
i = G__31232;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__31234 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__31234);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__31236 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__31236);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__31237 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__31237);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__31238 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31238,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31238,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31238,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__31242_31252 = cljs.core.seq(props);
var chunk__31243_31253 = null;
var count__31244_31254 = (0);
var i__31245_31255 = (0);
while(true){
if((i__31245_31255 < count__31244_31254)){
var vec__31246_31256 = chunk__31243_31253.cljs$core$IIndexed$_nth$arity$2(null,i__31245_31255);
var k_31257 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31246_31256,(0),null);
var v_31258 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31246_31256,(1),null);
el.setAttributeNS((function (){var temp__5457__auto__ = cljs.core.namespace(k_31257);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_31257),v_31258);


var G__31266 = seq__31242_31252;
var G__31267 = chunk__31243_31253;
var G__31268 = count__31244_31254;
var G__31269 = (i__31245_31255 + (1));
seq__31242_31252 = G__31266;
chunk__31243_31253 = G__31267;
count__31244_31254 = G__31268;
i__31245_31255 = G__31269;
continue;
} else {
var temp__5457__auto___31270 = cljs.core.seq(seq__31242_31252);
if(temp__5457__auto___31270){
var seq__31242_31273__$1 = temp__5457__auto___31270;
if(cljs.core.chunked_seq_QMARK_(seq__31242_31273__$1)){
var c__4319__auto___31276 = cljs.core.chunk_first(seq__31242_31273__$1);
var G__31277 = cljs.core.chunk_rest(seq__31242_31273__$1);
var G__31278 = c__4319__auto___31276;
var G__31279 = cljs.core.count(c__4319__auto___31276);
var G__31280 = (0);
seq__31242_31252 = G__31277;
chunk__31243_31253 = G__31278;
count__31244_31254 = G__31279;
i__31245_31255 = G__31280;
continue;
} else {
var vec__31249_31283 = cljs.core.first(seq__31242_31273__$1);
var k_31284 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31249_31283,(0),null);
var v_31285 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31249_31283,(1),null);
el.setAttributeNS((function (){var temp__5457__auto____$1 = cljs.core.namespace(k_31284);
if(cljs.core.truth_(temp__5457__auto____$1)){
var ns = temp__5457__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_31284),v_31285);


var G__31294 = cljs.core.next(seq__31242_31273__$1);
var G__31295 = null;
var G__31296 = (0);
var G__31297 = (0);
seq__31242_31252 = G__31294;
chunk__31243_31253 = G__31295;
count__31244_31254 = G__31296;
i__31245_31255 = G__31297;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if(((!((el == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__31301 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31301,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31301,(1),null);
var seq__31304_31323 = cljs.core.seq(node_children);
var chunk__31306_31324 = null;
var count__31307_31325 = (0);
var i__31308_31326 = (0);
while(true){
if((i__31308_31326 < count__31307_31325)){
var child_struct_31327 = chunk__31306_31324.cljs$core$IIndexed$_nth$arity$2(null,i__31308_31326);
if(!((child_struct_31327 == null))){
if(typeof child_struct_31327 === 'string'){
var text_31328 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_31328),cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_31327)].join(''));
} else {
var children_31329 = shadow.dom.svg_node(child_struct_31327);
if(cljs.core.seq_QMARK_(children_31329)){
var seq__31310_31330 = cljs.core.seq(children_31329);
var chunk__31312_31331 = null;
var count__31313_31332 = (0);
var i__31314_31333 = (0);
while(true){
if((i__31314_31333 < count__31313_31332)){
var child_31334 = chunk__31312_31331.cljs$core$IIndexed$_nth$arity$2(null,i__31314_31333);
if(cljs.core.truth_(child_31334)){
node.appendChild(child_31334);


var G__31335 = seq__31310_31330;
var G__31336 = chunk__31312_31331;
var G__31337 = count__31313_31332;
var G__31338 = (i__31314_31333 + (1));
seq__31310_31330 = G__31335;
chunk__31312_31331 = G__31336;
count__31313_31332 = G__31337;
i__31314_31333 = G__31338;
continue;
} else {
var G__31339 = seq__31310_31330;
var G__31340 = chunk__31312_31331;
var G__31341 = count__31313_31332;
var G__31342 = (i__31314_31333 + (1));
seq__31310_31330 = G__31339;
chunk__31312_31331 = G__31340;
count__31313_31332 = G__31341;
i__31314_31333 = G__31342;
continue;
}
} else {
var temp__5457__auto___31343 = cljs.core.seq(seq__31310_31330);
if(temp__5457__auto___31343){
var seq__31310_31344__$1 = temp__5457__auto___31343;
if(cljs.core.chunked_seq_QMARK_(seq__31310_31344__$1)){
var c__4319__auto___31345 = cljs.core.chunk_first(seq__31310_31344__$1);
var G__31346 = cljs.core.chunk_rest(seq__31310_31344__$1);
var G__31347 = c__4319__auto___31345;
var G__31348 = cljs.core.count(c__4319__auto___31345);
var G__31349 = (0);
seq__31310_31330 = G__31346;
chunk__31312_31331 = G__31347;
count__31313_31332 = G__31348;
i__31314_31333 = G__31349;
continue;
} else {
var child_31350 = cljs.core.first(seq__31310_31344__$1);
if(cljs.core.truth_(child_31350)){
node.appendChild(child_31350);


var G__31351 = cljs.core.next(seq__31310_31344__$1);
var G__31352 = null;
var G__31353 = (0);
var G__31354 = (0);
seq__31310_31330 = G__31351;
chunk__31312_31331 = G__31352;
count__31313_31332 = G__31353;
i__31314_31333 = G__31354;
continue;
} else {
var G__31355 = cljs.core.next(seq__31310_31344__$1);
var G__31356 = null;
var G__31357 = (0);
var G__31358 = (0);
seq__31310_31330 = G__31355;
chunk__31312_31331 = G__31356;
count__31313_31332 = G__31357;
i__31314_31333 = G__31358;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_31329);
}
}


var G__31359 = seq__31304_31323;
var G__31360 = chunk__31306_31324;
var G__31361 = count__31307_31325;
var G__31362 = (i__31308_31326 + (1));
seq__31304_31323 = G__31359;
chunk__31306_31324 = G__31360;
count__31307_31325 = G__31361;
i__31308_31326 = G__31362;
continue;
} else {
var G__31363 = seq__31304_31323;
var G__31364 = chunk__31306_31324;
var G__31365 = count__31307_31325;
var G__31366 = (i__31308_31326 + (1));
seq__31304_31323 = G__31363;
chunk__31306_31324 = G__31364;
count__31307_31325 = G__31365;
i__31308_31326 = G__31366;
continue;
}
} else {
var temp__5457__auto___31367 = cljs.core.seq(seq__31304_31323);
if(temp__5457__auto___31367){
var seq__31304_31368__$1 = temp__5457__auto___31367;
if(cljs.core.chunked_seq_QMARK_(seq__31304_31368__$1)){
var c__4319__auto___31369 = cljs.core.chunk_first(seq__31304_31368__$1);
var G__31370 = cljs.core.chunk_rest(seq__31304_31368__$1);
var G__31371 = c__4319__auto___31369;
var G__31372 = cljs.core.count(c__4319__auto___31369);
var G__31373 = (0);
seq__31304_31323 = G__31370;
chunk__31306_31324 = G__31371;
count__31307_31325 = G__31372;
i__31308_31326 = G__31373;
continue;
} else {
var child_struct_31375 = cljs.core.first(seq__31304_31368__$1);
if(!((child_struct_31375 == null))){
if(typeof child_struct_31375 === 'string'){
var text_31377 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_31377),cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_31375)].join(''));
} else {
var children_31378 = shadow.dom.svg_node(child_struct_31375);
if(cljs.core.seq_QMARK_(children_31378)){
var seq__31316_31379 = cljs.core.seq(children_31378);
var chunk__31318_31380 = null;
var count__31319_31381 = (0);
var i__31320_31382 = (0);
while(true){
if((i__31320_31382 < count__31319_31381)){
var child_31383 = chunk__31318_31380.cljs$core$IIndexed$_nth$arity$2(null,i__31320_31382);
if(cljs.core.truth_(child_31383)){
node.appendChild(child_31383);


var G__31385 = seq__31316_31379;
var G__31386 = chunk__31318_31380;
var G__31387 = count__31319_31381;
var G__31388 = (i__31320_31382 + (1));
seq__31316_31379 = G__31385;
chunk__31318_31380 = G__31386;
count__31319_31381 = G__31387;
i__31320_31382 = G__31388;
continue;
} else {
var G__31390 = seq__31316_31379;
var G__31391 = chunk__31318_31380;
var G__31392 = count__31319_31381;
var G__31393 = (i__31320_31382 + (1));
seq__31316_31379 = G__31390;
chunk__31318_31380 = G__31391;
count__31319_31381 = G__31392;
i__31320_31382 = G__31393;
continue;
}
} else {
var temp__5457__auto___31394__$1 = cljs.core.seq(seq__31316_31379);
if(temp__5457__auto___31394__$1){
var seq__31316_31395__$1 = temp__5457__auto___31394__$1;
if(cljs.core.chunked_seq_QMARK_(seq__31316_31395__$1)){
var c__4319__auto___31396 = cljs.core.chunk_first(seq__31316_31395__$1);
var G__31397 = cljs.core.chunk_rest(seq__31316_31395__$1);
var G__31398 = c__4319__auto___31396;
var G__31399 = cljs.core.count(c__4319__auto___31396);
var G__31400 = (0);
seq__31316_31379 = G__31397;
chunk__31318_31380 = G__31398;
count__31319_31381 = G__31399;
i__31320_31382 = G__31400;
continue;
} else {
var child_31401 = cljs.core.first(seq__31316_31395__$1);
if(cljs.core.truth_(child_31401)){
node.appendChild(child_31401);


var G__31402 = cljs.core.next(seq__31316_31395__$1);
var G__31403 = null;
var G__31404 = (0);
var G__31405 = (0);
seq__31316_31379 = G__31402;
chunk__31318_31380 = G__31403;
count__31319_31381 = G__31404;
i__31320_31382 = G__31405;
continue;
} else {
var G__31406 = cljs.core.next(seq__31316_31395__$1);
var G__31407 = null;
var G__31408 = (0);
var G__31409 = (0);
seq__31316_31379 = G__31406;
chunk__31318_31380 = G__31407;
count__31319_31381 = G__31408;
i__31320_31382 = G__31409;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_31378);
}
}


var G__31412 = cljs.core.next(seq__31304_31368__$1);
var G__31413 = null;
var G__31414 = (0);
var G__31415 = (0);
seq__31304_31323 = G__31412;
chunk__31306_31324 = G__31413;
count__31307_31325 = G__31414;
i__31308_31326 = G__31415;
continue;
} else {
var G__31417 = cljs.core.next(seq__31304_31368__$1);
var G__31418 = null;
var G__31419 = (0);
var G__31420 = (0);
seq__31304_31323 = G__31417;
chunk__31306_31324 = G__31418;
count__31307_31325 = G__31419;
i__31308_31326 = G__31420;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__31422_31432 = shadow.dom._to_svg;
var G__31423_31433 = "string";
var G__31424_31434 = ((function (G__31422_31432,G__31423_31433){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__31422_31432,G__31423_31433))
;
goog.object.set(G__31422_31432,G__31423_31433,G__31424_31434);

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__31429_31435 = shadow.dom._to_svg;
var G__31430_31436 = "null";
var G__31431_31437 = ((function (G__31429_31435,G__31430_31436){
return (function (_){
return null;
});})(G__31429_31435,G__31430_31436))
;
goog.object.set(G__31429_31435,G__31430_31436,G__31431_31437);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4502__auto__ = [];
var len__4499__auto___31443 = arguments.length;
var i__4500__auto___31444 = (0);
while(true){
if((i__4500__auto___31444 < len__4499__auto___31443)){
args__4502__auto__.push((arguments[i__4500__auto___31444]));

var G__31446 = (i__4500__auto___31444 + (1));
i__4500__auto___31444 = G__31446;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.dom.svg.cljs$lang$applyTo = (function (seq31438){
var G__31439 = cljs.core.first(seq31438);
var seq31438__$1 = cljs.core.next(seq31438);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31439,seq31438__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__31456 = arguments.length;
switch (G__31456) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = ((function (buf,chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(buf,chan))
;
var G__31463_31483 = shadow.dom.dom_node(el);
var G__31464_31484 = cljs.core.name(event);
var G__31465_31485 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__31463_31483,G__31464_31484,G__31465_31485) : shadow.dom.dom_listen.call(null,G__31463_31483,G__31464_31484,G__31465_31485));

if(cljs.core.truth_((function (){var and__3911__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__3911__auto__)){
return !(once_or_cleanup === true);
} else {
return and__3911__auto__;
}
})())){
var c__27055__auto___31492 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27055__auto___31492,buf,chan,event_fn){
return (function (){
var f__27056__auto__ = (function (){var switch__26823__auto__ = ((function (c__27055__auto___31492,buf,chan,event_fn){
return (function (state_31471){
var state_val_31472 = (state_31471[(1)]);
if((state_val_31472 === (1))){
var state_31471__$1 = state_31471;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31471__$1,(2),once_or_cleanup);
} else {
if((state_val_31472 === (2))){
var inst_31468 = (state_31471[(2)]);
var inst_31469 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_31471__$1 = (function (){var statearr_31474 = state_31471;
(statearr_31474[(7)] = inst_31468);

return statearr_31474;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31471__$1,inst_31469);
} else {
return null;
}
}
});})(c__27055__auto___31492,buf,chan,event_fn))
;
return ((function (switch__26823__auto__,c__27055__auto___31492,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__26824__auto__ = null;
var shadow$dom$state_machine__26824__auto____0 = (function (){
var statearr_31475 = [null,null,null,null,null,null,null,null];
(statearr_31475[(0)] = shadow$dom$state_machine__26824__auto__);

(statearr_31475[(1)] = (1));

return statearr_31475;
});
var shadow$dom$state_machine__26824__auto____1 = (function (state_31471){
while(true){
var ret_value__26825__auto__ = (function (){try{while(true){
var result__26826__auto__ = switch__26823__auto__(state_31471);
if(cljs.core.keyword_identical_QMARK_(result__26826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26826__auto__;
}
break;
}
}catch (e31477){if((e31477 instanceof Object)){
var ex__26827__auto__ = e31477;
var statearr_31478_31503 = state_31471;
(statearr_31478_31503[(5)] = ex__26827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31471);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31477;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31505 = state_31471;
state_31471 = G__31505;
continue;
} else {
return ret_value__26825__auto__;
}
break;
}
});
shadow$dom$state_machine__26824__auto__ = function(state_31471){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__26824__auto____0.call(this);
case 1:
return shadow$dom$state_machine__26824__auto____1.call(this,state_31471);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
shadow$dom$state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__26824__auto____0;
shadow$dom$state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__26824__auto____1;
return shadow$dom$state_machine__26824__auto__;
})()
;})(switch__26823__auto__,c__27055__auto___31492,buf,chan,event_fn))
})();
var state__27057__auto__ = (function (){var statearr_31479 = (f__27056__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27056__auto__.cljs$core$IFn$_invoke$arity$0() : f__27056__auto__.call(null));
(statearr_31479[(6)] = c__27055__auto___31492);

return statearr_31479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27057__auto__);
});})(c__27055__auto___31492,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
