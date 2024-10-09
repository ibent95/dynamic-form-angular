import { BreakpointObserver } from '@angular/cdk/layout';
import { Location } from '@angular/common';
import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatStepper, StepperOrientation } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { DialogConfirmComponent } from 'src/app/components/shared/dialogs/dialog-confirm/dialog-confirm.component';
import { AppGeneralService, PageState } from 'src/app/services/app-general.service';
import { AppFormStatus, AppService, AppServiceType } from 'src/app/services/app.service';

export interface FormStatesInterface {
  isFormCreated: boolean;
  isDataPublicationFormLoaded: boolean;
  isMasterDataPublicationFormVersionsLoaded: boolean;
  isMasterDataPublicationFormsLoaded: boolean;
  isMasterDataDynamicFormFieldTypesLoaded: boolean;
  isMasterDataDynamicFormFieldOptionsLoaded: boolean;
  isLoading: boolean;
  isFormCancelButtonDisabled: boolean;
  isSubmited: boolean;
  isError: boolean;
}

export interface SelectOptionsInterface {
  formVersions: any;
  forms: any;
  fieldTypes: any;
  fieldOptions: any;
  actions: any;
  logics: any;
  comparisons: any;
}

@Component({
  selector: 'app-publication-forms-configurations-form',
  templateUrl: './publication-forms-configurations-form.component.html',
  styles: ['']
})
export class PublicationFormsConfigurationsFormComponent implements OnInit {

  pageState!: PageState;
  @ViewChild('stepper') stepper!: MatStepper;

  // All forms and user input in angular form builder
  initialForm!: FormGroup;
  generalForm!: FormGroup;
  advancedForm!: FormGroup;

  formStatus!: AppFormStatus;
  formStates!: FormStatesInterface;

  stateData!: any;
  data!: any;

  selectOptions!: SelectOptionsInterface; // All select`s options in forms
  selectedPublicationFormVersion!: any;
  selectedPublicationFieldType!: any;
  selectedPublicationFormParent!: any;
  publicationFormParentSelectOptionsLoaded: boolean = true; // Set value to false first because it will be trigger by form version changes
  stepperOrientation!: Observable<StepperOrientation>;
  positionMinValue!: number;
  accepttermsConditions!: boolean;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private appSvc: AppService,
    private generalSvc: AppGeneralService,
    private location: Location,
    private dialog: MatDialog,
  ) {
    if (window.history?.state) {
      localStorage.setItem(
        'stateConfigurationsPublicationFormsDetail',
        JSON.stringify(window.history?.state)
      );
    }

    const state: any = localStorage.getItem('stateConfigurationsPublicationFormsDetail');
    this.stateData = (state) ? JSON.parse(state) : null;
    this.formStatus = (this.stateData?.uuid) ? AppFormStatus.UPDATE : AppFormStatus.CREATE;

    this.formStates = {
      isFormCreated: false,
      isDataPublicationFormLoaded: false,
      isMasterDataPublicationFormVersionsLoaded: false,
      isMasterDataPublicationFormsLoaded: false,
      isMasterDataDynamicFormFieldTypesLoaded: false,
      isMasterDataDynamicFormFieldOptionsLoaded: false,
      isLoading: false,
      isFormCancelButtonDisabled: false,
      isSubmited: false,
      isError: false,
    };
    this.pageState = PageState.LOADING;
    this.selectOptions = {
      formVersions: [{ value: 1, text: 'One' }],
      fieldTypes: [{ value: 1, text: 'One' }],
      forms: [{ uuid: null, field_type: 'none', field_id: 'None', field_label: 'None' }],
      fieldOptions: [],
      actions: [
        { value: 'disable', text: 'DISABLE' },
        { value: 'hide', text: 'HIDE' },
        { value: 'clear', text: 'CLEAR' }
      ],
      logics: [
        { value: null, text: 'None' },
        { value: 'AND', text: 'AND' },
        { value: 'NAND', text: 'NAND' },
        { value: 'OR', text: 'OR' },
        { value: 'NOR', text: 'NOR' }
      ],
      comparisons: [
        { value: 'EQUAL', text: 'EQUAL' },
        { value: 'NOT_EQUAL', text: 'NOT_EQUAL' },
        { value: 'GREATER_THAN', text: 'GREATER_THAN' },
        { value: 'SMALLER_THAN', text: 'SMALLER_THAN' },
        { value: 'IN', text: 'IN' },
        { value: 'NOT_IN', text: 'NOT_IN' },
        { value: 'BETWEEN', text: 'BETWEEN' },
        { value: 'NOT_BETWEEN', text: 'NOT_BETWEEN' }
      ],
    };
    this.positionMinValue = 0;
    this.accepttermsConditions = false;

    const breakpointObserver = inject(BreakpointObserver);
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));

    if (this.formStatus === AppFormStatus.UPDATE) {
      this.getDataPublicationForm(this.stateData?.uuid);
    } else {
      this.initiateForm();
    }

    this.getMasterDataPublicationFormVersions();
    //this.getMasterDataPublicationForms();
    this.getMasterDataDynamicFormFieldTypes();
    this.getMasterDataDynamicFormFieldOptions();
  }

  /**
   * Before form created
   */

  ngOnInit(): void { }

  private getDataPublicationForm(uuid: string): void {
    const parameters: any = {};
    const pathParameter: string = '/' + uuid;

    this.appSvc.detail(AppServiceType.CONFIGURATION_PUBLICATIONS_FORMS, parameters, pathParameter).subscribe(
      (response: any) => {
        this.data = response['data'];

        this.formStates.isDataPublicationFormLoaded = true;
        this.checkMasterDataAndFormAvailable();

        this.initiateForm();
      }, (errorResponse: any) => {
        this.formStates.isError = true;
        this.checkMasterDataAndFormAvailable();
      }
    );
  }

  private getMasterDataPublicationFormVersions(searchKey?: string): void {
    const parameters: any = (searchKey) ? {
      search_key: searchKey
    } : null;

    this.appSvc.listParams(AppServiceType.PUBLICATIONS_MASTERDATA_PUBLICATION_FORM_VERSIONS, parameters).subscribe(
      (response: any) => {
        this.selectOptions.formVersions = response['data'];

        this.formStates.isMasterDataPublicationFormVersionsLoaded = true;
        this.checkMasterDataAndFormAvailable();
      }, (errorResponse: any) => {
        this.formStates.isError = true;
        this.checkMasterDataAndFormAvailable();
      }
    );
  }

  private getMasterDataPublicationForms(searchKey?: string | null, uuidPublicationFormVersion?: string): void {
    this.publicationFormParentSelectOptionsLoaded = false;
    const parameters: any = (searchKey || uuidPublicationFormVersion) ? {
      search_key: searchKey ?? '',
      uuid_publication_form_version: uuidPublicationFormVersion,
    } : null;

    this.appSvc.listParams(AppServiceType.PUBLICATIONS_MASTERDATA_PUBLICATION_FORMS, parameters).subscribe(
      (response: any) => {
        this.selectOptions.forms = response['data'];
        this.selectOptions.forms.unshift({
          uuid: null,
          field_type: 'none',
          field_id: 'None',
          field_label: 'None',
        });

        this.formStates.isMasterDataPublicationFormsLoaded = true;
        this.publicationFormParentSelectOptionsLoaded = true;
        this.checkMasterDataAndFormAvailable();
      }, (errorResponse: any) => {
        this.formStates.isError = true;
        this.publicationFormParentSelectOptionsLoaded = true;
        this.checkMasterDataAndFormAvailable();
    }
    );
  }

  private getMasterDataDynamicFormFieldTypes(): void {
    this.appSvc.list(AppServiceType.DYNAMICFORM_MASTERDATA_FIELD_TYPES).subscribe(
      (response: any) => {
        this.selectOptions.fieldTypes = response['data'];

        this.formStates.isMasterDataDynamicFormFieldTypesLoaded = true;
        this.checkMasterDataAndFormAvailable();
      }, (errorResponse: any) => {
        this.formStates.isError = true;
        this.checkMasterDataAndFormAvailable();
      }
    );
  }

  private getMasterDataDynamicFormFieldOptions(): void {
    this.appSvc.list(AppServiceType.DYNAMICFORM_MASTERDATA_FIELD_OPTIONS).subscribe(
      (response: any) => {
        this.selectOptions.fieldOptions = response['data'];

        this.formStates.isMasterDataDynamicFormFieldOptionsLoaded = true;
        this.checkMasterDataAndFormAvailable();
      }, (errorResponse: any) => {
        this.formStates.isError = true;
        this.checkMasterDataAndFormAvailable();
      }
    );
  }

  private getMasterDataDynamicFormFieldActions(): void {
    /**
      this.appSvc.list(AppServiceType.DYNAMICFORM_MASTERDATA_FIELD_OPTIONS).subscribe(
        (response: any) => {
          this.selectOptions.fieldOptions = response['data'];

          this.formStates.isMasterDataDynamicFormFieldOptionsLoaded = true;
          this.checkMasterDataAndFormAvailable();
        }, (errorResponse: any) => {
          this.formStates.isError = true;
          this.checkMasterDataAndFormAvailable();
        }
      );
     */
  }

  private getMasterDataDynamicFormFieldLogics(): void {
    /**
      this.appSvc.list(AppServiceType.DYNAMICFORM_MASTERDATA_FIELD_OPTIONS).subscribe(
        (response: any) => {
          this.selectOptions.fieldOptions = response['data'];

          this.formStates.isMasterDataDynamicFormFieldOptionsLoaded = true;
          this.checkMasterDataAndFormAvailable();
        }, (errorResponse: any) => {
          this.formStates.isError = true;
          this.checkMasterDataAndFormAvailable();
        }
      );
     */
  }

  private getMasterDataDynamicFormFieldComparisons(): void {
    /**
      this.appSvc.list(AppServiceType.DYNAMICFORM_MASTERDATA_FIELD_OPTIONS).subscribe(
        (response: any) => {
          this.selectOptions.fieldOptions = response['data'];

          this.formStates.isMasterDataDynamicFormFieldOptionsLoaded = true;
          this.checkMasterDataAndFormAvailable();
        }, (errorResponse: any) => {
          this.formStates.isError = true;
          this.checkMasterDataAndFormAvailable();
        }
      );
     */
  }

  private initiateForm(): void {
    this.initialForm = this.formBuilder.group({
      uuid: [this.data?.uuid || '', (this.formStatus === AppFormStatus.UPDATE) ? [Validators.required] : []],
      uuid_form_version: [this.data?.form_version?.uuid || '', [Validators.required]],
      uuid_form_parent: [this.data?.form_parent?.uuid || ''],
      field_type: [this.data?.field_type || '', [Validators.required]],
    });
    this.generalForm = this.formBuilder.group({
      field_label: [this.data?.field_label || ''],
      field_name: [this.data?.field_name || ''],
      field_id: [this.data?.field_id || '', [Validators.required]],
      field_class: [this.data?.field_class || '', []],
      field_placeholder: [this.data?.field_placeholder || ''],
      field_options: [this.data?.field_options || []],
      description: [this.data?.description || ''],
      error_message: [this.data?.error_message || ''],
      order_position: [this.data?.order_position || 1, [Validators.required, Validators.min(0)]],

      flag_field_form_type: [this.data?.flag_field_form_type || false, [Validators.required]],
      flag_field_title: [this.data?.flag_field_title || false, [Validators.required]],
      flag_field_publish_date: [this.data?.flag_field_publish_date || false, [Validators.required]],
      flag_required: [this.data?.flag_required || false, [Validators.required]],
      flag_active: [this.data?.flag_active || true, [Validators.required]],
    });

    const fieldConfigs: string | null = (this.data?.field_configs) ? JSON.stringify(this.data?.field_configs) : null ;
    const validationConfigs: string | null = (this.data?.validation_configs) ? JSON.stringify(this.data?.validation_configs) : null ;
    const dependencyChild: string | null = (this.data?.dependency_child) ? JSON.stringify(this.data?.dependency_child) : null ;
    const dependencyParent: string | null = (this.data?.dependency_parent) ? JSON.stringify(this.data?.dependency_parent) : null ;

    this.advancedForm = this.formBuilder.group({
      field_configs: [{ value: fieldConfigs || '', disabled: true }], // Array || Object
      validation_configs: [{ value: validationConfigs || '', disabled: true }], // Array || Object
      dependency_child: [{ value: dependencyChild || '', disabled: true }], // Array || Object
      dependency_parent: [{ value: dependencyParent || '', disabled: true }], // Array || Object
    });

    this.formStates.isFormCreated = true;
    this.checkMasterDataAndFormAvailable();
  }

  /**
   * After form created
   */

  private checkMasterDataAndFormAvailable(): void {

    if (
      this.formStates.isFormCreated
      && (
        this.formStatus === AppFormStatus.CREATE
        || (
          this.formStatus === AppFormStatus.UPDATE && this.formStates.isDataPublicationFormLoaded
        )
      )
      && this.formStates.isMasterDataPublicationFormVersionsLoaded
      //&& this.formStates.isMasterDataPublicationFormsLoaded
      && this.formStates.isMasterDataDynamicFormFieldTypesLoaded
      && this.formStates.isMasterDataDynamicFormFieldOptionsLoaded
      && !this.formStates.isError
    ) {
      this.pageState = PageState.LOADED;
    }

    if (
      this.formStates.isFormCreated
      && (
        !(
          this.formStatus === AppFormStatus.CREATE
          || (
            this.formStatus === AppFormStatus.UPDATE && this.formStates.isDataPublicationFormLoaded
          )
        )
        || !this.formStates.isMasterDataPublicationFormVersionsLoaded
        //|| !this.formStates.isMasterDataPublicationFormsLoaded
        || !this.formStates.isMasterDataDynamicFormFieldTypesLoaded
        || !this.formStates.isMasterDataDynamicFormFieldOptionsLoaded
      )
      && this.formStates.isError
    ) {
      this.pageState = PageState.ERROR;
    }

  }

  public onPublicationFormVersionChange(data: any): void {
    this.getMasterDataPublicationForms(null, data.uuid);
    this.selectedPublicationFormVersion = data;
  }

  public onPublicationFieldTypeChange(data: any): void {
    this.selectedPublicationFieldType = data;
  }

  public onPublicationFormParentChange(data: any): void {
    this.selectedPublicationFormParent = data;
  }

  public onAcceptTermsConditionsChange(data: boolean): void {
    this.accepttermsConditions = data;
  }

  /**
   * Before form submited or close
   */

  public onFormSubmitButtonClick(): void {
    this.formStates.isSubmited = true;
    const parameters: any = {};
    const formData = this.getFormData();

    if (this.formStatus === AppFormStatus.CREATE) {
      this.appSvc.create(AppServiceType.CONFIGURATION_PUBLICATIONS_FORMS, formData, parameters).subscribe(
        (response: any) => {
          this.router.navigate(['configurations-publication-forms']);

        }, (errorResponse: any) => {
          this.formStates.isError = true;
          this.formStates.isSubmited = false;
          this.checkMasterDataAndFormAvailable();
        }
      );
    }

    if (this.formStatus === AppFormStatus.UPDATE) {
      this.appSvc.create(AppServiceType.CONFIGURATION_PUBLICATIONS_FORMS, formData, parameters).subscribe(
        (response: any) => {
          this.router.navigate(['configurations-publication-forms']);

        }, (errorResponse: any) => {
          this.formStates.isError = true;
          this.formStates.isSubmited = false;
          this.checkMasterDataAndFormAvailable();
        }
      );
    }

  }

  private getFormData(): FormData {
    let results: FormData = new FormData();
    const initialFormValue: any = this.initialForm.getRawValue();
    const generalFormValue: any = this.generalForm.getRawValue();
    const advancedFormValue: any = this.advancedForm.getRawValue();

    results.append('uuid', initialFormValue?.uuid || '');
    results.append('uuid_form_version', initialFormValue?.uuid_form_version || '');
    results.append('uuid_form_parent', initialFormValue?.uuid_form_parent || '');
    results.append('field_type', initialFormValue?.field_type || '');

    results.append('field_label', generalFormValue?.field_label || '');
    results.append('field_name', generalFormValue?.field_name || '');
    results.append('field_id', generalFormValue?.field_id || '');
    results.append('field_class', generalFormValue?.field_class || '');
    results.append('field_placeholder', generalFormValue?.field_placeholder || '');
    results.append('field_options', generalFormValue?.field_options || '');
    results.append('description', generalFormValue?.description || '');
    results.append('error_message', generalFormValue?.error_message || '');
    results.append('order_position', generalFormValue?.order_position || '');
    results.append('flag_field_form_type', generalFormValue?.flag_field_form_type || '');
    results.append('flag_field_title', generalFormValue?.flag_field_title || '');
    results.append('flag_field_publish_date', generalFormValue?.flag_field_publish_date || '');
    results.append('flag_required', generalFormValue?.flag_required || '');
    results.append('flag_active', generalFormValue?.flag_active || '');

    results.append('field_configs', advancedFormValue?.field_configs || '');
    results.append('validation_configs', advancedFormValue?.validation_configs || '');
    results.append('dependency_child', advancedFormValue?.dependency_child || '');
    results.append('dependency_parent', advancedFormValue?.dependency_parent || '');

    return results;
  }

  public onFormResetButtonClick() {
    this.selectedPublicationFormVersion = null;
    this.selectedPublicationFieldType = null;
    this.selectedPublicationFormParent = null;
    this.stepper.reset();
  }

  public onFormCancelButtonClick(): void {

    let dialogConfig: MatDialogConfig = {
      width: '600px',
      data: {
        title: 'Cancel Confirmation!',
        messages: 'Are you sure to cancel this publication form configurations?',
        noButtonText: 'No',
        yesButtonText: 'Yes',
      }
    };

    // Dialog initial configuration and open
    const dialogRef = this.dialog.open(DialogConfirmComponent, dialogConfig);

    // Subscribe to dialog closed event
    dialogRef.afterClosed().subscribe((results: any) => {
      if (results.response) {
        window.history.back();
      }
    });
  }

  public windowHistoryBack(): void {
    window.history.back();
  }

}
