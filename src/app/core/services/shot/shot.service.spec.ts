import { TestBed, inject } from '@angular/core/testing';

import { ShotService } from './shot.service';

describe('ShotService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShotService]
    });
  });

  it('should be created', inject([ShotService], (service: ShotService) => {
    expect(service).toBeTruthy();
  }));
});
