goog.provide('shadow.cljs.devtools.client.hud');
goog.require('cljs.core');
goog.require('shadow.dom');
goog.require('shadow.xhr');
goog.require('shadow.animate');
goog.require('shadow.cljs.devtools.client.env');
goog.require('cljs.core.async');
goog.require('goog.string.format');
goog.require('goog.string');
goog.require('clojure.string');
shadow.cljs.devtools.client.hud.open_file = (function shadow$cljs$devtools$client$hud$open_file(file,line,column){
console.log("opening file",file,line,column);

var req = shadow.xhr.chan.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"POST","POST",110456857),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.get_url_base()),"/api/open-file"].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false,new cljs.core.Keyword(null,"body-only","body-only",-698120682),true], null));
var c__27055__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27055__auto__,req){
return (function (){
var f__27056__auto__ = (function (){var switch__26823__auto__ = ((function (c__27055__auto__,req){
return (function (state_33556){
var state_val_33557 = (state_33556[(1)]);
if((state_val_33557 === (7))){
var state_33556__$1 = state_33556;
var statearr_33558_33584 = state_33556__$1;
(statearr_33558_33584[(2)] = false);

(statearr_33558_33584[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33557 === (1))){
var state_33556__$1 = state_33556;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33556__$1,(2),req);
} else {
if((state_val_33557 === (4))){
var inst_33520 = (state_33556[(7)]);
var inst_33526 = (inst_33520 == null);
var inst_33527 = cljs.core.not(inst_33526);
var state_33556__$1 = state_33556;
if(inst_33527){
var statearr_33559_33585 = state_33556__$1;
(statearr_33559_33585[(1)] = (6));

} else {
var statearr_33560_33586 = state_33556__$1;
(statearr_33560_33586[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33557 === (15))){
var state_33556__$1 = state_33556;
var statearr_33561_33587 = state_33556__$1;
(statearr_33561_33587[(2)] = null);

(statearr_33561_33587[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33557 === (13))){
var inst_33520 = (state_33556[(7)]);
var state_33556__$1 = state_33556;
var statearr_33562_33588 = state_33556__$1;
(statearr_33562_33588[(2)] = inst_33520);

(statearr_33562_33588[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33557 === (6))){
var inst_33520 = (state_33556[(7)]);
var inst_33529 = inst_33520.cljs$lang$protocol_mask$partition0$;
var inst_33530 = (inst_33529 & (64));
var inst_33531 = inst_33520.cljs$core$ISeq$;
var inst_33532 = (cljs.core.PROTOCOL_SENTINEL === inst_33531);
var inst_33533 = ((inst_33530) || (inst_33532));
var state_33556__$1 = state_33556;
if(cljs.core.truth_(inst_33533)){
var statearr_33563_33589 = state_33556__$1;
(statearr_33563_33589[(1)] = (9));

} else {
var statearr_33564_33590 = state_33556__$1;
(statearr_33564_33590[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33557 === (17))){
var inst_33552 = (state_33556[(2)]);
var state_33556__$1 = state_33556;
var statearr_33565_33591 = state_33556__$1;
(statearr_33565_33591[(2)] = inst_33552);

(statearr_33565_33591[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33557 === (3))){
var state_33556__$1 = state_33556;
var statearr_33566_33592 = state_33556__$1;
(statearr_33566_33592[(2)] = null);

(statearr_33566_33592[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33557 === (12))){
var inst_33520 = (state_33556[(7)]);
var inst_33542 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_33520);
var state_33556__$1 = state_33556;
var statearr_33567_33593 = state_33556__$1;
(statearr_33567_33593[(2)] = inst_33542);

(statearr_33567_33593[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33557 === (2))){
var inst_33520 = (state_33556[(7)]);
var inst_33520__$1 = (state_33556[(2)]);
var inst_33521 = (inst_33520__$1 == null);
var state_33556__$1 = (function (){var statearr_33568 = state_33556;
(statearr_33568[(7)] = inst_33520__$1);

return statearr_33568;
})();
if(cljs.core.truth_(inst_33521)){
var statearr_33569_33594 = state_33556__$1;
(statearr_33569_33594[(1)] = (3));

} else {
var statearr_33570_33595 = state_33556__$1;
(statearr_33570_33595[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33557 === (11))){
var inst_33537 = (state_33556[(2)]);
var state_33556__$1 = state_33556;
var statearr_33571_33596 = state_33556__$1;
(statearr_33571_33596[(2)] = inst_33537);

(statearr_33571_33596[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33557 === (9))){
var state_33556__$1 = state_33556;
var statearr_33572_33597 = state_33556__$1;
(statearr_33572_33597[(2)] = true);

(statearr_33572_33597[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33557 === (5))){
var inst_33554 = (state_33556[(2)]);
var state_33556__$1 = state_33556;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33556__$1,inst_33554);
} else {
if((state_val_33557 === (14))){
var inst_33545 = (state_33556[(8)]);
var inst_33545__$1 = (state_33556[(2)]);
var inst_33546 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33545__$1,new cljs.core.Keyword(null,"exit","exit",351849638));
var inst_33547 = (inst_33546 === (0));
var state_33556__$1 = (function (){var statearr_33573 = state_33556;
(statearr_33573[(8)] = inst_33545__$1);

return statearr_33573;
})();
if(cljs.core.truth_(inst_33547)){
var statearr_33574_33598 = state_33556__$1;
(statearr_33574_33598[(1)] = (15));

} else {
var statearr_33575_33599 = state_33556__$1;
(statearr_33575_33599[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33557 === (16))){
var inst_33545 = (state_33556[(8)]);
var inst_33550 = console.warn("file open failed",inst_33545);
var state_33556__$1 = state_33556;
var statearr_33576_33600 = state_33556__$1;
(statearr_33576_33600[(2)] = inst_33550);

(statearr_33576_33600[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33557 === (10))){
var state_33556__$1 = state_33556;
var statearr_33577_33601 = state_33556__$1;
(statearr_33577_33601[(2)] = false);

(statearr_33577_33601[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33557 === (8))){
var inst_33540 = (state_33556[(2)]);
var state_33556__$1 = state_33556;
if(cljs.core.truth_(inst_33540)){
var statearr_33578_33602 = state_33556__$1;
(statearr_33578_33602[(1)] = (12));

} else {
var statearr_33579_33603 = state_33556__$1;
(statearr_33579_33603[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27055__auto__,req))
;
return ((function (switch__26823__auto__,c__27055__auto__,req){
return (function() {
var shadow$cljs$devtools$client$hud$open_file_$_state_machine__26824__auto__ = null;
var shadow$cljs$devtools$client$hud$open_file_$_state_machine__26824__auto____0 = (function (){
var statearr_33580 = [null,null,null,null,null,null,null,null,null];
(statearr_33580[(0)] = shadow$cljs$devtools$client$hud$open_file_$_state_machine__26824__auto__);

(statearr_33580[(1)] = (1));

return statearr_33580;
});
var shadow$cljs$devtools$client$hud$open_file_$_state_machine__26824__auto____1 = (function (state_33556){
while(true){
var ret_value__26825__auto__ = (function (){try{while(true){
var result__26826__auto__ = switch__26823__auto__(state_33556);
if(cljs.core.keyword_identical_QMARK_(result__26826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26826__auto__;
}
break;
}
}catch (e33581){if((e33581 instanceof Object)){
var ex__26827__auto__ = e33581;
var statearr_33582_33604 = state_33556;
(statearr_33582_33604[(5)] = ex__26827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33556);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33581;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33605 = state_33556;
state_33556 = G__33605;
continue;
} else {
return ret_value__26825__auto__;
}
break;
}
});
shadow$cljs$devtools$client$hud$open_file_$_state_machine__26824__auto__ = function(state_33556){
switch(arguments.length){
case 0:
return shadow$cljs$devtools$client$hud$open_file_$_state_machine__26824__auto____0.call(this);
case 1:
return shadow$cljs$devtools$client$hud$open_file_$_state_machine__26824__auto____1.call(this,state_33556);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
shadow$cljs$devtools$client$hud$open_file_$_state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$cljs$devtools$client$hud$open_file_$_state_machine__26824__auto____0;
shadow$cljs$devtools$client$hud$open_file_$_state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$cljs$devtools$client$hud$open_file_$_state_machine__26824__auto____1;
return shadow$cljs$devtools$client$hud$open_file_$_state_machine__26824__auto__;
})()
;})(switch__26823__auto__,c__27055__auto__,req))
})();
var state__27057__auto__ = (function (){var statearr_33583 = (f__27056__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27056__auto__.cljs$core$IFn$_invoke$arity$0() : f__27056__auto__.call(null));
(statearr_33583[(6)] = c__27055__auto__);

return statearr_33583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27057__auto__);
});})(c__27055__auto__,req))
);

return c__27055__auto__;
});
shadow.cljs.devtools.client.hud.dom_insert = (function shadow$cljs$devtools$client$hud$dom_insert(var_args){
var G__33607 = arguments.length;
switch (G__33607) {
case 1:
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1 = (function (node){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$2(document.body,node);
});

shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$2 = (function (where,node){
var el = shadow.dom.dom_node(node);
var id = el.id;
if(cljs.core.seq(id)){
} else {
throw (new Error("Assert failed: (seq id)"));
}

var temp__5461__auto___33609 = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(id);
if((temp__5461__auto___33609 == null)){
} else {
var x_33610 = temp__5461__auto___33609;
shadow.dom.remove(x_33610);
}

return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(where,el);
});

shadow.cljs.devtools.client.hud.dom_insert.cljs$lang$maxFixedArity = 2;

shadow.cljs.devtools.client.hud.hud_id = "shadow-hud-container";
shadow.cljs.devtools.client.hud.load_id = "shadow-hud-loading-container";
shadow.cljs.devtools.client.hud.logo_svg = (function (){var s_path = "M247.183941,141.416413 C247.183941,74.7839971 148.383423,78.9723529 148.383423,141.416413 C148.383423,203.860473 265.090698,171.864644 265.090698,248.900057 C265.090698,325.93547 135,325.851749 135,251.708304";
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"shadow-cljs-logo",new cljs.core.Keyword(null,"version","version",425292698),"1.1",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 400 400",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"block"], null),new cljs.core.Keyword(null,"height","height",1025178622),"60px",new cljs.core.Keyword(null,"width","width",-384071477),"60px"], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),"shadow-cljs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"defs","defs",1398449717),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mask#shadow-cljs-logo-mask","mask#shadow-cljs-logo-mask",1690487509),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#fff"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"r","r",-471384190),"200",new cljs.core.Keyword(null,"cy","cy",755331060),"200",new cljs.core.Keyword(null,"cx","cx",1272694324),"200"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"0",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"none",new cljs.core.Keyword(null,"mask","mask",-585748447),"url(#shadow-cljs-logo-mask)"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g.circles","g.circles",374463200),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.blue","circle.blue",1902916291),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"200",new cljs.core.Keyword(null,"cy","cy",755331060),"200",new cljs.core.Keyword(null,"cx","cx",1272694324),"200",new cljs.core.Keyword(null,"fill","fill",883462889),"#4F80DF"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.light-blue","circle.light-blue",438137342),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"71.5",new cljs.core.Keyword(null,"cy","cy",755331060),"200",new cljs.core.Keyword(null,"cx","cx",1272694324),"370",new cljs.core.Keyword(null,"fill","fill",883462889),"#89B4FF"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.dark-green","circle.dark-green",608465767),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"180",new cljs.core.Keyword(null,"cy","cy",755331060),"360",new cljs.core.Keyword(null,"cx","cx",1272694324),"60",new cljs.core.Keyword(null,"fill","fill",883462889),"#40B400"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.light-green","circle.light-green",-1663041285),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"129",new cljs.core.Keyword(null,"cy","cy",755331060),"320",new cljs.core.Keyword(null,"cx","cx",1272694324),"280",new cljs.core.Keyword(null,"fill","fill",883462889),"#76E013"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"animateTransform","animateTransform",759329815),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"attributeType","attributeType",1055561918),"xml",new cljs.core.Keyword(null,"attributeName","attributeName",-400177890),"transform",new cljs.core.Keyword(null,"type","type",1174270348),"rotate",new cljs.core.Keyword(null,"from","from",1815293044),"0 200 200",new cljs.core.Keyword(null,"to","to",192099007),"360 200 200",new cljs.core.Keyword(null,"dur","dur",1464522452),"3s",new cljs.core.Keyword(null,"repeatCount","repeatCount",1447663848),"indefinite"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(10,10)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"square",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"16",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#aaa",new cljs.core.Keyword(null,"d","d",1972142424),s_path], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"square",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"16",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#FFFFFF",new cljs.core.Keyword(null,"d","d",1972142424),s_path], null)], null)], null)], 0));
})();
shadow.cljs.devtools.client.hud.load_start = (function shadow$cljs$devtools$client$hud$load_start(){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.load_id,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none",new cljs.core.Keyword(null,"left","left",-399115937),"0px",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"20px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background","background",-863952629),"#eee",new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792),"40px",new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772),"40px",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"2px 2px 10px #aaa",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px"], null)], null),shadow.cljs.devtools.client.hud.logo_svg], null)], null));
});
shadow.cljs.devtools.client.hud.load_end_success = (function shadow$cljs$devtools$client$hud$load_end_success(){
var temp__5461__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.load_id);
if((temp__5461__auto__ == null)){
return null;
} else {
var container_el = temp__5461__auto__;
var el = container_el.firstChild;
shadow.animate.start((500),cljs.core.PersistentArrayMap.createAsIfByAssoc([el,shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"background","background",-863952629),"#eee","#40B400","ease-out")]));

var c__27055__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27055__auto__,el,container_el,temp__5461__auto__){
return (function (){
var f__27056__auto__ = (function (){var switch__26823__auto__ = ((function (c__27055__auto__,el,container_el,temp__5461__auto__){
return (function (state_33623){
var state_val_33624 = (state_33623[(1)]);
if((state_val_33624 === (1))){
var inst_33611 = cljs.core.async.timeout((250));
var state_33623__$1 = state_33623;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33623__$1,(2),inst_33611);
} else {
if((state_val_33624 === (2))){
var inst_33613 = (state_33623[(2)]);
var inst_33614 = [el];
var inst_33615 = shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"opacity","opacity",397153780),"1","0","ease-in");
var inst_33616 = [inst_33615];
var inst_33617 = cljs.core.PersistentHashMap.fromArrays(inst_33614,inst_33616);
var inst_33618 = shadow.animate.start((250),inst_33617);
var state_33623__$1 = (function (){var statearr_33625 = state_33623;
(statearr_33625[(7)] = inst_33613);

return statearr_33625;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33623__$1,(3),inst_33618);
} else {
if((state_val_33624 === (3))){
var inst_33620 = (state_33623[(2)]);
var inst_33621 = shadow.dom.remove(container_el);
var state_33623__$1 = (function (){var statearr_33626 = state_33623;
(statearr_33626[(8)] = inst_33620);

return statearr_33626;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33623__$1,inst_33621);
} else {
return null;
}
}
}
});})(c__27055__auto__,el,container_el,temp__5461__auto__))
;
return ((function (switch__26823__auto__,c__27055__auto__,el,container_el,temp__5461__auto__){
return (function() {
var shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__26824__auto__ = null;
var shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__26824__auto____0 = (function (){
var statearr_33627 = [null,null,null,null,null,null,null,null,null];
(statearr_33627[(0)] = shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__26824__auto__);

(statearr_33627[(1)] = (1));

return statearr_33627;
});
var shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__26824__auto____1 = (function (state_33623){
while(true){
var ret_value__26825__auto__ = (function (){try{while(true){
var result__26826__auto__ = switch__26823__auto__(state_33623);
if(cljs.core.keyword_identical_QMARK_(result__26826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26826__auto__;
}
break;
}
}catch (e33628){if((e33628 instanceof Object)){
var ex__26827__auto__ = e33628;
var statearr_33629_33631 = state_33623;
(statearr_33629_33631[(5)] = ex__26827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33623);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33628;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33632 = state_33623;
state_33623 = G__33632;
continue;
} else {
return ret_value__26825__auto__;
}
break;
}
});
shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__26824__auto__ = function(state_33623){
switch(arguments.length){
case 0:
return shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__26824__auto____0.call(this);
case 1:
return shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__26824__auto____1.call(this,state_33623);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__26824__auto____0;
shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__26824__auto____1;
return shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__26824__auto__;
})()
;})(switch__26823__auto__,c__27055__auto__,el,container_el,temp__5461__auto__))
})();
var state__27057__auto__ = (function (){var statearr_33630 = (f__27056__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27056__auto__.cljs$core$IFn$_invoke$arity$0() : f__27056__auto__.call(null));
(statearr_33630[(6)] = c__27055__auto__);

return statearr_33630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27057__auto__);
});})(c__27055__auto__,el,container_el,temp__5461__auto__))
);

return c__27055__auto__;
}
});
shadow.cljs.devtools.client.hud.load_end = (function shadow$cljs$devtools$client$hud$load_end(){
var temp__5461__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.load_id);
if((temp__5461__auto__ == null)){
return null;
} else {
var el = temp__5461__auto__;
return shadow.dom.remove(el);
}
});
shadow.cljs.devtools.client.hud.hud_hide = (function shadow$cljs$devtools$client$hud$hud_hide(){
var temp__5461__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.hud_id);
if((temp__5461__auto__ == null)){
return null;
} else {
var d = temp__5461__auto__;
return shadow.dom.remove(d);
}
});
shadow.cljs.devtools.client.hud.source_line_styles = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0",new cljs.core.Keyword(null,"margin","margin",-995903681),"0"], null);
shadow.cljs.devtools.client.hud.source_highlight_styles = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shadow.cljs.devtools.client.hud.source_line_styles,new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold");
shadow.cljs.devtools.client.hud.source_line_html = (function shadow$cljs$devtools$client$hud$source_line_html(start_idx,lines,styles){
var iter__4292__auto__ = (function shadow$cljs$devtools$client$hud$source_line_html_$_iter__33633(s__33634){
return (new cljs.core.LazySeq(null,(function (){
var s__33634__$1 = s__33634;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__33634__$1);
if(temp__5457__auto__){
var s__33634__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33634__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__33634__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__33636 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__33635 = (0);
while(true){
if((i__33635 < size__4291__auto__)){
var vec__33637 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__33635);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33637,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33637,(1),null);
cljs.core.chunk_append(b__33636,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),styles], null),(function (){var G__33640 = "%4d | %s";
var G__33641 = (((1) + idx) + start_idx);
var G__33642 = text;
return goog.string.format(G__33640,G__33641,G__33642);
})()], null));

var G__33649 = (i__33635 + (1));
i__33635 = G__33649;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33636),shadow$cljs$devtools$client$hud$source_line_html_$_iter__33633(cljs.core.chunk_rest(s__33634__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33636),null);
}
} else {
var vec__33643 = cljs.core.first(s__33634__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33643,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33643,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),styles], null),(function (){var G__33646 = "%4d | %s";
var G__33647 = (((1) + idx) + start_idx);
var G__33648 = text;
return goog.string.format(G__33646,G__33647,G__33648);
})()], null),shadow$cljs$devtools$client$hud$source_line_html_$_iter__33633(cljs.core.rest(s__33634__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,lines));
});
shadow.cljs.devtools.client.hud.sep_length = (80);
shadow.cljs.devtools.client.hud.sep_line = (function shadow$cljs$devtools$client$hud$sep_line(var_args){
var G__33651 = arguments.length;
switch (G__33651) {
case 0:
return shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2("",(0));
});

shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2 = (function (label,offset){
var sep_len = Math.max(shadow.cljs.devtools.client.hud.sep_length,offset);
var len = cljs.core.count(label);
var sep = ((function (sep_len,len){
return (function (c){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(c,"-"));
});})(sep_len,len))
;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sep(offset)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(label),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sep((sep_len - (offset + len))))].join('');
});

shadow.cljs.devtools.client.hud.sep_line.cljs$lang$maxFixedArity = 2;

shadow.cljs.devtools.client.hud.file_link = (function shadow$cljs$devtools$client$hud$file_link(p__33653){
var map__33654 = p__33653;
var map__33654__$1 = ((((!((map__33654 == null)))?(((((map__33654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33654.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33654):map__33654);
var warning = map__33654__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33654__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33654__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33654__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33654__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.not(file)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),resource_name], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline",new cljs.core.Keyword(null,"color","color",1011675173),"blue",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),((function (map__33654,map__33654__$1,warning,resource_name,file,line,column){
return (function (e){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return shadow.cljs.devtools.client.hud.open_file(file,line,column);
});})(map__33654,map__33654__$1,warning,resource_name,file,line,column))
], null)], null),resource_name], null);
}
});
shadow.cljs.devtools.client.hud.html_for_warning = (function shadow$cljs$devtools$client$hud$html_for_warning(p__33656){
var map__33657 = p__33656;
var map__33657__$1 = ((((!((map__33657 == null)))?(((((map__33657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33657.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33657):map__33657);
var warning = map__33657__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33657__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var msg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33657__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33657__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33657__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33657__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var source_excerpt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33657__$1,new cljs.core.Keyword(null,"source-excerpt","source-excerpt",5665576));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"2px solid #ccc",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"10px"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"line-height","line-height",1870784992),"16px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#fadb64",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.2em",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"WARNING in "], null),shadow.cljs.devtools.client.hud.file_link(warning)], null),(cljs.core.truth_(source_excerpt)?(function (){var map__33659 = source_excerpt;
var map__33659__$1 = ((((!((map__33659 == null)))?(((((map__33659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33659.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33659):map__33659);
var start_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33659__$1,new cljs.core.Keyword(null,"start-idx","start-idx",-1600773745));
var before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33659__$1,new cljs.core.Keyword(null,"before","before",-1633692388));
var line__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33659__$1,new cljs.core.Keyword(null,"line","line",212345235));
var after = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33659__$1,new cljs.core.Keyword(null,"after","after",594996914));
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 10px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#fff",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"2px solid #ccc"], null)], null),shadow.cljs.devtools.client.hud.source_line_html(start_idx,before,shadow.cljs.devtools.client.hud.source_line_styles),shadow.cljs.devtools.client.hud.source_line_html((start_idx + cljs.core.count(before)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line__$1], null),shadow.cljs.devtools.client.hud.source_highlight_styles),(function (){var arrow_idx = ((6) + (function (){var or__3922__auto__ = column;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return (1);
}
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),shadow.cljs.devtools.client.hud.source_highlight_styles], null),shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2("^",arrow_idx)], null);
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.2em",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 0"], null)], null),msg], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),shadow.cljs.devtools.client.hud.source_highlight_styles], null),shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$0()], null),shadow.cljs.devtools.client.hud.source_line_html(((start_idx + cljs.core.count(before)) + (1)),after,shadow.cljs.devtools.client.hud.source_line_styles)], null);
})():null)], null);
});
shadow.cljs.devtools.client.hud.hud_warnings = (function shadow$cljs$devtools$client$hud$hud_warnings(p__33662){
var map__33663 = p__33662;
var map__33663__$1 = ((((!((map__33663 == null)))?(((((map__33663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33663.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33663):map__33663);
var msg = map__33663__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33663__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33663__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var map__33665 = info;
var map__33665__$1 = ((((!((map__33665 == null)))?(((((map__33665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33665.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33665):map__33665);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33665__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var sources_with_warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__33665,map__33665__$1,sources,map__33663,map__33663__$1,msg,type,info){
return (function (p1__33661_SHARP_){
return cljs.core.seq(new cljs.core.Keyword(null,"warnings","warnings",-735437651).cljs$core$IFn$_invoke$arity$1(p1__33661_SHARP_));
});})(map__33665,map__33665__$1,sources,map__33663,map__33663__$1,msg,type,info))
,sources));
if(cljs.core.seq(sources_with_warnings)){
shadow.cljs.devtools.client.hud.load_end();

return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.hud_id,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"left","left",-399115937)],["0px","12px","auto","10000","10px 10px 0 10px","0px","absolute","monospace","0px"])], null),(function (){var iter__4292__auto__ = ((function (map__33665,map__33665__$1,sources,sources_with_warnings,map__33663,map__33663__$1,msg,type,info){
return (function shadow$cljs$devtools$client$hud$hud_warnings_$_iter__33667(s__33668){
return (new cljs.core.LazySeq(null,((function (map__33665,map__33665__$1,sources,sources_with_warnings,map__33663,map__33663__$1,msg,type,info){
return (function (){
var s__33668__$1 = s__33668;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__33668__$1);
if(temp__5457__auto__){
var xs__6012__auto__ = temp__5457__auto__;
var map__33673 = cljs.core.first(xs__6012__auto__);
var map__33673__$1 = ((((!((map__33673 == null)))?(((((map__33673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33673.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33673):map__33673);
var src = map__33673__$1;
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33673__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
var iterys__4288__auto__ = ((function (s__33668__$1,map__33673,map__33673__$1,src,warnings,xs__6012__auto__,temp__5457__auto__,map__33665,map__33665__$1,sources,sources_with_warnings,map__33663,map__33663__$1,msg,type,info){
return (function shadow$cljs$devtools$client$hud$hud_warnings_$_iter__33667_$_iter__33669(s__33670){
return (new cljs.core.LazySeq(null,((function (s__33668__$1,map__33673,map__33673__$1,src,warnings,xs__6012__auto__,temp__5457__auto__,map__33665,map__33665__$1,sources,sources_with_warnings,map__33663,map__33663__$1,msg,type,info){
return (function (){
var s__33670__$1 = s__33670;
while(true){
var temp__5457__auto____$1 = cljs.core.seq(s__33670__$1);
if(temp__5457__auto____$1){
var s__33670__$2 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__33670__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__33670__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__33672 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__33671 = (0);
while(true){
if((i__33671 < size__4291__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__33671);
cljs.core.chunk_append(b__33672,shadow.cljs.devtools.client.hud.html_for_warning(warning));

var G__33675 = (i__33671 + (1));
i__33671 = G__33675;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33672),shadow$cljs$devtools$client$hud$hud_warnings_$_iter__33667_$_iter__33669(cljs.core.chunk_rest(s__33670__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33672),null);
}
} else {
var warning = cljs.core.first(s__33670__$2);
return cljs.core.cons(shadow.cljs.devtools.client.hud.html_for_warning(warning),shadow$cljs$devtools$client$hud$hud_warnings_$_iter__33667_$_iter__33669(cljs.core.rest(s__33670__$2)));
}
} else {
return null;
}
break;
}
});})(s__33668__$1,map__33673,map__33673__$1,src,warnings,xs__6012__auto__,temp__5457__auto__,map__33665,map__33665__$1,sources,sources_with_warnings,map__33663,map__33663__$1,msg,type,info))
,null,null));
});})(s__33668__$1,map__33673,map__33673__$1,src,warnings,xs__6012__auto__,temp__5457__auto__,map__33665,map__33665__$1,sources,sources_with_warnings,map__33663,map__33663__$1,msg,type,info))
;
var fs__4289__auto__ = cljs.core.seq(iterys__4288__auto__(warnings));
if(fs__4289__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4289__auto__,shadow$cljs$devtools$client$hud$hud_warnings_$_iter__33667(cljs.core.rest(s__33668__$1)));
} else {
var G__33676 = cljs.core.rest(s__33668__$1);
s__33668__$1 = G__33676;
continue;
}
} else {
return null;
}
break;
}
});})(map__33665,map__33665__$1,sources,sources_with_warnings,map__33663,map__33663__$1,msg,type,info))
,null,null));
});})(map__33665,map__33665__$1,sources,sources_with_warnings,map__33663,map__33663__$1,msg,type,info))
;
return iter__4292__auto__(sources_with_warnings);
})()], null));
} else {
return null;
}
});
shadow.cljs.devtools.client.hud.hud_error = (function shadow$cljs$devtools$client$hud$hud_error(p__33677){
var map__33678 = p__33677;
var map__33678__$1 = ((((!((map__33678 == null)))?(((((map__33678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33678.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33678):map__33678);
var msg = map__33678__$1;
var report = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33678__$1,new cljs.core.Keyword(null,"report","report",1394055010));
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.hud_id,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"left","left",-399115937)],["#000","0px","12px","0px","auto","#fff","100","20px","0px","absolute","5px solid red","monospace","0px"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"color: red; margin-bottom: 10px; font-size: 2em;"], null),"Compilation failed!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),report], null)], null));
});
shadow.cljs.devtools.client.hud.connection_error_id = "shadow-connection-error";
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_ = (function shadow$cljs$devtools$client$hud$connection_error_clear_BANG_(){
var temp__5461__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.connection_error_id);
if((temp__5461__auto__ == null)){
return null;
} else {
var x = temp__5461__auto__;
return shadow.dom.remove(x);
}
});
shadow.cljs.devtools.client.hud.connection_error = (function shadow$cljs$devtools$client$hud$connection_error(msg){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.connection_error_id,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none",new cljs.core.Keyword(null,"left","left",-399115937),"0px",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"20px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772),new cljs.core.Keyword(null,"font-family","font-family",-667419874)],["2px 2px 10px #aaa","#fff","14px","bold","40px","#c00","10px","40px","monospace"])], null),["shadow-cljs - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null)], null));
});

//# sourceMappingURL=shadow.cljs.devtools.client.hud.js.map
