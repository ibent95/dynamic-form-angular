import { CommonModule, Location } from "@angular/common";
import { ChangeDetectorRef, Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormArray, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppService } from 'src/app/services/app.service';
import { DFMetadata, DFDataService } from 'src/app/components/shared/dynamic-form/dynamic-forms';
import { MatFormFieldModule } from "@angular/material/form-field";
import { LoaderComponent } from "src/app/components/shared/loader/loader.component";
import { MatSelectModule } from "@angular/material/select";
import { DFCustomAlertInfoNoDataComponent } from "src/app/components/shared/dynamic-form/df-custom-alert-info-no-data/df-custom-alert-info-no-data.component";
import { PublicationFormRecursiveComponent } from "../../publication-form-recursive/publication-form-recursive.component";

@Component({
  selector: 'app-publication-form-grid-systems-tailwind',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatSelectModule, LoaderComponent, DFCustomAlertInfoNoDataComponent, PublicationFormRecursiveComponent],
  templateUrl: './publication-form-grid-systems-tailwind.component.html',
  styles: [''],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PublicationFormGridSystemsTailwindComponent implements OnInit {

  @Input() dfMetadata: DFMetadata | any;
  @Input('parentForms') forms!: FormGroup;

  @Output() onPublicationTypeSelected!: EventEmitter<any>;
  @Output() onFormCancelButtonClicked!: EventEmitter<any>;
  @Output() onFormSubmitButtonClicked!: EventEmitter<any>;

  selectedPublicationType!: { text: string; value: any };
  publicationTypeUuid!: string;
  publicationTypeCode!: string;
  loadingMessage!: string;
  gridSystemsClassConfig!: Array<string>;

  constructor(
    private location: Location,
    private appSvc: AppService,
    private dfDataSvc: DFDataService,
    private ref: ChangeDetectorRef,
  ) {
    this.onPublicationTypeSelected = new EventEmitter<any>(true);
    this.onFormCancelButtonClicked = new EventEmitter<any>(true);
    this.onFormSubmitButtonClicked = new EventEmitter<any>(true);
  }

  public ngOnInit(): void {
    this.gridSystemsClassConfig = [
      'grid',
      (this.dfMetadata.gridSystems?.cols) ? 'grid-cols-' + (this.dfMetadata.gridSystems?.cols || 12) : '',
      'grid-flow-row gap-3'
    ];

    this.ref.detectChanges();
  }

  private subscribeDFMetadata() {
    this.dfDataSvc.metadata.subscribe((metadata: DFMetadata | any) => {
      this.dfMetadata = metadata;
    });
  }

  // Function to get Form Group of formBuilder
  public getFormGroup(fieldName: string) {
    return this.forms?.get(fieldName) as FormArray;
  }

  public onPublicationTypeSlctSelect(data: any) {
    this.selectedPublicationType = { text: data.source?.selected?.viewValue, value: data };
    this.loadingMessage = 'Loading ' + this.selectedPublicationType?.text + ' form...';
    this.onPublicationTypeSelected.emit(data);
  }

  public onFormCancelButtonClick() {
    this.onFormCancelButtonClicked.emit(true);
  }

  public onFormSubmitButtonClick() {
    this.onFormSubmitButtonClicked.emit(true);
  }

  public onBackButtonClick() {
    this.location.back();
  }

}
