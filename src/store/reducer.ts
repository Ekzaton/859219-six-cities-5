import {ActionType} from "./const";
import {Action, State} from "./types";

import {offers} from "../mocks/offers";

const initialState: State = {
  currentFilter: `Amsterdam`,
  offers
};

export const reducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case ActionType.GET_CURRENT_FILTER:
      return {...state, currentFilter: action.payload};
    case ActionType.GET_OFFERS:
      return {...state, offers: action.payload};
    default:
      return state;
  }
};
