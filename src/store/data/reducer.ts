import {ActionType} from "../const";
import {DataAction, DataState} from "./types";

const initialState: DataState = {
  allOffers: [],
  favoriteOffers: []
};

export const dataReducer = (state = initialState, action: DataAction): DataState => {
  switch (action.type) {
    case ActionType.GET_ALL_OFFERS:
      return {...state, allOffers: action.payload};
    case ActionType.GET_FAVORITE_OFFERS:
      return {...state, favoriteOffers: action.payload};
    default:
      return state;
  }
};
