import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationFormsConfigurationsDetailComponent } from './publication-forms-configurations-detail.component';

describe('PublicationFormsConfigurationsDetailComponent', () => {
  let component: PublicationFormsConfigurationsDetailComponent;
  let fixture: ComponentFixture<PublicationFormsConfigurationsDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicationFormsConfigurationsDetailComponent]
    });
    fixture = TestBed.createComponent(PublicationFormsConfigurationsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
