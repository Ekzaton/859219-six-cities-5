import {Offer, Review} from "../common";

import {ActionType} from "../../consts/store";

export type SingleOfferState = {
  data: Offer,
  nearbyOffers: Offer[],
  reviews: Review[],
  isDataLoading: boolean,
  isLoadingError: boolean
};

type changeOfferFavoriteStatusAction = {
  type: ActionType.CHANGE_OFFER_FAVORITE_STATUS,
  payload: Offer
}

type getNearbyOffersAction = {
  type: ActionType.GET_NEARBY_OFFERS,
  payload: Offer[]
}

type getReviewsAction = {
  type: ActionType.GET_REVIEWS,
  payload: Review[]
}

type getSingleOfferAction = {
  type: ActionType.GET_SINGLE_OFFER,
  payload: Offer
}

type setInitialStateAction = {
  type: ActionType.SET_INITIAL_STATE
};

type setIsDataLoadingAction = {
  type: ActionType.SET_IS_SINGLE_OFFER_LOADING,
  payload: boolean
}

type setIsLoadingErrorAction = {
  type: ActionType.SET_IS_SINGLE_OFFER_LOADING_ERROR,
  payload: boolean
}

export type SingleOfferAction =
changeOfferFavoriteStatusAction | getNearbyOffersAction | getSingleOfferAction
| setInitialStateAction | getReviewsAction | setIsDataLoadingAction | setIsLoadingErrorAction;
