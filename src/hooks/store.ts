import {AxiosInstance} from "axios";
import {useDispatch, useSelector, TypedUseSelectorHook} from "react-redux";
import {AnyAction, Dispatch} from "redux";
import {ThunkDispatch} from "redux-thunk";

import {AppState} from "../store/store";

export const useAppDispatch = (): Dispatch & ThunkDispatch<AppState, AxiosInstance, AnyAction> => useDispatch();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
