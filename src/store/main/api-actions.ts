import {APIEndpoint} from "../../consts/store";

import {APIAction, AppDispatch} from "../store";

import {setAllOffers, setIsLoading, setLoadingError} from "./actions";

export const fetchAllOffers = (): APIAction => (dispatch: AppDispatch, _getState, api) => {
  dispatch(setIsLoading(true));
  api.get(APIEndpoint.HOTELS)
  .then(({data}) => {
    dispatch(setLoadingError(null));
    dispatch(setAllOffers(data));
    dispatch(setIsLoading(false));
  })
  .catch(({response}) => {
    dispatch(setLoadingError(response));
    dispatch(setIsLoading(false));
  });
};
