import {ActionType} from "./const";
import {Action} from "./types";
import {Offer} from "../components/types";

export const ActionCreator = {
  getActiveCity: (activeCity: string): Action => ({
    type: ActionType.GET_ACTIVE_CITY,
    payload: activeCity
  }),
  getAllOffers: (offersList: Offer[]): Action => ({
    type: ActionType.GET_ALL_OFFERS,
    payload: offersList
  })
};
