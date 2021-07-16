import {AxiosResponse} from 'axios';
import {createSelector} from 'reselect';

import {RootState} from "../store";

import {Offer, Review} from "../../types/common";

import {getSortedReviews} from "../../utils/store";

export const selectOffer = (state: RootState): Offer => state.property.offer;
export const selectNearbyOffers = (state: RootState): Offer[] => state.property.nearbyOffers;
export const selectReviews = (state: RootState): Review[] => state.property.reviews;
export const selectIsLoading = (state: RootState): boolean => state.property.isLoading;
export const selectLoadingError = (state: RootState): AxiosResponse | null => state.property.loadingError;
export const selectIsSending = (state: RootState): boolean => state.property.isSending;
export const selectSendingError = (state: RootState): AxiosResponse | null => state.property.sendingError;

export const selectNoOffer = createSelector(
    [selectOffer],
    (offer) => Object.keys(offer).length === 0
);

export const selectOffers = createSelector(
    [selectOffer, selectNearbyOffers],
    (offer, nearbyOffers) => [...nearbyOffers, offer]
);

export const selectReviewsCount = createSelector(
    [selectReviews],
    (reviews) => reviews.length
);

export const selectSortedReviews = createSelector(
    [selectReviews],
    (reviews) => getSortedReviews(reviews)
);
