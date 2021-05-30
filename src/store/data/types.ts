import {ActionType} from "../const";
import {Offer} from "../../components/types";

export type DataState = {
  allOffers: Offer[],
  favoriteOffers: Offer[]
};

type getAllOffersAction = {
  type: typeof ActionType.GET_ALL_OFFERS,
  payload: Offer[]
}

type getFavoriteOffersAction = {
  type: typeof ActionType.GET_FAVORITE_OFFERS,
  payload: Offer[]
}

export type DataAction = getAllOffersAction | getFavoriteOffersAction;

