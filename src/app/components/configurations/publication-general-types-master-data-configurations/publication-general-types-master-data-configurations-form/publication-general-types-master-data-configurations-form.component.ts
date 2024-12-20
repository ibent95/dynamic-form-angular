import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/cdk/stepper';
import { CommonModule, Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router, UrlSegment } from '@angular/router';
import { Observable, map } from 'rxjs';
import { DialogConfirmComponent } from 'src/app/components/shared/dialogs/dialog-confirm/dialog-confirm.component';
import { LoaderComponent } from 'src/app/components/shared/loader/loader.component';
import { PageNotFoundComponent } from 'src/app/components/shared/pages/page-not-found/page-not-found.component';
import { AppGeneralService, PageState } from 'src/app/services/app-general.service';
import { AppService, AppFormStatus, AppServiceBaseAPI, AppServiceType } from 'src/app/services/app.service';

export interface FormStatesInterface {
  isFormCreated: boolean;
  isDataPublicationGeneralTypeLoaded: boolean;
  isLoading: boolean;
  isFormCancelButtonDisabled: boolean;
  isSubmited: boolean;
  isError: boolean;
}

@Component({
  selector: 'app-publication-general-types-master-data-configurations-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatCardModule, MatDividerModule, MatInputModule, MatSelectModule, MatButtonModule, MatIconModule, LoaderComponent, PageNotFoundComponent],
  templateUrl: './publication-general-types-master-data-configurations-form.component.html',
  styles: ``
})
export class PublicationGeneralTypesMasterDataConfigurationsFormComponent {

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

  selectOptions!: any; // All select`s options in forms

  constructor() {
    if (window.history?.state) {
      localStorage.setItem(
        'stateConfigurationsPublicationGeneralTypesDetail',
        JSON.stringify(window.history?.state)
      );
    }

    const state: any = localStorage.getItem('stateConfigurationsPublicationGeneralTypesDetail');
    this.stateData = (state) ? JSON.parse(state) : null;
    this.activeRouteSegments = this.router
      .parseUrl(this.router.url)
      .root
      .children['primary']
      ?.segments;
    this.lastActiveRoute = this.activeRouteSegments[this.activeRouteSegments.length - 1]
      ?.path;

    this.formStatus = (this.lastActiveRoute === 'update' && this.stateData?.uuid)
      ? AppFormStatus.UPDATE
      : AppFormStatus.CREATE;

    this.formStates = {
      isFormCreated: false,
      isDataPublicationGeneralTypeLoaded: false,
      isLoading: false,
      isFormCancelButtonDisabled: false,
      isSubmited: false,
      isError: false,
    };
    this.pageState = PageState.LOADING;
    this.selectOptions = {};

    if (this.formStatus === AppFormStatus.UPDATE) {

      if (!this.stateData) {
        this.windowHistoryBack();
      }
      this.getDataPublicationGeneralType(this.stateData?.uuid);
    } else {
      this.initiateForm();
    }

  }

  /**
   * Before form created
   */

  ngOnInit(): void { }

  private getDataPublicationGeneralType(uuid: string): void {
    const parameters: any = {};
    const pathParameter: string = '/' + uuid;

    this.appSvc.advanceDetail(
      AppServiceBaseAPI.SVC_DYNAMIC_FORM_LUMEN,
      AppServiceType.CONFIGURATION_PUBLICATIONS_GENERAL_TYPES,
      parameters,
      pathParameter
    ).subscribe(
      (response: any) => {
        this.data = response['data'];

        this.formStates.isDataPublicationGeneralTypeLoaded = true;
        this.checkMasterDataAndFormAvailable();

        this.initiateForm();
      }, (errorResponse: any) => {
        this.formStates.isError = true;
        this.checkMasterDataAndFormAvailable();
      }
    );
  }

  private initiateForm(): void {
    this.formGroup = this.formBuilder.group({
      uuid: [this.data?.uuid || '', (this.formStatus === AppFormStatus.UPDATE) ? [Validators.required] : []],
      //uuid_publication_type: [this.data?.publication_type?.uuid || '', [Validators.required]],
      publication_general_type_name: [this.data?.publication_general_type_name || '', [Validators.required]],
      publication_general_type_code: [this.data?.publication_general_type_code || '', [Validators.required]],
    });

    if (this.formStatus === AppFormStatus.UPDATE) {
      this.formGroup.get('publication_general_type_code')?.disable();
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
          this.formStatus === AppFormStatus.UPDATE && this.formStates.isDataPublicationGeneralTypeLoaded
        )
      )
      && !this.formStates.isError
    ) {
      this.pageState = PageState.LOADED;
    }

    if (
      this.formStates.isFormCreated
      && !(
        this.formStatus === AppFormStatus.CREATE
        || (
          this.formStatus === AppFormStatus.UPDATE && this.formStates.isDataPublicationGeneralTypeLoaded
        )
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
    this.formStates.isSubmited = true;
    const parameters: any = {};
    const formData = this.getFormData();

    if (this.formStatus === AppFormStatus.CREATE) {
      this.appSvc.advanceCreate(
        AppServiceBaseAPI.SVC_DYNAMIC_FORM_LUMEN,
        AppServiceType.CONFIGURATION_PUBLICATIONS_GENERAL_TYPES,
        formData,
        parameters
      ).subscribe(
        (response: any) => {
          this.router.navigate(['configurations-master-data-publication-general-types']);
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
        AppServiceType.CONFIGURATION_PUBLICATIONS_GENERAL_TYPES,
        formData,
        parameters
      ).subscribe(
        (response: any) => {
          this.router.navigate(['configurations-master-data-publication-general-types']);
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
    //results.append('uuid_publication_type', formValue?.uuid_publication_type || '');
    results.append('publication_general_type_name', formValue?.publication_general_type_name || '');
    results.append('publication_general_type_code', formValue?.publication_general_type_code || '');

    return results;
  }

  public onFormResetButtonClick() {
    this.formGroup.reset();
  }

  public onFormCancelButtonClick(): void {

    let dialogConfig: MatDialogConfig = {
      width: '600px',
      data: {
        title: 'Cancel Confirmation!',
        messages: 'Are you sure to cancel this publication general type configurations?',
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
