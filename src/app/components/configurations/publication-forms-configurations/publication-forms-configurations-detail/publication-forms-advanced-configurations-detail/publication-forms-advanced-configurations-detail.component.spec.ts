import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationFormsAdvancedConfigurationsDetailComponent } from './publication-forms-advanced-configurations-detail.component';

describe('PublicationFormsAdvancedConfigurationsDetailComponent', () => {
  let component: PublicationFormsAdvancedConfigurationsDetailComponent;
  let fixture: ComponentFixture<PublicationFormsAdvancedConfigurationsDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicationFormsAdvancedConfigurationsDetailComponent]
    });
    fixture = TestBed.createComponent(PublicationFormsAdvancedConfigurationsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
