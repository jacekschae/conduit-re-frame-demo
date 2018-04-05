goog.provide('day8.re_frame_10x.subs');
goog.require('cljs.core');
goog.require('mranderson047.re_frame.v0v10v2.re_frame.core');
goog.require('day8.re_frame_10x.metamorphic');
goog.require('day8.re_frame_10x.utils.utils');
goog.require('clojure.string');
goog.require('cljs.spec.alpha');
goog.require('zprint.core');
var G__30418_30420 = new cljs.core.Keyword("settings","root","settings/root",-1329120290);
var G__30419_30421 = ((function (G__30418_30420){
return (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"settings","settings",1556144875));
});})(G__30418_30420))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30418_30420,G__30419_30421) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__30418_30420,G__30419_30421));
var G__30422_30426 = new cljs.core.Keyword("settings","panel-width%","settings/panel-width%",-1897072808);
var G__30423_30427 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__30424_30428 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__30425_30429 = ((function (G__30422_30426,G__30423_30427,G__30424_30428){
return (function (settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"panel-width%","panel-width%",-110515341));
});})(G__30422_30426,G__30423_30427,G__30424_30428))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__30422_30426,G__30423_30427,G__30424_30428,G__30425_30429) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__30422_30426,G__30423_30427,G__30424_30428,G__30425_30429));
var G__30430_30434 = new cljs.core.Keyword("settings","show-panel?","settings/show-panel?",-194286945);
var G__30431_30435 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__30432_30436 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__30433_30437 = ((function (G__30430_30434,G__30431_30435,G__30432_30436){
return (function (settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"show-panel?","show-panel?",1475128892));
});})(G__30430_30434,G__30431_30435,G__30432_30436))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__30430_30434,G__30431_30435,G__30432_30436,G__30433_30437) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__30430_30434,G__30431_30435,G__30432_30436,G__30433_30437));
var G__30438_30442 = new cljs.core.Keyword("settings","selected-tab","settings/selected-tab",-124010089);
var G__30439_30443 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__30440_30444 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__30441_30445 = ((function (G__30438_30442,G__30439_30443,G__30440_30444){
return (function (settings,_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"showing-settings?","showing-settings?",-140540878).cljs$core$IFn$_invoke$arity$1(settings))){
return new cljs.core.Keyword(null,"settings","settings",1556144875);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156));
}
});})(G__30438_30442,G__30439_30443,G__30440_30444))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__30438_30442,G__30439_30443,G__30440_30444,G__30441_30445) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__30438_30442,G__30439_30443,G__30440_30444,G__30441_30445));
var G__30446_30450 = new cljs.core.Keyword("settings","paused?","settings/paused?",611315548);
var G__30447_30451 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__30448_30452 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__30449_30453 = ((function (G__30446_30450,G__30447_30451,G__30448_30452){
return (function (settings,_){
return new cljs.core.Keyword(null,"paused?","paused?",-135058553).cljs$core$IFn$_invoke$arity$1(settings);
});})(G__30446_30450,G__30447_30451,G__30448_30452))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__30446_30450,G__30447_30451,G__30448_30452,G__30449_30453) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__30446_30450,G__30447_30451,G__30448_30452,G__30449_30453));
var G__30454_30458 = new cljs.core.Keyword("settings","number-of-retained-epochs","settings/number-of-retained-epochs",347300150);
var G__30455_30459 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__30456_30460 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__30457_30461 = ((function (G__30454_30458,G__30455_30459,G__30456_30460){
return (function (settings){
return new cljs.core.Keyword(null,"number-of-epochs","number-of-epochs",57769252).cljs$core$IFn$_invoke$arity$1(settings);
});})(G__30454_30458,G__30455_30459,G__30456_30460))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__30454_30458,G__30455_30459,G__30456_30460,G__30457_30461) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__30454_30458,G__30455_30459,G__30456_30460,G__30457_30461));
var G__30462_30466 = new cljs.core.Keyword("settings","ignored-events","settings/ignored-events",1377799632);
var G__30463_30467 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__30464_30468 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__30465_30469 = ((function (G__30462_30466,G__30463_30467,G__30464_30468){
return (function (settings){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sort","sort",953465918),cljs.core.vals(new cljs.core.Keyword(null,"ignored-events","ignored-events",1738756589).cljs$core$IFn$_invoke$arity$1(settings)));
});})(G__30462_30466,G__30463_30467,G__30464_30468))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__30462_30466,G__30463_30467,G__30464_30468,G__30465_30469) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__30462_30466,G__30463_30467,G__30464_30468,G__30465_30469));
var G__30473_30477 = new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350);
var G__30474_30478 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__30475_30479 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__30476_30480 = ((function (G__30473_30477,G__30474_30478,G__30475_30479){
return (function (settings){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sort","sort",953465918),cljs.core.vals(new cljs.core.Keyword(null,"filtered-view-trace","filtered-view-trace",-901876599).cljs$core$IFn$_invoke$arity$1(settings)));
});})(G__30473_30477,G__30474_30478,G__30475_30479))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__30473_30477,G__30474_30478,G__30475_30479,G__30476_30480) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__30473_30477,G__30474_30478,G__30475_30479,G__30476_30480));
var G__30481_30485 = new cljs.core.Keyword("settings","low-level-trace","settings/low-level-trace",191054289);
var G__30482_30486 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__30483_30487 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__30484_30488 = ((function (G__30481_30485,G__30482_30486,G__30483_30487){
return (function (settings){
return new cljs.core.Keyword(null,"low-level-trace","low-level-trace",638447092).cljs$core$IFn$_invoke$arity$1(settings);
});})(G__30481_30485,G__30482_30486,G__30483_30487))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__30481_30485,G__30482_30486,G__30483_30487,G__30484_30488) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__30481_30485,G__30482_30486,G__30483_30487,G__30484_30488));
var G__30490_30494 = new cljs.core.Keyword("settings","debug?","settings/debug?",-128490920);
var G__30491_30495 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__30492_30496 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__30493_30497 = ((function (G__30490_30494,G__30491_30495,G__30492_30496){
return (function (settings){
return new cljs.core.Keyword(null,"debug?","debug?",-1831756173).cljs$core$IFn$_invoke$arity$1(settings);
});})(G__30490_30494,G__30491_30495,G__30492_30496))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__30490_30494,G__30491_30495,G__30492_30496,G__30493_30497) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__30490_30494,G__30491_30495,G__30492_30496,G__30493_30497));
var G__30499_30503 = new cljs.core.Keyword("settings","app-db-follows-events?","settings/app-db-follows-events?",-115495889);
var G__30500_30504 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__30501_30505 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__30502_30506 = ((function (G__30499_30503,G__30500_30504,G__30501_30505){
return (function (settings){
return new cljs.core.Keyword(null,"app-db-follows-events?","app-db-follows-events?",-1566738462).cljs$core$IFn$_invoke$arity$1(settings);
});})(G__30499_30503,G__30500_30504,G__30501_30505))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__30499_30503,G__30500_30504,G__30501_30505,G__30502_30506) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__30499_30503,G__30500_30504,G__30501_30505,G__30502_30506));
var G__30507_30509 = new cljs.core.Keyword("app-db","root","app-db/root",-1721368731);
var G__30508_30510 = ((function (G__30507_30509){
return (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"app-db","app-db",865606302));
});})(G__30507_30509))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30507_30509,G__30508_30510) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__30507_30509,G__30508_30510));
var G__30511_30515 = new cljs.core.Keyword("app-db","current-epoch-app-db-after","app-db/current-epoch-app-db-after",-1412128095);
var G__30512_30516 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__30513_30517 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null);
var G__30514_30518 = ((function (G__30511_30515,G__30512_30516,G__30513_30517){
return (function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"app-db-after","app-db-after",1477492964)], null));
});})(G__30511_30515,G__30512_30516,G__30513_30517))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__30511_30515,G__30512_30516,G__30513_30517,G__30514_30518) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__30511_30515,G__30512_30516,G__30513_30517,G__30514_30518));
var G__30519_30523 = new cljs.core.Keyword("app-db","current-epoch-app-db-before","app-db/current-epoch-app-db-before",-615465288);
var G__30520_30524 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__30521_30525 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null);
var G__30522_30526 = ((function (G__30519_30523,G__30520_30524,G__30521_30525){
return (function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"app-db-before","app-db-before",-1442902645)], null));
});})(G__30519_30523,G__30520_30524,G__30521_30525))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__30519_30523,G__30520_30524,G__30521_30525,G__30522_30526) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__30519_30523,G__30520_30524,G__30521_30525,G__30522_30526));
var G__30529_30533 = new cljs.core.Keyword("app-db","paths","app-db/paths",-1600032730);
var G__30530_30534 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__30531_30535 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__30532_30536 = ((function (G__30529_30533,G__30530_30534,G__30531_30535){
return (function (app_db_settings,_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__30529_30533,G__30530_30534,G__30531_30535){
return (function (p1__30528_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.val(p1__30528_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.key(p1__30528_SHARP_));
});})(G__30529_30533,G__30530_30534,G__30531_30535))
,cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_db_settings,new cljs.core.Keyword(null,"paths","paths",-1807389588)));
});})(G__30529_30533,G__30530_30534,G__30531_30535))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__30529_30533,G__30530_30534,G__30531_30535,G__30532_30536) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__30529_30533,G__30530_30534,G__30531_30535,G__30532_30536));
var G__30543_30547 = new cljs.core.Keyword("app-db","search-string","app-db/search-string",939397656);
var G__30544_30548 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__30545_30549 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__30546_30550 = ((function (G__30543_30547,G__30544_30548,G__30545_30549){
return (function (app_db_settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_db_settings,new cljs.core.Keyword(null,"search-string","search-string",68818394));
});})(G__30543_30547,G__30544_30548,G__30545_30549))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__30543_30547,G__30544_30548,G__30545_30549,G__30546_30550) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__30543_30547,G__30544_30548,G__30545_30549,G__30546_30550));
var G__30551_30555 = new cljs.core.Keyword("app-db","expansions","app-db/expansions",-1814314845);
var G__30552_30556 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__30553_30557 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__30554_30558 = ((function (G__30551_30555,G__30552_30556,G__30553_30557){
return (function (app_db_settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_db_settings,new cljs.core.Keyword(null,"json-ml-expansions","json-ml-expansions",1112306261));
});})(G__30551_30555,G__30552_30556,G__30553_30557))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__30551_30555,G__30552_30556,G__30553_30557,G__30554_30558) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__30551_30555,G__30552_30556,G__30553_30557,G__30554_30558));
var G__30560_30568 = new cljs.core.Keyword("app-db","node-expanded?","app-db/node-expanded?",-1032853540);
var G__30561_30569 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__30562_30570 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","expansions","app-db/expansions",-1814314845)], null);
var G__30563_30571 = ((function (G__30560_30568,G__30561_30569,G__30562_30570){
return (function (expansions,p__30564){
var vec__30565 = p__30564;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30565,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30565,(1),null);
return cljs.core.contains_QMARK_(expansions,path);
});})(G__30560_30568,G__30561_30569,G__30562_30570))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__30560_30568,G__30561_30569,G__30562_30570,G__30563_30571) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__30560_30568,G__30561_30569,G__30562_30570,G__30563_30571));
var G__30577_30581 = new cljs.core.Keyword("app-db","reagent-id","app-db/reagent-id",916858371);
var G__30578_30582 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__30579_30583 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__30580_30584 = ((function (G__30577_30581,G__30578_30582,G__30579_30583){
return (function (root,_){
return new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415).cljs$core$IFn$_invoke$arity$1(root);
});})(G__30577_30581,G__30578_30582,G__30579_30583))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__30577_30581,G__30578_30582,G__30579_30583,G__30580_30584) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__30577_30581,G__30578_30582,G__30579_30583,G__30580_30584));
var G__30587_30590 = new cljs.core.Keyword("traces","trace-root","traces/trace-root",-1794329946);
var G__30588_30591 = ((function (G__30587_30590){
return (function (db,_){
return new cljs.core.Keyword(null,"traces","traces",-1301138004).cljs$core$IFn$_invoke$arity$1(db);
});})(G__30587_30590))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30587_30590,G__30588_30591) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__30587_30590,G__30588_30591));
var G__30593_30596 = new cljs.core.Keyword("trace-panel","root","trace-panel/root",974242647);
var G__30594_30597 = ((function (G__30593_30596){
return (function (db,_){
return new cljs.core.Keyword(null,"trace-panel","trace-panel",-645338665).cljs$core$IFn$_invoke$arity$1(db);
});})(G__30593_30596))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30593_30596,G__30594_30597) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__30593_30596,G__30594_30597));
var G__30599_30601 = new cljs.core.Keyword("traces","filter-items","traces/filter-items",977390347);
var G__30600_30602 = ((function (G__30599_30601){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"filter-items","filter-items",232493909)], null));
});})(G__30599_30601))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30599_30601,G__30600_30602) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__30599_30601,G__30600_30602));
var G__30603_30605 = new cljs.core.Keyword("traces","expansions","traces/expansions",1935277191);
var G__30604_30606 = ((function (G__30603_30605){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"expansions","expansions",533713877)], null));
});})(G__30603_30605))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30603_30605,G__30604_30606) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__30603_30605,G__30604_30606));
var G__30607_30609 = new cljs.core.Keyword("traces","categories","traces/categories",-821318016);
var G__30608_30610 = ((function (G__30607_30609){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"categories","categories",178386610)], null));
});})(G__30607_30609))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30607_30609,G__30608_30610) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__30607_30609,G__30608_30610));
var G__30611_30616 = new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523);
var G__30612_30617 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__30613_30618 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","trace-root","traces/trace-root",-1794329946)], null);
var G__30614_30619 = ((function (G__30611_30616,G__30612_30617,G__30613_30618){
return (function (traces,_){
return new cljs.core.Keyword(null,"all-traces","all-traces",-1494241641).cljs$core$IFn$_invoke$arity$1(traces);
});})(G__30611_30616,G__30612_30617,G__30613_30618))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__30611_30616,G__30612_30617,G__30613_30618,G__30614_30619) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__30611_30616,G__30612_30617,G__30613_30618,G__30614_30619));
var G__30622_30626 = new cljs.core.Keyword("traces","number-of-traces","traces/number-of-traces",-1195045241);
var G__30623_30627 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__30624_30628 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null);
var G__30625_30629 = ((function (G__30622_30626,G__30623_30627,G__30624_30628){
return (function (traces,_){
return cljs.core.count(traces);
});})(G__30622_30626,G__30623_30627,G__30624_30628))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__30622_30626,G__30623_30627,G__30624_30628,G__30625_30629) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__30622_30626,G__30623_30627,G__30624_30628,G__30625_30629));
var G__30630_30644 = new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769);
var G__30631_30645 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__30632_30646 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null);
var G__30633_30647 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__30634_30648 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","beginning-trace-id","epochs/beginning-trace-id",-1340593887)], null);
var G__30635_30649 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__30636_30650 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","ending-trace-id","epochs/ending-trace-id",-1920901579)], null);
var G__30637_30651 = ((function (G__30630_30644,G__30631_30645,G__30632_30646,G__30633_30647,G__30634_30648,G__30635_30649,G__30636_30650){
return (function (p__30639,_){
var vec__30640 = p__30639;
var traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30640,(0),null);
var beginning = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30640,(1),null);
var ending = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30640,(2),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,day8.re_frame_10x.utils.utils.id_between_xf(beginning,ending),traces);
});})(G__30630_30644,G__30631_30645,G__30632_30646,G__30633_30647,G__30634_30648,G__30635_30649,G__30636_30650))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$8 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$8(G__30630_30644,G__30631_30645,G__30632_30646,G__30633_30647,G__30634_30648,G__30635_30649,G__30636_30650,G__30637_30651) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__30630_30644,G__30631_30645,G__30632_30646,G__30633_30647,G__30634_30648,G__30635_30649,G__30636_30650,G__30637_30651));
day8.re_frame_10x.subs.filter_ignored_views = (function day8$re_frame_10x$subs$filter_ignored_views(p__30654,_){
var vec__30655 = p__30654;
var traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30655,(0),null);
var filtered_views = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30655,(1),null);
var munged_ns = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.munge,new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499)),filtered_views));
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(((function (munged_ns,vec__30655,traces,filtered_views){
return (function (trace){
var and__3911__auto__ = day8.re_frame_10x.metamorphic.render_QMARK_(trace);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.contains_QMARK_(munged_ns,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(trace),(0),clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(trace),".")));
} else {
return and__3911__auto__;
}
});})(munged_ns,vec__30655,traces,filtered_views))
),traces);
});
var G__30659_30665 = new cljs.core.Keyword("traces","current-event-visible-traces","traces/current-event-visible-traces",-133224585);
var G__30660_30666 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__30661_30667 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__30662_30668 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__30663_30669 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350)], null);
var G__30664_30670 = day8.re_frame_10x.subs.filter_ignored_views;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__30659_30665,G__30660_30666,G__30661_30667,G__30662_30668,G__30663_30669,G__30664_30670) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__30659_30665,G__30660_30666,G__30661_30667,G__30662_30668,G__30663_30669,G__30664_30670));
var G__30671_30677 = new cljs.core.Keyword("traces","all-visible-traces","traces/all-visible-traces",-1694272071);
var G__30672_30678 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__30673_30679 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null);
var G__30674_30680 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__30675_30681 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350)], null);
var G__30676_30682 = day8.re_frame_10x.subs.filter_ignored_views;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__30671_30677,G__30672_30678,G__30673_30679,G__30674_30680,G__30675_30681,G__30676_30682) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__30671_30677,G__30672_30678,G__30673_30679,G__30674_30680,G__30675_30681,G__30676_30682));
var G__30683_30687 = new cljs.core.Keyword("trace-panel","show-epoch-traces?","trace-panel/show-epoch-traces?",-826345951);
var G__30684_30688 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__30685_30689 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("trace-panel","root","trace-panel/root",974242647)], null);
var G__30686_30690 = ((function (G__30683_30687,G__30684_30688,G__30685_30689){
return (function (trace_root){
return new cljs.core.Keyword(null,"show-epoch-traces?","show-epoch-traces?",-2096255323).cljs$core$IFn$_invoke$arity$1(trace_root);
});})(G__30683_30687,G__30684_30688,G__30685_30689))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__30683_30687,G__30684_30688,G__30685_30689,G__30686_30690) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__30683_30687,G__30684_30688,G__30685_30689,G__30686_30690));
var G__30691_30693 = new cljs.core.Keyword("global","unloading?","global/unloading?",-351325001);
var G__30692_30694 = ((function (G__30691_30693){
return (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.Keyword(null,"unloading?","unloading?",621163286)], null));
});})(G__30691_30693))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30691_30693,G__30692_30694) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__30691_30693,G__30692_30694));
var G__30695_30697 = new cljs.core.Keyword("snapshot","snapshot-root","snapshot/snapshot-root",466086517);
var G__30696_30698 = ((function (G__30695_30697){
return (function (db,_){
return new cljs.core.Keyword(null,"snapshot","snapshot",-1274785710).cljs$core$IFn$_invoke$arity$1(db);
});})(G__30695_30697))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30695_30697,G__30696_30698) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__30695_30697,G__30696_30698));
var G__30699_30703 = new cljs.core.Keyword("snapshot","snapshot-ready?","snapshot/snapshot-ready?",-1152726072);
var G__30700_30704 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__30701_30705 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("snapshot","snapshot-root","snapshot/snapshot-root",466086517)], null);
var G__30702_30706 = ((function (G__30699_30703,G__30700_30704,G__30701_30705){
return (function (snapshot,_){
return cljs.core.contains_QMARK_(snapshot,new cljs.core.Keyword(null,"current-snapshot","current-snapshot",1368356222));
});})(G__30699_30703,G__30700_30704,G__30701_30705))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__30699_30703,G__30700_30704,G__30701_30705,G__30702_30706) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__30699_30703,G__30700_30704,G__30701_30705,G__30702_30706));
var G__30707_30709 = new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597);
var G__30708_30710 = ((function (G__30707_30709){
return (function (db,_){
return new cljs.core.Keyword(null,"epochs","epochs",1796936425).cljs$core$IFn$_invoke$arity$1(db);
});})(G__30707_30709))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30707_30709,G__30708_30710) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__30707_30709,G__30708_30710));
var G__30711_30721 = new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281);
var G__30712_30722 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__30713_30723 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__30714_30724 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__30715_30725 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null);
var G__30716_30726 = ((function (G__30711_30721,G__30712_30722,G__30713_30723,G__30714_30724,G__30715_30725){
return (function (p__30717,_){
var vec__30718 = p__30717;
var epochs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30718,(0),null);
var match_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30718,(1),null);
var current_id = new cljs.core.Keyword(null,"current-epoch-id","current-epoch-id",-1357591568).cljs$core$IFn$_invoke$arity$1(epochs);
var match = (((current_id == null))?cljs.core.last(new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):(((current_id < cljs.core.first(match_ids)))?cljs.core.first(new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):(((current_id > cljs.core.last(match_ids)))?cljs.core.last(new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"matches-by-id","matches-by-id",1749529562).cljs$core$IFn$_invoke$arity$1(epochs),current_id)
)));
return match;
});})(G__30711_30721,G__30712_30722,G__30713_30723,G__30714_30724,G__30715_30725))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__30711_30721,G__30712_30722,G__30713_30723,G__30714_30724,G__30715_30725,G__30716_30726) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__30711_30721,G__30712_30722,G__30713_30723,G__30714_30724,G__30715_30725,G__30716_30726));
var G__30727_30731 = new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087);
var G__30728_30732 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__30729_30733 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null);
var G__30730_30734 = ((function (G__30727_30731,G__30728_30732,G__30729_30733){
return (function (match_state,_){
return new cljs.core.Keyword(null,"match-info","match-info",666319879).cljs$core$IFn$_invoke$arity$1(match_state);
});})(G__30727_30731,G__30728_30732,G__30729_30733))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__30727_30731,G__30728_30732,G__30729_30733,G__30730_30734) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__30727_30731,G__30728_30732,G__30729_30733,G__30730_30734));
var G__30735_30739 = new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851);
var G__30736_30740 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__30737_30741 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__30738_30742 = ((function (G__30735_30739,G__30736_30740,G__30737_30741){
return (function (match,_){
return day8.re_frame_10x.metamorphic.matched_event(match);
});})(G__30735_30739,G__30736_30740,G__30737_30741))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__30735_30739,G__30736_30740,G__30737_30741,G__30738_30742) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__30735_30739,G__30736_30740,G__30737_30741,G__30738_30742));
var G__30743_30747 = new cljs.core.Keyword("epochs","current-event","epochs/current-event",10990104);
var G__30744_30748 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__30745_30749 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null);
var G__30746_30750 = ((function (G__30743_30747,G__30744_30748,G__30745_30749){
return (function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"event","event",301435442)], null));
});})(G__30743_30747,G__30744_30748,G__30745_30749))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__30743_30747,G__30744_30748,G__30745_30749,G__30746_30750) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__30743_30747,G__30744_30748,G__30745_30749,G__30746_30750));
var G__30751_30755 = new cljs.core.Keyword("epochs","number-of-matches","epochs/number-of-matches",1018247531);
var G__30752_30756 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__30753_30757 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__30754_30758 = ((function (G__30751_30755,G__30752_30756,G__30753_30757){
return (function (epochs,_){
return cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(epochs,new cljs.core.Keyword(null,"matches","matches",635497998)));
});})(G__30751_30755,G__30752_30756,G__30753_30757))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__30751_30755,G__30752_30756,G__30753_30757,G__30754_30758) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__30751_30755,G__30752_30756,G__30753_30757,G__30754_30758));
var G__30759_30763 = new cljs.core.Keyword("epochs","current-event-index","epochs/current-event-index",-2026503803);
var G__30760_30764 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__30761_30765 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__30762_30766 = ((function (G__30759_30763,G__30760_30764,G__30761_30765){
return (function (epochs,_){
return new cljs.core.Keyword(null,"current-epoch-index","current-epoch-index",-903378376).cljs$core$IFn$_invoke$arity$1(epochs);
});})(G__30759_30763,G__30760_30764,G__30761_30765))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__30759_30763,G__30760_30764,G__30761_30765,G__30762_30766) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__30759_30763,G__30760_30764,G__30761_30765,G__30762_30766));
var G__30767_30771 = new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682);
var G__30768_30772 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__30769_30773 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__30770_30774 = ((function (G__30767_30771,G__30768_30772,G__30769_30773){
return (function (epochs,_){
return new cljs.core.Keyword(null,"current-epoch-id","current-epoch-id",-1357591568).cljs$core$IFn$_invoke$arity$1(epochs);
});})(G__30767_30771,G__30768_30772,G__30769_30773))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__30767_30771,G__30768_30772,G__30769_30773,G__30770_30774) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__30767_30771,G__30768_30772,G__30769_30773,G__30770_30774));
var G__30775_30779 = new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057);
var G__30776_30780 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__30777_30781 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__30778_30782 = ((function (G__30775_30779,G__30776_30780,G__30777_30781){
return (function (epochs){
return new cljs.core.Keyword(null,"match-ids","match-ids",752973161).cljs$core$IFn$_invoke$arity$1(epochs);
});})(G__30775_30779,G__30776_30780,G__30777_30781))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__30775_30779,G__30776_30780,G__30777_30781,G__30778_30782) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__30775_30779,G__30776_30780,G__30777_30781,G__30778_30782));
var G__30783_30787 = new cljs.core.Keyword("epochs","beginning-trace-id","epochs/beginning-trace-id",-1340593887);
var G__30784_30788 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__30785_30789 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__30786_30790 = ((function (G__30783_30787,G__30784_30788,G__30785_30789){
return (function (match){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(match));
});})(G__30783_30787,G__30784_30788,G__30785_30789))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__30783_30787,G__30784_30788,G__30785_30789,G__30786_30790) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__30783_30787,G__30784_30788,G__30785_30789,G__30786_30790));
var G__30791_30795 = new cljs.core.Keyword("epochs","ending-trace-id","epochs/ending-trace-id",-1920901579);
var G__30792_30796 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__30793_30797 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__30794_30798 = ((function (G__30791_30795,G__30792_30796,G__30793_30797){
return (function (match){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.last(match));
});})(G__30791_30795,G__30792_30796,G__30793_30797))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__30791_30795,G__30792_30796,G__30793_30797,G__30794_30798) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__30791_30795,G__30792_30796,G__30793_30797,G__30794_30798));
var G__30799_30809 = new cljs.core.Keyword("epochs","older-epochs-available?","epochs/older-epochs-available?",366051335);
var G__30800_30810 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__30801_30811 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682)], null);
var G__30802_30812 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__30803_30813 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null);
var G__30804_30814 = ((function (G__30799_30809,G__30800_30810,G__30801_30811,G__30802_30812,G__30803_30813){
return (function (p__30805){
var vec__30806 = p__30805;
var current = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30806,(0),null);
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30806,(1),null);
return ((((1) < cljs.core.count(ids))) && ((((current == null)) || ((current > cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ids,(0)))))));
});})(G__30799_30809,G__30800_30810,G__30801_30811,G__30802_30812,G__30803_30813))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__30799_30809,G__30800_30810,G__30801_30811,G__30802_30812,G__30803_30813,G__30804_30814) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__30799_30809,G__30800_30810,G__30801_30811,G__30802_30812,G__30803_30813,G__30804_30814));
var G__30815_30825 = new cljs.core.Keyword("epochs","newer-epochs-available?","epochs/newer-epochs-available?",-1411103953);
var G__30816_30826 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__30817_30827 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682)], null);
var G__30818_30828 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__30819_30829 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null);
var G__30820_30830 = ((function (G__30815_30825,G__30816_30826,G__30817_30827,G__30818_30828,G__30819_30829){
return (function (p__30821){
var vec__30822 = p__30821;
var current = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30822,(0),null);
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30822,(1),null);
return ((((1) < cljs.core.count(ids))) && (!((current == null))) && ((current < day8.re_frame_10x.utils.utils.last_in_vec(ids))));
});})(G__30815_30825,G__30816_30826,G__30817_30827,G__30818_30828,G__30819_30829))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__30815_30825,G__30816_30826,G__30817_30827,G__30818_30828,G__30819_30829,G__30820_30830) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__30815_30825,G__30816_30826,G__30817_30827,G__30818_30828,G__30819_30829,G__30820_30830));
var G__30831_30835 = new cljs.core.Keyword("timing","total-epoch-time","timing/total-epoch-time",-912032018);
var G__30832_30836 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__30833_30837 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__30834_30838 = ((function (G__30831_30835,G__30832_30836,G__30833_30837){
return (function (traces){
var start_of_epoch = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(traces,(0));
var end_of_epoch = day8.re_frame_10x.utils.utils.last_in_vec(traces);
return day8.re_frame_10x.metamorphic.elapsed_time(start_of_epoch,end_of_epoch);
});})(G__30831_30835,G__30832_30836,G__30833_30837))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__30831_30835,G__30832_30836,G__30833_30837,G__30834_30838) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__30831_30835,G__30832_30836,G__30833_30837,G__30834_30838));
var G__30840_30844 = new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473);
var G__30841_30845 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__30842_30846 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__30843_30847 = ((function (G__30840_30844,G__30841_30845,G__30842_30846){
return (function (traces){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (G__30840_30844,G__30841_30845,G__30842_30846){
return (function (p1__30839_SHARP_){
var or__3922__auto__ = day8.re_frame_10x.metamorphic.request_animation_frame_QMARK_(p1__30839_SHARP_);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return day8.re_frame_10x.metamorphic.request_animation_frame_end_QMARK_(p1__30839_SHARP_);
}
});})(G__30840_30844,G__30841_30845,G__30842_30846))
,traces);
});})(G__30840_30844,G__30841_30845,G__30842_30846))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__30840_30844,G__30841_30845,G__30842_30846,G__30843_30847) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__30840_30844,G__30841_30845,G__30842_30846,G__30843_30847));
var G__30848_30852 = new cljs.core.Keyword("timing","animation-frame-count","timing/animation-frame-count",-281075152);
var G__30849_30853 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__30850_30854 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473)], null);
var G__30851_30855 = ((function (G__30848_30852,G__30849_30853,G__30850_30854){
return (function (frame_traces){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.request_animation_frame_QMARK_,frame_traces));
});})(G__30848_30852,G__30849_30853,G__30850_30854))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__30848_30852,G__30849_30853,G__30850_30854,G__30851_30855) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__30848_30852,G__30849_30853,G__30850_30854,G__30851_30855));
/**
 * Returns the sum of nums. (+) returns nil (not 0 like in cljs.core).
 */
day8.re_frame_10x.subs._PLUS_nil = (function day8$re_frame_10x$subs$_PLUS_nil(var_args){
var G__30860 = arguments.length;
switch (G__30860) {
case 0:
return day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___30862 = arguments.length;
var i__4500__auto___30863 = (0);
while(true){
if((i__4500__auto___30863 < len__4499__auto___30862)){
args_arr__4514__auto__.push((arguments[i__4500__auto___30863]));

var G__30864 = (i__4500__auto___30863 + (1));
i__4500__auto___30863 = G__30864;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((2)),(0),null));
return day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4515__auto__);

}
});

day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
});

day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
});

day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return (x + y);
});

day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(x + y),more);
});

/** @this {Function} */
day8.re_frame_10x.subs._PLUS_nil.cljs$lang$applyTo = (function (seq30857){
var G__30858 = cljs.core.first(seq30857);
var seq30857__$1 = cljs.core.next(seq30857);
var G__30859 = cljs.core.first(seq30857__$1);
var seq30857__$2 = cljs.core.next(seq30857__$1);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30858,G__30859,seq30857__$2);
});

day8.re_frame_10x.subs._PLUS_nil.cljs$lang$maxFixedArity = (2);

var G__30865_30882 = new cljs.core.Keyword("timing","animation-frame-time","timing/animation-frame-time",1905393593);
var G__30866_30883 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__30867_30884 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473)], null);
var G__30868_30885 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__30869_30886 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__30870_30887 = ((function (G__30865_30882,G__30866_30883,G__30867_30884,G__30868_30885,G__30869_30886){
return (function (p__30871,p__30872){
var vec__30873 = p__30871;
var af_start_end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30873,(0),null);
var epoch_traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30873,(1),null);
var vec__30876 = p__30872;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30876,(0),null);
var frame_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30876,(1),null);
var frame_pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),af_start_end);
var vec__30879 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(frame_pairs,(frame_number - (1)));
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30879,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30879,(1),null);
var af_traces = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,day8.re_frame_10x.metamorphic.id_between_xf(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(start),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(end)),epoch_traces);
var total_time = day8.re_frame_10x.metamorphic.elapsed_time(start,end);
var subs_time = cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.metamorphic.subscription_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"duration","duration",1444101068))),day8.re_frame_10x.subs._PLUS_nil,af_traces);
var render_time = cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.metamorphic.render_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"duration","duration",1444101068))),day8.re_frame_10x.subs._PLUS_nil,af_traces);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("timing","animation-frame-total","timing/animation-frame-total",-1923627693),total_time,new cljs.core.Keyword("timing","animation-frame-subs","timing/animation-frame-subs",128098226),subs_time,new cljs.core.Keyword("timing","animation-frame-render","timing/animation-frame-render",1587090151),render_time,new cljs.core.Keyword("timing","animation-frame-misc","timing/animation-frame-misc",1250948573),((total_time - subs_time) - render_time)], null);
});})(G__30865_30882,G__30866_30883,G__30867_30884,G__30868_30885,G__30869_30886))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__30865_30882,G__30866_30883,G__30867_30884,G__30868_30885,G__30869_30886,G__30870_30887) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__30865_30882,G__30866_30883,G__30867_30884,G__30868_30885,G__30869_30886,G__30870_30887));
var G__30888_30894 = new cljs.core.Keyword("timing","event-processing-time","timing/event-processing-time",-178806297);
var G__30889_30895 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__30890_30896 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null);
var G__30891_30897 = ((function (G__30888_30894,G__30889_30895,G__30890_30896){
return (function (match){
var map__30892 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(match,new cljs.core.Keyword(null,"timing","timing",-1849225195));
var map__30892__$1 = ((((!((map__30892 == null)))?(((((map__30892.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30892.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30892):map__30892);
var event_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30892__$1,new cljs.core.Keyword("re-frame","event-time","re-frame/event-time",-1349372188));
var event_handler_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30892__$1,new cljs.core.Keyword("re-frame","event-handler-time","re-frame/event-handler-time",1278050644));
var event_dofx_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30892__$1,new cljs.core.Keyword("re-frame","event-dofx-time","re-frame/event-dofx-time",650880716));
var event_run_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30892__$1,new cljs.core.Keyword("re-frame","event-run-time","re-frame/event-run-time",1941554897));
var remaining_interceptors = ((event_time - event_handler_time) - event_dofx_time);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("timing","event-total","timing/event-total",127009054),event_run_time,new cljs.core.Keyword("timing","event-handler","timing/event-handler",383979787),event_handler_time,new cljs.core.Keyword("timing","event-effects","timing/event-effects",-1312815404),event_dofx_time,new cljs.core.Keyword("timing","event-interceptors","timing/event-interceptors",-113832767),remaining_interceptors,new cljs.core.Keyword("timing","event-misc","timing/event-misc",1534165210),((event_run_time - event_handler_time) - event_dofx_time)], null);
});})(G__30888_30894,G__30889_30895,G__30890_30896))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__30888_30894,G__30889_30895,G__30890_30896,G__30891_30897) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__30888_30894,G__30889_30895,G__30890_30896,G__30891_30897));
var G__30900_30906 = new cljs.core.Keyword("timing","render-time","timing/render-time",-2042272059);
var G__30901_30907 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__30902_30908 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__30903_30909 = ((function (G__30900_30906,G__30901_30907,G__30902_30908){
return (function (traces){
var start_of_render = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.request_animation_frame_QMARK_,traces));
var end_of_epoch = day8.re_frame_10x.utils.utils.last_in_vec(traces);
return day8.re_frame_10x.metamorphic.elapsed_time(start_of_render,end_of_epoch);
});})(G__30900_30906,G__30901_30907,G__30902_30908))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__30900_30906,G__30901_30907,G__30902_30908,G__30903_30909) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__30900_30906,G__30901_30907,G__30902_30908,G__30903_30909));
var G__30912_30916 = new cljs.core.Keyword("timing","data-available?","timing/data-available?",544526662);
var G__30913_30917 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__30914_30918 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__30915_30919 = ((function (G__30912_30916,G__30913_30917,G__30914_30918){
return (function (traces){
return !(cljs.core.empty_QMARK_(traces));
});})(G__30912_30916,G__30913_30917,G__30914_30918))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__30912_30916,G__30913_30917,G__30914_30918,G__30915_30919) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__30912_30916,G__30913_30917,G__30914_30918,G__30915_30919));
var G__30924_30926 = new cljs.core.Keyword("subs","root","subs/root",-432796018);
var G__30925_30927 = ((function (G__30924_30926){
return (function (db,_){
return new cljs.core.Keyword(null,"subs","subs",-186681991).cljs$core$IFn$_invoke$arity$1(db);
});})(G__30924_30926))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30924_30926,G__30925_30927) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__30924_30926,G__30925_30927));
var G__30931_30938 = new cljs.core.Keyword("subs","all-sub-traces","subs/all-sub-traces",1860573308);
var G__30932_30939 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__30933_30940 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__30934_30941 = ((function (G__30931_30938,G__30932_30939,G__30933_30940){
return (function (traces){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.subscription_QMARK_,traces);
});})(G__30931_30938,G__30932_30939,G__30933_30940))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__30931_30938,G__30932_30939,G__30933_30940,G__30934_30941) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__30931_30938,G__30932_30939,G__30933_30940,G__30934_30941));
var G__30945_30951 = new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687);
var G__30946_30952 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__30947_30953 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__30948_30954 = ((function (G__30945_30951,G__30946_30952,G__30947_30953){
return (function (epoch){
return new cljs.core.Keyword(null,"subscription-info","subscription-info",-1785424092).cljs$core$IFn$_invoke$arity$1(epoch);
});})(G__30945_30951,G__30946_30952,G__30947_30953))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__30945_30951,G__30946_30952,G__30947_30953,G__30948_30954) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__30945_30951,G__30946_30952,G__30947_30953,G__30948_30954));
var G__30955_30959 = new cljs.core.Keyword("subs","sub-state","subs/sub-state",-2134091240);
var G__30956_30960 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__30957_30961 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__30958_30962 = ((function (G__30955_30959,G__30956_30960,G__30957_30961){
return (function (epochs){
return new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981).cljs$core$IFn$_invoke$arity$1(epochs);
});})(G__30955_30959,G__30956_30960,G__30957_30961))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__30955_30959,G__30956_30960,G__30957_30961,G__30958_30962) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__30955_30959,G__30956_30960,G__30957_30961,G__30958_30962));
var G__30963_30967 = new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884);
var G__30964_30968 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__30965_30969 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null);
var G__30966_30970 = ((function (G__30963_30967,G__30964_30968,G__30965_30969){
return (function (match_state){
return new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981).cljs$core$IFn$_invoke$arity$1(match_state);
});})(G__30963_30967,G__30964_30968,G__30965_30969))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__30963_30967,G__30964_30968,G__30965_30969,G__30966_30970) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__30963_30967,G__30964_30968,G__30965_30969,G__30966_30970));
day8.re_frame_10x.subs.string_BANG_ = cljs.spec.alpha.and_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),new cljs.core.Symbol(null,"%","%",-950237169,null))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,(function (p1__30971_SHARP_){
return !(cljs.core.empty_QMARK_(p1__30971_SHARP_));
})], null),null);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Symbol("day8.re-frame-10x.subs","string!","day8.re-frame-10x.subs/string!",1827585601,null),day8.re_frame_10x.subs.string_BANG_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Symbol("day8.re-frame-10x.subs","string!","day8.re-frame-10x.subs/string!",1827585601,null),day8.re_frame_10x.subs.string_BANG_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("sub","run","sub/run",-1821315581),null,new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),null,new cljs.core.Keyword("sub","create","sub/create",-1301317560),null,new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("sub","run","sub/run",-1821315581),null,new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),null,new cljs.core.Keyword("sub","create","sub/create",-1301317560),null,new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),null], null), null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","order","sub/order",-1254825160),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164))),cljs.spec.alpha.nilable_impl(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__30972){
return cljs.core.coll_QMARK_(G__30972);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164))], null),null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null)),cljs.spec.alpha.nilable_impl(new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null),cljs.core.pos_int_QMARK_,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","path","sub/path",-188044288),new cljs.core.Symbol("day8.re-frame-10x.subs","string!","day8.re-frame-10x.subs/string!",1827585601,null),day8.re_frame_10x.subs.string_BANG_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null),null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__30973){
return cljs.core.map_QMARK_(G__30973);
}),(function (G__30973){
return cljs.core.contains_QMARK_(G__30973,new cljs.core.Keyword(null,"id","id",-1388402092));
}),(function (G__30973){
return cljs.core.contains_QMARK_(G__30973,new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415));
}),(function (G__30973){
return cljs.core.contains_QMARK_(G__30973,new cljs.core.Keyword(null,"order","order",-1254677256));
}),(function (G__30973){
return cljs.core.contains_QMARK_(G__30973,new cljs.core.Keyword(null,"layer","layer",-1601820589));
}),(function (G__30973){
return cljs.core.contains_QMARK_(G__30973,new cljs.core.Keyword(null,"path-data","path-data",1441254047));
}),(function (G__30973){
return cljs.core.contains_QMARK_(G__30973,new cljs.core.Keyword(null,"path","path",-188191168));
})], null),(function (G__30973){
return ((cljs.core.map_QMARK_(G__30973)) && (cljs.core.contains_QMARK_(G__30973,new cljs.core.Keyword(null,"id","id",-1388402092))) && (cljs.core.contains_QMARK_(G__30973,new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415))) && (cljs.core.contains_QMARK_(G__30973,new cljs.core.Keyword(null,"order","order",-1254677256))) && (cljs.core.contains_QMARK_(G__30973,new cljs.core.Keyword(null,"layer","layer",-1601820589))) && (cljs.core.contains_QMARK_(G__30973,new cljs.core.Keyword(null,"path-data","path-data",1441254047))) && (cljs.core.contains_QMARK_(G__30973,new cljs.core.Keyword(null,"path","path",-188191168))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"path-data","path-data",1441254047),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"id","id",-1388402092))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"order","order",-1254677256))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"layer","layer",-1601820589))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"path-data","path-data",1441254047))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"path","path",-188191168)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("subs","view-subs","subs/view-subs",253084832),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__30974){
return cljs.core.coll_QMARK_(G__30974);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057))], null),null));
day8.re_frame_10x.subs.sub_type_value = (function day8$re_frame_10x$subs$sub_type_value(sub_type){
var G__30975 = sub_type;
var G__30975__$1 = (((G__30975 instanceof cljs.core.Keyword))?G__30975.fqn:null);
switch (G__30975__$1) {
case "sub/create":
return (5);

break;
case "sub/run":
return (4);

break;
case "sub/dispose":
return (3);

break;
case "sub/not-run":
return (2);

break;
default:
return (1);

}
});
/**
 * Calculate a sorting value for a series of subscription trace types.
 */
day8.re_frame_10x.subs.accumulate_sub_value = (function day8$re_frame_10x$subs$accumulate_sub_value(order){
var exp = (3);
var total = (0);
var order__$1 = order;
while(true){
var temp__5455__auto__ = cljs.core.first(order__$1);
if(cljs.core.truth_(temp__5455__auto__)){
var sub_type = temp__5455__auto__;
var G__30977 = (exp - (1));
var G__30978 = (total + (day8.re_frame_10x.subs.sub_type_value(sub_type) * Math.pow((10),exp)));
var G__30979 = cljs.core.rest(order__$1);
exp = G__30977;
total = G__30978;
order__$1 = G__30979;
continue;
} else {
return total;
}
break;
}
});
day8.re_frame_10x.subs.accumulate_sub_value_memoized = cljs.core.memoize(day8.re_frame_10x.subs.accumulate_sub_value);
day8.re_frame_10x.subs.sub_sort_val = (function day8$re_frame_10x$subs$sub_sort_val(order_x,order_y){
return cljs.core.compare((day8.re_frame_10x.subs.accumulate_sub_value_memoized.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.subs.accumulate_sub_value_memoized.cljs$core$IFn$_invoke$arity$1(order_y) : day8.re_frame_10x.subs.accumulate_sub_value_memoized.call(null,order_y)),(day8.re_frame_10x.subs.accumulate_sub_value_memoized.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.subs.accumulate_sub_value_memoized.cljs$core$IFn$_invoke$arity$1(order_x) : day8.re_frame_10x.subs.accumulate_sub_value_memoized.call(null,order_x)));
});
day8.re_frame_10x.subs.sub_op_type__GT_type = (function day8$re_frame_10x$subs$sub_op_type__GT_type(t){
var G__30980 = new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(t);
var G__30980__$1 = (((G__30980 instanceof cljs.core.Keyword))?G__30980.fqn:null);
switch (G__30980__$1) {
case "sub/create":
return new cljs.core.Keyword(null,"created","created",-704993748);

break;
case "sub/run":
return new cljs.core.Keyword(null,"re-run","re-run",-1300247905);

break;
case "sub/dispose":
return new cljs.core.Keyword(null,"destroyed","destroyed",-427566535);

break;
default:
return new cljs.core.Keyword(null,"not-run","not-run",-848069371);

}
});
/**
 * Returns sub info prepared for rendering in pods
 */
day8.re_frame_10x.subs.prepare_pod_info = (function day8$re_frame_10x$subs$prepare_pod_info(p__30988,p__30989){
var vec__30990 = p__30988;
var sub_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30990,(0),null);
var sub_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30990,(1),null);
var vec__30993 = p__30989;
var subscription = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30993,(0),null);
var remove_fn = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(subscription,new cljs.core.Keyword("subs","intra-epoch-subs","subs/intra-epoch-subs",-1298574944)))?((function (vec__30990,sub_info,sub_state,vec__30993,subscription){
return (function (me){
return (new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(cljs.core.val(me)) == null);
});})(vec__30990,sub_info,sub_state,vec__30993,subscription))
:cljs.core.constantly(false));
var subx = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"order","order",-1254677256),day8.re_frame_10x.subs.sub_sort_val,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (remove_fn,vec__30990,sub_info,sub_state,vec__30993,subscription){
return (function (me){
var state = cljs.core.val(me);
var subscription__$1 = new cljs.core.Keyword(null,"subscription","subscription",1949009182).cljs$core$IFn$_invoke$arity$1(state);
var sub = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.key(me),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415),cljs.core.key(me),new cljs.core.Keyword(null,"layer","layer",-1601820589),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(sub_info,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(subscription__$1),new cljs.core.Keyword(null,"layer","layer",-1601820589)], null)),new cljs.core.Keyword(null,"path-data","path-data",1441254047),subscription__$1,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([subscription__$1], 0)),new cljs.core.Keyword(null,"order","order",-1254677256),(function (){var or__3922__auto__ = new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451)], null);
}
})(),new cljs.core.Keyword("sub","traits","sub/traits",1778340671),new cljs.core.Keyword("sub","traits","sub/traits",1778340671).cljs$core$IFn$_invoke$arity$1(state)], null);
var sub__$1 = ((cljs.core.contains_QMARK_(state,new cljs.core.Keyword(null,"value","value",305978217)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sub,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(state)):sub);
var sub__$2 = ((cljs.core.contains_QMARK_(state,new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sub__$1,new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677),new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677).cljs$core$IFn$_invoke$arity$1(state)):sub__$1);
return sub__$2;
});})(remove_fn,vec__30990,sub_info,sub_state,vec__30993,subscription))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(remove_fn,sub_state)));
return subx;
});
var G__31021_31026 = new cljs.core.Keyword("subs","pre-epoch-state","subs/pre-epoch-state",836844033);
var G__31022_31027 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__31023_31028 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884)], null);
var G__31024_31029 = ((function (G__31021_31026,G__31022_31027,G__31023_31028){
return (function (sub_state){
return new cljs.core.Keyword(null,"pre-epoch-state","pre-epoch-state",834094164).cljs$core$IFn$_invoke$arity$1(sub_state);
});})(G__31021_31026,G__31022_31027,G__31023_31028))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__31021_31026,G__31022_31027,G__31023_31028,G__31024_31029) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__31021_31026,G__31022_31027,G__31023_31028,G__31024_31029));
var G__31034_31039 = new cljs.core.Keyword("subs","reaction-state","subs/reaction-state",955533938);
var G__31035_31040 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__31036_31041 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884)], null);
var G__31037_31042 = ((function (G__31034_31039,G__31035_31040,G__31036_31041){
return (function (sub_state){
return new cljs.core.Keyword(null,"reaction-state","reaction-state",958292039).cljs$core$IFn$_invoke$arity$1(sub_state);
});})(G__31034_31039,G__31035_31040,G__31036_31041))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__31034_31039,G__31035_31040,G__31036_31041,G__31037_31042) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__31034_31039,G__31035_31040,G__31036_31041,G__31037_31042));
var G__31047_31053 = new cljs.core.Keyword("subs","intra-epoch-subs","subs/intra-epoch-subs",-1298574944);
var G__31048_31054 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__31049_31055 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687)], null);
var G__31050_31056 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__31051_31057 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","pre-epoch-state","subs/pre-epoch-state",836844033)], null);
var G__31052_31058 = day8.re_frame_10x.subs.prepare_pod_info;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__31047_31053,G__31048_31054,G__31049_31055,G__31050_31056,G__31051_31057,G__31052_31058) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__31047_31053,G__31048_31054,G__31049_31055,G__31050_31056,G__31051_31057,G__31052_31058));
var G__31064_31070 = new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325);
var G__31065_31071 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__31066_31072 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687)], null);
var G__31067_31073 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__31068_31074 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","reaction-state","subs/reaction-state",955533938)], null);
var G__31069_31075 = day8.re_frame_10x.subs.prepare_pod_info;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__31064_31070,G__31065_31071,G__31066_31072,G__31067_31073,G__31068_31074,G__31069_31075) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__31064_31070,G__31065_31071,G__31066_31072,G__31067_31073,G__31068_31074,G__31069_31075));
var G__31078_31090 = new cljs.core.Keyword("subs","visible-subs","subs/visible-subs",-1536647862);
var G__31079_31091 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__31080_31092 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325)], null);
var G__31081_31093 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__31082_31094 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","ignore-unchanged-l2-subs?","subs/ignore-unchanged-l2-subs?",-1438622704)], null);
var G__31083_31095 = ((function (G__31078_31090,G__31079_31091,G__31080_31092,G__31081_31093,G__31082_31094){
return (function (p__31084){
var vec__31085 = p__31084;
var all_subs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31085,(0),null);
var ignore_unchanged_l2_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31085,(1),null);
if(cljs.core.truth_(ignore_unchanged_l2_QMARK_)){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.unchanged_l2_subscription_QMARK_,all_subs);
} else {
return all_subs;
}
});})(G__31078_31090,G__31079_31091,G__31080_31092,G__31081_31093,G__31082_31094))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__31078_31090,G__31079_31091,G__31080_31092,G__31081_31093,G__31082_31094,G__31083_31095) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__31078_31090,G__31079_31091,G__31080_31092,G__31081_31093,G__31082_31094,G__31083_31095));
var G__31104_31109 = new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284);
var G__31105_31110 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__31106_31111 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","visible-subs","subs/visible-subs",-1536647862)], null);
var G__31107_31112 = ((function (G__31104_31109,G__31105_31110,G__31106_31111){
return (function (subs,_){
return cljs.core.frequencies(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([subs], 0)));
});})(G__31104_31109,G__31105_31110,G__31106_31111))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__31104_31109,G__31105_31110,G__31106_31111,G__31107_31112) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__31104_31109,G__31105_31110,G__31106_31111,G__31107_31112));
var G__31115_31119 = new cljs.core.Keyword("subs","created-count","subs/created-count",-1738545579);
var G__31116_31120 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__31117_31121 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__31118_31122 = ((function (G__31115_31119,G__31116_31120,G__31117_31121){
return (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","create","sub/create",-1301317560),(0));
});})(G__31115_31119,G__31116_31120,G__31117_31121))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__31115_31119,G__31116_31120,G__31117_31121,G__31118_31122) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__31115_31119,G__31116_31120,G__31117_31121,G__31118_31122));
var G__31124_31128 = new cljs.core.Keyword("subs","re-run-count","subs/re-run-count",603750522);
var G__31125_31129 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__31126_31130 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__31127_31131 = ((function (G__31124_31128,G__31125_31129,G__31126_31130){
return (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","run","sub/run",-1821315581),(0));
});})(G__31124_31128,G__31125_31129,G__31126_31130))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__31124_31128,G__31125_31129,G__31126_31130,G__31127_31131) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__31124_31128,G__31125_31129,G__31126_31130,G__31127_31131));
var G__31137_31144 = new cljs.core.Keyword("subs","destroyed-count","subs/destroyed-count",-218890338);
var G__31138_31145 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__31139_31146 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__31140_31147 = ((function (G__31137_31144,G__31138_31145,G__31139_31146){
return (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),(0));
});})(G__31137_31144,G__31138_31145,G__31139_31146))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__31137_31144,G__31138_31145,G__31139_31146,G__31140_31147) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__31137_31144,G__31138_31145,G__31139_31146,G__31140_31147));
var G__31152_31156 = new cljs.core.Keyword("subs","not-run-count","subs/not-run-count",-133338676);
var G__31153_31157 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__31154_31158 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__31155_31159 = ((function (G__31152_31156,G__31153_31157,G__31154_31158){
return (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),(0));
});})(G__31152_31156,G__31153_31157,G__31154_31158))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__31152_31156,G__31153_31157,G__31154_31158,G__31155_31159) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__31152_31156,G__31153_31157,G__31154_31158,G__31155_31159));
var G__31161_31166 = new cljs.core.Keyword("subs","unchanged-l2-subs-count","subs/unchanged-l2-subs-count",-1997261328);
var G__31162_31167 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__31163_31168 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325)], null);
var G__31164_31169 = ((function (G__31161_31166,G__31162_31167,G__31163_31168){
return (function (subs){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.unchanged_l2_subscription_QMARK_,subs));
});})(G__31161_31166,G__31162_31167,G__31163_31168))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__31161_31166,G__31162_31167,G__31163_31168,G__31164_31169) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__31161_31166,G__31162_31167,G__31163_31168,G__31164_31169));
var G__31171_31182 = new cljs.core.Keyword("subs","ignore-unchanged-l2-subs?","subs/ignore-unchanged-l2-subs?",-1438622704);
var G__31172_31183 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__31173_31184 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__31174_31185 = ((function (G__31171_31182,G__31172_31183,G__31173_31184){
return (function (subs,_){
return new cljs.core.Keyword(null,"ignore-unchanged-subs?","ignore-unchanged-subs?",125806160).cljs$core$IFn$_invoke$arity$2(subs,true);
});})(G__31171_31182,G__31172_31183,G__31173_31184))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__31171_31182,G__31172_31183,G__31173_31184,G__31174_31185) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__31171_31182,G__31172_31183,G__31173_31184,G__31174_31185));
var G__31187_31191 = new cljs.core.Keyword("subs","sub-expansions","subs/sub-expansions",-547974030);
var G__31188_31192 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__31189_31193 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__31190_31194 = ((function (G__31187_31191,G__31188_31192,G__31189_31193){
return (function (subs,_){
return new cljs.core.Keyword(null,"expansions","expansions",533713877).cljs$core$IFn$_invoke$arity$1(subs);
});})(G__31187_31191,G__31188_31192,G__31189_31193))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__31187_31191,G__31188_31192,G__31189_31193,G__31190_31194) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__31187_31191,G__31188_31192,G__31189_31193,G__31190_31194));
var G__31199_31201 = new cljs.core.Keyword("code","root","code/root",-432838104);
var G__31200_31202 = ((function (G__31199_31201){
return (function (db,_){
return new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(db);
});})(G__31199_31201))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__31199_31201,G__31200_31202) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__31199_31201,G__31200_31202));
var G__31205_31209 = new cljs.core.Keyword("code","current-code","code/current-code",17389180);
var G__31206_31210 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__31207_31211 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__31208_31212 = ((function (G__31205_31209,G__31206_31210,G__31207_31211){
return (function (traces,_){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2(((function (G__31205_31209,G__31206_31210,G__31207_31211){
return (function (i,trace){
var temp__5461__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"code","code",1586293142)], null));
if((temp__5461__auto__ == null)){
return null;
} else {
var code = temp__5461__auto__;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),i,new cljs.core.Keyword(null,"title","title",636505583),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(trace)], 0)),new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.vec(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (code,temp__5461__auto__,G__31205_31209,G__31206_31210,G__31207_31211){
return (function (i__$1,code__$1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(code__$1,new cljs.core.Keyword(null,"id","id",-1388402092),i__$1);
});})(code,temp__5461__auto__,G__31205_31209,G__31206_31210,G__31207_31211))
,code)),new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"form","form",-1624062471)], null))], null);
}
});})(G__31205_31209,G__31206_31210,G__31207_31211))
,traces);
});})(G__31205_31209,G__31206_31210,G__31207_31211))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__31205_31209,G__31206_31210,G__31207_31211,G__31208_31212) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__31205_31209,G__31206_31210,G__31207_31211,G__31208_31212));
var G__31217_31228 = new cljs.core.Keyword("code","current-form","code/current-form",1888662531);
var G__31218_31229 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__31219_31230 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","current-code","code/current-code",17389180)], null);
var G__31220_31231 = ((function (G__31217_31228,G__31218_31229,G__31219_31230){
return (function (code,_){
return new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(cljs.core.first(code));
});})(G__31217_31228,G__31218_31229,G__31219_31230))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__31217_31228,G__31218_31229,G__31219_31230,G__31220_31231) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__31217_31228,G__31218_31229,G__31219_31230,G__31220_31231));
var G__31233_31237 = new cljs.core.Keyword("code","current-zprint-form","code/current-zprint-form",-1297458353);
var G__31234_31238 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__31235_31239 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","current-form","code/current-form",1888662531)], null);
var G__31236_31240 = ((function (G__31233_31237,G__31234_31238,G__31235_31239){
return (function (form,_){
return zprint.core.zprint_str(form);
});})(G__31233_31237,G__31234_31238,G__31235_31239))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__31233_31237,G__31234_31238,G__31235_31239,G__31236_31240) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__31233_31237,G__31234_31238,G__31235_31239,G__31236_31240));
var G__31242_31247 = new cljs.core.Keyword("code","code-open?","code/code-open?",1212488779);
var G__31243_31248 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__31244_31249 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__31245_31250 = ((function (G__31242_31247,G__31243_31248,G__31244_31249){
return (function (code,_){
return new cljs.core.Keyword(null,"code-open?","code-open?",1228336744).cljs$core$IFn$_invoke$arity$1(code);
});})(G__31242_31247,G__31243_31248,G__31244_31249))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__31242_31247,G__31243_31248,G__31244_31249,G__31245_31250) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__31242_31247,G__31243_31248,G__31244_31249,G__31245_31250));
var G__31253_31257 = new cljs.core.Keyword("code","highlighted-form","code/highlighted-form",-1258376614);
var G__31254_31258 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__31255_31259 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__31256_31260 = ((function (G__31253_31257,G__31254_31258,G__31255_31259){
return (function (code,_){
return new cljs.core.Keyword(null,"highlighted-form","highlighted-form",-1255288753).cljs$core$IFn$_invoke$arity$1(code);
});})(G__31253_31257,G__31254_31258,G__31255_31259))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__31253_31257,G__31254_31258,G__31255_31259,G__31256_31260) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__31253_31257,G__31254_31258,G__31255_31259,G__31256_31260));
var G__31263_31267 = new cljs.core.Keyword("code","scroll-pos","code/scroll-pos",286665124);
var G__31264_31268 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__31265_31269 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__31266_31270 = ((function (G__31263_31267,G__31264_31268,G__31265_31269){
return (function (code,_){
return new cljs.core.Keyword(null,"scroll-pos","scroll-pos",292123569).cljs$core$IFn$_invoke$arity$1(code);
});})(G__31263_31267,G__31264_31268,G__31265_31269))
;
(mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__31263_31267,G__31264_31268,G__31265_31269,G__31266_31270) : mranderson047.re_frame.v0v10v2.re_frame.core.reg_sub.call(null,G__31263_31267,G__31264_31268,G__31265_31269,G__31266_31270));

//# sourceMappingURL=day8.re_frame_10x.subs.js.map
