import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotedlistListComponent } from './votedlist-list.component';

describe('VotedlistListComponent', () => {
  let component: VotedlistListComponent;
  let fixture: ComponentFixture<VotedlistListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VotedlistListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VotedlistListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
