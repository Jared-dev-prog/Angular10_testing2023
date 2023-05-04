import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCmputerComponent } from './new-cmputer.component';

describe('NewCmputerComponent', () => {
  let component: NewCmputerComponent;
  let fixture: ComponentFixture<NewCmputerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCmputerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCmputerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
