import { CanActivateFn } from '@angular/router';
import {UserRole} from "../enums/role";

export const usersAccessGuardGuard: CanActivateFn = (route, state) => {
  const stringRole = localStorage.getItem('role')

  if (stringRole == null) {
    alert('Forbidden')
    return false
  }

  const role = stringRole as UserRole

  const res =  role != UserRole.User

  console.log(res);

  if (!res) {
    alert('Forbidden')
  }

  return res

}
