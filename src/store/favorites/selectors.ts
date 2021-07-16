import {AxiosResponse} from 'axios';
import {createSelector} from 'reselect';

import {RootState} from "../store";

import {Offer} from "../../types/common";

import {getOffersByCity} from "../../utils/store";

export const selectFavoriteOffers = (state: RootState): Offer[] => state.favorites.favoriteOffers;
export const selectIsLoading = (state: RootState): boolean => state.favorites.isLoading;
export const selectLoadingError = (state: RootState): AxiosResponse | null => state.favorites.loadingError;

export const selectOffersByCity = createSelector(
    [selectFavoriteOffers],
    (favoriteOffers) => getOffersByCity(favoriteOffers)
);

export const selectNoOffers = createSelector(
    [selectFavoriteOffers],
    (favoriteOffers) => favoriteOffers.length === 0
);
