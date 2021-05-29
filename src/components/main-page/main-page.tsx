import React from "react";
import {useSelector} from "react-redux";

import {selectSortedOffers, selectCurrentFiltering} from "../../store/selectors";

import {CardType, MapType} from "../const";

import MainPageEmpty from "../main-page-empty/main-page-empty";
import Map from "../map/map";
import CitiesList from "../cities-list/cities-list";
import OffersList from "../offers-list/offers-list";
import PageHeader from "../page-header/page-header";
import SortingForm from "../sorting-form/sorting-form";

const MainPage: React.FunctionComponent = () => {
  const offers = useSelector(selectSortedOffers);
  const currentCity = useSelector(selectCurrentFiltering);
  const noOffers = offers.length === 0;

  return (
    <div className={`page page--gray page--main ${noOffers && `page__main--index-empty`}`}>
      <PageHeader/>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList/>
          </section>
        </div>
        <div className="cities">
          {noOffers
            ? <MainPageEmpty/>
            : <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offers.length} places to stay in {currentCity}</b>
                <SortingForm/>
                <div className="cities__places-list places__list tabs__content">
                  <OffersList
                    offers={offers}
                    type={CardType.CITIES}
                  />
                </div>
              </section>
              <div className="cities__right-section">
                <Map
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
