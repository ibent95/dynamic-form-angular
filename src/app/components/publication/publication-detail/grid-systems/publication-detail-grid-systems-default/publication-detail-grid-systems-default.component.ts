import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { DFCustomAlertInfoNoDataComponent } from 'src/app/components/shared/dynamic-form/df-custom-alert-info-no-data/df-custom-alert-info-no-data.component';
import { DFMetadata } from "src/app/components/shared/dynamic-form/dynamic-forms";
import { LoaderComponent } from 'src/app/components/shared/loader/loader.component';
import { PublicationDetailRecursiveComponent } from '../../publication-detail-recursive/publication-detail-recursive.component';

@Component({
  selector: 'app-publication-detail-grid-systems-default',
  standalone: true,
  imports: [CommonModule, MatDividerModule, LoaderComponent, DFCustomAlertInfoNoDataComponent, PublicationDetailRecursiveComponent],
  templateUrl: './publication-detail-grid-systems-default.component.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PublicationDetailGridSystemsDefaultComponent implements OnInit {

  @Input() dfMetadata: DFMetadata | any;
  @Input() userData: any;

  @Output() onFormBackButtonClicked!: EventEmitter<any>;

  selectedPublicationType!: { text: string; value: any };
  publicationTypeUuid!: string;
  publicationTypeCode!: string;
  loadingMessage!: string;
  gridSystemsClassConfig!: Array<string>;

  constructor(
    private ref: ChangeDetectorRef,
  ) {
    this.onFormBackButtonClicked = new EventEmitter<any>(true);
  }

  public ngOnInit(): void {
    this.gridSystemsClassConfig = [];
    this.ref.detectChanges();
  }

  public onFormBackButtonClick() {
    this.onFormBackButtonClicked.emit(true);
  }

}
