import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationFormsAdvancedConfigurationsFormComponent } from './publication-forms-advanced-configurations-form.component';

describe('PublicationFormsAdvancedConfigurationsFormComponent', () => {
  let component: PublicationFormsAdvancedConfigurationsFormComponent;
  let fixture: ComponentFixture<PublicationFormsAdvancedConfigurationsFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicationFormsAdvancedConfigurationsFormComponent]
    });
    fixture = TestBed.createComponent(PublicationFormsAdvancedConfigurationsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
