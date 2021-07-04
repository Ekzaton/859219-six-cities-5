import {createSelector} from 'reselect';

import {RootState} from "../store";

import {CityName, SortingType} from "../../consts/common";

import {Offer} from "../../types/common";

import {getFilteredOffers, getSortedOffers} from "../../utils/store";

export const selectActiveOfferID = (state: RootState): number | null => state.allOffers.activeOfferID;
export const selectCurrentCity = (state: RootState): CityName => state.allOffers.currentCity;
export const selectCurrentSorting = (state: RootState): SortingType => state.allOffers.currentSorting;
export const selectOffers = (state: RootState): Offer[] => state.allOffers.data;
export const selectIsDataLoading = (state: RootState): boolean => state.allOffers.isDataLoading;
export const selectIsLoadingError = (state: RootState): boolean => state.allOffers.isLoadingError;

const selectFilteredOffers = createSelector(
    [selectCurrentCity, selectOffers],
    (currentCity, offers) => getFilteredOffers(currentCity, offers)
);

export const selectSortedOffers = createSelector(
    [selectCurrentSorting, selectFilteredOffers],
    (currentSorting, offers) => getSortedOffers(currentSorting, offers)
);

