import { TestBed, inject } from '@angular/core/testing';

import { ReservationService } from './reservation.service';

describe('PassengerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReservationService]
    });
  });

  it('should be created', inject([ReservationService], (service: ReservationService) => {
    expect(service).toBeTruthy();
  }));
});
