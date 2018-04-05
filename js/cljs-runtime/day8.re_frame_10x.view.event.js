goog.provide('day8.re_frame_10x.view.event');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.utils.re_com');
goog.require('day8.re_frame_10x.view.components');
goog.require('day8.re_frame_10x.common_styles');
goog.require('mranderson047.garden.v1v3v3.garden.units');
goog.require('mranderson047.reagent.v0v8v0_alpha2.reagent.core');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.core');
goog.require('zprint.core');
goog.require('goog.string');
goog.require('clojure.string');
day8.re_frame_10x.view.event.code_border = ["1px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.common_styles.white_background_border_color)].join('');
day8.re_frame_10x.view.event.event_styles = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"#--re-frame-10x--","#--re-frame-10x--",-1788857107),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".event-panel",".event-panel",1576114265),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"19px 19px 0px 0px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".bold",".bold",-1441945014),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".event-section",".event-section",174912480)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".event-section--header",".event-section--header",1732674574),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background-color","background-color",570434026),day8.re_frame_10x.common_styles.navbar_tint_lighter,new cljs.core.Keyword(null,"color","color",1011675173),day8.re_frame_10x.common_styles.navbar_text_color,new cljs.core.Keyword(null,"height","height",1025178622),day8.re_frame_10x.common_styles.gs_19,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px",new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),day8.re_frame_10x.common_styles.gs_12], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".event-section--data",".event-section--data",477435343),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgba(100, 255, 100, 0.08)",new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(mranderson047.garden.v1v3v3.garden.units.px_.cljs$core$IFn$_invoke$arity$2 ? mranderson047.garden.v1v3v3.garden.units.px_.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.common_styles.gs_12,day8.re_frame_10x.common_styles.expansion_button_horizontal_padding) : mranderson047.garden.v1v3v3.garden.units.px_.call(null,day8.re_frame_10x.common_styles.gs_12,day8.re_frame_10x.common_styles.expansion_button_horizontal_padding)),new cljs.core.Keyword(null,"overflow-x","overflow-x",-26547754),"auto"], null)], null)], null);
day8.re_frame_10x.view.event.no_event_instructions = (function day8$re_frame_10x$view$event$no_event_instructions(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.p,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-style","font-style",-773672352),"italic"], null)], null),"Code trace is not currently available for this event"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.hyperlink_href,new cljs.core.Keyword(null,"label","label",1718410804),"Instructions for enabling Event Code Tracing",new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rel","rel",1378823488),"noopener noreferrer"], null),new cljs.core.Keyword(null,"target","target",253001721),"_blank",new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/Day8/re-frame-10x/blob/master/docs/HyperlinkedInformation/EventCodeTracing.md"], null)], null)], null);
});
day8.re_frame_10x.view.event.code_header = (function day8$re_frame_10x$view$event$code_header(code_execution_id,line){
var open_QMARK__path = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref((function (){var G__30470 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682)], null);
return (mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__30470) : mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.call(null,G__30470));
})()),code_execution_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(line)], null);
var open_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref((function (){var G__30471 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","code-open?","code/code-open?",1212488779)], null);
return (mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__30471) : mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.call(null,G__30471));
})()),open_QMARK__path);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.h_box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border","border",1444987323),day8.re_frame_10x.view.event.code_border,new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden",new cljs.core.Keyword(null,"padding","padding",1660304693),"1px 6px"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.box,new cljs.core.Keyword(null,"width","width",-384071477),"17px",new cljs.core.Keyword(null,"height","height",1025178622),"17px",new cljs.core.Keyword(null,"class","class",-2030961996),"noselect",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"color","color",1011675173),"#b0b2b4"], null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_QMARK__path,open_QMARK_){
return (function (event){
var G__30472_30489 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","set-code-visibility","code/set-code-visibility",-1072995010),open_QMARK__path,cljs.core.not(open_QMARK_)], null);
(mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__30472_30489) : mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,G__30472_30489));

return null;
});})(open_QMARK__path,open_QMARK_))
], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.box,new cljs.core.Keyword(null,"margin","margin",-995903681),"auto",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.arrow","span.arrow",1996640986),(cljs.core.truth_(open_QMARK_)?"\u25BC":"\u25B6")], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"2px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"2px"], null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(line))].join('')], null)], null)], null);
});
day8.re_frame_10x.view.event.code_block = (function day8$re_frame_10x$view$event$code_block(code_execution_id,line){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgba(100, 255, 100, 0.08)",new cljs.core.Keyword(null,"border","border",1444987323),day8.re_frame_10x.view.event.code_border,new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"-1px",new cljs.core.Keyword(null,"overflow-x","overflow-x",-26547754),"auto",new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"hidden",new cljs.core.Keyword(null,"padding","padding",1660304693),"0px 3px"], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.components.simple_render,new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(line),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref((function (){var G__30498 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682)], null);
return (mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__30498) : mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.call(null,G__30498));
})()),code_execution_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(line)], null)], null)], null);
});
/**
 * Try and find the bounds of the form we are searching for. Uses some heuristics to
 *   try and avoid matching partial forms, e.g. 'default-|weeks| for the form 'weeks.
 */
day8.re_frame_10x.view.event.find_bounds = (function day8$re_frame_10x$view$event$find_bounds(form_str,search_str){
var re = cljs.core.re_pattern(["(\\s|\\(|\\[|\\{)","(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.string.regExpEscape(search_str)),")"].join(''));
var result = re.exec(form_str);
if(!((result == null))){
var index = result.index;
var pre_match = (result[(1)]);
var matched_form = (result[(2)]);
var index__$1 = (index + cljs.core.count(pre_match));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index__$1,(index__$1 + cljs.core.count(matched_form))], null);
} else {
var start = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(form_str,search_str);
var length = ((((!((search_str == null))) && (!((start == null)))))?cljs.core.count(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([search_str], 0))):(0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start,(start + length)], null);
}
});
day8.re_frame_10x.view.event.event_expression = (function day8$re_frame_10x$view$event$event_expression(){
var scroll_pos = (function (){var G__30527 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","scroll-pos","code/scroll-pos",286665124)], null);
return (mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__30527) : mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.call(null,G__30527));
})();
return mranderson047.reagent.v0v8v0_alpha2.reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (scroll_pos){
return (function day8$re_frame_10x$view$event$event_expression_$_event_expression_component_did_update(this$){
var node = mranderson047.reagent.v0v8v0_alpha2.reagent.core.dom_node(this$);
node.scrollTop = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(scroll_pos));

return node.scrollLeft = new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(scroll_pos));
});})(scroll_pos))
,new cljs.core.Keyword(null,"display-name","display-name",694513143),"event-expression",new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (scroll_pos){
return (function (){
var highlighted_form = cljs.core.deref((function (){var G__30540 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","highlighted-form","code/highlighted-form",-1258376614)], null);
return (mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__30540) : mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.call(null,G__30540));
})());
var form_str = cljs.core.deref((function (){var G__30541 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","current-zprint-form","code/current-zprint-form",-1297458353)], null);
return (mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__30541) : mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.call(null,G__30541));
})());
var vec__30537 = day8.re_frame_10x.view.event.find_bounds(form_str,zprint.core.zprint_str(highlighted_form));
var start_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30537,(0),null);
var end_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30537,(1),null);
var before = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(form_str,(0),start_index);
var highlight = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(form_str,start_index,end_index);
var after = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(form_str,end_index);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max-height","max-height",-612563804),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((10) * (17))),"px"].join(''),new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #e3e9ed",new cljs.core.Keyword(null,"background-color","background-color",570434026),day8.re_frame_10x.common_styles.white_background_color], null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-scroll","on-scroll",1590848677),((function (highlighted_form,form_str,vec__30537,start_index,end_index,before,highlight,after,scroll_pos){
return (function (event){
var G__30542_30559 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","save-scroll-pos","code/save-scroll-pos",856522030),event.target.scrollTop,event.target.scrollLeft], null);
(mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__30542_30559) : mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,G__30542_30559));

return null;
});})(highlighted_form,form_str,vec__30537,start_index,end_index,before,highlight,after,scroll_pos))
], null),new cljs.core.Keyword(null,"child","child",623967545),((!((highlighted_form == null)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.components.highlight,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"language","language",-1591107564),"clojure"], null),(new cljs.core.List(null,before,(new cljs.core.List(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.code-listing--highlighted","span.code-listing--highlighted",-1247793188),highlight], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"hl"], null)),(new cljs.core.List(null,after,null,(1),null)),(2),null)),(3),null))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.components.highlight,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"language","language",-1591107564),"clojure"], null),form_str], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([highlighted_form], 0))], null));
});})(scroll_pos))
], null));
});
day8.re_frame_10x.view.event.event_fragments = (function day8$re_frame_10x$view$event$event_fragments(fragments,code_exec_id){
var code_open_QMARK_ = cljs.core.deref((function (){var G__30572 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","code-open?","code/code-open?",1212488779)], null);
return (mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__30572) : mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.call(null,G__30572));
})());
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"auto"], null),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4292__auto__ = ((function (code_open_QMARK_){
return (function day8$re_frame_10x$view$event$event_fragments_$_iter__30573(s__30574){
return (new cljs.core.LazySeq(null,((function (code_open_QMARK_){
return (function (){
var s__30574__$1 = s__30574;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__30574__$1);
if(temp__5457__auto__){
var s__30574__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__30574__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__30574__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__30576 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__30575 = (0);
while(true){
if((i__30575 < size__4291__auto__)){
var frag = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__30575);
cljs.core.chunk_append(b__30576,(function (){var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(frag);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"code-fragment",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((9) * (new cljs.core.Keyword(null,"indent-level","indent-level",-258835684).cljs$core$IFn$_invoke$arity$1(frag) - (1)))),"px"].join(''),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(((id > (0)))?"-1px":null)], null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),((function (i__30575,id,frag,c__4290__auto__,size__4291__auto__,b__30576,s__30574__$2,temp__5457__auto__,code_open_QMARK_){
return (function (event){
var G__30585_30615 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","hover-form","code/hover-form",1557522458),new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(frag)], null);
(mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__30585_30615) : mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,G__30585_30615));

return null;
});})(i__30575,id,frag,c__4290__auto__,size__4291__auto__,b__30576,s__30574__$2,temp__5457__auto__,code_open_QMARK_))
,new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),((function (i__30575,id,frag,c__4290__auto__,size__4291__auto__,b__30576,s__30574__$2,temp__5457__auto__,code_open_QMARK_){
return (function (event){
var G__30586_30620 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","exit-hover-form","code/exit-hover-form",-202062797),new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(frag)], null);
(mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__30586_30620) : mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,G__30586_30620));

return null;
});})(i__30575,id,frag,c__4290__auto__,size__4291__auto__,b__30576,s__30574__$2,temp__5457__auto__,code_open_QMARK_))
], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.event.code_header,code_exec_id,frag], null),(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(code_open_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref((function (){var G__30589 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682)], null);
return (mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__30589) : mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.call(null,G__30589));
})()),code_exec_id,id], null)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.event.code_block,code_exec_id,frag,id], null):null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null));
})());

var G__30621 = (i__30575 + (1));
i__30575 = G__30621;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__30576),day8$re_frame_10x$view$event$event_fragments_$_iter__30573(cljs.core.chunk_rest(s__30574__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__30576),null);
}
} else {
var frag = cljs.core.first(s__30574__$2);
return cljs.core.cons((function (){var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(frag);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"code-fragment",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((9) * (new cljs.core.Keyword(null,"indent-level","indent-level",-258835684).cljs$core$IFn$_invoke$arity$1(frag) - (1)))),"px"].join(''),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(((id > (0)))?"-1px":null)], null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),((function (id,frag,s__30574__$2,temp__5457__auto__,code_open_QMARK_){
return (function (event){
var G__30592_30638 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","hover-form","code/hover-form",1557522458),new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(frag)], null);
(mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__30592_30638) : mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,G__30592_30638));

return null;
});})(id,frag,s__30574__$2,temp__5457__auto__,code_open_QMARK_))
,new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),((function (id,frag,s__30574__$2,temp__5457__auto__,code_open_QMARK_){
return (function (event){
var G__30595_30643 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","exit-hover-form","code/exit-hover-form",-202062797),new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(frag)], null);
(mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__30595_30643) : mranderson047.re_frame.v0v10v2.re_frame.core.dispatch.call(null,G__30595_30643));

return null;
});})(id,frag,s__30574__$2,temp__5457__auto__,code_open_QMARK_))
], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.event.code_header,code_exec_id,frag], null),(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(code_open_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref((function (){var G__30598 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682)], null);
return (mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__30598) : mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.call(null,G__30598));
})()),code_exec_id,id], null)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.event.code_block,code_exec_id,frag,id], null):null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null));
})(),day8$re_frame_10x$view$event$event_fragments_$_iter__30573(cljs.core.rest(s__30574__$2)));
}
} else {
return null;
}
break;
}
});})(code_open_QMARK_))
,null,null));
});})(code_open_QMARK_))
;
return iter__4292__auto__(fragments);
})())], null);
});
day8.re_frame_10x.view.event.event_code = (function day8$re_frame_10x$view$event$event_code(){
var code_traces = cljs.core.deref((function (){var G__30652 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","current-code","code/current-code",17389180)], null);
return (mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__30652) : mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.call(null,G__30652));
})());
var code_execution = cljs.core.first(code_traces);
var highlighted_form = (function (){var G__30653 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","highlighted-form","code/highlighted-form",-1258376614)], null);
return (mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__30653) : mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.call(null,G__30653));
})();
if(cljs.core.not(code_execution)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.event.no_event_instructions], null);
} else {
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"size","size",1098693007),"1 1 auto",new cljs.core.Keyword(null,"class","class",-2030961996),"code-panel",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.event.event_expression], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.gap_f,new cljs.core.Keyword(null,"size","size",1098693007),day8.re_frame_10x.common_styles.gs_19s], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.event.event_fragments,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (code_traces,code_execution,highlighted_form){
return (function (line){
return cljs.core.fn_QMARK_(new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(line));
});})(code_traces,code_execution,highlighted_form))
,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(code_execution)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(code_execution)], null)], null)], null);
}
});
day8.re_frame_10x.view.event.render = (function day8$re_frame_10x$view$event$render(){
var epoch_id = cljs.core.deref((function (){var G__30658 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null);
return (mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__30658) : mranderson047.re_frame.v0v10v2.re_frame.core.subscribe.call(null,G__30658));
})());
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.v_box,new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"class","class",-2030961996),"event-panel",new cljs.core.Keyword(null,"gap","gap",80255254),day8.re_frame_10x.common_styles.gs_19s,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.event.event_code], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.utils.re_com.gap_f,new cljs.core.Keyword(null,"size","size",1098693007),"0px"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),epoch_id], null));
});

//# sourceMappingURL=day8.re_frame_10x.view.event.js.map
