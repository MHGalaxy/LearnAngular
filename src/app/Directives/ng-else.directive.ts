import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[ngElse]',
  standalone: true
})
export class NgElseDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {

  }

  @Input() //no need alias because we will use the ngElse name
  set ngElse(condition: boolean){

    if (!condition) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
    else{
      this.viewContainerRef.clear();
    }

  }

}
