import { IUserState } from './user.states';
import { IAppState } from './../app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';


const featureUser = createFeatureSelector<IUserState>('user');

export const getLoadingLogin = createSelector(featureUser, state => state.login.loading);
export const getSuccessLogin = createSelector(featureUser, state => state.login.success);
export const getFailLogin = createSelector(featureUser, state => state.login.fail);
