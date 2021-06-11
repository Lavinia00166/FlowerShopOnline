import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {

  public product: Product = <Product>{};

  constructor(private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string,
    private router: Router) { }

  public saveProduct() {
    this.http.post(this.baseUrl + 'api/products', this.product).subscribe(result => {
      this.router.navigateByUrl("/products");
    }, error => console.error(error));

  }
  public backToList() {
    this.router.navigateByUrl("/products");
  }
}
