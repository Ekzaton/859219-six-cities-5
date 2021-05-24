import {ActionType} from "./const";
import {Action} from "./types";
import {Offer} from "../components/types";

export const ActionCreator = {
  getCurrentFilter: (currentFilter: string): Action => ({
    type: ActionType.GET_CURRENT_FILTER,
    payload: currentFilter
  }),
  getOffers: (offers: Offer[]): Action => ({
    type: ActionType.GET_OFFERS,
    payload: offers
  })
};
