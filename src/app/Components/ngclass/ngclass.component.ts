import { Component } from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-ngclass',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './ngclass.component.html',
  styleUrl: './ngclass.component.css'
})
export class NgclassComponent {
  firstClass: string = "text-danger text-center";
  secondClass: string = "text-success text-center";

  isActiveForthClass: boolean = true;
}
