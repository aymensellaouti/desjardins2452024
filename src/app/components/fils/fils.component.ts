import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css'],
})
export class FilsComponent {
  @Input()
  messageDePapa = 'une valeur par défaut';

  @Output() sayCc = new EventEmitter<string>();
  sendMessage() {
    this.sayCc.emit('cc');
  }
}
