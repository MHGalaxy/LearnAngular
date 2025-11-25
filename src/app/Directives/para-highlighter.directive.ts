import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[paraHighlighter]',
  standalone: true
})
export class ParaHighlighterDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.color = 'red';
  }

  @HostBinding('style.backgroundColor') bgColor = '';

  @HostListener('mouseenter')
  onMouseEnter() {
    this.bgColor = 'yellow';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.bgColor = '';
  }
}
