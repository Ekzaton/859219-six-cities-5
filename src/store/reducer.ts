import {ActionType} from "./const";
import {Action, State} from "./types";

import {offers} from "../mocks/offers";

const initialState: State = {
  activeCity: `Amsterdam`,
  offersList: offers
};

export const reducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case ActionType.GET_ACTIVE_CITY:
      return {...state, activeCity: action.payload};
    case ActionType.GET_ALL_OFFERS:
      return {...state, offersList: action.payload};
    default:
      return state;
  }
};
