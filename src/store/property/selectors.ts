import {AxiosResponse} from 'axios';
import {createSelector} from 'reselect';

import {Offer, Review} from "../../types/common";

import {getSortedReviews} from "../../utils/store";

import {AppState} from "../store";

export const selectOffer = (state: AppState): Offer => state.property.offer;
export const selectNearbyOffers = (state: AppState): Offer[] => state.property.nearbyOffers;
export const selectReviews = (state: AppState): Review[] => state.property.reviews;
export const selectIsLoading = (state: AppState): boolean => state.property.isLoading;
export const selectLoadingError = (state: AppState): AxiosResponse | null => state.property.loadingError;
export const selectIsSending = (state: AppState): boolean => state.property.isSending;
export const selectSendingError = (state: AppState): AxiosResponse | null => state.property.sendingError;

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
