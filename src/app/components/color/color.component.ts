import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent implements OnInit {
  // Quels sont met propriétés d'états

  /**
   * La couleur par défautr du background de la Div
   */
  defaultColor = 'red';
  /**
   * La couleur du background color de la Div
   */
  bgColor = '';
  //Quel est mon comportement

  acr = inject(ActivatedRoute);
  ngOnInit() {
    console.log(this.acr.snapshot);
    this.defaultColor = this.acr.snapshot.params['defaultColor'];
    this.bgColor = this.defaultColor;
  }
  changeColor(newColor: string) {
    this.bgColor = newColor;
  }
  reset() {
    this.bgColor = this.defaultColor;
  }
}
