import {ActionType} from "./const";
import {Action, State} from "./types";
import {SortingType} from "../components/const";

import {offers} from "../mocks/offers";

const initialState: State = {
  activeOfferID: null,
  currentFilter: `Amsterdam`,
  currentSorting: SortingType.POPULAR,
  offers
};

export const reducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case ActionType.GET_ACTIVE_OFFER_ID:
      return {...state, activeOfferID: action.payload};
    case ActionType.GET_CURRENT_FILTER:
      return {...state, currentFilter: action.payload};
    case ActionType.GET_CURRENT_SORTING:
      return {...state, currentSorting: action.payload};
    case ActionType.GET_OFFERS:
      return {...state, offers: action.payload};
    default:
      return state;
  }
};
