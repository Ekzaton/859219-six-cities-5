import {AxiosResponse} from "axios";
import {AnyAction} from "redux";

import {ActionType} from "../../consts/store";
import {Offer} from "../../types/common";
import {setFavoriteOffers} from "../../utils/store";

const initialState = {
  favoriteOffers: [] as Offer[],
  isLoading: false,
  loadingError: null as AxiosResponse | null,
};

export const favoritesReducer = (state = initialState, action: AnyAction): FavoritesState => {
  switch (action.type) {
    case ActionType.SET_FAVORITE_OFFERS:
      return {...state, favoriteOffers: action.payload};
    case ActionType.SET_OFFER_FAVORITE_STATUS:
      return {...state, favoriteOffers: setFavoriteOffers(state.favoriteOffers, action.payload)};
    case ActionType.SET_FAVORITES_IS_LOADING:
      return {...state, isLoading: action.payload};
    case ActionType.SET_FAVORITES_LOADING_ERROR:
      return {...state, loadingError: action.payload};
    default:
      return state;
  }
};

type FavoritesState = typeof initialState;
