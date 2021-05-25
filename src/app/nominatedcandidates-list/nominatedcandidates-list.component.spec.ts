import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NominatedcandidatesListComponent } from './nominatedcandidates-list.component';

describe('NominatedcandidatesListComponent', () => {
  let component: NominatedcandidatesListComponent;
  let fixture: ComponentFixture<NominatedcandidatesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NominatedcandidatesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NominatedcandidatesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
