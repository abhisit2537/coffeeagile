webpackJsonp([0],{

<<<<<<< HEAD
/***/ 277:
=======
/***/ 276:
>>>>>>> 3cddf08a11f69efb5135c728a8a34aa0d2f234c8
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmPageModule", function() { return ConfirmPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcome__ = __webpack_require__(281);
=======
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirm__ = __webpack_require__(281);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcome__ = __webpack_require__(284);
>>>>>>> 43261a99f1c534af1b3e3c44b2f3f3d63f619e71
>>>>>>> 3cddf08a11f69efb5135c728a8a34aa0d2f234c8
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ConfirmPageModule = (function () {
    function ConfirmPageModule() {
    }
    ConfirmPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__confirm__["a" /* ConfirmPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__confirm__["a" /* ConfirmPage */]),
            ],
        })
    ], ConfirmPageModule);
    return ConfirmPageModule;
}());

//# sourceMappingURL=confirm.module.js.map

/***/ }),

<<<<<<< HEAD
/***/ 281:
=======
<<<<<<< HEAD
/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartModel; });
/* unused harmony export ItemModel */
var CartModel = (function () {
    function CartModel() {
    }
    return CartModel;
}());

var ItemModel = (function () {
    function ItemModel() {
    }
    return ItemModel;
}());

//# sourceMappingURL=cart.model.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_model_cart_model__ = __webpack_require__(279);
=======
/***/ 284:
>>>>>>> 3cddf08a11f69efb5135c728a8a34aa0d2f234c8
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(49);
<<<<<<< HEAD
=======
>>>>>>> 43261a99f1c534af1b3e3c44b2f3f3d63f619e71
>>>>>>> 3cddf08a11f69efb5135c728a8a34aa0d2f234c8
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ConfirmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConfirmPage = (function () {
    function ConfirmPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.order = new __WEBPACK_IMPORTED_MODULE_2__assets_model_cart_model__["a" /* CartModel */]();
    }
    ConfirmPage.prototype.ionViewWillEnter = function () {
        this.order = this.navParams.data;
    };
<<<<<<< HEAD
    ConfirmPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-confirm',template:/*ion-inline-start:"D:\C@NET\agile\coffeeagile\src\pages\confirm\confirm.html"*/'<!--\n\n  Generated template for the ConfirmPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>สรุปรายการสั่งซื้อ</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n\n\n    <ion-item *ngFor="let item of order.items">\n\n      <ion-thumbnail item-start>\n\n        <img src="{{item.image}}">\n\n      </ion-thumbnail>\n\n      <h2>{{item.name}}</h2>\n\n      <h2>Size: {{item.size}}</h2>\n\n      <h2>จำนวน: {{item.qty}}</h2>\n\n      <p>ราคา {{item.amount}}฿</p>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-item>\n\n    รวมราคา :\n\n    <p item-end>{{order.amount}}</p>\n\n  </ion-item>\n\n  <button ion-button block>ยืนยันการสั่งซื้อ</button>\n\n</ion-footer>\n\n'/*ion-inline-end:"D:\C@NET\agile\coffeeagile\src\pages\confirm\confirm.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object])
    ], ConfirmPage);
    return ConfirmPage;
    var _a, _b;
=======
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-welcome',template:/*ion-inline-start:"D:\projectTraningServer\coffeeagile\src\pages\welcome\welcome.html"*/'<!--\n\n  Generated template for the WelcomePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!-- <ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>welcome</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header> -->\n\n\n\n\n\n<ion-content padding>\n\n  <ion-content padding>\n\n    <img src="../../assets/imgs/welcome.jpg" class = "img">\n\n    </ion-content>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\projectTraningServer\coffeeagile\src\pages\welcome\welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavParams */]])
    ], WelcomePage);
    return WelcomePage;
<<<<<<< HEAD
=======
>>>>>>> 43261a99f1c534af1b3e3c44b2f3f3d63f619e71
>>>>>>> 3cddf08a11f69efb5135c728a8a34aa0d2f234c8
}());

//# sourceMappingURL=confirm.js.map

/***/ })

});
//# sourceMappingURL=0.js.map