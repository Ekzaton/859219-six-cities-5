import {RootState} from "../store";

import {CityName, SortingType} from "../../consts/common";

export const selectActiveOfferID = (state: RootState): number | null => state.app.activeOfferID;
export const selectCurrentCity = (state: RootState): CityName => state.app.currentCity;
export const selectCurrentSorting = (state: RootState): SortingType => state.app.currentSorting;
