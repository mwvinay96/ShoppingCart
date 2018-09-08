import { Injectable } from '@angular/core';
import { Product } from '../product-list/product';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  key:string='cart';
  data:any;

  constructor() { }

  addToCart(product:Product){
    this.data=JSON.parse(localStorage.getItem(this.key));
    if(this.data==null){
      this.data=[];
    }
    this.data.push(product);
    localStorage.setItem(this.key,JSON.stringify(this.data));
  }

  getCartItems(){
    return JSON.parse(localStorage.getItem(this.key));
  }

}
