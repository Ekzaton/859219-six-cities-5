import {AxiosInstance} from "axios";
import {ThunkAction, ThunkMiddleware} from "redux-thunk";

import {ActionType} from "../const";
import {Offer} from "../../components/types";

export type DataState = {
  offers: Offer[]
};

type getOffersAction = {
  type: typeof ActionType.GET_OFFERS,
  payload: Offer[]
}

export type DataAction = getOffersAction;
export type APIAction = ThunkAction<void, DataState, AxiosInstance, DataAction>;
export type APIMiddleware = ThunkMiddleware<DataState, DataAction, AxiosInstance>;

