import { Component, OnInit } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

import { Event } from '../event'

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  events: Event[];
  constructor(http: Http) {
    http.get("/events").map(data => data.json())
      .subscribe((data) => {
      console.log(data);
      this.events = data;
      });
  }

  ngOnInit() {
    console.log('EventListComponent init');
  }

}
