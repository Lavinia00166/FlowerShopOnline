import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { Client } from '../../models/client.model';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent {
  public clients: Client[];

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    this.loadClients();
  }

  public deleteClient(client: Client) {
    this.http.delete(this.baseUrl + 'api/clients/' + client.id).subscribe(result => {
      this.loadClients();
    }, error => console.error(error))
  }

  loadClients() {
    this.http.get<Client[]>(this.baseUrl + 'api/clients').subscribe(result => {
      this.clients = result;
    }, error => console.error(error));
  }

}
