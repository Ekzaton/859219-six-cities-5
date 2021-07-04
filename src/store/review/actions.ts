import {ActionType} from "../../consts/store";

import {Review} from "../../types/common";
import {ReviewAction} from "../../types/store/review";

export const getReviews = (reviews: Review[]): ReviewAction => ({
  type: ActionType.GET_REVIEWS,
  payload: reviews
});

export const setIsDataSending = (isDataSending: boolean): ReviewAction => ({
  type: ActionType.SET_IS_REVIEW_SENDING,
  payload: isDataSending
});

export const setIsSendingError = (isSendingError: boolean): ReviewAction => ({
  type: ActionType.SET_IS_REVIEW_SENDING_ERROR,
  payload: isSendingError
});

