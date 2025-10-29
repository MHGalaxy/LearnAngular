import { Component } from '@angular/core';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent {
  productName: string = '';
  description: string = '';
  isSubmit: boolean = false;

  /**
   * Validate inputs and enable/disable button
   */
  validateInputs(e: Event, field: 'name' | 'description'): void {
    const target = e.target as HTMLInputElement;
    const value = target.value.trim();

    if (field === 'name') {
      this.productName = value;
    } else if (field === 'description') {
      this.description = value;
    }

    // validation: both must be non-empty
    if (this.productName.length > 0 && this.description.length > 0) {
      this.isSubmit = true;
      console.log('All inputs valid');
    } else {
      this.isSubmit = false;
      console.log('Please fill all fields');
    }
  }

}
