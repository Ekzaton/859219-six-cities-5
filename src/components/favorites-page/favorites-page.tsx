import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import Delay from "../delay/delay";
import ErrorPage from "../error-page/error-page";
import FavoritesList from "../favorites-list/favorites-list";
import FavoritesPageEmpty from "../favorites-page-empty/favorites-page-empty";
import LoadingPage from "../loading-page/loading-page";
import PageFooter from "../page-footer/page-footer";
import PageHeader from "../page-header/page-header";

import {DELAY_DURATION} from "../../consts/components";

import {fetchFavoriteOffers} from "../../store/favorites/api-actions";

import {selectOffersByCity, selectNoOffers, selectIsLoading, selectLoadingError} from "../../store/favorites/selectors";

const FavoritesPage = (): JSX.Element => {
  const dispatch = useDispatch();
  const offersByCity = useSelector(selectOffersByCity);
  const noOffers = useSelector(selectNoOffers);
  const isLoading = useSelector(selectIsLoading);
  const loadingError = useSelector(selectLoadingError);

  useEffect(() => {
    dispatch(fetchFavoriteOffers());
  }, [dispatch]);

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
    <div className="page">
      <PageHeader/>

      <main
        className={`page__main page__main--favorites ${noOffers && `page__main--favorites-empty`}`}
      >
        <div className="page__favorites-container container">
          {noOffers
            ? <Delay
              duration={DELAY_DURATION}
            >
              <FavoritesPageEmpty/>
            </Delay>
            : <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <FavoritesList
                offersByCity={offersByCity}
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
