import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as Constants from '@core/contants';
import { AuthenService } from '@core/services/authen.service';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private authSrv: AuthenService, private router: Router) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        Authorization: this.authSrv.getToken()
      }
    });
    return next.handle(request).pipe(catchError(err => {
      if (err.status === 401) {
        // auto logout if 401 response returned from api
        this.authSrv.logout();
        // not logged in so redirect to login page with the return url
        this.router.navigate([Constants.AppUrl.LOGIN], { queryParams: { returnUrl: this.router.routerState.snapshot.url } });
      }
      // const error = err.error.message || err.statusText;
      return throwError(err);
    }));
  }
}
