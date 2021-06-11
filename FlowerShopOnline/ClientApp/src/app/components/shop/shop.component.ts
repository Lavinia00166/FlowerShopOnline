import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { Shop } from '../../models/shop.model';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  public shops: Shop[];

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    this.loadShops();
  }

  public deleteShop(shop: Shop) {
    this.http.delete(this.baseUrl + 'api/shops/' + shop.id).subscribe(result => {
      this.loadShops();
    }, error => console.error(error))
  }

  loadShops() {
    this.http.get<Shop[]>(this.baseUrl + 'api/shops').subscribe(result => {
      this.shops = result;
    }, error => console.error(error));
  }

}
