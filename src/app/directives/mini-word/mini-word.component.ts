import { Component } from '@angular/core';

@Component({
  selector: 'app-mini-word',
  templateUrl: './mini-word.component.html',
  styleUrls: ['./mini-word.component.css']
})
export class MiniWordComponent {

  /** Mon State */
  color = 'red';
  size = 50;
  font = 'garamond';
}
