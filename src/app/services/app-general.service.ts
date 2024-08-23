import { Injectable } from '@angular/core';
import { MatDateFormats } from '@angular/material/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { OwlDateTimeFormats } from '@danielmoncada/angular-datetime-picker';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppGeneralService {

  matSnackBarConfig!: MatSnackBarConfig;

  constructor(
    private snackBar: MatSnackBar
  ) {
    this.matSnackBarConfig = {
      horizontalPosition: 'right',
      verticalPosition: 'top',
      duration: 5000,
    }
  }

  public setResponseSnackBar(response: ResponseFormat, duration?: number) {
    if (duration) {
      this.matSnackBarConfig.duration = duration;
    }

    switch (response.info) {
      case 'success':
        response.message = 'Success: ' + response.message;
        break;

      case 'error':
        response.message = 'Failed: ' + response.message;
        break;

      case 'info':
      default:
        response.message = 'Info: ' + response.message;
        break;
    }

    this.snackBar.open(response.message, undefined, this.matSnackBarConfig);
  }

}

/** Angular date and time format
 *
 * 'short'      : equivalent to 'M/d/yy, h:mm a' (6/15/15, 9:03 AM).
 * 'medium'     : equivalent to 'MMM d, y, h:mm:ss a' (Jun 15, 2015, 9:03:01 AM).
 * 'long'       : equivalent to 'MMMM d, y, h:mm:ss a z' (June 15, 2015 at 9:03:01 AM GMT+1).
 * 'full'       : equivalent to 'EEEE, MMMM d, y, h:mm:ss a zzzz' (Monday, June 15, 2015 at 9:03:01 AM GMT+01:00).
 * 'shortDate'  : equivalent to 'M/d/yy' (6/15/15).
 * 'mediumDate' : equivalent to 'MMM d, y' (Jun 15, 2015).
 * 'longDate'   : equivalent to 'MMMM d, y' (June 15, 2015).
 * 'fullDate'   : equivalent to 'EEEE, MMMM d, y' (Monday, June 15, 2015).
 * 'shortTime'  : equivalent to 'h:mm a' (9:03 AM).
 * 'mediumTime' : equivalent to 'h:mm:ss a' (9:03:01 AM).
 * 'longTime'   : equivalent to 'h:mm:ss a z' (9:03:01 AM GMT+1).
 * 'fullTime'   : equivalent to 'h:mm:ss a zzzz' (9:03:01 AM GMT+01:00).
 */

export const LOCAL_NATIVE_DATE_FORMATS: MatDateFormats = {
  parse: {
    dateInput: { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' },
  },
  display: {
    dateInput: { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' },
    monthYearLabel: { year: 'numeric', month: 'long' },
    dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' },
    monthYearA11yLabel: { year: 'numeric', month: 'long' },
  }
};

export const OWL_NATIVE_DATE_FORMATS: OwlDateTimeFormats = {
  parseInput: { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'longOffset' },
  fullPickerInput: { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'longOffset' },
  datePickerInput: { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' },
  timePickerInput: { hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'longOffset' },
  monthYearLabel: { year: 'numeric', month: 'long' },
  dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' },
  monthYearA11yLabel: { year: 'numeric', month: 'long' },
};

export const OWL_NATIVE_MONTH_FORMATS: OwlDateTimeFormats = {
  parseInput: { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'longOffset' },
  fullPickerInput: { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'longOffset' },
  datePickerInput: { year: 'numeric', month: 'long' },
  timePickerInput: { hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'longOffset' },
  monthYearLabel: { year: 'numeric', month: 'long' },
  dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' },
  monthYearA11yLabel: { year: 'numeric', month: 'long' },
};

export const OWL_NATIVE_YEAR_FORMATS: OwlDateTimeFormats = {
  parseInput: { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'longOffset' },
  fullPickerInput: { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'longOffset' },
  datePickerInput: { year: 'numeric' },
  timePickerInput: { hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'longOffset' },
  monthYearLabel: { year: 'numeric', month: 'long' },
  dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' },
  monthYearA11yLabel: { year: 'numeric', month: 'long' },
};

export const LUXON_DATE_FORMATS: MatDateFormats = {
  parse: {
    dateInput: 'EEEE, dd MMMM yyyy',
  },
  display: {
    dateInput: 'EEEE, dd MMMM yyyy',
    monthYearLabel: 'MMMM yyyy',
    dateA11yLabel: 'DD MMMM yyyy',
    monthYearA11yLabel: 'MMMM yyyy'
  },
};

export const LUXON_MONTH_FORMATS: MatDateFormats = {
  parse: {
    dateInput: 'MMMM yyyy',
  },
  display: {
    dateInput: 'MMMM yyyy',
    monthYearLabel: 'MMMM yyyy',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM yyyy'
  },
};

export const LUXON_YEAR_FORMATS: MatDateFormats = {
  parse: {
    dateInput: 'yyyy',
  },
  display: {
    dateInput: 'yyyy',
    monthYearLabel: 'yyyy',
    dateA11yLabel: 'yyyy',
    monthYearA11yLabel: 'yyyy'
  },
};

export enum PageState {
  LOADING = 'loading',
  LOADED = 'loaded',
  ERROR = 'error',
  EMPTY = 'empty',
}

export interface Page {
  length: number;
  pageIndex: number;
  pageSize: number;
  previousPageIndex?: number;
};

export interface ResponseFormat {
  info: 'success' | 'error' | 'info';
  count?: number;
  data: any;
  message?: any;
  messages?: Array<any>;
};

export function setConsoleLog(data: any, message?: string): void {
  if (message) {
    console.log(message, data);
  }

  if (!message) {
    console.log(data);
  }
}

export function rebuildObject(data: any): any {
  let result = JSON.parse(JSON.stringify(data));
  return result;
}