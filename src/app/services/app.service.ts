import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ENV } from '../app.config';
import { Page } from './app-general.service';

export enum AppServiceType {

  MAIN,
  MAIN_UPLOAD_FILE,
  MAIN_UPLOADED_FILE,

  PUBLICATION_MAIN,
  PUBLICATIONS,
  PUBLICATIONS_FORM_META_DATA,

  PUBLICATION_FORM_VERSION_MAIN,
  PUBLICATION_FORM_VERSIONS,

  PUBLICATION_FORM_MAIN,
  PUBLICATION_FORMS,

  PUBLICATIONS_MASTERDATA_PUBLICATION_TYPES,
  PUBLICATIONS_MASTERDATA_PUBLICATION_GENERAL_TYPES,
  PUBLICATIONS_MASTERDATA_PUBLICATION_STATUSES,
  PUBLICATIONS_MASTERDATA_PUBLICATION_FORM_VERSIONS,
  PUBLICATIONS_MASTERDATA_PUBLICATION_FORMS,
  DYNAMICFORM_MASTERDATA_FIELD_TYPES,
  DYNAMICFORM_MASTERDATA_FIELD_OPTIONS,

  CONFIGURATION_PUBLICATIONS_FORM_MAIN,
  CONFIGURATION_PUBLICATIONS_FORMS,
  CONFIGURATION_PUBLICATIONS_FORMS_DISABLE,
  CONFIGURATION_PUBLICATIONS_FORM_VERSION_MAIN,
  CONFIGURATION_PUBLICATIONS_FORM_VERSIONS,

}

export enum AppFormStatus {
  CREATE = 'create',
  UPDATE = 'update',
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
      .set('Access-Control-Allow-Credentials', 'false')
      .set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
      //.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
      .set('Access-Control-Allow-Origin', '*')
      //.set('Allow', 'GET, POST, OPTIONS, PUT, DELETE')
      //.set('Cache-Control', 'no-cache, private')
      //.set('X-Powered-By', 'PHP/8.1.0')
      //.set('X-Robots-Tag', 'noindex')
      //.set('Content-Length', '79')
      //.set('Content-Type', 'application/json')
      //.set('Connection', 'close')
      .set('Accept', 'application/json, text/plain, */*')
      ;
    //{ 'Content-Type': 'application/x-www-form-urlencoded', 'Access-Control-Allow-Origin': '*' }


  }

  getUrl(serviceType: AppServiceType) {
    let url: string;

    switch (serviceType) {
      case AppServiceType.MAIN:
        url = this.BASE_URL_API + '/v1';
        break;

      case AppServiceType.MAIN_UPLOAD_FILE:
        url = this.BASE_URL_API + '/v1/files/upload';
        break;

      case AppServiceType.MAIN_UPLOADED_FILE:
        url = this.BASE_URL_API + '/v1/files';
        break;

      /** =============================== PUBLICATION API =============================== */

      case AppServiceType.PUBLICATION_MAIN:
        url = this.BASE_URL_API + '/v1/publication';
        break;

      case AppServiceType.PUBLICATIONS:
        url = this.BASE_URL_API + '/v1/publications';
        break;

      case AppServiceType.PUBLICATIONS_FORM_META_DATA:
        url = this.BASE_URL_API + '/v1/publications/form-meta-data';
        break;

      case AppServiceType.PUBLICATION_FORM_VERSION_MAIN:
        url = this.BASE_URL_API + '/v1/publication-form-version';
        break;

      case AppServiceType.PUBLICATION_FORM_VERSIONS:
        url = this.BASE_URL_API + '/v1/publication-form-versions';
        break;

      case AppServiceType.PUBLICATION_FORM_MAIN:
        url = this.BASE_URL_API + '/v1/publication-form';
        break;

      case AppServiceType.PUBLICATION_FORMS:
        url = this.BASE_URL_API + '/v1/publication-forms';
        break;

      case AppServiceType.PUBLICATIONS_MASTERDATA_PUBLICATION_GENERAL_TYPES:
        url = this.BASE_URL_API + '/v1/master/publication-general-types';
        break;

      case AppServiceType.PUBLICATIONS_MASTERDATA_PUBLICATION_TYPES:
        url = this.BASE_URL_API + '/v1/master/publication-types';
        break;

      case AppServiceType.PUBLICATIONS_MASTERDATA_PUBLICATION_STATUSES:
        url = this.BASE_URL_API + '/v1/master/publication-statuses';
        break;

      case AppServiceType.PUBLICATIONS_MASTERDATA_PUBLICATION_FORM_VERSIONS:
        url = this.BASE_URL_API + '/v1/master/publication-form-versions';
        break;

      case AppServiceType.PUBLICATIONS_MASTERDATA_PUBLICATION_FORMS:
        url = this.BASE_URL_API + '/v1/master/publication-forms';
        break;

      case AppServiceType.DYNAMICFORM_MASTERDATA_FIELD_TYPES:
        url = this.BASE_URL_API + '/v1/master/dynamic-form/field-types';
        break;

      case AppServiceType.DYNAMICFORM_MASTERDATA_FIELD_OPTIONS:
        url = this.BASE_URL_API + '/v1/master/dynamic-form/field-options';
        break;

      /** ================================= RESEARCH API ================================= */

      /** =============================== CONFIGURATION API =============================== */

      case AppServiceType.CONFIGURATION_PUBLICATIONS_FORM_MAIN:
        url = this.BASE_URL_API + '/v1/configurations/publication-form';
        break;

      case AppServiceType.CONFIGURATION_PUBLICATIONS_FORMS:
        url = this.BASE_URL_API + '/v1/configurations/publication-forms';
        break;

      case AppServiceType.CONFIGURATION_PUBLICATIONS_FORMS_DISABLE:
        url = this.BASE_URL_API + '/v1/configurations/publication-forms';
        break;

      case AppServiceType.CONFIGURATION_PUBLICATIONS_FORM_VERSION_MAIN:
        url = this.BASE_URL_API + '/v1/configurations/publication-form-version';
        break;

      case AppServiceType.CONFIGURATION_PUBLICATIONS_FORM_VERSIONS:
        url = this.BASE_URL_API + '/v1/configurations/publication-form-versions';
        break;

      /** ================================== DEFAULT API ================================== */

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

  detail(serviceType: AppServiceType, params: { [param: string]: any } | HttpParams, stringParams: string = ''): Observable<any> {
    return this.http.get(this.getUrl(serviceType) + stringParams, { params: params, headers: this.HEADERS });
  }

  list(serviceType: AppServiceType): Observable<any> {
    return this.http.get(this.getUrl(serviceType), { headers: this.HEADERS });
  }

  listParams(serviceType: AppServiceType, params: {[param: string]: any} | HttpParams, stringParams: string = ''): Observable<any> {
    return this.http.get(this.getUrl(serviceType) + stringParams, { params: params, headers: this.HEADERS });
  }

  listPaginatorParams(serviceType: AppServiceType, params: {[param: string]: any} | HttpParams = {}, stringParams: string = '', page?: Page): Observable<any> {
    if (page) {
      params = { ...params, ...{
        'page_index': page.pageIndex,
        'limit': page.pageSize,
        'offset': page.pageSize * page.pageIndex,
        }
      };
    }

    return this.http.get(this.getUrl(serviceType) + stringParams, { params: params, headers: this.HEADERS });
  }

  post(serviceType: AppServiceType, body: any): Observable<any> {
    return this.http.post(this.getUrl(serviceType), body, { headers: this.HEADERS });
  }

  create(serviceType: AppServiceType, body: any, params: HttpParams, stringParams: string = ''): Observable<any> {
    return this.http.post(this.getUrl(serviceType) + stringParams, body, { params: params, headers: this.HEADERS });
  }

  put(serviceType: AppServiceType, body: any): Observable<any> {
    return this.http.put(this.getUrl(serviceType), body, { headers: this.HEADERS });
  }

  update(serviceType: AppServiceType, body: any, params: HttpParams, stringParams: string = ''): Observable<any> {
    return this.http.put(this.getUrl(serviceType) + stringParams, body, { params: params, headers: this.HEADERS });
  }

  delete(serviceType: AppServiceType, body: any, params: HttpParams, stringParams: string = ''): Observable<any> {
    return this.http.delete(this.getUrl(serviceType) + stringParams, { params: params, headers: this.HEADERS, body: body });
  }

  deleteParams(serviceType: AppServiceType, body: any, params: HttpParams, stringParams: string = ''): Observable<any> {
    return this.http.post(this.getUrl(serviceType) + stringParams, { params: params, headers: this.HEADERS, body: body });
  }

  getIPAddress(params: string = ""): Observable<any> {
    return this.http.get("http://ip-api.com/json/" + (params || ""), { headers: this.HEADERS });
  }

}