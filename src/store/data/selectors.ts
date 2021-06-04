import {createSelector} from 'reselect';

import {RootState} from "../index";
import {Offer, Review} from "../../types";

export const selectAllOffers = (state: RootState): Offer[] => state.data.allOffers;
export const selectFavoriteOffers = (state: RootState): Offer[] => state.data.favoriteOffers;
export const selectNearbyOffers = (state: RootState): Offer[] => state.data.nearbyOffers;
export const selectSingleOffer = (state: RootState): Offer => state.data.singleOffer;
export const selectSingleOfferReviews = (state: RootState): Review[] => state.data.singleOfferReviews;

export const selectOffersByCity = createSelector(
    [selectFavoriteOffers],
    (offers) => offers.reduce<Record<string, Offer[]>>((acc, offer) => {
      const city = offer.city.name;
      acc[city] = acc[city] ? [...(acc[city]), offer] : [offer];
      return acc;
    }, {})
);
