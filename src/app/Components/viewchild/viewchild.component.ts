import {Component, ElementRef, ViewChild} from '@angular/core';
import {ProductDetailsComponent} from '../product-details/product-details.component';

@Component({
  selector: 'app-viewchild',
  standalone: true,
  imports: [
    ProductDetailsComponent
  ],
  templateUrl: './viewchild.component.html',
  styleUrl: './viewchild.component.css'
})
export class ViewchildComponent {

  @ViewChild('LocalReferenceName')
  firstPara!:ElementRef;

  @ViewChild('ProductDetails')
  productDetailsComponent!: ProductDetailsComponent;

  handleLog(){
    //console.log(this.firstPara);
    console.log(this.firstPara.nativeElement.textContent);
  }

  handleCompnentLog(){
    console.log(this.productDetailsComponent.productInfo.title);
  }
}
