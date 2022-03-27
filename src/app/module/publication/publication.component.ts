import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceType, AppService } from "../../service/app.service";

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss']
})
export class PublicationComponent implements OnInit {

  serverResponse!: { message: string | null, date: string| null } | null;

  tableDisplayedColumns!: { label: Array<string>, property: Array<string> };
  tableDataSource!: Array<any>;

  constructor(
    private router: Router,
    private appSvc: AppService,
  ) { }

  ngOnInit(): void {
    this.serverResponse = null;

    this.getServerInfo();

    this.tableDisplayedColumns = {
      label: [],
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
      label: ['Title', 'Date of publish'],
      property: ['title', 'publication_date'],
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
      this.tableDataSource = response['data'];
    });
  }

  public onAddPublicationClick(): void {
    this.router.navigate([this.router.url + '/create']);
  }

}
