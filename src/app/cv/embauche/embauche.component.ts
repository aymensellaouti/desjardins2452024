import { Component, inject } from '@angular/core';
import { EmbaucheService } from '../services/embauche.service';
import { Cv } from '../model/cv';

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css'],
})
export class EmbaucheComponent {
  public embauchees: Cv[] = [];
  embaucheService: EmbaucheService = inject(EmbaucheService);
  constructor() {
    this.embauchees = this.embaucheService.getEmbauchees();
  }
}
