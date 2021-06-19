import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {setIsDataSending} from "../../store/data/actions";

import {toggleFavoriteStatus} from "../../store/data/api-actions";

import {selectIsDataSending} from "../../store/data/selectors";
import {selectAuthStatus} from "../../store/user/selectors";

import {AuthStatus} from "../../consts/common";
import {BtnBigSize, BtnSize, BtnType} from "../../consts/components";

import {Offer} from "../../types";

type Props = {
  offer: Offer;
  type: BtnType;
}

const BookmarkButton: React.FunctionComponent<Props> = (props: Props) => {
  const {offer, type} = props;
  const authStatus = useSelector(selectAuthStatus);
  const isDataSending = useSelector(selectIsDataSending);
  const isAuthorized = authStatus === AuthStatus.AUTH;
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      {isAuthorized &&
      <button
        className={`${type}__bookmark-button
          ${offer.isFavorite && `${type}__bookmark-button--active`} button`}
        type="button"
        onClick={(evt: React.FormEvent) => {
          evt.preventDefault();
          dispatch(setIsDataSending(true));
          dispatch(toggleFavoriteStatus(offer.id, offer.isFavorite));
        }}
        disabled={isDataSending}
      >
        <svg
          className={`${type}__bookmark-icon`}
          width={type === BtnType.PLACE_CARD ? BtnSize.WIDTH : BtnBigSize.WIDTH}
          height={type === BtnType.PLACE_CARD ? BtnSize.HEIGHT : BtnBigSize.HEIGHT}
        >
          <use xlinkHref="#icon-bookmark"/>
        </svg>
        <span className="visually-hidden">
          {offer.isFavorite ? `In bookmarks` : `To bookmarks`}
        </span>
      </button>
      }
    </React.Fragment>
  );
};

export default BookmarkButton;
