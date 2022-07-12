import React, {useEffect} from "react";

import {DELAY_DURATION, CardType, HeaderType, MapType} from "../../consts/components";
import {useAppDispatch, useAppSelector} from "../../hooks/store";
import {fetchAllOffers} from "../../store/main/api-actions";

import CitiesList from "../cities-list/cities-list";
import Delay from "../delay/delay";
import ErrorPage from "../error-page/error-page";
import LoadingPage from "../loading-page/loading-page";
import MainPageEmpty from "../main-page-empty/main-page-empty";
import Map from "../map/map";
import OffersList from "../offers-list/offers-list";
import PageHeader from "../page-header/page-header";
import SortingForm from "../sorting-form/sorting-form";

import {
  selectActiveOfferID,
  selectCurrentCity,
  selectCurrentSorting,
  selectIsLoading,
  selectLoadingError,
  selectSortedOffers,
  selectNoSortedOffers,
  selectSortedOffersCount
} from "../../store/main/selectors";

const MainPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const activeOfferID = useAppSelector(selectActiveOfferID);
  const currentCity = useAppSelector(selectCurrentCity);
  const currentSorting = useAppSelector(selectCurrentSorting);
  const isLoading = useAppSelector(selectIsLoading);
  const loadingError = useAppSelector(selectLoadingError);
  const offers = useAppSelector(selectSortedOffers);
  const offersCount = useAppSelector(selectSortedOffersCount);
  const noOffers = useAppSelector(selectNoSortedOffers);

  useEffect(() => {
    dispatch(fetchAllOffers());
  }, []);

  if (isLoading) {
    return (
      <Delay
        duration={DELAY_DURATION}
      >
        <LoadingPage/>
      </Delay>
    );
  }

  if (loadingError) {
    return (
      <ErrorPage
        loadingError={loadingError}
      />
    );
  }

  return (
    <div className={`page page--gray page--main ${noOffers && `page__main--index-empty`}`}>
      <PageHeader
        type={HeaderType.MAIN}
      />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList
              currentCity={currentCity}
            />
          </section>
        </div>
        <div className="cities">
          {noOffers
            ? <Delay
              duration={DELAY_DURATION}
            >
              <MainPageEmpty
                currentCity={currentCity}
              />
            </Delay>
            : <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">
                  {offersCount} places to stay in {currentCity}
                </b>
                <SortingForm
                  currentSorting={currentSorting}
                />
                <div className="cities__places-list places__list tabs__content">
                  <OffersList
                    offers={offers}
                    type={CardType.CITIES}
                  />
                </div>
              </section>
              <div className="cities__right-section">
                <Map
                  activeOfferID={activeOfferID}
                  offers={offers}
                  type={MapType.CITIES}
                />
              </div>
            </div>
          }
        </div>
      </main>
    </div>
  );
};

export default MainPage;
