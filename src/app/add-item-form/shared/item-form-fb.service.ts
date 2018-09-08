import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database'
import { Product } from '../../product-list/product';

@Injectable({
  providedIn: 'root'
})
export class ItemFormFBService {
  
  products: AngularFireObject<Product[]>;

  constructor(private db: AngularFireDatabase){}
  
  getProducts() {
    this.products = this.db.object('cartProduct');
    return this.products;
  }


  
  
}

