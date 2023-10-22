import {Component, OnInit} from "@angular/core";
import {AuthService} from "./services/auth.service";
import {UserRole} from "./enums/role";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'lab2'
  role: UserRole | false

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.getUserRole().subscribe((role) => this.role = role)

  }

}
