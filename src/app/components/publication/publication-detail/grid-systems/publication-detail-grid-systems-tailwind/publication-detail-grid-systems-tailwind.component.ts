import { ChangeDetectorRef, Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DFCustomAlertInfoNoDataComponent } from 'src/app/components/shared/dynamic-form/df-custom-alert-info-no-data/df-custom-alert-info-no-data.component';
import { DFMetadata } from 'src/app/components/shared/dynamic-form/dynamic-forms';
import { LoaderComponent } from 'src/app/components/shared/loader/loader.component';
import { PublicationDetailRecursiveComponent } from '../../publication-detail-recursive/publication-detail-recursive.component';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-publication-detail-grid-systems-tailwind',
  standalone: true,
  imports: [CommonModule, MatDividerModule, LoaderComponent, DFCustomAlertInfoNoDataComponent, PublicationDetailRecursiveComponent],
  templateUrl: './publication-detail-grid-systems-tailwind.component.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PublicationDetailGridSystemsTailwindComponent implements OnInit {

  @Input() dfMetadata: DFMetadata | any;
  @Input() userData: any;

  @Output() onBackButtonClicked!: EventEmitter<any>;

  selectedPublicationType!: { text: string; value: any };
  publicationTypeUuid!: string;
  publicationTypeCode!: string;
  loadingMessage!: string;
  gridSystemsClassConfig!: Array<string>;
  gridSystemsChildClassConfig!: string;

  constructor(
    private ref: ChangeDetectorRef,
  ) {
    this.onBackButtonClicked = new EventEmitter<any>(true);
  }

  public ngOnInit(): void {
    this.gridSystemsClassConfig = [
      'grid',
      (this.dfMetadata.gridSystems?.cols) ? 'grid-cols-' + (this.dfMetadata.gridSystems?.cols || 12) : '',
      'grid-flow-row gap-3'
    ];
    this.gridSystemsChildClassConfig = 'grid grid-cols-12 grid-flow-col auto-cols-max';
    this.ref.detectChanges();
  }

  public onBackButtonClick() {
    this.onBackButtonClicked.emit(true);
  }

}
