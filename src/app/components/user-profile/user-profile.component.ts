import {Component, LOCALE_ID, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../interfaces/user";
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {

  user: User

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id') ?? '')
    const user =
      this.userService.fetchUsersData().find((user) => user.id == id)

    if (user) {
      this.user = user
    } else {
      this.router.navigate(['not-found'])
    }

  }

  getFullName(user: User) {
    return `${user.name} ${user.lastName}`
  }

}
