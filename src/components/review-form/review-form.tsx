import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {RATING_STARS_COUNT} from "../../consts/components";

import {sendReview} from "../../store/review/api-actions";

import {selectIsDataSending, selectIsSendingError} from "../../store/review/selectors";

import {getRatingArray, validateComment} from "../../utils/components";

import {Offer} from "../../types/common";

type ReviewFormProps = {
  offer: Offer;
}

const ReviewForm = (props: ReviewFormProps): JSX.Element => {
  const {offer} = props;
  const dispatch = useDispatch();
  const isDataSending = useSelector(selectIsDataSending);
  const isSendingError = useSelector(selectIsSendingError);

  const [rating, setRating] = React.useState(0);
  const [comment, setComment] = React.useState(``);
  const [isValidRating, setIsValidRating] = React.useState(false);
  const [isValidComment, setIsValidComment] = React.useState(false);

  React.useEffect(() => {
    if (!isDataSending && !isSendingError) {
      setRating(0);
      setIsValidRating(false);
      setComment(``);
      setIsValidComment(false);
    }
  }, [isDataSending, isSendingError]);

  return (
    <form
      className="reviews__form form"
      onSubmit={(evt: React.FormEvent) => {
        evt.preventDefault();
        dispatch(sendReview(offer.id, {rating, comment}));
      }}
    >
      <label
        className="reviews__label form__label"
        htmlFor="review"
      >
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {getRatingArray(RATING_STARS_COUNT).map((input, i) => {
          const ratingStar = RATING_STARS_COUNT - i;

          return (
            <React.Fragment key={`input-${i}`}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={ratingStar}
                id={`${ratingStar}-stars`}
                type="radio"
                checked={rating === ratingStar}
                onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>{
                  setRating(Number(evt.target.value));
                  setIsValidRating(!!Number(evt.target.value));
                }}
                disabled={isDataSending}
              />
              <label
                htmlFor={`${ratingStar}-stars`}
                className="reviews__rating-label form__rating-label"
              >
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"/>
                </svg>
              </label>
            </React.Fragment>
          );
        })}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={comment}
        required
        onChange={(evt: React.ChangeEvent<HTMLTextAreaElement>) => {
          setComment(evt.target.value);
          setIsValidComment(validateComment(evt.target.value));
        }}
        disabled={isDataSending}
      />
      <div className="reviews__button-wrapper">
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!(isValidRating && isValidComment) || isDataSending}
        >
          Submit
        </button>
        {
          !(isValidRating && isValidComment) && <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span>&nbsp;
            and describe your stay with at least <b className="reviews__text-amount">50</b>&nbsp;
            but at most <b className="reviews__text-amount">300</b> characters
          </p>
            ||
          isDataSending && <p className="reviews__help" style={{color: `red`}}>
            Sending data... Please wait
          </p>
            ||
          isSendingError && <p className="reviews__help" style={{color: `red`}}>
            Sending error! Please try again later
          </p>
        }
      </div>
    </form>
  );
};

export default ReviewForm;
