import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

import BookmarkButton from "../bookmark-button/bookmark-button";
import Map from "../map/map";
import OffersList from "../offers-list/offers-list";
import PageHeader from "../page-header/page-header";
import PageFooter from "../page-footer/page-footer";
import PageLoading from "../page-loading/page-loading";
import PageLoadingError from "../page-loading-error/page-loading-error";
import ReviewForm from "../review-form/review-form";
import ReviewsList from "../reviews-list/reviews-list";

import {AuthStatus} from "../../consts/common";
import {OFFER_IMAGES_COUNT, BtnType, CardType, MapType} from "../../consts/components";

import {setInitialState} from "../../store/single-offer/actions";

import {fetchNearbyOffers, fetchSingleOffer, fetchReviews} from "../../store/single-offer/api-actions";

import {selectNearbyOffers, selectOffer, selectSortedReviews, selectIsDataLoading, selectIsLoadingError} from "../../store/single-offer/selectors";
import {selectAuthStatus} from "../../store/user/selectors";

import {getOfferType, getRatingStars} from "../../utils/components";

const OfferPage = (): JSX.Element => {
  const dispatch = useDispatch();
  const offer = useSelector(selectOffer);
  const reviews = useSelector(selectSortedReviews);
  const nearbyOffers = useSelector(selectNearbyOffers);
  const isDataLoading = useSelector(selectIsDataLoading);
  const isLoadingError = useSelector(selectIsLoadingError);
  const authStatus = useSelector(selectAuthStatus);
  const {id} = useParams<{id: string}>();

  const noOffer = Object.keys(offer).length === 0;
  const offers = nearbyOffers.concat(offer);
  const isAuthorized = authStatus === AuthStatus.AUTH;

  React.useEffect(() => {
    dispatch(fetchNearbyOffers(id));
    dispatch(fetchReviews(id));
    dispatch(fetchSingleOffer(id));

    return () => {
      dispatch(setInitialState());
    };
  }, [dispatch, id]);

  if (isLoadingError) {
    return <PageLoadingError/>;
  }

  if (isDataLoading) {
    return <PageLoading/>;
  }

  return (
    <div className="page">
      <PageHeader/>

      {noOffer
        ? <div/>
        : <main
          className="page__main page__main--property"
          style={{paddingBottom: `0`}}
        >
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
                  <span className="property__rating-value rating__value">
                    {offer.rating}
                  </span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {getOfferType(offer.type)}
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
                      offer={offer}
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

      <PageFooter/>
    </div>
  );
};

export default OfferPage;
