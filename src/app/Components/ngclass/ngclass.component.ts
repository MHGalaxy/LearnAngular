import { Component } from '@angular/core';
import {NgClass, NgStyle} from '@angular/common';

@Component({
  selector: 'app-ngclass',
  standalone: true,
  imports: [
    NgClass,
    NgStyle
  ],
  templateUrl: './ngclass.component.html',
  styleUrl: './ngclass.component.css'
})
export class NgclassComponent {
  firstClass: string = "text-danger text-center";
  secondClass: string = "text-success text-center";

  isActiveForthClass: boolean = true;

  fourthStyle = {
    fontSize: '12px',
    fontWeight: 'bold',
    textAlign: 'right',
    backgroundColor: 'gray',
    //'backgroundColor': 'gray', //OK
    //'background-color': 'gray' //OK
    //background-color: 'gray' //NOT OK
  }

  isDanger = false;
}
