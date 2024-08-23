import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationFormsVersionsConfigurationsDetailComponent } from './publication-forms-versions-configurations-detail.component';

describe('PublicationFormsVersionsConfigurationsDetailComponent', () => {
  let component: PublicationFormsVersionsConfigurationsDetailComponent;
  let fixture: ComponentFixture<PublicationFormsVersionsConfigurationsDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicationFormsVersionsConfigurationsDetailComponent]
    });
    fixture = TestBed.createComponent(PublicationFormsVersionsConfigurationsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
