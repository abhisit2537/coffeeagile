webpackJsonp([1],{

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageModule", function() { return CartPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart__ = __webpack_require__(282);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



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

/***/ 280:
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

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_model_cart_model__ = __webpack_require__(280);
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
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CartPage = (function () {
    function CartPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cart = new __WEBPACK_IMPORTED_MODULE_2__assets_model_cart_model__["a" /* CartModel */]();
    }
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
            selector: 'page-cart',template:/*ion-inline-start:"D:\projectTraningServer\coffeeagile\src\pages\cart\cart.html"*/'<!--\n\n  Generated template for the CartPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>ตระกร้าสินค้า</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item *ngFor="let item of cart.items; let i = index;">\n\n      <ion-thumbnail item-start>\n\n        <img src="{{ item.image }}">\n\n      </ion-thumbnail>\n\n      <h2>{{item.name}}</h2>\n\n      <h2>Size: {{item.size}}</h2>\n\n      <p>ราคา {{item.amount}}฿</p>\n\n      <button ion-button icon-only class="btn-size" (click)="add(item)">\n\n        <ion-icon name="add"></ion-icon>\n\n      </button>\n\n      <button ion-button clear class="btn-size">\n\n        {{item.qty}}\n\n      </button>\n\n      <button ion-button icon-only class="btn-size" (click)="remove(item)">\n\n        <ion-icon name="remove"></ion-icon>\n\n      </button>\n\n\n\n      <button ion-button icon-only item-end color="danger" class="btn-size" (click)="delete(i)">\n\n        <ion-icon name="trash"></ion-icon>\n\n      </button>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <!-- <ion-title>Footer</ion-title> -->\n\n    <button [disabled]="cart.amount === 0" ion-button block large (click)="goToConfirm()">ยืนยัน ({{cart.amount}}฿)</button>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"D:\projectTraningServer\coffeeagile\src\pages\cart\cart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], CartPage);
    return CartPage;
}());

//# sourceMappingURL=cart.js.map

/***/ })

});
//# sourceMappingURL=1.js.map