import { TestBed, async, inject } from '@angular/core/testing';

import { HostSignupGuard } from './host-signup.guard';

describe('HostSignupGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HostSignupGuard]
    });
  });

  it('should ...', inject([HostSignupGuard], (guard: HostSignupGuard) => {
    expect(guard).toBeTruthy();
  }));
});
