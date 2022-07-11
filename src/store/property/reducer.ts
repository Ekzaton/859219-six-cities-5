import {ActionType} from "../../consts/store";
import {Offer} from "../../types/common";
import {PropertyAction, PropertyState} from "../../types/store/property";
import {setNearbyOffers} from "../../utils/store";

const initialState: PropertyState = {
  offer: {} as Offer,
  nearbyOffers: [],
  reviews: [],
  isLoading: false,
  loadingError: null,
  isSending: false,
  sendingError: null
};

export const propertyReducer = (state = initialState, action: PropertyAction): PropertyState => {
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
