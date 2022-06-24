import { TestBed } from '@angular/core/testing';

import { SectorServiceService } from './sector-service.service';

describe('SectorServiceService', () => {
  let service: SectorServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SectorServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
