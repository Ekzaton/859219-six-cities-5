import {ActionType} from "../../consts/store";

import {FavoritesAction, FavoritesState} from "../../types/store/favorites";

import {getUpdatedFavoriteOffers} from "../../utils/store";

const initialState: FavoritesState = {
  favoriteOffers: [],
  isLoading: false,
  loadingError: null
};

export const favoritesReducer = (state = initialState, action: FavoritesAction): FavoritesState => {
  switch (action.type) {
    case ActionType.SET_FAVORITE_OFFERS:
      return {...state, favoriteOffers: action.payload};
    case ActionType.SET_OFFER_FAVORITE_STATUS:
      return {...state, favoriteOffers: getUpdatedFavoriteOffers(state.favoriteOffers, action.payload)};
    case ActionType.SET_FAVORITES_IS_LOADING:
      return {...state, isLoading: action.payload};
    case ActionType.SET_FAVORITES_LOADING_ERROR:
      return {...state, loadingError: action.payload};
    default:
      return state;
  }
};
