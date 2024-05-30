import { Component, inject } from '@angular/core';
import { Cv } from '../model/cv';
import { LoggerService } from 'src/app/services/logger.service';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent {
  today = new Date();
  selectedCv: Cv | null = null;
  cvService = inject(CvService);
  cvs: Cv[] = this.cvService.getCvs();
  // A partir d'angular 14
  loggerService = inject(LoggerService);
  constructor() {
    this.loggerService.logger('cc je suis le cvComponent');
  }
  onCvSelected(cv: Cv) {
    this.selectedCv = cv;
  }
}
