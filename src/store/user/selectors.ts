import {RootState} from "../index";
import {AuthStatus} from "../../components/const";

export const selectAuthStatus = (state: RootState): AuthStatus => state.user.authStatus;
