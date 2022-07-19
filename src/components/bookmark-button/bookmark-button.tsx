import React, {memo, useCallback, FormEvent} from "react";

import {BtnBigSize, BtnSize, BtnType} from "../../consts/components";
import {useAppDispatch} from "../../hooks/store";
import {toggleFavoriteStatus} from "../../store/favorites/api-actions";
import {Offer} from "../../types/common";

type BookmarkButtonProps = {
  offer: Offer;
  type: BtnType;
}

const BookmarkButton = (props: BookmarkButtonProps): JSX.Element => {
  const {offer, type} = props;

  const dispatch = useAppDispatch();

  const handleButtonClick = useCallback((evt: FormEvent) => {
    evt.preventDefault();
    dispatch(toggleFavoriteStatus(offer, evt));
  }, [offer]);

  return (
    <button
      className={`${type}__bookmark-button ${offer.isFavorite && `${type}__bookmark-button--active`} button`}
      type="button"
      onClick={handleButtonClick}
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
