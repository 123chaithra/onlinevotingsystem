import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CooperativesocietyDetailsComponent } from './cooperativesociety-details.component';

describe('CooperativesocietyDetailsComponent', () => {
  let component: CooperativesocietyDetailsComponent;
  let fixture: ComponentFixture<CooperativesocietyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CooperativesocietyDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CooperativesocietyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
