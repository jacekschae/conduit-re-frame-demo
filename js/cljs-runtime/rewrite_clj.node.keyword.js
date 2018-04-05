goog.provide('rewrite_clj.node.keyword');
goog.require('cljs.core');
goog.require('rewrite_clj.node.protocols');

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
rewrite_clj.node.keyword.KeywordNode = (function (k,namespaced_QMARK_,__meta,__extmap,__hash){
this.k = k;
this.namespaced_QMARK_ = namespaced_QMARK_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
rewrite_clj.node.keyword.KeywordNode.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return rewrite_clj.node.protocols.string(this$);
});

rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11972__auto__,k__11973__auto__){
var self__ = this;
var this__11972__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__11972__auto____$1,k__11973__auto__,null);
});

rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11974__auto__,k28239,else__11975__auto__){
var self__ = this;
var this__11974__auto____$1 = this;
var G__28245 = k28239;
var G__28245__$1 = (((G__28245 instanceof cljs.core.Keyword))?G__28245.fqn:null);
switch (G__28245__$1) {
case "k":
return self__.k;

break;
case "namespaced?":
return self__.namespaced_QMARK_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28239,else__11975__auto__);

}
});

rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11986__auto__,writer__11987__auto__,opts__11988__auto__){
var self__ = this;
var this__11986__auto____$1 = this;
var pr_pair__11989__auto__ = ((function (this__11986__auto____$1){
return (function (keyval__11990__auto__){
return cljs.core.pr_sequential_writer(writer__11987__auto__,cljs.core.pr_writer,""," ","",opts__11988__auto__,keyval__11990__auto__);
});})(this__11986__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__11987__auto__,pr_pair__11989__auto__,"#rewrite-clj.node.keyword.KeywordNode{",", ","}",opts__11988__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"namespaced?","namespaced?",-877312877),self__.namespaced_QMARK_],null))], null),self__.__extmap));
});

rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28238){
var self__ = this;
var G__28238__$1 = this;
return (new cljs.core.RecordIter((0),G__28238__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.Keyword(null,"namespaced?","namespaced?",-877312877)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11970__auto__){
var self__ = this;
var this__11970__auto____$1 = this;
return self__.__meta;
});

rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11967__auto__){
var self__ = this;
var this__11967__auto____$1 = this;
return (new rewrite_clj.node.keyword.KeywordNode(self__.k,self__.namespaced_QMARK_,self__.__meta,self__.__extmap,self__.__hash));
});

rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11976__auto__){
var self__ = this;
var this__11976__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11968__auto__){
var self__ = this;
var this__11968__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = (function (){var fexpr__28246 = ((function (h__4030__auto__,this__11968__auto____$1){
return (function (coll__11969__auto__){
return (-1681863292 ^ cljs.core.hash_unordered_coll(coll__11969__auto__));
});})(h__4030__auto__,this__11968__auto____$1))
;
return fexpr__28246(this__11968__auto____$1);
})();
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28240,other28241){
var self__ = this;
var this28240__$1 = this;
return ((!((other28241 == null))) && ((this28240__$1.constructor === other28241.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28240__$1.k,other28241.k)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28240__$1.namespaced_QMARK_,other28241.namespaced_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28240__$1.__extmap,other28241.__extmap)));
});

rewrite_clj.node.keyword.KeywordNode.prototype.rewrite_clj$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL;

rewrite_clj.node.keyword.KeywordNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"token","token",-1211463215);
});

rewrite_clj.node.keyword.KeywordNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
});

rewrite_clj.node.keyword.KeywordNode.prototype.rewrite_clj$node$protocols$Node$sexpr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var and__3911__auto__ = self__.namespaced_QMARK_;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not(cljs.core.namespace(self__.k));
} else {
return and__3911__auto__;
}
})())){
throw (new Error("Namespaced keywords not supported !"));
} else {
return self__.k;
}
});

rewrite_clj.node.keyword.KeywordNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var c = (cljs.core.count(cljs.core.name(self__.k)) + (1));
if(cljs.core.truth_(self__.namespaced_QMARK_)){
return (c + (1));
} else {
var temp__5455__auto__ = cljs.core.namespace(self__.k);
if(cljs.core.truth_(temp__5455__auto__)){
var nspace = temp__5455__auto__;
return (((1) + c) + cljs.core.count(nspace));
} else {
return c;
}
}
});

rewrite_clj.node.keyword.KeywordNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var v = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.k], 0));
if(cljs.core.truth_(self__.namespaced_QMARK_)){
return [":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
} else {
return v;
}
});

rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11981__auto__,k__11982__auto__){
var self__ = this;
var this__11981__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"k","k",-2146297393),null,new cljs.core.Keyword(null,"namespaced?","namespaced?",-877312877),null], null), null),k__11982__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__11981__auto____$1),self__.__meta),k__11982__auto__);
} else {
return (new rewrite_clj.node.keyword.KeywordNode(self__.k,self__.namespaced_QMARK_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__11982__auto__)),null));
}
});

rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11979__auto__,k__11980__auto__,G__28238){
var self__ = this;
var this__11979__auto____$1 = this;
var pred__28249 = cljs.core.keyword_identical_QMARK_;
var expr__28250 = k__11980__auto__;
if(cljs.core.truth_((function (){var G__28252 = new cljs.core.Keyword(null,"k","k",-2146297393);
var G__28253 = expr__28250;
return (pred__28249.cljs$core$IFn$_invoke$arity$2 ? pred__28249.cljs$core$IFn$_invoke$arity$2(G__28252,G__28253) : pred__28249.call(null,G__28252,G__28253));
})())){
return (new rewrite_clj.node.keyword.KeywordNode(G__28238,self__.namespaced_QMARK_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__28254 = new cljs.core.Keyword(null,"namespaced?","namespaced?",-877312877);
var G__28255 = expr__28250;
return (pred__28249.cljs$core$IFn$_invoke$arity$2 ? pred__28249.cljs$core$IFn$_invoke$arity$2(G__28254,G__28255) : pred__28249.call(null,G__28254,G__28255));
})())){
return (new rewrite_clj.node.keyword.KeywordNode(self__.k,G__28238,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_clj.node.keyword.KeywordNode(self__.k,self__.namespaced_QMARK_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11980__auto__,G__28238),null));
}
}
});

rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11984__auto__){
var self__ = this;
var this__11984__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"k","k",-2146297393),self__.k],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"namespaced?","namespaced?",-877312877),self__.namespaced_QMARK_],null))], null),self__.__extmap));
});

rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11971__auto__,G__28238){
var self__ = this;
var this__11971__auto____$1 = this;
return (new rewrite_clj.node.keyword.KeywordNode(self__.k,self__.namespaced_QMARK_,G__28238,self__.__extmap,self__.__hash));
});

rewrite_clj.node.keyword.KeywordNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11977__auto__,entry__11978__auto__){
var self__ = this;
var this__11977__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__11978__auto__)){
return cljs.core._assoc(this__11977__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11978__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11978__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__11977__auto____$1,entry__11978__auto__);
}
});

rewrite_clj.node.keyword.KeywordNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"namespaced?","namespaced?",763218650,null)], null);
});

rewrite_clj.node.keyword.KeywordNode.cljs$lang$type = true;

rewrite_clj.node.keyword.KeywordNode.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"rewrite-clj.node.keyword/KeywordNode",null,(1),null));
});

rewrite_clj.node.keyword.KeywordNode.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write(writer__4209__auto__,"rewrite-clj.node.keyword/KeywordNode");
});

/**
 * Positional factory function for rewrite-clj.node.keyword/KeywordNode.
 */
rewrite_clj.node.keyword.__GT_KeywordNode = (function rewrite_clj$node$keyword$__GT_KeywordNode(k,namespaced_QMARK_){
return (new rewrite_clj.node.keyword.KeywordNode(k,namespaced_QMARK_,null,null,null));
});

/**
 * Factory function for rewrite-clj.node.keyword/KeywordNode, taking a map of keywords to field values.
 */
rewrite_clj.node.keyword.map__GT_KeywordNode = (function rewrite_clj$node$keyword$map__GT_KeywordNode(G__28242){
return (new rewrite_clj.node.keyword.KeywordNode(new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(G__28242),new cljs.core.Keyword(null,"namespaced?","namespaced?",-877312877).cljs$core$IFn$_invoke$arity$1(G__28242),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__28242,new cljs.core.Keyword(null,"k","k",-2146297393),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"namespaced?","namespaced?",-877312877)], 0))),null));
});

/**
 * Create node representing a keyword. If `namespaced?` is given as `true`
 * a keyword à la `::x` or `::ns/x` (i.e. namespaced/aliased) is generated.
 */
rewrite_clj.node.keyword.keyword_node = (function rewrite_clj$node$keyword$keyword_node(var_args){
var args__4502__auto__ = [];
var len__4499__auto___28285 = arguments.length;
var i__4500__auto___28286 = (0);
while(true){
if((i__4500__auto___28286 < len__4499__auto___28285)){
args__4502__auto__.push((arguments[i__4500__auto___28286]));

var G__28287 = (i__4500__auto___28286 + (1));
i__4500__auto___28286 = G__28287;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return rewrite_clj.node.keyword.keyword_node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

rewrite_clj.node.keyword.keyword_node.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__28281){
var vec__28282 = p__28281;
var namespaced_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28282,(0),null);
if((k instanceof cljs.core.Keyword)){
} else {
throw (new Error("Assert failed: (keyword? k)"));
}

return rewrite_clj.node.keyword.__GT_KeywordNode(k,namespaced_QMARK_);
});

rewrite_clj.node.keyword.keyword_node.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
rewrite_clj.node.keyword.keyword_node.cljs$lang$applyTo = (function (seq28279){
var G__28280 = cljs.core.first(seq28279);
var seq28279__$1 = cljs.core.next(seq28279);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28280,seq28279__$1);
});


//# sourceMappingURL=rewrite_clj.node.keyword.js.map
