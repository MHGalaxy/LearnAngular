import { Component } from '@angular/core';
import {ParaHighlighterDirective} from '../../Directives/para-highlighter.directive';
import {DynamicColorDirective} from '../../Directives/dynamic-color.directive';
import {MinLengthErrorDirective} from '../../Directives/min-length-error.directive';
import {FontSizeDirective} from '../../Directives/font-size.directive';
import {NgElseDirective} from '../../Directives/ng-else.directive';

@Component({
  selector: 'app-test-directives',
  standalone: true,
  imports: [
    ParaHighlighterDirective,
    DynamicColorDirective,
    MinLengthErrorDirective,
    FontSizeDirective,
    NgElseDirective
  ],
  templateUrl: './test-directives.component.html',
  styleUrl: './test-directives.component.css'
})
export class TestDirectivesComponent {

  isActive = false;

  protected name = "name";

  onNameInput(event: Event) {
    const input = event.target as HTMLInputElement | null;

    this.name = input?.value ?? ''; // if input is null, use empty string
  }
}
