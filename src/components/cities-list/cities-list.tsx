import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {ActionCreator} from "../../store/actions";
import {selectCurrentFiltering} from "../../store/selectors";

import {FilteringType} from "../const";

const CitiesList: React.FunctionComponent = () => {
  const cities = Object.values(FilteringType);
  const currentCity = useSelector(selectCurrentFiltering);
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
            onClick={(evt: React.MouseEvent<HTMLAnchorElement>) => {
              evt.preventDefault();
              dispatch(ActionCreator.getCurrentFiltering(city));
            }}
          >
            <span>{city}</span>
          </a>
        </li>
      )}
    </ul>
  );
};

export default React.memo(CitiesList);
