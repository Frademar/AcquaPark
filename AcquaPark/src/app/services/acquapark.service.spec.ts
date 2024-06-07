import { TestBed } from '@angular/core/testing';

import { AcquaparkService } from './acquapark.service';

describe('AcquaparkService', () => {
  let service: AcquaparkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcquaparkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
