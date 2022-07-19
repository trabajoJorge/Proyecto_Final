import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaStudentComponent } from './alta-student.component';

describe('AltaStudentComponent', () => {
  let component: AltaStudentComponent;
  let fixture: ComponentFixture<AltaStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
