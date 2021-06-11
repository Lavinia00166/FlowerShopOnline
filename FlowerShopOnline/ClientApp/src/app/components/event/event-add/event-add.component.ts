import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { EventChoice } from '../../../models/event.model';

@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.css']
})
export class EventAddComponent {

  public event: EventChoice = <EventChoice>{};

  constructor(private http: HttpClient,
    @Inject('BASE_URL') private baseUrl: string,
    private router: Router) { }

  public saveEvent() {
    this.http.post(this.baseUrl + 'api/events', this.event).subscribe(result => {
      this.router.navigateByUrl("/events");
    }, error => console.error(error));

  }
  public backToList() {
    this.router.navigateByUrl("/events");
  }
}
