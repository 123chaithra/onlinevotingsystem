import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNominatedcandidatesComponent } from './update-nominatedcandidates.component';

describe('UpdateNominatedcandidatesComponent', () => {
  let component: UpdateNominatedcandidatesComponent;
  let fixture: ComponentFixture<UpdateNominatedcandidatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateNominatedcandidatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateNominatedcandidatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
