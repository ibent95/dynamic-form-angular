import { formatDate } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { MatDateFormats, NativeDateAdapter } from '@angular/material/core';
import { OwlDateTimeFormats } from '@danielmoncada/angular-datetime-picker';
import { Observable } from 'rxjs';
import { ENV } from '../app.config';

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

export enum AppServiceType {

  ROOT,

  PUBLICATION_MAIN,
  PUBLICATIONS,
  PUBLICATION_FORM_METADATA,
  PUBLICATION_MASTERDATA_PUBLICATION_TYPE,

}

@Injectable({
  providedIn: 'any'
})
export class AppService {

  private BASE_URL_API: string | undefined;
  private HEADERS: HttpHeaders;

  constructor(
    @Inject(ENV) private config: any,
    private http: HttpClient
  ) {
    this.BASE_URL_API = this.config.apiUrl;
    this.HEADERS = new HttpHeaders()
      //.set('Access-Control-Allow-Credentials', 'false')
      //.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
      //.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
      .set('Access-Control-Allow-Origin', '*')
      //.set('Allow', 'GET, POST, OPTIONS, PUT, DELETE')
      //.set('Cache-Control', 'no-cache, private')
      //.set('X-Powered-By', 'PHP/8.1.0')
      //.set('X-Robots-Tag', 'noindex')
      //.set('Content-Length', '79')
      .set('Content-Type', 'application/json')
      //.set('Connection', 'close')
      ;
    //{ 'Content-Type': 'application/x-www-form-urlencoded', 'Access-Control-Allow-Origin': '*' }
  }

  getUrl(serviceType: AppServiceType) {
    let url: string;

    switch (serviceType) {
      case AppServiceType.ROOT:
        url = this.BASE_URL_API + '/v1';
        break;

      /** =============================== PUBLICATION =============================== */

      case AppServiceType.PUBLICATION_MAIN:
        url = this.BASE_URL_API + '/v1/publication';
        break;

      case AppServiceType.PUBLICATIONS:
        url = this.BASE_URL_API + '/v1/publications';
        break;

      case AppServiceType.PUBLICATION_FORM_METADATA:
        url = this.BASE_URL_API + '/v1/publication/form-metadata';
        break;

      case AppServiceType.PUBLICATION_MASTERDATA_PUBLICATION_TYPE:
        url = this.BASE_URL_API + '/v1/master/publication-type';
        break;

      /** ================================= RESEARCH ================================= */

      /** ================================== DEFAULT ================================== */

      default:
        url = '';
        break;
    }

    return url;
  }

  //pagedList(serviceType: AppServiceType, page: number, parameter: any, callback: (result: any) => void, params?: any) {
  //  this.http.pagedCollection(this.getUrl(serviceType) + parameter, page, result => {
  //    callback(result);
  //  });
  //}

  list(serviceType: AppServiceType): Observable<any> {
    return this.http.get(this.getUrl(serviceType), { headers: this.HEADERS });
  }

  listParam(serviceType: AppServiceType, params: string = ''): Observable<any> {
    return this.http.get(this.getUrl(serviceType) + params, { headers: this.HEADERS });
  }

  post(serviceType: AppServiceType, body: any): Observable<any> {
    return this.http.post(this.getUrl(serviceType), body, { headers: this.HEADERS });
  }

  create(serviceType: AppServiceType, body: any, params: string = ''): Observable<any> {
    return this.http.post(this.getUrl(serviceType) + params, body, { headers: this.HEADERS });
  }

  put(serviceType: AppServiceType, body: any): Observable<any> {
    return this.http.put(this.getUrl(serviceType), body, { headers: this.HEADERS });
  }

  update(serviceType: AppServiceType, body: any, params: string = ''): Observable<any> {
    return this.http.put(this.getUrl(serviceType) + params, body, { headers: this.HEADERS });
  }

}