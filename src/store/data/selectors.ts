import {createSelector} from 'reselect';

import {RootState} from "../index";
import {Offer, Review} from "../../types";
import {getOffersByCity} from "../../utils";

export const selectAllOffers = (state: RootState): Offer[] => state.data.allOffers;
export const selectFavoriteOffers = (state: RootState): Offer[] => state.data.favoriteOffers;
export const selectNearbyOffers = (state: RootState): Offer[] => state.data.nearbyOffers;
export const selectSingleOffer = (state: RootState): Offer => state.data.singleOffer;
export const selectSingleOfferReviews = (state: RootState): Review[] => state.data.singleOfferReviews;
export const selectIsDataSending = (state: RootState): boolean => state.data.isDataSending;
export const selectIsSendingError = (state: RootState): boolean => state.data.isSendingError;

export const selectOffersByCity = createSelector(
    [selectFavoriteOffers],
    (offers) => getOffersByCity(offers)
);
