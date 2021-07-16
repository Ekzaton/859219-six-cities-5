import React, {memo, FormEvent} from "react";
import {useDispatch} from "react-redux";

import {BtnBigSize, BtnSize, BtnType} from "../../consts/components";

import {toggleFavoriteStatus} from "../../store/favorites/api-actions";

import {Offer} from "../../types/common";

type BookmarkButtonProps = {
  offer: Offer;
  type: BtnType;
}

const BookmarkButton = (props: BookmarkButtonProps): JSX.Element => {
  const {offer, type} = props;

  const dispatch = useDispatch();

  return (
    <button
      className={`${type}__bookmark-button ${offer.isFavorite && `${type}__bookmark-button--active`} button`}
      type="button"
      onClick={(evt: FormEvent) => {
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
  );
};

export default memo(BookmarkButton);
