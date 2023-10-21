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

}
