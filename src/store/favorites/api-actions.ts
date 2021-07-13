import {FormEvent} from "react";

import {setFavoriteOffers, setOfferFavoriteStatus, setIsLoading, setLoadingError} from "./actions";

import {APIAction} from "../store";

import {SHAKE_DURATION, APIEndpoint, AttributeName, AttributeValue} from "../../consts/store";

import {shakeAnimation} from "../../resourses/animations";

export const fetchFavoriteOffers = (): APIAction => (dispatch, _getState, api) => {
  dispatch(setIsLoading(true));
  api.get(APIEndpoint.FAVORITE)
  .then(({data}) => {
    dispatch(setLoadingError(null));
    dispatch(setFavoriteOffers(data));
    dispatch(setIsLoading(false));
  })
  .catch(({response}) => {
    dispatch(setLoadingError(response));
    dispatch(setIsLoading(false));
  });
};

export const toggleFavoriteStatus = (id: number, isFavorite: boolean, evt: FormEvent): APIAction => (dispatch, _getState, api) => {
  const button = evt.currentTarget as HTMLButtonElement;
  const span = button.firstElementChild as HTMLSpanElement;
  const svg = span.firstElementChild as SVGElement;
  button.setAttribute(AttributeName.DISABLED, AttributeValue.EMPTY);
  api.post(APIEndpoint.FAVORITE + id + `/${Number(!isFavorite)}`)
  .then(({data}) => {
    dispatch(setOfferFavoriteStatus(data));
    button.removeAttribute(AttributeName.DISABLED);
  })
  .catch(() => {
    svg.setAttribute(AttributeName.FILL, AttributeValue.RED);
    svg.setAttribute(AttributeName.STROKE, AttributeValue.RED);
    button.animate(shakeAnimation, SHAKE_DURATION);
    setTimeout(() => {
      svg.removeAttribute(AttributeName.FILL);
      svg.removeAttribute(AttributeName.STROKE);
    }, SHAKE_DURATION);
    button.removeAttribute(AttributeName.DISABLED);
  });
};

