import {Component, OnInit} from '@angular/core';
import {MenuItem} from "../../interfaces/menu-item";
import {MenuService} from "../../services/menu.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  menuItems: MenuItem[]
  constructor(private menuService: MenuService) {
  }
  ngOnInit(): void {
    this.menuItems = this.menuService.menuItems
  }

}
