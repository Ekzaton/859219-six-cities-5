import React from "react";
import {useDispatch, useSelector} from "react-redux";

import Delay from "../delay/delay";
import FavoritesList from "../favorites-list/favorites-list";
import FavoritesPageEmpty from "../favorites-page-empty/favorites-page-empty";
import PageFooter from "../page-footer/page-footer";
import PageHeader from "../page-header/page-header";
import PageLoading from "../page-loading/page-loading";
import PageLoadingError from "../page-loading-error/page-loading-error";

import {fetchFavoriteOffers} from "../../store/favorite-offers/api-actions";

import {selectFavoriteOffersByCity, selectIsDataLoading, selectIsLoadingError} from "../../store/favorite-offers/selectors";

const FavoritesPage = (): JSX.Element => {
  const dispatch = useDispatch();
  const favoriteOffersByCity = useSelector(selectFavoriteOffersByCity);
  const isDataLoading = useSelector(selectIsDataLoading);
  const isLoadingError = useSelector(selectIsLoadingError);

  const noOffers = Object.keys(favoriteOffersByCity).length === 0;

  React.useEffect(() => {
    dispatch(fetchFavoriteOffers());
  }, [dispatch]);

  if (isLoadingError) {
    return <PageLoadingError/>;
  }

  if (isDataLoading) {
    return <PageLoading/>;
  }

  return (
    <div className="page">
      <PageHeader/>

      <main
        className={`page__main page__main--favorites ${noOffers && `page__main--favorites-empty`}`}
      >
        <div className="page__favorites-container container">
          {noOffers
            ? <Delay waiting={100}>
              <FavoritesPageEmpty/>
            </Delay>
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
