import {CityName, SortingType} from "../../consts/common";
import {ActionType} from "../../consts/store";

export type AppState = {
  activeOfferID: number | null,
  currentCity: CityName,
  currentSorting: SortingType
};

type getActiveOfferIDAction = {
  type: ActionType.GET_ACTIVE_OFFER_ID,
  payload: number | null
}

type getCurrentCityAction = {
  type: ActionType.GET_CURRENT_FILTERING,
  payload: CityName
}

type getCurrentSortingAction = {
  type: ActionType.GET_CURRENT_SORTING,
  payload: SortingType
}

export type AppAction = getActiveOfferIDAction | getCurrentCityAction | getCurrentSortingAction;
