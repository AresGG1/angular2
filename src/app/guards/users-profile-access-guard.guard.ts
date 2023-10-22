import { CanActivateFn } from '@angular/router';
import {UserRole} from "../enums/role";

export const usersProfileAccessGuardGuard: CanActivateFn = (route, state) => {
  const stringRole = localStorage.getItem('role');

  if (stringRole == null) {
    return false
  }

  const role = stringRole as UserRole

  const res =  role != UserRole.User && role != UserRole.Moderator

  if (!res) {
    alert('Forbidden')
  }

  return res;
};
