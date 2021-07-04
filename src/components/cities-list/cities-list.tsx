import React from "react";
import {useDispatch} from "react-redux";

import {CityName} from "../../consts/common";

import {changeCurrentCity} from "../../store/all-offers/actions";

type CitiesListProps = {
  currentCity: CityName;
}

const CitiesList = (props: CitiesListProps): JSX.Element => {
  const {currentCity} = props;
  const dispatch = useDispatch();

  const cities = Object.values(CityName);

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city, i) =>
        <li
          key={`city-${i}`}
          className="locations__item"
        >
          <a
            className={`locations__item-link tabs__item ${city === currentCity && `tabs__item--active`}`}
            onClick={() => dispatch(changeCurrentCity(city))}
          >
            <span>{city}</span>
          </a>
        </li>
      )}
    </ul>
  );
};

export default React.memo(CitiesList);
