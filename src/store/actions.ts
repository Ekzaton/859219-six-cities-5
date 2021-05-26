import {ActionType} from "./const";
import {Action} from "./types";
import {FilteringType, SortingType} from "../components/const";
import {Offer} from "../components/types";

export const ActionCreator = {
  getActiveOfferID: (activeOfferID: number | null): Action => ({
    type: ActionType.GET_ACTIVE_OFFER_ID,
    payload: activeOfferID
  }),
  getCurrentFiltering: (currentFiltering: FilteringType): Action => ({
    type: ActionType.GET_CURRENT_FILTERING,
    payload: currentFiltering
  }),
  getCurrentSorting: (currentSorting: SortingType): Action => ({
    type: ActionType.GET_CURRENT_SORTING,
    payload: currentSorting
  }),
  getOffers: (offers: Offer[]): Action => ({
    type: ActionType.GET_OFFERS,
    payload: offers
  })
};
