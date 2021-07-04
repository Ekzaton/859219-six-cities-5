import {CityName, SortingType} from "../../consts/common";
import {ActionType} from "../../consts/store";

import {AllOffersAction, AllOffersState} from "../../types/store/all-offers";

import {getUpdatedOffers} from "../../utils/store";

const initialState: AllOffersState = {
  activeOfferID: null,
  currentCity: CityName.PARIS,
  currentSorting: SortingType.POPULAR,
  data: [],
  isDataLoading: false,
  isLoadingError: false
};

export const allOffersReducer = (state = initialState, action: AllOffersAction): AllOffersState => {
  switch (action.type) {
    case ActionType.CHANGE_ACTIVE_OFFER_ID:
      return {...state, activeOfferID: action.payload};
    case ActionType.CHANGE_CURRENT_CITY:
      return {...state, currentCity: action.payload};
    case ActionType.CHANGE_CURRENT_SORTING:
      return {...state, currentSorting: action.payload};
    case ActionType.CHANGE_OFFER_FAVORITE_STATUS:
      return {...state, data: getUpdatedOffers(state.data, action.payload)};
    case ActionType.GET_ALL_OFFERS:
      return {...state, data: action.payload};
    case ActionType.SET_IS_ALL_OFFERS_LOADING:
      return {...state, isDataLoading: action.payload};
    case ActionType.SET_IS_ALL_OFFERS_LOADING_ERROR:
      return {...state, isLoadingError: action.payload};
    default:
      return state;
  }
};
