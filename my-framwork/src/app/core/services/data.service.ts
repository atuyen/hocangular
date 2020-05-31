import { PagingResponse } from './../models/response/paging-response.model';
import { NotificationService } from '@core/services';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import * as Constants from '../contants';
import { BaseResponse } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient,
    private notificationService: NotificationService) { }

  public getList<T>(url: string): Observable<T[]> {
    return this.http.get<BaseResponse<T[]>>(url)
      .pipe(
        map((response: BaseResponse<T[]>) => response.data),
        catchError(this.throwError)
      );
  }


  public getPaging<T>(url: string): Observable<PagingResponse<T>> {
    return this.http.get<PagingResponse<T>>(url)
      .pipe(
        catchError(this.throwError)
      );
  }



  public api1(): Observable<any> {
    return of({data: 'test1'});
    // return throwError('co loi');
  }

  public api2(): Observable<any> {
    return of({data: 'test2'});
    // return throwError('co loi');
  }

  public api3(input: string): Observable<any> {
    return of({data: `test3 xuat phat tu ${input}`});
    // return throwError('co loi');
  }

  public api4(input: string): Observable<any> {
    return of({data: `test4 xuat phat tu ${input}`});
    // return throwError('co loi');
  }







  private throwError(error: HttpErrorResponse) {
    return throwError(error);
  }


  public handleError(error) {
    this.notificationService.printErrorMessage('Co Loi');
  }




}
