import {FormEvent} from "react";

import {SHAKE_DURATION, APIEndpoint, AttributeName, AttributeValue} from "../../consts/store";
import {shakeAnimations} from "../../resourses/animations";

import {APIAction, AppDispatch} from "../store";

import {setFavoriteOffers, setOfferFavoriteStatus, setIsLoading, setLoadingError} from "./actions";

export const fetchFavoriteOffers = (): APIAction => (dispatch: AppDispatch, _getState, api) => {
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

export const toggleFavoriteStatus = (id: number, isFavorite: boolean, evt: FormEvent): APIAction => (dispatch: AppDispatch, _getState, api) => {
  const button = evt.currentTarget as HTMLButtonElement;
  const span = button.firstElementChild as HTMLSpanElement;
  const svg = span.firstElementChild as SVGElement;
  button.setAttribute(AttributeName.DISABLED, AttributeValue.EMPTY);
  api.post(APIEndpoint.FAVORITE + id + `/${+(!isFavorite)}`)
  .then(({data}) => {
    dispatch(setOfferFavoriteStatus(data));
  })
  .catch(() => {
    svg.setAttribute(AttributeName.FILL, AttributeValue.RED);
    svg.setAttribute(AttributeName.STROKE, AttributeValue.RED);
    button.animate(shakeAnimations, SHAKE_DURATION);
    setTimeout(() => {
      svg.removeAttribute(AttributeName.FILL);
      svg.removeAttribute(AttributeName.STROKE);
    }, SHAKE_DURATION);
  }).finally(() => {
    button.removeAttribute(AttributeName.DISABLED);
  });
};
