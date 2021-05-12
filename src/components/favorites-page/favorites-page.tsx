import React from "react";
import {Link} from "react-router-dom";

import {Page} from "../../const";
import {offerType} from "../../types";

import OffersList from "../offers-list/offers-list";
import PageHeader from "../page-header/page-header";

type Props = {
  offers: offerType[];
}

const FavoritesPage: React.FunctionComponent<Props> = (props: Props) => {
  const {offers} = props;

  return (
    <div className="page">
      <PageHeader/>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  <OffersList
                    offers={offers}
                    page={Page.FAVORITES}
                  />
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link
          className="footer__logo-link"
          to={`/`}
        >
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </div>
  );
};

export default FavoritesPage;
