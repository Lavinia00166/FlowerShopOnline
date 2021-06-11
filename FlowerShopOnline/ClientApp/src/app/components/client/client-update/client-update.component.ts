import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../../../models/client.model';

@Component({
  selector: 'app-client-update',
  templateUrl: './client-update.component.html',
  styleUrls: ['./client-update.component.css']
})
export class ClientUpdateComponent implements OnInit {

  public client: Client;
  public param;

  ngOnInit() {
    this.routers.queryParams.subscribe(param => {
      this.param = param;
      this.loadClients();
    });
  }
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private routers: ActivatedRoute, private router: Router) { }

  loadClients() {
    this.http.get<Client>(this.baseUrl + 'api/clients/' + this.param.id).subscribe(result => {
      this.client = result;
    }, error => console.error(error));
  }
  public saveClient() {
    this.http.put(this.baseUrl + 'api/clients/' + this.client.id, this.client).subscribe(result => {
      this.router.navigateByUrl("/clients");
    }, error => console.error(error));
  }
  public backToList() {
    this.router.navigateByUrl("/clients");
  }
}
