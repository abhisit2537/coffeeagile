<<<<<<< HEAD
webpackJsonp([0],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\abhis\Desktop\coffeeagile\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Ionic Blank\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  The world is your oyster.\n\n  <p>\n\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.\n\n  </p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\abhis\Desktop\coffeeagile\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(219);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\abhis\Desktop\coffeeagile\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\abhis\Desktop\coffeeagile\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[195]);
//# sourceMappingURL=main.js.map
=======
webpackJsonp([2],{123:function(n,l){function a(n){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+n+"'.")})}a.keys=function(){return[]},a.resolve=a,n.exports=a,a.id=123},157:function(n,l,a){function u(n){var l=o[n];return l?a.e(l[1]).then(function(){return a(l[0])}):Promise.reject(new Error("Cannot find module '"+n+"'."))}var o={"../pages/cart/cart.module.ngfactory":[232,1],"../pages/confirm/confirm.module.ngfactory":[233,0]};u.keys=function(){return Object.keys(o)},u.id=157,n.exports=u},196:function(n,l,a){"use strict";function u(n){return e._19(0,[(n()(),e.Z(0,0,null,null,2,"ion-nav",[],null,null,null,j.b,j.a)),e._15(6144,null,v.a,null,[P.a]),e.Y(2,4374528,null,0,P.a,[[2,w.a],[2,Z.a],Y.a,z.a,T.a,e.j,e.u,e.z,e.i,M.l,O.a,[2,q.a],F.a,e.k],{root:[0,"root"]},null),(n()(),e._18(-1,null,["\n"]))],function(n,l){n(l,2,0,l.component.rootPage)},null)}function o(n){return e._19(0,[(n()(),e.Z(0,0,null,null,10,"ion-header",[],null,null,null,null,null)),e.Y(1,16384,null,0,D.a,[z.a,e.j,e.z,[2,w.a]],null,null),(n()(),e._18(-1,null,["\n  "])),(n()(),e.Z(3,0,null,null,6,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,E.b,E.a)),e.Y(4,49152,null,0,G.a,[Y.a,[2,w.a],[2,Z.a],z.a,e.j,e.z],null,null),(n()(),e._18(-1,3,["\n    "])),(n()(),e.Z(6,0,null,3,2,"ion-title",[],null,null,null,H.b,H.a)),e.Y(7,49152,null,0,I.a,[z.a,e.j,e.z,[2,N.a],[2,G.a]],null,null),(n()(),e._18(-1,0,["\n      Ionic Blank\n    "])),(n()(),e._18(-1,3,["\n  "])),(n()(),e._18(-1,null,["\n"])),(n()(),e._18(-1,null,["\n\n"])),(n()(),e.Z(12,0,null,null,16,"ion-content",[["padding",""]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,V.b,V.a)),e.Y(13,4374528,null,0,X.a,[z.a,T.a,F.a,e.j,e.z,Y.a,J.a,e.u,[2,w.a],[2,Z.a]],null,null),(n()(),e._18(-1,1,["\n  The world is your oyster.\n  "])),(n()(),e.Z(15,0,null,1,4,"p",[],null,null,null,null,null)),(n()(),e._18(-1,null,["\n    If you get lost, the "])),(n()(),e.Z(17,0,null,null,1,"a",[["href","http://ionicframework.com/docs/v2"]],null,null,null,null,null)),(n()(),e._18(-1,null,["docs"])),(n()(),e._18(-1,null,[" will be your guide.\n  "])),(n()(),e._18(-1,1,["\n"])),(n()(),e.Z(21,0,null,1,2,"button",[["block",""],["ion-button",""]],null,[[null,"click"]],function(n,l,a){var u=!0;if("click"===l){u=!1!==n.component.goToCart()&&u}return u},R.b,R.a)),e.Y(22,1097728,null,0,S.a,[[8,""],z.a,e.j,e.z],{block:[0,"block"]},null),(n()(),e._18(-1,0,["Cart"])),(n()(),e._18(-1,1,["\n"])),(n()(),e.Z(25,0,null,1,2,"button",[["block",""],["ion-button",""]],null,[[null,"click"]],function(n,l,a){var u=!0;if("click"===l){u=!1!==n.component.goToConfirm()&&u}return u},R.b,R.a)),e.Y(26,1097728,null,0,S.a,[[8,""],z.a,e.j,e.z],{block:[0,"block"]},null),(n()(),e._18(-1,0,["Confirm"])),(n()(),e._18(-1,1,["\n"])),(n()(),e._18(-1,null,["\n"]))],function(n,l){n(l,22,0,"");n(l,26,0,"")},function(n,l){n(l,3,0,e._13(l,4)._hidden,e._13(l,4)._sbPadding);n(l,12,0,e._13(l,13).statusbarPadding,e._13(l,13)._hasRefresher)})}Object.defineProperty(l,"__esModule",{value:!0});var t=a(32),e=a(0),r=(a(5),a(71),a(69)),i=a(70),_=function(){function n(n){this.navCtrl=n}return n.prototype.goToCart=function(){this.navCtrl.push("CartPage")},n.prototype.goToConfirm=function(){this.navCtrl.push("ConfirmPage")},n}(),c=function(){return function(n,l,a){this.rootPage=_,n.ready().then(function(){l.styleDefault(),a.hide()})}}(),f=function(){return function(){}}(),s=a(44),d=a(184),b=a(185),m=a(186),g=a(187),p=a(188),h=a(189),y=a(190),k=a(191),C=a(192),j=a(231),v=a(35),P=a(50),w=a(4),Z=a(17),Y=a(8),z=a(1),T=a(3),M=a(7),O=a(29),q=a(14),F=a(9),x=e.X({encapsulation:2,styles:[],data:{}}),B=e.V("ng-component",c,function(n){return e._19(0,[(n()(),e.Z(0,0,null,null,1,"ng-component",[],null,null,null,u,x)),e.Y(1,49152,null,0,c,[T.a,i.a,r.a],null,null)],null,null)},{},{},[]),D=a(72),E=a(193),G=a(25),H=a(194),I=a(52),N=a(38),V=a(195),X=a(21),J=a(24),R=a(36),S=a(19),W=e.X({encapsulation:2,styles:[],data:{}}),A=e.V("page-home",_,function(n){return e._19(0,[(n()(),e.Z(0,0,null,null,1,"page-home",[],null,null,null,o,W)),e.Y(1,49152,null,0,_,[Z.a],null,null)],null,null)},{},{},[]),K=a(13),L=a(92),Q=a(18),U=a(81),$=a(83),nn=a(91),ln=a(16),an=a(31),un=a(89),on=a(112),tn=a(46),en=a(37),rn=a(96),_n=a(57),cn=a(100),fn=a(94),sn=a(108),dn=a(182),bn=a(93),mn=a(27),gn=a(90),pn=a(95),hn=e.W(f,[s.b],function(n){return e._10([e._11(512,e.i,e.S,[[8,[d.a,b.a,m.a,g.a,p.a,h.a,y.a,k.a,C.a,B,A]],[3,e.i],e.s]),e._11(5120,e.r,e._9,[[3,e.r]]),e._11(4608,K.k,K.j,[e.r,[2,K.s]]),e._11(5120,e.b,e._0,[]),e._11(5120,e.p,e._6,[]),e._11(5120,e.q,e._7,[]),e._11(4608,t.c,t.q,[K.c]),e._11(6144,e.D,null,[t.c]),e._11(4608,t.f,L.a,[]),e._11(5120,t.d,function(n,l,a,u,o){return[new t.k(n,l),new t.o(a),new t.n(u,o)]},[K.c,e.u,K.c,K.c,t.f]),e._11(4608,t.e,t.e,[t.d,e.u]),e._11(135680,t.m,t.m,[K.c]),e._11(4608,t.l,t.l,[t.e,t.m]),e._11(6144,e.B,null,[t.l]),e._11(6144,t.p,null,[t.m]),e._11(4608,e.G,e.G,[e.u]),e._11(4608,t.h,t.h,[K.c]),e._11(4608,t.i,t.i,[K.c]),e._11(4608,Q.k,Q.k,[]),e._11(4608,Q.c,Q.c,[]),e._11(4608,U.a,U.a,[Y.a,z.a]),e._11(4608,$.a,$.a,[Y.a,z.a]),e._11(4608,nn.a,nn.a,[]),e._11(4608,ln.a,ln.a,[]),e._11(4608,an.a,an.a,[T.a]),e._11(4608,J.a,J.a,[z.a,T.a,e.u,F.a]),e._11(4608,un.a,un.a,[Y.a,z.a]),e._11(5120,K.f,on.c,[K.q,[2,K.a],z.a]),e._11(4608,K.e,K.e,[K.f]),e._11(5120,tn.b,tn.d,[Y.a,tn.a]),e._11(5120,q.a,q.b,[Y.a,tn.b,K.e,en.b,e.i]),e._11(4608,rn.a,rn.a,[Y.a,z.a,q.a]),e._11(4608,_n.a,_n.a,[Y.a,z.a]),e._11(4608,cn.a,cn.a,[Y.a,z.a,q.a]),e._11(4608,fn.a,fn.a,[z.a,T.a,F.a,Y.a,M.l]),e._11(4608,sn.a,sn.a,[Y.a,z.a]),e._11(4608,O.a,O.a,[T.a,z.a]),e._11(4608,i.a,i.a,[]),e._11(4608,r.a,r.a,[]),e._11(512,K.b,K.b,[]),e._11(512,e.k,dn.a,[]),e._11(256,z.b,{},[]),e._11(1024,bn.a,bn.b,[]),e._11(1024,T.a,T.b,[t.b,bn.a,e.u]),e._11(1024,z.a,z.c,[z.b,T.a]),e._11(512,F.a,F.a,[T.a]),e._11(512,mn.a,mn.a,[]),e._11(512,Y.a,Y.a,[z.a,T.a,[2,mn.a]]),e._11(512,M.l,M.l,[Y.a]),e._11(256,tn.a,{links:[{loadChildren:"../pages/cart/cart.module.ngfactory#CartPageModuleNgFactory",name:"CartPage",segment:"cart",priority:"low",defaultHistory:[]},{loadChildren:"../pages/confirm/confirm.module.ngfactory#ConfirmPageModuleNgFactory",name:"ConfirmPage",segment:"confirm",priority:"low",defaultHistory:[]}]},[]),e._11(512,e.h,e.h,[]),e._11(512,gn.a,gn.a,[e.h]),e._11(1024,en.b,en.c,[gn.a,e.o]),e._11(1024,e.c,function(n,l,a,u,o,e,r,i,_,c,f,s,d){return[t.s(n),pn.a(l),nn.b(a,u),fn.b(o,e,r,i,_),en.d(c,f,s,d)]},[[2,e.t],z.a,T.a,F.a,z.a,T.a,F.a,Y.a,M.l,z.a,tn.a,en.b,e.u]),e._11(512,e.d,e.d,[[2,e.c]]),e._11(131584,e.f,e.f,[e.u,e.T,e.o,e.k,e.i,e.d]),e._11(512,e.e,e.e,[e.f]),e._11(512,t.a,t.a,[[3,t.a]]),e._11(512,Q.j,Q.j,[]),e._11(512,Q.d,Q.d,[]),e._11(512,Q.i,Q.i,[]),e._11(512,on.a,on.a,[]),e._11(512,f,f,[]),e._11(256,s.a,c,[]),e._11(256,K.a,"/",[])])});Object(e.M)(),Object(t.j)().bootstrapModuleFactory(hn)}},[196]);
>>>>>>> 4437ea2f09712aa0de9686399ca21f7ea2b27db2
