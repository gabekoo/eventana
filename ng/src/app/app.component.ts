import { Component } from '@angular/core';
import { Http } from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 2, Riding on Rails!2222';
  res;
  constructor(http: Http) {
    http.get("/events").subscribe((res) => {
      this.res = res;
    });
  }
}
