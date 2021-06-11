import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  public products: Product[];

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    this.loadProducts();
  }

  public deleteProduct(product: Product) {
    this.http.delete(this.baseUrl + 'api/products/' + product.id).subscribe(result => {
      this.loadProducts();
    }, error => console.error(error))
  }

  loadProducts() {
    this.http.get<Product[]>(this.baseUrl + 'api/products').subscribe(result => {
      this.products = result;
    }, error => console.error(error));
  }

}
