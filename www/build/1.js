webpackJsonp([1],{

<<<<<<< HEAD
/***/ 275:
=======
/***/ 278:
>>>>>>> 43261a99f1c534af1b3e3c44b2f3f3d63f619e71
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
<<<<<<< HEAD
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageModule", function() { return CartPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart__ = __webpack_require__(280);
=======
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankyouPageModule", function() { return ThankyouPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__thankyou__ = __webpack_require__(283);
>>>>>>> 43261a99f1c534af1b3e3c44b2f3f3d63f619e71
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

/***/ }),

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
=======
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
>>>>>>> 43261a99f1c534af1b3e3c44b2f3f3d63f619e71

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< HEAD
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_model_cart_model__ = __webpack_require__(279);
=======
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThankyouPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(49);
>>>>>>> 43261a99f1c534af1b3e3c44b2f3f3d63f619e71
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
 * Generated class for the ThankyouPage page.
>>>>>>> 43261a99f1c534af1b3e3c44b2f3f3d63f619e71
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
<<<<<<< HEAD
var CartPage = (function () {
    function CartPage(navCtrl, navParams) {
=======
var ThankyouPage = (function () {
    function ThankyouPage(navCtrl, navParams) {
>>>>>>> 43261a99f1c534af1b3e3c44b2f3f3d63f619e71
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cart = new __WEBPACK_IMPORTED_MODULE_2__assets_model_cart_model__["a" /* CartModel */]();
    }
<<<<<<< HEAD
    CartPage.prototype.ionViewWillEnter = function () {
        this.cart.items = JSON.parse(window.localStorage.getItem('coffeeCart'));
        this.onCalculate();
        console.log(this.cart);
    };
    CartPage.prototype.add = function (item) {
        item.qty++;
        this.saveCartItem();
        this.onCalculate();
    };
    CartPage.prototype.remove = function (item) {
        if (item.qty > 1) {
            item.qty--;
        }
        this.saveCartItem();
        this.onCalculate();
    };
    CartPage.prototype.delete = function (index) {
        this.cart.items.splice(index, 1);
        this.saveCartItem();
        this.onCalculate();
    };
    CartPage.prototype.saveCartItem = function () {
        window.localStorage.setItem('coffeeCart', JSON.stringify(this.cart.items));
    };
    CartPage.prototype.onCalculate = function () {
        var _this = this;
        this.cart.amount = 0;
        this.cart.items.forEach(function (e) {
            e.amount = e.qty * e.price;
            _this.cart.amount += e.amount;
        });
    };
    CartPage.prototype.goToConfirm = function () {
        this.navCtrl.push('ConfirmPage', this.cart);
    };
    CartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cart',template:/*ion-inline-start:"D:\C@NET\agile\coffeeagile\src\pages\cart\cart.html"*/'<!--\n  Generated template for the CartPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>ตระกร้าสินค้า</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor="let item of cart.items; let i = index;">\n      <ion-thumbnail item-start>\n        <img src="{{ item.image }}">\n      </ion-thumbnail>\n      <h2>{{item.name}}</h2>\n      <h2>Size: {{item.size}}</h2>\n      <p>ราคา {{item.amount}}฿</p>\n      <button ion-button icon-only class="btn-size" (click)="add(item)">\n        <ion-icon name="add"></ion-icon>\n      </button>\n      <button ion-button clear class="btn-size">\n        {{item.qty}}\n      </button>\n      <button ion-button icon-only class="btn-size" (click)="remove(item)">\n        <ion-icon name="remove"></ion-icon>\n      </button>\n\n      <button ion-button icon-only item-end color="danger" class="btn-size" (click)="delete(i)">\n        <ion-icon name="trash"></ion-icon>\n      </button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <!-- <ion-title>Footer</ion-title> -->\n    <button [disabled]="cart.amount === 0" ion-button block large (click)="goToConfirm()">ยืนยัน ({{cart.amount}}฿)</button>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"D:\C@NET\agile\coffeeagile\src\pages\cart\cart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], CartPage);
    return CartPage;
}());

//# sourceMappingURL=cart.js.map
=======
    ThankyouPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        setTimeout(function () {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */]);
        }, 3000);
        console.log('ionViewDidLoad ThankyouPage');
    };
    ThankyouPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-thankyou',template:/*ion-inline-start:"D:\projectTraningServer\coffeeagile\src\pages\thankyou\thankyou.html"*/'<!--\n\n  Generated template for the ThankyouPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!-- <ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>thankyou</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header> -->\n\n\n\n\n\n<ion-content padding>\n\n<img src="../../assets/imgs/thankyou.jpg" class = "img">\n\n</ion-content>\n\n'/*ion-inline-end:"D:\projectTraningServer\coffeeagile\src\pages\thankyou\thankyou.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavParams */]])
    ], ThankyouPage);
    return ThankyouPage;
}());

//# sourceMappingURL=thankyou.js.map
>>>>>>> 43261a99f1c534af1b3e3c44b2f3f3d63f619e71

/***/ })

});
//# sourceMappingURL=1.js.map