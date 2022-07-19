import {AxiosResponse} from "axios";
import {AnyAction} from "redux";

import {CityName, SortingType} from "../../consts/common";
import {ActionType} from "../../consts/store";
import {Offer} from "../../types/common";
import {setOffers} from "../../utils/store";

const initialState = {
  activeOfferID: null as number | null,
  currentCity: CityName.PARIS,
  currentSorting: SortingType.POPULAR,
  allOffers: [] as Offer[],
  isLoading: false,
  loadingError: null as AxiosResponse | null,
};

export const mainReducer = (state = initialState, action: AnyAction): MainState => {
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
      return {...state, allOffers: setOffers(state.allOffers, action.payload)};
    case ActionType.SET_MAIN_IS_LOADING:
      return {...state, isLoading: action.payload};
    case ActionType.SET_MAIN_LOADING_ERROR:
      return {...state, loadingError: action.payload};
    default:
      return state;
  }
};

type MainState = typeof initialState;
