import React from "react";
import {useSelector} from "react-redux";

import {selectOffersByCity} from "../../store/data/selectors";

import {CardType} from "../const";

import OffersList from "../offers-list/offers-list";

const FavoritesList: React.FunctionComponent = () => {
  const offersByCity = useSelector(selectOffersByCity);

  return (
    <ul className="favorites__list">
      {Object.entries(offersByCity).map(([city, offers], i) =>
        <li
          key={`city-${i}`}
          className="favorites__locations-items"
        >
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link">
                <span>{city}</span>
              </a>
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
