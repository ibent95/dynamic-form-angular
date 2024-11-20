import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Page } from 'src/app/services/app-general.service';

export enum AppTableColumnType {
  expansion = 'expansion',
  orderNumber = 'orderNumber',
  text = 'text',
  number = 'number',
  date = 'date',
  datetime = 'datetime',
  status = 'status',
  actions = 'actions',
  html = 'html',
};

export type AppTableColumn = {
  type: keyof typeof AppTableColumnType,
  label?: string,
  property?: string,
  originalProperty?: string
}

export type AppTableColumns = Array<AppTableColumn>;

export enum AppTableGlobalActions {
  detail,
  edit,
  delete,
  activation,
  checkbox,
  expansion,
  manage,
};

export type AppTableActions = Array<
  keyof typeof AppTableGlobalActions |
  string |
  ((data?: any) => () => any) |
  false
>;

export type AppTableShadow = 'z5' | 'z10' | 'z15' | 'z20' | 'z25' | 'z30' | string ;

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginatorModule, MatSlideToggleModule, MatIconModule, MatButtonModule],
  templateUrl: './table.component.html',
  styles: ['::ng-deep table.mat-mdc-table.app-mat-table tbody td { padding: 16px !important; } ::ng-deep div.mat-mdc-paginator-range-actions button { margin-top: 10px; }']
})
export class TableComponent implements OnInit, AfterViewInit, OnChanges {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  /**
   * Configuration variables
   */

  @Input() showLoaderInLoadingData: boolean = false;
  @Input() showCaption: boolean = false;
  @Input() showDataExpansion: boolean = false;
  @Input() showDataOrderNumber: boolean = true;
  @Input() showDataStatus: boolean = true;
  @Input() showDataActions: boolean = true;
  @Input() showShadow: boolean = true;
  @Input() showPagination: boolean = true;
  @Input() showFooter: boolean = true;

  /**
   * External data variables
   */

  @Input() caption!: string;
  @Input() columns: AppTableColumns = [];
  @Input() dataSource!: Array<any> | MatTableDataSource<any> | any;
  @Input() actions: AppTableActions = ['detail', 'edit', 'delete'];
  @Input() shadow: AppTableShadow = 'z8';
  @Input() page!: Page;
  @Input() pageSizeOptions: Array<number> = [10, 25, 50, 100];
  @Input() footer!: string;

  /**
   * Local variables
   */

  displayedColumns!: AppTableColumns; // All columns in object to display in view
  displayedColumnsProperties!: Array<string>; // All columns in flat string array properties to display in view
  expansionColumn!: AppTableColumn;
  orderNumberColumn!: AppTableColumn;
  statusColumn!: AppTableColumn;
  actionsColumn!: AppTableColumn;
  displayedShadow!: AppTableShadow;

  /**
   * Event emitters
   */

  // Global event
  @Output() change: EventEmitter<any> = new EventEmitter<any>(true);
  @Output() changes: EventEmitter<any> = new EventEmitter<any>(true);
  @Output() pageChange: EventEmitter<any> = new EventEmitter<any>(true);

  @Output() dataDetail: EventEmitter<any> = new EventEmitter<any>(true); // Edit button event
  @Output() dataEdit: EventEmitter<any> = new EventEmitter<any>(true); // Edit button event
  @Output() dataDelete: EventEmitter<any> = new EventEmitter<any>(true); // Delete button event
  @Output() dataActivate: EventEmitter<any> = new EventEmitter<any>(true); // Activate in slider event
  @Output() dataDisable: EventEmitter<any> = new EventEmitter<any>(true); // Disable in slider event
  @Output() dataCheck: EventEmitter<any> = new EventEmitter<any>(true); // Check in checkbox button event
  @Output() dataUncheck: EventEmitter<any> = new EventEmitter<any>(true); // Uncheck in checkbox button event
  @Output() dataExpand: EventEmitter<any> = new EventEmitter<any>(true); // Expand in table row event
  @Output() dataCollapse: EventEmitter<any> = new EventEmitter<any>(true); // Collapse in table row event
  @Output() dataManage: EventEmitter<any> = new EventEmitter<any>(true); // Manage in table row event

  constructor() { }

  ngOnInit(): void {
    // Filters columns for displayed columns
    this.displayedColumns = this.columns.filter((column: AppTableColumn) => {

      /**
       * Separate or save the spesific column
       * for future use
       */

      // expansion
      if (column.type === AppTableColumnType.expansion.valueOf()) {
        this.expansionColumn = column;
      }

      // orderNumber
      if (column.type === AppTableColumnType.orderNumber.valueOf()) {
        this.orderNumberColumn = column;
      }

      // status
      if (column.type === AppTableColumnType.status.valueOf()) {
        this.statusColumn = column;
      }

      // actions
      if (column.type === AppTableColumnType.actions.valueOf()) {
        this.actionsColumn = column;
      }

      /**
       * Filter the undefined, unused and specifict columns
       * from displayed columns for dynamic view
       */
      return column?.property // Filter valid value of `property`
        && (column?.type && ( // Filter valid value of `type`
          !(this.showDataExpansion && column.type === AppTableColumnType.expansion.valueOf()) // Filter the expansion type
          && !(this.showDataOrderNumber && column.type === AppTableColumnType.orderNumber.valueOf()) // Filter the orderNumber type
          && !(this.showDataStatus && column.type === AppTableColumnType.status.valueOf()) // Filter the status type
          && !(this.showDataActions && column.type === AppTableColumnType.actions.valueOf()) // Filter the actions type
        ))
    });

    // Map or flatten the displayedColumns to value of `property`
    this.displayedColumnsProperties = this.displayedColumns.map((column: any) => column.property);

    if (this.showDataExpansion) {
      this.displayedColumnsProperties.unshift('expansion');
    }

    if (this.showDataOrderNumber) {
      this.displayedColumnsProperties.unshift('orderNumber');
    }

    if (this.showDataStatus) {
      this.displayedColumnsProperties.push('status');
    }

    if (this.showDataActions) {
      this.displayedColumnsProperties.push('actions');
    }

    if (this.showShadow) {
      this.displayedShadow = (['z5', 'z10', 'z15', 'z20', 'z25', 'z30'].includes(this.shadow))
        ? 'mat-elevation-' + this.shadow
        : this.shadow ;
    }

    this.dataSource = new MatTableDataSource<any>(this.dataSource);

  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnChanges(changes: SimpleChanges): void { }

  // Before form view

  // After component create
  public onPageChange(data: any): void {
    this.pageChange.next(data);
  }

  public onDataDetailClick(data: any): void {
    this.dataDetail.next(data);
  }

  public onDataEditClick(data: any): void {
    this.dataEdit.next(data);
  }

  public onDataDeleteClick(data: any): void {
    this.dataDelete.next(data);
  }

  public onDataActivateClick(data: any): void {
    this.dataActivate.next(data);
  }

  public onDataDisableClick(data: any): void {
    this.dataDisable.next(data);
  }

  public onDataCheckClick(data: any): void {
    this.dataCheck.next(data);
  }

  public onDataUncheckClick(data: any): void {
    this.dataUncheck.next(data);
  }

  public onDataExpandClick(data: any): void {
    this.dataExpand.next(data);
  }

  public onDataCollapseClick(data: any): void {
    this.dataCollapse.next(data);
  }

  public onDataManageClick(data: any): void {
    this.dataManage.next(data);
  }

}
