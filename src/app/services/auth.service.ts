import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginUser} from "../interfaces/login-user";
import {BehaviorSubject, map, Observable, Subject} from "rxjs";
import {UserRole} from "../enums/role";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private dataSubject = new Subject<UserRole | false>;


  url: string = 'http://localhost:5000/users';
  constructor(private http: HttpClient) { }

  login(name: string): Observable<boolean> {
    return this.http.get<LoginUser[]>(this.url)
      .pipe(map((users) => {
        const user = users.find((user) => user.name == name)
          if (user) {
            localStorage.setItem('role', user.role)
            return true
        }

        return false
      }
      ))
  }

  updateUserRole(): void {
    const roleString = localStorage.getItem('role')
    this.dataSubject.next(roleString ? roleString as UserRole : false)
  }

  getUserRole():Observable<UserRole | false> {
    return this.dataSubject.asObservable()
  }


}
