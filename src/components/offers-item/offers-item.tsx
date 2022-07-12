import React, {useCallback} from "react";
import {Link} from "react-router-dom";

import {AppRoute} from "../../consts/common";
import {BtnType, CardImgSize, CardType, FavCardImgSize} from "../../consts/components";
import {useAppDispatch, useAppSelector} from "../../hooks/store";
import {selectIsAuthorized} from "../../store/login/selectors";
import {setActiveOfferID} from "../../store/main/actions";
import {Offer} from "../../types/common";
import {getOfferType, getRatingStars} from "../../utils/components";

import BookmarkButton from "../bookmark-button/bookmark-button";

type OffersItemProps = {
  offer: Offer;
  type: CardType;
}

const OffersItem = (props: OffersItemProps): JSX.Element => {
  const {offer, type} = props;

  const dispatch = useAppDispatch();
  const isAuthorized = useAppSelector(selectIsAuthorized);

  const handleMouseEnter = useCallback(() => {
    dispatch(setActiveOfferID(offer.id));
  }, [offer]);

  const handleMouseLeave = useCallback(() => {
    dispatch(setActiveOfferID(null));
  }, []);

  return (
    <article
      className={`${type}__${type === CardType.CITIES ? `place-card` : `card`} place-card`}
      onMouseEnter={type === CardType.CITIES ? handleMouseEnter : undefined}
      onMouseLeave={type === CardType.CITIES ? handleMouseLeave : undefined}
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
          {isAuthorized &&
            <BookmarkButton
              offer={offer}
              type={BtnType.PLACE_CARD}
            />
          }
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
