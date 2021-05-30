import React from "react";
import {useSelector} from "react-redux";

import {selectFavoriteOffers} from "../../store/data/selectors";

import FavoritesList from "../favorites-list/favorites-list";
import FavoritesPageEmpty from "../favorites-page-empty/favorites-page-empty";
import PageFooter from "../page-footer/page-footer";
import PageHeader from "../page-header/page-header";

const FavoritesPage: React.FunctionComponent = () => {
  const offers = useSelector(selectFavoriteOffers);
  const noOffers = offers.length === 0;

  return (
    <div className="page">
      <PageHeader/>

      <main
        className={`page__main page__main--favorites ${noOffers && `page__main--favorites-empty`}`}>
        <div className="page__favorites-container container">
          {noOffers
            ? <FavoritesPageEmpty/>
            : <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <FavoritesList/>
            </section>
          }
        </div>
      </main>

      <PageFooter/>
    </div>
  );
};

export default FavoritesPage;
