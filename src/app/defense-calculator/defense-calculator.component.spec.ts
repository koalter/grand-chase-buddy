import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefenseCalculatorComponent } from './defense-calculator.component';

describe('DefenseCalculatorComponent', () => {
  let component: DefenseCalculatorComponent;
  let fixture: ComponentFixture<DefenseCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefenseCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefenseCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
