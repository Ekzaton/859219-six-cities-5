import React from "react";
import {useSelector, useDispatch} from "react-redux";

import {fetchFavoriteOffers} from "../../store/data/api-actions";
import {selectFavoriteOffersByCity} from "../../store/data/selectors";

import FavoritesList from "../favorites-list/favorites-list";
import FavoritesPageEmpty from "../favorites-page-empty/favorites-page-empty";
import PageFooter from "../page-footer/page-footer";
import PageHeader from "../page-header/page-header";

const FavoritesPage: React.FunctionComponent = () => {
  const favoriteOffersByCity = useSelector(selectFavoriteOffersByCity);
  const noOffers = Object.keys(favoriteOffersByCity).length === 0;
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchFavoriteOffers());
  }, [dispatch]);

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
