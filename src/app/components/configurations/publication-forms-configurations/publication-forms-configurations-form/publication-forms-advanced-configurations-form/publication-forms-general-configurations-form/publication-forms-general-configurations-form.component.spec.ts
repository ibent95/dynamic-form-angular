import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationFormsGeneralConfigurationsFormComponent } from './publication-forms-general-configurations-form.component';

describe('PublicationFormsGeneralConfigurationsFormComponent', () => {
  let component: PublicationFormsGeneralConfigurationsFormComponent;
  let fixture: ComponentFixture<PublicationFormsGeneralConfigurationsFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicationFormsGeneralConfigurationsFormComponent]
    });
    fixture = TestBed.createComponent(PublicationFormsGeneralConfigurationsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
