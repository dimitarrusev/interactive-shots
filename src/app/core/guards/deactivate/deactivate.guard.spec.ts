import { TestBed, inject } from '@angular/core/testing';

import { DeactivateGuard } from './deactivate-guard.service';

describe('DeactivateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeactivateGuard]
    });
  });

  it('should be created', inject([DeactivateGuard], (service: DeactivateGuard) => {
    expect(service).toBeTruthy();
  }));
});
