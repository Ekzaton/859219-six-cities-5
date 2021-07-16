import React, {memo} from "react";
import {useDispatch} from "react-redux";

import {CityName} from "../../consts/common";

import {setCurrentCity} from "../../store/main/actions";

type CitiesListProps = {
  currentCity: CityName;
}

const CitiesList = (props: CitiesListProps): JSX.Element => {
  const {currentCity} = props;
  const cities = Object.values(CityName);

  const dispatch = useDispatch();

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city, i) =>
        <li
          key={`city-${i}`}
          className="locations__item"
        >
          <a
            className={`locations__item-link tabs__item ${city === currentCity && `tabs__item--active`}`}
            onClick={() => dispatch(setCurrentCity(city))}
          >
            <span>{city}</span>
          </a>
        </li>
      )}
    </ul>
  );
};

export default memo(CitiesList);
