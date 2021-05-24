import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {ActionCreator} from "../../store/actions";
import {selectCities, selectCurrentFilter} from "../../store/selectors";

const CitiesList: React.FunctionComponent = () => {
  const cities = useSelector(selectCities);
  const currentFilter = useSelector(selectCurrentFilter);
  const dispatch = useDispatch();

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city, i) =>
        <li
          key={`city-${i}`}
          className="locations__item"
        >
          <a
            className={`locations__item-link tabs__item ${city === currentFilter && `tabs__item--active`}`}
            onClick={(evt: React.MouseEvent<HTMLAnchorElement>) => {
              evt.preventDefault();
              dispatch(ActionCreator.getCurrentFilter(city));
            }}
          >
            <span>{city}</span>
          </a>
        </li>
      )}
    </ul>
  );
};

export default CitiesList;
