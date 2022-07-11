import {AxiosResponse} from "axios";
import {createSelector} from 'reselect';

import {AuthStatus} from "../../consts/common";

import {User} from "../../types/common";

import {AppState} from "../store";

export const selectAuthStatus = (state: AppState): AuthStatus => state.login.authStatus;
export const selectUser = (state: AppState): User => state.login.user;
export const selectIsSending = (state: AppState): boolean => state.login.isSending;
export const selectSendingError = (state: AppState): AxiosResponse | null => state.login.sendingError;

export const selectIsAuthorized = createSelector(
    [selectAuthStatus],
    (authStatus) => authStatus === AuthStatus.AUTH
);
