import {setAllOffers, setIsLoading, setLoadingError} from "./actions";

import {APIAction} from "../store";

import {APIEndpoint} from "../../consts/store";

export const fetchAllOffers = (): APIAction => (dispatch, _getState, api) => {
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

