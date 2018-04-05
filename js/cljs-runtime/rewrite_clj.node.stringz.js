goog.provide('rewrite_clj.node.stringz');
goog.require('cljs.core');
goog.require('rewrite_clj.node.protocols');
goog.require('cljs.tools.reader');
goog.require('clojure.string');
rewrite_clj.node.stringz.wrap_string = (function rewrite_clj$node$stringz$wrap_string(v){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),"\""].join('');
});
rewrite_clj.node.stringz.join_lines = (function rewrite_clj$node$stringz$join_lines(lines){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",lines);
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
 * @implements {rewrite_clj.node.protocols.Node}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
rewrite_clj.node.stringz.StringNode = (function (lines,__meta,__extmap,__hash){
this.lines = lines;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
rewrite_clj.node.stringz.StringNode.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return rewrite_clj.node.protocols.string(this$);
});

rewrite_clj.node.stringz.StringNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11972__auto__,k__11973__auto__){
var self__ = this;
var this__11972__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__11972__auto____$1,k__11973__auto__,null);
});

rewrite_clj.node.stringz.StringNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11974__auto__,k28296,else__11975__auto__){
var self__ = this;
var this__11974__auto____$1 = this;
var G__28304 = k28296;
var G__28304__$1 = (((G__28304 instanceof cljs.core.Keyword))?G__28304.fqn:null);
switch (G__28304__$1) {
case "lines":
return self__.lines;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28296,else__11975__auto__);

}
});

rewrite_clj.node.stringz.StringNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11986__auto__,writer__11987__auto__,opts__11988__auto__){
var self__ = this;
var this__11986__auto____$1 = this;
var pr_pair__11989__auto__ = ((function (this__11986__auto____$1){
return (function (keyval__11990__auto__){
return cljs.core.pr_sequential_writer(writer__11987__auto__,cljs.core.pr_writer,""," ","",opts__11988__auto__,keyval__11990__auto__);
});})(this__11986__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__11987__auto__,pr_pair__11989__auto__,"#rewrite-clj.node.stringz.StringNode{",", ","}",opts__11988__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"lines","lines",-700165781),self__.lines],null))], null),self__.__extmap));
});

rewrite_clj.node.stringz.StringNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28295){
var self__ = this;
var G__28295__$1 = this;
return (new cljs.core.RecordIter((0),G__28295__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lines","lines",-700165781)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

rewrite_clj.node.stringz.StringNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11970__auto__){
var self__ = this;
var this__11970__auto____$1 = this;
return self__.__meta;
});

rewrite_clj.node.stringz.StringNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11967__auto__){
var self__ = this;
var this__11967__auto____$1 = this;
return (new rewrite_clj.node.stringz.StringNode(self__.lines,self__.__meta,self__.__extmap,self__.__hash));
});

rewrite_clj.node.stringz.StringNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11976__auto__){
var self__ = this;
var this__11976__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

rewrite_clj.node.stringz.StringNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11968__auto__){
var self__ = this;
var this__11968__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = (function (){var fexpr__28307 = ((function (h__4030__auto__,this__11968__auto____$1){
return (function (coll__11969__auto__){
return (1538615006 ^ cljs.core.hash_unordered_coll(coll__11969__auto__));
});})(h__4030__auto__,this__11968__auto____$1))
;
return fexpr__28307(this__11968__auto____$1);
})();
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

rewrite_clj.node.stringz.StringNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28297,other28298){
var self__ = this;
var this28297__$1 = this;
return ((!((other28298 == null))) && ((this28297__$1.constructor === other28298.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28297__$1.lines,other28298.lines)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28297__$1.__extmap,other28298.__extmap)));
});

rewrite_clj.node.stringz.StringNode.prototype.rewrite_clj$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL;

rewrite_clj.node.stringz.StringNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.next(self__.lines)){
return new cljs.core.Keyword(null,"multi-line","multi-line",240640676);
} else {
return new cljs.core.Keyword(null,"token","token",-1211463215);
}
});

rewrite_clj.node.stringz.StringNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
});

rewrite_clj.node.stringz.StringNode.prototype.rewrite_clj$node$protocols$Node$sexpr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return rewrite_clj.node.stringz.join_lines(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.tools.reader.read_string,rewrite_clj.node.stringz.wrap_string),self__.lines));
});

rewrite_clj.node.stringz.StringNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((2) + cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,self__.lines)));
});

rewrite_clj.node.stringz.StringNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return rewrite_clj.node.stringz.wrap_string(rewrite_clj.node.stringz.join_lines(self__.lines));
});

rewrite_clj.node.stringz.StringNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11981__auto__,k__11982__auto__){
var self__ = this;
var this__11981__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lines","lines",-700165781),null], null), null),k__11982__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__11981__auto____$1),self__.__meta),k__11982__auto__);
} else {
return (new rewrite_clj.node.stringz.StringNode(self__.lines,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__11982__auto__)),null));
}
});

rewrite_clj.node.stringz.StringNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11979__auto__,k__11980__auto__,G__28295){
var self__ = this;
var this__11979__auto____$1 = this;
var pred__28308 = cljs.core.keyword_identical_QMARK_;
var expr__28309 = k__11980__auto__;
if(cljs.core.truth_((function (){var G__28311 = new cljs.core.Keyword(null,"lines","lines",-700165781);
var G__28312 = expr__28309;
return (pred__28308.cljs$core$IFn$_invoke$arity$2 ? pred__28308.cljs$core$IFn$_invoke$arity$2(G__28311,G__28312) : pred__28308.call(null,G__28311,G__28312));
})())){
return (new rewrite_clj.node.stringz.StringNode(G__28295,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_clj.node.stringz.StringNode(self__.lines,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11980__auto__,G__28295),null));
}
});

rewrite_clj.node.stringz.StringNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11984__auto__){
var self__ = this;
var this__11984__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"lines","lines",-700165781),self__.lines],null))], null),self__.__extmap));
});

rewrite_clj.node.stringz.StringNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11971__auto__,G__28295){
var self__ = this;
var this__11971__auto____$1 = this;
return (new rewrite_clj.node.stringz.StringNode(self__.lines,G__28295,self__.__extmap,self__.__hash));
});

rewrite_clj.node.stringz.StringNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11977__auto__,entry__11978__auto__){
var self__ = this;
var this__11977__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__11978__auto__)){
return cljs.core._assoc(this__11977__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11978__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11978__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__11977__auto____$1,entry__11978__auto__);
}
});

rewrite_clj.node.stringz.StringNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"lines","lines",940365746,null)], null);
});

rewrite_clj.node.stringz.StringNode.cljs$lang$type = true;

rewrite_clj.node.stringz.StringNode.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"rewrite-clj.node.stringz/StringNode",null,(1),null));
});

rewrite_clj.node.stringz.StringNode.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write(writer__4209__auto__,"rewrite-clj.node.stringz/StringNode");
});

/**
 * Positional factory function for rewrite-clj.node.stringz/StringNode.
 */
rewrite_clj.node.stringz.__GT_StringNode = (function rewrite_clj$node$stringz$__GT_StringNode(lines){
return (new rewrite_clj.node.stringz.StringNode(lines,null,null,null));
});

/**
 * Factory function for rewrite-clj.node.stringz/StringNode, taking a map of keywords to field values.
 */
rewrite_clj.node.stringz.map__GT_StringNode = (function rewrite_clj$node$stringz$map__GT_StringNode(G__28299){
return (new rewrite_clj.node.stringz.StringNode(new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(G__28299),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__28299,new cljs.core.Keyword(null,"lines","lines",-700165781))),null));
});

/**
 * Create node representing a string value.
 * Takes either a seq of strings or a single one.
 */
rewrite_clj.node.stringz.string_node = (function rewrite_clj$node$stringz$string_node(lines){
if(typeof lines === 'string'){
return rewrite_clj.node.stringz.__GT_StringNode(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lines], null));
} else {
return rewrite_clj.node.stringz.__GT_StringNode(lines);
}
});

//# sourceMappingURL=rewrite_clj.node.stringz.js.map
