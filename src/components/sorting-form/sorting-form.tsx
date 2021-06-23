import React from "react";
import {useDispatch} from "react-redux";

import {SortingType} from "../../consts/common";

import {getCurrentSorting} from "../../store/app/actions";

type SortingFormProps = {
  currentSorting: SortingType;
}

const SortingForm = (props: SortingFormProps): JSX.Element => {
  const {currentSorting} = props;
  const dispatch = useDispatch();

  const [isOpened, setIsOpened] = React.useState(false);
  const sortings = Object.values(SortingType);

  const handleMouseOver = () => {
    setIsOpened(true);
  };

  const handleMouseOut = () => {
    setIsOpened(false);
  };

  return (
    <form
      className="places__sorting"
    >
      <span className="places__sorting-caption">Sort by&nbsp;</span>
      <span
        className="places__sorting-type"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        {currentSorting}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      <ul
        className={`places__options places__options--custom ${isOpened && `places__options--opened`}`}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        {sortings.map((sorting, i) =>
          <li
            key={`sorting-${i}`}
            className={`places__option ${sorting === currentSorting && `places__option--active`}`}
            onClick={() => dispatch(getCurrentSorting(sorting))}
          >
            {sorting}
          </li>
        )}
      </ul>
    </form>
  );
};

export default SortingForm;
