import {Component, OnInit} from '@angular/core';
import {UserService} from '../../Services/user.service';
import {UserDto} from '../../Dtos/user/user.dto';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {

    users: UserDto[] = [];

    constructor(private userService: UserService) {
    }

    ngOnInit(): void {
      this.users = this.userService.getAllUsers();
    }
}
