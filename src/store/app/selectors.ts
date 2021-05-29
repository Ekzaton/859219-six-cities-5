import {createSelector} from 'reselect';

import {RootState} from "../index";
import {selectOffers} from "../data/selectors";
import {FilteringType, SortingType} from "../../components/const";
import {getSortedOffers} from "../../utils";

export const selectActiveOfferID = (state: RootState): number | null => state.app.activeOfferID;
export const selectCurrentFiltering = (state: RootState): FilteringType => state.app.currentFiltering;
export const selectCurrentSorting = (state: RootState): SortingType => state.app.currentSorting;

export const selectFilteredOffers = createSelector(
    [selectCurrentFiltering, selectOffers],
    (currentFiltering, offers) => offers.filter((offer) => offer.city.name === currentFiltering)
);

export const selectSortedOffers = createSelector(
    [selectCurrentSorting, selectFilteredOffers],
    (currentSorting, offers) => getSortedOffers(currentSorting, offers)
);
