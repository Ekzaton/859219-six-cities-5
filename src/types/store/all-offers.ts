import {Offer} from "../common";

import {CityName, SortingType} from "../../consts/common";
import {ActionType} from "../../consts/store";

export type AllOffersState = {
  activeOfferID: number | null,
  currentCity: CityName,
  currentSorting: SortingType,
  data: Offer[],
  isDataLoading: boolean,
  isLoadingError: boolean
};

type changeActiveOfferIDAction = {
  type: ActionType.CHANGE_ACTIVE_OFFER_ID,
  payload: number | null
}

type changeCurrentCityAction = {
  type: ActionType.CHANGE_CURRENT_CITY,
  payload: CityName
}

type changeCurrentSortingAction = {
  type: ActionType.CHANGE_CURRENT_SORTING,
  payload: SortingType
}

type changeOfferFavoriteStatusAction = {
  type: ActionType.CHANGE_OFFER_FAVORITE_STATUS,
  payload: Offer
}

type getAllOffersAction = {
  type: ActionType.GET_ALL_OFFERS,
  payload: Offer[]
}

type setIsDataLoadingAction = {
  type: ActionType.SET_IS_ALL_OFFERS_LOADING,
  payload: boolean
}

type setIsLoadingErrorAction = {
  type: ActionType.SET_IS_ALL_OFFERS_LOADING_ERROR,
  payload: boolean
}

export type AllOffersAction = changeActiveOfferIDAction | changeCurrentCityAction | changeCurrentSortingAction
| changeOfferFavoriteStatusAction | getAllOffersAction | setIsDataLoadingAction | setIsLoadingErrorAction;
