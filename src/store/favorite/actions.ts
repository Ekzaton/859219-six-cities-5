import {ActionType} from "../../consts/store";

import {Offer} from "../../types/common";
import {FavoriteAction} from "../../types/store/favorite";

export const changeOfferFavoriteStatus = (offer: Offer): FavoriteAction => ({
  type: ActionType.CHANGE_OFFER_FAVORITE_STATUS,
  payload: offer
});

export const setIsDataSending = (isDataSending: boolean): FavoriteAction => ({
  type: ActionType.SET_IS_FAVORITE_SENDING,
  payload: isDataSending
});

export const setIsSendingError = (isSendingError: boolean): FavoriteAction => ({
  type: ActionType.SET_IS_FAVORITE_SENDING_ERROR,
  payload: isSendingError
});
