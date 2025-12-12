import { Component } from '@angular/core';
import {CurrencyPipe, DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe} from '@angular/common';
import {EllipsisPipe} from '../../pipes/ellipsis.pipe';

@Component({
  selector: 'app-test-pipe',
  standalone: true,
  imports: [
    LowerCasePipe,
    UpperCasePipe,
    TitleCasePipe,
    DatePipe,
    CurrencyPipe,
    EllipsisPipe
  ],
  templateUrl: './test-pipe.component.html',
  styleUrl: './test-pipe.component.css'
})
export class TestPipeComponent {
  longText: string = 'Full Stack Web Development with Node.js Build scalable backend applications using Node.js, Express, MongoDB, and modern JavaScript best practices.';
}
