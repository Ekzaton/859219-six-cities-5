import React from "react";
import {useDispatch} from "react-redux";

import {CityName} from "../../consts/common";

import {getCurrentCity} from "../../store/app/actions";

type Props = {
  currentCity: CityName;
}

const CitiesList: React.FunctionComponent<Props> = (props: Props) => {
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
            onClick={() => dispatch(getCurrentCity(city))}
          >
            <span>{city}</span>
          </a>
        </li>
      )}
    </ul>
  );
};

export default React.memo(CitiesList);
