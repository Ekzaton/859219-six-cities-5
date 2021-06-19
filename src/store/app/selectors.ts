import {RootState} from "../index";
import {FilteringType, SortingType} from "../../const";

export const selectActiveOfferID = (state: RootState): number | null => state.app.activeOfferID;
export const selectCurrentFiltering = (state: RootState): FilteringType => state.app.currentFiltering;
export const selectCurrentSorting = (state: RootState): SortingType => state.app.currentSorting;
