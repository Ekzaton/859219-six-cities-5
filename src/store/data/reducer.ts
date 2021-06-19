import {DataAction, DataState} from "./types";

import {ActionType} from "../../consts/store";

import {getUpdatedFavoriteOffers, getUpdatedOffers} from "../../utils/store";

import {Offer} from "../../types";

const initialState: DataState = {
  allOffers: [],
  favoriteOffers: [],
  nearbyOffers: [],
  singleOffer: {} as Offer,
  singleOfferReviews: [],
  isDataSending: false,
  isSendingError: false
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
    case ActionType.SET_IS_DATA_SENDING:
      return {...state, isDataSending: action.payload};
    case ActionType.SET_IS_SENDING_ERROR:
      return {...state, isSendingError: action.payload};
    case ActionType.UPDATE_OFFERS:
      return {...state,
        allOffers: getUpdatedOffers(state.allOffers, action.payload),
        favoriteOffers: getUpdatedFavoriteOffers(state.favoriteOffers, action.payload),
        nearbyOffers: getUpdatedOffers(state.nearbyOffers, action.payload),
        singleOffer: action.payload
      };
    default:
      return state;
  }
};
