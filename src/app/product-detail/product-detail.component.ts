import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product-list/product';
import { ProductService } from '../service/product.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  errorMessage = '';
  products: Product[]=[];
  product: Product;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService) { }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      this.getProduct(param);
    }
  }

  getProduct(id: string) {
    this.productService.fetchData().subscribe((data: any) =>{
      console.log(data);
      for (var key in data) {
        this.products.push(data[key]);
       }
       this.product=this.products.find(p=>p.sku===id);
    }
    
    )
  }
  

  onBack(): void {
        this.router.navigate(['/products']);
      }
}
