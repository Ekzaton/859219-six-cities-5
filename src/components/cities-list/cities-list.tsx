import React from "react";
import {useDispatch} from "react-redux";

import {getCurrentFiltering} from "../../store/app/actions";

import {FilteringType} from "../../const";

type Props = {
  currentCity: FilteringType;
}

const CitiesList: React.FunctionComponent<Props> = (props: Props) => {
  const {currentCity} = props;
  const cities = Object.values(FilteringType);
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
            onClick={() => dispatch(getCurrentFiltering(city))}
          >
            <span>{city}</span>
          </a>
        </li>
      )}
    </ul>
  );
};

export default React.memo(CitiesList);
