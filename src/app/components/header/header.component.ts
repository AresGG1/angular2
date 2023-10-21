import {Component, OnInit} from '@angular/core';
import {MenuItem} from "../../interfaces/menu-item";
import {MenuService} from "../../services/menu.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuItems: MenuItem[]

  constructor(private menuService: MenuService) {
  }
  ngOnInit(): void {
    this.menuItems = this.menuService.menuItems
  }

}
