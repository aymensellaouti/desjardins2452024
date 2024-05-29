import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  name = 'aymen';
  isHidden = false;
  message = 'intial message';
  showHide() {
    this.isHidden = !this.isHidden;
  }
  constructor() {
    setTimeout(
      () => {
        this.name = 'Noor';
      }
      ,
      2000
    );
    //  setInterval(() => {
    //    this.isHidden = !this.isHidden;
    //  }, 1000);
  }
}
