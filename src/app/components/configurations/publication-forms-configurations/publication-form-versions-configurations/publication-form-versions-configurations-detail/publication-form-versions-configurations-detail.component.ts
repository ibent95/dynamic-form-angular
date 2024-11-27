import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/cdk/stepper';
import { CommonModule, Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router, UrlSegment } from '@angular/router';
import { Observable, map } from 'rxjs';
import { AppGeneralService, PageState } from 'src/app/services/app-general.service';
import { AppService, AppFormStatus, AppServiceBaseAPI, AppServiceType } from 'src/app/services/app.service';
import { FormStatesInterface, SelectOptionsInterface } from '../publication-form-versions-configurations-form/publication-form-versions-configurations-form.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { LoaderComponent } from 'src/app/components/shared/loader/loader.component';
import { PageNotFoundComponent } from 'src/app/components/shared/pages/page-not-found/page-not-found.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-publication-form-versions-configurations-detail',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatCardModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatIconModule, LoaderComponent, PageNotFoundComponent],
  templateUrl: './publication-form-versions-configurations-detail.component.html',
  styles: ``
})
export class PublicationFormVersionsConfigurationsDetailComponent {

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

    this.formStatus = (this.lastActiveRoute === 'form-version-detail' && this.stateData?.uuid)
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
      uuid_publication_type: [this.data?.publication_type?.uuid || '', [Validators.required]],
      publication_form_version_name: [this.data?.publication_form_version_name || '', [Validators.required]],
      publication_form_version_code: [this.data?.publication_form_version_code || '', [Validators.required]],
    });

    if (this.formStatus === AppFormStatus.UPDATE) {
      this.formGroup.get('uuid')?.disable();
      this.formGroup.get('uuid_publication_type')?.disable();
      this.formGroup.get('publication_form_version_name')?.disable();
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

  public windowHistoryBack(): void {
    window.history.back();
  }

}
