import {AxiosResponse} from "axios";

import {Offer, Review} from "../common";

import {ActionType} from "../../consts/store";

export type PropertyState = {
  offer: Offer,
  nearbyOffers: Offer[],
  reviews: Review[],
  isLoading: boolean,
  loadingError: AxiosResponse | null,
  isSending: boolean,
  sendingError: AxiosResponse | null
};

type setOfferAction = {
  type: ActionType.SET_OFFER,
  payload: Offer
}

type setOfferFavoriteStatusAction = {
  type: ActionType.SET_OFFER_FAVORITE_STATUS,
  payload: Offer
}

type setNearbyOffersAction = {
  type: ActionType.SET_NEARBY_OFFERS,
  payload: Offer[]
}

type setReviewsAction = {
  type: ActionType.SET_REVIEWS,
  payload: Review[]
}

type setIsLoadingAction = {
  type: ActionType.SET_PROPERTY_IS_LOADING,
  payload: boolean
}

type setLoadingErrorAction = {
  type: ActionType.SET_PROPERTY_LOADING_ERROR,
  payload: AxiosResponse | null
}

type setIsSendingAction = {
  type: ActionType.SET_REVIEW_IS_SENDING,
  payload: boolean
}

type setSendingErrorAction = {
  type: ActionType.SET_REVIEW_SENDING_ERROR,
  payload: AxiosResponse | null
}

export type PropertyAction =
setOfferAction | setNearbyOffersAction | setReviewsAction | setOfferFavoriteStatusAction
| setIsLoadingAction | setLoadingErrorAction | setIsSendingAction | setSendingErrorAction;
