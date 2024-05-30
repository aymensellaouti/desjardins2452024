import { Component, inject } from '@angular/core';
import { Cv } from '../model/cv';
import { LoggerService } from 'src/app/services/logger.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent {
  today = new Date();
  selectedCv: Cv | null = null;
  cvs: Cv[] = [
    new Cv(1, 'sellaouti', 'aymen', 'teacher', '1234', 42, ''),
    new Cv(2, 'Robelkend', 'Jean', 'Dev', '1234', 22, '     '),
    new Cv(3, 'Hammodi', 'Noor', 'Dev', '1234', 20, 'rotating_card_profile.png'),
    new Cv(4, 'Lyes', 'Ferrahi', 'Dev', '1234', 20, 'rotating_card_profile2.png'),
  ];
  // A partir d'angular 14
  loggerService = inject(LoggerService);
  constructor() {
    this.loggerService.logger('cc je suis le cvComponent');
  }
  onCvSelected(cv: Cv) {
    this.selectedCv = cv;
  }
}
