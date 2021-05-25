import { TestBed } from '@angular/core/testing';

import { ElectionofficerserviceService } from './electionofficerservice.service';

describe('ElectionofficerserviceService', () => {
  let service: ElectionofficerserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElectionofficerserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
