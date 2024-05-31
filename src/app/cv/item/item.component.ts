import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Cv } from '../model/cv';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input({required: true}) cv!: Cv;
  @Input() size = 50;
  cvService = inject(CvService);
  // @Output() notifyCvClick = new EventEmitter<Cv>();

  /**
   * C'est la méthode qui emet le cv de l'item
   */
  selectCv() {
    this.cvService.selectCv(this.cv);
    // this.notifyCvClick.emit(this.cv);
  }
}
