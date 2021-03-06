import React from "react";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";

import OffersList from "../offers-list/offers-list";

import {AppRoute, CityName} from "../../consts/common";
import {CardType} from "../../consts/components";

import {setCurrentCity} from "../../store/main/actions";

import {Offer} from "../../types/common";

type FavoritesListProps = {
  offersByCity: Record<CityName, Offer[]>;
}

const FavoritesList = (props: FavoritesListProps): JSX.Element => {
  const {offersByCity} = props;

  const dispatch = useDispatch();

  return (
    <ul className="favorites__list">
      {Object.entries(offersByCity).map(([city, offers], i) =>
        <li
          key={`city-${i}`}
          className="favorites__locations-items"
        >
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <Link
                to={AppRoute.MAIN}
                className="locations__item-link"
                onClick={() => dispatch(setCurrentCity(city as CityName))}
              >
                <span>{city}</span>
              </Link>
            </div>
          </div>
          <div className="favorites__places">
            <OffersList
              offers={offers}
              type={CardType.FAVORITES}
            />
          </div>
        </li>
      )}
    </ul>
  );
};

export default FavoritesList;
