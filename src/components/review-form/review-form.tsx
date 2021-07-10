import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {RATING_STARS_COUNT, ReviewLehgth} from "../../consts/components";

import {sendReview} from "../../store/review/api-actions";

import {selectIsDataSending, selectIsSendingError} from "../../store/review/selectors";

import {Offer} from "../../types/common";

import {getRatingArray, validateComment} from "../../utils/components";

type ReviewFormProps = {
  offer: Offer;
}

const ReviewForm = (props: ReviewFormProps): JSX.Element => {
  const {offer} = props;
  const dispatch = useDispatch();
  const isDataSending = useSelector(selectIsDataSending);
  const isSendingError = useSelector(selectIsSendingError);

  const initialReview = React.useMemo(() => ({
    rating: 0,
    comment: ``,
    isValidRating: false,
    isValidComment: false
  }), []);

  const [review, setReview] = React.useState(initialReview);
  const rating = review.rating;
  const comment = review.comment;
  const isValidRating = review.isValidRating;
  const isValidComment = review.isValidComment;
  const isValidForm = isValidRating && isValidComment;
  const isFirstRunRef = React.useRef(true);

  React.useEffect(() => {
    if (isFirstRunRef.current) {
      isFirstRunRef.current = false;
    } else if (!isDataSending && !isSendingError) {
      setReview(initialReview);
    }
  }, [initialReview, isDataSending, isSendingError]);

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
        {getRatingArray(RATING_STARS_COUNT).map((_input, i) => {
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
                onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
                  const value = Number(evt.target.value);
                  setReview((currentReview) => ({
                    ...currentReview,
                    rating: value,
                    isValidRating: !!value
                  }));
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
          const value = evt.target.value;
          setReview((currentReview) => ({
            ...currentReview,
            comment: value,
            isValidComment: validateComment(value)
          }));
        }}
        disabled={isDataSending}
      />
      <div className="reviews__button-wrapper">
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isValidForm || isDataSending}
        >
          Submit
        </button>
        <p className="reviews__help">
          {
            !isValidForm && <React.Fragment>
              To submit review please make sure to set <span className="reviews__star">rating </span>
              and describe your stay with at least <b className="reviews__text-amount">{ReviewLehgth.MIN} </b>
              but at most <b className="reviews__text-amount">{ReviewLehgth.MAX} </b>characters
            </React.Fragment>
            || isDataSending && `Sending review... Please wait`
            || isSendingError && `Sending error! Please try again later`
          }
        </p>
      </div>
    </form>
  );
};

export default ReviewForm;
