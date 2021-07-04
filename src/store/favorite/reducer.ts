import {ActionType} from "../../consts/store";

import {FavoriteAction, FavoriteState} from "../../types/store/favorite";

const initialState: FavoriteState = {
  isDataSending: false,
  isSendingError: false
};

export const favoriteReducer = (state = initialState, action: FavoriteAction): FavoriteState => {
  switch (action.type) {
    case ActionType.SET_IS_FAVORITE_SENDING:
      return {...state, isDataSending: action.payload};
    case ActionType.SET_IS_FAVORITE_SENDING_ERROR:
      return {...state, isSendingError: action.payload};
    default:
      return state;
  }
};
