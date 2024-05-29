import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-somme',
  templateUrl: './somme.component.html',
  styleUrls: ['./somme.component.css'],
})
export class SommeComponent {
  // somme(x=0, y=0) {}
  @Input()
  x = 0;
  @Input()
  y = 0;
}
