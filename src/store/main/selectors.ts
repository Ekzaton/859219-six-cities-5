import {AxiosResponse} from 'axios';
import {createSelector} from 'reselect';

import {CityName, SortingType} from "../../consts/common";
import {Offer} from "../../types/common";
import {getFilteredOffers, getSortedOffers} from "../../utils/store";

import {AppState} from "../store";

export const selectActiveOfferID = (state: AppState): number | null => state.main.activeOfferID;
export const selectCurrentCity = (state: AppState): CityName => state.main.currentCity;
export const selectCurrentSorting = (state: AppState): SortingType => state.main.currentSorting;
export const selectAllOffers = (state: AppState): Offer[] => state.main.allOffers;
export const selectIsLoading = (state: AppState): boolean => state.main.isLoading;
export const selectLoadingError = (state: AppState): AxiosResponse | null => state.main.loadingError;

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

