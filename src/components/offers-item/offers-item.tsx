import React from "react";
import {Link} from "react-router-dom";

import {CardImgSize, FavCardImgSize, PageType} from "../../const";
import {offerType} from "../../types";
import {capitalize, getRatingStars} from "../../utils";

type Props = {
  offer: offerType;
  page: string;
  onMouseEnter(): void;
  onMouseLeave(): void;
}

const OffersItem: React.FunctionComponent<Props> = (props: Props) => {
  const {offer, page, onMouseEnter, onMouseLeave} = props;

  return (
    <article
      className={`${page}__${page === PageType.CITIES ? `place-card` : `card`} place-card`}
      onMouseEnter={page === PageType.CITIES && onMouseEnter}
      onMouseLeave={page === PageType.CITIES && onMouseLeave}
    >
      {offer.isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className={`${page}__image-wrapper place-card__image-wrapper`}>
        <Link to={`/offer/:id`}>
          <img
            className="place-card__image"
            src={offer.previewImage}
            width={page === PageType.FAVORITES ? FavCardImgSize.WIDTH : CardImgSize.WIDTH}
            height={page === PageType.FAVORITES ? FavCardImgSize.HEIGHT : CardImgSize.HEIGHT}
            alt="Place image"
          />
        </Link>
      </div>
      <div className={`${page}_card-info place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&nbsp;&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button
            ${offer.isFavorite && `place-card__bookmark-button--active`}
            button`}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">
              {offer.isFavorite ? `In bookmarks` : `To bookmarks`}
            </span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: getRatingStars(offer.rating)}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/:id`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{capitalize(offer.type)}</p>
      </div>
    </article>
  );
};

export default OffersItem;
