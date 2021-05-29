import {DataAction} from "./types";
import {ActionType} from "../const";
import {Offer} from "../../components/types";

export const getOffers = (offers: Offer[]): DataAction => ({
  type: ActionType.GET_OFFERS,
  payload: offers
});
