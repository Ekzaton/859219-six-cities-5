import {Offer} from "../common";

import {ActionType} from "../../consts/store";

export type FavoriteOffersState = {
  data: Offer[],
  isDataLoading: boolean,
  isLoadingError: boolean
};

type changeOfferFavoriteStatusAction = {
  type: ActionType.CHANGE_OFFER_FAVORITE_STATUS,
  payload: Offer
}

type getFavoriteOffersAction = {
  type: ActionType.GET_FAVORITE_OFFERS,
  payload: Offer[]
}

type setIsDataLoadingAction = {
  type: ActionType.SET_IS_FAVORITE_OFFERS_LOADING,
  payload: boolean
}

type setIsLoadingErrorAction = {
  type: ActionType.SET_IS_FAVORITE_OFFERS_LOADING_ERROR,
  payload: boolean
}

export type FavoriteOffersAction = changeOfferFavoriteStatusAction
| getFavoriteOffersAction | setIsDataLoadingAction | setIsLoadingErrorAction;
