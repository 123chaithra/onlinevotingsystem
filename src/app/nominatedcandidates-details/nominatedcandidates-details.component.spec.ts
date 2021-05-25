import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NominatedcandidatesDetailsComponent } from './nominatedcandidates-details.component';

describe('NominatedcandidatesDetailsComponent', () => {
  let component: NominatedcandidatesDetailsComponent;
  let fixture: ComponentFixture<NominatedcandidatesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NominatedcandidatesDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NominatedcandidatesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
