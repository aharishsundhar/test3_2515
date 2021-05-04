import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddassemblyComponent } from './addassembly.component';

describe('AddassemblyComponent', () => {
  let component: AddassemblyComponent;
  let fixture: ComponentFixture<AddassemblyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddassemblyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddassemblyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});