import { CommonModule, formatDate } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { AppTableColumns, TableComponent } from '../../shared/table/table.component';
import { GhostTableComponent } from '../../shared/ghost-table/ghost-table.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router, NavigationExtras } from '@angular/router';
import { AppGeneralService, Page, ResponseFormat } from 'src/app/services/app-general.service';
import { AppService, AppServiceBaseAPI, AppServiceType } from 'src/app/services/app.service';
import { CustomDialogPublicationRemoveConfirmComponent } from '../../publication/custom-dialog-publication-remove-confirm/custom-dialog-publication-remove-confirm.component';
import { DialogConfirmComponent } from '../../shared/dialogs/dialog-confirm/dialog-confirm.component';

@Component({
  selector: 'app-publication-general-types-master-data-configurations',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatDividerModule, MatButtonModule, MatIconModule, GhostTableComponent, TableComponent],
  templateUrl: './publication-general-types-master-data-configurations.component.html',
  styleUrls: ['./publication-general-types-master-data-configurations.component.scss']
})
export class PublicationGeneralTypesMasterDataConfigurationsComponent {

  private router: Router = inject(Router);
  private appSvc: AppService = inject(AppService);
  private generalSvc: AppGeneralService = inject(AppGeneralService);
  private dialog: MatDialog = inject(MatDialog);

  @Input() activeTab: number = 0;

  serverResponse!: { message: string | null, date: string | null } | null;

  showTable!: boolean;

  tableDisplayedColumns!: AppTableColumns;
  tableDataSource!: Array<any>;
  tableDataPage!: Page;

  constructor() {
    localStorage.removeItem('stateConfigurationsPublicationGeneralTypesDetail');

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

  private getServerInfo(): void {
    this.appSvc.advanceList(
      AppServiceBaseAPI.SVC_DYNAMIC_FORM_LUMEN,
      AppServiceType.CONFIGURATION_PUBLICATIONS_GENERAL_TYPE_MAIN
    ).subscribe(response => {
      this.serverResponse = response['data'];
    });
  }

  private tableInit(): void {
    this.tableDisplayedColumns = [
      { type: 'orderNumber', label: 'No.', property: 'position' },
      { type: 'text', label: 'Publication General Type Name', property: 'publication_general_type_name' },
      { type: 'text', label: 'General Type Code', property: 'publication_general_type_code' },
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
      AppServiceType.CONFIGURATION_PUBLICATIONS_GENERAL_TYPES,
      undefined,
      undefined,
      this.tableDataPage
    ).subscribe(successResponse => {
      if (successResponse['data']) successResponse['data'] = successResponse['data'].map((data: any, dataIndex: number) => {
        data['position'] = dataIndex + 1;
        data['publication_type_preview'] = (data['publication_type'])
          ? `<b>[${data.publication_type.publication_general_type?.publication_general_type_name}]</b> ${data.publication_type?.publication_type_code}`
          : null;
        data['form_version_preview'] = (data['publication_form_version_name'] || data['publication_form_version_code'])
          ? `<b>[${data.publication_form_version_code}]</b> - ${data.publication_form_version_name}`
          : null;
        data['created_at_preview'] = (data['created_at'])
          ? formatDate(data['created_at'], 'fullDate', 'en')
          : null;
        data['updated_at_preview'] = (data['updated_at'])
          ? formatDate(data['updated_at'], 'fullDate', 'en')
          : null;
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

  public onAddDataClick(): void {
    this.router.navigate([this.router.url + '/create']);
  }

  public onDetailsDataClick(data: any): void {
    let extras: NavigationExtras = {
      state: data
    };
    this.router.navigate([this.router.url + '/detail'], extras);
  }

  public onEditDataClick(data: any): void {
    let extras: NavigationExtras = {
      state: data
    };
    this.router.navigate([this.router.url + '/update'], extras);
  }

  public onRemoveDataClick(data: any): void {

    let dialogConfig: MatDialogConfig = {
      width: '600px',
      data: {
        title: 'Are you sure to remove this publication general type with number of order: ' + data?.position + '?',
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
        title: 'Are you sure to remove this publication general type with number of order: ' + data?.position + '?',
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

  private sendData(parameter: any = null, stringParams: string = '', formData?: FormData): void {

    // Access delete API
    this.appSvc.advanceDeleteParams(
      AppServiceBaseAPI.SVC_DYNAMIC_FORM_LUMEN,
      AppServiceType.CONFIGURATION_PUBLICATIONS_GENERAL_TYPES_DISABLE,
      formData,
      parameter,
      stringParams
    ).subscribe(
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

}
