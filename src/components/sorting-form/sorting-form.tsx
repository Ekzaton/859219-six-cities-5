import React from "react";
import {useSelector, useDispatch} from "react-redux";

import {ActionCreator} from "../../store/actions";
import {selectCurrentSorting} from "../../store/selectors";

import {SortingType} from "../const";

const SortingForm: React.FunctionComponent = () => {
  const [isOpened, setIsOpened] = React.useState(false);
  const sortings = Object.values(SortingType);
  const currentSorting = useSelector(selectCurrentSorting);
  const dispatch = useDispatch();

  return (
    <form
      className="places__sorting"
      action="#"
      method="get"
    >
      <span className="places__sorting-caption">Sort by&nbsp;</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onMouseOver={() => setIsOpened(true)}
        onMouseOut={() => setIsOpened(false)}
      >
        {currentSorting}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      <ul
        className={`places__options places__options--custom ${isOpened && `places__options--opened`}`}
        onMouseOver={() => setIsOpened(true)}
        onMouseOut={() => setIsOpened(false)}
      >
        {sortings.map((sorting, i) =>
          <li
            key={`sorting-${i}`}
            className={`places__option ${sorting === currentSorting && `places__option--active`}`}
            tabIndex={0}
            onClick={() => dispatch(ActionCreator.getCurrentSorting(sorting))}
          >
            {sorting}
          </li>
        )}
      </ul>
    </form>
  );
};

export default SortingForm;
