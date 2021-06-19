import {FavStatus, FilteringType, SortingType} from "../const";
import {Offer, Review} from "../types";

export const getFavStatus = (isFavorite: boolean): string => `/${isFavorite ? FavStatus.NOT_FAV : FavStatus.FAV}`;

export const getFavoriteOffersByCity = (offers: Offer[]): Record<string, Offer[]> =>
  offers.reduce((acc, offer) => {
    const city = offer.city.name;
    acc[city] = acc[city] ? [...acc[city], offer] : [offer];
    return acc;
  }, {} as Record<string, Offer[]>);

export const getFilteredOffers = (currentFiltering: FilteringType, offers: Offer[]): Offer[] =>
  offers.filter((offer) => offer.city.name === currentFiltering);

export const getSortedOffers = (currentSorting: SortingType, offers: Offer[]): Offer[] => {
  switch (currentSorting) {
    case SortingType.POPULAR:
      return [...offers];
    case SortingType.PRICE_HIGH_TO_LOW:
      return [...offers.sort((offer1, offer2) => offer2.price - offer1.price)];
    case SortingType.PRICE_LOW_TO_HIGH:
      return [...offers.sort((offer1, offer2) => offer1.price - offer2.price)];
    case SortingType.TOP_RATED_FIRST:
      return [...offers.sort((offer1, offer2) => offer2.rating - offer1.rating)];
    default:
      return offers;
  }
};

export const getSortedReviews = (reviews: Review[]): Review[] =>
  [...reviews.sort((review1, review2) => new Date(review2.date).getTime() - new Date(review1.date).getTime())];

export const getUpdatedFavoriteOffers = (offers: Offer[], updatedOffer: Offer): Offer[] => {
  const index = offers.findIndex((offer) => offer.id === updatedOffer.id);
  return index < 0
    ? [...offers, updatedOffer]
    : [...offers.slice(0, index), ...offers.slice(index + 1)];
};

export const getUpdatedOffers = (offers: Offer[], updatedOffer: Offer): Offer[] => {
  const index = offers.findIndex((offer) => offer.id === updatedOffer.id);
  return [...offers.slice(0, index), updatedOffer, ...offers.slice(index + 1)];
};

