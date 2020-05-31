import { AuthenService } from '@core/services/authen.service';

import { LoginSuccess, LoginFail, Login } from '@core/store/user/user.actions';
import { DataService } from '@core/services';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { EUserActions } from './user.actions';


@Injectable()
export class UserEffects {
    @Effect()
    login$ = this.actions.pipe(
        ofType<Login>(EUserActions.LOGIN),
        switchMap(action => {
            const { email, password } = action.payload;
            return this.authenServicd.login2(email, password).pipe(
                map(res => new LoginSuccess(email)),
                catchError(e => of(new LoginFail()))
            );
        })
    );
    constructor(private actions: Actions, private authenServicd: AuthenService) {

    }
};
