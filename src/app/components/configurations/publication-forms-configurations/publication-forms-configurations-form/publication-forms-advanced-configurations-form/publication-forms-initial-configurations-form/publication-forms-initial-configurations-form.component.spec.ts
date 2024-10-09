import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationFormsInitialConfigurationsFormComponent } from './publication-forms-initial-configurations-form.component';

describe('PublicationFormsInitialConfigurationsFormComponent', () => {
  let component: PublicationFormsInitialConfigurationsFormComponent;
  let fixture: ComponentFixture<PublicationFormsInitialConfigurationsFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicationFormsInitialConfigurationsFormComponent]
    });
    fixture = TestBed.createComponent(PublicationFormsInitialConfigurationsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
