goog.provide('zprint.zutil');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('zprint.zfns');
goog.require('rewrite_clj.parser');
goog.require('rewrite_clj.node');
goog.require('rewrite_clj.zip');
goog.require('rewrite_clj.zip.base');
goog.require('rewrite_clj.zip.whitespace');
goog.require('clojure.zip');
zprint.zutil.down_STAR_ = clojure.zip.down;
zprint.zutil.up_STAR_ = clojure.zip.up;
zprint.zutil.right_STAR_ = clojure.zip.right;
zprint.zutil.left_STAR_ = clojure.zip.left;
zprint.zutil.next_STAR_ = clojure.zip.next;
zprint.zutil.prev_STAR_ = clojure.zip.prev;
zprint.zutil.replace_STAR_ = clojure.zip.replace;
zprint.zutil.edn_STAR_ = rewrite_clj.zip.base.edn_STAR_;
zprint.zutil.sexpr = rewrite_clj.zip.base.sexpr;
zprint.zutil.string = rewrite_clj.zip.base.string;
zprint.zutil.tag = rewrite_clj.zip.base.tag;
zprint.zutil.skip = rewrite_clj.zip.whitespace.skip;
zprint.zutil.skip_whitespace = rewrite_clj.zip.whitespace.skip_whitespace;
zprint.zutil.whitespace_QMARK_ = rewrite_clj.zip.whitespace.whitespace_QMARK_;
zprint.zutil.whitespace_or_comment_QMARK_ = rewrite_clj.zip.whitespace.whitespace_or_comment_QMARK_;
zprint.zutil.length = rewrite_clj.zip.base.length;
/**
 * Is the zipper zloc equivalent to the path floc.  In this
 *   case, floc isn't a zipper, but was turned into a path early on.
 */
zprint.zutil.zfocus = (function zprint$zutil$zfocus(zloc,floc){
var vec__29185 = (zprint.zutil.find_root_and_path.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.find_root_and_path.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.find_root_and_path.call(null,zloc));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29185,(0),null);
var zpath = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29185,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(zpath,floc);
});
/**
 * Take the various inputs and come up with a style.
 */
zprint.zutil.zfocus_style = (function zprint$zutil$zfocus_style(style,zloc,floc){
var style__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(style,new cljs.core.Keyword(null,"f","f",-1597136552)))?style:(cljs.core.truth_(zprint.zutil.zfocus(zloc,floc))?new cljs.core.Keyword(null,"f","f",-1597136552):new cljs.core.Keyword(null,"b","b",1482224470)));
return style__$1;
});
/**
 * Is the zloc a collection?
 */
zprint.zutil.z_coll_QMARK_ = (function zprint$zutil$z_coll_QMARK_(zloc){
return (rewrite_clj.zip.seq_QMARK_.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.seq_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.seq_QMARK_.call(null,zloc));
});
/**
 * Is this a #_(...)
 */
zprint.zutil.zuneval_QMARK_ = (function zprint$zutil$zuneval_QMARK_(zloc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)),new cljs.core.Keyword(null,"uneval","uneval",1932037707));
});
/**
 * Is this a ^{...}
 */
zprint.zutil.zmeta_QMARK_ = (function zprint$zutil$zmeta_QMARK_(zloc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)),new cljs.core.Keyword(null,"meta","meta",1499536964));
});
/**
 * Is this a '(...) or '[ ... ] or some other quote?
 */
zprint.zutil.zquote_QMARK_ = (function zprint$zutil$zquote_QMARK_(zloc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)),new cljs.core.Keyword(null,"quote","quote",-262615245));
});
/**
 * Is this a @...
 */
zprint.zutil.zreader_macro_QMARK_ = (function zprint$zutil$zreader_macro_QMARK_(zloc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)),new cljs.core.Keyword(null,"reader-macro","reader-macro",750056422));
});
/**
 * Return the tag for this zloc
 */
zprint.zutil.ztag = (function zprint$zutil$ztag(zloc){
return (zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc));
});
/**
 * Turn an uneval zloc with #_ starting it into a zipper.
 */
zprint.zutil.zparseuneval = (function zprint$zutil$zparseuneval(zloc){
var G__29212 = rewrite_clj.parser.parse_string(clojure.string.triml(clojure.string.replace_first((zprint.zutil.string.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.string.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.string.call(null,zloc)),/#_/,"")));
return (zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1(G__29212) : zprint.zutil.edn_STAR_.call(null,G__29212));
});
/**
 * Turn a zloc into an #_ uneval zipper.
 */
zprint.zutil.zcreateuneval = (function zprint$zutil$zcreateuneval(zloc){
var G__29213 = rewrite_clj.parser.parse_string(clojure.string.triml(["#_",cljs.core.str.cljs$core$IFn$_invoke$arity$1((zprint.zutil.string.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.string.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.string.call(null,zloc)))].join('')));
return (zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1(G__29213) : zprint.zutil.edn_STAR_.call(null,G__29213));
});
/**
 * Returns true if this is a comment.
 */
zprint.zutil.zcomment_QMARK_ = (function zprint$zutil$zcomment_QMARK_(zloc){
if(cljs.core.truth_(zloc)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)),new cljs.core.Keyword(null,"comment","comment",532206069));
} else {
return null;
}
});
/**
 * Returns true if this is a newline.
 */
zprint.zutil.znewline_QMARK_ = (function zprint$zutil$znewline_QMARK_(zloc){
if(cljs.core.truth_(zloc)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)),new cljs.core.Keyword(null,"newline","newline",1790071323));
} else {
return null;
}
});
/**
 * Does z/string, but takes an additional argument for hex conversion.
 *   Hex conversion is not implemented for zippers, though, because at present
 *   it is only used for byte-arrays, which don't really show up here.
 */
zprint.zutil.znumstr = (function zprint$zutil$znumstr(zloc,_,___$1){
return (zprint.zutil.string.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.string.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.string.call(null,zloc));
});
/**
 * Find the first non-whitespace zloc inside of this zloc, or
 *   the first whitespace zloc that is the focus.
 */
zprint.zutil.zfirst = (function zprint$zutil$zfirst(zloc){
var nloc = (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
if(cljs.core.truth_(nloc)){
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,nloc) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,nloc));
} else {
return null;
}
});
/**
 * Find the first non-whitespace and non-comment zloc inside of this zloc.
 */
zprint.zutil.zfirst_no_comment = (function zprint$zutil$zfirst_no_comment(zloc){
var nloc = (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
if(cljs.core.truth_(nloc)){
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_or_comment_QMARK_,nloc) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_or_comment_QMARK_,nloc));
} else {
return null;
}
});
/**
 * Find the second non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zsecond = (function zprint$zutil$zsecond(zloc){
var temp__5455__auto__ = zprint.zutil.zfirst(zloc);
if(cljs.core.truth_(temp__5455__auto__)){
var first_loc = temp__5455__auto__;
var temp__5455__auto____$1 = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(first_loc) : zprint.zutil.right_STAR_.call(null,first_loc));
if(cljs.core.truth_(temp__5455__auto____$1)){
var nloc = temp__5455__auto____$1;
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,nloc) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,nloc));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Find the third non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zthird = (function zprint$zutil$zthird(zloc){
var G__29214 = zprint.zutil.zfirst(zloc);
var G__29214__$1 = (((G__29214 == null))?null:(zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(G__29214) : zprint.zutil.right_STAR_.call(null,G__29214)));
var G__29214__$2 = (((G__29214__$1 == null))?null:(zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__29214__$1) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__29214__$1)));
var G__29214__$3 = (((G__29214__$2 == null))?null:(zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(G__29214__$2) : zprint.zutil.right_STAR_.call(null,G__29214__$2)));
if((G__29214__$3 == null)){
return null;
} else {
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__29214__$3) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__29214__$3));
}
});
/**
 * Find the fourth non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zfourth = (function zprint$zutil$zfourth(zloc){
var G__29215 = zprint.zutil.zfirst(zloc);
var G__29215__$1 = (((G__29215 == null))?null:(zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(G__29215) : zprint.zutil.right_STAR_.call(null,G__29215)));
var G__29215__$2 = (((G__29215__$1 == null))?null:(zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__29215__$1) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__29215__$1)));
var G__29215__$3 = (((G__29215__$2 == null))?null:(zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(G__29215__$2) : zprint.zutil.right_STAR_.call(null,G__29215__$2)));
var G__29215__$4 = (((G__29215__$3 == null))?null:(zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__29215__$3) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__29215__$3)));
var G__29215__$5 = (((G__29215__$4 == null))?null:(zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(G__29215__$4) : zprint.zutil.right_STAR_.call(null,G__29215__$4)));
if((G__29215__$5 == null)){
return null;
} else {
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__29215__$5) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__29215__$5));
}
});
/**
 * Find the next non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zrightnws = (function zprint$zutil$zrightnws(zloc){
if(cljs.core.truth_(zloc)){
var temp__5455__auto__ = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.right_STAR_.call(null,zloc));
if(cljs.core.truth_(temp__5455__auto__)){
var nloc = temp__5455__auto__;
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,nloc) : zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,nloc));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Find the rightmost non-whitespace zloc at this level
 */
zprint.zutil.zrightmost = (function zprint$zutil$zrightmost(zloc){
var nloc = zprint.zutil.zrightnws(zloc);
var ploc = zloc;
while(true){
if(cljs.core.not(nloc)){
return ploc;
} else {
var G__29216 = zprint.zutil.zrightnws(nloc);
var G__29217 = nloc;
nloc = G__29216;
ploc = G__29217;
continue;
}
break;
}
});
/**
 * Find the next non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zleftnws = (function zprint$zutil$zleftnws(zloc){
if(cljs.core.truth_(zloc)){
var temp__5455__auto__ = (zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.left_STAR_.call(null,zloc));
if(cljs.core.truth_(temp__5455__auto__)){
var nloc = temp__5455__auto__;
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.left_STAR_,zprint.zutil.whitespace_QMARK_,nloc) : zprint.zutil.skip.call(null,zprint.zutil.left_STAR_,zprint.zutil.whitespace_QMARK_,nloc));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Find the leftmost non-whitespace zloc at this level
 */
zprint.zutil.zleftmost = (function zprint$zutil$zleftmost(zloc){
var nloc = zprint.zutil.zleftnws(zloc);
var ploc = zloc;
while(true){
if(cljs.core.not(nloc)){
return ploc;
} else {
var G__29220 = zprint.zutil.zleftnws(nloc);
var G__29221 = nloc;
nloc = G__29220;
ploc = G__29221;
continue;
}
break;
}
});
/**
 * Find the next non-whitespace zloc.
 */
zprint.zutil.znextnws = (function zprint$zutil$znextnws(zloc){
if(cljs.core.truth_((rewrite_clj.zip.end_QMARK_.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.end_QMARK_.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.end_QMARK_.call(null,zloc)))){
return zloc;
} else {
var temp__5455__auto__ = (zprint.zutil.next_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.next_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.next_STAR_.call(null,zloc));
if(cljs.core.truth_(temp__5455__auto__)){
var nloc = temp__5455__auto__;
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.next_STAR_,zprint.zutil.whitespace_QMARK_,nloc) : zprint.zutil.skip.call(null,zprint.zutil.next_STAR_,zprint.zutil.whitespace_QMARK_,nloc));
} else {
return null;
}
}
});
/**
 * Find the next non-whitespace zloc.
 */
zprint.zutil.zprevnws = (function zprint$zutil$zprevnws(zloc){
var temp__5455__auto__ = (zprint.zutil.prev_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.prev_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.prev_STAR_.call(null,zloc));
if(cljs.core.truth_(temp__5455__auto__)){
var ploc = temp__5455__auto__;
return (zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3 ? zprint.zutil.skip.cljs$core$IFn$_invoke$arity$3(zprint.zutil.prev_STAR_,zprint.zutil.whitespace_QMARK_,ploc) : zprint.zutil.skip.call(null,zprint.zutil.prev_STAR_,zprint.zutil.whitespace_QMARK_,ploc));
} else {
return null;
}
});
/**
 * Find the nth non-whitespace zloc inside of this zloc.
 */
zprint.zutil.znthnext = (function zprint$zutil$znthnext(zloc,n){
var nloc = (function (){var G__29231 = (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
return (zprint.zutil.skip_whitespace.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.skip_whitespace.cljs$core$IFn$_invoke$arity$1(G__29231) : zprint.zutil.skip_whitespace.call(null,G__29231));
})();
var i = n;
while(true){
if((((nloc == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(0))))){
return nloc;
} else {
var G__29237 = zprint.zutil.zrightnws(nloc);
var G__29238 = (i - (1));
nloc = G__29237;
i = G__29238;
continue;
}
break;
}
});
/**
 * Find the locations (counting from zero, and only counting non-whitespace
 *   elements) of the first zthing?.  Return its index if it is found, nil if not.
 */
zprint.zutil.zfind = (function zprint$zutil$zfind(zthing_QMARK_,zloc){
var nloc = (function (){var G__29240 = (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
return (zprint.zutil.skip_whitespace.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.skip_whitespace.cljs$core$IFn$_invoke$arity$1(G__29240) : zprint.zutil.skip_whitespace.call(null,G__29240));
})();
var i = (0);
while(true){
if(!((nloc == null))){
if(cljs.core.truth_((zthing_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zthing_QMARK_.cljs$core$IFn$_invoke$arity$1(nloc) : zthing_QMARK_.call(null,nloc)))){
return i;
} else {
var G__29248 = zprint.zutil.zrightnws(nloc);
var G__29249 = (i + (1));
nloc = G__29248;
i = G__29249;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Return a vector containing the return of applying a function to 
 *   every non-whitespace zloc inside of zloc.
 */
zprint.zutil.zmap_w_nl = (function zprint$zutil$zmap_w_nl(zfn,zloc){
var nloc = (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not(nloc)){
return out;
} else {
var G__29255 = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.right_STAR_.call(null,nloc));
var G__29256 = (function (){var temp__5455__auto__ = ((cljs.core.not((function (){var and__3911__auto__ = (zprint.zutil.whitespace_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.whitespace_QMARK_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.whitespace_QMARK_.call(null,nloc));
if(cljs.core.truth_(and__3911__auto__)){
return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.tag.call(null,nloc)),new cljs.core.Keyword(null,"newline","newline",1790071323)));
} else {
return and__3911__auto__;
}
})()))?(zfn.cljs$core$IFn$_invoke$arity$1 ? zfn.cljs$core$IFn$_invoke$arity$1(nloc) : zfn.call(null,nloc)):null);
if(cljs.core.truth_(temp__5455__auto__)){
var result = temp__5455__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,result);
} else {
return out;
}
})();
nloc = G__29255;
out = G__29256;
continue;
}
break;
}
});
/**
 * Return a vector containing the return of applying a function to 
 *   every non-whitespace zloc inside of zloc.
 */
zprint.zutil.zmap = (function zprint$zutil$zmap(zfn,zloc){
var nloc = (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not(nloc)){
return out;
} else {
var G__29263 = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.right_STAR_.call(null,nloc));
var G__29264 = (function (){var temp__5455__auto__ = ((cljs.core.not((zprint.zutil.whitespace_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.whitespace_QMARK_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.whitespace_QMARK_.call(null,nloc))))?(zfn.cljs$core$IFn$_invoke$arity$1 ? zfn.cljs$core$IFn$_invoke$arity$1(nloc) : zfn.call(null,nloc)):null);
if(cljs.core.truth_(temp__5455__auto__)){
var result = temp__5455__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,result);
} else {
return out;
}
})();
nloc = G__29263;
out = G__29264;
continue;
}
break;
}
});
/**
 * Return a vector containing the return of applying a function to 
 *   every zloc inside of zloc.
 */
zprint.zutil.zmap_all = (function zprint$zutil$zmap_all(zfn,zloc){
var nloc = (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not(nloc)){
return out;
} else {
var G__29265 = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.right_STAR_.call(null,nloc));
var G__29266 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,(zfn.cljs$core$IFn$_invoke$arity$1 ? zfn.cljs$core$IFn$_invoke$arity$1(nloc) : zfn.call(null,nloc)));
nloc = G__29265;
out = G__29266;
continue;
}
break;
}
});
/**
 * Apply a function to every non-whitespace zloc to right of zloc.
 */
zprint.zutil.zmap_right = (function zprint$zutil$zmap_right(zfn,zloc){
var nloc = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.right_STAR_.call(null,zloc));
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not(nloc)){
return out;
} else {
var G__29267 = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.right_STAR_.call(null,nloc));
var G__29268 = (cljs.core.truth_((zprint.zutil.whitespace_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.whitespace_QMARK_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.whitespace_QMARK_.call(null,nloc)))?out:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,(zfn.cljs$core$IFn$_invoke$arity$1 ? zfn.cljs$core$IFn$_invoke$arity$1(nloc) : zfn.call(null,nloc))));
nloc = G__29267;
out = G__29268;
continue;
}
break;
}
});
/**
 * Return a seq of all of the non-whitespace children of zloc.
 */
zprint.zutil.zseqnws = (function zprint$zutil$zseqnws(zloc){
return zprint.zutil.zmap(cljs.core.identity,zloc);
});
/**
 * How many non-whitespace children does zloc have?
 */
zprint.zutil.zcount = (function zprint$zutil$zcount(zloc){
return cljs.core.count(zprint.zutil.zseqnws(zloc));
});
/**
 * Create a vector with the root as well as another vector
 *   which contains the number of right moves after each down
 *   down to find a particular zloc.  The right moves include
 *   both whitespace and comments.
 */
zprint.zutil.find_root_and_path = (function zprint$zutil$find_root_and_path(zloc){
if(cljs.core.truth_(zloc)){
var nloc = zloc;
var left = (0);
var out = cljs.core.List.EMPTY;
while(true){
if(cljs.core.not((zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.left_STAR_.call(null,nloc)))){
if(cljs.core.not((zprint.zutil.up_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.up_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.up_STAR_.call(null,nloc)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nloc,out], null);
} else {
var G__29269 = (zprint.zutil.up_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.up_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.up_STAR_.call(null,nloc));
var G__29270 = (0);
var G__29271 = cljs.core.cons(left,out);
nloc = G__29269;
left = G__29270;
out = G__29271;
continue;
}
} else {
var G__29272 = (zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.left_STAR_.call(null,nloc));
var G__29273 = (left + (1));
var G__29274 = out;
nloc = G__29272;
left = G__29273;
out = G__29274;
continue;
}
break;
}
} else {
return null;
}
});
/**
 * Create a vector with the root as well as another vector
 *   which contains the number of right moves after each down
 *   down to find a particular zloc.  The right moves are
 *   non-whitespace, but include comments.
 */
zprint.zutil.find_root_and_path_nw = (function zprint$zutil$find_root_and_path_nw(zloc){
if(cljs.core.truth_(zloc)){
var nloc = zloc;
var left = (0);
var out = cljs.core.List.EMPTY;
while(true){
if(cljs.core.not((zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.left_STAR_.call(null,nloc)))){
if(cljs.core.not((zprint.zutil.up_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.up_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.up_STAR_.call(null,nloc)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nloc,out], null);
} else {
var G__29275 = (zprint.zutil.up_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.up_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.up_STAR_.call(null,nloc));
var G__29276 = (0);
var G__29277 = cljs.core.cons(left,out);
nloc = G__29275;
left = G__29276;
out = G__29277;
continue;
}
} else {
var G__29278 = (zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.left_STAR_.call(null,nloc));
var G__29279 = (cljs.core.truth_((zprint.zutil.whitespace_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.whitespace_QMARK_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.whitespace_QMARK_.call(null,nloc)))?left:(left + (1)));
var G__29280 = out;
nloc = G__29278;
left = G__29279;
out = G__29280;
continue;
}
break;
}
} else {
return null;
}
});
/**
 * Find the root from a zloc by doing lots of ups.
 */
zprint.zutil.find_root = (function zprint$zutil$find_root(zloc){
var nloc = zloc;
while(true){
if(cljs.core.not((rewrite_clj.zip.up.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.up.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.up.call(null,nloc)))){
return nloc;
} else {
var G__29281 = (rewrite_clj.zip.up.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.up.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.up.call(null,nloc));
nloc = G__29281;
continue;
}
break;
}
});
/**
 * Move one down and then right a certain number of steps.
 */
zprint.zutil.move_down_and_right = (function zprint$zutil$move_down_and_right(zloc,right_count){
var nloc = (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
var remaining_right = right_count;
while(true){
if((remaining_right === (0))){
return nloc;
} else {
var G__29282 = (zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.right_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.right_STAR_.call(null,nloc));
var G__29283 = (remaining_right - (1));
nloc = G__29282;
remaining_right = G__29283;
continue;
}
break;
}
});
/**
 * Follow the path vector from the root and return the zloc
 *   at this location.
 */
zprint.zutil.follow_path = (function zprint$zutil$follow_path(path_vec,zloc){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(zprint.zutil.move_down_and_right,zloc,path_vec);
});
/**
 * Is this an anonymous fn?
 */
zprint.zutil.zanonfn_QMARK_ = (function zprint$zutil$zanonfn_QMARK_(zloc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)),new cljs.core.Keyword(null,"fn","fn",-1175266204));
});
/**
 * Return the last non-whitespace (but possibly comment) element inside
 *   of this zloc.
 */
zprint.zutil.zlast = (function zprint$zutil$zlast(zloc){
var nloc = (zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.down_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.down_STAR_.call(null,zloc));
if(cljs.core.truth_(nloc)){
return zprint.zutil.zrightmost(nloc);
} else {
return null;
}
});
/**
 * Returns true if this can be converted to an sexpr. Works around a bug
 *   where n/printable-only? returns false for n/tag :fn, but z/sexpr fails
 *   on something with n/tag :fn
 */
zprint.zutil.zsexpr_QMARK_ = (function zprint$zutil$zsexpr_QMARK_(zloc){
var and__3911__auto__ = zloc;
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fn","fn",-1175266204),(zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.tag.call(null,zloc)))) && (cljs.core.not((function (){var G__29285 = (rewrite_clj.zip.node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.node.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.node.call(null,zloc));
return (rewrite_clj.node.printable_only_QMARK_.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.printable_only_QMARK_.cljs$core$IFn$_invoke$arity$1(G__29285) : rewrite_clj.node.printable_only_QMARK_.call(null,G__29285));
})())));
} else {
return and__3911__auto__;
}
});
/**
 * Returns true if this is a keyword.
 */
zprint.zutil.zkeyword_QMARK_ = (function zprint$zutil$zkeyword_QMARK_(zloc){
var and__3911__auto__ = zloc;
if(cljs.core.truth_(and__3911__auto__)){
return clojure.string.starts_with_QMARK_((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.string.call(null,zloc)),":");
} else {
return and__3911__auto__;
}
});
/**
 * Returns true if this is a symbol.
 */
zprint.zutil.zsymbol_QMARK_ = (function zprint$zutil$zsymbol_QMARK_(zloc){
var and__3911__auto__ = zloc;
if(cljs.core.truth_(and__3911__auto__)){
var and__3911__auto____$1 = zprint.zutil.zsexpr_QMARK_(zloc);
if(cljs.core.truth_(and__3911__auto____$1)){
return ((zprint.zutil.sexpr.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.sexpr.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.sexpr.call(null,zloc)) instanceof cljs.core.Symbol);
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
});
/**
 * Returns true if this is nil.
 */
zprint.zutil.znil_QMARK_ = (function zprint$zutil$znil_QMARK_(zloc){
var and__3911__auto__ = zloc;
if(cljs.core.truth_(and__3911__auto__)){
var and__3911__auto____$1 = zprint.zutil.zsexpr_QMARK_(zloc);
if(cljs.core.truth_(and__3911__auto____$1)){
return ((rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.sexpr.call(null,zloc)) == null);
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
});
/**
 * Returns true if this is a reader-conditional with a symbol in 
 *   the first position (could be :clj or :cljs, whatever).
 */
zprint.zutil.zreader_cond_w_symbol_QMARK_ = (function zprint$zutil$zreader_cond_w_symbol_QMARK_(zloc){
var result = (cljs.core.truth_(zprint.zutil.zreader_macro_QMARK_(zloc))?(function (){var element = (rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.down.call(null,zloc));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(element) : rewrite_clj.zip.string.call(null,element)),"?")){
var element__$1 = (function (){var G__29286 = (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(element) : rewrite_clj.zip.right.call(null,element));
return (rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1(G__29286) : rewrite_clj.zip.down.call(null,G__29286));
})();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(element__$1) : rewrite_clj.zip.string.call(null,element__$1)),":clj")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(element__$1) : rewrite_clj.zip.string.call(null,element__$1)),":cljs")))){
return zprint.zutil.zsymbol_QMARK_((rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(element__$1) : rewrite_clj.zip.right.call(null,element__$1)));
} else {
return null;
}
} else {
return null;
}
})():null);
return result;
});
/**
 * Returns true if this is a reader-conditional with a collection in 
 *   the first position (could be :clj or :cljs, whatever).
 */
zprint.zutil.zreader_cond_w_coll_QMARK_ = (function zprint$zutil$zreader_cond_w_coll_QMARK_(zloc){
var result = (cljs.core.truth_(zprint.zutil.zreader_macro_QMARK_(zloc))?(function (){var element = (rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.down.call(null,zloc));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(element) : rewrite_clj.zip.string.call(null,element)),"?")){
var element__$1 = (function (){var G__29293 = (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(element) : rewrite_clj.zip.right.call(null,element));
return (rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1(G__29293) : rewrite_clj.zip.down.call(null,G__29293));
})();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(element__$1) : rewrite_clj.zip.string.call(null,element__$1)),":clj")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(element__$1) : rewrite_clj.zip.string.call(null,element__$1)),":cljs")))){
return zprint.zutil.z_coll_QMARK_((rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(element__$1) : rewrite_clj.zip.right.call(null,element__$1)));
} else {
return null;
}
} else {
return null;
}
})():null);
return result;
});
/**
 * Return a zloc that will turn into a string of three dots.
 */
zprint.zutil.zdotdotdot = (function zprint$zutil$zdotdotdot(){
var G__29302 = rewrite_clj.parser.parse_string("...");
return (zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1(G__29302) : zprint.zutil.edn_STAR_.call(null,G__29302));
});
/**
 * Returns true if this is a keyword, string, or number, in other words,
 *   a constant.
 */
zprint.zutil.zconstant_QMARK_ = (function zprint$zutil$zconstant_QMARK_(zloc){
var ztag = (rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.tag.call(null,zloc));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ztag,new cljs.core.Keyword(null,"unquote","unquote",1649741032))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ztag,new cljs.core.Keyword(null,"quote","quote",-262615245))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ztag,new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847))))){
var G__29304 = zprint.zutil.zfirst(zloc);
return (zprint.zutil.zconstant_QMARK_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.zconstant_QMARK_.cljs$core$IFn$_invoke$arity$1(G__29304) : zprint.zutil.zconstant_QMARK_.call(null,G__29304));
} else {
var and__3911__auto__ = cljs.core.not(zprint.zutil.z_coll_QMARK_(zloc));
if(and__3911__auto__){
var or__3922__auto__ = zprint.zutil.zkeyword_QMARK_(zloc);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
if(cljs.core.truth_(zprint.zutil.zsexpr_QMARK_(zloc))){
var sexpr = (zprint.zutil.sexpr.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.sexpr.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.sexpr.call(null,zloc));
return ((typeof sexpr === 'string') || (typeof sexpr === 'number'));
} else {
return null;
}
}
} else {
return and__3911__auto__;
}
}
});
/**
 * If this is an inline comment, returns the amount of space that
 *   was between this and the previous element.  That means that if
 *   we go left, we get something other than whitespace before a
 *   newline.  Assumes zloc is a comment.
 */
zprint.zutil.zinlinecomment_QMARK_ = (function zprint$zutil$zinlinecomment_QMARK_(zloc){
var nloc = (zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1(zloc) : zprint.zutil.left_STAR_.call(null,zloc));
var spaces = (0);
while(true){
var tnloc = (zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.tag.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.tag.call(null,nloc));
if((tnloc == null)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tnloc,new cljs.core.Keyword(null,"newline","newline",1790071323))){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tnloc,new cljs.core.Keyword(null,"comment","comment",532206069))){
return null;
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(tnloc,new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483))){
return spaces;
} else {
var G__29305 = (zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.left_STAR_.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.left_STAR_.call(null,nloc));
var G__29306 = ((zprint.zutil.length.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.length.cljs$core$IFn$_invoke$arity$1(nloc) : zprint.zutil.length.call(null,nloc)) + spaces);
nloc = G__29305;
spaces = G__29306;
continue;

}
}
}
}
break;
}
});
/**
 * Given a zloc zipper of a map, find the :doc element.
 */
zprint.zutil.find_doc_in_map = (function zprint$zutil$find_doc_in_map(zloc){
var nloc = (rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.down.call(null,zloc));
while(true){
if(cljs.core.truth_(nloc)){
if(cljs.core.truth_((function (){var and__3911__auto__ = zprint.zutil.zkeyword_QMARK_(nloc);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.string.call(null,nloc)),":doc");
} else {
return and__3911__auto__;
}
})())){
if(typeof (function (){var G__29307 = (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.right.call(null,nloc));
return (zprint.zutil.sexpr.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.sexpr.cljs$core$IFn$_invoke$arity$1(G__29307) : zprint.zutil.sexpr.call(null,G__29307));
})() === 'string'){
return (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.right.call(null,nloc));
} else {
return null;
}
} else {
var G__29309 = (function (){var G__29308 = (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.right.call(null,nloc));
return (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(G__29308) : rewrite_clj.zip.right.call(null,G__29308));
})();
nloc = G__29309;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Find a docstring in a zipper of a function.
 */
zprint.zutil.find_docstring = (function zprint$zutil$find_docstring(zloc){
var fn_name = (function (){var G__29310 = (rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.down.call(null,zloc));
return (rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(G__29310) : rewrite_clj.zip.string.call(null,G__29310));
})();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_name,"defn")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_name,"defmacro")))){
var docloc = (function (){var G__29311 = (function (){var G__29312 = (rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.down.call(null,zloc));
return (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(G__29312) : rewrite_clj.zip.right.call(null,G__29312));
})();
return (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(G__29311) : rewrite_clj.zip.right.call(null,G__29311));
})();
if(typeof (zprint.zutil.sexpr.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.sexpr.cljs$core$IFn$_invoke$arity$1(docloc) : zprint.zutil.sexpr.call(null,docloc)) === 'string'){
return docloc;
} else {
return null;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fn_name,"def")){
var maploc = (function (){var G__29313 = (function (){var G__29314 = (rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.down.call(null,zloc));
return (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(G__29314) : rewrite_clj.zip.right.call(null,G__29314));
})();
return (rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1(G__29313) : rewrite_clj.zip.down.call(null,G__29313));
})();
if(cljs.core.truth_((rewrite_clj.zip.map_QMARK_.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.map_QMARK_.cljs$core$IFn$_invoke$arity$1(maploc) : rewrite_clj.zip.map_QMARK_.call(null,maploc)))){
return zprint.zutil.find_doc_in_map(maploc);
} else {
return null;
}
} else {
return null;

}
}
});
/**
 * Given a zipper of a function definition, add the spec info to
 *   the docstring. Works for docstring with (def ...) functions, but
 *   the left-indent isn't optimal.  But to fix that, we'd have to do
 *   the zprinting here, where we know the indent of the existing
 *   docstring.
 */
zprint.zutil.add_spec_to_docstring = (function zprint$zutil$add_spec_to_docstring(zloc,spec_str){
var temp__5455__auto__ = zprint.zutil.find_docstring(zloc);
if(cljs.core.truth_(temp__5455__auto__)){
var doc_zloc = temp__5455__auto__;
var new_doc_zloc = (function (){var G__29315 = doc_zloc;
var G__29316 = (function (){var G__29317 = (function (){var G__29318 = rewrite_clj.parser.parse_string(["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1((zprint.zutil.sexpr.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.sexpr.cljs$core$IFn$_invoke$arity$1(doc_zloc) : zprint.zutil.sexpr.call(null,doc_zloc)))].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec_str),"\""].join(''));
return (zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1(G__29318) : zprint.zutil.edn_STAR_.call(null,G__29318));
})();
return (rewrite_clj.zip.node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.node.cljs$core$IFn$_invoke$arity$1(G__29317) : rewrite_clj.zip.node.call(null,G__29317));
})();
return (zprint.zutil.replace_STAR_.cljs$core$IFn$_invoke$arity$2 ? zprint.zutil.replace_STAR_.cljs$core$IFn$_invoke$arity$2(G__29315,G__29316) : zprint.zutil.replace_STAR_.call(null,G__29315,G__29316));
})();
var G__29319 = (rewrite_clj.zip.root.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.root.cljs$core$IFn$_invoke$arity$1(new_doc_zloc) : rewrite_clj.zip.root.call(null,new_doc_zloc));
return (zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1(G__29319) : zprint.zutil.edn_STAR_.call(null,G__29319));
} else {
return zloc;
}
});
/**
 * Perform a lift-ns on a pair-seq that is returned from
 *   partition-2-all-nc, which is a seq of pairs of zlocs that may or
 *   may not have been sorted and which may or may not have had things
 *   removed from it and may or may not actually be pairs.  Could be
 *   single things, could be multiple things.  If contains multiple
 *   things, the first thing is the key, but if it is just a single
 *   thing, the first thing is *not* a key. So we only need to work
 *   on the first of each seq which has more than one element in it,
 *   and possibly replace it. This will only lift out a ns if all keys
 *   in seqs with more than one element have the same namespace. Returns
 *   the [namespace pair-seq] or nil.
 */
zprint.zutil.zlift_ns = (function zprint$zutil$zlift_ns(pair_seq){
var strip_ns = (function (named){
if((named instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(null,cljs.core.name(named));
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(null,cljs.core.name(named));
}
});
var ns = null;
var pair_seq__$1 = pair_seq;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__29320 = cljs.core.first(pair_seq__$1);
var seq__29321 = cljs.core.seq(vec__29320);
var first__29322 = cljs.core.first(seq__29321);
var seq__29321__$1 = cljs.core.next(seq__29321);
var k = first__29322;
var rest_of_pair = seq__29321__$1;
var pair = vec__29320;
var current_ns = (cljs.core.truth_((function (){var and__3911__auto__ = rest_of_pair;
if(and__3911__auto__){
var and__3911__auto____$1 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$3((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(k) : rewrite_clj.zip.string.call(null,k)),(0),(2)),"::");
if(and__3911__auto____$1){
var or__3922__auto__ = zprint.zutil.zkeyword_QMARK_(k);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return zprint.zutil.zsymbol_QMARK_(k);
}
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})())?cljs.core.namespace((rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1(k) : rewrite_clj.zip.sexpr.call(null,k))):null);
if(cljs.core.not(k)){
if(cljs.core.truth_(ns)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,out], null);
} else {
return null;
}
} else {
if(cljs.core.truth_(current_ns)){
if(cljs.core.truth_(ns)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,current_ns)){
var G__29333 = ns;
var G__29334 = cljs.core.next(pair_seq__$1);
var G__29335 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,cljs.core.cons((function (){var G__29323 = (function (){var G__29324 = strip_ns((rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1(k) : rewrite_clj.zip.sexpr.call(null,k)));
return (rewrite_clj.node.token_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.token_node.cljs$core$IFn$_invoke$arity$1(G__29324) : rewrite_clj.node.token_node.call(null,G__29324));
})();
return (zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1(G__29323) : zprint.zutil.edn_STAR_.call(null,G__29323));
})(),rest_of_pair));
ns = G__29333;
pair_seq__$1 = G__29334;
out = G__29335;
continue;
} else {
return null;
}
} else {
var G__29338 = current_ns;
var G__29339 = cljs.core.next(pair_seq__$1);
var G__29340 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,cljs.core.cons((function (){var G__29325 = (function (){var G__29326 = strip_ns((rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1(k) : rewrite_clj.zip.sexpr.call(null,k)));
return (rewrite_clj.node.token_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.token_node.cljs$core$IFn$_invoke$arity$1(G__29326) : rewrite_clj.node.token_node.call(null,G__29326));
})();
return (zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1(G__29325) : zprint.zutil.edn_STAR_.call(null,G__29325));
})(),rest_of_pair));
ns = G__29338;
pair_seq__$1 = G__29339;
out = G__29340;
continue;
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pair),(1))){
var G__29343 = ns;
var G__29344 = cljs.core.next(pair_seq__$1);
var G__29345 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,pair);
ns = G__29343;
pair_seq__$1 = G__29344;
out = G__29345;
continue;
} else {
return null;
}
}
}
break;
}
});
/**
 * Redefine all of the traversal functions for zippers, then
 *   call the function of no arguments passed in.
 */
zprint.zutil.zredef_call = (function zprint$zutil$zredef_call(body_fn){
var zstring29347 = zprint.zfns.zstring;
var znumstr29348 = zprint.zfns.znumstr;
var zbyte_array_QMARK_29349 = zprint.zfns.zbyte_array_QMARK_;
var zcomment_QMARK_29350 = zprint.zfns.zcomment_QMARK_;
var zsexpr29351 = zprint.zfns.zsexpr;
var zseqnws29352 = zprint.zfns.zseqnws;
var zmap_right29353 = zprint.zfns.zmap_right;
var zfocus_style29354 = zprint.zfns.zfocus_style;
var zfirst29355 = zprint.zfns.zfirst;
var zfirst_no_comment29356 = zprint.zfns.zfirst_no_comment;
var zsecond29357 = zprint.zfns.zsecond;
var zthird29358 = zprint.zfns.zthird;
var zfourth29359 = zprint.zfns.zfourth;
var znthnext29360 = zprint.zfns.znthnext;
var zcount29361 = zprint.zfns.zcount;
var zmap29362 = zprint.zfns.zmap;
var zmap_w_nl29363 = zprint.zfns.zmap_w_nl;
var zanonfn_QMARK_29364 = zprint.zfns.zanonfn_QMARK_;
var zfn_obj_QMARK_29365 = zprint.zfns.zfn_obj_QMARK_;
var zfocus29366 = zprint.zfns.zfocus;
var zfind_path29367 = zprint.zfns.zfind_path;
var zwhitespace_QMARK_29368 = zprint.zfns.zwhitespace_QMARK_;
var zlist_QMARK_29369 = zprint.zfns.zlist_QMARK_;
var zvector_QMARK_29370 = zprint.zfns.zvector_QMARK_;
var zmap_QMARK_29371 = zprint.zfns.zmap_QMARK_;
var zset_QMARK_29372 = zprint.zfns.zset_QMARK_;
var zcoll_QMARK_29373 = zprint.zfns.zcoll_QMARK_;
var zuneval_QMARK_29374 = zprint.zfns.zuneval_QMARK_;
var zmeta_QMARK_29375 = zprint.zfns.zmeta_QMARK_;
var ztag29376 = zprint.zfns.ztag;
var zparseuneval29377 = zprint.zfns.zparseuneval;
var zlast29378 = zprint.zfns.zlast;
var zarray_QMARK_29379 = zprint.zfns.zarray_QMARK_;
var zatom_QMARK_29380 = zprint.zfns.zatom_QMARK_;
var zderef29381 = zprint.zfns.zderef;
var zrecord_QMARK_29382 = zprint.zfns.zrecord_QMARK_;
var zns_QMARK_29383 = zprint.zfns.zns_QMARK_;
var zobj_to_vec29384 = zprint.zfns.zobj_to_vec;
var zexpandarray29385 = zprint.zfns.zexpandarray;
var znewline_QMARK_29386 = zprint.zfns.znewline_QMARK_;
var zwhitespaceorcomment_QMARK_29387 = zprint.zfns.zwhitespaceorcomment_QMARK_;
var zmap_all29388 = zprint.zfns.zmap_all;
var zpromise_QMARK_29389 = zprint.zfns.zpromise_QMARK_;
var zfuture_QMARK_29390 = zprint.zfns.zfuture_QMARK_;
var zdelay_QMARK_29391 = zprint.zfns.zdelay_QMARK_;
var zkeyword_QMARK_29392 = zprint.zfns.zkeyword_QMARK_;
var zconstant_QMARK_29393 = zprint.zfns.zconstant_QMARK_;
var zagent_QMARK_29394 = zprint.zfns.zagent_QMARK_;
var zreader_macro_QMARK_29395 = zprint.zfns.zreader_macro_QMARK_;
var zarray_to_shift_seq29396 = zprint.zfns.zarray_to_shift_seq;
var zdotdotdot29397 = zprint.zfns.zdotdotdot;
var zsymbol_QMARK_29398 = zprint.zfns.zsymbol_QMARK_;
var znil_QMARK_29399 = zprint.zfns.znil_QMARK_;
var zreader_cond_w_symbol_QMARK_29400 = zprint.zfns.zreader_cond_w_symbol_QMARK_;
var zreader_cond_w_coll_QMARK_29401 = zprint.zfns.zreader_cond_w_coll_QMARK_;
var zlift_ns29402 = zprint.zfns.zlift_ns;
var zinlinecomment_QMARK_29403 = zprint.zfns.zinlinecomment_QMARK_;
var zfind29404 = zprint.zfns.zfind;
zprint.zfns.zstring = rewrite_clj.zip.string;

zprint.zfns.znumstr = zprint.zutil.znumstr;

zprint.zfns.zbyte_array_QMARK_ = cljs.core.constantly(false);

zprint.zfns.zcomment_QMARK_ = zprint.zutil.zcomment_QMARK_;

zprint.zfns.zsexpr = zprint.zutil.sexpr;

zprint.zfns.zseqnws = zprint.zutil.zseqnws;

zprint.zfns.zmap_right = zprint.zutil.zmap_right;

zprint.zfns.zfocus_style = zprint.zutil.zfocus_style;

zprint.zfns.zfirst = zprint.zutil.zfirst;

zprint.zfns.zfirst_no_comment = zprint.zutil.zfirst_no_comment;

zprint.zfns.zsecond = zprint.zutil.zsecond;

zprint.zfns.zthird = zprint.zutil.zthird;

zprint.zfns.zfourth = zprint.zutil.zfourth;

zprint.zfns.znthnext = zprint.zutil.znthnext;

zprint.zfns.zcount = zprint.zutil.zcount;

zprint.zfns.zmap = zprint.zutil.zmap;

zprint.zfns.zmap_w_nl = zprint.zutil.zmap_w_nl;

zprint.zfns.zanonfn_QMARK_ = zprint.zutil.zanonfn_QMARK_;

zprint.zfns.zfn_obj_QMARK_ = cljs.core.constantly(false);

zprint.zfns.zfocus = zprint.zutil.zfocus;

zprint.zfns.zfind_path = zprint.zutil.find_root_and_path_nw;

zprint.zfns.zwhitespace_QMARK_ = zprint.zutil.whitespace_QMARK_;

zprint.zfns.zlist_QMARK_ = rewrite_clj.zip.list_QMARK_;

zprint.zfns.zvector_QMARK_ = rewrite_clj.zip.vector_QMARK_;

zprint.zfns.zmap_QMARK_ = rewrite_clj.zip.map_QMARK_;

zprint.zfns.zset_QMARK_ = rewrite_clj.zip.set_QMARK_;

zprint.zfns.zcoll_QMARK_ = zprint.zutil.z_coll_QMARK_;

zprint.zfns.zuneval_QMARK_ = zprint.zutil.zuneval_QMARK_;

zprint.zfns.zmeta_QMARK_ = zprint.zutil.zmeta_QMARK_;

zprint.zfns.ztag = zprint.zutil.ztag;

zprint.zfns.zparseuneval = zprint.zutil.zparseuneval;

zprint.zfns.zlast = zprint.zutil.zlast;

zprint.zfns.zarray_QMARK_ = cljs.core.constantly(false);

zprint.zfns.zatom_QMARK_ = cljs.core.constantly(false);

zprint.zfns.zderef = cljs.core.constantly(false);

zprint.zfns.zrecord_QMARK_ = cljs.core.constantly(false);

zprint.zfns.zns_QMARK_ = cljs.core.constantly(false);

zprint.zfns.zobj_to_vec = cljs.core.constantly(null);

zprint.zfns.zexpandarray = cljs.core.constantly(null);

zprint.zfns.znewline_QMARK_ = zprint.zutil.znewline_QMARK_;

zprint.zfns.zwhitespaceorcomment_QMARK_ = zprint.zutil.whitespace_or_comment_QMARK_;

zprint.zfns.zmap_all = zprint.zutil.zmap_all;

zprint.zfns.zpromise_QMARK_ = cljs.core.constantly(false);

zprint.zfns.zfuture_QMARK_ = cljs.core.constantly(false);

zprint.zfns.zdelay_QMARK_ = cljs.core.constantly(false);

zprint.zfns.zkeyword_QMARK_ = zprint.zutil.zkeyword_QMARK_;

zprint.zfns.zconstant_QMARK_ = zprint.zutil.zconstant_QMARK_;

zprint.zfns.zagent_QMARK_ = cljs.core.constantly(false);

zprint.zfns.zreader_macro_QMARK_ = zprint.zutil.zreader_macro_QMARK_;

zprint.zfns.zarray_to_shift_seq = cljs.core.constantly(null);

zprint.zfns.zdotdotdot = zprint.zutil.zdotdotdot;

zprint.zfns.zsymbol_QMARK_ = zprint.zutil.zsymbol_QMARK_;

zprint.zfns.znil_QMARK_ = zprint.zutil.znil_QMARK_;

zprint.zfns.zreader_cond_w_symbol_QMARK_ = zprint.zutil.zreader_cond_w_symbol_QMARK_;

zprint.zfns.zreader_cond_w_coll_QMARK_ = zprint.zutil.zreader_cond_w_coll_QMARK_;

zprint.zfns.zlift_ns = zprint.zutil.zlift_ns;

zprint.zfns.zinlinecomment_QMARK_ = zprint.zutil.zinlinecomment_QMARK_;

zprint.zfns.zfind = zprint.zutil.zfind;

try{return (body_fn.cljs$core$IFn$_invoke$arity$0 ? body_fn.cljs$core$IFn$_invoke$arity$0() : body_fn.call(null));
}finally {zprint.zfns.zfind = zfind29404;

zprint.zfns.zinlinecomment_QMARK_ = zinlinecomment_QMARK_29403;

zprint.zfns.zlift_ns = zlift_ns29402;

zprint.zfns.zreader_cond_w_coll_QMARK_ = zreader_cond_w_coll_QMARK_29401;

zprint.zfns.zreader_cond_w_symbol_QMARK_ = zreader_cond_w_symbol_QMARK_29400;

zprint.zfns.znil_QMARK_ = znil_QMARK_29399;

zprint.zfns.zsymbol_QMARK_ = zsymbol_QMARK_29398;

zprint.zfns.zdotdotdot = zdotdotdot29397;

zprint.zfns.zarray_to_shift_seq = zarray_to_shift_seq29396;

zprint.zfns.zreader_macro_QMARK_ = zreader_macro_QMARK_29395;

zprint.zfns.zagent_QMARK_ = zagent_QMARK_29394;

zprint.zfns.zconstant_QMARK_ = zconstant_QMARK_29393;

zprint.zfns.zkeyword_QMARK_ = zkeyword_QMARK_29392;

zprint.zfns.zdelay_QMARK_ = zdelay_QMARK_29391;

zprint.zfns.zfuture_QMARK_ = zfuture_QMARK_29390;

zprint.zfns.zpromise_QMARK_ = zpromise_QMARK_29389;

zprint.zfns.zmap_all = zmap_all29388;

zprint.zfns.zwhitespaceorcomment_QMARK_ = zwhitespaceorcomment_QMARK_29387;

zprint.zfns.znewline_QMARK_ = znewline_QMARK_29386;

zprint.zfns.zexpandarray = zexpandarray29385;

zprint.zfns.zobj_to_vec = zobj_to_vec29384;

zprint.zfns.zns_QMARK_ = zns_QMARK_29383;

zprint.zfns.zrecord_QMARK_ = zrecord_QMARK_29382;

zprint.zfns.zderef = zderef29381;

zprint.zfns.zatom_QMARK_ = zatom_QMARK_29380;

zprint.zfns.zarray_QMARK_ = zarray_QMARK_29379;

zprint.zfns.zlast = zlast29378;

zprint.zfns.zparseuneval = zparseuneval29377;

zprint.zfns.ztag = ztag29376;

zprint.zfns.zmeta_QMARK_ = zmeta_QMARK_29375;

zprint.zfns.zuneval_QMARK_ = zuneval_QMARK_29374;

zprint.zfns.zcoll_QMARK_ = zcoll_QMARK_29373;

zprint.zfns.zset_QMARK_ = zset_QMARK_29372;

zprint.zfns.zmap_QMARK_ = zmap_QMARK_29371;

zprint.zfns.zvector_QMARK_ = zvector_QMARK_29370;

zprint.zfns.zlist_QMARK_ = zlist_QMARK_29369;

zprint.zfns.zwhitespace_QMARK_ = zwhitespace_QMARK_29368;

zprint.zfns.zfind_path = zfind_path29367;

zprint.zfns.zfocus = zfocus29366;

zprint.zfns.zfn_obj_QMARK_ = zfn_obj_QMARK_29365;

zprint.zfns.zanonfn_QMARK_ = zanonfn_QMARK_29364;

zprint.zfns.zmap_w_nl = zmap_w_nl29363;

zprint.zfns.zmap = zmap29362;

zprint.zfns.zcount = zcount29361;

zprint.zfns.znthnext = znthnext29360;

zprint.zfns.zfourth = zfourth29359;

zprint.zfns.zthird = zthird29358;

zprint.zfns.zsecond = zsecond29357;

zprint.zfns.zfirst_no_comment = zfirst_no_comment29356;

zprint.zfns.zfirst = zfirst29355;

zprint.zfns.zfocus_style = zfocus_style29354;

zprint.zfns.zmap_right = zmap_right29353;

zprint.zfns.zseqnws = zseqnws29352;

zprint.zfns.zsexpr = zsexpr29351;

zprint.zfns.zcomment_QMARK_ = zcomment_QMARK_29350;

zprint.zfns.zbyte_array_QMARK_ = zbyte_array_QMARK_29349;

zprint.zfns.znumstr = znumstr29348;

zprint.zfns.zstring = zstring29347;
}});

//# sourceMappingURL=zprint.zutil.js.map
