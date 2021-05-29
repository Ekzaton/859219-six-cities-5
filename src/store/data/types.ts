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

