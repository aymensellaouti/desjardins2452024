import { Component } from '@angular/core';
import { Cv } from '../model/cv';

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
  onCvSelected(cv: Cv) {
    this.selectedCv = cv;
  }
}
