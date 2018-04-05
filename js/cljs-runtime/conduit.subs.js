goog.provide('conduit.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
conduit.subs.reverse_cmp = (function conduit$subs$reverse_cmp(a,b){

return cljs.core.compare(b,a);
});
var G__42151_42153 = new cljs.core.Keyword(null,"active-page","active-page",370357330);
var G__42152_42154 = ((function (G__42151_42153){
return (function (db,_){
return new cljs.core.Keyword(null,"active-page","active-page",370357330).cljs$core$IFn$_invoke$arity$1(db);
});})(G__42151_42153))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42151_42153,G__42152_42154) : re_frame.core.reg_sub.call(null,G__42151_42153,G__42152_42154));
var G__42155_42157 = new cljs.core.Keyword(null,"articles","articles",-454771639);
var G__42156_42158 = ((function (G__42155_42157){
return (function (db,_){
var articles = new cljs.core.Keyword(null,"articles","articles",-454771639).cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"epoch","epoch",1435633666),conduit.subs.reverse_cmp,cljs.core.vals(articles));
});})(G__42155_42157))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42155_42157,G__42156_42158) : re_frame.core.reg_sub.call(null,G__42155_42157,G__42156_42158));
var G__42159_42161 = new cljs.core.Keyword(null,"articles-count","articles-count",-222608021);
var G__42160_42162 = ((function (G__42159_42161){
return (function (db,_){
return new cljs.core.Keyword(null,"articles-count","articles-count",-222608021).cljs$core$IFn$_invoke$arity$1(db);
});})(G__42159_42161))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42159_42161,G__42160_42162) : re_frame.core.reg_sub.call(null,G__42159_42161,G__42160_42162));
var G__42163_42165 = new cljs.core.Keyword(null,"active-article","active-article",-2143954133);
var G__42164_42166 = ((function (G__42163_42165){
return (function (db,_){
var active_article = new cljs.core.Keyword(null,"active-article","active-article",-2143954133).cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"articles","articles",-454771639),active_article], null));
});})(G__42163_42165))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42163_42165,G__42164_42166) : re_frame.core.reg_sub.call(null,G__42163_42165,G__42164_42166));
var G__42170_42174 = new cljs.core.Keyword(null,"tags","tags",1771418977);
var G__42171_42175 = ((function (G__42170_42174){
return (function (db,_){
return new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(db);
});})(G__42170_42174))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42170_42174,G__42171_42175) : re_frame.core.reg_sub.call(null,G__42170_42174,G__42171_42175));
var G__42176_42178 = new cljs.core.Keyword(null,"comments","comments",-293346423);
var G__42177_42179 = ((function (G__42176_42178){
return (function (db,_){
var comments = new cljs.core.Keyword(null,"comments","comments",-293346423).cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"epoch","epoch",1435633666),conduit.subs.reverse_cmp,cljs.core.vals(comments));
});})(G__42176_42178))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42176_42178,G__42177_42179) : re_frame.core.reg_sub.call(null,G__42176_42178,G__42177_42179));
var G__42180_42182 = new cljs.core.Keyword(null,"profile","profile",-545963874);
var G__42181_42183 = ((function (G__42180_42182){
return (function (db,_){
return new cljs.core.Keyword(null,"profile","profile",-545963874).cljs$core$IFn$_invoke$arity$1(db);
});})(G__42180_42182))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42180_42182,G__42181_42183) : re_frame.core.reg_sub.call(null,G__42180_42182,G__42181_42183));
var G__42187_42191 = new cljs.core.Keyword(null,"loading","loading",-737050189);
var G__42188_42192 = ((function (G__42187_42191){
return (function (db,_){
return new cljs.core.Keyword(null,"loading","loading",-737050189).cljs$core$IFn$_invoke$arity$1(db);
});})(G__42187_42191))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42187_42191,G__42188_42192) : re_frame.core.reg_sub.call(null,G__42187_42191,G__42188_42192));
var G__42193_42198 = new cljs.core.Keyword(null,"filter","filter",-948537934);
var G__42194_42199 = ((function (G__42193_42198){
return (function (db,_){
return new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(db);
});})(G__42193_42198))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42193_42198,G__42194_42199) : re_frame.core.reg_sub.call(null,G__42193_42198,G__42194_42199));
var G__42202_42204 = new cljs.core.Keyword(null,"errors","errors",-908790718);
var G__42203_42205 = ((function (G__42202_42204){
return (function (db,_){
return new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(db);
});})(G__42202_42204))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42202_42204,G__42203_42205) : re_frame.core.reg_sub.call(null,G__42202_42204,G__42203_42205));
var G__42209_42213 = new cljs.core.Keyword(null,"user","user",1532431356);
var G__42210_42214 = ((function (G__42209_42213){
return (function (db,_){
return new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(db);
});})(G__42209_42213))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__42209_42213,G__42210_42214) : re_frame.core.reg_sub.call(null,G__42209_42213,G__42210_42214));

//# sourceMappingURL=conduit.subs.js.map
