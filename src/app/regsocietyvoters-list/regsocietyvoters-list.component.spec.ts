import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegsocietyvotersListComponent } from './regsocietyvoters-list.component';

describe('RegsocietyvotersListComponent', () => {
  let component: RegsocietyvotersListComponent;
  let fixture: ComponentFixture<RegsocietyvotersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegsocietyvotersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegsocietyvotersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
