import {CityName, SortingType} from "../../consts/common";
import {ActionType} from "../../consts/store";

import {MainAction, MainState} from "../../types/store/main";

import {getUpdatedOffers} from "../../utils/store";

const initialState: MainState = {
  activeOfferID: null,
  currentCity: CityName.PARIS,
  currentSorting: SortingType.POPULAR,
  allOffers: [],
  isLoading: false,
  loadingError: null
};

export const mainReducer = (state = initialState, action: MainAction): MainState => {
  switch (action.type) {
    case ActionType.SET_ACTIVE_OFFER_ID:
      return {...state, activeOfferID: action.payload};
    case ActionType.SET_CURRENT_CITY:
      return {...state, currentCity: action.payload};
    case ActionType.SET_CURRENT_SORTING:
      return {...state, currentSorting: action.payload};
    case ActionType.SET_ALL_OFFERS:
      return {...state, allOffers: action.payload};
    case ActionType.SET_OFFER_FAVORITE_STATUS:
      return {...state, allOffers: getUpdatedOffers(state.allOffers, action.payload)};
    case ActionType.SET_MAIN_IS_LOADING:
      return {...state, isLoading: action.payload};
    case ActionType.SET_MAIN_LOADING_ERROR:
      return {...state, loadingError: action.payload};
    default:
      return state;
  }
};
