import {Component, OnInit} from '@angular/core';
import {User} from "../../interfaces/user";
import {UserService} from "../../services/user.service";
import {map} from "rxjs";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  users: User[]
  constructor(private userService: UserService) {
  }
  ngOnInit(): void {
    this.users = this.userService.fetchUsersData()
  }
  formLink(user: User) {
    return `users/${user.id}`
  }
  getFullName(user: User) {
    return user.name + ' ' + user.lastName
  }
}
