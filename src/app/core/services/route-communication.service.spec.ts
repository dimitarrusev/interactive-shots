import { TestBed, inject } from '@angular/core/testing';

import { RouteCommunicationService } from './route-communication.service';

describe('RouteCommunicationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouteCommunicationService]
    });
  });

  it('should be created', inject([RouteCommunicationService], (service: RouteCommunicationService) => {
    expect(service).toBeTruthy();
  }));
});
