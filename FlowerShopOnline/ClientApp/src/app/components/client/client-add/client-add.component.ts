import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Client } from '../../../models/client.model';

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.css']
})
export class ClientAddComponent {

  public client: Client = <Client>{};

  constructor(private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string,
    private router: Router) { }

  public saveClient() {
    this.http.post(this.baseUrl + 'api/clients', this.client).subscribe(result => {
      this.router.navigateByUrl("/clients");
    }, error => console.error(error));

  }
  public backToList() {
    this.router.navigateByUrl("/clients");
  }
}
