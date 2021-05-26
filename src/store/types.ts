import {ActionType} from "./const";
import {Offer} from "../components/types";

export type State = {
  activeOfferID: number | null,
  currentFilter: string,
  currentSorting: string,
  offers: Offer[],
};

type getActiveOfferIDAction = {
  type: typeof ActionType.GET_ACTIVE_OFFER_ID,
  payload: number | null
}

type getCurrentFilterAction = {
  type: typeof ActionType.GET_CURRENT_FILTER,
  payload: string
}

type getCurrentSortingAction = {
  type: typeof ActionType.GET_CURRENT_SORTING,
  payload: string
}

type getOffersAction = {
  type: typeof ActionType.GET_OFFERS,
  payload: Offer[]
}

export type Action = getActiveOfferIDAction | getCurrentFilterAction | getCurrentSortingAction | getOffersAction;
