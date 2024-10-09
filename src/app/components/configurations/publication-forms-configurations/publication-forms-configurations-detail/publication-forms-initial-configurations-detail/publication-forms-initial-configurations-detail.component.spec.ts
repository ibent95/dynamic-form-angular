import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationFormsInitialConfigurationsDetailComponent } from './publication-forms-initial-configurations-detail.component';

describe('PublicationFormsInitialConfigurationsDetailComponent', () => {
  let component: PublicationFormsInitialConfigurationsDetailComponent;
  let fixture: ComponentFixture<PublicationFormsInitialConfigurationsDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicationFormsInitialConfigurationsDetailComponent]
    });
    fixture = TestBed.createComponent(PublicationFormsInitialConfigurationsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
