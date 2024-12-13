import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/cdk/stepper';
import { CommonModule, Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router, UrlSegment } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AppGeneralService, PageState } from 'src/app/services/app-general.service';
import { AppService, AppFormStatus, AppServiceType, AppServiceBaseAPI } from 'src/app/services/app.service';
import { DialogConfirmComponent } from 'src/app/components/shared/dialogs/dialog-confirm/dialog-confirm.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { LoaderComponent } from 'src/app/components/shared/loader/loader.component';
import { PageNotFoundComponent } from 'src/app/components/shared/pages/page-not-found/page-not-found.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AutoCompleteComponent } from 'src/app/components/shared/auto-complete/auto-complete.component';

export interface FormStatesInterface {
  isFormCreated: boolean;
  isDataPublicationFormVersionLoaded: boolean;
  isMasterDataPublicationTypesLoaded: boolean;
  isLoading: boolean;
  isFormCancelButtonDisabled: boolean;
  isSubmited: boolean;
  isError: boolean;
}

export interface SelectOptionsInterface {
  publicationTypes: any;
  actions: any;
  logics: any;
  comparisons: any;
}

@Component({
  selector: 'app-publication-form-versions-configurations-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatCardModule, MatDividerModule, MatInputModule, MatSelectModule, MatButtonModule, MatIconModule, LoaderComponent, PageNotFoundComponent, AutoCompleteComponent],
  templateUrl: './publication-form-versions-configurations-form.component.html',
  styles: ``,
})
export class PublicationFormVersionsConfigurationsFormComponent {

  private router: Router = inject(Router);
  private formBuilder: FormBuilder = inject(FormBuilder);
  private appSvc: AppService = inject(AppService);
  private generalSvc: AppGeneralService = inject(AppGeneralService);
  private location: Location = inject(Location);
  private dialog: MatDialog = inject(MatDialog);

  activeRouteSegments!: Array<UrlSegment>;
  lastActiveRoute!: string;
  breakpointObserver = inject(BreakpointObserver);

  pageState!: PageState;

  // All forms and user input in angular form builder
  formGroup!: FormGroup;

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

  constructor() {
    if (window.history?.state) {
      localStorage.setItem(
        'stateConfigurationsPublicationFormVersionsDetail',
        JSON.stringify(window.history?.state)
      );
    }

    const state: any = localStorage.getItem('stateConfigurationsPublicationFormVersionsDetail');
    this.stateData = (state) ? JSON.parse(state) : null;
    this.activeRouteSegments = this.router
      .parseUrl(this.router.url)
      .root
      .children['primary']
      ?.segments;
    this.lastActiveRoute = this.activeRouteSegments[this.activeRouteSegments.length - 1]
      ?.path;

    this.formStatus = (this.lastActiveRoute === 'form-version-update' && this.stateData?.uuid)
      ? AppFormStatus.UPDATE
      : AppFormStatus.CREATE;

    this.formStates = {
      isFormCreated: false,
      isDataPublicationFormVersionLoaded: false,
      isMasterDataPublicationTypesLoaded: false,
      isLoading: false,
      isFormCancelButtonDisabled: false,
      isSubmited: false,
      isError: false,
    };
    this.pageState = PageState.LOADING;
    this.selectOptions = {
      publicationTypes: [{ value: 1, text: 'One' }],
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

    this.stepperOrientation = this.breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(
        map(
          ({ matches }) => (matches ? 'horizontal' : 'vertical')
        )
      );

    if (this.formStatus === AppFormStatus.UPDATE) {

      if (!this.stateData) {
        this.windowHistoryBack();
      }
      this.getDataPublicationFormVersion(this.stateData?.uuid);
    } else {
      this.initiateForm();
    }

    this.getMasterDataPublicationTypes();
  }

  /**
   * Before form created
   */

  ngOnInit(): void { }

  private getDataPublicationFormVersion(uuid: string): void {
    const parameters: any = {};
    const pathParameter: string = '/' + uuid;

    this.appSvc.advanceDetail(
      AppServiceBaseAPI.SVC_DYNAMIC_FORM_LUMEN,
      AppServiceType.CONFIGURATION_PUBLICATIONS_FORM_VERSIONS,
      parameters,
      pathParameter
    ).subscribe(
      (response: any) => {
        this.data = response['data'];

        this.formStates.isDataPublicationFormVersionLoaded = true;
        this.checkMasterDataAndFormAvailable();

        this.initiateForm();
      }, (errorResponse: any) => {
        this.formStates.isError = true;
        this.checkMasterDataAndFormAvailable();
      }
    );
  }

  private getMasterDataPublicationTypes(searchKey?: string): void {
    const parameters: any = (searchKey) ? {
      search_key: searchKey
    } : null;

    this.appSvc.listParams(AppServiceType.PUBLICATIONS_MASTERDATA_PUBLICATION_TYPES, parameters).subscribe(
      (response: any) => {
        this.selectOptions.publicationTypes = response['data'];

        this.formStates.isMasterDataPublicationTypesLoaded = true;
        this.checkMasterDataAndFormAvailable();
      }, (errorResponse: any) => {
        this.formStates.isError = true;
        this.checkMasterDataAndFormAvailable();
      }
    );
  }

  private initiateForm(): void {
    this.formGroup = this.formBuilder.group({
      uuid: [this.data?.uuid || '', (this.formStatus === AppFormStatus.UPDATE) ? [Validators.required] : []],
      flag: [this.data?.flag || '', [Validators.required]],
      uuid_publication_type: [this.data?.publication_type?.uuid || '', [Validators.required]],
      publication_form_version_name: [this.data?.publication_form_version_name || '', [Validators.required]],
      publication_form_version_code: [this.data?.publication_form_version_code || '', [Validators.required]],
    });

    if (this.formStatus === AppFormStatus.UPDATE) {
      this.formGroup.get('uuid_publication_type')?.disable();
      this.formGroup.get('publication_form_version_code')?.disable();
    }

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
          this.formStatus === AppFormStatus.UPDATE && this.formStates.isDataPublicationFormVersionLoaded
        )
      )
      && this.formStates.isMasterDataPublicationTypesLoaded
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
            this.formStatus === AppFormStatus.UPDATE && this.formStates.isDataPublicationFormVersionLoaded
          )
        )
        || !this.formStates.isMasterDataPublicationTypesLoaded
      )
      && this.formStates.isError
    ) {
      this.pageState = PageState.ERROR;
    }

  }

  public onPublicationFormVersionChange(data: any): void {
    this.selectedPublicationFormVersion = data;
  }

  public onPublicationFieldTypeChange(data: any): void {
    this.selectedPublicationFieldType = data;
  }

  public onPublicationFormParentChange(data: any): void {
    this.selectedPublicationFormParent = data;
  }

  public onAcceptTermsConditionsChange(data: any): void {
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
      this.appSvc.advanceCreate(
        AppServiceBaseAPI.SVC_DYNAMIC_FORM_LUMEN,
        AppServiceType.CONFIGURATION_PUBLICATIONS_FORM_VERSIONS,
        formData,
        parameters
      ).subscribe(
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
      this.appSvc.advanceCreate(
        AppServiceBaseAPI.SVC_DYNAMIC_FORM_LUMEN,
        AppServiceType.CONFIGURATION_PUBLICATIONS_FORM_VERSIONS,
        formData,
        parameters
      ).subscribe(
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
    const formValue: any = this.formGroup.getRawValue();

    results.append('uuid', formValue?.uuid || '');
    results.append('uuid_publication_type', formValue?.uuid_publication_type || '');
    results.append('publication_form_version_name', formValue?.publication_form_version_name || '');
    results.append('publication_form_version_code', formValue?.publication_form_version_code || '');

    return results;
  }

  public onFormResetButtonClick() {
    this.selectedPublicationFormVersion = null;
    this.selectedPublicationFieldType = null;
    this.selectedPublicationFormParent = null;
    this.formGroup.reset();
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
