goog.provide('mranderson047.reagent.v0v8v0_alpha2.reagent.core');
goog.require('cljs.core');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
goog.require('mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template');
goog.require('mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component');
goog.require('mranderson047.reagent.v0v8v0_alpha2.reagent.impl.util');
goog.require('mranderson047.reagent.v0v8v0_alpha2.reagent.impl.batching');
goog.require('mranderson047.reagent.v0v8v0_alpha2.reagent.ratom');
goog.require('mranderson047.reagent.v0v8v0_alpha2.reagent.debug');
goog.require('mranderson047.reagent.v0v8v0_alpha2.reagent.interop');
goog.require('mranderson047.reagent.v0v8v0_alpha2.reagent.dom');
mranderson047.reagent.v0v8v0_alpha2.reagent.core.is_client = mranderson047.reagent.v0v8v0_alpha2.reagent.impl.util.is_client;
/**
 * Create a native React element, by calling React.createElement directly.
 * 
 *   That means the second argument must be a javascript object (or nil), and
 *   that any Reagent hiccup forms must be processed with as-element. For example
 *   like this:
 * 
 *  (r/create-element "div" #js{:className "foo"}
 *     "Hi " (r/as-element [:strong "world!"])
 * 
 *   which is equivalent to
 * 
 *  [:div.foo "Hi" [:strong "world!"]]
 */
mranderson047.reagent.v0v8v0_alpha2.reagent.core.create_element = (function mranderson047$reagent$v0v8v0_alpha2$reagent$core$create_element(var_args){
var G__27000 = arguments.length;
switch (G__27000) {
case 1:
return mranderson047.reagent.v0v8v0_alpha2.reagent.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mranderson047.reagent.v0v8v0_alpha2.reagent.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return mranderson047.reagent.v0v8v0_alpha2.reagent.core.create_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___27002 = arguments.length;
var i__4500__auto___27003 = (0);
while(true){
if((i__4500__auto___27003 < len__4499__auto___27002)){
args_arr__4514__auto__.push((arguments[i__4500__auto___27003]));

var G__27004 = (i__4500__auto___27003 + (1));
i__4500__auto___27003 = G__27004;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((3)),(0),null));
return mranderson047.reagent.v0v8v0_alpha2.reagent.core.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4515__auto__);

}
});

mranderson047.reagent.v0v8v0_alpha2.reagent.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (type){
return mranderson047.reagent.v0v8v0_alpha2.reagent.core.create_element.cljs$core$IFn$_invoke$arity$2(type,null);
});

mranderson047.reagent.v0v8v0_alpha2.reagent.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (type,props){
if(!(cljs.core.map_QMARK_(props))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Expected a JS object, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props], 0)))].join('')),"\n","(clojure.core/not (clojure.core/map? props))"].join('')));
}

return module$node_modules$react$index.createElement(type,props);
});

mranderson047.reagent.v0v8v0_alpha2.reagent.core.create_element.cljs$core$IFn$_invoke$arity$3 = (function (type,props,child){
if(!(cljs.core.map_QMARK_(props))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Expected a JS object, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props], 0)))].join('')),"\n","(clojure.core/not (clojure.core/map? props))"].join('')));
}

return module$node_modules$react$index.createElement(type,props,child);
});

mranderson047.reagent.v0v8v0_alpha2.reagent.core.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (type,props,child,children){
if(!(cljs.core.map_QMARK_(props))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Expected a JS object, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props], 0)))].join('')),"\n","(clojure.core/not (clojure.core/map? props))"].join('')));
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(module$node_modules$react$index.createElement,type,props,child,children);
});

/** @this {Function} */
mranderson047.reagent.v0v8v0_alpha2.reagent.core.create_element.cljs$lang$applyTo = (function (seq26996){
var G__26997 = cljs.core.first(seq26996);
var seq26996__$1 = cljs.core.next(seq26996);
var G__26998 = cljs.core.first(seq26996__$1);
var seq26996__$2 = cljs.core.next(seq26996__$1);
var G__26999 = cljs.core.first(seq26996__$2);
var seq26996__$3 = cljs.core.next(seq26996__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26997,G__26998,G__26999,seq26996__$3);
});

mranderson047.reagent.v0v8v0_alpha2.reagent.core.create_element.cljs$lang$maxFixedArity = (3);

/**
 * Turns a vector of Hiccup syntax into a React element. Returns form
 *   unchanged if it is not a vector.
 */
mranderson047.reagent.v0v8v0_alpha2.reagent.core.as_element = (function mranderson047$reagent$v0v8v0_alpha2$reagent$core$as_element(form){
return mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.as_element(form);
});
/**
 * Returns an adapter for a native React class, that may be used
 *   just like a Reagent component function or class in Hiccup forms.
 */
mranderson047.reagent.v0v8v0_alpha2.reagent.core.adapt_react_class = (function mranderson047$reagent$v0v8v0_alpha2$reagent$core$adapt_react_class(var_args){
var G__27006 = arguments.length;
switch (G__27006) {
case 2:
return mranderson047.reagent.v0v8v0_alpha2.reagent.core.adapt_react_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return mranderson047.reagent.v0v8v0_alpha2.reagent.core.adapt_react_class.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson047.reagent.v0v8v0_alpha2.reagent.core.adapt_react_class.cljs$core$IFn$_invoke$arity$2 = (function (c,opts){
if(cljs.core.truth_(c)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Component"," must not be nil"].join('')),"\n","c"].join('')));
}

return mranderson047.reagent.v0v8v0_alpha2.reagent.impl.template.adapt_react_class.cljs$core$IFn$_invoke$arity$2(c,opts);
});

mranderson047.reagent.v0v8v0_alpha2.reagent.core.adapt_react_class.cljs$core$IFn$_invoke$arity$1 = (function (c){
return mranderson047.reagent.v0v8v0_alpha2.reagent.core.adapt_react_class.cljs$core$IFn$_invoke$arity$2(c,cljs.core.PersistentArrayMap.EMPTY);
});

mranderson047.reagent.v0v8v0_alpha2.reagent.core.adapt_react_class.cljs$lang$maxFixedArity = 2;

/**
 * Returns an adapter for a Reagent component, that may be used from
 *   React, for example in JSX. A single argument, props, is passed to
 *   the component, converted to a map.
 */
mranderson047.reagent.v0v8v0_alpha2.reagent.core.reactify_component = (function mranderson047$reagent$v0v8v0_alpha2$reagent$core$reactify_component(c){
if(cljs.core.truth_(c)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Component"," must not be nil"].join('')),"\n","c"].join('')));
}

return mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.reactify_component(c);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
mranderson047.reagent.v0v8v0_alpha2.reagent.core.render = (function mranderson047$reagent$v0v8v0_alpha2$reagent$core$render(var_args){
var G__27009 = arguments.length;
switch (G__27009) {
case 2:
return mranderson047.reagent.v0v8v0_alpha2.reagent.core.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return mranderson047.reagent.v0v8v0_alpha2.reagent.core.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson047.reagent.v0v8v0_alpha2.reagent.core.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return mranderson047.reagent.v0v8v0_alpha2.reagent.dom.render.cljs$core$IFn$_invoke$arity$2(comp,container);
});

mranderson047.reagent.v0v8v0_alpha2.reagent.core.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
return mranderson047.reagent.v0v8v0_alpha2.reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,callback);
});

mranderson047.reagent.v0v8v0_alpha2.reagent.core.render.cljs$lang$maxFixedArity = 3;

/**
 * Remove a component from the given DOM node.
 */
mranderson047.reagent.v0v8v0_alpha2.reagent.core.unmount_component_at_node = (function mranderson047$reagent$v0v8v0_alpha2$reagent$core$unmount_component_at_node(container){
return mranderson047.reagent.v0v8v0_alpha2.reagent.dom.unmount_component_at_node(container);
});
mranderson047.reagent.v0v8v0_alpha2.reagent.core.as_component = mranderson047.reagent.v0v8v0_alpha2.reagent.core.as_element;
mranderson047.reagent.v0v8v0_alpha2.reagent.core.render_component = mranderson047.reagent.v0v8v0_alpha2.reagent.core.render;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
mranderson047.reagent.v0v8v0_alpha2.reagent.core.force_update_all = (function mranderson047$reagent$v0v8v0_alpha2$reagent$core$force_update_all(){
mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.flush_BANG_();

mranderson047.reagent.v0v8v0_alpha2.reagent.dom.force_update_all();

return mranderson047.reagent.v0v8v0_alpha2.reagent.impl.batching.flush_after_render();
});
goog.exportSymbol('mranderson047.reagent.v0v8v0_alpha2.reagent.core.force_update_all', mranderson047.reagent.v0v8v0_alpha2.reagent.core.force_update_all);
/**
 * Create a component, React style. Should be called with a map,
 *   looking like this:
 * 
 *  {:get-initial-state (fn [this])
 *   :component-will-receive-props (fn [this new-argv])
 *   :should-component-update (fn [this old-argv new-argv])
 *   :component-will-mount (fn [this])
 *   :component-did-mount (fn [this])
 *   :component-will-update (fn [this new-argv])
 *   :component-did-update (fn [this old-argv])
 *   :component-will-unmount (fn [this])
 *   :reagent-render (fn [args....])}   ;; or :render (fn [this])
 * 
 *   Everything is optional, except either :reagent-render or :render.
 */
mranderson047.reagent.v0v8v0_alpha2.reagent.core.create_class = (function mranderson047$reagent$v0v8v0_alpha2$reagent$core$create_class(spec){
return mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.create_class(spec);
});
/**
 * Returns the current React component (a.k.a this) in a component
 *   function.
 */
mranderson047.reagent.v0v8v0_alpha2.reagent.core.current_component = (function mranderson047$reagent$v0v8v0_alpha2$reagent$core$current_component(){
return mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component._STAR_current_component_STAR_;
});
/**
 * Returns an atom containing a components state.
 */
mranderson047.reagent.v0v8v0_alpha2.reagent.core.state_atom = (function mranderson047$reagent$v0v8v0_alpha2$reagent$core$state_atom(this$){
if(mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.reagent_component_QMARK_(this$)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Expected a mranderson047.reagent.v0v8v0-alpha2.reagent component, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0)))].join('')),"\n","(comp/reagent-component? this)"].join('')));
}

return mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.state_atom(this$);
});
/**
 * Returns the state of a component, as set with replace-state or set-state.
 *   Equivalent to (deref (r/state-atom this))
 */
mranderson047.reagent.v0v8v0_alpha2.reagent.core.state = (function mranderson047$reagent$v0v8v0_alpha2$reagent$core$state(this$){
if(mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.reagent_component_QMARK_(this$)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Expected a mranderson047.reagent.v0v8v0-alpha2.reagent component, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0)))].join('')),"\n","(comp/reagent-component? this)"].join('')));
}

return cljs.core.deref(mranderson047.reagent.v0v8v0_alpha2.reagent.core.state_atom(this$));
});
/**
 * Set state of a component.
 *   Equivalent to (reset! (state-atom this) new-state)
 */
mranderson047.reagent.v0v8v0_alpha2.reagent.core.replace_state = (function mranderson047$reagent$v0v8v0_alpha2$reagent$core$replace_state(this$,new_state){
if(mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.reagent_component_QMARK_(this$)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Expected a mranderson047.reagent.v0v8v0-alpha2.reagent component, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0)))].join('')),"\n","(comp/reagent-component? this)"].join('')));
}

if((((new_state == null)) || (cljs.core.map_QMARK_(new_state)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Expected a valid new state, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_state], 0)))].join('')),"\n","(clojure.core/or (clojure.core/nil? new-state) (clojure.core/map? new-state))"].join('')));
}

return cljs.core.reset_BANG_(mranderson047.reagent.v0v8v0_alpha2.reagent.core.state_atom(this$),new_state);
});
/**
 * Merge component state with new-state.
 *   Equivalent to (swap! (state-atom this) merge new-state)
 */
mranderson047.reagent.v0v8v0_alpha2.reagent.core.set_state = (function mranderson047$reagent$v0v8v0_alpha2$reagent$core$set_state(this$,new_state){
if(mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.reagent_component_QMARK_(this$)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Expected a mranderson047.reagent.v0v8v0-alpha2.reagent component, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0)))].join('')),"\n","(comp/reagent-component? this)"].join('')));
}

if((((new_state == null)) || (cljs.core.map_QMARK_(new_state)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Expected a valid new state, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_state], 0)))].join('')),"\n","(clojure.core/or (clojure.core/nil? new-state) (clojure.core/map? new-state))"].join('')));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mranderson047.reagent.v0v8v0_alpha2.reagent.core.state_atom(this$),cljs.core.merge,new_state);
});
/**
 * Force a component to re-render immediately.
 * 
 *   If the second argument is true, child components will also be
 *   re-rendered, even is their arguments have not changed.
 */
mranderson047.reagent.v0v8v0_alpha2.reagent.core.force_update = (function mranderson047$reagent$v0v8v0_alpha2$reagent$core$force_update(var_args){
var G__27012 = arguments.length;
switch (G__27012) {
case 1:
return mranderson047.reagent.v0v8v0_alpha2.reagent.core.force_update.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return mranderson047.reagent.v0v8v0_alpha2.reagent.core.force_update.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

mranderson047.reagent.v0v8v0_alpha2.reagent.core.force_update.cljs$core$IFn$_invoke$arity$1 = (function (this$){
return mranderson047.reagent.v0v8v0_alpha2.reagent.core.force_update.cljs$core$IFn$_invoke$arity$2(this$,false);
});

mranderson047.reagent.v0v8v0_alpha2.reagent.core.force_update.cljs$core$IFn$_invoke$arity$2 = (function (this$,deep){
mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.flush_BANG_();

mranderson047.reagent.v0v8v0_alpha2.reagent.impl.util.force_update(this$,deep);

return mranderson047.reagent.v0v8v0_alpha2.reagent.impl.batching.flush_after_render();
});

mranderson047.reagent.v0v8v0_alpha2.reagent.core.force_update.cljs$lang$maxFixedArity = 2;

/**
 * Returns the props passed to a component.
 */
mranderson047.reagent.v0v8v0_alpha2.reagent.core.props = (function mranderson047$reagent$v0v8v0_alpha2$reagent$core$props(this$){
if(mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.reagent_component_QMARK_(this$)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Expected a mranderson047.reagent.v0v8v0-alpha2.reagent component, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0)))].join('')),"\n","(comp/reagent-component? this)"].join('')));
}

return mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.get_props(this$);
});
/**
 * Returns the children passed to a component.
 */
mranderson047.reagent.v0v8v0_alpha2.reagent.core.children = (function mranderson047$reagent$v0v8v0_alpha2$reagent$core$children(this$){
if(mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.reagent_component_QMARK_(this$)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Expected a mranderson047.reagent.v0v8v0-alpha2.reagent component, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0)))].join('')),"\n","(comp/reagent-component? this)"].join('')));
}

return mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.get_children(this$);
});
/**
 * Returns the entire Hiccup form passed to the component.
 */
mranderson047.reagent.v0v8v0_alpha2.reagent.core.argv = (function mranderson047$reagent$v0v8v0_alpha2$reagent$core$argv(this$){
if(mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.reagent_component_QMARK_(this$)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Expected a mranderson047.reagent.v0v8v0-alpha2.reagent component, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0)))].join('')),"\n","(comp/reagent-component? this)"].join('')));
}

return mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.get_argv(this$);
});
/**
 * Returns the root DOM node of a mounted component.
 */
mranderson047.reagent.v0v8v0_alpha2.reagent.core.dom_node = (function mranderson047$reagent$v0v8v0_alpha2$reagent$core$dom_node(this$){
return mranderson047.reagent.v0v8v0_alpha2.reagent.dom.dom_node(this$);
});
/**
 * Utility function that merges two maps, handling :class and :style
 *   specially, like React's transferPropsTo.
 */
mranderson047.reagent.v0v8v0_alpha2.reagent.core.merge_props = (function mranderson047$reagent$v0v8v0_alpha2$reagent$core$merge_props(defaults,props){
return mranderson047.reagent.v0v8v0_alpha2.reagent.impl.util.merge_props(defaults,props);
});
/**
 * Render dirty components immediately to the DOM.
 * 
 *   Note that this may not work in event handlers, since React.js does
 *   batching of updates there.
 */
mranderson047.reagent.v0v8v0_alpha2.reagent.core.flush = (function mranderson047$reagent$v0v8v0_alpha2$reagent$core$flush(){
return mranderson047.reagent.v0v8v0_alpha2.reagent.impl.batching.flush();
});
/**
 * Like clojure.core/atom, except that it keeps track of derefs.
 *   Reagent components that derefs one of these are automatically
 *   re-rendered.
 */
mranderson047.reagent.v0v8v0_alpha2.reagent.core.atom = (function mranderson047$reagent$v0v8v0_alpha2$reagent$core$atom(var_args){
var G__27017 = arguments.length;
switch (G__27017) {
case 1:
return mranderson047.reagent.v0v8v0_alpha2.reagent.core.atom.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___27019 = arguments.length;
var i__4500__auto___27020 = (0);
while(true){
if((i__4500__auto___27020 < len__4499__auto___27019)){
args_arr__4514__auto__.push((arguments[i__4500__auto___27020]));

var G__27021 = (i__4500__auto___27020 + (1));
i__4500__auto___27020 = G__27021;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((1)),(0),null));
return mranderson047.reagent.v0v8v0_alpha2.reagent.core.atom.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4515__auto__);

}
});

mranderson047.reagent.v0v8v0_alpha2.reagent.core.atom.cljs$core$IFn$_invoke$arity$1 = (function (x){
return mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1(x);
});

mranderson047.reagent.v0v8v0_alpha2.reagent.core.atom.cljs$core$IFn$_invoke$arity$variadic = (function (x,rest){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.atom,x,rest);
});

/** @this {Function} */
mranderson047.reagent.v0v8v0_alpha2.reagent.core.atom.cljs$lang$applyTo = (function (seq27015){
var G__27016 = cljs.core.first(seq27015);
var seq27015__$1 = cljs.core.next(seq27015);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27016,seq27015__$1);
});

mranderson047.reagent.v0v8v0_alpha2.reagent.core.atom.cljs$lang$maxFixedArity = (1);

/**
 * Takes a function and optional arguments, and returns a derefable
 *   containing the output of that function. If the function derefs
 *   Reagent atoms (or track, etc), the value will be updated whenever
 *   the atom changes.
 * 
 *   In other words, @(track foo bar) will produce the same result
 *   as (foo bar), but foo will only be called again when the atoms it
 *   depends on changes, and will only trigger updates of components when
 *   its result changes.
 * 
 *   track is lazy, i.e the function is only evaluated on deref.
 */
mranderson047.reagent.v0v8v0_alpha2.reagent.core.track = (function mranderson047$reagent$v0v8v0_alpha2$reagent$core$track(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27024 = arguments.length;
var i__4500__auto___27025 = (0);
while(true){
if((i__4500__auto___27025 < len__4499__auto___27024)){
args__4502__auto__.push((arguments[i__4500__auto___27025]));

var G__27026 = (i__4500__auto___27025 + (1));
i__4500__auto___27025 = G__27026;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return mranderson047.reagent.v0v8v0_alpha2.reagent.core.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

mranderson047.reagent.v0v8v0_alpha2.reagent.core.track.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.make_track(f,args);
});

mranderson047.reagent.v0v8v0_alpha2.reagent.core.track.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mranderson047.reagent.v0v8v0_alpha2.reagent.core.track.cljs$lang$applyTo = (function (seq27022){
var G__27023 = cljs.core.first(seq27022);
var seq27022__$1 = cljs.core.next(seq27022);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27023,seq27022__$1);
});

/**
 * An eager version of track. The function passed is called
 *   immediately, and continues to be called when needed, until stopped
 *   with dispose!.
 */
mranderson047.reagent.v0v8v0_alpha2.reagent.core.track_BANG_ = (function mranderson047$reagent$v0v8v0_alpha2$reagent$core$track_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27029 = arguments.length;
var i__4500__auto___27030 = (0);
while(true){
if((i__4500__auto___27030 < len__4499__auto___27029)){
args__4502__auto__.push((arguments[i__4500__auto___27030]));

var G__27031 = (i__4500__auto___27030 + (1));
i__4500__auto___27030 = G__27031;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return mranderson047.reagent.v0v8v0_alpha2.reagent.core.track_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

mranderson047.reagent.v0v8v0_alpha2.reagent.core.track_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.make_track_BANG_(f,args);
});

mranderson047.reagent.v0v8v0_alpha2.reagent.core.track_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mranderson047.reagent.v0v8v0_alpha2.reagent.core.track_BANG_.cljs$lang$applyTo = (function (seq27027){
var G__27028 = cljs.core.first(seq27027);
var seq27027__$1 = cljs.core.next(seq27027);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27028,seq27027__$1);
});

/**
 * Stop the result of track! from updating.
 */
mranderson047.reagent.v0v8v0_alpha2.reagent.core.dispose_BANG_ = (function mranderson047$reagent$v0v8v0_alpha2$reagent$core$dispose_BANG_(x){
return mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.dispose_BANG_(x);
});
/**
 * Provide a combination of value and callback, that looks like an atom.
 * 
 *   The first argument can be any value, that will be returned when the
 *   result is deref'ed.
 * 
 *   The second argument should be a function, that is called with the
 *   optional extra arguments provided to wrap, and the new value of the
 *   resulting 'atom'.
 * 
 *   Use for example like this:
 * 
 *   (wrap (:foo @state)
 *      swap! state assoc :foo)
 * 
 *   Probably useful only for passing to child components.
 */
mranderson047.reagent.v0v8v0_alpha2.reagent.core.wrap = (function mranderson047$reagent$v0v8v0_alpha2$reagent$core$wrap(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27035 = arguments.length;
var i__4500__auto___27036 = (0);
while(true){
if((i__4500__auto___27036 < len__4499__auto___27035)){
args__4502__auto__.push((arguments[i__4500__auto___27036]));

var G__27037 = (i__4500__auto___27036 + (1));
i__4500__auto___27036 = G__27037;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return mranderson047.reagent.v0v8v0_alpha2.reagent.core.wrap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

mranderson047.reagent.v0v8v0_alpha2.reagent.core.wrap.cljs$core$IFn$_invoke$arity$variadic = (function (value,reset_fn,args){
if(cljs.core.ifn_QMARK_(reset_fn)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Expected something callable, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([reset_fn], 0)))].join('')),"\n","(clojure.core/ifn? reset-fn)"].join('')));
}

return mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.make_wrapper(value,reset_fn,args);
});

mranderson047.reagent.v0v8v0_alpha2.reagent.core.wrap.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
mranderson047.reagent.v0v8v0_alpha2.reagent.core.wrap.cljs$lang$applyTo = (function (seq27032){
var G__27033 = cljs.core.first(seq27032);
var seq27032__$1 = cljs.core.next(seq27032);
var G__27034 = cljs.core.first(seq27032__$1);
var seq27032__$2 = cljs.core.next(seq27032__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27033,G__27034,seq27032__$2);
});

/**
 * Provide a cursor into a Reagent atom.
 * 
 *   Behaves like a Reagent atom but focuses updates and derefs to
 *   the specified path within the wrapped Reagent atom. e.g.,
 *  (let [c (cursor ra [:nested :content])]
 *    ... @c ;; equivalent to (get-in @ra [:nested :content])
 *    ... (reset! c 42) ;; equivalent to (swap! ra assoc-in [:nested :content] 42)
 *    ... (swap! c inc) ;; equivalence to (swap! ra update-in [:nested :content] inc)
 *    )
 * 
 *   The first parameter can also be a function, that should look
 *   something like this:
 * 
 *  (defn set-get
 *    ([k] (get-in @state k))
 *    ([k v] (swap! state assoc-in k v)))
 * 
 *   The function will be called with one argument – the path passed to
 *   cursor – when the cursor is deref'ed, and two arguments (path and
 *   new value) when the cursor is modified.
 * 
 *   Given that set-get function, (and that state is a Reagent atom, or
 *   another cursor) these cursors are equivalent:
 *   (cursor state [:foo]) and (cursor set-get [:foo]).
 * 
 *   Note that a cursor is lazy: its value will not change until it is
 *   used. This may be noticed with add-watch.
 */
mranderson047.reagent.v0v8v0_alpha2.reagent.core.cursor = (function mranderson047$reagent$v0v8v0_alpha2$reagent$core$cursor(src,path){
return mranderson047.reagent.v0v8v0_alpha2.reagent.ratom.cursor(src,path);
});
/**
 * Swaps the value of a to be (apply f current-value-of-atom args).
 * 
 *   rswap! works like swap!, except that recursive calls to rswap! on
 *   the same atom are allowed – and it always returns nil.
 */
mranderson047.reagent.v0v8v0_alpha2.reagent.core.rswap_BANG_ = (function mranderson047$reagent$v0v8v0_alpha2$reagent$core$rswap_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27044 = arguments.length;
var i__4500__auto___27045 = (0);
while(true){
if((i__4500__auto___27045 < len__4499__auto___27044)){
args__4502__auto__.push((arguments[i__4500__auto___27045]));

var G__27046 = (i__4500__auto___27045 + (1));
i__4500__auto___27045 = G__27046;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((2) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((2)),(0),null)):null);
return mranderson047.reagent.v0v8v0_alpha2.reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4503__auto__);
});

mranderson047.reagent.v0v8v0_alpha2.reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (a,f,args){
if(((!((a == null)))?(((((a.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === a.cljs$core$IAtom$))))?true:(((!a.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,a):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,a))){
} else {
throw (new Error("Assert failed: (satisfies? IAtom a)"));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

if(cljs.core.truth_(a.rswapping)){
(function (){var or__3922__auto__ = a.rswapfs;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return a.rswapfs = [];
}
})().push((function (p1__27038_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,p1__27038_SHARP_,args);
}));
} else {
a.rswapping = true;

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(a,(function (state){
var s = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,state,args);
while(true){
var temp__5459__auto__ = (function (){var G__27043 = a.rswapfs;
if((G__27043 == null)){
return null;
} else {
return G__27043.shift();
}
})();
if((temp__5459__auto__ == null)){
return s;
} else {
var sf = temp__5459__auto__;
var G__27047 = (sf.cljs$core$IFn$_invoke$arity$1 ? sf.cljs$core$IFn$_invoke$arity$1(s) : sf.call(null,s));
s = G__27047;
continue;
}
break;
}
}));
}finally {a.rswapping = false;
}}

return null;
});

mranderson047.reagent.v0v8v0_alpha2.reagent.core.rswap_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
mranderson047.reagent.v0v8v0_alpha2.reagent.core.rswap_BANG_.cljs$lang$applyTo = (function (seq27039){
var G__27040 = cljs.core.first(seq27039);
var seq27039__$1 = cljs.core.next(seq27039);
var G__27041 = cljs.core.first(seq27039__$1);
var seq27039__$2 = cljs.core.next(seq27039__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27040,G__27041,seq27039__$2);
});

/**
 * Run f using requestAnimationFrame or equivalent.
 * 
 *   f will be called just before components are rendered.
 */
mranderson047.reagent.v0v8v0_alpha2.reagent.core.next_tick = (function mranderson047$reagent$v0v8v0_alpha2$reagent$core$next_tick(f){
return mranderson047.reagent.v0v8v0_alpha2.reagent.impl.batching.do_before_flush(f);
});
/**
 * Run f using requestAnimationFrame or equivalent.
 * 
 *   f will be called just after any queued renders in the next animation
 *   frame (and even if no renders actually occur).
 */
mranderson047.reagent.v0v8v0_alpha2.reagent.core.after_render = (function mranderson047$reagent$v0v8v0_alpha2$reagent$core$after_render(f){
return mranderson047.reagent.v0v8v0_alpha2.reagent.impl.batching.do_after_render(f);
});
/**
 * Works just like clojure.core/partial, but the result can be compared with =
 */
mranderson047.reagent.v0v8v0_alpha2.reagent.core.partial = (function mranderson047$reagent$v0v8v0_alpha2$reagent$core$partial(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27050 = arguments.length;
var i__4500__auto___27051 = (0);
while(true){
if((i__4500__auto___27051 < len__4499__auto___27050)){
args__4502__auto__.push((arguments[i__4500__auto___27051]));

var G__27052 = (i__4500__auto___27051 + (1));
i__4500__auto___27051 = G__27052;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return mranderson047.reagent.v0v8v0_alpha2.reagent.core.partial.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

mranderson047.reagent.v0v8v0_alpha2.reagent.core.partial.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return mranderson047.reagent.v0v8v0_alpha2.reagent.impl.util.make_partial_fn(f,args);
});

mranderson047.reagent.v0v8v0_alpha2.reagent.core.partial.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mranderson047.reagent.v0v8v0_alpha2.reagent.core.partial.cljs$lang$applyTo = (function (seq27048){
var G__27049 = cljs.core.first(seq27048);
var seq27048__$1 = cljs.core.next(seq27048);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27049,seq27048__$1);
});

mranderson047.reagent.v0v8v0_alpha2.reagent.core.component_path = (function mranderson047$reagent$v0v8v0_alpha2$reagent$core$component_path(c){
return mranderson047.reagent.v0v8v0_alpha2.reagent.impl.component.component_path(c);
});

//# sourceMappingURL=mranderson047.reagent.v0v8v0_alpha2.reagent.core.js.map
