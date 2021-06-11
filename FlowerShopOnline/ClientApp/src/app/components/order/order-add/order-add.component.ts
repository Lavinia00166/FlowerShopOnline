import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Order } from '../../../models/order.model';
import { Client } from '../../../models/client.model';
import { Shop } from '../../../models/shop.model';

@Component({
  selector: 'app-order-add',
  templateUrl: './order-add.component.html',
  styleUrls: ['./order-add.component.css']
})
export class OrderAddComponent implements OnInit {

  public order: Order = <Order>{};
  public clients: Client[];
  public shops: Shop[];

  constructor(private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string,
    private router: Router) { }

  ngOnInit() {
    this.loadClients();
    this.loadShops();
    }

  public saveOrder() {
    this.http.post(this.baseUrl + 'api/orders', this.order).subscribe(result => {
      this.router.navigateByUrl("/orders");
    }, error => console.error(error));
  }

  loadClients() {
    this.http.get<Client[]>(this.baseUrl + 'api/clients').subscribe(result => {
      this.clients = result;
    }, error => console.error(error));
  }

  loadShops() {
    this.http.get<Shop[]>(this.baseUrl + 'api/shops').subscribe(result => {
      this.shops = result;
    }, error => console.error(error));
  }

  public backToList() {
    this.router.navigateByUrl("/orders");
  }
}
