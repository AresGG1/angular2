import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {MenuService} from "../../services/menu.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name: string

  constructor(
    private authService: AuthService,
    private router: Router,
    private menuService: MenuService
  ) {
  }
  onSubmit() {
    if (this.name == undefined) {
      alert('Name is empty')
      return
    }

    this.authService.login(this.name).subscribe((result) => {

      result ? this.router.navigate(['about']) : alert('Wrong name')
      this.authService.updateUserRole()

    })
  }

  ngOnInit(): void {
    const item = this.menuService.findItemByLink('/')
    this.menuService.setActive(item)
  }
}
