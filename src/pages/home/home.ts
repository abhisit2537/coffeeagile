import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductModel } from '../../assets/model/product.model';
import { ServiceProvider } from '../../providers/service/service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  coffee: string = 'hot';
  productList: Array<ProductModel> = [];
  items: Array<any> = [];
  constructor(
    public navCtrl: NavController,
    public serviceProvider: ServiceProvider
  ) {
    // this.serviceProvider.getProductData('hot').then((data) => {
    //   this.productList = data;
    // }, (err) => {
    //   console.log(err);
    // });
    this.productList.push({
      _id: '1',
      name: "Ice Cocoa",
      image: "www",
      size: [
        {
          name: "S",
          price: 40
        },
        {
          name: "M",
          price: 50
        },
        {
          name: "L",
          price: 60
        }
      ],
      category: "ice"
    });
  }

  getProduct() {
    // this.ServiceProvider
  }

  goToCart() {
    this.navCtrl.push('CartPage');
  }

  goToConfirm() {
    this.navCtrl.push('ConfirmPage');
  }

  getProductByCategory(cate) {
    console.log(cate);
  }

  addProduct(item, size) {
    if (this.items.length > 0) {
      let pSize = this.items.filter((e) => e.size === size.name);
      if (pSize.length === 0) {
        this.items.push({
          _id: item._id,
          image: item.image,
          name: item.name,
          size: size.name,
          price: size.price,
          qty: 1,
          amount: size.price
        });
        window.localStorage.setItem('coffeeCart', JSON.stringify(this.items));
        return;
      }

      let indexOfStevie = pSize.findIndex(i => i._id === item._id);
      if (indexOfStevie !== -1) {
        if (pSize[indexOfStevie].size === size.name) {
          pSize[indexOfStevie].qty++;
          pSize[indexOfStevie].amount = pSize[indexOfStevie].qty * pSize[indexOfStevie].price;
        } else {
          this.items.push({
            _id: item._id,
            image: item.image,
            name: item.name,
            size: size.name,
            price: size.price,
            qty: 1,
            amount: size.price
          });
        }
      } else {
      }
    } else {
      this.items.push({
        _id: item._id,
        image: item.image,
        name: item.name,
        size: size.name,
        price: size.price,
        qty: 1,
        amount: size.price
      });
    }
    window.localStorage.setItem('coffeeCart', JSON.stringify(this.items));
  }

}
