import {getOffers} from "./actions";
import {APIAction} from "./types";

export const fetchOffers = (): APIAction => (dispatch, _getState, api) =>
  api.get(`/hotels`)
  .then(({data}) => dispatch(getOffers(data)))
  .catch(() => {
    throw Error(`Ошибка загрузки предложений`);
  });
