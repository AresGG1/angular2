import { CanActivateFn } from '@angular/router';

export const aboutAccessGuardGuard: CanActivateFn = (route, state) => {
  const stringRole = localStorage.getItem('role')

  const res = stringRole != null

  if (!res) {
    alert('Forbidden')
  }

  return res

}
