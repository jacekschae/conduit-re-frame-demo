goog.provide('day8.re_frame_10x.view.settings');
goog.require('cljs.core');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.core');
goog.require('day8.re_frame_10x.utils.re_com');
goog.require('day8.re_frame_10x.common_styles');
goog.require('mranderson047.garden.v1v3v3.garden.units');
goog.require('mranderson047.garden.v1v3v3.garden.compiler');
day8.re_frame_10x.view.settings.comp_section_width = "400px";
day8.re_frame_10x.view.settings.instruction__section_width = "190px";
day8.re_frame_10x.view.settings.horizontal_gap = day8.re_frame_10x.common_styles.gs_7s;
day8.re_frame_10x.view.settings.vertical_gap = day8.re_frame_10x.common_styles.gs_12s;
day8.re_frame_10x.view.settings.settings_box_vertical_padding = day8.re_frame_10x.common_styles.gs_7;
day8.re_frame_10x.view.settings.settings_box_padding = day8.re_frame_10x.utils.re_com.css_join.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["7px","0"], 0));
day8.re_frame_10x.view.settings.settings_box_81 = mranderson047.garden.v1v3v3.garden.compiler.render_css((function (){var G__28031 = day8.re_frame_10x.common_styles.gs_81;
var G__28032 = (mranderson047.garden.v1v3v3.garden.units.px_STAR_.cljs$core$IFn$_invoke$arity$2 ? mranderson047.garden.v1v3v3.garden.units.px_STAR_.cljs$core$IFn$_invoke$arity$2((2),day8.re_frame_10x.view.settings.settings_box_vertical_padding) : mranderson047.garden.v1v3v3.garden.units.px_STAR_.call(null,(2),day8.re_frame_10x.view.settings.settings_box_vertical_padding));
return (mranderson047.garden.v1v3v3.garden.units.px_.cljs$core$IFn$_invoke$arity$2 ? mranderson047.garden.v1v3v3.garden.units.px_.cljs$core$IFn$_invoke$arity$2(G__28031,G__28032) : mranderson047.garden.v1v3v3.garden.units.px_.call(null,G__28031,G__28032));
})());
day8.re_frame_10x.view.settings.settings_box_131 = mranderson047.garden.v1v3v3.garden.compiler.render_css((function (){var G__28033 = day8.re_frame_10x.common_styles.gs_131;
var G__28034 = (mranderson047.garden.v1v3v3.garden.units.px_STAR_.cljs$core$IFn$_invoke$arity$2 ? mranderson047.garden.v1v3v3.garden.units.px_STAR_.cljs$core$IFn$_invoke$arity$2((2),day8.re_frame_10x.view.settings.settings_box_vertical_padding) : mranderson047.garden.v1v3v3.garden.units.px_STAR_.call(null,(2),day8.re_frame_10x.view.settings.settings_box_vertical_padding));
return (mranderson047.garden.v1v3v3.garden.units.px_.cljs$core$IFn$_invoke$arity$2 ? mranderson047.garden.v1v3v3.garden.units.px_.cljs$core$IFn$_invoke$arity$2(G__28033,G__28034) : mranderson047.garden.v1v3v3.garden.units.px_.call(null,G__28033,G__28034));
})());
day8.re_frame_10x.view.settings.settings_styles = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#--re-frame-10x--","#--re-frame-10x--",-1788857107),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".settings",".settings",1002597819),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),day8.re_frame_10x.common_styles.white_background_color], null)], null)], null);
day8.re_frame_10x.view.settings.closeable_text_box = (function day8$re_frame_10x$view$settings$closeable_text_box(var_args){
var args__4502__auto__ = [];
var len__4499__auto___28057 = arguments.length;
var i__4500__auto___28058 = (0);
while(true){
if((i__4500__auto___28058 < len__4499__auto___28057)){
args__4502__auto__.push((arguments[i__4500__auto___28058]));

var G__28059 = (i__4500__auto___28058 + (1));
i__4500__auto___28058 = G__28059;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.view.settings.closeable_text_box.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

day8.re_frame_10x.view.settings.closeable_text_box.cljs$core$IFn$_invoke$arity$variadic = (function (p__28045){
var map__28046 = p__28045;
var map__28046__$1 = ((((!((map__28046 == null)))?(((((map__28046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28046.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28046):map__28046);
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28046__$1,new cljs.core.Keyword(null,"model","model",331153215));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28046__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28046__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28046__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.input_text,new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),"25px",new cljs.core.Keyword(null,"padding","padding",1660304693),day8.re_frame_10x.utils.re_com.css_join.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["0px",day8.re_frame_10x.common_styles.gs_5s], 0))], null),new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.close_button,new cljs.core.Keyword(null,"div-size","div-size",1661625995),(25),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(25),new cljs.core.Keyword(null,"top-offset","top-offset",1235816245),(-4),new cljs.core.Keyword(null,"left-offset","left-offset",-331155643),(10),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_close], null)], null)], null);
});

day8.re_frame_10x.view.settings.closeable_text_box.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
day8.re_frame_10x.view.settings.closeable_text_box.cljs$lang$applyTo = (function (seq28038){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28038));
});

day8.re_frame_10x.view.settings.explanation_text = (function day8$re_frame_10x$view$settings$explanation_text(children){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"width","width",-384071477),day8.re_frame_10x.view.settings.instruction__section_width,new cljs.core.Keyword(null,"gap","gap",80255254),day8.re_frame_10x.common_styles.gs_19s,new cljs.core.Keyword(null,"children","children",-940561982),children], null);
});
/**
 * settings and explanation are both children of re-com boxes
 */
day8.re_frame_10x.view.settings.settings_box = (function day8$re_frame_10x$view$settings$settings_box(settings,explanation,min_height){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),day8.re_frame_10x.common_styles.gs_19s,new cljs.core.Keyword(null,"min-height","min-height",398480837),min_height,new cljs.core.Keyword(null,"padding","padding",1660304693),day8.re_frame_10x.view.settings.settings_box_padding,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"width","width",-384071477),day8.re_frame_10x.view.settings.comp_section_width,new cljs.core.Keyword(null,"gap","gap",80255254),day8.re_frame_10x.view.settings.vertical_gap,new cljs.core.Keyword(null,"children","children",-940561982),settings], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.settings.explanation_text,explanation], null)], null)], null);
});
day8.re_frame_10x.view.settings.render = (function day8$re_frame_10x$view$settings$render(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),day8.re_frame_10x.common_styles.gs_12s,new cljs.core.Keyword(null,"margin-right","margin-right",809689658),day8.re_frame_10x.common_styles.gs_19s], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var num_epochs = cljs.core.deref((function (){var G__28083 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","number-of-matches","epochs/number-of-matches",1018247531)], null);
return (mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__28083) : mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.call(null,G__28083));
})());
var num_traces = cljs.core.deref((function (){var G__28084 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","number-of-traces","traces/number-of-traces",-1195045241)], null);
return (mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__28084) : mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.call(null,G__28084));
})());
var epochs_to_retain = (function (){var G__28085 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","number-of-retained-epochs","settings/number-of-retained-epochs",347300150)], null);
return (mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__28085) : mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.call(null,G__28085));
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.settings.settings_box,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.h_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"gap","gap",80255254),day8.re_frame_10x.view.settings.horizontal_gap,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.label,new cljs.core.Keyword(null,"label","label",1718410804),"Retain last"], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.input_text,new cljs.core.Keyword(null,"width","width",-384071477),day8.re_frame_10x.common_styles.gs_31s,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"35px",new cljs.core.Keyword(null,"height","height",1025178622),"25px",new cljs.core.Keyword(null,"padding","padding",1660304693),day8.re_frame_10x.utils.re_com.css_join.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["0px",day8.re_frame_10x.common_styles.gs_5s], 0))], null),new cljs.core.Keyword(null,"model","model",331153215),epochs_to_retain,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),true,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (num_epochs,num_traces,epochs_to_retain){
return (function (p1__28072_SHARP_){
var G__28088 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","set-number-of-retained-epochs","settings/set-number-of-retained-epochs",-1910736736),p1__28072_SHARP_], null);
return (mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__28088) : mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,G__28088));
});})(num_epochs,num_traces,epochs_to_retain))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.label,new cljs.core.Keyword(null,"label","label",1718410804),"epochs"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.gap_f,new cljs.core.Keyword(null,"size","size",1098693007),day8.re_frame_10x.common_styles.gs_31s], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.button,new cljs.core.Keyword(null,"class","class",-2030961996),"bm-muted-button app-db-panel-button",new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["clear all epochs"], null)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (num_epochs,num_traces,epochs_to_retain){
return (function (){
var G__28089 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","reset","epochs/reset",1592438868)], null);
return (mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__28089) : mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,G__28089));
});})(num_epochs,num_traces,epochs_to_retain))
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),num_epochs," epochs currently retained, involving ",num_traces," traces."], null)], null),day8.re_frame_10x.view.settings.settings_box_81], null);
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.line], null),(function (){var follows_events_QMARK_ = cljs.core.deref((function (){var G__28091 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","app-db-follows-events?","settings/app-db-follows-events?",-115495889)], null);
return (mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__28091) : mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.call(null,G__28091));
})());
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.settings.settings_box,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.checkbox,new cljs.core.Keyword(null,"model","model",331153215),follows_events_QMARK_,new cljs.core.Keyword(null,"label","label",1718410804),"sync app-db with epoch navigation",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (follows_events_QMARK_){
return (function (p1__28074_SHARP_){
var G__28092 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","app-db-follows-events?","settings/app-db-follows-events?",-115495889),p1__28074_SHARP_], null);
return (mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__28092) : mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,G__28092));
});})(follows_events_QMARK_))
], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"When you navigate to an epoch, update app-db to match. Causes UI to \"time travel\"."], null)], null),day8.re_frame_10x.view.settings.settings_box_81], null);
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.line], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.settings.settings_box,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.h_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"gap","gap",80255254),day8.re_frame_10x.view.settings.horizontal_gap,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.label,new cljs.core.Keyword(null,"label","label",1718410804),"Ignore epochs for:"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.button,new cljs.core.Keyword(null,"class","class",-2030961996),"bm-muted-button app-db-panel-button",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),day8.re_frame_10x.common_styles.gs_81s], null),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["+ event-id"], null)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__28093 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","add-ignored-event","settings/add-ignored-event",-1185281607)], null);
return (mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__28093) : mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,G__28093));
})], null)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"width","width",-384071477),day8.re_frame_10x.view.settings.comp_section_width,new cljs.core.Keyword(null,"gap","gap",80255254),day8.re_frame_10x.view.settings.vertical_gap,new cljs.core.Keyword(null,"children","children",-940561982),(function (){var iter__4292__auto__ = (function day8$re_frame_10x$view$settings$render_$_iter__28094(s__28095){
return (new cljs.core.LazySeq(null,(function (){
var s__28095__$1 = s__28095;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__28095__$1);
if(temp__5457__auto__){
var s__28095__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28095__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__28095__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__28097 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__28096 = (0);
while(true){
if((i__28096 < size__4291__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__28096);
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item);
cljs.core.chunk_append(b__28097,cljs.core.with_meta(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.settings.closeable_text_box,new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"event-str","event-str",381347778).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"width","width",-384071477),"212px",new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (i__28096,id,item,c__4290__auto__,size__4291__auto__,b__28097,s__28095__$2,temp__5457__auto__){
return (function (){
var G__28102 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","remove-ignored-event","settings/remove-ignored-event",-391073521),id], null);
return (mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__28102) : mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,G__28102));
});})(i__28096,id,item,c__4290__auto__,size__4291__auto__,b__28097,s__28095__$2,temp__5457__auto__))
,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__28096,id,item,c__4290__auto__,size__4291__auto__,b__28097,s__28095__$2,temp__5457__auto__){
return (function (p1__28075_SHARP_){
var G__28103 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","update-ignored-event","settings/update-ignored-event",-407164743),id,p1__28075_SHARP_], null);
return (mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__28103) : mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,G__28103));
});})(i__28096,id,item,c__4290__auto__,size__4291__auto__,b__28097,s__28095__$2,temp__5457__auto__))
], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__28139 = (i__28096 + (1));
i__28096 = G__28139;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28097),day8$re_frame_10x$view$settings$render_$_iter__28094(cljs.core.chunk_rest(s__28095__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28097),null);
}
} else {
var item = cljs.core.first(s__28095__$2);
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.settings.closeable_text_box,new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"event-str","event-str",381347778).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"width","width",-384071477),"212px",new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (id,item,s__28095__$2,temp__5457__auto__){
return (function (){
var G__28104 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","remove-ignored-event","settings/remove-ignored-event",-391073521),id], null);
return (mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__28104) : mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,G__28104));
});})(id,item,s__28095__$2,temp__5457__auto__))
,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (id,item,s__28095__$2,temp__5457__auto__){
return (function (p1__28075_SHARP_){
var G__28105 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","update-ignored-event","settings/update-ignored-event",-407164743),id,p1__28075_SHARP_], null);
return (mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__28105) : mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,G__28105));
});})(id,item,s__28095__$2,temp__5457__auto__))
], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),day8$re_frame_10x$view$settings$render_$_iter__28094(cljs.core.rest(s__28095__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__(cljs.core.deref((function (){var G__28109 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","ignored-events","settings/ignored-events",1377799632)], null);
return (mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__28109) : mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.call(null,G__28109));
})()));
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"All trace associated with these events will be ignored."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Useful if you want to ignore a periodic background polling event."], null)], null),day8.re_frame_10x.view.settings.settings_box_131], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.line], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.settings.settings_box,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.h_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"gap","gap",80255254),day8.re_frame_10x.view.settings.horizontal_gap,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.label,new cljs.core.Keyword(null,"label","label",1718410804),"Filter out trace for views in:"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.button,new cljs.core.Keyword(null,"class","class",-2030961996),"bm-muted-button app-db-panel-button",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100px"], null),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["+ namespace"], null)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__28113 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","add-filtered-view-trace","settings/add-filtered-view-trace",1856187997)], null);
return (mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__28113) : mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,G__28113));
})], null)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"width","width",-384071477),day8.re_frame_10x.view.settings.comp_section_width,new cljs.core.Keyword(null,"gap","gap",80255254),day8.re_frame_10x.view.settings.vertical_gap,new cljs.core.Keyword(null,"children","children",-940561982),(function (){var iter__4292__auto__ = (function day8$re_frame_10x$view$settings$render_$_iter__28114(s__28115){
return (new cljs.core.LazySeq(null,(function (){
var s__28115__$1 = s__28115;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__28115__$1);
if(temp__5457__auto__){
var s__28115__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28115__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__28115__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__28117 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__28116 = (0);
while(true){
if((i__28116 < size__4291__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__28116);
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item);
cljs.core.chunk_append(b__28117,cljs.core.with_meta(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.settings.closeable_text_box,new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"width","width",-384071477),"343px",new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (i__28116,id,item,c__4290__auto__,size__4291__auto__,b__28117,s__28115__$2,temp__5457__auto__){
return (function (){
var G__28119 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","remove-filtered-view-trace","settings/remove-filtered-view-trace",970685301),id], null);
return (mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__28119) : mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,G__28119));
});})(i__28116,id,item,c__4290__auto__,size__4291__auto__,b__28117,s__28115__$2,temp__5457__auto__))
,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__28116,id,item,c__4290__auto__,size__4291__auto__,b__28117,s__28115__$2,temp__5457__auto__){
return (function (p1__28076_SHARP_){
var G__28121 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","update-filtered-view-trace","settings/update-filtered-view-trace",-530575796),id,p1__28076_SHARP_], null);
return (mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__28121) : mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,G__28121));
});})(i__28116,id,item,c__4290__auto__,size__4291__auto__,b__28117,s__28115__$2,temp__5457__auto__))
], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__28146 = (i__28116 + (1));
i__28116 = G__28146;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28117),day8$re_frame_10x$view$settings$render_$_iter__28114(cljs.core.chunk_rest(s__28115__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28117),null);
}
} else {
var item = cljs.core.first(s__28115__$2);
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.settings.closeable_text_box,new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"width","width",-384071477),"343px",new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (id,item,s__28115__$2,temp__5457__auto__){
return (function (){
var G__28122 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","remove-filtered-view-trace","settings/remove-filtered-view-trace",970685301),id], null);
return (mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__28122) : mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,G__28122));
});})(id,item,s__28115__$2,temp__5457__auto__))
,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (id,item,s__28115__$2,temp__5457__auto__){
return (function (p1__28076_SHARP_){
var G__28123 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","update-filtered-view-trace","settings/update-filtered-view-trace",-530575796),id,p1__28076_SHARP_], null);
return (mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__28123) : mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,G__28123));
});})(id,item,s__28115__$2,temp__5457__auto__))
], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),day8$re_frame_10x$view$settings$render_$_iter__28114(cljs.core.rest(s__28115__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__(cljs.core.deref((function (){var G__28124 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350)], null);
return (mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__28124) : mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.call(null,G__28124));
})()));
})()], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Sometimes you want to focus on your own views, and the trace associated with library views is just noise."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Nominate one or more namespaces."], null)], null),day8.re_frame_10x.view.settings.settings_box_131], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.line], null),(function (){var low_level_trace = cljs.core.deref((function (){var G__28125 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","low-level-trace","settings/low-level-trace",191054289)], null);
return (mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__28125) : mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.call(null,G__28125));
})());
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.settings.settings_box,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.label,new cljs.core.Keyword(null,"label","label",1718410804),"Remove low level trace"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.checkbox,new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"reagent","reagent",2131627322).cljs$core$IFn$_invoke$arity$1(low_level_trace),new cljs.core.Keyword(null,"label","label",1718410804),"reagent internals",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (low_level_trace){
return (function (p1__28078_SHARP_){
var G__28126 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","low-level-trace","settings/low-level-trace",191054289),new cljs.core.Keyword(null,"reagent","reagent",2131627322),p1__28078_SHARP_], null);
return (mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__28126) : mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,G__28126));
});})(low_level_trace))
], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.checkbox,new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"re-frame","re-frame",-1039473033).cljs$core$IFn$_invoke$arity$1(low_level_trace),new cljs.core.Keyword(null,"label","label",1718410804),"re-frame internals",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (low_level_trace){
return (function (p1__28080_SHARP_){
var G__28127 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","low-level-trace","settings/low-level-trace",191054289),new cljs.core.Keyword(null,"re-frame","re-frame",-1039473033),p1__28080_SHARP_], null);
return (mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__28127) : mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,G__28127));
});})(low_level_trace))
], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Most of the time, low level trace is noisy and you want it filtered out."], null)], null),day8.re_frame_10x.view.settings.settings_box_131], null);
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.line], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.settings.settings_box,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.button,new cljs.core.Keyword(null,"class","class",-2030961996),"bm-muted-button app-db-panel-button",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100px"], null),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Factory Reset"], null)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__28128 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","factory-reset","settings/factory-reset",1863855805)], null);
return (mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__28128) : mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,G__28128));
})], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),day8.re_frame_10x.view.settings.settings_box_81], null)], null)], null);
});

//# sourceMappingURL=day8.re_frame_10x.view.settings.js.map
