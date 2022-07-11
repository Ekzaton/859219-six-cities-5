import {APIEndpoint} from "../../consts/store";
import {ReviewPost} from "../../types/common";

import {AppDispatch, AppThunkAction} from "../store";

import {setOffer, setNearbyOffers, setReviews, setIsLoading, setLoadingError, setIsSending, setSendingError} from "./actions";

export const fetchOffer = (id: string): AppThunkAction => (dispatch: AppDispatch, _getState, api) => {
  dispatch(setIsLoading(true));
  api.get(APIEndpoint.HOTELS + id)
  .then(({data}) => {
    dispatch(setLoadingError(null));
    dispatch(setOffer(data));
  })
  .catch(({response}) => {
    dispatch(setLoadingError(response));
  })
  .finally(() => {
    dispatch(setIsLoading(false));
  });
};

export const fetchNearbyOffers = (id: string): AppThunkAction => (dispatch: AppDispatch, _getState, api) => {
  api.get(APIEndpoint.HOTELS + id + APIEndpoint.NEARBY)
  .then(({data}) => dispatch(setNearbyOffers(data)));
};

export const fetchReviews = (id: string): AppThunkAction => (dispatch: AppDispatch, _getState, api) => {
  api.get(APIEndpoint.COMMENTS + id)
  .then(({data}) => dispatch(setReviews(data)));
};

export const sendReview = (id: number, {rating, comment}: ReviewPost): AppThunkAction => (dispatch: AppDispatch, _getState, api) => {
  dispatch(setIsSending(true));
  api.post(APIEndpoint.COMMENTS + id, {rating, comment})
  .then(({data}) => {
    dispatch(setSendingError(null));
    dispatch(setReviews(data));
  })
  .catch(({response}) => {
    dispatch(setSendingError(response));
  })
  .finally(() => {
    dispatch(setIsSending(false));
  });
};
