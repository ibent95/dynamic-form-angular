import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationFormsConfigurationsComponent } from './publication-forms-configurations.component';

describe('PublicationFormsConfigurationsComponent', () => {
  let component: PublicationFormsConfigurationsComponent;
  let fixture: ComponentFixture<PublicationFormsConfigurationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicationFormsConfigurationsComponent]
    });
    fixture = TestBed.createComponent(PublicationFormsConfigurationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
