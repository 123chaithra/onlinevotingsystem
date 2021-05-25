import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegsocietyvotersDetailsComponent } from './regsocietyvoters-details.component';

describe('RegsocietyvotersDetailsComponent', () => {
  let component: RegsocietyvotersDetailsComponent;
  let fixture: ComponentFixture<RegsocietyvotersDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegsocietyvotersDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegsocietyvotersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
