import {RootState} from "../index";
import {AuthStatus} from "../../const";
import {User} from "../../types";

export const selectAuthStatus = (state: RootState): AuthStatus => state.user.authStatus;
export const selectUserData = (state: RootState): User => state.user.userData;
