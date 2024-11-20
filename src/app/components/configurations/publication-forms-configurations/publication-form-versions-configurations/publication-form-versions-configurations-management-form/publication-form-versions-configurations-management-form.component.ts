import { formatDate } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { NavigationExtras, Router, UrlSegment } from '@angular/router';
import { CustomDialogPublicationRemoveConfirmComponent } from 'src/app/components/publication/custom-dialog-publication-remove-confirm/custom-dialog-publication-remove-confirm.component';
import { AppTableColumns } from 'src/app/components/shared/table/table.component';
import { APP_DIALOG_ENTER_ANIMATION_DURATION, APP_DIALOG_EXIT_ANIMATION_DURATION, AppGeneralService, Page, ResponseFormat } from 'src/app/services/app-general.service';
import { AppFormStatus, AppService, AppServiceBaseAPI, AppServiceType } from 'src/app/services/app.service';
import { PublicationFormsConfigurationsFormComponent } from '../../publication-forms-configurations-form/publication-forms-configurations-form.component';
import { PublicationFormVersionsConfigurationsManagementFormPublicationFormModalComponent } from './publication-form-versions-configurations-management-form-publication-form-modal/publication-form-versions-configurations-management-form-publication-form-modal.component';
import { PublicationFormVersionsConfigurationsManagementFormPublicationDetailModalComponent } from './publication-form-versions-configurations-management-form-publication-detail-modal/publication-form-versions-configurations-management-form-publication-detail-modal.component';

@Component({
  selector: 'app-publication-form-versions-configurations-management-form',
  templateUrl: './publication-form-versions-configurations-management-form.component.html',
  styleUrl: './publication-form-versions-configurations-management-form.component.scss'
})
export class PublicationFormVersionsConfigurationsManagementFormComponent implements OnInit, AfterViewInit {

  private changeDetector: ChangeDetectorRef = inject(ChangeDetectorRef);
  private generalSvc: AppGeneralService = inject(AppGeneralService);
  private appSvc: AppService = inject(AppService);
  private router: Router = inject(Router);
  private dialog: MatDialog = inject(MatDialog);

  activeRouteSegments!: Array<UrlSegment>;
  firstActiveRoute!: string;

  stateData!: any;

  serverResponse!: { message: string | null, date: string | null } | null;

  expansionStep: number = 0;
  showTable!: boolean;

  tableDisplayedColumns!: AppTableColumns;
  tableDataSource!: Array<any>;
  tableDataPage!: Page;

  constructor() {

    this.activeRouteSegments = this.router
      .parseUrl(this.router.url)
      .root
      .children['primary']
      ?.segments;
    this.firstActiveRoute = this.activeRouteSegments[0]
      ?.path;

    if (window.history?.state) {
      localStorage.setItem(
        'stateConfigurationsPublicationFormVersionsDetail',
        JSON.stringify(window.history?.state)
      );
    }

    const state: any = localStorage.getItem('stateConfigurationsPublicationFormVersionsDetail');
    this.stateData = (state) ? JSON.parse(state) : null;

    if (!this.stateData?.uuid) {
      this.generalSvc.windowHistoryBack();
    }

    this.serverResponse = null;
    this.showTable = false;

    this.tableDataSource = [];
    this.tableDataPage = {
      length: 0,
      pageIndex: 0,
      pageSize: 10,
      previousPageIndex: 0,
    };

  }

  ngOnInit(): void {
    this.getServerInfo();
    this.tableInit();
  }

  ngAfterViewInit(): void { }

  private getServerInfo(): void {
    this.appSvc.advanceList(
      AppServiceBaseAPI.SVC_DYNAMIC_FORM_SYMFONY,
      AppServiceType.CONFIGURATION_PUBLICATIONS_FORM_MAIN
    ).subscribe(response => {
      this.serverResponse = response['data'];
    });
  }

  private tableInit(): void {
    this.tableDisplayedColumns = [
      { type: 'orderNumber', label: 'No.', property: 'position' },
      //{ type: 'text', label: 'Publication General / Type', property: 'publication_type_preview' },
      //{ type: 'text', label: 'Form Version', property: 'form_version_preview' },
      { type: 'text', label: 'Form Parent', property: 'form_parent_preview' },
      { type: 'text', label: 'Label', property: 'field_label' },
      { type: 'text', label: 'Type', property: 'field_type' },
      { type: 'text', label: 'Name', property: 'field_name' },
      { type: 'status', label: 'Status', property: 'flag_active_preview' },
      { type: 'actions', label: 'Actions' },
    ];

    this.getTableData();
  }

  public getTableData(page?: Page): void {
    if (page) {
      this.tableDataPage = page;
    }

    this.showTable = false;

    this.appSvc.advanceListPaginatorParams(
      AppServiceBaseAPI.SVC_DYNAMIC_FORM_LUMEN,
      AppServiceType.CONFIGURATION_PUBLICATIONS_FORM_VERSIONS,
      undefined,
      '/' + this.stateData?.uuid + '/publication-forms',
      this.tableDataPage
    ).subscribe(successResponse => {
      if (successResponse['data']) successResponse['data'] = successResponse['data'].map((data: any, dataIndex: number) => {
        data['position'] = dataIndex + 1;
        //data['publication_type_preview'] = (data['form_version']) ? `<b>[${data.form_version.publication_type.publication_general_type?.publication_general_type_name}]</b> ${data.form_version.publication_type?.publication_type_code}` : null;
        //data['form_version_preview'] = (data['form_version']) ? `<b>[${data.form_version?.publication_form_version_code}]</b> ${data.form_version?.publication_form_version_name}` : null;
        data['form_parent_preview'] = (data['form_parent']) ? `${data.form_parent?.field_id} - ${data.form_parent?.field_type}` : null;
        data['created_at_preview'] = (data['created_at']) ? formatDate(data['created_at'], 'fullDate', 'en') : null;
        data['updated_at_preview'] = (data['updated_at']) ? formatDate(data['updated_at'], 'fullDate', 'en') : null;
        data['flag_active_preview'] = this.setDataStatus(data);

        return data;
      });

      this.tableDataSource = successResponse['data'];
      this.tableDataPage.length = successResponse['count'];
      this.showTable = true;
    });
  }

  private setDataStatus(data: any): { 'status_label': any, 'status_code': string, 'classes': Array<string> } {
    let classes: Array<string> = (data['flag_active'] == 1) ? ['text-bg-success'] : ['text-bg-secondary'];

    return {
      'status_label': (data['flag_active']) ? 'Active' : 'Non Active' ,
      'status_code': (data['flag_active']) ? 'TRUE' : 'FALSE',
      'classes': classes
    };
  }

  /**
   * After view render handlers
   **/

  setStep(index: number) {
    this.expansionStep = index;
    this.changeDetector.detectChanges();
  }

  nextStep() {
    this.expansionStep += 1;
    this.changeDetector.detectChanges();
  }

  prevStep() {
    this.expansionStep -= 1;
    this.changeDetector.detectChanges();
  }

  public onAddDataClick(): void {
    //this.router.navigate([this.router.url + '/create']);

    const form: MatDialogRef<PublicationFormVersionsConfigurationsManagementFormPublicationFormModalComponent> = this.dialog.open(PublicationFormVersionsConfigurationsManagementFormPublicationFormModalComponent, {
      data: {
        form_version: this.stateData,
        form_status: AppFormStatus.CREATE
      },
      width: '1200px',
      maxWidth: '1200px',
      enterAnimationDuration: APP_DIALOG_ENTER_ANIMATION_DURATION,
      exitAnimationDuration: APP_DIALOG_EXIT_ANIMATION_DURATION,
      closeOnNavigation: false,
      disableClose: true
    });

    form.afterClosed().subscribe((results: any) => {
      //console.log("fieldDependenciesConfigsForm.afterClosed() results", results);
    });
  }

  public onDetailsDataClick(data: any): void {
    let extras: NavigationExtras = {
      state: data
    };
    //this.router.navigate([this.router.url + '/detail'], extras);

    const form: MatDialogRef<PublicationFormVersionsConfigurationsManagementFormPublicationDetailModalComponent> = this.dialog.open(PublicationFormVersionsConfigurationsManagementFormPublicationDetailModalComponent, {
      data: {
        form: data,
        form_version: this.stateData
      },
      width: '1200px',
      maxWidth: '1200px',
      enterAnimationDuration: APP_DIALOG_ENTER_ANIMATION_DURATION,
      exitAnimationDuration: APP_DIALOG_EXIT_ANIMATION_DURATION,
      closeOnNavigation: false,
      disableClose: true
    });

    form.afterClosed().subscribe((results: any) => {
      //console.log("fieldDependenciesConfigsForm.afterClosed() results", results);
    });
  }

  public onEditDataClick(data: any): void {
    let extras: NavigationExtras = {
      state: data
    };
    //this.router.navigate([this.router.url + '/update'], extras);

    const form: MatDialogRef<PublicationFormVersionsConfigurationsManagementFormPublicationFormModalComponent> = this.dialog.open(PublicationFormVersionsConfigurationsManagementFormPublicationFormModalComponent, {
      data: {
        form: data,
        form_version: this.stateData,
        form_status: AppFormStatus.UPDATE
      },
      width: '1200px',
      maxWidth: '1200px',
      enterAnimationDuration: APP_DIALOG_ENTER_ANIMATION_DURATION,
      exitAnimationDuration: APP_DIALOG_EXIT_ANIMATION_DURATION,
      closeOnNavigation: false,
      disableClose: true
    });

    form.afterClosed().subscribe((results: any) => {
      //console.log("fieldDependenciesConfigsForm.afterClosed() results", results);
    });
  }

  public onRemoveDataClick(data: any): void {

    let dialogConfig: MatDialogConfig = {
      width: '600px',
      data: {
        title: 'Are you sure to remove this publication forms with number of order: ' + data?.position + '?',
        messages: 'Please check again before you remove this publication.',
        cancelButtonText: 'Cancel',
        proceedButtonText: 'Proceed',
      }
    };

    // Dialog initial configuration and open
    const dialogRef = this.dialog.open(CustomDialogPublicationRemoveConfirmComponent, dialogConfig);

    // Subscribe to dialog closed event
    dialogRef.afterClosed().subscribe((response: any) => {
      if (response) {
        const stringParameter = (data?.uuid) ? '/' + data?.uuid + '/disable' : '';

        this.sendData(null, stringParameter);
      }
    });
  }

  public onDisableDataClick(data: any): void {

    let dialogConfig: MatDialogConfig = {
      width: '600px',
      data: {
        title: 'Are you sure to remove this publication forms with number of order: ' + data?.position + '?',
        messages: 'Please check again before you remove this publication.',
        cancelButtonText: 'Cancel',
        proceedButtonText: 'Proceed',
      }
    };

    // Dialog initial configuration and open
    const dialogRef = this.dialog.open(CustomDialogPublicationRemoveConfirmComponent, dialogConfig);

    // Subscribe to dialog closed event
    dialogRef.afterClosed().subscribe((response: any) => {
      if (response) {
        const stringParameter = (data?.uuid) ? '/' + data?.uuid + '/disable' : '';

        this.sendData(null, stringParameter);
      }
    });
  }

  //public onManageDataClick(data: any): void {

  //  let dialogConfig: MatDialogConfig = {
  //    width: '600px',
  //    data: {
  //      title: 'Are you sure to manage this publication form version with number of order: ' + data?.position + '?',
  //      messages: 'Please check again before you manage this publication.',
  //      cancelButtonText: 'Cancel',
  //      proceedButtonText: 'Proceed',
  //    }
  //  };

  //  // Dialog initial configuration and open
  //  const dialogRef = this.dialog.open(DialogConfirmComponent, dialogConfig);

  //  // Subscribe to dialog closed event
  //  dialogRef.afterClosed().subscribe((response: any) => {
  //    if (response?.result) {
  //      this.router.navigate([this.router.url + '/manage'], {
  //        state: data
  //      });
  //    }
  //  });
  //}

  private sendData(parameter: any = null, stringParams: string = '', formData?: FormData): void {

    // Access delete API
    this.appSvc.deleteParams(AppServiceType.CONFIGURATION_PUBLICATIONS_FORMS_DISABLE, formData, parameter, stringParams).subscribe(
      (successResponse: ResponseFormat) => {
        this.handleResponse(successResponse);
        //this.router.navigate(['/configurations-publication-forms']);
        this.getTableData(this.tableDataPage);
      },
      (errorResponse: ResponseFormat) => {
        this.handleResponse(errorResponse);
      }
    );

  }

  private handleResponse(response: ResponseFormat): void {
    this.generalSvc.setResponseSnackBar(response);
  }

  public onBackClick(): void {
    this.router.navigate([this.firstActiveRoute], {
      state: this.stateData
    });
  }

}
