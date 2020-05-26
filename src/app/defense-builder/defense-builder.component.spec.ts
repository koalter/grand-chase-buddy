import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefenseBuilderComponent } from './defense-builder.component';

describe('DefenseBuilderComponent', () => {
  let component: DefenseBuilderComponent;
  let fixture: ComponentFixture<DefenseBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefenseBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefenseBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
