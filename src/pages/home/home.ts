import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductModel } from '../../assets/model/product.model';
import { ServiceProvider } from '../../providers/service/service';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';

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
    public serviceProvider: ServiceProvider,
    public loading: LoadingController
  ) {
    this.getProduct('hot');
  }

  getProduct(cate) {
    let loadingA = this.loading.create();
    loadingA.present();
    this.serviceProvider.getProductData(cate).then((data) => {
      this.productList = data;
      loadingA.dismiss();
    }, (err) => {
      console.log(err);
      loadingA.dismiss();
    });
  }

  goToCart() {
    this.navCtrl.push('CartPage');
  }

  goToConfirm() {
    this.navCtrl.push('ConfirmPage');
  }

  getProductByCategory(cate) {
    this.getProduct(cate);
  }

  addProduct(item, size) {
    let loading = this.loading.create();
    loading.present();
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
        loading.dismiss();
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
    loading.dismiss();
  }

  getCount() {
    let count = 0;
    this.items.forEach((e) => {
      count += e.qty;
    });
    return count ? count : 0;
  }

}
