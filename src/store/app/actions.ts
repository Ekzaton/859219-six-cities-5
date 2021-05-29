import {AppAction} from "./types";
import {ActionType} from "../const";
import {FilteringType, SortingType} from "../../components/const";

export const getActiveOfferID = (activeOfferID: number | null): AppAction => ({
  type: ActionType.GET_ACTIVE_OFFER_ID,
  payload: activeOfferID
});

export const getCurrentFiltering = (currentFiltering: FilteringType): AppAction => ({
  type: ActionType.GET_CURRENT_FILTERING,
  payload: currentFiltering
});

export const getCurrentSorting = (currentSorting: SortingType): AppAction => ({
  type: ActionType.GET_CURRENT_SORTING,
  payload: currentSorting
});
