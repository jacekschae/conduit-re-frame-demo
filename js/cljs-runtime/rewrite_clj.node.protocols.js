goog.provide('rewrite_clj.node.protocols');
goog.require('cljs.core');
goog.require('clojure.string');

/**
 * Protocol for EDN/Clojure nodes.
 * @interface
 */
rewrite_clj.node.protocols.Node = function(){};

/**
 * Keyword representing the type of the node.
 */
rewrite_clj.node.protocols.tag = (function rewrite_clj$node$protocols$tag(_){
if(((!((_ == null))) && (!((_.rewrite_clj$node$protocols$Node$tag$arity$1 == null))))){
return _.rewrite_clj$node$protocols$Node$tag$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (rewrite_clj.node.protocols.tag[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4212__auto__.call(null,_));
} else {
var m__4212__auto____$1 = (rewrite_clj.node.protocols.tag["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__4212__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Node.tag",_);
}
}
}
});

/**
 * Return true if the node cannot be converted to an s-expression
 *   element.
 */
rewrite_clj.node.protocols.printable_only_QMARK_ = (function rewrite_clj$node$protocols$printable_only_QMARK_(_){
if(((!((_ == null))) && (!((_.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 == null))))){
return _.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (rewrite_clj.node.protocols.printable_only_QMARK_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4212__auto__.call(null,_));
} else {
var m__4212__auto____$1 = (rewrite_clj.node.protocols.printable_only_QMARK_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__4212__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Node.printable-only?",_);
}
}
}
});

/**
 * Convert node to s-expression.
 */
rewrite_clj.node.protocols.sexpr = (function rewrite_clj$node$protocols$sexpr(_){
if(((!((_ == null))) && (!((_.rewrite_clj$node$protocols$Node$sexpr$arity$1 == null))))){
return _.rewrite_clj$node$protocols$Node$sexpr$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (rewrite_clj.node.protocols.sexpr[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4212__auto__.call(null,_));
} else {
var m__4212__auto____$1 = (rewrite_clj.node.protocols.sexpr["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__4212__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Node.sexpr",_);
}
}
}
});

/**
 * Get number of characters for the string version of this node.
 */
rewrite_clj.node.protocols.length = (function rewrite_clj$node$protocols$length(_){
if(((!((_ == null))) && (!((_.rewrite_clj$node$protocols$Node$length$arity$1 == null))))){
return _.rewrite_clj$node$protocols$Node$length$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (rewrite_clj.node.protocols.length[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4212__auto__.call(null,_));
} else {
var m__4212__auto____$1 = (rewrite_clj.node.protocols.length["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__4212__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Node.length",_);
}
}
}
});

/**
 * Convert node to printable string.
 */
rewrite_clj.node.protocols.string = (function rewrite_clj$node$protocols$string(_){
if(((!((_ == null))) && (!((_.rewrite_clj$node$protocols$Node$string$arity$1 == null))))){
return _.rewrite_clj$node$protocols$Node$string$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (rewrite_clj.node.protocols.string[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4212__auto__.call(null,_));
} else {
var m__4212__auto____$1 = (rewrite_clj.node.protocols.string["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__4212__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Node.string",_);
}
}
}
});

goog.object.set(rewrite_clj.node.protocols.Node,"object",true);

var G__27997_28012 = rewrite_clj.node.protocols.tag;
var G__27998_28013 = "object";
var G__27999_28014 = ((function (G__27997_28012,G__27998_28013){
return (function (_){
return new cljs.core.Keyword(null,"unknown","unknown",-935977881);
});})(G__27997_28012,G__27998_28013))
;
goog.object.set(G__27997_28012,G__27998_28013,G__27999_28014);

var G__28000_28015 = rewrite_clj.node.protocols.printable_only_QMARK_;
var G__28001_28016 = "object";
var G__28002_28017 = ((function (G__28000_28015,G__28001_28016){
return (function (_){
return false;
});})(G__28000_28015,G__28001_28016))
;
goog.object.set(G__28000_28015,G__28001_28016,G__28002_28017);

var G__28003_28018 = rewrite_clj.node.protocols.sexpr;
var G__28004_28019 = "object";
var G__28005_28020 = ((function (G__28003_28018,G__28004_28019){
return (function (this$){
return this$;
});})(G__28003_28018,G__28004_28019))
;
goog.object.set(G__28003_28018,G__28004_28019,G__28005_28020);

var G__28006_28021 = rewrite_clj.node.protocols.length;
var G__28007_28022 = "object";
var G__28008_28023 = ((function (G__28006_28021,G__28007_28022){
return (function (this$){
return cljs.core.count(rewrite_clj.node.protocols.string(this$));
});})(G__28006_28021,G__28007_28022))
;
goog.object.set(G__28006_28021,G__28007_28022,G__28008_28023);

var G__28009_28024 = rewrite_clj.node.protocols.string;
var G__28010_28025 = "object";
var G__28011_28026 = ((function (G__28009_28024,G__28010_28025){
return (function (this$){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0));
});})(G__28009_28024,G__28010_28025))
;
goog.object.set(G__28009_28024,G__28010_28025,G__28011_28026);
/**
 * Given a seq of nodes, convert those that represent s-expressions
 * to the respective forms.
 */
rewrite_clj.node.protocols.sexprs = (function rewrite_clj$node$protocols$sexprs(nodes){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(rewrite_clj.node.protocols.sexpr,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(rewrite_clj.node.protocols.printable_only_QMARK_,nodes));
});
/**
 * Sum up lengths of the given nodes.
 */
rewrite_clj.node.protocols.sum_lengths = (function rewrite_clj$node$protocols$sum_lengths(nodes){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(rewrite_clj.node.protocols.length,nodes));
});
/**
 * Convert nodes to strings and concatenate them.
 */
rewrite_clj.node.protocols.concat_strings = (function rewrite_clj$node$protocols$concat_strings(nodes){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(rewrite_clj.node.protocols.string,nodes));
});

/**
 * Protocol for non-leaf EDN/Clojure nodes.
 * @interface
 */
rewrite_clj.node.protocols.InnerNode = function(){};

/**
 * Check whether the node can contain children.
 */
rewrite_clj.node.protocols.inner_QMARK_ = (function rewrite_clj$node$protocols$inner_QMARK_(_){
if(((!((_ == null))) && (!((_.rewrite_clj$node$protocols$InnerNode$inner_QMARK_$arity$1 == null))))){
return _.rewrite_clj$node$protocols$InnerNode$inner_QMARK_$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (rewrite_clj.node.protocols.inner_QMARK_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4212__auto__.call(null,_));
} else {
var m__4212__auto____$1 = (rewrite_clj.node.protocols.inner_QMARK_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__4212__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("InnerNode.inner?",_);
}
}
}
});

/**
 * Get child nodes.
 */
rewrite_clj.node.protocols.children = (function rewrite_clj$node$protocols$children(_){
if(((!((_ == null))) && (!((_.rewrite_clj$node$protocols$InnerNode$children$arity$1 == null))))){
return _.rewrite_clj$node$protocols$InnerNode$children$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (rewrite_clj.node.protocols.children[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4212__auto__.call(null,_));
} else {
var m__4212__auto____$1 = (rewrite_clj.node.protocols.children["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__4212__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("InnerNode.children",_);
}
}
}
});

/**
 * Replace the node's children.
 */
rewrite_clj.node.protocols.replace_children = (function rewrite_clj$node$protocols$replace_children(_,children){
if(((!((_ == null))) && (!((_.rewrite_clj$node$protocols$InnerNode$replace_children$arity$2 == null))))){
return _.rewrite_clj$node$protocols$InnerNode$replace_children$arity$2(_,children);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (rewrite_clj.node.protocols.replace_children[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$2(_,children) : m__4212__auto__.call(null,_,children));
} else {
var m__4212__auto____$1 = (rewrite_clj.node.protocols.replace_children["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$2(_,children) : m__4212__auto____$1.call(null,_,children));
} else {
throw cljs.core.missing_protocol("InnerNode.replace-children",_);
}
}
}
});

goog.object.set(rewrite_clj.node.protocols.InnerNode,"object",true);

var G__28035_28047 = rewrite_clj.node.protocols.inner_QMARK_;
var G__28036_28048 = "object";
var G__28037_28049 = ((function (G__28035_28047,G__28036_28048){
return (function (_){
return false;
});})(G__28035_28047,G__28036_28048))
;
goog.object.set(G__28035_28047,G__28036_28048,G__28037_28049);

var G__28039_28051 = rewrite_clj.node.protocols.children;
var G__28040_28052 = "object";
var G__28041_28053 = ((function (G__28039_28051,G__28040_28052){
return (function (_){
throw (new Error("UnsupportedOperationException"));
});})(G__28039_28051,G__28040_28052))
;
goog.object.set(G__28039_28051,G__28040_28052,G__28041_28053);

var G__28042_28054 = rewrite_clj.node.protocols.replace_children;
var G__28043_28055 = "object";
var G__28044_28056 = ((function (G__28042_28054,G__28043_28055){
return (function (_,___$1){
throw (new Error("UnsupportedOperationException"));
});})(G__28042_28054,G__28043_28055))
;
goog.object.set(G__28042_28054,G__28043_28055,G__28044_28056);
/**
 * Get all child s-expressions for the given node.
 */
rewrite_clj.node.protocols.child_sexprs = (function rewrite_clj$node$protocols$child_sexprs(node){
if(cljs.core.truth_(rewrite_clj.node.protocols.inner_QMARK_(node))){
return rewrite_clj.node.protocols.sexprs(rewrite_clj.node.protocols.children(node));
} else {
return null;
}
});

/**
 * Protocol for values that can be coerced to nodes.
 * @interface
 */
rewrite_clj.node.protocols.NodeCoerceable = function(){};

rewrite_clj.node.protocols.coerce = (function rewrite_clj$node$protocols$coerce(_){
if(((!((_ == null))) && (!((_.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1 == null))))){
return _.rewrite_clj$node$protocols$NodeCoerceable$coerce$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (rewrite_clj.node.protocols.coerce[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4212__auto__.call(null,_));
} else {
var m__4212__auto____$1 = (rewrite_clj.node.protocols.coerce["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__4212__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("NodeCoerceable.coerce",_);
}
}
}
});

rewrite_clj.node.protocols.assert_sexpr_count = (function rewrite_clj$node$protocols$assert_sexpr_count(nodes,c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(rewrite_clj.node.protocols.printable_only_QMARK_,nodes)),c)){
return null;
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["can only contain",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)," non-whitespace form(s)."].join('')),"\n","(= (count (remove printable-only? nodes)) c)"].join('')));
}
});
rewrite_clj.node.protocols.assert_single_sexpr = (function rewrite_clj$node$protocols$assert_single_sexpr(nodes){
return rewrite_clj.node.protocols.assert_sexpr_count(nodes,(1));
});

//# sourceMappingURL=rewrite_clj.node.protocols.js.map
