import {getAllOffers, setIsDataLoading, setIsLoadingError} from "./actions";

import {APIAction} from "../store";

import {APIEndpoint} from "../../consts/store";

export const fetchAllOffers = (): APIAction => (dispatch, _getState, api) => {
  dispatch(setIsDataLoading(true));
  api.get(APIEndpoint.HOTELS)
  .then(({data}) => {
    dispatch(setIsLoadingError(false));
    dispatch(getAllOffers(data));
    dispatch(setIsDataLoading(false));
  })
  .catch(() => {
    dispatch(setIsLoadingError(true));
    dispatch(setIsDataLoading(false));
  });
};

