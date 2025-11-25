import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProductListComponent} from './Components/product-list/product-list.component';
import {ProductDetailsComponent} from './Components/product-details/product-details.component';
import {CreateProductComponent} from './Components/create-product/create-product.component';
import {TowWayBindingComponent} from './Components/tow-way-binding/tow-way-binding.component';
import {NgifNgforComponent} from './Components/ngif-ngfor/ngif-ngfor.component';
import {NgswitchComponent} from './Components/ngswitch/ngswitch.component';
import {ContactUsComponent} from './Components/contact-us/contact-us.component';
import {NgclassComponent} from './Components/ngclass/ngclass.component';
import {NgcontentComponent} from './Components/ngcontent/ngcontent.component';
import {NgtemplateComponent} from './Components/ngtemplate/ngtemplate.component';
import {BlogListComponent} from './Components/blog-list/blog-list.component';
import {CourseListComponent} from './Components/course-list/course-list.component';
import {CreateCourseComponent} from './Components/create-course/create-course.component';
import {ViewchildComponent} from './Components/viewchild/viewchild.component';
import {TestDirectivesComponent} from './Components/test-directives/test-directives.component';
import {LifecycleComponent} from "./Components/lifecycle/lifecycle.component";

//decorator factory
@Component({
  selector: 'app-root',
  standalone: true,
    imports: [RouterOutlet, ProductListComponent, ProductDetailsComponent, CreateProductComponent, TowWayBindingComponent, NgifNgforComponent, NgswitchComponent, ContactUsComponent, NgclassComponent, NgcontentComponent, NgtemplateComponent, BlogListComponent, CourseListComponent, CreateCourseComponent, ViewchildComponent, TestDirectivesComponent, LifecycleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '01_MyShop';
}
