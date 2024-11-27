import { StepperOrientation } from '@angular/cdk/stepper';
import { ChangeDetectorRef, Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AppGeneralService, PageState } from 'src/app/services/app-general.service';
import { AppFormStatus, AppService, AppServiceType } from 'src/app/services/app.service';
import { FormStatesInterface, SelectOptionsInterface } from '../../../publication-forms-configurations-form/publication-forms-configurations-form.component';
import { BreakpointObserver } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { LoaderComponent } from 'src/app/components/shared/loader/loader.component';
import { PageNotFoundComponent } from 'src/app/components/shared/pages/page-not-found/page-not-found.component';
import { MatTabsModule } from '@angular/material/tabs';
import { PublicationFormsAdvancedConfigurationsDetailComponent } from '../../../publication-forms-configurations-detail/publication-forms-advanced-configurations-detail/publication-forms-advanced-configurations-detail.component';
import { PublicationFormsGeneralConfigurationsDetailComponent } from '../../../publication-forms-configurations-detail/publication-forms-general-configurations-detail/publication-forms-general-configurations-detail.component';
import { PublicationFormsInitialConfigurationsDetailComponent } from '../../../publication-forms-configurations-detail/publication-forms-initial-configurations-detail/publication-forms-initial-configurations-detail.component';

@Component({
  selector: 'app-publication-form-versions-configurations-management-form-publication-detail-modal',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatTabsModule, MatDividerModule, MatButtonModule, MatIconModule, LoaderComponent, PageNotFoundComponent, PublicationFormsInitialConfigurationsDetailComponent, PublicationFormsGeneralConfigurationsDetailComponent, PublicationFormsAdvancedConfigurationsDetailComponent],
  templateUrl: './publication-form-versions-configurations-management-form-publication-detail-modal.component.html',
  styles: ``,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PublicationFormVersionsConfigurationsManagementFormPublicationDetailModalComponent {

  private dialog: MatDialog = inject(MatDialog);
  private dialogRef: MatDialogRef<PublicationFormVersionsConfigurationsManagementFormPublicationDetailModalComponent> = inject(MatDialogRef);
  private dialogData: any = inject(MAT_DIALOG_DATA);
  private router: Router = inject(Router);
  private appSvc: AppService = inject(AppService);
  private generalSvc: AppGeneralService = inject(AppGeneralService);
  private changeDetector: ChangeDetectorRef = inject(ChangeDetectorRef);

  selectedTabIndex: number = 0;
  pageState!: PageState;

  // All forms and user input in angular form builder
  initialForm!: FormGroup;
  generalForm!: FormGroup;
  advancedForm!: FormGroup;
  formStates!: FormStatesInterface;

  stateData!: any;
  data!: any;

  selectOptions!: SelectOptionsInterface; // All select`s options in forms
  stepperOrientation!: Observable<StepperOrientation>;
  positionMinValue!: number;
  accepttermsConditions!: boolean;

  constructor() {
    if (window.history?.state) {
      localStorage.setItem(
        'stateConfigurationsPublicationFormsDetail',
        JSON.stringify(this.dialogData)
      );
    }

    const state: any = localStorage.getItem('stateConfigurationsPublicationFormsDetail');
    this.stateData = (state) ? JSON.parse(state) : null;
    console.log('stateData', this.stateData);
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

    this.getDataPublicationForm(this.stateData.form?.uuid);
    this.getMasterDataPublicationFormVersions();
    //this.getMasterDataPublicationForms();
    this.getMasterDataDynamicFormFieldTypes();
    this.getMasterDataDynamicFormFieldOptions();
  }

  private getDataPublicationForm(uuid: string): void {
    const parameters: any = {};
    const pathParameter: string = '/' + uuid;

    this.appSvc.detail(AppServiceType.CONFIGURATION_PUBLICATIONS_FORMS, parameters, pathParameter).subscribe(
      (response: any) => {
        this.data = response['data'];
        console.log('data', this.data);

        this.formStates.isDataPublicationFormLoaded = true;
        this.checkMasterDataAndFormAvailable();
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

  /**
   * After form created
   */

  private checkMasterDataAndFormAvailable(): void {
    if (
      this.formStates.isDataPublicationFormLoaded
      && this.formStates.isMasterDataPublicationFormVersionsLoaded
      && this.formStates.isMasterDataDynamicFormFieldTypesLoaded
      && this.formStates.isMasterDataDynamicFormFieldOptionsLoaded
      && !this.formStates.isError
    ) {
      this.pageState = PageState.LOADED;
    }

    if (
      (
        !this.formStates.isDataPublicationFormLoaded
        || !this.formStates.isMasterDataPublicationFormVersionsLoaded
        || !this.formStates.isMasterDataDynamicFormFieldTypesLoaded
        || !this.formStates.isMasterDataDynamicFormFieldOptionsLoaded
      )
      && this.formStates.isError
    ) {
      this.pageState = PageState.ERROR;
    }

  }

  /**
   * onTabChange
   */
  public onTabChange(index: number): void {
    this.selectedTabIndex = index;
  }

  public onCloseButtonClick(): void {
    this.dialogRef.close();
  }

}
