import { TestBed } from '@angular/core/testing';

import { BookingMinionService } from './booking-minion.service';

describe('BookingMinionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookingMinionService = TestBed.get(BookingMinionService);
    expect(service).toBeTruthy();
  });
});
