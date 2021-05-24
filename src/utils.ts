import {SortingType} from "./components/const";
import {Offer} from "./components/types";

export const capitalize = (title: string): string => title[0].toUpperCase() + title.slice(1);

export const formatReviewDate = (date: string): string => new Date(date).toLocaleString(`en-US`, {month: `long`, year: `numeric`});

export const getArray = (count: number): number[] => new Array(count).fill(``);

export const getRatingStars = (rating: number): string => `${rating * 20}%`;

export const getSortedOffers = (currentSorting: string, offers: Offer[]): Offer[] => {
  let sortedOffers = offers;

  switch (currentSorting) {
    case SortingType.POPULAR:
      sortedOffers = offers.slice();
      break;
    case SortingType.PRICE_HIGH_TO_LOW:
      sortedOffers = offers.slice().sort((a, b) => b.price - a.price);
      break;
    case SortingType.PRICE_LOW_TO_HIGH:
      sortedOffers = offers.slice().sort((a, b) => a.price - b.price);
      break;
    case SortingType.TOP_RATED_FIRST:
      sortedOffers = offers.slice().sort((a, b) => b.rating - a.rating);
      break;
  }
  return sortedOffers;
};


