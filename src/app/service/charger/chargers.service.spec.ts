import { TestBed } from '@angular/core/testing';

import { ChargersService } from './chargers.service';

describe('ChargersService', () => {
  let service: ChargersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChargersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
