import {DataAction} from "./types";
import {ActionType} from "../../consts/store";
import {Offer, Review} from "../../types";

export const getAllOffers = (allOffers: Offer[]): DataAction => ({
  type: ActionType.GET_ALL_OFFERS,
  payload: allOffers
});

export const getFavoriteOffers = (favoriteOffers: Offer[]): DataAction => ({
  type: ActionType.GET_FAVORITE_OFFERS,
  payload: favoriteOffers
});

export const getNearbyOffers = (nearbyOffers: Offer[]): DataAction => ({
  type: ActionType.GET_NEARBY_OFFERS,
  payload: nearbyOffers
});

export const getSingleOffer = (singleOffer: Offer): DataAction => ({
  type: ActionType.GET_SINGLE_OFFER,
  payload: singleOffer
});

export const getSingleOfferReviews = (singleOfferReviews: Review[]): DataAction => ({
  type: ActionType.GET_SINGLE_OFFER_REVIEWS,
  payload: singleOfferReviews
});

export const setIsDataSending = (isDataSending: boolean): DataAction => ({
  type: ActionType.SET_IS_DATA_SENDING,
  payload: isDataSending
});

export const setIsSendingError = (isSendingError: boolean): DataAction => ({
  type: ActionType.SET_IS_SENDING_ERROR,
  payload: isSendingError
});

export const updateOffers = (offersItem: Offer): DataAction => ({
  type: ActionType.UPDATE_OFFERS,
  payload: offersItem
});

