import {CityName, SortingType} from "../../consts/common";
import {ActionType} from "../../consts/store";

import {Offer} from "../../types/common";
import {AllOffersAction} from "../../types/store/all-offers";

export const changeActiveOfferID = (activeOfferID: number | null): AllOffersAction => ({
  type: ActionType.CHANGE_ACTIVE_OFFER_ID,
  payload: activeOfferID
});

export const changeCurrentCity = (currentCity: CityName): AllOffersAction => ({
  type: ActionType.CHANGE_CURRENT_CITY,
  payload: currentCity
});

export const changeCurrentSorting = (currentSorting: SortingType): AllOffersAction => ({
  type: ActionType.CHANGE_CURRENT_SORTING,
  payload: currentSorting
});

export const changeOfferFavoriteStatus = (offer: Offer): AllOffersAction => ({
  type: ActionType.CHANGE_OFFER_FAVORITE_STATUS,
  payload: offer
});

export const getAllOffers = (offers: Offer[]): AllOffersAction => ({
  type: ActionType.GET_ALL_OFFERS,
  payload: offers
});

export const setIsDataLoading = (isDataLoading: boolean): AllOffersAction => ({
  type: ActionType.SET_IS_ALL_OFFERS_LOADING,
  payload: isDataLoading
});

export const setIsLoadingError = (isLoadingError: boolean): AllOffersAction => ({
  type: ActionType.SET_IS_ALL_OFFERS_LOADING_ERROR,
  payload: isLoadingError
});

