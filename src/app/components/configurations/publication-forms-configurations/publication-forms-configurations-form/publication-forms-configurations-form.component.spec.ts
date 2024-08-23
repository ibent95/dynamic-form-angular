import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationFormsConfigurationsFormComponent } from './publication-forms-configurations-form.component';

describe('PublicationFormsConfigurationsFormComponent', () => {
  let component: PublicationFormsConfigurationsFormComponent;
  let fixture: ComponentFixture<PublicationFormsConfigurationsFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicationFormsConfigurationsFormComponent]
    });
    fixture = TestBed.createComponent(PublicationFormsConfigurationsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
