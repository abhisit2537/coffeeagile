import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartModel } from '../../assets/model/cart.model';

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  cart: CartModel = new CartModel();
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillEnter() {
    this.cart.items = JSON.parse(window.localStorage.getItem('coffeeCart'));
    this.onCalculate();
    console.log(this.cart);
  }

  add(item) {
    item.qty++;
    this.saveCartItem();
    this.onCalculate();
  }

  remove(item) {
    if (item.qty > 1) {
      item.qty--;
    }
    this.saveCartItem();
    this.onCalculate();
  }

  delete(index) {
    this.cart.items.splice(index, 1);
    this.saveCartItem();
    this.onCalculate();
  }

  saveCartItem() {
    window.localStorage.setItem('coffeeCart', JSON.stringify(this.cart.items));
  }

  onCalculate() {
    this.cart.amount = 0;
    this.cart.items.forEach((e) => {
      e.amount = e.qty * e.price;
      this.cart.amount += e.amount;
    });
  }

  goToConfirm() {
    this.navCtrl.push('ConfirmPage', this.cart);
  }

}
