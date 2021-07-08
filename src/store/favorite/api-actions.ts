import {changeOfferFavoriteStatus, setIsDataSending, setIsSendingError} from "./actions";

import {APIAction} from "../store";

import {APIEndpoint} from "../../consts/store";

export const toggleFavoriteStatus = (id: number, isFavorite: boolean): APIAction => (dispatch, _getState, api) => {
  dispatch(setIsDataSending(true));
  api.post(APIEndpoint.FAVORITE + id + `/${Number(!isFavorite)}`)
  .then(({data}) => {
    dispatch(setIsSendingError(false));
    dispatch(changeOfferFavoriteStatus(data));
    dispatch(setIsDataSending(false));
  })
  .catch(() => {
    dispatch(setIsSendingError(true));
    dispatch(setIsDataSending(false));
  });
};
