import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationFormsGeneralConfigurationsDetailComponent } from './publication-forms-general-configurations-detail.component';

describe('PublicationFormsGeneralConfigurationsDetailComponent', () => {
  let component: PublicationFormsGeneralConfigurationsDetailComponent;
  let fixture: ComponentFixture<PublicationFormsGeneralConfigurationsDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicationFormsGeneralConfigurationsDetailComponent]
    });
    fixture = TestBed.createComponent(PublicationFormsGeneralConfigurationsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
