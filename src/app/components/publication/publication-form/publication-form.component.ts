import { Location, formatDate } from "@angular/common";
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from "@angular/material/core";
import { LuxonDateAdapter, MAT_LUXON_DATE_ADAPTER_OPTIONS } from "@angular/material-luxon-adapter";
import { Router } from '@angular/router';
import { Subject, takeUntil } from "rxjs";
import { AppFormStatus, AppService, AppServiceType } from 'src/app/services/app.service';
import { AppGeneralService, LUXON_DATE_FORMATS, ResponseFormat } from "src/app/services/app-general.service";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { DialogConfirmComponent } from "src/app/components/shared/dialogs/dialog-confirm/dialog-confirm.component";
import { DFDataService, DFMetadata, NUMBER_VALIDATION_CONFIG_PATTERN, URL_VALIDATION_CONFIG_PATTERN } from "src/app/components/shared/dynamic-form/dynamic-forms";
import { BsModalService } from "ngx-bootstrap/modal";
import { CustomDialogPublicationSubmitConfirmComponent } from "./custom-dialog-publication-submit-confirm/custom-dialog-publication-submit-confirm.component";
import { HttpParams } from "@angular/common/http";

@Component({
  selector: 'app-publication-form',
  templateUrl: './publication-form.component.html',
  styleUrls: ['./publication-form.component.scss'],
  providers: [
    { provide: DateAdapter, useClass: LuxonDateAdapter, deps: [MAT_DATE_LOCALE, MAT_LUXON_DATE_ADAPTER_OPTIONS] },
    { provide: MAT_LUXON_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } },
    { provide: MAT_DATE_FORMATS, useValue: LUXON_DATE_FORMATS },
  ]
})
export class PublicationFormComponent implements OnInit {

  publicationTypeUuid!: string;
  publicationTypeCode!: string;
  formVersionCode!: string | null;

  // All forms metadata (full: form version and forms metadata)
  publicationFormMetadata!: any;

  // All forms metadata available only `field_name` (forms metadata)
  fieldInForms!: Array<any>;

  // All forms and user input in angular form bulder
  forms!: FormGroup;

  formStatus!: AppFormStatus;

  // All select`s options in forms
  selectOptions!: any;

  // All hidden fields in forms
  hiddenFields!: any;

  // All disabled fields in forms
  disabledFields!: any;

  // All disabled fields in forms
  selectURLParameters!: any;

  // All unique fields in forms
  uniqueFalseCheckField!: any;

  userData!: any;

  subscription$!: Subject<void>;

  defaultGridConfigs!: {
    rowsCols: Array<String>
  };

  dfMetadata!: DFMetadata | any;

  /**
   * Constructor and other functions before form`s metadata are load
   */

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private appSvc: AppService,
    private generalSvc: AppGeneralService,
    private location: Location,
    private dialog: MatDialog,
    private dfDataSvc: DFDataService,
    private ref: ChangeDetectorRef,
    private bsModalSvc: BsModalService,
  ) { }

  ngOnInit(): void {
    this.initiateData();
  }

  private initiateData(): void {
    this.dfMetadata = {
      noData: true,
      isRawMetadataLoaded: false,
      isFormBuilderCreated: false,
      isFormTypeLoaded: false,
      isFormTypeSelected: false,
      isMetadataLoaded: false,
      isWizardsAvaliable: false,
      isStepperAvaliable: false,
      isInSaveProcess: false,
      isCancelButtonDisabled: false,
      isSubmitButtonDisabled: false,

      gridSystems: {
        type: 'default',
        cols: 12,
        config: {},
      },
      initialFields: [],
      usedFields: [],
      selectOptions: null,
      disabledFields: null,
      hiddenFields: null,
      selectURLParameters: null,
      uniqueFalseCheckFields: null,

      wizardsCount: 0,
      currentDate: new Date(),
    };
    this.dfDataSvc.setMetadata(this.dfMetadata);

    this.publicationTypeCode = 'JUR-1';
    this.formVersionCode = 'JUR1-V1';

    this.fieldInForms = [];
    this.forms = new FormGroup({});

    this.selectOptions = {
      publication_type: {
        items: [],
        default_value: null
      }
    };

    this.hiddenFields = {};
    this.disabledFields = {};
    this.selectURLParameters = {};
    this.uniqueFalseCheckField = {};
    this.userData = window.history?.state;

    this.subscription$ = new Subject<void>();

    this.initiateForm();
  }

  // Initial function for build form
  private initiateForm(): void {
    this.formStatus = (this.userData?.uuid) ? AppFormStatus.UPDATE : AppFormStatus.CREATE ;

    // Back to previous page if update form and uuid data is not exist
    if (this.router.url === '/publication/update' && !this.userData?.uuid) {
      this.location.back();
    }

    this.dfMetadata.formStatus = this.formStatus ;

    this.forms = this.formBuilder.group({
      publication_type_code: (AppFormStatus.UPDATE) ? this.userData.publication_type?.publication_type_code : null,
      publication_type_uuid: (AppFormStatus.UPDATE) ? this.userData.publication_type?.uuid : null,
    });
    this.dfMetadata.isFormBuilderCreated = true;

    this.getMasterdataPublicationType();
  }

  // Function to get publication type
  private getMasterdataPublicationType(): void {
    this.appSvc.list(AppServiceType.PUBLICATIONS_MASTERDATA_PUBLICATION_TYPES).subscribe(response => {
      this.selectOptions['publication_type'].items = response['data'];

      this.dfMetadata.selectOptions = this.selectOptions;
      this.dfMetadata.isFormTypeLoaded = true;

      if (this.formStatus === AppFormStatus.UPDATE) {
        this.onPublicationTypeSelect({ value: this.userData.publication_type?.uuid });
      }
    });
  }

  // Event on select publication type
  public onPublicationTypeSelect(eventData: any): void {

    /**
     * Different way when from ngx-select is eventData[0].data;
     */

    const selectedData = this.selectOptions['publication_type'].items.find((item: any) => item.uuid === eventData.value);
    this.publicationTypeUuid = selectedData['uuid'] || null;
    this.publicationTypeCode = selectedData['publication_type_code'] || null;

    this.dfMetadata.isFormTypeSelected = true;
    this.dfMetadata.isMetadataLoaded = false;

    delete this.dfMetadata.noData;

    this.dfMetadata.gridSystems = {
      type: 'default',
      cols: 12,
      config: {},
    };
    this.dfMetadata.initialFields = [];
    this.dfMetadata.usedFields = [];

    this.updateGlobalDFMetadata();

    this.getFormMetadata(this.publicationTypeCode);
  }

  // Function to get metadata of form`s configuration
  private getFormMetadata(publicationTypeCode: string, formVersionCode?: string): void {

    let url = (this.formStatus === AppFormStatus.UPDATE)
      ? AppServiceType.PUBLICATIONS
      : AppServiceType.PUBLICATIONS_FORM_META_DATA ;

    let params = '/' + (
      (this.formStatus === AppFormStatus.UPDATE)
        ? this.userData?.uuid + '/form-meta-data'
        : publicationTypeCode
    );

    if (formVersionCode) params += '?form-version-code=' + formVersionCode;

    this.appSvc.listParams(url, new HttpParams(), params).subscribe(response => {
      this.dfMetadata.initialFields = response['data'];

      // Set available.form_metadata_loaded if publicationFormMetadata.forms`s value is valid
      if (this.dfMetadata.initialFields.forms) this.dfMetadata.isMetadataLoaded = false;

      // Check and set available.form_metadata_no_data if form meta data value is empty or not
      this.dfMetadata.noData = (
        (typeof this.dfMetadata.initialFields !== 'object') ||
        (
          (typeof this.dfMetadata.initialFields === 'object') &&
          (
            Array.isArray(this.dfMetadata.initialFields?.forms) &&
            (this.dfMetadata.initialFields?.forms.length === 0)
          )
        )
      );

      // Set grid system configuration
      this.dfMetadata.gridSystems = this.dfMetadata.initialFields.grid_system;

      this.updateGlobalDFMetadata();

      this.setFieldsByAttribute('field_name', this.dfMetadata.initialFields.forms);

      this.setDynamicFormValues(this.publicationTypeUuid, this.publicationTypeCode);
    });
  }

  // Recursive function to set field data (from backend: metadata) to flat array, also set other necessary settings (disable field, hidden field, params in endpoint for select)
  private setFieldsByAttribute(attribute: string, array: Array<any>) {
    let i = 0;

    array.forEach((element: any) => {

      // Default configs for all type of fiels
      if (element.hasOwnProperty(attribute) && element[attribute]) {

        /**
         * Push element (field) to fieldInForms so we can use it as database or library of current form configs.
         * Mostly it used to search field by type or name to access specifict handler
         */
        this.fieldInForms?.push(element);

        // Set hidden and disabled config
        this.hiddenFields[element.field_name] = false;
        this.disabledFields[element.field_name] = false;

        /**
         * Set custom code here
         */

      }

      /**
       * Custom configs seperated by type of fields
       * Each type of fields has specifict handler
       */
      switch (element.field_type) {
        case 'select':
        case 'autoselect':
        case 'autocomplete':
        case 'multiple_select':
        case 'multiple_autoselect':

          this.selectOptions[element.field_name] = {
            items: element.children || [],
            defaultValue: element.default_value || [],
            formControl: new FormControl()
          };

          this.selectURLParameters[element.field_name] = '';

          break;

        case 'multiple':
        case 'panel_multiple':

          element.children.forEach((value: any, key: any) => {

            this.selectOptions[value.field_name] = {
              items: value.children,
              defaultValue: [],
              formControl: new FormControl()
            };

            // Set initial value for every select url params
            //if (value.field_type === 'select' || value.field_type === 'autoselect' || value.field_type === 'autocomplete' || value.field_type === 'multiple_select' || value.field_type === 'multiple_autoselect') { }

            // Set hidden and disabled config
            if (value[attribute]) {
              this.hiddenFields[value.field_name] = false;
              this.disabledFields[value.field_name] = false;
            }

          });

          break;

          // Main containers
          case 'wizard':
          case 'stepper':
          case 'accordion':
          // Children containers
          case 'step':
          case 'panel':

          if (element?.children?.length > 0) {

            // Just set this configs to Main Containers to control container (such activated step)
            if (element?.field_type !== 'step' || element?.field_type !== 'panel') this.dfMetadata[element.field_id]?.push({
              field_label: element.field_label,
              step: i,
              active: (i === 0)
            });

            // Set attribute to children of this type of field to minimize custom handler for all fields type
            this.setFieldsByAttribute(attribute, element['children']);

            i++; // Maybe we can use another method to handle order of multiple/stepper
          }

          break;

        default:
          // code
          break;
      }

    });

    this.dfMetadata.usedFields = this.fieldInForms;
  }

  // Function to set value in forms (in Form Create and Update)
  private setDynamicFormValues(publicationTypeUuid: string, publicationTypeCode: string) {
    let fieldDataSets: any = {};

    fieldDataSets['publication_type_uuid'] = [
      { value: publicationTypeUuid, disabled: (this.formStatus === AppFormStatus.UPDATE) },
      [Validators.required]
    ];
    fieldDataSets['publication_type_code'] = publicationTypeCode;

    this.fieldInForms.forEach((element: any) => {

      this.uniqueFalseCheckField[element.field_name] = {
        'value': false,
        'error_message': 'Data ' + element.field_label + ' sudah dimasukan, silahkan masukan data ' + element.field_label + ' yang lain.'
      };

      fieldDataSets[element.field_name + '_uuid'] = element?.uuid;
      // Change suffix of value property name
      switch (element.field_type) {

        case 'multiple':
        case 'multiple_panel':
          let multipleGroup: Array<any> = [];

          this.selectURLParameters[element.field_name] = [];
          this.selectOptions[element.field_name] = [];
          this.dfMetadata.unknown[element.field_name] = [];
          this.uniqueFalseCheckField[element.field_name] = [];

          if (element?.value?.length > 0) {
            element.value.forEach((apiData: any, index: number) => {
              // multipleGroup.push(this.doCreateMultipleItem(element.field_name, element.children, index, apiData));
            })
            fieldDataSets[element.field_name] = this.formBuilder.array(multipleGroup);
          } else {
            // fieldDataSets[element.field_name] = this.formBuilder.array([this.doCreateMultipleItem(element.field_name, element.children, multipleGroup.length)]);
          }
          break;

        case 'multiple_select':
        case 'multiple_autoselect':
        case 'multiple_autocomplete':
          // Initial array
          let selectedMultipleData = element?.value || [];

          /**
           * Save support data
           * 1. Master data of options for all variant of select types (select, autoselect, autocomplete).
           * 2. Url parameters for autoselect and autocomplete (when user search for a data, it will search trough an API with these url parameters).
           * 3. Selected data for backup.
           */
          this.selectOptions[element.field_name] = {
            items: element.options || [],
            defaultValue: element.default_value || [],
          };
          this.selectURLParameters[element.field_name] = '';
          this.dfMetadata.unknown[element.field_name] = selectedMultipleData;

          /**
           * For select`s type variant, there are three value that must store in FormGroup wich is:
           * 1. Options, to store all options.
           * 2. Data, to store original selected data (text and uuid values).
           */
          fieldDataSets[element.field_name + '_options'] = this.selectOptions[element.field_name];
          fieldDataSets[element.field_name] = [selectedMultipleData];
          break;

        case 'select':
        case 'autoselect':
        case 'autocomplete':
          /**
           * Save support data
           * 1. Master data of options for all variant of select types (select, autoselect, autocomplete).
           * 2. Url parameters for autoselect and autocomplete (when user search for a data, it will search trough an API with these url parameters).
           */
          this.selectOptions[element.field_name] = {
            items: element.options || [],
            defaultValue: element.default_value || [],
          };
          this.selectURLParameters[element.field_name] = '';

          /**
           * For select`s type variant, there are three value that must store in FormGroup wich is:
           * 1. Options, to store all options.
           * 2. Text, to store selected text data.
           * 3. Data, to store original selected uuid data (mostly uuid).
           */
          fieldDataSets[element.field_name + '_options'] = this.selectOptions[element.field_name];
          fieldDataSets[element.field_name + '_text'] = [element?.other_value?.text || ''];
          fieldDataSets[element.field_name] = [element?.value || ''];

          /**
           * Info: when you want to trigger the onType event, comment out this.
           * if (this.userData[element.field_name]) {
           *    this.onType(
           *      this.userData[element.field_name],
           *      element.field_type,
           *      element.field_name,
           *      element.dependency_child,
           *      element.dependency_parent,
           *      element.uuid_form
           *    );
           * }
           */
          break;

        case 'file':
        case 'image':
        case 'file-upload':
        case 'image-upload':
          // Set image placeholder for empty data if possible
          fieldDataSets[element.field_name] = [element?.value || ''];
          break;

        case 'date':
        case 'month':
        case 'year':
        case 'time':
        case 'datetime':
        case 'owl-date':
        case 'owl-month':
        case 'owl-year':
        case 'owl-time':
        case 'owl-datetime':
          // Set value to Date() object.
          fieldDataSets[element.field_name] = (element?.value) ? new Date(element?.value) : new Date();
          break;

        case 'daterange':
        case 'timerange':
        case 'datetimerange':
        case 'owl-daterange':
        case 'owl-timerange':
        case 'owl-datetimerange':
          // Initial range value
          const dateRangeData: Array<any> = element?.value || null;

          // Set range of values to Date() objects.
          fieldDataSets[element.field_name] = (dateRangeData) ? [
            (dateRangeData[0]) ? new Date(dateRangeData[0]) : new Date(),
            (dateRangeData[1]) ? new Date(dateRangeData[1]) : new Date()
          ] : '';
          break;

        case 'radio':
          // Save support data of Master data of options
          this.selectOptions[element.field_name] = {
            items: element.options || [],
            defaultValue: element.default_value || [],
          };

          /**
           * For select`s type variant, there are three value that must store in FormGroup wich is:
           * 1. Options, to store all options.
           * 2. Text, to store selected text data.
           * 3. Data, to store original selected uuid data (mostly uuid).
           */
          fieldDataSets[element.field_name + '_options'] = this.selectOptions[element.field_name];
          fieldDataSets[element.field_name + '_text'] = [element?.other_value?.text || ''];
          fieldDataSets[element.field_name] = [element?.value || ''];
          break;

        case 'checkbox':
          // For true or false values
          fieldDataSets[element.field_name] = [
            (element?.value || element?.value === '1') || false
          ];
          break;

        case 'number':
          fieldDataSets[element.field_name] = [
            element?.value || 1,
            [
              Validators.min(element.validation_config?.min || 0),
              Validators.pattern(element.validation_config?.pattern || NUMBER_VALIDATION_CONFIG_PATTERN)
            ]
          ];
          break;

        case 'mask':
        case 'mask_full_time':
          this.dfMetadata.unknown[element.field_name] = element?.value || '';

          fieldDataSets[element.field_name] = [element?.value || ''];
          break;

        case 'url':
          fieldDataSets[element.field_name] = [
            element?.value,
            [
              Validators.pattern(
              element.validation_config?.pattern || URL_VALIDATION_CONFIG_PATTERN
            )]
          ];
          break;

        default: // Handler for text or other field type
          fieldDataSets[element.field_name] = (element.validation_config?.pattern)
            ? [element?.value, Validators.pattern(element.validation_config.pattern)]
            : element?.value;
          break;
      }

    });

    this.forms = this.formBuilder.group(fieldDataSets);

    this.dfMetadata.selectOptions = this.selectOptions;
    this.dfMetadata.disabledFields = this.disabledFields;
    this.dfMetadata.hiddenFields = this.hiddenFields;
    this.dfMetadata.selectURLParameters = this.selectURLParameters;
    this.dfMetadata.uniqueFalseCheckFields = this.uniqueFalseCheckField;

    this.dfMetadata.isMetadataLoaded = true;

    // Console log after form created
    //setConsoleLog(this.forms.getRawValue(), 'formBuilder initial value : ')
    //setConsoleLog(this.available, 'available initial value : ')
    //setConsoleLog(this.fieldInForms, 'fieldInForms : ')

    // Handler after form created
    this.ref.detectChanges();
    this.updateGlobalDFMetadata();
    //this.setInitialFieldDependencyConfig();
    this.subscribeToFormsChanges();
  }

  private updateGlobalDFMetadata() {
    this.dfDataSvc.setMetadata(this.dfMetadata);
  }

  // Function for check changes of form
  private subscribeToFormsChanges() {
    // Status changes
    //this.forms.statusChanges.pipe(takeUntil(this.subscription$)).subscribe(() => {
    //  this.statusSvc.addEditMode = true;
    //});

    // Value changes
    this.forms.valueChanges.pipe(takeUntil(this.subscription$)).subscribe(() => {
      //this.updateGlobalDFMetadata();
      Object.keys(this.forms?.controls).forEach(key => {
        const controlErrors: ValidationErrors | null | undefined = this.forms.get(key)?.errors;
        if (controlErrors != null) {
          Object.keys(controlErrors).forEach(keyError => {
            console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
          });
        }
      });
    });
  }

  public get forms_metadata(): Array<any> {
    return this.publicationFormMetadata?.forms;
  }

  // Function to get Form Control of formBuilder for custom component / child component (Shared component)
  public getFieldControl(fieldName: string) {
    return this.forms?.get(fieldName) as FormControl;
  }

  // Function to get Form Group of formBuilder
  public getFormGroup(fieldName: string) {
    return this.forms?.get(fieldName) as FormGroup;
  }

  /**
   * Functions, events or handlers before submit or cancel form
   */

  // Event on click back button
  public onBackButtonClick() {
    this.location.back();
  }

  // Event on click cancel button
  public onFormCancelButtonClick() {
    this.dfMetadata.isSubmitButtonDisabled = !!this.dfMetadata.isSubmitButtonDisabled;

    let dialogConfig: MatDialogConfig = {
      // height: '280px',
      width: '600px',
      data: {
        title: 'Are you sure to leave this form?',
        messages: 'Your data will be destroy after leave th form.',
        noButtonText: 'No',
        yesButtonText: 'Sure',
      }
    };

    // Dialog initial configuration and open
    const dialogRef = this.dialog.open(DialogConfirmComponent, dialogConfig);

    // Subscribe to dialog closed event
    dialogRef.afterClosed().subscribe((response: any) => {
      if (response.result) { // If user`s choice is yes, set location`s back
        this.location.back();

      } else { // Default handler, to set disable of submit button
        this.dfMetadata.isSubmitButtonDisabled = !!this.dfMetadata.isSubmitButtonDisabled;
      }
    });
  }

  // Event on click submit button
  public onFormSubmitButtonClick() {

    let dialogConfig: MatDialogConfig = {
      width: '600px',
      data: {
        title: 'Are you sure to submit this publication?',
        messages: 'You can save it as Draft or proceed to Submit',
        cancelButtonText: 'Cancel',
        draftButtonText: 'Draft',
        proceedButtonText: 'Proceed',
      }
    };

    // Dialog initial configuration and open
    const dialogRef = this.dialog.open(CustomDialogPublicationSubmitConfirmComponent, dialogConfig);

    // Subscribe to dialog closed event
    dialogRef.afterClosed().subscribe((response: any) => {
      if (response) {
        const statusCode = (response === 'draft') ? 'DRF' : 'PRO';
        this.dfMetadata.isSubmitButtonDisabled = true;
        this.dfMetadata.isCancelButtonDisabled = true;
        this.dfMetadata.isInSaveProcess = true;

        const formData = this.setFormData(this.forms.getRawValue(), statusCode);
        const stringParameter = (this.userData?.uuid) ? '/' + this.userData?.uuid : '';

        this.sendData(formData, this.formStatus, null, stringParameter);
      } else {
        this.dfMetadata.isSubmitButtonDisabled = false;
        this.dfMetadata.isCancelButtonDisabled = false;
        this.dfMetadata.isInSaveProcess = false;
      }
    });

  }

  private setFormData(formValues: any, statusCode: string = 'DRF'): FormData {
    let result = new FormData();

    result.append('publication_status_code', statusCode);
    result.append('publication_type_code', formValues['publication_type_code'] || '');

    this.fieldInForms.forEach((field: any, fieldIndex: number) => {
      switch (field.field_type) {
        case 'multiple':
        case 'multiple_panel': break;

        case 'multiple_select':
        case 'multiple_autoselect':
        case 'multiple_autocomplete':
          let multipleSelectVariantValue: Array<string> = formValues[field.field_name];
          let multipleSelectVariantTextValue: Array<string> = formValues[field.field_name + '_text'];

          result.append('meta_data[' + fieldIndex + '][uuid]', formValues[field.field_name + '_uuid'] || '');
          result.append('meta_data[' + fieldIndex + '][field_name]', field.field_name || '');
          if (multipleSelectVariantValue) {
            multipleSelectVariantValue?.forEach((item: any, itemIndex: number) => {
              result.append('meta_data[' + fieldIndex + '][value][' + itemIndex + ']', item || '');
              result.append('meta_data[' + fieldIndex + '][other_value][' + itemIndex + '][uuid]', item || '');
              result.append('meta_data[' + fieldIndex + '][other_value][' + itemIndex + '][value]', item || '');
              result.append('meta_data[' + fieldIndex + '][other_value][' + itemIndex + '][text]', multipleSelectVariantTextValue[itemIndex] || '');
            });
          } else {
            result.append('meta_data[' + fieldIndex + '][value]', '');
            result.append('meta_data[' + fieldIndex + '][other_value]', '');
          }
          break;

        case 'select':
        case 'autoselect':
        case 'autocomplete':
        case 'radio':
          result.append('meta_data[' + fieldIndex + '][uuid]', formValues[field.field_name + '_uuid'] || '');
          result.append('meta_data[' + fieldIndex + '][field_name]', field.field_name || '');
          result.append('meta_data[' + fieldIndex + '][value]', formValues[field.field_name] || '');
          result.append('meta_data[' + fieldIndex + '][other_value][uuid]', formValues[field.field_name] || '');
          result.append('meta_data[' + fieldIndex + '][other_value][value]', formValues[field.field_name] || '');
          result.append('meta_data[' + fieldIndex + '][other_value][text]', formValues[field.field_name + '_text'] || '');
          break;

        case 'date':
        case 'month':
        case 'year':
        case 'time':
        case 'datetime':
        case 'owl-date':
        case 'owl-month':
        case 'owl-year':
        case 'owl-time':
        case 'owl-datetime':
          // Set value to Date() object.
          let dateTimeFormat: string = (field.field_type === 'time' || field.field_type === 'owl-time') ? 'HH:mm:ss' : 'Y-MM-dd HH:mm:ss' ;
          let dateTimeValue = '';

          if (field.field_type === 'time') {
            dateTimeValue = (formValues[field.field_name])
              ? formValues[field.field_name]
              : '' ;
          } else {
            dateTimeValue = (formValues[field.field_name])
              ? formatDate(formValues[field.field_name], dateTimeFormat, 'id')
              : '' ;
          }

          result.append('meta_data[' + fieldIndex + '][uuid]', formValues[field.field_name + '_uuid'] || '');
          result.append('meta_data[' + fieldIndex + '][field_name]', field.field_name || '');
          result.append('meta_data[' + fieldIndex + '][value]', dateTimeValue);
          result.append('meta_data[' + fieldIndex + '][other_value]', '');
          break;

        case 'daterange':
        case 'timerange':
        case 'datetimerange':
        case 'owl-daterange':
        case 'owl-timerange':
        case 'owl-datetimerange':
          // Set value to Date() object.
          let dateTimeRangeFormat: string = (field.field_type === 'timerange' || field.field_type === 'owl-timerange') ? 'HH:mm:ss' : 'Y-MM-dd HH:mm:ss' ;
          let dateTimeRangeValues = formValues[field.field_name];

          result.append('meta_data[' + fieldIndex + '][uuid]', formValues[field.field_name + '_uuid'] || '');
          result.append('meta_data[' + fieldIndex + '][field_name]', field.field_name || '');
          if (dateTimeRangeValues) {
            dateTimeRangeValues?.forEach((item: any, itemIndex: number) => {
              let dateTimeRangeOtherValueName = 'meta_data[' + fieldIndex + '][other_value][' + ((itemIndex === 0) ? 'start_date' : 'end_date') + ']';
              let dateTimeRangeValueName = 'meta_data[' + fieldIndex + '][value][' + itemIndex + ']';
              let dateTimeRangeValue = (item) ? formatDate(item, dateTimeRangeFormat, 'id') : '';

              result.append(dateTimeRangeValueName, dateTimeRangeValue);
              result.append(dateTimeRangeOtherValueName, dateTimeRangeValue);
            });
          } else {
            result.append('meta_data[' + fieldIndex + '][value]', '');
            result.append('meta_data[' + fieldIndex + '][other_value]', '');
          }
          break;

        case 'checkbox':
          result.append('meta_data[' + fieldIndex + '][uuid]', formValues[field.field_name + '_uuid'] || '');
          result.append('meta_data[' + fieldIndex + '][field_name]', field.field_name || '');
          result.append('meta_data[' + fieldIndex + '][value]', (formValues[field.field_name]) ? '1' : '0');
          result.append('meta_data[' + fieldIndex + '][other_value]', '');
          break;

        default:
          result.append('meta_data[' + fieldIndex + '][uuid]', formValues[field.field_name + '_uuid'] || '');
          result.append('meta_data[' + fieldIndex + '][field_name]', field.field_name || '');
          result.append('meta_data[' + fieldIndex + '][value]', formValues[field.field_name] || '');
          result.append('meta_data[' + fieldIndex + '][other_value]', '');
          break;
      }
    });

    // Extra form data for PUT
    if (this.formStatus === AppFormStatus.UPDATE) {
      result.append('_method', 'PUT');
    }

    return result;
  }

  private sendData(formData: FormData, formStatus: AppFormStatus, parameter: any = null, stringParams: string = ''): void {

    // Access create API
    if (formStatus === AppFormStatus.CREATE) {
      this.appSvc.create(AppServiceType.PUBLICATIONS, formData, parameter, stringParams).subscribe(
        (successResponse: ResponseFormat) => {
          this.handleResponse(successResponse);
          this.router.navigate(['/publication']);
        },
        (errorResponse: ResponseFormat) => {
          this.handleResponse(errorResponse);
          this.dfMetadata.isSubmitButtonDisabled = false;
          this.dfMetadata.isCancelButtonDisabled = false;
          this.dfMetadata.isInSaveProcess = false;
        },
        () => {
          this.dfMetadata.isSubmitButtonDisabled = false;
          this.dfMetadata.isCancelButtonDisabled = false;
          this.dfMetadata.isInSaveProcess = false;
        }
      );
    }

    // Access update API (with Symfony backend problem request data on PUT method, I change to POST with extra form data `_method` PUT for temporary fix)
    if (formStatus === AppFormStatus.UPDATE) {
      this.appSvc.create(AppServiceType.PUBLICATIONS, formData, parameter, stringParams).subscribe(
        (successResponse: ResponseFormat) => {
          this.handleResponse(successResponse);
          this.router.navigate(['/publication']);
        },
        (errorResponse: ResponseFormat) => {
          this.handleResponse(errorResponse);
          this.dfMetadata.isSubmitButtonDisabled = false;
          this.dfMetadata.isCancelButtonDisabled = false;
          this.dfMetadata.isInSaveProcess = false;
        },
        () => {
          this.dfMetadata.isSubmitButtonDisabled = false;
          this.dfMetadata.isCancelButtonDisabled = false;
          this.dfMetadata.isInSaveProcess = false;
        }
      );
    }
  }

  private handleResponse(response: ResponseFormat): void {
    this.generalSvc.setResponseSnackBar(response);
  }

}