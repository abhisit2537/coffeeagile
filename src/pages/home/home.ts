import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  coffee: string = 'hot';
  constructor(public navCtrl: NavController) {

  }

  goToCart() {
    this.navCtrl.push('CartPage');
  }

  goToConfirm() {
    this.navCtrl.push('ConfirmPage');
  }

}
