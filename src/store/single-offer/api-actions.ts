import {
  getNearbyOffers,
  getReviews,
  getSingleOffer,
  setIsDataLoading,
  setIsLoadingError,
} from "./actions";

import {APIAction} from "../store";

import {APIEndpoint} from "../../consts/store";

export const fetchNearbyOffers = (id: string): APIAction => (dispatch, _getState, api) => {
  api.get(APIEndpoint.HOTELS + id + APIEndpoint.NEARBY)
  .then(({data}) => dispatch(getNearbyOffers(data)));
};

export const fetchReviews = (id: string): APIAction => (dispatch, _getState, api) => {
  api.get(APIEndpoint.COMMENTS + id)
  .then(({data}) => dispatch(getReviews(data)));
};

export const fetchSingleOffer = (id: string): APIAction => (dispatch, _getState, api) => {
  dispatch(setIsDataLoading(true));
  api.get(APIEndpoint.HOTELS + id)
  .then(({data}) => {
    dispatch(setIsLoadingError(false));
    dispatch(getSingleOffer(data));
    dispatch(setIsDataLoading(false));
  })
  .catch(() => {
    dispatch(setIsLoadingError(true));
    dispatch(setIsDataLoading(false));
  });
};
