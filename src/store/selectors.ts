import {createSelector} from 'reselect';

import {State} from "./types";
import {Offer} from "../components/types";
import {getSortedOffers} from "../utils";

export const selectActiveOfferID = (state: State): number | null => state.activeOfferID;
export const selectCurrentFiltering = (state: State): string => state.currentFiltering;
export const selectCurrentSorting = (state: State): string => state.currentSorting;
export const selectOffers = (state: State): Offer[] => state.offers;

export const selectFilteredOffers = createSelector(
    [selectCurrentFiltering, selectOffers],
    (currentFiltering, offers) => offers.filter((offer) => offer.city.name === currentFiltering)
);

export const selectSortedOffers = createSelector(
    [selectCurrentSorting, selectFilteredOffers],
    (currentSorting, offers) => getSortedOffers(currentSorting, offers)
);
