import { TestBed } from '@angular/core/testing';

import { DatabaseAPIservicesServiceService } from './database-apiservices-service.service';

describe('DatabaseAPIservicesServiceService', () => {
  let service: DatabaseAPIservicesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatabaseAPIservicesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
