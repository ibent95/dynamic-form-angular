import { Location } from "@angular/common";
import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormArray } from "@angular/forms";
import { setConsoleLog } from "src/app/services/app-general.service";
import { AppService } from "src/app/services/app.service";
import { DFMetadata, DFDataService, DFField } from "src/app/components/shared/dynamic-form/dynamic-forms";

@Component({
  selector: 'app-publication-form-recursive',
  templateUrl: './publication-form-recursive.component.html',
  styles: ['']
})
export class PublicationFormRecursiveComponent implements OnInit {

  @Input() dfMetadata: DFMetadata | any;
  @Input('parentForms') forms!: FormGroup;
  @Input() gridSystemsClassConfig!: Array<string>;
  @Input() parentField?: DFField;
  @Input() parentControlName?: string;
  
  @Output() onPublicationTypeSelected!: EventEmitter<any>;
  @Output() onFormCancelButtonClicked!: EventEmitter<any>;
  @Output() onFormSubmitButtonClicked!: EventEmitter<any>;
  @Output() type!: EventEmitter<any>;
  @Output() change!: EventEmitter<any>;
  
  fields!: Array<DFField>;
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
    this.type = new EventEmitter<any>(true);
    this.change = new EventEmitter<any>(true);
  }

  public ngOnInit(): void {
    this.fields = this.parentField?.children ?? this.dfMetadata.initialFields.forms ;
    this.parentControlName = this.parentControlName ?? '';
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

  /**
   * Functions, events or handlers after form`s metadata are load
   */

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

  /**
   * General event on type and change, so the function is a gateway or mapping of specifict function for every type of field
   * 1. onType is a event when field is typing, usually are for input, select, autoselect, autocomplete, multiple_select and multiple_autoselect
   * 1. onChange is a event when field value is change, usually are for all type of field
   */

	public onType(
    data: any,
    fieldConfig: DFField,
    controlName: string,
    index?: number
  ) {
		// Handler for every type of field
    switch (fieldConfig.field_type) {

      case 'url':
        this.onTypeUrlField(data, controlName, index);
        break;

      case 'mask_full_time':
        this.onTypeMaskFullTimeField(data, controlName, index);
        break;

      case 'select':
      case 'autoselect':
      case 'autocomplete':
        this.onTypeSelectFieldVariant(data, controlName, index);
        break;

      case 'multiple_select':
      case 'multiple_autoselect':
      case 'multiple_autocomplete':
        this.onTypeMultipleSelectFieldVariant(data, controlName, index);
        break;

      default: break;

    }
	}

	public onChange(
    data: any,
    fieldConfig: DFField,
    controlName: string,
    index?: number,
  ) {
		// Handler for every type of field
    switch (fieldConfig.field_type) {

      case 'select':
      case 'autoselect':
      case 'autocomplete':
        this.onChangeSelectFieldVariant(data, controlName, index);
        break;

      case 'multiple_select':
      case 'multiple_autoselect':
      case 'multiple_autocomplete':
        this.onChangeMultipleSelectFieldVariant(data, controlName, index);
        break;

      default: break;

    }
	}

  /**
   * Specifict functions to handle all event on type for all type of field
   */

  private onTypeSelectFieldVariant(data: any, controlName: string, index?: number) { }

  private onTypeMultipleSelectFieldVariant(data: any, controlName: string, index?: number) { }

  private onTypeUrlField(data: any, controlName: string, index?: number) { }

  private onTypeMaskFullTimeField(data: any, controlName: string, index?: number) { }

  /**
   * Specifict functions to handle all event on value change for all type of field
   */

  private onChangeSelectFieldVariant(data: any, controlName: string, index?: number) {
    this.forms.get(controlName + '_text')?.setValue(data.source?.selected?.viewValue);
  }

  private onChangeMultipleSelectFieldVariant(data: any, controlName: string, index?: number) {
    // this.forms.get(controlName + '_text')?.setValue(data.source?.selected?.viewValue);
  }

}
