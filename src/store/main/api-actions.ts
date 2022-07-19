import {APIEndpoint} from "../../consts/store";

import {AppDispatch, AppThunkAction} from "../store";

import {setAllOffers, setIsLoading, setLoadingError} from "./actions";

export const fetchAllOffers = (): AppThunkAction => (dispatch: AppDispatch, _getState, api) => {
  dispatch(setIsLoading(true));
  api.get(APIEndpoint.HOTELS)
  .then(({data}) => {
    dispatch(setLoadingError(null));
    dispatch(setAllOffers(data));
  })
  .catch(({response}) => {
    dispatch(setLoadingError(response));
  })
  .finally(() => {
    dispatch(setIsLoading(false));
  });
};
