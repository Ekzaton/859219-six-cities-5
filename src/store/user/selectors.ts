import {RootState} from "../store";

import {AuthStatus} from "../../consts/common";

import {User} from "../../types/common";

export const selectAuthStatus = (state: RootState): AuthStatus => state.user.authStatus;
export const selectUser = (state: RootState): User => state.user.data;
export const selectIsDataSending = (state: RootState): boolean => state.user.isDataSending;
export const selectIsSendingError = (state: RootState): boolean => state.user.isSendingError;
