import {AxiosResponse} from "axios";

import {ActionType} from "../../consts/store";

import {Offer, Review} from "../../types/common";
import {PropertyAction} from "../../types/store/property";

export const setOffer = (offer: Offer): PropertyAction => ({
  type: ActionType.SET_OFFER,
  payload: offer
});

export const setNearbyOffers = (nearbyOffers: Offer[]): PropertyAction => ({
  type: ActionType.SET_NEARBY_OFFERS,
  payload: nearbyOffers
});

export const setReviews = (reviews: Review[]): PropertyAction => ({
  type: ActionType.SET_REVIEWS,
  payload: reviews
});

export const setIsLoading = (isLoading: boolean): PropertyAction => ({
  type: ActionType.SET_PROPERTY_IS_LOADING,
  payload: isLoading
});

export const setLoadingError = (loadingError: AxiosResponse | null): PropertyAction => ({
  type: ActionType.SET_PROPERTY_LOADING_ERROR,
  payload: loadingError
});

export const setIsSending = (isSending: boolean): PropertyAction => ({
  type: ActionType.SET_REVIEW_IS_SENDING,
  payload: isSending
});

export const setSendingError = (sendingError: AxiosResponse | null): PropertyAction => ({
  type: ActionType.SET_REVIEW_SENDING_ERROR,
  payload: sendingError
});
