import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { usersProfileAccessGuardGuard } from './users-profile-access-guard.guard';

describe('usersAccessGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
      TestBed.runInInjectionContext(() => usersProfileAccessGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
