import {ActionType} from "../../consts/store";

import {Offer} from "../../types/common";
import {SingleOfferAction, SingleOfferState} from "../../types/store/single-offer";

import {getUpdatedOffers} from "../../utils/store";

const initialState: SingleOfferState = {
  data: {} as Offer,
  nearbyOffers: [],
  reviews: [],
  isDataLoading: false,
  isLoadingError: false
};

export const singleOfferReducer = (state = initialState, action: SingleOfferAction): SingleOfferState => {
  switch (action.type) {
    case ActionType.CHANGE_OFFER_FAVORITE_STATUS:
      return state.data.id === action.payload.id
        ? {...state, data: action.payload}
        : {...state, nearbyOffers: getUpdatedOffers(state.nearbyOffers, action.payload)};
    case ActionType.GET_NEARBY_OFFERS:
      return {...state, nearbyOffers: action.payload};
    case ActionType.GET_REVIEWS:
      return {...state, reviews: action.payload};
    case ActionType.GET_SINGLE_OFFER:
      return {...state, data: action.payload};
    case ActionType.SET_INITIAL_STATE:
      return initialState;
    case ActionType.SET_IS_SINGLE_OFFER_LOADING:
      return {...state, isDataLoading: action.payload};
    case ActionType.SET_IS_SINGLE_OFFER_LOADING_ERROR:
      return {...state, isLoadingError: action.payload};
    default:
      return state;
  }
};
