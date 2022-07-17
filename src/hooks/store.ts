import {useDispatch, useSelector, TypedUseSelectorHook} from "react-redux";

import {AppDispatch, AppState} from "../store/store";

type TypedUseDispatchHook<T> = () => (...args: unknown[]) => T;

export const useAppDispatch: TypedUseDispatchHook<AppDispatch> = useDispatch;
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
