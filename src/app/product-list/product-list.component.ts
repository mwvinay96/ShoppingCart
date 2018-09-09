import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product } from '../product-list/product';
import { CartServiceService } from '../service/cart-service.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';




@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  _listFilter = '';
  filteredProducts: Product[] = [];
  products: Product[] = [];
  errorMessage = '';


  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }


  performFilter(filterBy: string): Product[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: Product) =>
      product.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  constructor(private productService: ProductService,
    private cartService: CartServiceService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router, ) { }

  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
    this.getProducts();

  }

  private getProducts() {
    this.productService.fetchData().subscribe((data: any) => {
      console.log(data);
      // tslint:disable-next-line:forin
      for (const key in data) {
        this.products.push(data[key]);
      }
      this.filteredProducts = this.products;
    });
  }

  addToCart(data: Product) {
    this.cartService.addToCart(data);
  }

  showSuccess() {
    this.toastr.success('Succesfully Added to Cart', 'Success');
  }

  navToCart() {
    this.router.navigate(['/cart']);
  }
}






