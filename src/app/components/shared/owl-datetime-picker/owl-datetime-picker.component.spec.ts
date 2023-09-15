import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwlDatetimePickerComponent } from './owl-datetime-picker.component';

describe('OwlDatetimePickerComponent', () => {
  let component: OwlDatetimePickerComponent;
  let fixture: ComponentFixture<OwlDatetimePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwlDatetimePickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwlDatetimePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
