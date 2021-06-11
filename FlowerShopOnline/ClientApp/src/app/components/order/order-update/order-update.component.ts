import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '../../../models/order.model';

@Component({
  selector: 'app-order-update',
  templateUrl: './order-update.component.html',
  styleUrls: ['./order-update.component.css']
})
export class OrderUpdateComponent implements OnInit {

  public order: Order;
  public param;

  ngOnInit() {
    this.routers.queryParams.subscribe(param => {
      this.param = param;
      this.loadOrders();
    });
  }
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private routers: ActivatedRoute, private router: Router) { }

  loadOrders() {
    this.http.get<Order>(this.baseUrl + 'api/orders/' + this.param.id).subscribe(result => {
      this.order = result;
    }, error => console.error(error));
  }
  public saveClient() {
    this.http.put(this.baseUrl + 'api/orders/' + this.order.id, this.order).subscribe(result => {
      this.router.navigateByUrl("/orders");
    }, error => console.error(error));
  }
  public backToList() {
    this.router.navigateByUrl("/orders");
  }
}
