import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[fontSize]',
  standalone: true
})
export class FontSizeDirective implements OnInit {
  //@Input() or:
  @Input('fontSize') //as same as name of directive
  fontSize: number = 16;//default value

  constructor(private el: ElementRef) {

  }

  ngOnInit(): void {
    this.el.nativeElement.style.fontSize = `${this.fontSize}px`;
  }

}
