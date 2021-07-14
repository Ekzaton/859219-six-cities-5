import React, {memo, useState} from "react";
import {useDispatch} from "react-redux";

import {SortingType} from "../../consts/common";

import {setCurrentSorting} from "../../store/main/actions";

type SortingFormProps = {
  currentSorting: SortingType;
}

const SortingForm = (props: SortingFormProps): JSX.Element => {
  const {currentSorting} = props;
  const sortings = Object.values(SortingType);

  const dispatch = useDispatch();

  const [isOpened, setIsOpened] = useState(false);

  const onMouseOver = () => {
    setIsOpened(true);
  };

  const onMouseOut = () => {
    setIsOpened(false);
  };

  return (
    <form
      className="places__sorting"
    >
      <span className="places__sorting-caption">Sort by&nbsp;</span>
      <span
        className="places__sorting-type"
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
      >
        {currentSorting}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      <ul
        className={`places__options places__options--custom ${isOpened && `places__options--opened`}`}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
      >
        {sortings.map((sorting, i) =>
          <li
            key={`sorting-${i}`}
            className={`places__option ${sorting === currentSorting && `places__option--active`}`}
            onClick={() => dispatch(setCurrentSorting(sorting))}
          >
            {sorting}
          </li>
        )}
      </ul>
    </form>
  );
};

export default memo(SortingForm);
