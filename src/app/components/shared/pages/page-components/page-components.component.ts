import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DateView, OwlDateTimeComponent } from '@danielmoncada/angular-datetime-picker';

@Component({
  selector: 'app-page-components',
  templateUrl: './page-components.component.html',
  styleUrls: ['./page-components.component.scss']
})
export class PageComponentsComponent implements OnInit {

  hidePassword: boolean = true;

  radioField: string = '';

  chipsField: Array<any> = [
    { name: 'Lemon' },
    { name: 'Lime' },
    { name: 'Apple' }
  ];
  chipsAddOnBlur: boolean = true;
  readonly chipsSeparatorKeysCodes = [ENTER, COMMA] as const;

  sliderField: number = 20;

  customDateField: string = '';
  customMonthField: string = '';
  customYearField: string = '';
  customTimeField: string = '';
  customDateTimeField: string = '';

  nowDate: Date = new Date();

  owlDateTimeMonthStartView: DateView = DateView.MULTI_YEARS;
  owlDateTimeYearStartView: DateView = DateView.MULTI_YEARS;

  owlDateField: any = formatDate(this.nowDate, 'yyyy-MM-dd hh:mm', 'id');
  owlMonthField: any = formatDate(this.nowDate, 'yyyy-MM-dd hh:mm', 'id');
  owlYearField: any = formatDate(this.nowDate, 'yyyy-MM-dd hh:mm', 'id');
  owlTimeField: any = null;
  owlDateTimeField: any = formatDate(this.nowDate, 'yyyy-MM-dd hh:mm', 'id');
  owlDateRangeField: any = null;
  owlTimeRangeField: any = null;
  owlDateTimeRangeField: any = null;

  tableDisplayedColumns: Array<string> = ['position', 'name', 'weight', 'symbol'];
  tableDataSource: Array<any> = [
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

  constructor(
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void { }

  public setHidePassword(event: Event): void {
    event.preventDefault();
    this.hidePassword = !this.hidePassword;
  }

  public chipsAdd(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) this.chipsField.push({ name: value });

    // Clear the input value
    event.chipInput!.clear();
  }

  public chipsRemove(fruit: Array<any>): void {
    const index = this.chipsField.indexOf(fruit);

    if (index >= 0) this.chipsField.splice(index, 1);
  }

  public openSnackbar(message: string, action: string): void {
    this._snackBar.open(message, action);
  }

  public setOwlDateTimeMonthYear(selectedMonthYear: object, datepicker: OwlDateTimeComponent<object>): void {
    datepicker.close();

    this.owlMonthField = selectedMonthYear;
  }

  public setOwlDateTimeYear(selectedYear: object, datepicker: OwlDateTimeComponent<object>): void {
    datepicker.close();

    this.owlYearField = selectedYear;
  }

}