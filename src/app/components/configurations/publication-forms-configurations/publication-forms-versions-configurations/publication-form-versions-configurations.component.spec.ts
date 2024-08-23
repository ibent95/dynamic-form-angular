import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationFormVersionsConfigurationsComponent } from './publication-form-versions-configurations.component';

describe('PublicationFormVersionsConfigurationsComponent', () => {
  let component: PublicationFormVersionsConfigurationsComponent;
  let fixture: ComponentFixture<PublicationFormVersionsConfigurationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicationFormVersionsConfigurationsComponent]
    });
    fixture = TestBed.createComponent(PublicationFormVersionsConfigurationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
