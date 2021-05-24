import React from "react";
import {useSelector, useDispatch} from "react-redux";

import {ActionCreator} from "../../store/actions";
import {selectCurrentSorting} from "../../store/selectors";

import {SortingType} from "../const";

const SortingForm: React.FunctionComponent = () => {
  const listRef = React.useRef(null);
  const sortings = Object.values(SortingType);
  const currentSorting = useSelector(selectCurrentSorting);
  const dispatch = useDispatch();

  const handleListClick = () => {
    if (listRef && listRef.current) {
      listRef.current.classList.toggle(`places__options--opened`);
    }
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by&nbsp;</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={handleListClick}
      >
        {currentSorting}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      <ul
        ref={listRef}
        className="places__options places__options--custom"
        onClick={handleListClick}
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
