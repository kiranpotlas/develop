import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeWorkhComponent } from './employee-workh.component';

describe('EmployeeWorkhComponent', () => {
  let component: EmployeeWorkhComponent;
  let fixture: ComponentFixture<EmployeeWorkhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeWorkhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeWorkhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
