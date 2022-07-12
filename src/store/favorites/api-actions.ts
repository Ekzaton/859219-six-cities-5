import {FormEvent} from "react";

import {SHAKE_DURATION, APIEndpoint, AttributeName, AttributeValue} from "../../consts/store";
import {shakeAnimations} from "../../resourses/animations";
import {Offer} from "../../types/common";

import {AppDispatch, AppThunkAction} from "../store";

import {setFavoriteOffers, setOfferFavoriteStatus, setIsLoading, setLoadingError} from "./actions";

export const fetchFavoriteOffers = (): AppThunkAction => (dispatch: AppDispatch, _getState, api) => {
  dispatch(setIsLoading(true));
  api.get(APIEndpoint.FAVORITE)
  .then(({data}) => {
    dispatch(setLoadingError(null));
    dispatch(setFavoriteOffers(data));
  })
  .catch(({response}) => {
    dispatch(setLoadingError(response));
  })
  .finally(() => {
    dispatch(setIsLoading(false));
  });
};

export const toggleFavoriteStatus = (offer: Offer, evt: FormEvent): AppThunkAction => (dispatch: AppDispatch, _getState, api) => {
  const button = evt.currentTarget as HTMLButtonElement;
  const span = button.firstElementChild as HTMLSpanElement;
  const svg = span.firstElementChild as SVGElement;
  button.setAttribute(AttributeName.DISABLED, AttributeValue.EMPTY);
  api.post(APIEndpoint.FAVORITE + offer.id + `//${+(!offer.isFavorite)}`)
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
