import { Component, inject } from '@angular/core';
import { Cv } from '../model/cv';
import { LoggerService } from 'src/app/services/logger.service';
import { CvService } from '../services/cv.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent {
  today = new Date();
  selectedCv: Cv | null = null;
  cvService = inject(CvService);
  toaster = inject(ToastrService);
  cvs: Cv[] = [];
  // A partir d'angular 14
  loggerService = inject(LoggerService);
  constructor() {
    this.loggerService.logger('cc je suis le cvComponent');
    this.cvService.selectCv$.subscribe(cv => this.selectedCv = cv);
    this.cvService.getCvs().subscribe({
     // Voila ce que je veux faire avec mes cvs
      next: (cvs) => { this.cvs = cvs;},
      // Voila ce que je veux faire en cas d'erreur
      error: (e) => {
        this.cvs = this.cvService.getFakeCvs();
        this.toaster.error(`Les cvs sont fakes, veuillez contactez l'admin`)
      },
      // Voila ce que je veux faire quand le flux se termine
      complete: () => {},
    })
  }
  // onCvSelected(cv: Cv) {
  //   this.selectedCv = cv;
  // }
}
