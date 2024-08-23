import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationTypesMasterDataConfigurationsComponent } from './publication-types-master-data-configurations.component';

describe('PublicationTypesMasterDataConfigurationsComponent', () => {
  let component: PublicationTypesMasterDataConfigurationsComponent;
  let fixture: ComponentFixture<PublicationTypesMasterDataConfigurationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublicationTypesMasterDataConfigurationsComponent]
    });
    fixture = TestBed.createComponent(PublicationTypesMasterDataConfigurationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
