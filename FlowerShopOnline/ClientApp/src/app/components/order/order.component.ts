import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { Client } from '../../models/client.model';
import { Order } from '../../models/order.model';
import { Shop } from '../../models/shop.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  public orders: Order[];
  public client;
  public shop;

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    this.loadOrders();
  }

  public deleteOrder(order: Order) {
    this.http.delete(this.baseUrl + 'api/orders/' + order.id).subscribe(result => {
      this.loadOrders();
    }, error => console.error(error))
  }

  loadOrders() {
    this.http.get<Order[]>(this.baseUrl + 'api/orders').subscribe(result => {
      this.orders = result;
    }, error => console.error(error));
  }

  loadClients(order: Order) {
    this.http.get<Client[]>(this.baseUrl + 'api/clients' + order.clientId).subscribe(result => {
      this.client = result;
    })
  }

  loadShops(order: Order) {
    this.http.get<Shop[]>(this.baseUrl + 'api/shops' + order.shopId).subscribe(result => {
      this.shop = result;
    })
  }

}
