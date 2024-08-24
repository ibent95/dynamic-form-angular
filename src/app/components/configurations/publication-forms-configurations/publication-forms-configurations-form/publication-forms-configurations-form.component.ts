import { BreakpointObserver } from '@angular/cdk/layout';
import { Location } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { StepperOrientation } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { DialogConfirmComponent } from 'src/app/components/shared/dialogs/dialog-confirm/dialog-confirm.component';
import { AppGeneralService, PageState } from 'src/app/services/app-general.service';
import { AppFormStatus, AppService, AppServiceType } from 'src/app/services/app.service';

export interface FormStatesInterface {
  isFormCreated: boolean;
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
}

@Component({
  selector: 'app-publication-forms-configurations-form',
  templateUrl: './publication-forms-configurations-form.component.html',
  styleUrls: ['./publication-forms-configurations-form.component.scss']
})
export class PublicationFormsConfigurationsFormComponent implements OnInit {

  pageState!: PageState;

  // All forms and user input in angular form builder
  initialForm!: FormGroup;
  generalForm!: FormGroup;
  advancedForm!: FormGroup;

  formStatus!: AppFormStatus;
  formStates!: FormStatesInterface;

  data!: any;

  // All select`s options in forms
  selectOptions!: SelectOptionsInterface;

  stepperOrientation!: Observable<StepperOrientation>;

  constructor(

    private router: Router,
    private formBuilder: FormBuilder,
    private appSvc: AppService,
    private generalSvc: AppGeneralService,
    private location: Location,
    private dialog: MatDialog,
  ) {
    this.formStates = {
      isFormCreated: false,
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
      forms: [{ value: 1, text: 'One' }],
      fieldTypes: [{ value: 1, text: 'One' }],
      fieldOptions: [],
    };

    const breakpointObserver = inject(BreakpointObserver);
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
  }

  /**
   * Before form created
   */

  ngOnInit(): void {

    this.data = window.history?.state;
    this.formStatus = (this.data?.uuid) ? AppFormStatus.UPDATE : AppFormStatus.CREATE ;

    this.getMasterDataPublicationFormVersions();
    this.getMasterDataPublicationForms();
    this.getMasterDataDynamicFormFieldTypes();
    this.getMasterDataDynamicFormFieldOptions();
    this.initiateForm();

  }

  private getMasterDataPublicationFormVersions(): void {
    this.appSvc.list(AppServiceType.PUBLICATION_FORM_VERSIONS).subscribe(
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

  private getMasterDataPublicationForms(uuidPublicationFormVersion?: string): void {
    this.appSvc.list(AppServiceType.PUBLICATION_FORMS).subscribe(
      (response: any) => {
        this.selectOptions.forms = response['data'];

        this.formStates.isMasterDataPublicationFormsLoaded = true;
        this.checkMasterDataAndFormAvailable();
      }, (errorResponse: any) => {
        this.formStates.isError = true;
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
        this.selectOptions.fieldTypes = response['data'];

        this.formStates.isMasterDataDynamicFormFieldOptionsLoaded = true;
        this.checkMasterDataAndFormAvailable();
      }, (errorResponse: any) => {
        this.formStates.isError = true;
        this.checkMasterDataAndFormAvailable();
      }
    );
  }

  private initiateForm(): void {
    this.initialForm = this.formBuilder.group({
      uuid: [this.data?.uuid || '', (this.formStatus === AppFormStatus.UPDATE) ? [Validators.required] : []],
      uuid_form_version: [this.data?.uuid_form_version || '', [Validators.required]],
      uuid_form_parent: [this.data?.uuid_form_parent || ''],
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
      order_position: [this.data?.order_position || 1, [Validators.required]],

      flag_required: [this.data?.flag_required || true, [Validators.required]],
      flag_field_form_type: [this.data?.flag_field_form_type || false, [Validators.required]],
      flag_field_title: [this.data?.flag_field_title || false, [Validators.required]],
      flag_field_publish_date: [this.data?.flag_field_publish_date || false, [Validators.required]],
      flag_active: [this.data?.flag_active || true, [Validators.required]],
    });
    this.advancedForm = this.formBuilder.group({
      field_configs: [this.data?.field_configs || ''], // Array || Object
      validation_configs: [this.data?.validation_configs || ''], // Array || Object
      dependency_child: [this.data?.dependency_child || ''], // Array || Object
      dependency_parent: [this.data?.dependency_parent || ''], // Array || Object
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
      && this.formStates.isMasterDataPublicationFormVersionsLoaded
      && this.formStates.isMasterDataPublicationFormsLoaded
      && this.formStates.isMasterDataDynamicFormFieldTypesLoaded
      && this.formStates.isMasterDataDynamicFormFieldOptionsLoaded
      && !this.formStates.isError
    ) {
      this.pageState = PageState.LOADED;
    }

    if (
      this.formStates.isFormCreated
      && (
        !this.formStates.isMasterDataPublicationFormVersionsLoaded
        || !this.formStates.isMasterDataPublicationFormsLoaded
        || !this.formStates.isMasterDataDynamicFormFieldTypesLoaded
        || !this.formStates.isMasterDataDynamicFormFieldOptionsLoaded
      )
      && this.formStates.isError
    ) {
      this.pageState = PageState.ERROR;
    }

  }

  /**
   * Before form submited or close
   */

  public onFormSubmitButtonClick(): void {

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
