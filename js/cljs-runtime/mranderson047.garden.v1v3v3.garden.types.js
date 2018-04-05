goog.provide('mranderson047.garden.v1v3v3.garden.types');
goog.require('cljs.core');

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
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
mranderson047.garden.v1v3v3.garden.types.CSSUnit = (function (unit,magnitude,__meta,__extmap,__hash){
this.unit = unit;
this.magnitude = magnitude;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
mranderson047.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11972__auto__,k__11973__auto__){
var self__ = this;
var this__11972__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__11972__auto____$1,k__11973__auto__,null);
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11974__auto__,k24742,else__11975__auto__){
var self__ = this;
var this__11974__auto____$1 = this;
var G__24750 = k24742;
var G__24750__$1 = (((G__24750 instanceof cljs.core.Keyword))?G__24750.fqn:null);
switch (G__24750__$1) {
case "unit":
return self__.unit;

break;
case "magnitude":
return self__.magnitude;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24742,else__11975__auto__);

}
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11986__auto__,writer__11987__auto__,opts__11988__auto__){
var self__ = this;
var this__11986__auto____$1 = this;
var pr_pair__11989__auto__ = ((function (this__11986__auto____$1){
return (function (keyval__11990__auto__){
return cljs.core.pr_sequential_writer(writer__11987__auto__,cljs.core.pr_writer,""," ","",opts__11988__auto__,keyval__11990__auto__);
});})(this__11986__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__11987__auto__,pr_pair__11989__auto__,"#mranderson047.garden.v1v3v3.garden.types.CSSUnit{",", ","}",opts__11988__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unit","unit",375175175),self__.unit],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),self__.magnitude],null))], null),self__.__extmap));
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24741){
var self__ = this;
var G__24741__$1 = this;
return (new cljs.core.RecordIter((0),G__24741__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword(null,"magnitude","magnitude",1924274222)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11970__auto__){
var self__ = this;
var this__11970__auto____$1 = this;
return self__.__meta;
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11967__auto__){
var self__ = this;
var this__11967__auto____$1 = this;
return (new mranderson047.garden.v1v3v3.garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,self__.__extmap,self__.__hash));
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11976__auto__){
var self__ = this;
var this__11976__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11968__auto__){
var self__ = this;
var this__11968__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = (function (){var fexpr__24791 = ((function (h__4030__auto__,this__11968__auto____$1){
return (function (coll__11969__auto__){
return (671341226 ^ cljs.core.hash_unordered_coll(coll__11969__auto__));
});})(h__4030__auto__,this__11968__auto____$1))
;
return fexpr__24791(this__11968__auto____$1);
})();
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24743,other24744){
var self__ = this;
var this24743__$1 = this;
return ((!((other24744 == null))) && ((this24743__$1.constructor === other24744.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24743__$1.unit,other24744.unit)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24743__$1.magnitude,other24744.magnitude)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24743__$1.__extmap,other24744.__extmap)));
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11981__auto__,k__11982__auto__){
var self__ = this;
var this__11981__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unit","unit",375175175),null,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),null], null), null),k__11982__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__11981__auto____$1),self__.__meta),k__11982__auto__);
} else {
return (new mranderson047.garden.v1v3v3.garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__11982__auto__)),null));
}
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11979__auto__,k__11980__auto__,G__24741){
var self__ = this;
var this__11979__auto____$1 = this;
var pred__24807 = cljs.core.keyword_identical_QMARK_;
var expr__24808 = k__11980__auto__;
if(cljs.core.truth_((function (){var G__24812 = new cljs.core.Keyword(null,"unit","unit",375175175);
var G__24813 = expr__24808;
return (pred__24807.cljs$core$IFn$_invoke$arity$2 ? pred__24807.cljs$core$IFn$_invoke$arity$2(G__24812,G__24813) : pred__24807.call(null,G__24812,G__24813));
})())){
return (new mranderson047.garden.v1v3v3.garden.types.CSSUnit(G__24741,self__.magnitude,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24816 = new cljs.core.Keyword(null,"magnitude","magnitude",1924274222);
var G__24817 = expr__24808;
return (pred__24807.cljs$core$IFn$_invoke$arity$2 ? pred__24807.cljs$core$IFn$_invoke$arity$2(G__24816,G__24817) : pred__24807.call(null,G__24816,G__24817));
})())){
return (new mranderson047.garden.v1v3v3.garden.types.CSSUnit(self__.unit,G__24741,self__.__meta,self__.__extmap,null));
} else {
return (new mranderson047.garden.v1v3v3.garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11980__auto__,G__24741),null));
}
}
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11984__auto__){
var self__ = this;
var this__11984__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unit","unit",375175175),self__.unit],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),self__.magnitude],null))], null),self__.__extmap));
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11971__auto__,G__24741){
var self__ = this;
var this__11971__auto____$1 = this;
return (new mranderson047.garden.v1v3v3.garden.types.CSSUnit(self__.unit,self__.magnitude,G__24741,self__.__extmap,self__.__hash));
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11977__auto__,entry__11978__auto__){
var self__ = this;
var this__11977__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__11978__auto__)){
return cljs.core._assoc(this__11977__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11978__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11978__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__11977__auto____$1,entry__11978__auto__);
}
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"unit","unit",2015706702,null),new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null)], null);
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.cljs$lang$type = true;

mranderson047.garden.v1v3v3.garden.types.CSSUnit.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"mranderson047.garden.v1v3v3.garden.types/CSSUnit",null,(1),null));
});

mranderson047.garden.v1v3v3.garden.types.CSSUnit.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write(writer__4209__auto__,"mranderson047.garden.v1v3v3.garden.types/CSSUnit");
});

/**
 * Positional factory function for mranderson047.garden.v1v3v3.garden.types/CSSUnit.
 */
mranderson047.garden.v1v3v3.garden.types.__GT_CSSUnit = (function mranderson047$garden$v1v3v3$garden$types$__GT_CSSUnit(unit,magnitude){
return (new mranderson047.garden.v1v3v3.garden.types.CSSUnit(unit,magnitude,null,null,null));
});

/**
 * Factory function for mranderson047.garden.v1v3v3.garden.types/CSSUnit, taking a map of keywords to field values.
 */
mranderson047.garden.v1v3v3.garden.types.map__GT_CSSUnit = (function mranderson047$garden$v1v3v3$garden$types$map__GT_CSSUnit(G__24746){
return (new mranderson047.garden.v1v3v3.garden.types.CSSUnit(new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(G__24746),new cljs.core.Keyword(null,"magnitude","magnitude",1924274222).cljs$core$IFn$_invoke$arity$1(G__24746),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24746,new cljs.core.Keyword(null,"unit","unit",375175175),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"magnitude","magnitude",1924274222)], 0))),null));
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
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
mranderson047.garden.v1v3v3.garden.types.CSSFunction = (function (function$,args,__meta,__extmap,__hash){
this.function$ = function$;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11972__auto__,k__11973__auto__){
var self__ = this;
var this__11972__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__11972__auto____$1,k__11973__auto__,null);
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11974__auto__,k24871,else__11975__auto__){
var self__ = this;
var this__11974__auto____$1 = this;
var G__24882 = k24871;
var G__24882__$1 = (((G__24882 instanceof cljs.core.Keyword))?G__24882.fqn:null);
switch (G__24882__$1) {
case "function":
return self__.function$;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24871,else__11975__auto__);

}
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11986__auto__,writer__11987__auto__,opts__11988__auto__){
var self__ = this;
var this__11986__auto____$1 = this;
var pr_pair__11989__auto__ = ((function (this__11986__auto____$1){
return (function (keyval__11990__auto__){
return cljs.core.pr_sequential_writer(writer__11987__auto__,cljs.core.pr_writer,""," ","",opts__11988__auto__,keyval__11990__auto__);
});})(this__11986__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__11987__auto__,pr_pair__11989__auto__,"#mranderson047.garden.v1v3v3.garden.types.CSSFunction{",", ","}",opts__11988__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"function","function",-2127255473),self__.function$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24870){
var self__ = this;
var G__24870__$1 = this;
return (new cljs.core.RecordIter((0),G__24870__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"function","function",-2127255473),new cljs.core.Keyword(null,"args","args",1315556576)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11970__auto__){
var self__ = this;
var this__11970__auto____$1 = this;
return self__.__meta;
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11967__auto__){
var self__ = this;
var this__11967__auto____$1 = this;
return (new mranderson047.garden.v1v3v3.garden.types.CSSFunction(self__.function$,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11976__auto__){
var self__ = this;
var this__11976__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11968__auto__){
var self__ = this;
var this__11968__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = (function (){var fexpr__24902 = ((function (h__4030__auto__,this__11968__auto____$1){
return (function (coll__11969__auto__){
return (-830866841 ^ cljs.core.hash_unordered_coll(coll__11969__auto__));
});})(h__4030__auto__,this__11968__auto____$1))
;
return fexpr__24902(this__11968__auto____$1);
})();
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24872,other24873){
var self__ = this;
var this24872__$1 = this;
return ((!((other24873 == null))) && ((this24872__$1.constructor === other24873.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24872__$1.function,other24873.function)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24872__$1.args,other24873.args)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24872__$1.__extmap,other24873.__extmap)));
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11981__auto__,k__11982__auto__){
var self__ = this;
var this__11981__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"function","function",-2127255473),null], null), null),k__11982__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__11981__auto____$1),self__.__meta),k__11982__auto__);
} else {
return (new mranderson047.garden.v1v3v3.garden.types.CSSFunction(self__.function$,self__.args,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__11982__auto__)),null));
}
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11979__auto__,k__11980__auto__,G__24870){
var self__ = this;
var this__11979__auto____$1 = this;
var pred__24903 = cljs.core.keyword_identical_QMARK_;
var expr__24904 = k__11980__auto__;
if(cljs.core.truth_((function (){var G__24906 = new cljs.core.Keyword(null,"function","function",-2127255473);
var G__24907 = expr__24904;
return (pred__24903.cljs$core$IFn$_invoke$arity$2 ? pred__24903.cljs$core$IFn$_invoke$arity$2(G__24906,G__24907) : pred__24903.call(null,G__24906,G__24907));
})())){
return (new mranderson047.garden.v1v3v3.garden.types.CSSFunction(G__24870,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24908 = new cljs.core.Keyword(null,"args","args",1315556576);
var G__24909 = expr__24904;
return (pred__24903.cljs$core$IFn$_invoke$arity$2 ? pred__24903.cljs$core$IFn$_invoke$arity$2(G__24908,G__24909) : pred__24903.call(null,G__24908,G__24909));
})())){
return (new mranderson047.garden.v1v3v3.garden.types.CSSFunction(self__.function$,G__24870,self__.__meta,self__.__extmap,null));
} else {
return (new mranderson047.garden.v1v3v3.garden.types.CSSFunction(self__.function$,self__.args,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11980__auto__,G__24870),null));
}
}
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11984__auto__){
var self__ = this;
var this__11984__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"function","function",-2127255473),self__.function$],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11971__auto__,G__24870){
var self__ = this;
var this__11971__auto____$1 = this;
return (new mranderson047.garden.v1v3v3.garden.types.CSSFunction(self__.function$,self__.args,G__24870,self__.__extmap,self__.__hash));
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11977__auto__,entry__11978__auto__){
var self__ = this;
var this__11977__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__11978__auto__)){
return cljs.core._assoc(this__11977__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11978__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11978__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__11977__auto____$1,entry__11978__auto__);
}
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"function","function",-486723946,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.cljs$lang$type = true;

mranderson047.garden.v1v3v3.garden.types.CSSFunction.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"mranderson047.garden.v1v3v3.garden.types/CSSFunction",null,(1),null));
});

mranderson047.garden.v1v3v3.garden.types.CSSFunction.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write(writer__4209__auto__,"mranderson047.garden.v1v3v3.garden.types/CSSFunction");
});

/**
 * Positional factory function for mranderson047.garden.v1v3v3.garden.types/CSSFunction.
 */
mranderson047.garden.v1v3v3.garden.types.__GT_CSSFunction = (function mranderson047$garden$v1v3v3$garden$types$__GT_CSSFunction(function$,args){
return (new mranderson047.garden.v1v3v3.garden.types.CSSFunction(function$,args,null,null,null));
});

/**
 * Factory function for mranderson047.garden.v1v3v3.garden.types/CSSFunction, taking a map of keywords to field values.
 */
mranderson047.garden.v1v3v3.garden.types.map__GT_CSSFunction = (function mranderson047$garden$v1v3v3$garden$types$map__GT_CSSFunction(G__24876){
return (new mranderson047.garden.v1v3v3.garden.types.CSSFunction(new cljs.core.Keyword(null,"function","function",-2127255473).cljs$core$IFn$_invoke$arity$1(G__24876),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__24876),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24876,new cljs.core.Keyword(null,"function","function",-2127255473),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"args","args",1315556576)], 0))),null));
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
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
mranderson047.garden.v1v3v3.garden.types.CSSAtRule = (function (identifier,value,__meta,__extmap,__hash){
this.identifier = identifier;
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11972__auto__,k__11973__auto__){
var self__ = this;
var this__11972__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__11972__auto____$1,k__11973__auto__,null);
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11974__auto__,k24970,else__11975__auto__){
var self__ = this;
var this__11974__auto____$1 = this;
var G__24979 = k24970;
var G__24979__$1 = (((G__24979 instanceof cljs.core.Keyword))?G__24979.fqn:null);
switch (G__24979__$1) {
case "identifier":
return self__.identifier;

break;
case "value":
return self__.value;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24970,else__11975__auto__);

}
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11986__auto__,writer__11987__auto__,opts__11988__auto__){
var self__ = this;
var this__11986__auto____$1 = this;
var pr_pair__11989__auto__ = ((function (this__11986__auto____$1){
return (function (keyval__11990__auto__){
return cljs.core.pr_sequential_writer(writer__11987__auto__,cljs.core.pr_writer,""," ","",opts__11988__auto__,keyval__11990__auto__);
});})(this__11986__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__11987__auto__,pr_pair__11989__auto__,"#mranderson047.garden.v1v3v3.garden.types.CSSAtRule{",", ","}",opts__11988__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"identifier","identifier",-805503498),self__.identifier],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24969){
var self__ = this;
var G__24969__$1 = this;
return (new cljs.core.RecordIter((0),G__24969__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11970__auto__){
var self__ = this;
var this__11970__auto____$1 = this;
return self__.__meta;
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11967__auto__){
var self__ = this;
var this__11967__auto____$1 = this;
return (new mranderson047.garden.v1v3v3.garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11976__auto__){
var self__ = this;
var this__11976__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11968__auto__){
var self__ = this;
var this__11968__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = (function (){var fexpr__24990 = ((function (h__4030__auto__,this__11968__auto____$1){
return (function (coll__11969__auto__){
return (845600990 ^ cljs.core.hash_unordered_coll(coll__11969__auto__));
});})(h__4030__auto__,this__11968__auto____$1))
;
return fexpr__24990(this__11968__auto____$1);
})();
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24971,other24972){
var self__ = this;
var this24971__$1 = this;
return ((!((other24972 == null))) && ((this24971__$1.constructor === other24972.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24971__$1.identifier,other24972.identifier)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24971__$1.value,other24972.value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24971__$1.__extmap,other24972.__extmap)));
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11981__auto__,k__11982__auto__){
var self__ = this;
var this__11981__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"identifier","identifier",-805503498),null], null), null),k__11982__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__11981__auto____$1),self__.__meta),k__11982__auto__);
} else {
return (new mranderson047.garden.v1v3v3.garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__11982__auto__)),null));
}
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11979__auto__,k__11980__auto__,G__24969){
var self__ = this;
var this__11979__auto____$1 = this;
var pred__25002 = cljs.core.keyword_identical_QMARK_;
var expr__25003 = k__11980__auto__;
if(cljs.core.truth_((function (){var G__25005 = new cljs.core.Keyword(null,"identifier","identifier",-805503498);
var G__25006 = expr__25003;
return (pred__25002.cljs$core$IFn$_invoke$arity$2 ? pred__25002.cljs$core$IFn$_invoke$arity$2(G__25005,G__25006) : pred__25002.call(null,G__25005,G__25006));
})())){
return (new mranderson047.garden.v1v3v3.garden.types.CSSAtRule(G__24969,self__.value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25007 = new cljs.core.Keyword(null,"value","value",305978217);
var G__25008 = expr__25003;
return (pred__25002.cljs$core$IFn$_invoke$arity$2 ? pred__25002.cljs$core$IFn$_invoke$arity$2(G__25007,G__25008) : pred__25002.call(null,G__25007,G__25008));
})())){
return (new mranderson047.garden.v1v3v3.garden.types.CSSAtRule(self__.identifier,G__24969,self__.__meta,self__.__extmap,null));
} else {
return (new mranderson047.garden.v1v3v3.garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11980__auto__,G__24969),null));
}
}
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11984__auto__){
var self__ = this;
var this__11984__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"identifier","identifier",-805503498),self__.identifier],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11971__auto__,G__24969){
var self__ = this;
var this__11971__auto____$1 = this;
return (new mranderson047.garden.v1v3v3.garden.types.CSSAtRule(self__.identifier,self__.value,G__24969,self__.__extmap,self__.__hash));
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11977__auto__,entry__11978__auto__){
var self__ = this;
var this__11977__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__11978__auto__)){
return cljs.core._assoc(this__11977__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11978__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11978__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__11977__auto____$1,entry__11978__auto__);
}
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"identifier","identifier",835028029,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.cljs$lang$type = true;

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"mranderson047.garden.v1v3v3.garden.types/CSSAtRule",null,(1),null));
});

mranderson047.garden.v1v3v3.garden.types.CSSAtRule.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write(writer__4209__auto__,"mranderson047.garden.v1v3v3.garden.types/CSSAtRule");
});

/**
 * Positional factory function for mranderson047.garden.v1v3v3.garden.types/CSSAtRule.
 */
mranderson047.garden.v1v3v3.garden.types.__GT_CSSAtRule = (function mranderson047$garden$v1v3v3$garden$types$__GT_CSSAtRule(identifier,value){
return (new mranderson047.garden.v1v3v3.garden.types.CSSAtRule(identifier,value,null,null,null));
});

/**
 * Factory function for mranderson047.garden.v1v3v3.garden.types/CSSAtRule, taking a map of keywords to field values.
 */
mranderson047.garden.v1v3v3.garden.types.map__GT_CSSAtRule = (function mranderson047$garden$v1v3v3$garden$types$map__GT_CSSAtRule(G__24975){
return (new mranderson047.garden.v1v3v3.garden.types.CSSAtRule(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(G__24975),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__24975),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24975,new cljs.core.Keyword(null,"identifier","identifier",-805503498),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"value","value",305978217)], 0))),null));
});


//# sourceMappingURL=mranderson047.garden.v1v3v3.garden.types.js.map
