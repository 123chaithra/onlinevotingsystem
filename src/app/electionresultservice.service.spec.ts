import { TestBed } from '@angular/core/testing';

import { ElectionresultserviceService } from './electionresultservice.service';

describe('ElectionresultserviceService', () => {
  let service: ElectionresultserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElectionresultserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
