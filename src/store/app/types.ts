import {ActionType} from "../const";
import {FilteringType, SortingType} from "../../components/const";

export type AppState = {
  activeOfferID: number | null,
  currentFiltering: FilteringType,
  currentSorting: SortingType
};

type getActiveOfferIDAction = {
  type: typeof ActionType.GET_ACTIVE_OFFER_ID,
  payload: number | null
}

type getCurrentFilteringAction = {
  type: typeof ActionType.GET_CURRENT_FILTERING,
  payload: FilteringType
}

type getCurrentSortingAction = {
  type: typeof ActionType.GET_CURRENT_SORTING,
  payload: SortingType
}

export type AppAction = getActiveOfferIDAction | getCurrentFilteringAction | getCurrentSortingAction;
