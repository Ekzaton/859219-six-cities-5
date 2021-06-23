import {createSelector} from 'reselect';

import {selectCurrentCity, selectCurrentSorting} from "../app/selectors";

import {RootState} from "../store";

import {Offer, Review} from "../../types/common";

import {getFavoriteOffersByCity, getFilteredOffers, getSortedOffers, getSortedReviews} from "../../utils/store";

export const selectAllOffers = (state: RootState): Offer[] => state.data.allOffers;
export const selectFavoriteOffers = (state: RootState): Offer[] => state.data.favoriteOffers;
export const selectNearbyOffers = (state: RootState): Offer[] => state.data.nearbyOffers;
export const selectSingleOffer = (state: RootState): Offer => state.data.singleOffer;
export const selectSingleOfferReviews = (state: RootState): Review[] => state.data.singleOfferReviews;
export const selectIsDataSending = (state: RootState): boolean => state.data.isDataSending;
export const selectIsSendingError = (state: RootState): boolean => state.data.isSendingError;

export const selectFavoriteOffersByCity = createSelector(
    [selectFavoriteOffers],
    (offers) => getFavoriteOffersByCity(offers)
);

export const selectFilteredOffers = createSelector(
    [selectCurrentCity, selectAllOffers],
    (currentCity, offers) => getFilteredOffers(currentCity, offers)
);

export const selectSortedOffers = createSelector(
    [selectCurrentSorting, selectFilteredOffers],
    (currentSorting, offers) => getSortedOffers(currentSorting, offers)
);

export const selectSortedReviews = createSelector(
    [selectSingleOfferReviews],
    (reviews) => getSortedReviews(reviews)
);
