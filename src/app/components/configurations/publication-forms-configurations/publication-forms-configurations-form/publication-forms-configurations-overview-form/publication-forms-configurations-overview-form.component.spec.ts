import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationFormsConfigurationsOverviewFormComponent } from './publication-forms-configurations-overview-form.component';

describe('PublicationFormsConfigurationsOverviewFormComponent', () => {
  let component: PublicationFormsConfigurationsOverviewFormComponent;
  let fixture: ComponentFixture<PublicationFormsConfigurationsOverviewFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicationFormsConfigurationsOverviewFormComponent]
    });
    fixture = TestBed.createComponent(PublicationFormsConfigurationsOverviewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
