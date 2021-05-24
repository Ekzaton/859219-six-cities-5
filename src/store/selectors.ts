import {createSelector} from 'reselect';

import {State} from "./types";
import {Offer} from "../components/types";

export const selectCurrentFilter = (state: State): string => state.currentFilter;
export const selectOffers = (state: State): Offer[] => state.offers;

export const selectCities = createSelector(
    [selectOffers],
    (offers) => [...new Set(offers.map((offer) => offer.city.name).sort())]
);

export const selectFilteredOffers = createSelector(
    [selectCurrentFilter, selectOffers],
    (city, offers) => offers.filter((offer) => offer.city.name === city)
);
