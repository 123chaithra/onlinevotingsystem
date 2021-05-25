import { TestBed } from '@angular/core/testing';

import { VotedlistserviceService } from './votedlistservice.service';

describe('VotedlistserviceService', () => {
  let service: VotedlistserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VotedlistserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
