import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationGeneralTypesMasterDataConfigurationsComponent } from './publication-general-types-master-data-configurations.component';

describe('PublicationGeneralTypesMasterDataConfigurationsComponent', () => {
  let component: PublicationGeneralTypesMasterDataConfigurationsComponent;
  let fixture: ComponentFixture<PublicationGeneralTypesMasterDataConfigurationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicationGeneralTypesMasterDataConfigurationsComponent]
    });
    fixture = TestBed.createComponent(PublicationGeneralTypesMasterDataConfigurationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
