import {ActionType} from "../../consts/store";

import {Offer, Review} from "../../types/common";
import {SingleOfferAction} from "../../types/store/single-offer";

export const getNearbyOffers = (nearbyOffers: Offer[]): SingleOfferAction => ({
  type: ActionType.GET_NEARBY_OFFERS,
  payload: nearbyOffers
});

export const getReviews = (reviews: Review[]): SingleOfferAction => ({
  type: ActionType.GET_REVIEWS,
  payload: reviews
});

export const getSingleOffer = (offer: Offer): SingleOfferAction => ({
  type: ActionType.GET_SINGLE_OFFER,
  payload: offer
});

export const setInitialState = (): SingleOfferAction => ({
  type: ActionType.SET_INITIAL_STATE
});

export const setIsDataLoading = (isDataLoading: boolean): SingleOfferAction => ({
  type: ActionType.SET_IS_SINGLE_OFFER_LOADING,
  payload: isDataLoading
});

export const setIsLoadingError = (isLoadingError: boolean): SingleOfferAction => ({
  type: ActionType.SET_IS_SINGLE_OFFER_LOADING_ERROR,
  payload: isLoadingError
});
