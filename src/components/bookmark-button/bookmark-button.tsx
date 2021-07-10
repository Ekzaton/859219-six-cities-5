import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {AuthStatus} from "../../consts/common";
import {BtnBigSize, BtnSize, BtnType} from "../../consts/components";

import {toggleFavoriteStatus} from "../../store/favorite/api-actions";

import {selectAuthStatus} from "../../store/user/selectors";

import {Offer} from "../../types/common";

type BookmarkButtonProps = {
  offer: Offer;
  type: BtnType;
}

const BookmarkButton = (props: BookmarkButtonProps): JSX.Element => {
  const {offer, type} = props;
  const dispatch = useDispatch();
  const authStatus = useSelector(selectAuthStatus);

  const isAuthorized = authStatus === AuthStatus.AUTH;

  return (
    <React.Fragment>
      {isAuthorized &&
        <button
          className={`${type}__bookmark-button ${offer.isFavorite && `${type}__bookmark-button--active`} button`}
          type="button"
          onClick={(evt: React.FormEvent) => {
            evt.preventDefault();
            dispatch(toggleFavoriteStatus(offer.id, offer.isFavorite, evt));
          }}
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
