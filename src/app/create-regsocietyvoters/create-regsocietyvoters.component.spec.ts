import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRegsocietyvotersComponent } from './create-regsocietyvoters.component';

describe('CreateRegsocietyvotersComponent', () => {
  let component: CreateRegsocietyvotersComponent;
  let fixture: ComponentFixture<CreateRegsocietyvotersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRegsocietyvotersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRegsocietyvotersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
