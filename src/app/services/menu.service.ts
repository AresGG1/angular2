import { Injectable } from '@angular/core';
import {MenuItem} from "../interfaces/menu-item";
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menuItems: MenuItem[] = [
    {
      label: 'Home',
      link: '/',
      isSelected: true
    },
    {
      label: "About",
      link: "/about",
      isSelected: false
    }
  ];

  private subject = new Subject<any>();

  constructor() { }

  setActive(menuItem?: MenuItem) {
    if (!menuItem) {
      return
    }

    this.menuItems.map((item) => item.isSelected = false)
    menuItem.isSelected = true
  }

  findItemByLink(url: string): MenuItem | undefined {
    return this.menuItems.find((item) => item.link == url)
  }
}
