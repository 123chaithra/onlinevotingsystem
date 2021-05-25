import { TestBed } from '@angular/core/testing';

import { NominatedcandidatesService } from './nominatedcandidates.service';

describe('NominatedcandidatesService', () => {
  let service: NominatedcandidatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NominatedcandidatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
