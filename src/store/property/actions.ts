import {AxiosResponse} from "axios";
import {AnyAction} from "redux";

import {ActionType} from "../../consts/store";
import {Offer, Review} from "../../types/common";

export const setOffer = (offer: Offer): AnyAction => ({
  type: ActionType.SET_OFFER,
  payload: offer
});

export const setNearbyOffers = (nearbyOffers: Offer[]): AnyAction => ({
  type: ActionType.SET_NEARBY_OFFERS,
  payload: nearbyOffers
});

export const setReviews = (reviews: Review[]): AnyAction => ({
  type: ActionType.SET_REVIEWS,
  payload: reviews
});

export const setIsLoading = (isLoading: boolean): AnyAction => ({
  type: ActionType.SET_PROPERTY_IS_LOADING,
  payload: isLoading
});

export const setLoadingError = (loadingError: AxiosResponse | null): AnyAction => ({
  type: ActionType.SET_PROPERTY_LOADING_ERROR,
  payload: loadingError
});

export const setIsSending = (isSending: boolean): AnyAction => ({
  type: ActionType.SET_REVIEW_IS_SENDING,
  payload: isSending
});

export const setSendingError = (sendingError: AxiosResponse | null): AnyAction => ({
  type: ActionType.SET_REVIEW_SENDING_ERROR,
  payload: sendingError
});
