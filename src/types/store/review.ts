import {ActionType} from "../../consts/store";

import {Review} from "../common";

export type ReviewState = {
  isDataSending: boolean,
  isSendingError: boolean
};

type getReviews = {
  type: ActionType.GET_REVIEWS,
  payload: Review[]
}

type setIsDataSendingAction = {
  type: ActionType.SET_IS_REVIEW_SENDING,
  payload: boolean
}

type setIsSendingErrorAction = {
  type: ActionType.SET_IS_REVIEW_SENDING_ERROR,
  payload: boolean
}

export type ReviewAction = getReviews | setIsDataSendingAction | setIsSendingErrorAction;

