import {AxiosResponse} from 'axios';
import {createSelector} from 'reselect';

import {RootState} from "../store";

import {CityName, SortingType} from "../../consts/common";

import {Offer} from "../../types/common";

import {getFilteredOffers, getSortedOffers} from "../../utils/store";

export const selectActiveOfferID = (state: RootState): number | null => state.main.activeOfferID;
export const selectCurrentCity = (state: RootState): CityName => state.main.currentCity;
export const selectCurrentSorting = (state: RootState): SortingType => state.main.currentSorting;
export const selectAllOffers = (state: RootState): Offer[] => state.main.allOffers;
export const selectIsLoading = (state: RootState): boolean => state.main.isLoading;
export const selectLoadingError = (state: RootState): AxiosResponse | null => state.main.loadingError;

export const selectFilteredOffers = createSelector(
    [selectCurrentCity, selectAllOffers],
    (currentCity, allOffers) => getFilteredOffers(currentCity, allOffers)
);

export const selectSortedOffers = createSelector(
    [selectCurrentSorting, selectFilteredOffers],
    (currentSorting, filteredOffers) => getSortedOffers(currentSorting, filteredOffers)
);

export const selectSortedOffersCount = createSelector(
    [selectSortedOffers],
    (sortedOffers) => sortedOffers.length
);

export const selectNoSortedOffers = createSelector(
    [selectSortedOffers],
    (sortedOffers) => sortedOffers.length === 0
);

