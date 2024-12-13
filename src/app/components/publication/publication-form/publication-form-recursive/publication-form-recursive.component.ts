import { BreakpointObserver } from "@angular/cdk/layout";
import { StepperOrientation } from "@angular/cdk/stepper";
import { CommonModule, Location } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { FormGroup, FormArray, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatStepperModule } from "@angular/material/stepper";
import { Observable, map } from "rxjs";
import { DFAlertComponent } from "src/app/components/shared/dynamic-form/df-alert/df-alert.component";
import { DFCustomAlertInfoNoDataComponent } from "src/app/components/shared/dynamic-form/df-custom-alert-info-no-data/df-custom-alert-info-no-data.component";
import { DFDialogFileUploadPromptComponent } from "src/app/components/shared/dynamic-form/df-dialog-file-upload-prompt/df-dialog-file-upload-prompt.component";
import { DFFieldCheckboxComponent } from "src/app/components/shared/dynamic-form/df-field-checkbox/df-field-checkbox.component";
import { DFFieldColorComponent } from "src/app/components/shared/dynamic-form/df-field-color/df-field-color.component";
import { DFFieldDateComponent } from "src/app/components/shared/dynamic-form/df-field-date/df-field-date.component";
import { DFFieldDatetimeComponent } from "src/app/components/shared/dynamic-form/df-field-datetime/df-field-datetime.component";
import { DFFieldEmailComponent } from "src/app/components/shared/dynamic-form/df-field-email/df-field-email.component";
import { DFFieldFileUploadComponent } from "src/app/components/shared/dynamic-form/df-field-file-upload/df-field-file-upload.component";
import { DFFieldFileComponent } from "src/app/components/shared/dynamic-form/df-field-file/df-field-file.component";
import { DFFieldImageUploadComponent } from "src/app/components/shared/dynamic-form/df-field-image-upload/df-field-image-upload.component";
import { DFFieldImageComponent } from "src/app/components/shared/dynamic-form/df-field-image/df-field-image.component";
import { DFFieldMonthComponent } from "src/app/components/shared/dynamic-form/df-field-month/df-field-month.component";
import { DFFieldMultipleComponent } from "src/app/components/shared/dynamic-form/df-field-multiple/df-field-multiple.component";
import { DFFieldNGXSelectComponent } from "src/app/components/shared/dynamic-form/df-field-ngx-select/df-field-ngx-select.component";
import { DFFieldNumberComponent } from "src/app/components/shared/dynamic-form/df-field-number/df-field-number.component";
import { DFFieldOwlDatetimeComponent } from "src/app/components/shared/dynamic-form/df-field-owl-datetime/df-field-owl-datetime.component";
import { DFFieldPasswordComponent } from "src/app/components/shared/dynamic-form/df-field-password/df-field-password.component";
import { DFFieldRadioComponent } from "src/app/components/shared/dynamic-form/df-field-radio/df-field-radio.component";
import { DFFieldSearchComponent } from "src/app/components/shared/dynamic-form/df-field-search/df-field-search.component";
import { DFFieldSelectComponent } from "src/app/components/shared/dynamic-form/df-field-select/df-field-select.component";
import { DFFieldSliderComponent } from "src/app/components/shared/dynamic-form/df-field-slider/df-field-slider.component";
import { DFFieldTelComponent } from "src/app/components/shared/dynamic-form/df-field-tel/df-field-tel.component";
import { DFFieldTextComponent } from "src/app/components/shared/dynamic-form/df-field-text/df-field-text.component";
import { DFFieldTextareaComponent } from "src/app/components/shared/dynamic-form/df-field-textarea/df-field-textarea.component";
import { DFFieldTimeComponent } from "src/app/components/shared/dynamic-form/df-field-time/df-field-time.component";
import { DFFieldUrlComponent } from "src/app/components/shared/dynamic-form/df-field-url/df-field-url.component";
import { DFFieldYearComponent } from "src/app/components/shared/dynamic-form/df-field-year/df-field-year.component";
import { DFWrapperAccordionComponent } from "src/app/components/shared/dynamic-form/df-wrapper-accordion/df-wrapper-accordion.component";
import { DFWrapperMultipleComponent } from "src/app/components/shared/dynamic-form/df-wrapper-multiple/df-wrapper-multiple.component";
import { DFWrapperPanelComponent } from "src/app/components/shared/dynamic-form/df-wrapper-panel/df-wrapper-panel.component";
import { DFWrapperStepperComponent } from "src/app/components/shared/dynamic-form/df-wrapper-stepper/df-wrapper-stepper.component";
import { DFMetadata, DFField, DFDataService } from "src/app/components/shared/dynamic-form/dynamic-forms";
import { setConsoleLog } from "src/app/services/app-general.service";
import { AppService } from "src/app/services/app.service";

@Component({
  selector: 'app-publication-form-recursive',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatGridListModule, MatExpansionModule, MatButtonModule, MatStepperModule, DFFieldDateComponent, DFFieldEmailComponent, DFFieldFileComponent, DFFieldFileUploadComponent, DFFieldImageComponent, DFFieldImageUploadComponent, DFFieldMonthComponent, DFFieldNumberComponent, DFFieldOwlDatetimeComponent, DFFieldSelectComponent, DFFieldTextComponent, DFFieldTimeComponent, DFFieldUrlComponent, DFFieldYearComponent],
  templateUrl: './publication-form-recursive.component.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PublicationFormRecursiveComponent implements OnInit {

  private location: Location = inject(Location);
  private appSvc: AppService = inject(AppService);
  private dfDataSvc: DFDataService = inject(DFDataService);
  private ref: ChangeDetectorRef = inject(ChangeDetectorRef);

  @Input() dfMetadata: DFMetadata | any;
  @Input('parentForms') forms!: FormGroup;
  @Input() gridSystemsClassConfig!: Array<string>;
  @Input() parentField?: DFField;
  @Input() parentControlName?: string;
  @Input() isDetails?: string;

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

  stepperOrientation: Observable<StepperOrientation>;

  constructor() {
    const breakpointObserver = inject(BreakpointObserver);
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));

    // Output or event emitter
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
