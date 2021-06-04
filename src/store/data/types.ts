import {ActionType} from "../const";
import {Offer, Review} from "../../types";

export type DataState = {
  allOffers: Offer[],
  favoriteOffers: Offer[],
  nearbyOffers: Offer[],
  singleOffer: Offer,
  singleOfferReviews: Review[]
};

type getAllOffersAction = {
  type: typeof ActionType.GET_ALL_OFFERS,
  payload: Offer[]
}

type getFavoriteOffersAction = {
  type: typeof ActionType.GET_FAVORITE_OFFERS,
  payload: Offer[]
}

type getNearbyOffersAction = {
  type: typeof ActionType.GET_NEARBY_OFFERS,
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

export type DataAction = getAllOffersAction | getFavoriteOffersAction | getNearbyOffersAction | getSingleOfferAction | getSingleOfferReviewsAction;

