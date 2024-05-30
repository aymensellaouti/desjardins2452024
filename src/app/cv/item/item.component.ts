import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cv } from '../model/cv';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input({required: true}) cv!: Cv;
  @Input() size = 50;
  @Output() notifyCvClick = new EventEmitter<Cv>();

  /**
   * C'est la méthode qui emet le cv de l'item
   */
  selectCv() {
    this.notifyCvClick.emit(this.cv);
  }
}
