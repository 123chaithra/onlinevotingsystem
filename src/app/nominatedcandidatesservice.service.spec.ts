import { TestBed } from '@angular/core/testing';

import { NominatedcandidatesserviceService } from './nominatedcandidatesservice.service';

describe('NominatedcandidatesserviceService', () => {
  let service: NominatedcandidatesserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NominatedcandidatesserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
