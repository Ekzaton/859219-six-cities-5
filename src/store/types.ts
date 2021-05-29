import {AxiosInstance} from "axios";
import {ThunkAction, ThunkMiddleware} from "redux-thunk";

import {ActionType} from "./const";
import {FilteringType, SortingType} from "../components/const";
import {Offer} from "../components/types";

export type State = {
  activeOfferID: number | null,
  currentFiltering: FilteringType,
  currentSorting: SortingType,
  offers: Offer[],
};

type getActiveOfferIDAction = {
  type: typeof ActionType.GET_ACTIVE_OFFER_ID,
  payload: number | null
}

type getCurrentFilteringAction = {
  type: typeof ActionType.GET_CURRENT_FILTERING,
  payload: FilteringType
}

type getCurrentSortingAction = {
  type: typeof ActionType.GET_CURRENT_SORTING,
  payload: SortingType
}

type getOffersAction = {
  type: typeof ActionType.GET_OFFERS,
  payload: Offer[]
}

export type Action = getActiveOfferIDAction | getCurrentFilteringAction | getCurrentSortingAction | getOffersAction;
export type APIAction = ThunkAction<void, State, AxiosInstance, Action>;
export type APIMiddleware = ThunkMiddleware<State, Action, AxiosInstance>;
