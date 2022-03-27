import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ghost-table',
  templateUrl: './ghost-table.component.html',
  styleUrls: ['./ghost-table.component.scss']
})
export class GhostTableComponent implements OnInit {

  @Input() rowCount!: number;
  @Input() columnCount!: number;
  @Input() gridType!: 'material' | 'tailwind';

  data!: { header: Array<any>, body: Array<any> };

  constructor() { }

  ngOnInit(): void {
    this.rowCount = this.rowCount || 3;
    this.columnCount = this.columnCount || 4;
    this.gridType = 'tailwind';

    this.data = {
      header: [],
      body: []
    };

    this.initiateRowsAndColumns();
  }

  private initiateRowsAndColumns() {

    // Initial item for columns of datas`s body
    let headerItem: { column: Array<any> } = { column: [] };

    // Loop / itarable for generate rows of datas`s header
    for (let headerColumIndex = 0; headerColumIndex < this.columnCount; headerColumIndex++) {
      headerItem?.column.push('header-' + (headerColumIndex + 1));
    }

    // Push generated item to body of data
    this.data.header.push(headerItem);

    // Loop / itarable for generate rows of datas`s body
    for (let rowIndex = 0; rowIndex < this.rowCount; rowIndex++) {

      // Initial item for columns of datas`s body
      let item: { column: Array<any> } = { column: [] };

      // Loop / itarable for generate columns of datas`s body
      for (let columIndex = 0; columIndex < this.columnCount; columIndex++) {
        item?.column.push('value-' + (columIndex + 1));
      }

      // Push generated item to body of data
      this.data.body.push(item);
    }

  }

}
