import {AppAction, AppState} from "./types";
import {FilteringType, SortingType} from "../../consts/common";
import {ActionType} from "../../consts/store";

const initialState: AppState = {
  activeOfferID: null,
  currentFiltering: FilteringType.PARIS,
  currentSorting: SortingType.POPULAR
};

export const appReducer = (state = initialState, action: AppAction): AppState => {
  switch (action.type) {
    case ActionType.GET_ACTIVE_OFFER_ID:
      return {...state, activeOfferID: action.payload};
    case ActionType.GET_CURRENT_FILTERING:
      return {...state, currentFiltering: action.payload};
    case ActionType.GET_CURRENT_SORTING:
      return {...state, currentSorting: action.payload};
    default:
      return state;
  }
};
