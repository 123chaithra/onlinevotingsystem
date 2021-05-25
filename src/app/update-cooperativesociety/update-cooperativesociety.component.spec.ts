import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCooperativesocietyComponent } from './update-cooperativesociety.component';

describe('UpdateCooperativesocietyComponent', () => {
  let component: UpdateCooperativesocietyComponent;
  let fixture: ComponentFixture<UpdateCooperativesocietyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCooperativesocietyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCooperativesocietyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
