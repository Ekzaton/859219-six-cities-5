import {AxiosResponse} from 'axios';
import {createSelector} from 'reselect';

import {Offer} from "../../types/common";
import {getOffersByCity} from "../../utils/store";

import {AppState} from "../store";

export const selectFavoriteOffers = (state: AppState): Offer[] => state.favorites.favoriteOffers;
export const selectIsLoading = (state: AppState): boolean => state.favorites.isLoading;
export const selectLoadingError = (state: AppState): AxiosResponse | null => state.favorites.loadingError;

export const selectOffersByCity = createSelector(
    [selectFavoriteOffers],
    (favoriteOffers) => getOffersByCity(favoriteOffers)
);

export const selectNoOffers = createSelector(
    [selectFavoriteOffers],
    (favoriteOffers) => favoriteOffers.length === 0
);
