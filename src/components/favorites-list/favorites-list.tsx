import React from "react";

import {CardType} from "../const";
import {Offer} from "../types";

import OffersList from "../offers-list/offers-list";

type Props = {
  offersByCity: Record<string, Offer[]>;
}

const FavoritesList: React.FunctionComponent<Props> = (props: Props) => {
  const {offersByCity} = props;

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
