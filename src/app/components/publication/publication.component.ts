import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AppServiceType, AppService } from "../../services/app.service";
import { AppGeneralService, Page, ResponseFormat } from 'src/app/services/app-general.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CustomDialogPublicationRemoveConfirmComponent } from './custom-dialog-publication-remove-confirm/custom-dialog-publication-remove-confirm.component';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss']
})
export class PublicationComponent implements OnInit {

  serverResponse!: { message: string | null, date: string| null } | null;

  showTable!: boolean;

  tableDisplayedColumns!: { label: Array<string>, type: Array<string>, property: Array<string>, originalProperty: Array<string> };
  tableDataSource!: Array<any>;
  tableDataPage!: Page;

  constructor(
    private router: Router,
    private appSvc: AppService,
    private generalSvc: AppGeneralService,
    private dialog: MatDialog,
  ) {
    this.serverResponse = null;
    this.showTable = false;

    this.tableDisplayedColumns = {
      label: [],
      type: [],
      property: [],
      originalProperty: [],
    };

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
    this.appSvc.list(AppServiceType.PUBLICATION_MAIN).subscribe(response => {
      this.serverResponse = response['data'];
    });
  }

  private tableInit(): void {
    this.tableDisplayedColumns = {
      label: ['No.', 'Title', 'Date of publish', 'Status', 'Actions'],
      type: ['number', 'text', 'text', 'object', 'any'],
      originalProperty: ['position', 'title', 'publication_date_preview', 'status', 'actions'],
      property: ['position', 'title', 'publication_date_preview'],
    };

    //this.tableDisplayedColumns = [
    //  { label: 'Position', property: 'position', },
    //  { label: 'Name', property: 'name', },
    //  { label: 'Weight', property: 'weight', },
    //  { label: 'Symbol', property: 'symbol', },
    //];

    this.getTableData();
  }

  public getTableData(page?: Page): void {
    if (page) {
      this.tableDataPage = page;
    }

    this.showTable = false;

    this.appSvc.listPaginatorParams(AppServiceType.PUBLICATIONS, undefined, undefined, this.tableDataPage).subscribe(successResponse => {
      if (successResponse['data']) successResponse['data'] = successResponse['data'].map((data: any, dataIndex: number) => {
        data['position']                  = dataIndex + 1;
        data['publication_date_preview']  = (data['publication_date']) ? formatDate(data['publication_date'], 'fullDate', 'en') : null;
        data['status']                    = this.setDataStatus(data['publication_status']);

        return data;
      });

      this.tableDataSource = successResponse['data'];
      this.tableDataPage.length = successResponse['count'];
      this.showTable = true;
    });
  }

  private setDataStatus(data: any): { 'status_name': any, 'status_code': string, 'status_uuid': string, 'classes': Array<string> } {
    let classes: Array<string>;

    switch (data['publication_status_code']) {
      case 'PRO':
        classes = ['text-bg-info'];
        break;

      case 'RJT':
        classes = ['text-bg-danger'];
        break;

      case 'VRF':
        classes = ['text-bg-success'];
        break;

      case 'RVS':
        classes = ['text-bg-warning'];
        break;

      default:
        classes = ['text-bg-secondary'];
        break;
    }

    return {
      'status_name': data['publication_status_name'],
      'status_code': data['publication_status_code'],
      'status_uuid': data['uuid'],
      'classes': classes
    };
  }

  public onAddPublicationClick(): void {
    this.router.navigate([this.router.url + '/create']);
  }

  public onDetailsPublicationClick(data: any): void {
    let extras: NavigationExtras = {
      state: data
    };
    this.router.navigate([this.router.url + '/detail'], extras);
  }

  public onEditPublicationClick(data: any): void {
    let extras: NavigationExtras = {
      state: data
    };
    this.router.navigate([this.router.url + '/update'], extras);
  }

  public onRemovePublicationClick(data: any): void {
    
    let dialogConfig: MatDialogConfig = {
      width: '600px',
      data: {
        title: 'Are you sure to remove this publication with number of order: ' + data?.position + '?',
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
        const stringParameter = (data?.uuid) ? '/' + data?.uuid : '';

        this.sendData(null, stringParameter);
      }
    });
  }

  private sendData(parameter: any = null, stringParams: string = '', formData?: FormData): void {

    // Access delete API
    this.appSvc.delete(AppServiceType.PUBLICATIONS, formData, parameter, stringParams).subscribe(
      (successResponse: ResponseFormat) => {
        this.handleResponse(successResponse);
        this.router.navigate(['/publication']);
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