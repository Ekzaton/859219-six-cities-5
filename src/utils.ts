import {FavStatus, SortingType, ReviewLehgth} from "./const";
import {Offer} from "./types";

export const capitalize = (title: string): string => title[0].toUpperCase() + title.slice(1);

export const formatReviewDate = (date: string): string => new Date(date).toLocaleString(`en-US`, {month: `long`, year: `numeric`});

export const getArray = (count: number): number[] => new Array(count).fill(``);

export const getFavStatus = (isFavorite: boolean): string => `/${isFavorite ? FavStatus.NOT_FAV : FavStatus.FAV}`;

export const getRatingStars = (rating: number): string => `${rating * 20}%`;

export const getSortedOffers = (currentSorting: SortingType, offers: Offer[]): Offer[] => {
  switch (currentSorting) {
    case SortingType.POPULAR:
      return [...offers];
    case SortingType.PRICE_HIGH_TO_LOW:
      return [...offers].sort((a, b) => b.price - a.price);
    case SortingType.PRICE_LOW_TO_HIGH:
      return [...offers].sort((a, b) => a.price - b.price);
    case SortingType.TOP_RATED_FIRST:
      return [...offers].sort((a, b) => b.rating - a.rating);
    default:
      return offers;
  }
};

export const updateFavoriteOffers = (offers: Offer[], updatedOffer: Offer): Offer[] => {
  const index = offers.findIndex((offer) => offer.id === updatedOffer.id);
  return index < 0
    ? [...offers, updatedOffer]
    : [...offers.slice(0, index), ...offers.slice(index + 1)];
};

export const updateOffers = (offers: Offer[], updatedOffer: Offer): Offer[] => {
  const index = offers.findIndex((offer) => offer.id === updatedOffer.id);
  return [...offers.slice(0, index), updatedOffer, ...offers.slice(index + 1)];
};

export const validateComment = (comment: string): boolean => comment.length >= ReviewLehgth.MIN && comment.length <= ReviewLehgth.MAX;


