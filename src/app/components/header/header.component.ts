import {Component, OnInit} from '@angular/core';
import {MenuItem} from "../../interfaces/menu-item";
import {MenuService} from "../../services/menu.service";
import {AuthService} from "../../services/auth.service";
import {UserRole} from "../../enums/role";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuItems: MenuItem[]
  role: UserRole | false

  constructor(private menuService: MenuService, private authService: AuthService) {
  }
  ngOnInit(): void {
    this.menuItems = this.menuService.menuItems
    this.authService.getUserRole().subscribe((role) => this.role = role)
  }
  getLogo(): false | string {

    if (!this.role) {
      return this.role
    }

    switch (this.role) {
      case UserRole.User:
        return '1.png'
      case UserRole.Moderator:
        return '2.png'
      case UserRole.Admin:
        return '3.png'
    }
  }

}
