import {createSelector} from 'reselect';

import {State} from "./types";
import {Offer} from "../components/types";
import {getSortedOffers} from "../utils";

export const selectCurrentFilter = (state: State): string => state.currentFilter;
export const selectCurrentSorting = (state: State): string => state.currentSorting;
export const selectOffers = (state: State): Offer[] => state.offers;

export const selectCities = createSelector(
    [selectOffers],
    (offers) => [...new Set(offers.map((offer) => offer.city.name).sort())]
);

export const selectFilteredOffers = createSelector(
    [selectCurrentFilter, selectOffers],
    (currentFilter, offers) => offers.filter((offer) => offer.city.name === currentFilter)
);

export const selectSortedOffers = createSelector(
    [selectCurrentSorting, selectFilteredOffers],
    (currentSorting, offers) => getSortedOffers(currentSorting, offers)
);
