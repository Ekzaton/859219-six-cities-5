import React from "react";
import {Link} from "react-router-dom";

import BookmarkButton from "../bookmark-button/bookmark-button";

import {AppRoute} from "../../consts/common";
import {CardImgSize, CardType, BtnType, FavCardImgSize} from "../../consts/components";

import {getOfferType, getRatingStars} from "../../utils/components";

import {Offer} from "../../types";

type Props = {
  offer: Offer;
  type: CardType;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const OffersItem: React.FunctionComponent<Props> = (props: Props) => {
  const {offer, type, onMouseEnter, onMouseLeave} = props;

  return (
    <article
      className={`${type}__${type === CardType.CITIES ? `place-card` : `card`} place-card`}
      onMouseEnter={type === CardType.CITIES ? onMouseEnter : undefined}
      onMouseLeave={type === CardType.CITIES ? onMouseLeave : undefined}
    >
      {offer.isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className={`${type}__image-wrapper place-card__image-wrapper`}>
        <Link to={`${AppRoute.OFFER}${offer.id}`}>
          <img
            className="place-card__image"
            src={offer.previewImage}
            width={type === CardType.FAVORITES ? FavCardImgSize.WIDTH : CardImgSize.WIDTH}
            height={type === CardType.FAVORITES ? FavCardImgSize.HEIGHT : CardImgSize.HEIGHT}
            alt="Place image"
          />
        </Link>
      </div>
      <div className={`${type}_card-info place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&nbsp;&#47;&nbsp;night</span>
          </div>
          <BookmarkButton
            offer={offer}
            type={BtnType.PLACE_CARD}
          />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: getRatingStars(offer.rating)}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.OFFER}${offer.id}`}>
            {offer.title}
          </Link>
        </h2>
        <p className="place-card__type">
          {getOfferType(offer.type)}
        </p>
      </div>
    </article>
  );
};

export default OffersItem;
