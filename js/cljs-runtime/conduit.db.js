goog.provide('conduit.db');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('re_frame.core');
conduit.db.default_db = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active-page","active-page",370357330),new cljs.core.Keyword(null,"home","home",-74557309)], null);
conduit.db.conduit_user_key = "conduit-user";
/**
 * Puts user into localStorage
 */
conduit.db.set_user_ls = (function conduit$db$set_user_ls(user){
return localStorage.setItem(conduit.db.conduit_user_key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(user)].join(''));
});
/**
 * Removes user from localStorage
 */
conduit.db.remove_user_ls = (function conduit$db$remove_user_ls(){
return localStorage.removeItem(conduit.db.conduit_user_key);
});
var G__40261_40264 = new cljs.core.Keyword(null,"local-store-user","local-store-user",1737970699);
var G__40262_40265 = ((function (G__40261_40264){
return (function (cofx,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cofx,new cljs.core.Keyword(null,"local-store-user","local-store-user",1737970699),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),(function (){var G__40263 = localStorage.getItem(conduit.db.conduit_user_key);
if((G__40263 == null)){
return null;
} else {
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(G__40263);
}
})()));
});})(G__40261_40264))
;
(re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2(G__40261_40264,G__40262_40265) : re_frame.core.reg_cofx.call(null,G__40261_40264,G__40262_40265));

//# sourceMappingURL=conduit.db.js.map
