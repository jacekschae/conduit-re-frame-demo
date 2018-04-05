goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__40772){
var map__40773 = p__40772;
var map__40773__$1 = ((((!((map__40773 == null)))?(((((map__40773.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40773.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40773):map__40773);
var m = map__40773__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40773__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40773__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__40779_40849 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__40780_40850 = null;
var count__40781_40851 = (0);
var i__40782_40852 = (0);
while(true){
if((i__40782_40852 < count__40781_40851)){
var f_40853 = chunk__40780_40850.cljs$core$IIndexed$_nth$arity$2(null,i__40782_40852);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_40853], 0));


var G__40855 = seq__40779_40849;
var G__40856 = chunk__40780_40850;
var G__40857 = count__40781_40851;
var G__40858 = (i__40782_40852 + (1));
seq__40779_40849 = G__40855;
chunk__40780_40850 = G__40856;
count__40781_40851 = G__40857;
i__40782_40852 = G__40858;
continue;
} else {
var temp__5457__auto___40864 = cljs.core.seq(seq__40779_40849);
if(temp__5457__auto___40864){
var seq__40779_40865__$1 = temp__5457__auto___40864;
if(cljs.core.chunked_seq_QMARK_(seq__40779_40865__$1)){
var c__4319__auto___40870 = cljs.core.chunk_first(seq__40779_40865__$1);
var G__40871 = cljs.core.chunk_rest(seq__40779_40865__$1);
var G__40872 = c__4319__auto___40870;
var G__40873 = cljs.core.count(c__4319__auto___40870);
var G__40874 = (0);
seq__40779_40849 = G__40871;
chunk__40780_40850 = G__40872;
count__40781_40851 = G__40873;
i__40782_40852 = G__40874;
continue;
} else {
var f_40875 = cljs.core.first(seq__40779_40865__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_40875], 0));


var G__40876 = cljs.core.next(seq__40779_40865__$1);
var G__40877 = null;
var G__40878 = (0);
var G__40879 = (0);
seq__40779_40849 = G__40876;
chunk__40780_40850 = G__40877;
count__40781_40851 = G__40878;
i__40782_40852 = G__40879;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_40884 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_40884], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_40884)))?cljs.core.second(arglists_40884):arglists_40884)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__40796_40898 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__40797_40899 = null;
var count__40798_40900 = (0);
var i__40799_40901 = (0);
while(true){
if((i__40799_40901 < count__40798_40900)){
var vec__40800_40906 = chunk__40797_40899.cljs$core$IIndexed$_nth$arity$2(null,i__40799_40901);
var name_40907 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40800_40906,(0),null);
var map__40803_40908 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40800_40906,(1),null);
var map__40803_40909__$1 = ((((!((map__40803_40908 == null)))?(((((map__40803_40908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40803_40908.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40803_40908):map__40803_40908);
var doc_40910 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40803_40909__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40911 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40803_40909__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_40907], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_40911], 0));

if(cljs.core.truth_(doc_40910)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_40910], 0));
} else {
}


var G__40922 = seq__40796_40898;
var G__40923 = chunk__40797_40899;
var G__40924 = count__40798_40900;
var G__40925 = (i__40799_40901 + (1));
seq__40796_40898 = G__40922;
chunk__40797_40899 = G__40923;
count__40798_40900 = G__40924;
i__40799_40901 = G__40925;
continue;
} else {
var temp__5457__auto___40926 = cljs.core.seq(seq__40796_40898);
if(temp__5457__auto___40926){
var seq__40796_40927__$1 = temp__5457__auto___40926;
if(cljs.core.chunked_seq_QMARK_(seq__40796_40927__$1)){
var c__4319__auto___40928 = cljs.core.chunk_first(seq__40796_40927__$1);
var G__40933 = cljs.core.chunk_rest(seq__40796_40927__$1);
var G__40934 = c__4319__auto___40928;
var G__40935 = cljs.core.count(c__4319__auto___40928);
var G__40936 = (0);
seq__40796_40898 = G__40933;
chunk__40797_40899 = G__40934;
count__40798_40900 = G__40935;
i__40799_40901 = G__40936;
continue;
} else {
var vec__40813_40937 = cljs.core.first(seq__40796_40927__$1);
var name_40938 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40813_40937,(0),null);
var map__40816_40939 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40813_40937,(1),null);
var map__40816_40940__$1 = ((((!((map__40816_40939 == null)))?(((((map__40816_40939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40816_40939.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40816_40939):map__40816_40939);
var doc_40941 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40816_40940__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40942 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40816_40940__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_40938], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_40942], 0));

if(cljs.core.truth_(doc_40941)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_40941], 0));
} else {
}


var G__40956 = cljs.core.next(seq__40796_40927__$1);
var G__40957 = null;
var G__40958 = (0);
var G__40959 = (0);
seq__40796_40898 = G__40956;
chunk__40797_40899 = G__40957;
count__40798_40900 = G__40958;
i__40799_40901 = G__40959;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n))].join(''),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__40823 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__40824 = null;
var count__40825 = (0);
var i__40826 = (0);
while(true){
if((i__40826 < count__40825)){
var role = chunk__40824.cljs$core$IIndexed$_nth$arity$2(null,i__40826);
var temp__5457__auto___40966__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___40966__$1)){
var spec_40968 = temp__5457__auto___40966__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_40968)], 0));
} else {
}


var G__40969 = seq__40823;
var G__40970 = chunk__40824;
var G__40971 = count__40825;
var G__40972 = (i__40826 + (1));
seq__40823 = G__40969;
chunk__40824 = G__40970;
count__40825 = G__40971;
i__40826 = G__40972;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq(seq__40823);
if(temp__5457__auto____$1){
var seq__40823__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__40823__$1)){
var c__4319__auto__ = cljs.core.chunk_first(seq__40823__$1);
var G__40977 = cljs.core.chunk_rest(seq__40823__$1);
var G__40978 = c__4319__auto__;
var G__40979 = cljs.core.count(c__4319__auto__);
var G__40980 = (0);
seq__40823 = G__40977;
chunk__40824 = G__40978;
count__40825 = G__40979;
i__40826 = G__40980;
continue;
} else {
var role = cljs.core.first(seq__40823__$1);
var temp__5457__auto___40981__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5457__auto___40981__$2)){
var spec_40982 = temp__5457__auto___40981__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role)),":"].join(''),cljs.spec.alpha.describe(spec_40982)], 0));
} else {
}


var G__40983 = cljs.core.next(seq__40823__$1);
var G__40984 = null;
var G__40985 = (0);
var G__40986 = (0);
seq__40823 = G__40983;
chunk__40824 = G__40984;
count__40825 = G__40985;
i__40826 = G__40986;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=cljs.repl.js.map
