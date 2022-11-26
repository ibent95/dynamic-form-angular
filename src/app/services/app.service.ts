import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ENV } from '../app.config';

export enum AppServiceType {

  ROOT,

  PUBLICATION_MAIN,
  PUBLICATIONS,
  PUBLICATION_FORM_METADATA,
  PUBLICATION_MASTERDATA_PUBLICATION_TYPE,

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

  create(serviceType: AppServiceType, body: any, params: HttpParams, anotherParams: string = ''): Observable<any> {
    return this.http.post(this.getUrl(serviceType) + anotherParams, body, { params: params, headers: this.HEADERS });
  }

  put(serviceType: AppServiceType, body: any): Observable<any> {
    return this.http.put(this.getUrl(serviceType), body, { headers: this.HEADERS });
  }

  update(serviceType: AppServiceType, body: any, params: HttpParams, anotherParams: string = ''): Observable<any> {
    return this.http.put(this.getUrl(serviceType) + anotherParams, body, { params: params, headers: this.HEADERS });
  }

  getIPAddress(params: string = ""): Observable<any> {
    return this.http.get("http://ip-api.com/json/" + (params || ""), { headers: this.HEADERS });
  }

}