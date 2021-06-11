import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Shop } from '../../../models/shop.model';

@Component({
  selector: 'app-shop-add',
  templateUrl: './shop-add.component.html',
  styleUrls: ['./shop-add.component.css']
})
export class ShopAddComponent {

  public shop: Shop = <Shop>{};

  constructor(private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string,
    private router: Router) { }

  public saveShop() {
    this.http.post(this.baseUrl + 'api/shops', this.shop).subscribe(result => {
      this.router.navigateByUrl("/shops");
    }, error => console.error(error));

  }
  public backToList() {
    this.router.navigateByUrl("/shops");
  }
}
