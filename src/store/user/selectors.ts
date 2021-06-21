import {RootState} from "../store";

import {AuthStatus} from "../../consts/common";

import {User} from "../../types/common";

export const selectAuthStatus = (state: RootState): AuthStatus => state.user.authStatus;
export const selectUserData = (state: RootState): User => state.user.userData;
