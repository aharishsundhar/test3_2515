import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestcompleterdComponent } from './testcompleterd.component';

describe('TestcompleterdComponent', () => {
  let component: TestcompleterdComponent;
  let fixture: ComponentFixture<TestcompleterdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestcompleterdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestcompleterdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});