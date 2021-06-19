import {FilteringType, SortingType} from "../../consts/common";
import {ActionType} from "../../consts/store";

export type AppState = {
  activeOfferID: number | null,
  currentFiltering: FilteringType,
  currentSorting: SortingType
};

type getActiveOfferIDAction = {
  type: ActionType.GET_ACTIVE_OFFER_ID,
  payload: number | null
}

type getCurrentFilteringAction = {
  type: ActionType.GET_CURRENT_FILTERING,
  payload: FilteringType
}

type getCurrentSortingAction = {
  type: ActionType.GET_CURRENT_SORTING,
  payload: SortingType
}

export type AppAction = getActiveOfferIDAction | getCurrentFilteringAction | getCurrentSortingAction;
