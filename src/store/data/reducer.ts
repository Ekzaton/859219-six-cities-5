import {DataAction, DataState} from "./types";
import {ActionType} from "../const";

const initialState: DataState = {
  allOffers: [],
  favoriteOffers: [],
  nearbyOffers: [],
  singleOffer: null,
  singleOfferReviews: []
};

export const dataReducer = (state = initialState, action: DataAction): DataState => {
  switch (action.type) {
    case ActionType.GET_ALL_OFFERS:
      return {...state, allOffers: action.payload};
    case ActionType.GET_FAVORITE_OFFERS:
      return {...state, favoriteOffers: action.payload};
    case ActionType.GET_NEARBY_OFFERS:
      return {...state, nearbyOffers: action.payload};
    case ActionType.GET_SINGLE_OFFER:
      return {...state, singleOffer: action.payload};
    case ActionType.GET_SINGLE_OFFER_REVIEWS:
      return {...state, singleOfferReviews: action.payload};
    default:
      return state;
  }
};
