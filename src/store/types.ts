import {ActionType} from "./const";
import {Offer} from "../components/types";

export type State = {
  currentFilter: string,
  offers: Offer[]
};

type getCurrentFilterAction = {
  type: typeof ActionType.GET_CURRENT_FILTER,
  payload: string
}

type getOffersAction = {
  type: typeof ActionType.GET_OFFERS,
  payload: Offer[]
}

export type Action = getCurrentFilterAction | getOffersAction;
