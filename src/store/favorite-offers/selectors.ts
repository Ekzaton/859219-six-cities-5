import {createSelector} from 'reselect';

import {RootState} from "../store";

import {Offer} from "../../types/common";

import {getFavoriteOffersByCity} from "../../utils/store";

export const selectFavoriteOffers = (state: RootState): Offer[] => state.favoriteOffers.data;
export const selectIsDataLoading = (state: RootState): boolean => state.favoriteOffers.isDataLoading;
export const selectIsLoadingError = (state: RootState): boolean => state.favoriteOffers.isLoadingError;

export const selectFavoriteOffersByCity = createSelector(
    [selectFavoriteOffers],
    (offers) => getFavoriteOffersByCity(offers)
);
