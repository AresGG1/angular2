import {Component, OnInit} from '@angular/core';
import {MenuItem} from "../../interfaces/menu-item";
import {MenuService} from "../../services/menu.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  constructor(private menuService: MenuService) {
  }
  ngOnInit(): void {
    const currentComponent = this.menuService.findItemByLink('/about')
    this.menuService.setActive(currentComponent)
  }

}
