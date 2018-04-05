goog.provide('rewrite_clj.node.fn');
goog.require('cljs.core');
goog.require('rewrite_clj.node.protocols');
goog.require('clojure.walk');
/**
 * Construct function form.
 */
rewrite_clj.node.fn.construct_fn = (function rewrite_clj$node$fn$construct_fn(syms,vararg,body){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),(new cljs.core.List(null,cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(syms,(cljs.core.truth_(vararg)?(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),(new cljs.core.List(null,vararg,null,(1),null)),(2),null)):null))),(new cljs.core.List(null,body,null,(1),null)),(2),null)),(3),null));
});
/**
 * Get index based on the substring following the parameter's `%`.
 * Zero means vararg.
 */
rewrite_clj.node.fn.sym_index = (function rewrite_clj$node$fn$sym_index(n){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,"&")){
return (0);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,"")){
return (1);
} else {
if(cljs.core.truth_(cljs.core.re_matches(/\d+/,n))){
return parseInt(n);
} else {
throw (new Error("arg literal must be %, %& or %integer."));

}
}
}
});
/**
 * If symbol starting with `%`, convert to respective gensym.
 */
rewrite_clj.node.fn.symbol__GT_gensym = (function rewrite_clj$node$fn$symbol__GT_gensym(sym_seq,vararg_QMARK_,max_n,sym){
if((sym instanceof cljs.core.Symbol)){
var nm = cljs.core.name(sym);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nm.indexOf("%"),(0))){
var i = rewrite_clj.node.fn.sym_index(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(nm,(1)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(max_n,cljs.core.max,i);

return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sym_seq,i);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Walk the form and create an expand function form.
 */
rewrite_clj.node.fn.fn_walk = (function rewrite_clj$node$fn$fn_walk(form){
var syms = (function (){var iter__4292__auto__ = (function rewrite_clj$node$fn$fn_walk_$_iter__28395(s__28396){
return (new cljs.core.LazySeq(null,(function (){
var s__28396__$1 = s__28396;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__28396__$1);
if(temp__5457__auto__){
var s__28396__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28396__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__28396__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__28398 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__28397 = (0);
while(true){
if((i__28397 < size__4291__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__28397);
var base = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(0)))?"rest__":["p",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),"__"].join(''));
var s = cljs.core.name(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(base));
cljs.core.chunk_append(b__28398,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"#"].join('')));

var G__28407 = (i__28397 + (1));
i__28397 = G__28407;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28398),rewrite_clj$node$fn$fn_walk_$_iter__28395(cljs.core.chunk_rest(s__28396__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28398),null);
}
} else {
var i = cljs.core.first(s__28396__$2);
var base = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(0)))?"rest__":["p",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),"__"].join(''));
var s = cljs.core.name(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(base));
return cljs.core.cons(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"#"].join('')),rewrite_clj$node$fn$fn_walk_$_iter__28395(cljs.core.rest(s__28396__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$0());
})();
var vararg_QMARK_ = false;
var max_n = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var body = clojure.walk.prewalk(((function (syms,vararg_QMARK_,max_n){
return (function (p1__28394_SHARP_){
var or__3922__auto__ = rewrite_clj.node.fn.symbol__GT_gensym(syms,vararg_QMARK_,max_n,p1__28394_SHARP_);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return p1__28394_SHARP_;
}
});})(syms,vararg_QMARK_,max_n))
,form);
return rewrite_clj.node.fn.construct_fn(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(max_n),cljs.core.rest(syms)),null,body);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {rewrite_clj.node.protocols.InnerNode}
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
rewrite_clj.node.fn.FnNode = (function (children,__meta,__extmap,__hash){
this.children = children;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
rewrite_clj.node.fn.FnNode.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return rewrite_clj.node.protocols.string(this$);
});

rewrite_clj.node.fn.FnNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11972__auto__,k__11973__auto__){
var self__ = this;
var this__11972__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__11972__auto____$1,k__11973__auto__,null);
});

rewrite_clj.node.fn.FnNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11974__auto__,k28413,else__11975__auto__){
var self__ = this;
var this__11974__auto____$1 = this;
var G__28423 = k28413;
var G__28423__$1 = (((G__28423 instanceof cljs.core.Keyword))?G__28423.fqn:null);
switch (G__28423__$1) {
case "children":
return self__.children;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k28413,else__11975__auto__);

}
});

rewrite_clj.node.fn.FnNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11986__auto__,writer__11987__auto__,opts__11988__auto__){
var self__ = this;
var this__11986__auto____$1 = this;
var pr_pair__11989__auto__ = ((function (this__11986__auto____$1){
return (function (keyval__11990__auto__){
return cljs.core.pr_sequential_writer(writer__11987__auto__,cljs.core.pr_writer,""," ","",opts__11988__auto__,keyval__11990__auto__);
});})(this__11986__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__11987__auto__,pr_pair__11989__auto__,"#rewrite-clj.node.fn.FnNode{",", ","}",opts__11988__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",-940561982),self__.children],null))], null),self__.__extmap));
});

rewrite_clj.node.fn.FnNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28412){
var self__ = this;
var G__28412__$1 = this;
return (new cljs.core.RecordIter((0),G__28412__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

rewrite_clj.node.fn.FnNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11970__auto__){
var self__ = this;
var this__11970__auto____$1 = this;
return self__.__meta;
});

rewrite_clj.node.fn.FnNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11967__auto__){
var self__ = this;
var this__11967__auto____$1 = this;
return (new rewrite_clj.node.fn.FnNode(self__.children,self__.__meta,self__.__extmap,self__.__hash));
});

rewrite_clj.node.fn.FnNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11976__auto__){
var self__ = this;
var this__11976__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

rewrite_clj.node.fn.FnNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11968__auto__){
var self__ = this;
var this__11968__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = (function (){var fexpr__28429 = ((function (h__4030__auto__,this__11968__auto____$1){
return (function (coll__11969__auto__){
return (-1740346885 ^ cljs.core.hash_unordered_coll(coll__11969__auto__));
});})(h__4030__auto__,this__11968__auto____$1))
;
return fexpr__28429(this__11968__auto____$1);
})();
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

rewrite_clj.node.fn.FnNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28414,other28415){
var self__ = this;
var this28414__$1 = this;
return ((!((other28415 == null))) && ((this28414__$1.constructor === other28415.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28414__$1.children,other28415.children)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this28414__$1.__extmap,other28415.__extmap)));
});

rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL;

rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"fn","fn",-1175266204);
});

rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
});

rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$Node$sexpr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return rewrite_clj.node.fn.fn_walk(rewrite_clj.node.protocols.sexprs(self__.children));
});

rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((3) + rewrite_clj.node.protocols.sum_lengths(self__.children));
});

rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ["#(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rewrite_clj.node.protocols.concat_strings(self__.children)),")"].join('');
});

rewrite_clj.node.fn.FnNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11981__auto__,k__11982__auto__){
var self__ = this;
var this__11981__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),null], null), null),k__11982__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__11981__auto____$1),self__.__meta),k__11982__auto__);
} else {
return (new rewrite_clj.node.fn.FnNode(self__.children,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__11982__auto__)),null));
}
});

rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$InnerNode$ = cljs.core.PROTOCOL_SENTINEL;

rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$InnerNode$inner_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$InnerNode$children$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.children;
});

rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$InnerNode$replace_children$arity$2 = (function (this$,children_SINGLEQUOTE_){
var self__ = this;
var this$__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"children","children",-940561982),children_SINGLEQUOTE_);
});

rewrite_clj.node.fn.FnNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11979__auto__,k__11980__auto__,G__28412){
var self__ = this;
var this__11979__auto____$1 = this;
var pred__28438 = cljs.core.keyword_identical_QMARK_;
var expr__28439 = k__11980__auto__;
if(cljs.core.truth_((function (){var G__28441 = new cljs.core.Keyword(null,"children","children",-940561982);
var G__28442 = expr__28439;
return (pred__28438.cljs$core$IFn$_invoke$arity$2 ? pred__28438.cljs$core$IFn$_invoke$arity$2(G__28441,G__28442) : pred__28438.call(null,G__28441,G__28442));
})())){
return (new rewrite_clj.node.fn.FnNode(G__28412,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_clj.node.fn.FnNode(self__.children,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11980__auto__,G__28412),null));
}
});

rewrite_clj.node.fn.FnNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11984__auto__){
var self__ = this;
var this__11984__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",-940561982),self__.children],null))], null),self__.__extmap));
});

rewrite_clj.node.fn.FnNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11971__auto__,G__28412){
var self__ = this;
var this__11971__auto____$1 = this;
return (new rewrite_clj.node.fn.FnNode(self__.children,G__28412,self__.__extmap,self__.__hash));
});

rewrite_clj.node.fn.FnNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11977__auto__,entry__11978__auto__){
var self__ = this;
var this__11977__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__11978__auto__)){
return cljs.core._assoc(this__11977__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11978__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11978__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__11977__auto____$1,entry__11978__auto__);
}
});

rewrite_clj.node.fn.FnNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"children","children",699969545,null)], null);
});

rewrite_clj.node.fn.FnNode.cljs$lang$type = true;

rewrite_clj.node.fn.FnNode.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"rewrite-clj.node.fn/FnNode",null,(1),null));
});

rewrite_clj.node.fn.FnNode.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write(writer__4209__auto__,"rewrite-clj.node.fn/FnNode");
});

/**
 * Positional factory function for rewrite-clj.node.fn/FnNode.
 */
rewrite_clj.node.fn.__GT_FnNode = (function rewrite_clj$node$fn$__GT_FnNode(children){
return (new rewrite_clj.node.fn.FnNode(children,null,null,null));
});

/**
 * Factory function for rewrite-clj.node.fn/FnNode, taking a map of keywords to field values.
 */
rewrite_clj.node.fn.map__GT_FnNode = (function rewrite_clj$node$fn$map__GT_FnNode(G__28418){
return (new rewrite_clj.node.fn.FnNode(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__28418),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__28418,new cljs.core.Keyword(null,"children","children",-940561982))),null));
});

/**
 * Create node representing an anonymous function.
 */
rewrite_clj.node.fn.fn_node = (function rewrite_clj$node$fn$fn_node(children){
return rewrite_clj.node.fn.__GT_FnNode(children);
});

//# sourceMappingURL=rewrite_clj.node.fn.js.map
