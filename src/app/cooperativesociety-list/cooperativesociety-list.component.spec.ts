import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CooperativesocietyListComponent } from './cooperativesociety-list.component';

describe('CooperativesocietyListComponent', () => {
  let component: CooperativesocietyListComponent;
  let fixture: ComponentFixture<CooperativesocietyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CooperativesocietyListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CooperativesocietyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
