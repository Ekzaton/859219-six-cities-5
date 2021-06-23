import React from "react";
import {useSelector} from "react-redux";

import CitiesList from "../cities-list/cities-list";
import MainPageEmpty from "../main-page-empty/main-page-empty";
import Map from "../map/map";
import OffersList from "../offers-list/offers-list";
import PageHeader from "../page-header/page-header";
import SortingForm from "../sorting-form/sorting-form";

import {CardType, HeaderType, MapType} from "../../consts/components";

import {selectActiveOfferID, selectCurrentCity, selectCurrentSorting} from "../../store/app/selectors";
import {selectSortedOffers} from "../../store/data/selectors";

const MainPage = (): JSX.Element => {
  const activeOfferID = useSelector(selectActiveOfferID);
  const currentCity = useSelector(selectCurrentCity);
  const currentSorting = useSelector(selectCurrentSorting);
  const offers = useSelector(selectSortedOffers);

  const noOffers = offers.length === 0;

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
            ? <MainPageEmpty
              currentCity={currentCity}
            />
            : <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">
                  {offers.length} places to stay in {currentCity}
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
