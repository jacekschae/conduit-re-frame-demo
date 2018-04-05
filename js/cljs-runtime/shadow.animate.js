goog.provide('shadow.animate');
goog.require('cljs.core');
goog.require('shadow.dom');
goog.require('shadow.object');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('goog.dom.vendor');
goog.require('goog.style');
goog.require('shadow.util');

/**
 * @interface
 */
shadow.animate.Animation = function(){};

/**
 * return a map of {attr initial-value}
 */
shadow.animate._animate_from = (function shadow$animate$_animate_from(this$){
if(((!((this$ == null))) && (!((this$.shadow$animate$Animation$_animate_from$arity$1 == null))))){
return this$.shadow$animate$Animation$_animate_from$arity$1(this$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (shadow.animate._animate_from[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto__.call(null,this$));
} else {
var m__4212__auto____$1 = (shadow.animate._animate_from["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-from",this$);
}
}
}
});

/**
 * return a map of {attr target-value}
 */
shadow.animate._animate_to = (function shadow$animate$_animate_to(this$){
if(((!((this$ == null))) && (!((this$.shadow$animate$Animation$_animate_to$arity$1 == null))))){
return this$.shadow$animate$Animation$_animate_to$arity$1(this$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (shadow.animate._animate_to[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto__.call(null,this$));
} else {
var m__4212__auto____$1 = (shadow.animate._animate_to["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-to",this$);
}
}
}
});

/**
 * return a map of {attr target-value}
 */
shadow.animate._animate_toggles = (function shadow$animate$_animate_toggles(this$){
if(((!((this$ == null))) && (!((this$.shadow$animate$Animation$_animate_toggles$arity$1 == null))))){
return this$.shadow$animate$Animation$_animate_toggles$arity$1(this$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (shadow.animate._animate_toggles[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto__.call(null,this$));
} else {
var m__4212__auto____$1 = (shadow.animate._animate_toggles["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-toggles",this$);
}
}
}
});

/**
 * return a map of {attr timing-function}
 */
shadow.animate._animate_timings = (function shadow$animate$_animate_timings(this$){
if(((!((this$ == null))) && (!((this$.shadow$animate$Animation$_animate_timings$arity$1 == null))))){
return this$.shadow$animate$Animation$_animate_timings$arity$1(this$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (shadow.animate._animate_timings[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto__.call(null,this$));
} else {
var m__4212__auto____$1 = (shadow.animate._animate_timings["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-timings",this$);
}
}
}
});

/**
 * return a map of {attr transition-delay}
 */
shadow.animate._animate_delays = (function shadow$animate$_animate_delays(this$){
if(((!((this$ == null))) && (!((this$.shadow$animate$Animation$_animate_delays$arity$1 == null))))){
return this$.shadow$animate$Animation$_animate_delays$arity$1(this$);
} else {
var x__4211__auto__ = (((this$ == null))?null:this$);
var m__4212__auto__ = (shadow.animate._animate_delays[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto__.call(null,this$));
} else {
var m__4212__auto____$1 = (shadow.animate._animate_delays["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__4212__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-delays",this$);
}
}
}
});

shadow.animate.transition_string = (function shadow$animate$transition_string(duration,adef){
var timings = shadow.animate._animate_timings(adef);
var delays = shadow.animate._animate_delays(adef);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (timings,delays){
return (function (p__33303){
var vec__33304 = p__33303;
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33304,(0),null);
var timing = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33304,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(attr))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(duration),"ms"," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(timing),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(delays,attr);
if(cljs.core.truth_((function (){var and__3911__auto__ = delay;
if(cljs.core.truth_(and__3911__auto__)){
return (delay > (0));
} else {
return and__3911__auto__;
}
})())){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(delay),"ms"].join('');
} else {
return null;
}
})())].join('');
});})(timings,delays))
,timings));
});

/**
 * @interface
 */
shadow.animate.IAnimator = function(){};

shadow.animate.get_duration = (function shadow$animate$get_duration(animator){
if(((!((animator == null))) && (!((animator.shadow$animate$IAnimator$get_duration$arity$1 == null))))){
return animator.shadow$animate$IAnimator$get_duration$arity$1(animator);
} else {
var x__4211__auto__ = (((animator == null))?null:animator);
var m__4212__auto__ = (shadow.animate.get_duration[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4212__auto__.call(null,animator));
} else {
var m__4212__auto____$1 = (shadow.animate.get_duration["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(animator) : m__4212__auto____$1.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.get-duration",animator);
}
}
}
});

/**
 * apply the initial values
 */
shadow.animate.init_BANG_ = (function shadow$animate$init_BANG_(animator){
if(((!((animator == null))) && (!((animator.shadow$animate$IAnimator$init_BANG_$arity$1 == null))))){
return animator.shadow$animate$IAnimator$init_BANG_$arity$1(animator);
} else {
var x__4211__auto__ = (((animator == null))?null:animator);
var m__4212__auto__ = (shadow.animate.init_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4212__auto__.call(null,animator));
} else {
var m__4212__auto____$1 = (shadow.animate.init_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(animator) : m__4212__auto____$1.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.init!",animator);
}
}
}
});

/**
 * start the animation, must return a channel that closes once the animation is done
 */
shadow.animate.start_BANG_ = (function shadow$animate$start_BANG_(animator){
if(((!((animator == null))) && (!((animator.shadow$animate$IAnimator$start_BANG_$arity$1 == null))))){
return animator.shadow$animate$IAnimator$start_BANG_$arity$1(animator);
} else {
var x__4211__auto__ = (((animator == null))?null:animator);
var m__4212__auto__ = (shadow.animate.start_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4212__auto__.call(null,animator));
} else {
var m__4212__auto____$1 = (shadow.animate.start_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(animator) : m__4212__auto____$1.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.start!",animator);
}
}
}
});

/**
 * cleanup
 */
shadow.animate.finish_BANG_ = (function shadow$animate$finish_BANG_(animator){
if(((!((animator == null))) && (!((animator.shadow$animate$IAnimator$finish_BANG_$arity$1 == null))))){
return animator.shadow$animate$IAnimator$finish_BANG_$arity$1(animator);
} else {
var x__4211__auto__ = (((animator == null))?null:animator);
var m__4212__auto__ = (shadow.animate.finish_BANG_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4212__auto__.call(null,animator));
} else {
var m__4212__auto____$1 = (shadow.animate.finish_BANG_["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(animator) : m__4212__auto____$1.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.finish!",animator);
}
}
}
});


/**
* @constructor
 * @implements {shadow.animate.IAnimator}
*/
shadow.animate.Animator = (function (duration,items){
this.duration = duration;
this.items = items;
});
shadow.animate.Animator.prototype.shadow$animate$IAnimator$ = cljs.core.PROTOCOL_SENTINEL;

shadow.animate.Animator.prototype.shadow$animate$IAnimator$get_duration$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.duration;
});

shadow.animate.Animator.prototype.shadow$animate$IAnimator$init_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var n__4376__auto__ = self__.items.length;
var i__30360__auto__ = (0);
while(true){
if((i__30360__auto__ < n__4376__auto__)){
var map__33315_33329 = (self__.items[i__30360__auto__]);
var map__33315_33330__$1 = ((((!((map__33315_33329 == null)))?(((((map__33315_33329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33315_33329.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33315_33329):map__33315_33329);
var el_33331 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33315_33330__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var from_33332 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33315_33330__$1,new cljs.core.Keyword(null,"from","from",1815293044));
goog.style.setStyle(el_33331,from_33332);

var G__33333 = (i__30360__auto__ + (1));
i__30360__auto__ = G__33333;
continue;
} else {
return null;
}
break;
}
});

shadow.animate.Animator.prototype.shadow$animate$IAnimator$start_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var n__4376__auto__ = self__.items.length;
var i__30360__auto__ = (0);
while(true){
if((i__30360__auto__ < n__4376__auto__)){
var map__33321_33334 = (self__.items[i__30360__auto__]);
var map__33321_33335__$1 = ((((!((map__33321_33334 == null)))?(((((map__33321_33334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33321_33334.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33321_33334):map__33321_33334);
var el_33336 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33321_33335__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var to_33337 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33321_33335__$1,new cljs.core.Keyword(null,"to","to",192099007));
var transition_33338 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33321_33335__$1,new cljs.core.Keyword(null,"transition","transition",765692007));
(to_33337["transition"] = transition_33338);

goog.style.setStyle(el_33336,to_33337);

var G__33340 = (i__30360__auto__ + (1));
i__30360__auto__ = G__33340;
continue;
} else {
return null;
}
break;
}
});

shadow.animate.Animator.prototype.shadow$animate$IAnimator$finish_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var n__4376__auto__ = self__.items.length;
var i__30360__auto__ = (0);
while(true){
if((i__30360__auto__ < n__4376__auto__)){
var map__33325_33342 = (self__.items[i__30360__auto__]);
var map__33325_33343__$1 = ((((!((map__33325_33342 == null)))?(((((map__33325_33342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33325_33342.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33325_33342):map__33325_33342);
var el_33344 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33325_33343__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var toggles_33345 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33325_33343__$1,new cljs.core.Keyword(null,"toggles","toggles",1077909479));
(toggles_33345["transition"] = null);

goog.style.setStyle(el_33344,toggles_33345);

var G__33347 = (i__30360__auto__ + (1));
i__30360__auto__ = G__33347;
continue;
} else {
return null;
}
break;
}
});

shadow.animate.Animator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"duration","duration",-1210334701,null),new cljs.core.Symbol(null,"items","items",-1622480831,null)], null);
});

shadow.animate.Animator.cljs$lang$type = true;

shadow.animate.Animator.cljs$lang$ctorStr = "shadow.animate/Animator";

shadow.animate.Animator.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"shadow.animate/Animator");
});

/**
 * Positional factory function for shadow.animate/Animator.
 */
shadow.animate.__GT_Animator = (function shadow$animate$__GT_Animator(duration,items){
return (new shadow.animate.Animator(duration,items));
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
shadow.animate.AnimationStep = (function (el,from,to,toggles,transition,__meta,__extmap,__hash){
this.el = el;
this.from = from;
this.to = to;
this.toggles = toggles;
this.transition = transition;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.animate.AnimationStep.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11972__auto__,k__11973__auto__){
var self__ = this;
var this__11972__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__11972__auto____$1,k__11973__auto__,null);
});

shadow.animate.AnimationStep.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11974__auto__,k33351,else__11975__auto__){
var self__ = this;
var this__11974__auto____$1 = this;
var G__33361 = k33351;
var G__33361__$1 = (((G__33361 instanceof cljs.core.Keyword))?G__33361.fqn:null);
switch (G__33361__$1) {
case "el":
return self__.el;

break;
case "from":
return self__.from;

break;
case "to":
return self__.to;

break;
case "toggles":
return self__.toggles;

break;
case "transition":
return self__.transition;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33351,else__11975__auto__);

}
});

shadow.animate.AnimationStep.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11986__auto__,writer__11987__auto__,opts__11988__auto__){
var self__ = this;
var this__11986__auto____$1 = this;
var pr_pair__11989__auto__ = ((function (this__11986__auto____$1){
return (function (keyval__11990__auto__){
return cljs.core.pr_sequential_writer(writer__11987__auto__,cljs.core.pr_writer,""," ","",opts__11988__auto__,keyval__11990__auto__);
});})(this__11986__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__11987__auto__,pr_pair__11989__auto__,"#shadow.animate.AnimationStep{",", ","}",opts__11988__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"el","el",-1618201118),self__.el],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"from","from",1815293044),self__.from],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"to","to",192099007),self__.to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"toggles","toggles",1077909479),self__.toggles],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transition","transition",765692007),self__.transition],null))], null),self__.__extmap));
});

shadow.animate.AnimationStep.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33350){
var self__ = this;
var G__33350__$1 = this;
return (new cljs.core.RecordIter((0),G__33350__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"el","el",-1618201118),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"toggles","toggles",1077909479),new cljs.core.Keyword(null,"transition","transition",765692007)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.animate.AnimationStep.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11970__auto__){
var self__ = this;
var this__11970__auto____$1 = this;
return self__.__meta;
});

shadow.animate.AnimationStep.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11967__auto__){
var self__ = this;
var this__11967__auto____$1 = this;
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.animate.AnimationStep.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11976__auto__){
var self__ = this;
var this__11976__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

shadow.animate.AnimationStep.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11968__auto__){
var self__ = this;
var this__11968__auto____$1 = this;
var h__4030__auto__ = self__.__hash;
if(!((h__4030__auto__ == null))){
return h__4030__auto__;
} else {
var h__4030__auto____$1 = (function (){var fexpr__33367 = ((function (h__4030__auto__,this__11968__auto____$1){
return (function (coll__11969__auto__){
return (630436239 ^ cljs.core.hash_unordered_coll(coll__11969__auto__));
});})(h__4030__auto__,this__11968__auto____$1))
;
return fexpr__33367(this__11968__auto____$1);
})();
self__.__hash = h__4030__auto____$1;

return h__4030__auto____$1;
}
});

shadow.animate.AnimationStep.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33352,other33353){
var self__ = this;
var this33352__$1 = this;
return ((!((other33353 == null))) && ((this33352__$1.constructor === other33353.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33352__$1.el,other33353.el)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33352__$1.from,other33353.from)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33352__$1.to,other33353.to)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33352__$1.toggles,other33353.toggles)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33352__$1.transition,other33353.transition)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33352__$1.__extmap,other33353.__extmap)));
});

shadow.animate.AnimationStep.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11981__auto__,k__11982__auto__){
var self__ = this;
var this__11981__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"el","el",-1618201118),null,new cljs.core.Keyword(null,"transition","transition",765692007),null,new cljs.core.Keyword(null,"toggles","toggles",1077909479),null,new cljs.core.Keyword(null,"from","from",1815293044),null,new cljs.core.Keyword(null,"to","to",192099007),null], null), null),k__11982__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__11981__auto____$1),self__.__meta),k__11982__auto__);
} else {
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__11982__auto__)),null));
}
});

shadow.animate.AnimationStep.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11979__auto__,k__11980__auto__,G__33350){
var self__ = this;
var this__11979__auto____$1 = this;
var pred__33371 = cljs.core.keyword_identical_QMARK_;
var expr__33372 = k__11980__auto__;
if(cljs.core.truth_((function (){var G__33374 = new cljs.core.Keyword(null,"el","el",-1618201118);
var G__33375 = expr__33372;
return (pred__33371.cljs$core$IFn$_invoke$arity$2 ? pred__33371.cljs$core$IFn$_invoke$arity$2(G__33374,G__33375) : pred__33371.call(null,G__33374,G__33375));
})())){
return (new shadow.animate.AnimationStep(G__33350,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33376 = new cljs.core.Keyword(null,"from","from",1815293044);
var G__33377 = expr__33372;
return (pred__33371.cljs$core$IFn$_invoke$arity$2 ? pred__33371.cljs$core$IFn$_invoke$arity$2(G__33376,G__33377) : pred__33371.call(null,G__33376,G__33377));
})())){
return (new shadow.animate.AnimationStep(self__.el,G__33350,self__.to,self__.toggles,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33378 = new cljs.core.Keyword(null,"to","to",192099007);
var G__33379 = expr__33372;
return (pred__33371.cljs$core$IFn$_invoke$arity$2 ? pred__33371.cljs$core$IFn$_invoke$arity$2(G__33378,G__33379) : pred__33371.call(null,G__33378,G__33379));
})())){
return (new shadow.animate.AnimationStep(self__.el,self__.from,G__33350,self__.toggles,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33380 = new cljs.core.Keyword(null,"toggles","toggles",1077909479);
var G__33381 = expr__33372;
return (pred__33371.cljs$core$IFn$_invoke$arity$2 ? pred__33371.cljs$core$IFn$_invoke$arity$2(G__33380,G__33381) : pred__33371.call(null,G__33380,G__33381));
})())){
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,G__33350,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33382 = new cljs.core.Keyword(null,"transition","transition",765692007);
var G__33383 = expr__33372;
return (pred__33371.cljs$core$IFn$_invoke$arity$2 ? pred__33371.cljs$core$IFn$_invoke$arity$2(G__33382,G__33383) : pred__33371.call(null,G__33382,G__33383));
})())){
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,G__33350,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__11980__auto__,G__33350),null));
}
}
}
}
}
});

shadow.animate.AnimationStep.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11984__auto__){
var self__ = this;
var this__11984__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"el","el",-1618201118),self__.el],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"from","from",1815293044),self__.from],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"to","to",192099007),self__.to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"toggles","toggles",1077909479),self__.toggles],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transition","transition",765692007),self__.transition],null))], null),self__.__extmap));
});

shadow.animate.AnimationStep.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11971__auto__,G__33350){
var self__ = this;
var this__11971__auto____$1 = this;
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,G__33350,self__.__extmap,self__.__hash));
});

shadow.animate.AnimationStep.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11977__auto__,entry__11978__auto__){
var self__ = this;
var this__11977__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__11978__auto__)){
return cljs.core._assoc(this__11977__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11978__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__11978__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__11977__auto____$1,entry__11978__auto__);
}
});

shadow.animate.AnimationStep.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"el","el",22330409,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"toggles","toggles",-1576526290,null),new cljs.core.Symbol(null,"transition","transition",-1888743762,null)], null);
});

shadow.animate.AnimationStep.cljs$lang$type = true;

shadow.animate.AnimationStep.cljs$lang$ctorPrSeq = (function (this__4208__auto__){
return (new cljs.core.List(null,"shadow.animate/AnimationStep",null,(1),null));
});

shadow.animate.AnimationStep.cljs$lang$ctorPrWriter = (function (this__4208__auto__,writer__4209__auto__){
return cljs.core._write(writer__4209__auto__,"shadow.animate/AnimationStep");
});

/**
 * Positional factory function for shadow.animate/AnimationStep.
 */
shadow.animate.__GT_AnimationStep = (function shadow$animate$__GT_AnimationStep(el,from,to,toggles,transition){
return (new shadow.animate.AnimationStep(el,from,to,toggles,transition,null,null,null));
});

/**
 * Factory function for shadow.animate/AnimationStep, taking a map of keywords to field values.
 */
shadow.animate.map__GT_AnimationStep = (function shadow$animate$map__GT_AnimationStep(G__33357){
return (new shadow.animate.AnimationStep(new cljs.core.Keyword(null,"el","el",-1618201118).cljs$core$IFn$_invoke$arity$1(G__33357),new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(G__33357),new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(G__33357),new cljs.core.Keyword(null,"toggles","toggles",1077909479).cljs$core$IFn$_invoke$arity$1(G__33357),new cljs.core.Keyword(null,"transition","transition",765692007).cljs$core$IFn$_invoke$arity$1(G__33357),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33357,new cljs.core.Keyword(null,"el","el",-1618201118),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"toggles","toggles",1077909479),new cljs.core.Keyword(null,"transition","transition",765692007)], 0))),null));
});

shadow.animate.setup = (function shadow$animate$setup(duration,elements){
var items = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4292__auto__ = (function shadow$animate$setup_$_iter__33408(s__33409){
return (new cljs.core.LazySeq(null,(function (){
var s__33409__$1 = s__33409;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__33409__$1);
if(temp__5457__auto__){
var s__33409__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33409__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__33409__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__33411 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__33410 = (0);
while(true){
if((i__33410 < size__4291__auto__)){
var vec__33416 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__33410);
var el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33416,(0),null);
var adef = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33416,(1),null);
cljs.core.chunk_append(b__33411,(function (){
if(((!((adef == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === adef.shadow$animate$Animation$))))?true:(((!adef.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef):false)):cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid animation",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"el","el",-1618201118),el,new cljs.core.Keyword(null,"animation","animation",-1248293244),adef], null));
}

var from = shadow.animate._animate_from(adef);
var to = shadow.animate._animate_to(adef);
var toggles = shadow.animate._animate_toggles(adef);
return (new shadow.animate.AnimationStep(shadow.dom.dom_node(el),cljs.core.clj__GT_js(from),cljs.core.clj__GT_js(to),cljs.core.clj__GT_js(toggles),shadow.animate.transition_string(duration,adef),null,null,null));
})()
);

var G__33454 = (i__33410 + (1));
i__33410 = G__33454;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33411),shadow$animate$setup_$_iter__33408(cljs.core.chunk_rest(s__33409__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33411),null);
}
} else {
var vec__33430 = cljs.core.first(s__33409__$2);
var el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33430,(0),null);
var adef = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33430,(1),null);
return cljs.core.cons((function (){
if(((!((adef == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === adef.shadow$animate$Animation$))))?true:(((!adef.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef):false)):cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid animation",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"el","el",-1618201118),el,new cljs.core.Keyword(null,"animation","animation",-1248293244),adef], null));
}

var from = shadow.animate._animate_from(adef);
var to = shadow.animate._animate_to(adef);
var toggles = shadow.animate._animate_toggles(adef);
return (new shadow.animate.AnimationStep(shadow.dom.dom_node(el),cljs.core.clj__GT_js(from),cljs.core.clj__GT_js(to),cljs.core.clj__GT_js(toggles),shadow.animate.transition_string(duration,adef),null,null,null));
})()
,shadow$animate$setup_$_iter__33408(cljs.core.rest(s__33409__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__(elements);
})());
return (new shadow.animate.Animator(duration,items));
});
shadow.animate.continue_BANG_ = (function shadow$animate$continue_BANG_(animator){
shadow.animate.start_BANG_(animator);

var c__27055__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__27055__auto__){
return (function (){
var f__27056__auto__ = (function (){var switch__26823__auto__ = ((function (c__27055__auto__){
return (function (state_33461){
var state_val_33462 = (state_33461[(1)]);
if((state_val_33462 === (1))){
var inst_33455 = shadow.animate.get_duration(animator);
var inst_33456 = cljs.core.async.timeout(inst_33455);
var state_33461__$1 = state_33461;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33461__$1,(2),inst_33456);
} else {
if((state_val_33462 === (2))){
var inst_33458 = (state_33461[(2)]);
var inst_33459 = shadow.animate.finish_BANG_(animator);
var state_33461__$1 = (function (){var statearr_33463 = state_33461;
(statearr_33463[(7)] = inst_33459);

(statearr_33463[(8)] = inst_33458);

return statearr_33463;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33461__$1,new cljs.core.Keyword(null,"done","done",-889844188));
} else {
return null;
}
}
});})(c__27055__auto__))
;
return ((function (switch__26823__auto__,c__27055__auto__){
return (function() {
var shadow$animate$continue_BANG__$_state_machine__26824__auto__ = null;
var shadow$animate$continue_BANG__$_state_machine__26824__auto____0 = (function (){
var statearr_33464 = [null,null,null,null,null,null,null,null,null];
(statearr_33464[(0)] = shadow$animate$continue_BANG__$_state_machine__26824__auto__);

(statearr_33464[(1)] = (1));

return statearr_33464;
});
var shadow$animate$continue_BANG__$_state_machine__26824__auto____1 = (function (state_33461){
while(true){
var ret_value__26825__auto__ = (function (){try{while(true){
var result__26826__auto__ = switch__26823__auto__(state_33461);
if(cljs.core.keyword_identical_QMARK_(result__26826__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26826__auto__;
}
break;
}
}catch (e33465){if((e33465 instanceof Object)){
var ex__26827__auto__ = e33465;
var statearr_33466_33468 = state_33461;
(statearr_33466_33468[(5)] = ex__26827__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33461);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33465;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26825__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33469 = state_33461;
state_33461 = G__33469;
continue;
} else {
return ret_value__26825__auto__;
}
break;
}
});
shadow$animate$continue_BANG__$_state_machine__26824__auto__ = function(state_33461){
switch(arguments.length){
case 0:
return shadow$animate$continue_BANG__$_state_machine__26824__auto____0.call(this);
case 1:
return shadow$animate$continue_BANG__$_state_machine__26824__auto____1.call(this,state_33461);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
shadow$animate$continue_BANG__$_state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$animate$continue_BANG__$_state_machine__26824__auto____0;
shadow$animate$continue_BANG__$_state_machine__26824__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$animate$continue_BANG__$_state_machine__26824__auto____1;
return shadow$animate$continue_BANG__$_state_machine__26824__auto__;
})()
;})(switch__26823__auto__,c__27055__auto__))
})();
var state__27057__auto__ = (function (){var statearr_33467 = (f__27056__auto__.cljs$core$IFn$_invoke$arity$0 ? f__27056__auto__.cljs$core$IFn$_invoke$arity$0() : f__27056__auto__.call(null));
(statearr_33467[(6)] = c__27055__auto__);

return statearr_33467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27057__auto__);
});})(c__27055__auto__))
);

return c__27055__auto__;
});
shadow.animate.start = (function shadow$animate$start(duration,elements){
var animator = shadow.animate.setup(duration,elements);
shadow.animate.init_BANG_(animator);

return shadow.animate.continue_BANG_(animator);
});
/**
 * transition the given attr from -> to using timing function and delay
 * timing defaults to ease, delay to 0
 */
shadow.animate.transition = (function shadow$animate$transition(var_args){
var G__33471 = arguments.length;
switch (G__33471) {
case 3:
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.animate.transition.cljs$core$IFn$_invoke$arity$3 = (function (attr,from,to){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$5(attr,from,to,"ease",(0));
});

shadow.animate.transition.cljs$core$IFn$_invoke$arity$4 = (function (attr,from,to,timing){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$5(attr,from,to,timing,(0));
});

shadow.animate.transition.cljs$core$IFn$_invoke$arity$5 = (function (attr,from,to,timing,delay){
if(typeof shadow.animate.t_shadow$animate33472 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate33472 = (function (attr,from,to,timing,delay,meta33473){
this.attr = attr;
this.from = from;
this.to = to;
this.timing = timing;
this.delay = delay;
this.meta33473 = meta33473;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.animate.t_shadow$animate33472.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33474,meta33473__$1){
var self__ = this;
var _33474__$1 = this;
return (new shadow.animate.t_shadow$animate33472(self__.attr,self__.from,self__.to,self__.timing,self__.delay,meta33473__$1));
});

shadow.animate.t_shadow$animate33472.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33474){
var self__ = this;
var _33474__$1 = this;
return self__.meta33473;
});

shadow.animate.t_shadow$animate33472.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL;

shadow.animate.t_shadow$animate33472.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.from]);
});

shadow.animate.t_shadow$animate33472.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.to]);
});

shadow.animate.t_shadow$animate33472.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate33472.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.timing]);
});

shadow.animate.t_shadow$animate33472.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.delay]);
});

shadow.animate.t_shadow$animate33472.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"timing","timing",-208693668,null),new cljs.core.Symbol(null,"delay","delay",1066306308,null),new cljs.core.Symbol(null,"meta33473","meta33473",-1050545928,null)], null);
});

shadow.animate.t_shadow$animate33472.cljs$lang$type = true;

shadow.animate.t_shadow$animate33472.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate33472";

shadow.animate.t_shadow$animate33472.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"shadow.animate/t_shadow$animate33472");
});

/**
 * Positional factory function for shadow.animate/t_shadow$animate33472.
 */
shadow.animate.__GT_t_shadow$animate33472 = (function shadow$animate$__GT_t_shadow$animate33472(attr__$1,from__$1,to__$1,timing__$1,delay__$1,meta33473){
return (new shadow.animate.t_shadow$animate33472(attr__$1,from__$1,to__$1,timing__$1,delay__$1,meta33473));
});

}

return (new shadow.animate.t_shadow$animate33472(attr,from,to,timing,delay,cljs.core.PersistentArrayMap.EMPTY));
});

shadow.animate.transition.cljs$lang$maxFixedArity = 5;

shadow.animate.toggle = (function shadow$animate$toggle(attr,from,to){
if(typeof shadow.animate.t_shadow$animate33476 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate33476 = (function (attr,from,to,meta33477){
this.attr = attr;
this.from = from;
this.to = to;
this.meta33477 = meta33477;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.animate.t_shadow$animate33476.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33478,meta33477__$1){
var self__ = this;
var _33478__$1 = this;
return (new shadow.animate.t_shadow$animate33476(self__.attr,self__.from,self__.to,meta33477__$1));
});

shadow.animate.t_shadow$animate33476.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33478){
var self__ = this;
var _33478__$1 = this;
return self__.meta33477;
});

shadow.animate.t_shadow$animate33476.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL;

shadow.animate.t_shadow$animate33476.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate33476.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.from]);
});

shadow.animate.t_shadow$animate33476.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.to]);
});

shadow.animate.t_shadow$animate33476.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate33476.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate33476.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"meta33477","meta33477",-117574657,null)], null);
});

shadow.animate.t_shadow$animate33476.cljs$lang$type = true;

shadow.animate.t_shadow$animate33476.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate33476";

shadow.animate.t_shadow$animate33476.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"shadow.animate/t_shadow$animate33476");
});

/**
 * Positional factory function for shadow.animate/t_shadow$animate33476.
 */
shadow.animate.__GT_t_shadow$animate33476 = (function shadow$animate$toggle_$___GT_t_shadow$animate33476(attr__$1,from__$1,to__$1,meta33477){
return (new shadow.animate.t_shadow$animate33476(attr__$1,from__$1,to__$1,meta33477));
});

}

return (new shadow.animate.t_shadow$animate33476(attr,from,to,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * set attr to value when the animation starts
 */
shadow.animate.set_attr = (function shadow$animate$set_attr(var_args){
var G__33480 = arguments.length;
switch (G__33480) {
case 1:
return shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$1 = (function (attrs){
if(typeof shadow.animate.t_shadow$animate33481 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate33481 = (function (attrs,meta33482){
this.attrs = attrs;
this.meta33482 = meta33482;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.animate.t_shadow$animate33481.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33483,meta33482__$1){
var self__ = this;
var _33483__$1 = this;
return (new shadow.animate.t_shadow$animate33481(self__.attrs,meta33482__$1));
});

shadow.animate.t_shadow$animate33481.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33483){
var self__ = this;
var _33483__$1 = this;
return self__.meta33482;
});

shadow.animate.t_shadow$animate33481.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL;

shadow.animate.t_shadow$animate33481.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate33481.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.attrs;
});

shadow.animate.t_shadow$animate33481.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate33481.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate33481.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate33481.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33482","meta33482",1688915827,null)], null);
});

shadow.animate.t_shadow$animate33481.cljs$lang$type = true;

shadow.animate.t_shadow$animate33481.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate33481";

shadow.animate.t_shadow$animate33481.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"shadow.animate/t_shadow$animate33481");
});

/**
 * Positional factory function for shadow.animate/t_shadow$animate33481.
 */
shadow.animate.__GT_t_shadow$animate33481 = (function shadow$animate$__GT_t_shadow$animate33481(attrs__$1,meta33482){
return (new shadow.animate.t_shadow$animate33481(attrs__$1,meta33482));
});

}

return (new shadow.animate.t_shadow$animate33481(attrs,cljs.core.PersistentArrayMap.EMPTY));
});

shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$2 = (function (attr,value){
return shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.createAsIfByAssoc([attr,value]));
});

shadow.animate.set_attr.cljs$lang$maxFixedArity = 2;

/**
 * use to remove a given attribute style when the animation is finished
 * usually only needed to remove attributes we no longer need since they are probably
 * inherited and we only used for previous transitions
 */
shadow.animate.delete_attr = (function shadow$animate$delete_attr(attr){
if(typeof shadow.animate.t_shadow$animate33485 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate33485 = (function (attr,meta33486){
this.attr = attr;
this.meta33486 = meta33486;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.animate.t_shadow$animate33485.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33487,meta33486__$1){
var self__ = this;
var _33487__$1 = this;
return (new shadow.animate.t_shadow$animate33485(self__.attr,meta33486__$1));
});

shadow.animate.t_shadow$animate33485.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33487){
var self__ = this;
var _33487__$1 = this;
return self__.meta33486;
});

shadow.animate.t_shadow$animate33485.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL;

shadow.animate.t_shadow$animate33485.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate33485.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate33485.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,null]);
});

shadow.animate.t_shadow$animate33485.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate33485.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate33485.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"meta33486","meta33486",-480996812,null)], null);
});

shadow.animate.t_shadow$animate33485.cljs$lang$type = true;

shadow.animate.t_shadow$animate33485.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate33485";

shadow.animate.t_shadow$animate33485.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"shadow.animate/t_shadow$animate33485");
});

/**
 * Positional factory function for shadow.animate/t_shadow$animate33485.
 */
shadow.animate.__GT_t_shadow$animate33485 = (function shadow$animate$delete_attr_$___GT_t_shadow$animate33485(attr__$1,meta33486){
return (new shadow.animate.t_shadow$animate33485(attr__$1,meta33486));
});

}

return (new shadow.animate.t_shadow$animate33485(attr,cljs.core.PersistentArrayMap.EMPTY));
});
shadow.animate.combine = (function shadow$animate$combine(var_args){
var args__4502__auto__ = [];
var len__4499__auto___33492 = arguments.length;
var i__4500__auto___33493 = (0);
while(true){
if((i__4500__auto___33493 < len__4499__auto___33492)){
args__4502__auto__.push((arguments[i__4500__auto___33493]));

var G__33494 = (i__4500__auto___33493 + (1));
i__4500__auto___33493 = G__33494;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return shadow.animate.combine.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

shadow.animate.combine.cljs$core$IFn$_invoke$arity$variadic = (function (transitions){
var to = cljs.core.PersistentArrayMap.EMPTY;
var from = cljs.core.PersistentArrayMap.EMPTY;
var toggles = cljs.core.PersistentArrayMap.EMPTY;
var timings = cljs.core.PersistentArrayMap.EMPTY;
var delays = cljs.core.PersistentArrayMap.EMPTY;
var transitions__$1 = transitions;
while(true){
var temp__5455__auto__ = cljs.core.first(transitions__$1);
if(cljs.core.truth_(temp__5455__auto__)){
var adef = temp__5455__auto__;
var G__33495 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([to,shadow.animate._animate_to(adef)], 0));
var G__33496 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([from,shadow.animate._animate_from(adef)], 0));
var G__33497 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([toggles,shadow.animate._animate_toggles(adef)], 0));
var G__33498 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([timings,shadow.animate._animate_timings(adef)], 0));
var G__33499 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([delays,shadow.animate._animate_delays(adef)], 0));
var G__33500 = cljs.core.rest(transitions__$1);
to = G__33495;
from = G__33496;
toggles = G__33497;
timings = G__33498;
delays = G__33499;
transitions__$1 = G__33500;
continue;
} else {
if(typeof shadow.animate.t_shadow$animate33489 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate33489 = (function (transitions,to,from,toggles,timings,delays,temp__5455__auto__,meta33490){
this.transitions = transitions;
this.to = to;
this.from = from;
this.toggles = toggles;
this.timings = timings;
this.delays = delays;
this.temp__5455__auto__ = temp__5455__auto__;
this.meta33490 = meta33490;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.animate.t_shadow$animate33489.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__){
return (function (_33491,meta33490__$1){
var self__ = this;
var _33491__$1 = this;
return (new shadow.animate.t_shadow$animate33489(self__.transitions,self__.to,self__.from,self__.toggles,self__.timings,self__.delays,self__.temp__5455__auto__,meta33490__$1));
});})(to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__))
;

shadow.animate.t_shadow$animate33489.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__){
return (function (_33491){
var self__ = this;
var _33491__$1 = this;
return self__.meta33490;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__))
;

shadow.animate.t_shadow$animate33489.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL;

shadow.animate.t_shadow$animate33489.prototype.shadow$animate$Animation$_animate_from$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.from;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__))
;

shadow.animate.t_shadow$animate33489.prototype.shadow$animate$Animation$_animate_to$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.to;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__))
;

shadow.animate.t_shadow$animate33489.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.toggles;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__))
;

shadow.animate.t_shadow$animate33489.prototype.shadow$animate$Animation$_animate_timings$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.timings;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__))
;

shadow.animate.t_shadow$animate33489.prototype.shadow$animate$Animation$_animate_delays$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.delays;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__))
;

shadow.animate.t_shadow$animate33489.getBasis = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"transitions","transitions",-405684594,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"toggles","toggles",-1576526290,null),new cljs.core.Symbol(null,"timings","timings",-569636600,null),new cljs.core.Symbol(null,"delays","delays",-873843187,null),new cljs.core.Symbol(null,"temp__5455__auto__","temp__5455__auto__",980956642,null),new cljs.core.Symbol(null,"meta33490","meta33490",-1671501259,null)], null);
});})(to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__))
;

shadow.animate.t_shadow$animate33489.cljs$lang$type = true;

shadow.animate.t_shadow$animate33489.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate33489";

shadow.animate.t_shadow$animate33489.cljs$lang$ctorPrWriter = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"shadow.animate/t_shadow$animate33489");
});})(to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__))
;

/**
 * Positional factory function for shadow.animate/t_shadow$animate33489.
 */
shadow.animate.__GT_t_shadow$animate33489 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__){
return (function shadow$animate$__GT_t_shadow$animate33489(transitions__$2,to__$1,from__$1,toggles__$1,timings__$1,delays__$1,temp__5455__auto____$1,meta33490){
return (new shadow.animate.t_shadow$animate33489(transitions__$2,to__$1,from__$1,toggles__$1,timings__$1,delays__$1,temp__5455__auto____$1,meta33490));
});})(to,from,toggles,timings,delays,transitions__$1,temp__5455__auto__))
;

}

return (new shadow.animate.t_shadow$animate33489(transitions__$1,to,from,toggles,timings,delays,temp__5455__auto__,cljs.core.PersistentArrayMap.EMPTY));
}
break;
}
});

shadow.animate.combine.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.animate.combine.cljs$lang$applyTo = (function (seq33488){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33488));
});

shadow.animate.fade_in = (function shadow$animate$fade_in(var_args){
var G__33502 = arguments.length;
switch (G__33502) {
case 0:
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1("ease-in");
});

shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1 = (function (timing_function){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"opacity","opacity",397153780),"0","1",timing_function);
});

shadow.animate.fade_in.cljs$lang$maxFixedArity = 1;

shadow.animate.fade_out = (function shadow$animate$fade_out(var_args){
var G__33505 = arguments.length;
switch (G__33505) {
case 0:
return shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1("ease-out");
});

shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$1 = (function (timing_function){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"opacity","opacity",397153780),"1","0",timing_function);
});

shadow.animate.fade_out.cljs$lang$maxFixedArity = 1;

shadow.animate.vendor_prefix = goog.dom.vendor.getVendorPrefix();
shadow.animate.vendor_transform = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.animate.vendor_prefix),"-transform"].join(''));
shadow.animate.translate_y = (function shadow$animate$translate_y(var_args){
var G__33508 = arguments.length;
switch (G__33508) {
case 3:
return shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$3 = (function (from,to,timing){
return shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$4(from,to,timing,(0));
});

shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$4 = (function (from,to,timing,delay){
if(typeof shadow.animate.t_shadow$animate33509 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate33509 = (function (from,to,timing,delay,meta33510){
this.from = from;
this.to = to;
this.timing = timing;
this.delay = delay;
this.meta33510 = meta33510;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.animate.t_shadow$animate33509.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33511,meta33510__$1){
var self__ = this;
var _33511__$1 = this;
return (new shadow.animate.t_shadow$animate33509(self__.from,self__.to,self__.timing,self__.delay,meta33510__$1));
});

shadow.animate.t_shadow$animate33509.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33511){
var self__ = this;
var _33511__$1 = this;
return self__.meta33510;
});

shadow.animate.t_shadow$animate33509.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL;

shadow.animate.t_shadow$animate33509.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateY(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.from),")"].join('')], null);
});

shadow.animate.t_shadow$animate33509.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateY(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.to),")"].join('')], null);
});

shadow.animate.t_shadow$animate33509.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.timing]);
});

shadow.animate.t_shadow$animate33509.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate33509.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.delay]);
});

shadow.animate.t_shadow$animate33509.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"timing","timing",-208693668,null),new cljs.core.Symbol(null,"delay","delay",1066306308,null),new cljs.core.Symbol(null,"meta33510","meta33510",-736632437,null)], null);
});

shadow.animate.t_shadow$animate33509.cljs$lang$type = true;

shadow.animate.t_shadow$animate33509.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate33509";

shadow.animate.t_shadow$animate33509.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"shadow.animate/t_shadow$animate33509");
});

/**
 * Positional factory function for shadow.animate/t_shadow$animate33509.
 */
shadow.animate.__GT_t_shadow$animate33509 = (function shadow$animate$__GT_t_shadow$animate33509(from__$1,to__$1,timing__$1,delay__$1,meta33510){
return (new shadow.animate.t_shadow$animate33509(from__$1,to__$1,timing__$1,delay__$1,meta33510));
});

}

return (new shadow.animate.t_shadow$animate33509(from,to,timing,delay,cljs.core.PersistentArrayMap.EMPTY));
});

shadow.animate.translate_y.cljs$lang$maxFixedArity = 4;

shadow.animate.translate_x = (function shadow$animate$translate_x(var_args){
var G__33514 = arguments.length;
switch (G__33514) {
case 3:
return shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$3 = (function (from,to,timing){
return shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$4(from,to,timing,(0));
});

shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$4 = (function (from,to,timing,delay){
if(typeof shadow.animate.t_shadow$animate33515 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate33515 = (function (from,to,timing,delay,meta33516){
this.from = from;
this.to = to;
this.timing = timing;
this.delay = delay;
this.meta33516 = meta33516;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.animate.t_shadow$animate33515.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33517,meta33516__$1){
var self__ = this;
var _33517__$1 = this;
return (new shadow.animate.t_shadow$animate33515(self__.from,self__.to,self__.timing,self__.delay,meta33516__$1));
});

shadow.animate.t_shadow$animate33515.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33517){
var self__ = this;
var _33517__$1 = this;
return self__.meta33516;
});

shadow.animate.t_shadow$animate33515.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL;

shadow.animate.t_shadow$animate33515.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateX(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.from),")"].join('')], null);
});

shadow.animate.t_shadow$animate33515.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateX(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.to),")"].join('')], null);
});

shadow.animate.t_shadow$animate33515.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.timing]);
});

shadow.animate.t_shadow$animate33515.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

shadow.animate.t_shadow$animate33515.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.delay]);
});

shadow.animate.t_shadow$animate33515.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"timing","timing",-208693668,null),new cljs.core.Symbol(null,"delay","delay",1066306308,null),new cljs.core.Symbol(null,"meta33516","meta33516",-330598716,null)], null);
});

shadow.animate.t_shadow$animate33515.cljs$lang$type = true;

shadow.animate.t_shadow$animate33515.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate33515";

shadow.animate.t_shadow$animate33515.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write(writer__4162__auto__,"shadow.animate/t_shadow$animate33515");
});

/**
 * Positional factory function for shadow.animate/t_shadow$animate33515.
 */
shadow.animate.__GT_t_shadow$animate33515 = (function shadow$animate$__GT_t_shadow$animate33515(from__$1,to__$1,timing__$1,delay__$1,meta33516){
return (new shadow.animate.t_shadow$animate33515(from__$1,to__$1,timing__$1,delay__$1,meta33516));
});

}

return (new shadow.animate.t_shadow$animate33515(from,to,timing,delay,cljs.core.PersistentArrayMap.EMPTY));
});

shadow.animate.translate_x.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.animate.js.map
