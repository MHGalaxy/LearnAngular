import { Component } from '@angular/core';
import {NgForOf, NgSwitch, NgSwitchCase, NgSwitchDefault} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-ngswitch',
  standalone: true,
  imports: [
    NgSwitch,
    NgSwitchCase,
    NgForOf,
    FormsModule,
    NgSwitchDefault
  ],
  templateUrl: './ngswitch.component.html',
  styleUrl: './ngswitch.component.css'
})
export class NgswitchComponent {
  //type userStatusType = "active" | "inactive" | "ban" | "deleted";
  //userStatus: userStatusType;
  userStatusList:string[] = ["active", "inactive", "ban", "deleted", "no identity"];
  userStatus = "active";
}
