import {AxiosResponse} from "axios";
import {createSelector} from 'reselect';

import {RootState} from "../store";

import {AuthStatus} from "../../consts/common";

import {User} from "../../types/common";

export const selectAuthStatus = (state: RootState): AuthStatus => state.login.authStatus;
export const selectUser = (state: RootState): User => state.login.user;
export const selectIsSending = (state: RootState): boolean => state.login.isSending;
export const selectSendingError = (state: RootState): AxiosResponse | null => state.login.sendingError;

export const selectIsAuthorized = createSelector(
    [selectAuthStatus],
    (authStatus) => authStatus === AuthStatus.AUTH
);
