goog.provide('rewrite_clj.node.coercer');
goog.require('cljs.core');
goog.require('rewrite_clj.node.comment');
goog.require('rewrite_clj.node.forms');
goog.require('rewrite_clj.node.keyword');
goog.require('rewrite_clj.node.quote');
goog.require('rewrite_clj.node.stringz');
goog.require('rewrite_clj.node.uneval');
goog.require('rewrite_clj.node.meta');
goog.require('rewrite_clj.node.fn');
goog.require('rewrite_clj.node.protocols');
goog.require('rewrite_clj.node.reader_macro');
goog.require('rewrite_clj.node.seq');
goog.require('rewrite_clj.node.token');
goog.require('rewrite_clj.node.whitespace');
rewrite_clj.node.coercer.node_with_meta = (function rewrite_clj$node$coercer$node_with_meta(n,value){
if(((!((value == null)))?(((((value.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === value.cljs$core$IWithMeta$))))?true:false):false)){
var mta = cljs.core.meta(value);
if(cljs.core.empty_QMARK_(mta)){
return n;
} else {
return rewrite_clj.node.meta.meta_node.cljs$core$IFn$_invoke$arity$2(rewrite_clj.node.protocols.coerce(mta),n);
}
} else {
return n;
}
});
goog.object.set(rewrite_clj.node.protocols.NodeCoerceable,"object",true);

var G__28590_28593 = rewrite_clj.node.protocols.coerce;
var G__28591_28594 = "object";
var G__28592_28595 = ((function (G__28590_28593,G__28591_28594){
return (function (v){
return rewrite_clj.node.coercer.node_with_meta(rewrite_clj.node.token.token_node.cljs$core$IFn$_invoke$arity$1(v),v);
});})(G__28590_28593,G__28591_28594))
;
goog.object.set(G__28590_28593,G__28591_28594,G__28592_28595);
goog.object.set(rewrite_clj.node.protocols.NodeCoerceable,"number",true);

var G__28596_28599 = rewrite_clj.node.protocols.coerce;
var G__28597_28600 = "number";
var G__28598_28601 = ((function (G__28596_28599,G__28597_28600){
return (function (n){
return rewrite_clj.node.coercer.node_with_meta(rewrite_clj.node.token.token_node.cljs$core$IFn$_invoke$arity$1(n),n);
});})(G__28596_28599,G__28597_28600))
;
goog.object.set(G__28596_28599,G__28597_28600,G__28598_28601);
goog.object.set(rewrite_clj.node.protocols.NodeCoerceable,"string",true);

var G__28602_28605 = rewrite_clj.node.protocols.coerce;
var G__28603_28606 = "string";
var G__28604_28607 = ((function (G__28602_28605,G__28603_28606){
return (function (n){
return rewrite_clj.node.coercer.node_with_meta(rewrite_clj.node.stringz.string_node(n),n);
});})(G__28602_28605,G__28603_28606))
;
goog.object.set(G__28602_28605,G__28603_28606,G__28604_28607);
rewrite_clj.node.coercer.seq_node = (function rewrite_clj$node$coercer$seq_node(f,sq){
return rewrite_clj.node.coercer.node_with_meta((function (){var G__28608 = cljs.core.vec(rewrite_clj.node.whitespace.space_separated(cljs.core.map.cljs$core$IFn$_invoke$arity$2(rewrite_clj.node.protocols.coerce,sq)));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__28608) : f.call(null,G__28608));
})(),sq);
});
cljs.core.PersistentVector.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (sq){
var sq__$1 = this;
return rewrite_clj.node.coercer.seq_node(rewrite_clj.node.seq.vector_node,sq__$1);
});

cljs.core.List.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.List.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (sq){
var sq__$1 = this;
return rewrite_clj.node.coercer.seq_node(rewrite_clj.node.seq.list_node,sq__$1);
});

cljs.core.PersistentHashSet.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashSet.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (sq){
var sq__$1 = this;
return rewrite_clj.node.coercer.seq_node(rewrite_clj.node.seq.set_node,sq__$1);
});
var comma_28613 = rewrite_clj.node.whitespace.whitespace_node(", ");
var space_28614 = rewrite_clj.node.whitespace.whitespace_node(" ");
rewrite_clj.node.coercer.map__GT_children = ((function (comma_28613,space_28614){
return (function rewrite_clj$node$coercer$map__GT_children(m){
return cljs.core.vec(cljs.core.butlast(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (comma_28613,space_28614){
return (function (p__28609){
var vec__28610 = p__28609;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28610,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28610,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rewrite_clj.node.protocols.coerce(k),space_28614,rewrite_clj.node.protocols.coerce(v),comma_28613], null);
});})(comma_28613,space_28614))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m], 0))));
});})(comma_28613,space_28614))
;
cljs.core.PersistentHashMap.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashMap.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (m){
var m__$1 = this;
return rewrite_clj.node.coercer.node_with_meta(rewrite_clj.node.seq.map_node(rewrite_clj.node.coercer.map__GT_children(m__$1)),m__$1);
});
rewrite_clj.node.whitespace.WhitespaceNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL;

rewrite_clj.node.whitespace.WhitespaceNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){
var v__$1 = this;
return v__$1;
});

rewrite_clj.node.token.TokenNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL;

rewrite_clj.node.token.TokenNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){
var v__$1 = this;
return v__$1;
});

rewrite_clj.node.meta.MetaNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL;

rewrite_clj.node.meta.MetaNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){
var v__$1 = this;
return v__$1;
});

rewrite_clj.node.reader_macro.DerefNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL;

rewrite_clj.node.reader_macro.DerefNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){
var v__$1 = this;
return v__$1;
});

rewrite_clj.node.stringz.StringNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL;

rewrite_clj.node.stringz.StringNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){
var v__$1 = this;
return v__$1;
});

rewrite_clj.node.keyword.KeywordNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL;

rewrite_clj.node.keyword.KeywordNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){
var v__$1 = this;
return v__$1;
});

rewrite_clj.node.whitespace.NewlineNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL;

rewrite_clj.node.whitespace.NewlineNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){
var v__$1 = this;
return v__$1;
});

rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL;

rewrite_clj.node.reader_macro.ReaderMacroNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){
var v__$1 = this;
return v__$1;
});

rewrite_clj.node.forms.FormsNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL;

rewrite_clj.node.forms.FormsNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){
var v__$1 = this;
return v__$1;
});

rewrite_clj.node.comment.CommentNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL;

rewrite_clj.node.comment.CommentNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){
var v__$1 = this;
return v__$1;
});

rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL;

rewrite_clj.node.seq.SeqNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){
var v__$1 = this;
return v__$1;
});

rewrite_clj.node.quote.QuoteNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL;

rewrite_clj.node.quote.QuoteNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){
var v__$1 = this;
return v__$1;
});

rewrite_clj.node.reader_macro.ReaderNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL;

rewrite_clj.node.reader_macro.ReaderNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){
var v__$1 = this;
return v__$1;
});

rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$ = cljs.core.PROTOCOL_SENTINEL;

rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 = (function (v){
var v__$1 = this;
return v__$1;
});

//# sourceMappingURL=rewrite_clj.node.coercer.js.map
