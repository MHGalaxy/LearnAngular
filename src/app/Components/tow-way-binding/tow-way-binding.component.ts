import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-tow-way-binding',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './tow-way-binding.component.html',
  styleUrl: './tow-way-binding.component.css'
})
export class TowWayBindingComponent {
  description: string = '';
  description2: string = '';

  handleChangeInput(event: any) {
    this.description = event.target.value;
  }
}
