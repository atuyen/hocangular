import { ActionReducerMap } from '@ngrx/store';
import { IUserState } from './user/user.states';
import { userReducer } from './user/user.reducer';

export interface IAppState {
    user: IUserState;
}

export const appReducer: ActionReducerMap<IAppState> = {
    user: userReducer
};
