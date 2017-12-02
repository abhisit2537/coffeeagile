import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductModel } from '../../assets/model/product.model';

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
  productList: Array<ProductModel> = [];
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.productList = JSON.parse(window.localStorage.getItem('coffeeCart'));
    console.log(this.productList);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }

}
