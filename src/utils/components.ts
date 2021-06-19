import {ReviewDate, ReviewLehgth} from "../const";

export const getOfferType = (type: string): string => type[0].toUpperCase() + type.slice(1);

export const getRatingArray = (length: number): number[] => new Array(length).fill(``);

export const getRatingStars = (rating: number): string => `${rating * 20}%`;

export const getReviewDate = (date: string): string =>
  new Date(date).toLocaleString(ReviewDate.LOCALE, {month: ReviewDate.MONTH, year: ReviewDate.YEAR});

export const validateComment = (comment: string): boolean =>
  comment.length >= ReviewLehgth.MIN && comment.length <= ReviewLehgth.MAX;


