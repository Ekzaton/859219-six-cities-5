import {ActionType} from "../../consts/store";

import {FavoriteOffersAction, FavoriteOffersState} from "../../types/store/favorite-offers";

import {getUpdatedFavoriteOffers} from "../../utils/store";

const initialState: FavoriteOffersState = {
  data: [],
  isDataLoading: false,
  isLoadingError: false
};

export const favoriteOffersReducer = (state = initialState, action: FavoriteOffersAction): FavoriteOffersState => {
  switch (action.type) {
    case ActionType.CHANGE_OFFER_FAVORITE_STATUS:
      return {...state, data: getUpdatedFavoriteOffers(state.data, action.payload)};
    case ActionType.GET_FAVORITE_OFFERS:
      return {...state, data: action.payload};
    case ActionType.SET_IS_FAVORITE_OFFERS_LOADING:
      return {...state, isDataLoading: action.payload};
    case ActionType.SET_IS_FAVORITE_OFFERS_LOADING_ERROR:
      return {...state, isLoadingError: action.payload};
    default:
      return state;
  }
};
