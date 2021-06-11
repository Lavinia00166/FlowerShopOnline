import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventChoice } from '../../../models/event.model';

@Component({
  selector: 'app-event-update',
  templateUrl: './event-update.component.html',
  styleUrls: ['./event-update.component.css']
})
export class EventUpdateComponent implements OnInit {

  public event: EventChoice;
  public param;

  ngOnInit() {
    this.routers.queryParams.subscribe(param => {
      this.param = param;
      this.loadEvents();
    });
  }
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string, private routers: ActivatedRoute, private router: Router) { }

  loadEvents() {
    this.http.get<EventChoice>(this.baseUrl + 'api/events/' + this.param.id).subscribe(result => {
      this.event = result;
    }, error => console.error(error));
  }
  public saveEvent() {
    this.http.put(this.baseUrl + 'api/events/' + this.event.id, this.event).subscribe(result => {
      this.router.navigateByUrl("/events");
    }, error => console.error(error));
  }
  public backToList() {
    this.router.navigateByUrl("/events");
  }
}
