import { TestBed } from '@angular/core/testing';

import { DiscountDataService } from './discount-data.service';

describe('DiscountDataService', () => {
  let service: DiscountDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiscountDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
