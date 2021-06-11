import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  public product: Product;
  public param;

  ngOnInit() {
    this.routers.queryParams.subscribe(param => {
      this.param = param;
      this.loadProducts();
    });
  }
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private routers: ActivatedRoute, private router: Router) { }

  loadProducts() {
    this.http.get<Product>(this.baseUrl + 'api/products/' + this.param.id).subscribe(result => {
      this.product = result;
    }, error => console.error(error));
  }
  public saveProduct() {
    this.http.put(this.baseUrl + 'api/products/' + this.product.id, this.product).subscribe(result => {
      this.router.navigateByUrl("/products");
    }, error => console.error(error));
  }
  public backToList() {
    this.router.navigateByUrl("/products");
  }
}
