import React from "react";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";

import {getCurrentFiltering} from "../../store/app/actions";

import {CardType, FilteringType} from "../../const";
import {Offer} from "../../types";

import OffersList from "../offers-list/offers-list";

type Props = {
  offersByCity: Record<string, Offer[]>;
}

const FavoritesList: React.FunctionComponent<Props> = (props: Props) => {
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
                to={`/`}
                className="locations__item-link"
                onClick={() => dispatch(getCurrentFiltering(city as FilteringType))}
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
