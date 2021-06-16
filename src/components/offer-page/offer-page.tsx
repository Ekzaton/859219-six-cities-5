import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

import {fetchNearbyOffers, fetchSingleOffer, fetchSingleOfferReviews} from "../../store/data/api-actions";

import {selectNearbyOffers, selectSingleOffer, selectSingleOfferReviews} from "../../store/data/selectors";
import {selectAuthStatus} from "../../store/user/selectors";

import {OFFER_IMAGES_COUNT, AuthStatus, CardType, BtnType, MapType} from "../../const";
import {capitalize, getRatingStars} from "../../utils";

import BookmarkButton from "../bookmark-button/bookmark-button";
import Map from "../map/map";
import OfferPageLoading from "../offer-page-loading/offer-page-loading";
import OffersList from "../offers-list/offers-list";
import PageHeader from "../page-header/page-header";
import ReviewForm from "../review-form/review-form";
import ReviewsList from "../reviews-list/reviews-list";

const OfferPage: React.FunctionComponent = () => {
  const offer = useSelector(selectSingleOffer);
  const reviews = useSelector(selectSingleOfferReviews);
  const nearbyOffers = useSelector(selectNearbyOffers);
  const authStatus = useSelector(selectAuthStatus);

  const offers = nearbyOffers.concat(offer);
  const noOffer = Object.keys(offer).length === 0;
  const isAuthorized = authStatus === AuthStatus.AUTH;
  const {id} = useParams<{id: string}>();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchSingleOffer(id));
    dispatch(fetchSingleOfferReviews(id));
    dispatch(fetchNearbyOffers(id));
  }, [dispatch, id]);

  return (
    <div className="page">
      <PageHeader/>

      {noOffer
        ? <OfferPageLoading/>
        : <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {offer.images.slice(0, OFFER_IMAGES_COUNT).map((image, i) =>
                  <div
                    key={`image-${i}`}
                    className="property__image-wrapper"
                  >
                    <img
                      className="property__image"
                      src={image}
                      alt="Photo studio"
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {offer.isPremium &&
                  <div className="property__mark">
                    <span>Premium</span>
                  </div>
                }
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {offer.title}
                  </h1>
                  <BookmarkButton
                    offer={offer}
                    type={BtnType.PROPERTY}
                  />
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: getRatingStars(offer.rating)}}/>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">4.8</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {capitalize(offer.type)}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {offer.bedrooms} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {offer.maxAdults} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{offer.price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {offer.goods.map((good, i) =>
                      <li
                        key={`good-${i}`}
                        className="property__inside-item"
                      >
                        {good}
                      </li>
                    )}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                      <img
                        className="property__avatar user__avatar"
                        src={offer.host.avatarUrl}
                        width="74"
                        height="74"
                        alt="Host avatar"
                      />
                    </div>
                    <span className="property__user-name">
                      {offer.host.name}
                    </span>
                    {offer.host.isPro &&
                      <span className="property__user-status">
                        Pro
                      </span>
                    }
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {offer.description}
                    </p>
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <h2 className="reviews__title">
                    Reviews &middot;
                    <span className="reviews__amount">
                      {reviews.length}
                    </span>
                  </h2>
                  <ReviewsList
                    reviews={reviews}
                  />
                  {isAuthorized &&
                    <ReviewForm
                      id={offer.id}
                    />
                  }
                </section>
              </div>
            </div>
            <Map
              activeOfferID={offer.id}
              offers={offers}
              type={MapType.PROPERTY}
            />
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                <OffersList
                  offers={nearbyOffers}
                  type={CardType.NEAR_PLACES}
                />
              </div>
            </section>
          </div>
        </main>
      }
    </div>
  );
};

export default OfferPage;
