import {Directive, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[minLengthError]',
  standalone: true
})
export class MinLengthErrorDirective {

  constructor() { }
  @Input() minLengthError!: number;
  @Input() value!: string;

  @HostBinding('style.border-color')
  get borderColor() {
    return this.value && this.value.length < Number(this.minLengthError)
      ? 'red'
      : 'green';
  }
}
