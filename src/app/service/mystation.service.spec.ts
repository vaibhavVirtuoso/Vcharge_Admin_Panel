import { TestBed } from '@angular/core/testing';

import { MystationService } from './mystation.service';

describe('MystationService', () => {
  let service: MystationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MystationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
