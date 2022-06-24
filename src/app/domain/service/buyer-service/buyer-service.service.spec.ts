import { TestBed } from '@angular/core/testing';

import { BuyerServiceService } from './buyer-service.service';

describe('BuyerServiceService', () => {
  let service: BuyerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuyerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
