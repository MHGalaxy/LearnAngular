import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProductListComponent} from './Components/product-list/product-list.component';
import {ProductDetailsComponent} from './Components/product-details/product-details.component';
import {CreateProductComponent} from './Components/create-product/create-product.component';
import {TowWayBindingComponent} from './Components/tow-way-binding/tow-way-binding.component';
import {NgifNgforComponent} from './Components/ngif-ngfor/ngif-ngfor.component';
import {NgswitchComponent} from './Components/ngswitch/ngswitch.component';
import {ContactUsComponent} from './Components/contact-us/contact-us.component';

//decorator factory
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductListComponent, ProductDetailsComponent, CreateProductComponent, TowWayBindingComponent, NgifNgforComponent, NgswitchComponent, ContactUsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '01_MyShop';
}
