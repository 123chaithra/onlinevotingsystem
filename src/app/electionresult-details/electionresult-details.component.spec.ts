import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectionresultDetailsComponent } from './electionresult-details.component';

describe('ElectionresultDetailsComponent', () => {
  let component: ElectionresultDetailsComponent;
  let fixture: ComponentFixture<ElectionresultDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectionresultDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectionresultDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
