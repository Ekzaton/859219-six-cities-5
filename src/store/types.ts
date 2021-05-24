import {ActionType} from "./const";
import {Offer} from "../components/types";

export type State = {
  currentFilter: string,
  currentSorting: string,
  offers: Offer[],
};

type getCurrentFilterAction = {
  type: typeof ActionType.GET_CURRENT_FILTER,
  payload: string
}

type getCurrentSorting = {
  type: typeof ActionType.GET_CURRENT_SORTING,
  payload: string
}

type getOffersAction = {
  type: typeof ActionType.GET_OFFERS,
  payload: Offer[]
}

export type Action = getCurrentFilterAction | getCurrentSorting | getOffersAction;
