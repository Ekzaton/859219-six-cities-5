import {createSelector} from 'reselect';

import {RootState} from "../store";

import {Offer, Review} from "../../types/common";

import {getSortedReviews} from "../../utils/store";

export const selectNearbyOffers = (state: RootState): Offer[] => state.singleOffer.nearbyOffers;
export const selectOffer = (state: RootState): Offer => state.singleOffer.data;
export const selectReviews = (state: RootState): Review[] => state.singleOffer.reviews;
export const selectIsDataLoading = (state: RootState): boolean => state.singleOffer.isDataLoading;
export const selectIsLoadingError = (state: RootState): boolean => state.singleOffer.isLoadingError;

export const selectSortedReviews = createSelector(
    [selectReviews],
    (reviews) => getSortedReviews(reviews)
);
