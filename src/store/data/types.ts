import {ActionType} from "../../consts/store";
import {Offer, Review} from "../../types";

export type DataState = {
  allOffers: Offer[],
  favoriteOffers: Offer[],
  nearbyOffers: Offer[],
  singleOffer: Offer,
  singleOfferReviews: Review[],
  isDataSending: boolean,
  isSendingError: boolean
};

type getAllOffersAction = {
  type: ActionType.GET_ALL_OFFERS,
  payload: Offer[]
}

type getFavoriteOffersAction = {
  type: ActionType.GET_FAVORITE_OFFERS,
  payload: Offer[]
}

type getNearbyOffersAction = {
  type: ActionType.GET_NEARBY_OFFERS,
  payload: Offer[]
}

type getSingleOfferAction = {
  type: typeof ActionType.GET_SINGLE_OFFER,
  payload: Offer
}

type getSingleOfferReviewsAction = {
  type: typeof ActionType.GET_SINGLE_OFFER_REVIEWS,
  payload: Review[]
}

type setIsDataSendingAction = {
  type: ActionType.SET_IS_DATA_SENDING,
  payload: boolean
}

type setIsSendingErrorAction = {
  type: ActionType.SET_IS_SENDING_ERROR,
  payload: boolean
}

type updateOffersAction = {
  type: typeof ActionType.UPDATE_OFFERS,
  payload: Offer
}

export type DataAction = getAllOffersAction | getFavoriteOffersAction
| getNearbyOffersAction | getSingleOfferAction | getSingleOfferReviewsAction
| setIsDataSendingAction | setIsSendingErrorAction | updateOffersAction;

