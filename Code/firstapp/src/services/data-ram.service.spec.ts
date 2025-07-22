import { TestBed } from '@angular/core/testing';

import { DataRamService } from './data-ram.service';

describe('DataRamService', () => {
  let service: DataRamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataRamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
