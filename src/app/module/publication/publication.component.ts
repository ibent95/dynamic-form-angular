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
      //console.log(response);

    });
  }

  private tableInit(): void {
    this.tableDisplayedColumns = {
      label: ['Position', 'Name', 'Weight', 'Symbol'],
      property: ['position', 'name', 'weight', 'symbol'],
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
    this.tableDataSource = [
      { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
      { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
      { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
      { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
      { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
      { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
      { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
      { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
      { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
      { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    ];
  }

  public onAddPublicationClick(): void {
    this.router.navigate([this.router.url + '/create']);
  }

}
