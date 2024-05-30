import { Component } from '@angular/core';
import { Cv } from '../model/cv';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent {
  selectedCv: Cv | null = null;
  cvs: Cv[] = [
    new Cv(1, 'sellaouti', 'aymen', 'teacher', '1234', 42, 'rotating_card_profile3.png'),
    new Cv(2, 'Robelkend', 'Jean', 'Dev', '1234', 22, 'rotating_card_profile2.png'),
    new Cv(1, 'Hammodi', 'Noor', 'Dev', '1234', 20, 'rotating_card_profile.png'),
  ];
  onCvSelected(cv: Cv) {
    this.selectedCv = cv;
  }
}
