import {changeOfferFavoriteStatus, getFavoriteOffers, setIsDataLoading, setIsLoadingError} from "./actions";

import {APIAction} from "../store";

import {SHAKE_DURATION, APIEndpoint, AttributeName, AttributeValue} from "../../consts/store";

import {shakeAnimation} from "../../resourses/animations";

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

export const toggleFavoriteStatus = (id: number, isFavorite: boolean, evt: React.FormEvent): APIAction => (dispatch, _getState, api) => {
  const button = evt.currentTarget;
  const svg = button.firstElementChild?.firstElementChild;
  button.setAttribute(AttributeName.DISABLED, AttributeValue.EMPTY);
  api.post(APIEndpoint.FAVORITE + id + `/${Number(!isFavorite)}`)
  .then(({data}) => {
    dispatch(changeOfferFavoriteStatus(data));
    button.removeAttribute(AttributeName.DISABLED);
  })
  .catch(() => {
    svg?.setAttribute(AttributeName.FILL, AttributeValue.RED);
    svg?.setAttribute(AttributeName.STROKE, AttributeValue.RED);
    button.animate(shakeAnimation, SHAKE_DURATION);
    setTimeout(() => {
      svg?.removeAttribute(AttributeName.FILL);
      svg?.removeAttribute(AttributeName.STROKE);
    }, SHAKE_DURATION);
    button.removeAttribute(AttributeName.DISABLED);
  });
};

