import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRegsocietyvotersComponent } from './update-regsocietyvoters.component';

describe('UpdateRegsocietyvotersComponent', () => {
  let component: UpdateRegsocietyvotersComponent;
  let fixture: ComponentFixture<UpdateRegsocietyvotersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRegsocietyvotersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRegsocietyvotersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
