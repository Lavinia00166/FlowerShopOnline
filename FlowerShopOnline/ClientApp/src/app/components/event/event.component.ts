import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { EventChoice } from '../../models/event.model';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {
  public events: EventChoice[];

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    this.loadEvents();
  }

  public deleteEvent(event: EventChoice) {
    this.http.delete(this.baseUrl + 'api/events/' + event.id).subscribe(result => {
      this.loadEvents();
    }, error => console.error(error))
  }

  loadEvents() {
    this.http.get<EventChoice[]>(this.baseUrl + 'api/events').subscribe(result => {
      this.events = result;
    }, error => console.error(error));
  }

}
