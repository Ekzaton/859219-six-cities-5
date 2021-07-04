import {getReviews, setIsDataSending, setIsSendingError} from "./actions";

import {APIAction} from "../store";

import {APIEndpoint} from "../../consts/store";

import {ReviewPost} from "../../types/common";

export const sendReview = (id: number, {rating, comment}: ReviewPost): APIAction => (dispatch, _getState, api) => {
  dispatch(setIsDataSending(true));
  api.post(APIEndpoint.COMMENTS + id, {rating, comment})
  .then(({data}) => {
    dispatch(setIsSendingError(false));
    dispatch(getReviews(data));
    dispatch(setIsDataSending(false));
  })
  .catch(() => {
    dispatch(setIsSendingError(true));
    dispatch(setIsDataSending(false));
  });
};

