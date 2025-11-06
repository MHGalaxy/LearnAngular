import { Component } from '@angular/core';
import {CreateContactUsDto} from '../../Dtos/contact-us/CreateContactUsDto';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  contactUs: CreateContactUsDto = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    title: '',
    description: ''
  };

  onSubmit(){
    console.log(this.contactUs);
  }
}
