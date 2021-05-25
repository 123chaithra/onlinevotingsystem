import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectionresultListComponent } from './electionresult-list.component';

describe('ElectionresultListComponent', () => {
  let component: ElectionresultListComponent;
  let fixture: ComponentFixture<ElectionresultListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectionresultListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectionresultListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
