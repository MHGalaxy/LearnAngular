import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProductListComponent} from './Components/product-list/product-list.component';
import {ProductDetailsComponent} from './Components/product-details/product-details.component';
import {CreateProductComponent} from './Components/create-product/create-product.component';
import {TowWayBindingComponent} from './Components/tow-way-binding/tow-way-binding.component';

//decorator factory
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductListComponent, ProductDetailsComponent, CreateProductComponent, TowWayBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '01_MyShop';
}
