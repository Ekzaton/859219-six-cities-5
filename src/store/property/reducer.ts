import {AxiosResponse} from "axios";
import {AnyAction} from "redux";

import {ActionType} from "../../consts/store";
import {Offer, Review} from "../../types/common";
import {setNearbyOffers} from "../../utils/store";

const initialState = {
  offer: {} as Offer,
  nearbyOffers: [] as Offer[],
  reviews: [] as Review[],
  isLoading: false,
  loadingError: null as AxiosResponse | null,
  isSending: false,
  sendingError: null as AxiosResponse | null,
};

export const propertyReducer = (state = initialState, action: AnyAction): PropertyState => {
  switch (action.type) {
    case ActionType.SET_OFFER:
      return {...state, offer: action.payload};
    case ActionType.SET_OFFER_FAVORITE_STATUS:
      return state.offer.id === action.payload.id
        ? {...state, offer: action.payload}
        : {...state, nearbyOffers: setNearbyOffers(state.nearbyOffers, action.payload)};
    case ActionType.SET_NEARBY_OFFERS:
      return {...state, nearbyOffers: action.payload};
    case ActionType.SET_REVIEWS:
      return {...state, reviews: action.payload};
    case ActionType.SET_PROPERTY_IS_LOADING:
      return {...state, isLoading: action.payload};
    case ActionType.SET_PROPERTY_LOADING_ERROR:
      return {...state, loadingError: action.payload};
    case ActionType.SET_REVIEW_IS_SENDING:
      return {...state, isSending: action.payload};
    case ActionType.SET_REVIEW_SENDING_ERROR:
      return {...state, sendingError: action.payload};
    default:
      return state;
  }
};

type PropertyState = typeof initialState;
