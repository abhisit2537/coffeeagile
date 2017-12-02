import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { ProductModel } from '../../assets/model/product.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceProvider {

  constructor(public http: Http) {
    console.log('Hello ServiceProvider Provider');
  }

  getProductData(cate): Promise<ProductModel> {
    return this.http.get('https://blankblankcoffe.herokuapp.com/api/productsbycate/' + cate)
      .toPromise()
      .then(response => response.json() as Array<ProductModel>)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }


}
