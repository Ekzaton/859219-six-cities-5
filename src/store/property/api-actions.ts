import {APIEndpoint} from "../../consts/store";
import {ReviewPost} from "../../types/common";

import {APIAction, AppDispatch} from "../store";

import {setOffer, setNearbyOffers, setReviews, setIsLoading, setLoadingError, setIsSending, setSendingError} from "./actions";

export const fetchOffer = (id: string): APIAction => (dispatch: AppDispatch, _getState, api) => {
  dispatch(setIsLoading(true));
  api.get(APIEndpoint.HOTELS + id)
  .then(({data}) => {
    dispatch(setLoadingError(null));
    dispatch(setOffer(data));
    dispatch(setIsLoading(false));
  })
  .catch(({response}) => {
    dispatch(setLoadingError(response));
    dispatch(setIsLoading(false));
  });
};

export const fetchNearbyOffers = (id: string): APIAction => (dispatch: AppDispatch, _getState, api) => {
  api.get(APIEndpoint.HOTELS + id + APIEndpoint.NEARBY)
  .then(({data}) => dispatch(setNearbyOffers(data)));
};

export const fetchReviews = (id: string): APIAction => (dispatch: AppDispatch, _getState, api) => {
  api.get(APIEndpoint.COMMENTS + id)
  .then(({data}) => dispatch(setReviews(data)));
};

export const sendReview = (id: number, {rating, comment}: ReviewPost): APIAction => (dispatch: AppDispatch, _getState, api) => {
  dispatch(setIsSending(true));
  api.post(APIEndpoint.COMMENTS + id, {rating, comment})
  .then(({data}) => {
    dispatch(setSendingError(null));
    dispatch(setReviews(data));
    dispatch(setIsSending(false));
  })
  .catch(({response}) => {
    dispatch(setSendingError(response));
    dispatch(setIsSending(false));
  });
};
