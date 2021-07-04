import {Offer} from "../common";

import {ActionType} from "../../consts/store";

export type FavoriteState = {
  isDataSending: boolean,
  isSendingError: boolean,
};

type changeOfferFavoriteStatusAction = {
  type: ActionType.CHANGE_OFFER_FAVORITE_STATUS
  payload: Offer
}

type setIsDataSendingAction = {
  type: ActionType.SET_IS_FAVORITE_SENDING,
  payload: boolean
}

type setIsSendingErrorAction = {
  type: ActionType.SET_IS_FAVORITE_SENDING_ERROR,
  payload: boolean
}

export type FavoriteAction = changeOfferFavoriteStatusAction | setIsDataSendingAction | setIsSendingErrorAction;
