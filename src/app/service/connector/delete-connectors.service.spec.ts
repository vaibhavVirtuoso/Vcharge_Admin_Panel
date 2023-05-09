import { TestBed } from '@angular/core/testing';

import { DeleteConnectorsService } from './delete-connectors.service';

describe('DeleteConnectorsService', () => {
  let service: DeleteConnectorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteConnectorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
