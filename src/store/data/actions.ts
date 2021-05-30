import {DataAction} from "./types";
import {ActionType} from "../const";
import {Offer} from "../../components/types";

export const getAllOffers = (allOffers: Offer[]): DataAction => ({
  type: ActionType.GET_ALL_OFFERS,
  payload: allOffers
});

export const getFavoriteOffers = (favoriteOffers: Offer[]): DataAction => ({
  type: ActionType.GET_FAVORITE_OFFERS,
  payload: favoriteOffers
});
