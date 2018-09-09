import { Component, OnInit } from '@angular/core';
import { ItemFormFBService } from '../add-item-form/shared/item-form-fb.service';
import { Product } from '../product-list/product';
import { AngularFireObject } from 'angularfire2/database';
import { ProductService } from '../service/product.service';
import { CartServiceService } from '../service/cart-service.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-display-cart',
  templateUrl: './display-cart.component.html',
  styleUrls: ['./display-cart.component.css'],
  providers: [ItemFormFBService]
})
export class DisplayCartComponent implements OnInit {
  cartCost: number = 0;
  cartItems: Product[];


  constructor(private service: CartServiceService,
    private toastr: ToastrService,
    private router:Router) { }

  clear() {
    localStorage.clear();
    this.ngOnInit();
  }

  getCost() {
    this.cartCost=0;
    if (!(this.cartItems === null)) {
      for (let item of this.cartItems)
        this.cartCost += item.price;
    }
  }


  ngOnInit() {
    this.cartItems = this.service.getCartItems();
    this.getCost();

  }

  showError() {
    if (!this.cartItems) {
      this.toastr.error('Cart Empty!!', 'Error');
    } else {
      this.toastr.info('Thank you for Shopping with us!!!', 'Success', {
        positionClass: 'toast-bottom-right',
      })
      this.clear();
    }
  }


  navToList(){
    this.router.navigate(['/products']);
  }
}



