import {RootState} from "../index";
import {AuthStatus} from "../../const";
import {User} from "../../types";

export const selectAuthStatus = (state: RootState): AuthStatus => state.user.authStatus;
export const selectIsDataSending = (state: RootState): boolean => state.user.isDataSending;
export const selectIsSendingError = (state: RootState): boolean => state.user.isSendingError;
export const selectUserData = (state: RootState): User => state.user.userData;
