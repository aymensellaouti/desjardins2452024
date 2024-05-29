import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  // Les propriétés d'états
  firstname = 'aymen';
  name = 'sellaouti';
  job = 'trainer';
  path = 'rotating_card_profile3.png';
}
