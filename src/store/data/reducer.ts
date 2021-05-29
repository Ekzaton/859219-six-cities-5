import {ActionType} from "../const";
import {DataAction, DataState} from "./types";

const initialState: DataState = {
  offers: []
};

export const dataReducer = (state = initialState, action: DataAction): DataState => {
  switch (action.type) {
    case ActionType.GET_OFFERS:
      return {...state, offers: action.payload};
    default:
      return state;
  }
};
