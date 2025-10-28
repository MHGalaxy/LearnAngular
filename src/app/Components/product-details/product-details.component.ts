import { Component } from '@angular/core';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  productInfo= {
    title: 'Product 1',
    description: 'Mobile phone',
    count: 300,
    price: 500000,
  }
}
