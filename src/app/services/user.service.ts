import {Injectable, numberAttribute} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {User} from "../interfaces/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl: string  = 'https://dummyjson.com/users?limit=10';
  constructor(private http: HttpClient) { }

  fetchUsersData(): User[] {
    return [
      {
        id: 1,
        name: 'Victor',
        lastName: 'Velichko',
        dateOfBirth: new Date("2/1/1990"),
        salary: 50000,
        workingHours: 123456789
      },
      {
        id: 2,
        name: 'Kate',
        lastName: 'Doe',
        dateOfBirth: new Date("6/6/1980"),
        salary: 88000,
        workingHours: 12345
      },
    ]
  }


}
