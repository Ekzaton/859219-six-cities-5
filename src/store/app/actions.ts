import {CityName, SortingType} from "../../consts/common";
import {ActionType} from "../../consts/store";

import {AppAction} from "../../types/store/app";

export const getActiveOfferID = (activeOfferID: number | null): AppAction => ({
  type: ActionType.GET_ACTIVE_OFFER_ID,
  payload: activeOfferID
});

export const getCurrentCity = (currentCity: CityName): AppAction => ({
  type: ActionType.GET_CURRENT_FILTERING,
  payload: currentCity
});

export const getCurrentSorting = (currentSorting: SortingType): AppAction => ({
  type: ActionType.GET_CURRENT_SORTING,
  payload: currentSorting
});
