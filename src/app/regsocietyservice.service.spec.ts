import { TestBed } from '@angular/core/testing';

import { RegsocietyserviceService } from './regsocietyservice.service';

describe('RegsocietyserviceService', () => {
  let service: RegsocietyserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegsocietyserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
