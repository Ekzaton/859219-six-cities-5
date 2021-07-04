import {ActionType} from "../../consts/store";

import {ReviewAction, ReviewState} from "../../types/store/review";

const initialState: ReviewState = {
  isDataSending: false,
  isSendingError: false
};

export const reviewReducer = (state = initialState, action: ReviewAction): ReviewState => {
  switch (action.type) {
    case ActionType.SET_IS_REVIEW_SENDING:
      return {...state, isDataSending: action.payload};
    case ActionType.SET_IS_REVIEW_SENDING_ERROR:
      return {...state, isSendingError: action.payload};
    default:
      return state;
  }
};
