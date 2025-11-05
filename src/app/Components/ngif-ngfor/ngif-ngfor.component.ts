import { Component } from '@angular/core';
import {NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-ngif-ngfor',
  standalone: true,
  imports: [
    NgIf,
    FormsModule
  ],
  templateUrl: './ngif-ngfor.component.html',
  styleUrl: './ngif-ngfor.component.css'
})
export class NgifNgforComponent {
  userIsActive:boolean = false;
}
