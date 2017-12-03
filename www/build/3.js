webpackJsonp([3],{

<<<<<<< HEAD
/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageModule", function() { return CartPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart__ = __webpack_require__(279);
=======
<<<<<<< HEAD
/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankyouPageModule", function() { return ThankyouPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__thankyou__ = __webpack_require__(282);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ThankyouPageModule = (function () {
    function ThankyouPageModule() {
    }
    ThankyouPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__thankyou__["a" /* ThankyouPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__thankyou__["a" /* ThankyouPage */]),
            ],
        })
    ], ThankyouPageModule);
    return ThankyouPageModule;
}());

//# sourceMappingURL=thankyou.module.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThankyouPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(49);
=======
/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmPageModule", function() { return ConfirmPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirm__ = __webpack_require__(281);
>>>>>>> 43261a99f1c534af1b3e3c44b2f3f3d63f619e71
>>>>>>> 3cddf08a11f69efb5135c728a8a34aa0d2f234c8
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



<<<<<<< HEAD
var CartPageModule = (function () {
    function CartPageModule() {
    }
    CartPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cart__["a" /* CartPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cart__["a" /* CartPage */]),
            ],
        })
    ], CartPageModule);
    return CartPageModule;
}());

//# sourceMappingURL=cart.module.js.map
=======
var ConfirmPageModule = (function () {
    function ConfirmPageModule() {
    }
<<<<<<< HEAD
    ThankyouPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        setTimeout(function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
        }, 3000);
        console.log('ionViewDidLoad ThankyouPage');
    };
    ThankyouPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-thankyou',template:/*ion-inline-start:"D:\C@NET\agile\coffeeagile\src\pages\thankyou\thankyou.html"*/'<!--\n\n  Generated template for the ThankyouPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!-- <ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>thankyou</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header> -->\n\n\n\n\n\n<ion-content padding>\n\n<img src="../../assets/imgs/thankyou.jpg" class = "img">\n\n</ion-content>\n\n'/*ion-inline-end:"D:\C@NET\agile\coffeeagile\src\pages\thankyou\thankyou.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavParams */]])
    ], ThankyouPage);
    return ThankyouPage;
=======
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
>>>>>>> 43261a99f1c534af1b3e3c44b2f3f3d63f619e71
}());

//# sourceMappingURL=confirm.module.js.map
>>>>>>> 3cddf08a11f69efb5135c728a8a34aa0d2f234c8

<<<<<<< HEAD
=======
/***/ }),

<<<<<<< HEAD
/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
=======
/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmPage; });
>>>>>>> 3cddf08a11f69efb5135c728a8a34aa0d2f234c8
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
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
<<<<<<< HEAD
 * Generated class for the CartPage page.
=======
 * Generated class for the ConfirmPage page.
>>>>>>> 3cddf08a11f69efb5135c728a8a34aa0d2f234c8
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
<<<<<<< HEAD
var CartPage = (function () {
    function CartPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.productList = [];
        this.productList = JSON.parse(window.localStorage.getItem('coffeeCart'));
        console.log(this.productList);
    }
    CartPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CartPage');
    };
    CartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cart',template:/*ion-inline-start:"C:\Users\abhis\Desktop\coffeeagile\src\pages\cart\cart.html"*/'<!--\n\n  Generated template for the CartPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>cart</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item *ngFor="let item of productList">\n\n      <ion-thumbnail item-start>\n\n        <img src="img/thumbnail-totoro.png">\n\n      </ion-thumbnail>\n\n      <h2>{{item.name}}</h2>\n\n      <h2>Size: {{item.size}}</h2>\n\n      <h2>จำนวน: {{item.qty}}</h2>\n\n      <p>ราคา {{item.amount}}</p>\n\n      <button ion-button icon-only class="btn-size">\n\n        <ion-icon name="add"></ion-icon>\n\n      </button>\n\n      <button ion-button clear class="btn-size">\n\n        1\n\n      </button>\n\n      <button ion-button icon-only class="btn-size">\n\n        <ion-icon name="remove"></ion-icon>\n\n      </button>\n\n\n\n      <button ion-button icon-only item-end color="danger" class="btn-size">\n\n        <ion-icon name="trash"></ion-icon>\n\n      </button>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\abhis\Desktop\coffeeagile\src\pages\cart\cart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], CartPage);
    return CartPage;
}());

//# sourceMappingURL=cart.js.map
=======
var ConfirmPage = (function () {
    function ConfirmPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ConfirmPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConfirmPage');
    };
    ConfirmPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-confirm',template:/*ion-inline-start:"D:\projectTraningServer\coffeeagile\src\pages\confirm\confirm.html"*/'<!--\n\n  Generated template for the ConfirmPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>สรุปรายการสั่งซื้อ</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n        \n\n            <ion-item>\n\n              <ion-thumbnail item-start>\n\n                <img src="assets/img/thumbnail-totoro.png">\n\n              </ion-thumbnail>\n\n              <h2 class="paddinglft">ชื่อสินค้า : </h2>\n\n              <p class="paddinglft">ไซต์ : </p>\n\n              <p class="paddinglft">จำนวน :</p>\n\n              <p class="paddinglft">ราคา : </p>\n\n              \n\n            </ion-item>\n\n        \n\n            <ion-item>\n\n              <ion-thumbnail item-start>\n\n                <img src="assets/img/thumbnail-rotla.png">\n\n              </ion-thumbnail>\n\n              <h2 class="paddinglft">ชื่อสินค้า : </h2>\n\n              <p class="paddinglft">ไซต์ : </p>\n\n              <p class="paddinglft">จำนวน :</p>\n\n              <p class="paddinglft">ราคา : </p>\n\n              \n\n            </ion-item>\n\n        \n\n            <ion-item>\n\n              <ion-thumbnail item-start>\n\n                <img src="assets/img/thumbnail-ghostbusters.png">\n\n              </ion-thumbnail>\n\n              <h2 class="paddinglft">ชื่อสินค้า : </h2>\n\n              <p class="paddinglft">ไซต์ :  </p>\n\n              <p class="paddinglft">จำนวน :</p>\n\n              <p class="paddinglft">ราคา : </p> \n\n        \n\n              \n\n            </ion-item>\n\n        \n\n          </ion-list>\n\n\n\n</ion-content>\n\n<ion-footer>\n\n    <ion-item>\n\n        รวมราคา :  \n\n        <p item-end >บาท</p>\n\n      </ion-item>\n\n    <button ion-button block >Confirm Orders</button>\n\n</ion-footer>\n\n'/*ion-inline-end:"D:\projectTraningServer\coffeeagile\src\pages\confirm\confirm.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ConfirmPage);
    return ConfirmPage;
}());

//# sourceMappingURL=confirm.js.map
>>>>>>> 3cddf08a11f69efb5135c728a8a34aa0d2f234c8

>>>>>>> 43261a99f1c534af1b3e3c44b2f3f3d63f619e71
/***/ })

});
//# sourceMappingURL=3.js.map