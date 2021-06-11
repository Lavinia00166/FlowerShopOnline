import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Shop } from '../../../models/shop.model';

@Component({
  selector: 'app-shop-update',
  templateUrl: './shop-update.component.html',
  styleUrls: ['./shop-update.component.css']
})
export class ShopUpdateComponent implements OnInit {

  public shop: Shop;
  public param;

  ngOnInit() {
    this.routers.queryParams.subscribe(param => {
      this.param = param;
      this.loadShops();
    });
  }
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private routers: ActivatedRoute, private router: Router) { }

  loadShops() {
    this.http.get<Shop>(this.baseUrl + 'api/shops/' + this.param.id).subscribe(result => {
      this.shop = result;
    }, error => console.error(error));
  }
  public saveShop() {
    this.http.put(this.baseUrl + 'api/shops/' + this.shop.id, this.shop).subscribe(result => {
      this.router.navigateByUrl("/shops");
    }, error => console.error(error));
  }
  public backToList() {
    this.router.navigateByUrl("/shops");
  }
}
