import {Directive, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[dynamicColor]',
  standalone: true
})
export class DynamicColorDirective {

  constructor() { }
  @Input() dynamicColor = 'black';

  @HostBinding('style.color')
  get color() {
    return this.dynamicColor;
  }
}
