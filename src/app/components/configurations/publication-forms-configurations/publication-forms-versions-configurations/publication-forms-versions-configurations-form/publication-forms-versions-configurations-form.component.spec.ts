import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationFormsVersionsConfigurationsFormComponent } from './publication-forms-versions-configurations-form.component';

describe('PublicationFormsVersionsConfigurationsFormComponent', () => {
  let component: PublicationFormsVersionsConfigurationsFormComponent;
  let fixture: ComponentFixture<PublicationFormsVersionsConfigurationsFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicationFormsVersionsConfigurationsFormComponent]
    });
    fixture = TestBed.createComponent(PublicationFormsVersionsConfigurationsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
