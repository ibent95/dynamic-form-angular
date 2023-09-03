import { Location } from "@angular/common";
import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { AppService } from 'src/app/services/app.service';
import { DFMetadata, DFDataService } from 'src/app/shared/dynamic-form/dynamic-forms';

@Component({
  selector: 'app-publication-form-grid-systems-material',
  templateUrl: './publication-form-grid-systems-material.component.html',
  styleUrls: ['./publication-form-grid-systems-material.component.scss']
})
export class PublicationFormGridSystemsMaterialComponent implements OnInit {

  @Input() dfMetadata: DFMetadata | any;
  @Input('parentForms') forms!: FormGroup;

  @Output() onPublicationTypeSelected!: EventEmitter<any>;
  @Output() onFormCancelButtonClicked!: EventEmitter<any>;
  @Output() onFormSubmitButtonClicked!: EventEmitter<any>;

  selectedPublicationType!: { text: string; value: any };
  publicationTypeUuid!: string;
  publicationTypeCode!: string;
  loadingMessage!: string;

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
