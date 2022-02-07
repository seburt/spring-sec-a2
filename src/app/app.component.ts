import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  greeting = {id: "", content: ""};
  constructor(private http: HttpClient) {
    http.get('greeting').subscribe(data => {
      this.greeting.id = JSON.parse(JSON.stringify(data, ["id"])).id;
      this.greeting.content = JSON.parse(JSON.stringify(data, ["content"])).content;
    });
  }
}
