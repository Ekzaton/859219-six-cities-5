import {CityName, SortingType} from "../consts/common";
import {Offer, OffersByCity, Review} from "../types/common";

export const getFilteredOffers = (currentCity: CityName, offers: Offer[]): Offer[] =>
  offers.filter((offer) => offer.city.name === currentCity);

export const getOffersByCity = (offers: Offer[]): OffersByCity =>
  offers.reduce((acc, offer) => {
    const city = offer.city.name;
    acc[city] = acc[city] ? [...acc[city], offer] : [offer];
    return acc;
  }, {} as OffersByCity);

export const getSortedOffers = (currentSorting: SortingType, offers: Offer[]): Offer[] => {
  switch (currentSorting) {
    case SortingType.POPULAR:
      return offers;
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

export const setFavoriteOffers = (offers: Offer[], changedOffer: Offer): Offer[] => {
  const index = offers.findIndex((offer) => offer.id === changedOffer.id);
  return index < 0
    ? [...offers, changedOffer]
    : [...offers.slice(0, index), ...offers.slice(index + 1)];
};

export const setNearbyOffers = (offers: Offer[], changedOffer: Offer): Offer[] => {
  const index = offers.findIndex((offer) => offer.id === changedOffer.id);
  return index < 0
    ? offers
    : [...offers.slice(0, index), changedOffer, ...offers.slice(index + 1)];
};

export const setOffers = (offers: Offer[], changedOffer: Offer): Offer[] => {
  const index = offers.findIndex((offer) => offer.id === changedOffer.id);
  return [...offers.slice(0, index), changedOffer, ...offers.slice(index + 1)];
};
