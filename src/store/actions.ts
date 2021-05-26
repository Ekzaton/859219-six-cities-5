import {ActionType} from "./const";
import {Action} from "./types";
import {Offer} from "../components/types";

export const ActionCreator = {
  getActiveOfferID: (activeOfferID: number | null): Action => ({
    type: ActionType.GET_ACTIVE_OFFER_ID,
    payload: activeOfferID
  }),
  getCurrentFilter: (currentFilter: string): Action => ({
    type: ActionType.GET_CURRENT_FILTER,
    payload: currentFilter
  }),
  getCurrentSorting: (currentSorting: string): Action => ({
    type: ActionType.GET_CURRENT_SORTING,
    payload: currentSorting
  }),
  getOffers: (offers: Offer[]): Action => ({
    type: ActionType.GET_OFFERS,
    payload: offers
  })
};
