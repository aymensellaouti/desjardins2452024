import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // State
  title = 'desjardins2452024';
  // Behaviour
  sayHello() {
    console.log('Hello Desjardins');
  }
}
