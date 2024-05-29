import { Component } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent {
  // Quels sont met propriétés d'états

  /**
   * La couleur par défautr du background de la Div
   */
  defaultColor = 'red';
  /**
   * La couleur du background color de la Div
   */
  bgColor = this.defaultColor;
  //Quel est mon comportement

  changeColor(newColor: string) {
    this.bgColor = newColor;
  }
  reset() {
    this.bgColor = this.defaultColor;
  }
}
