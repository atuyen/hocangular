
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import * as Constants from '../contants';
import { BaseResponse, LoginResponse } from '../models';
import { IUserLogin } from '../models/user-login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenService {
  constructor(private http: HttpClient) { }

  public login(userLogin: IUserLogin): Observable<LoginResponse> {
    return this.http.post<any>(Constants.Api.LOGIN, userLogin)
      .pipe(
        map((response: BaseResponse<LoginResponse>) => {
          const loginResponse: LoginResponse = response.data;
          if (loginResponse) {
            localStorage.setItem(Constants.LocalStorageKey.ACCESS_TOKEN, loginResponse.accessToken);
          }
          return response.data;
        }),
        // catchError(this.handleError)
      );
  }

  public login2(userName: string, password: string): Observable<string> {
    return of(userName);
  }


  public logout() {

    // call api logout
    // remove user from local storage to log user out
    localStorage.removeItem(Constants.LocalStorageKey.ACCESS_TOKEN);
    sessionStorage.removeItem(Constants.LocalStorageKey.ACCESS_TOKEN);

  }


  public getToken(): string {
    let token = localStorage.getItem(Constants.LocalStorageKey.ACCESS_TOKEN);
    if (!token) {
      token = sessionStorage.getItem(Constants.LocalStorageKey.ACCESS_TOKEN);
    }
    if (!token) {
      return '';
    }
    return token;
  }


}
