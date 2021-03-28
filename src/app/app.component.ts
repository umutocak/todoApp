import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = 'Umut Ocak';
  items= [
    { description: "Kahvaltı",action:"No"},
    { description: "Sinema",action:"No"},
    { description: "Spor",action:"No"},
    { description: "Ödev yap",action:"No"}
  ];
}
