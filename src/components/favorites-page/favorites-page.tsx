import React from "react";
import {useDispatch, useSelector} from "react-redux";

import FavoritesList from "../favorites-list/favorites-list";
import FavoritesPageEmpty from "../favorites-page-empty/favorites-page-empty";
import PageFooter from "../page-footer/page-footer";
import PageHeader from "../page-header/page-header";

import {fetchFavoriteOffers} from "../../store/data/api-actions";

import {selectFavoriteOffersByCity} from "../../store/data/selectors";

const FavoritesPage = (): JSX.Element => {
  const dispatch = useDispatch();
  const favoriteOffersByCity = useSelector(selectFavoriteOffersByCity);

  const noOffers = Object.keys(favoriteOffersByCity).length === 0;

  React.useEffect(() => {
    dispatch(fetchFavoriteOffers());
  }, [dispatch]);

  return (
    <div className="page">
      <PageHeader/>

      <main
        className={`page__main page__main--favorites ${noOffers && `page__main--favorites-empty`}`}
      >
        <div className="page__favorites-container container">
          {noOffers
            ? <FavoritesPageEmpty/>
            : <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <FavoritesList
                favoriteOffersByCity={favoriteOffersByCity}
              />
            </section>
          }
        </div>
      </main>

      <PageFooter/>
    </div>
  );
};

export default FavoritesPage;
