import { Component } from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-ngif-ngfor',
  standalone: true,
  imports: [
    NgIf,
    FormsModule,
    NgForOf
  ],
  templateUrl: './ngif-ngfor.component.html',
  styleUrl: './ngif-ngfor.component.css'
})
export class NgifNgforComponent {
  userIsActive:boolean = false;
  products=[
    {
      id:1,
      name:"product 1",
      price:1000,
    },
    {
      id:2,
      name:"product 2",
      price:2000,
    },
    {
      id:3,
      name:"product 3",
      price:3000,
    }]
}
