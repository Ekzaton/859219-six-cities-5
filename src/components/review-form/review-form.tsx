import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {setIsDataSending} from "../../store/data/actions";

import {sendReview} from "../../store/data/api-actions";

import {selectIsDataSending, selectIsSendingError} from "../../store/data/selectors";

import {RATING_STARS_COUNT} from "../../const";
import {getArray, validateComment} from "../../utils";

type Props = {
  id: number;
}

const ReviewForm: React.FunctionComponent<Props> = (props: Props) => {
  const {id} = props;
  const [rating, setRating] = React.useState(1);
  const [comment, setReview] = React.useState(``);
  const [isValid, setIsValid] = React.useState(false);
  const isDataSending = useSelector(selectIsDataSending);
  const isSendingError = useSelector(selectIsSendingError);
  const dispatch = useDispatch();

  return (
    <form
      className="reviews__form form"
      onSubmit={(evt: React.FormEvent) => {
        evt.preventDefault();
        dispatch(setIsDataSending(true));
        dispatch(sendReview(id, {rating, comment}));
      }}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {getArray(RATING_STARS_COUNT).map((input, i) =>
          <React.Fragment key={`input-${i}`}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={RATING_STARS_COUNT - i}
              id={`${RATING_STARS_COUNT - i}-stars`}
              type="radio"
              checked={rating === RATING_STARS_COUNT - i}
              onChange={(evt: React.ChangeEvent<HTMLInputElement>) => setRating(Number(evt.target.value))}
              disabled={isDataSending}
            />
            <label
              htmlFor={`${RATING_STARS_COUNT - i}-stars`}
              className="reviews__rating-label form__rating-label"
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"/>
              </svg>
            </label>
          </React.Fragment>
        )}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={comment}
        required
        onChange={(evt: React.ChangeEvent<HTMLTextAreaElement>) => {
          setReview(evt.target.value);
          setIsValid(validateComment(evt.target.value));
        }}
        disabled={isDataSending}
      />
      <div className="reviews__button-wrapper">
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isValid || isDataSending}
        >
          Submit
        </button>
        {
          (!isValid && <p className="reviews__help">
           To submit review please make sure to set <span className="reviews__star">rating</span>&nbsp;
            and describe your stay with at least <b className="reviews__text-amount">50 characters</b>
          </p>)
            ||
          (isDataSending && <p className="reviews__help" style={{color: `red`}}>Sending data. Please wait...</p>)
            ||
          (isSendingError && <p className="reviews__help" style={{color: `red`}}>Sending error! Please try again later...</p>)
        }
      </div>
    </form>
  );
};

export default ReviewForm;
