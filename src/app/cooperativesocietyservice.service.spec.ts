import { TestBed } from '@angular/core/testing';

import { CooperativesocietyserviceService } from './cooperativesocietyservice.service';

describe('CooperativesocietyserviceService', () => {
  let service: CooperativesocietyserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CooperativesocietyserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
