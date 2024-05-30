import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements OnInit {
  @Input()
  in = 'yellow';
  @Input()
  out = 'red';
  constructor() {}
  ngOnInit(): void {
    this.bgc = this.out;
  }

  @HostBinding('style.backgroundColor')
  bgc = this.out;

  @HostListener('mouseenter') onMouseEnter() {
    this.bgc = this.in;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.bgc = this.out;
  }
  @HostListener('dblclick') ondblClick() {
    this.bgc = 'transparent';
  }
}
