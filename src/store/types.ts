import {ActionType} from "./const";
import {Offer} from "../components/types";

export type State = {
  activeCity: string,
  offersList: Offer[],
};

type getActiveCityAction = {
  type: typeof ActionType.GET_ACTIVE_CITY,
  payload: string
}

type getAllOffersAction = {
  type: typeof ActionType.GET_ALL_OFFERS,
  payload: Offer[]
}

export type Action = getActiveCityAction | getAllOffersAction;
