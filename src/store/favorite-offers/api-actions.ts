import {getFavoriteOffers, setIsDataLoading, setIsLoadingError} from "./actions";

import {APIAction} from "../store";

import {APIEndpoint} from "../../consts/store";

export const fetchFavoriteOffers = (): APIAction => (dispatch, _getState, api) => {
  dispatch(setIsDataLoading(true));
  api.get(APIEndpoint.FAVORITE)
  .then(({data}) => {
    dispatch(setIsLoadingError(false));
    dispatch(getFavoriteOffers(data));
    dispatch(setIsDataLoading(false));
  })
  .catch(() => {
    dispatch(setIsLoadingError(true));
    dispatch(setIsDataLoading(false));
  });
};


