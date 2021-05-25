import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCooperativesocietyComponent } from './create-cooperativesociety.component';

describe('CreateCooperativesocietyComponent', () => {
  let component: CreateCooperativesocietyComponent;
  let fixture: ComponentFixture<CreateCooperativesocietyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCooperativesocietyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCooperativesocietyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
