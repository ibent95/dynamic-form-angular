import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceType, AppService } from "../../services/app.service";

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss']
})
export class PublicationComponent implements OnInit {

  serverResponse!: { message: string | null, date: string| null } | null;

  showTable!: boolean;

  tableDisplayedColumns!: { label: Array<string>, type: Array<string>, property: Array<string> };
  tableDataSource!: Array<any>;

  constructor(
    private router: Router,
    private appSvc: AppService,
  ) { }

  ngOnInit(): void {
    this.serverResponse = null;
    this.showTable = false;

    this.getServerInfo();

    this.tableDisplayedColumns = {
      label: [],
      type: [],
      property: [],
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
      label: ['No.', 'Title', 'Date of publish', 'Status'],
      type: ['number', 'text', 'text', 'object'],
      property: ['position', 'title', 'publication_date', 'status'],
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
    this.appSvc.list(AppServiceType.PUBLICATIONS).subscribe(response => {
      if (response['data']) response['data'].map((data: any, dataIndex: number) => {
        data['position'] = dataIndex + 1;
        data['status'] = data['publication_status']['publication_status_name'];
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

}