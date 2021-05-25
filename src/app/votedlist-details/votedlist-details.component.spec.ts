import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotedlistDetailsComponent } from './votedlist-details.component';

describe('VotedlistDetailsComponent', () => {
  let component: VotedlistDetailsComponent;
  let fixture: ComponentFixture<VotedlistDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VotedlistDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VotedlistDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
