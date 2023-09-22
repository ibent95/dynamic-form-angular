import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AppServiceType, AppService } from "../../services/app.service";
import { AppGeneralService, ResponseFormat } from 'src/app/services/app-general.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CustomDialogPublicationRemoveConfirmComponent } from './custom-dialog-publication-remove-confirm/custom-dialog-publication-remove-confirm.component';
import { HttpParams } from '@angular/common/http';

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

  constructor(
    private router: Router,
    private appSvc: AppService,
    private generalSvc: AppGeneralService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.serverResponse = null;
    this.showTable = false;

    this.getServerInfo();

    this.tableDisplayedColumns = {
      label: [],
      type: [],
      property: [],
      originalProperty: [],
    };

    this.tableDataSource = [];

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
      property: ['position', 'title', 'publication_date', 'status', 'actions'],
      originalProperty: ['position', 'title', 'publication_date', 'status'],
    };

    //this.tableDisplayedColumns = [
    //  { label: 'Position', property: 'position', },
    //  { label: 'Name', property: 'name', },
    //  { label: 'Weight', property: 'weight', },
    //  { label: 'Symbol', property: 'symbol', },
    //];

    this.getTableData();
  }

  private getTableData(): void {
    let PARAMS = new HttpParams();
    PARAMS.append('limit', 10);
    PARAMS.append('offset', 0);

    this.appSvc.listParams(AppServiceType.PUBLICATIONS, PARAMS).subscribe(response => {
      if (response['data']) response['data'] = response['data'].map((data: any, dataIndex: number) => {
        data['position']    = dataIndex + 1;
        data['status']      = data['publication_status']['publication_status_name'];
        data['status_code'] = data['publication_status']['publication_status_code'];
        data['status_uuid'] = data['publication_status']['uuid'];

        return data;
      });
      this.tableDataSource = response['data'];
      this.showTable = true;
    });
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