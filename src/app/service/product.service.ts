import { Injectable, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
declare var firebase: any;


import { Product } from '../product-list/product';
import { WebStorageService, LOCAL_STORAGE } from 'angular-webstorage-service';


@Injectable({
  providedIn: 'root'
})

export class ProductService {
  
  productDetail: Product;
  public data: Product[] = [];
  key:string[];


  private dataurl = '../assets/data.json';

  constructor(private http: HttpClient, @Inject(LOCAL_STORAGE) private storage: WebStorageService) { }


  fetchData() {
    return this.http.get('https://shopping-cart-36224.firebaseio.com/.json');
  }


  getData():Product[]{
    for (let index = 0; index < localStorage.length; index++) {
      this.key.push(localStorage.key(index))
      this.data.push(JSON.parse(localStorage.getItem(this.key[index])));
    }
    return this.data;
  }

  private handleError(err: HttpErrorResponse) {

    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }


}