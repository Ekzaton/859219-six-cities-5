import {AxiosResponse} from "axios";

import {Offer} from "../common";

import {CityName, SortingType} from "../../consts/common";
import {ActionType} from "../../consts/store";

export type MainState = {
  activeOfferID: number | null,
  allOffers: Offer[],
  currentCity: CityName,
  currentSorting: SortingType,
  isLoading: boolean,
  loadingError: AxiosResponse | null
};

type setActiveOfferIDAction = {
  type: ActionType.SET_ACTIVE_OFFER_ID,
  payload: number | null
}

type setCurrentCityAction = {
  type: ActionType.SET_CURRENT_CITY,
  payload: CityName
}

type setCurrentSortingAction = {
  type: ActionType.SET_CURRENT_SORTING,
  payload: SortingType
}

type setAllOffersAction = {
  type: ActionType.SET_ALL_OFFERS,
  payload: Offer[]
}

type setOfferFavoriteStatusAction = {
  type: ActionType.SET_OFFER_FAVORITE_STATUS,
  payload: Offer
}

type setIsLoadingAction = {
  type: ActionType.SET_MAIN_IS_LOADING,
  payload: boolean
}

type setLoadingErrorAction = {
  type: ActionType.SET_MAIN_LOADING_ERROR,
  payload: AxiosResponse | null
}

export type MainAction = setActiveOfferIDAction | setCurrentCityAction | setCurrentSortingAction
| setAllOffersAction | setOfferFavoriteStatusAction| setIsLoadingAction | setLoadingErrorAction;
