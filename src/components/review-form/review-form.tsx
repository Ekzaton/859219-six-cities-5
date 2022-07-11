import React, {useEffect, useMemo, useState, useRef, ChangeEvent, FormEvent, Fragment} from "react";
import {useDispatch, useSelector} from "react-redux";

import {RATING_STARS_COUNT, ReviewLength} from "../../consts/components";
import {sendReview} from "../../store/property/api-actions";
import {selectIsSending, selectSendingError} from "../../store/property/selectors";
import {Offer} from "../../types/common";
import {getRatingArray, validateComment} from "../../utils/components";

type ReviewFormProps = {
  offer: Offer;
}

const ReviewForm = (props: ReviewFormProps): JSX.Element => {
  const {offer} = props;

  const dispatch = useDispatch();
  const isSending = useSelector(selectIsSending);
  const sendingError = useSelector(selectSendingError);

  const initialReview = useMemo(() => ({
    rating: 0,
    comment: ``,
    isValidRating: false,
    isValidComment: false
  }), []);

  const [review, setReview] = useState(initialReview);
  const {rating, comment, isValidRating, isValidComment} = review;
  const isValidForm = isValidRating && isValidComment;
  const isFirstRunRef = useRef(true);

  useEffect(() => {
    if (isFirstRunRef.current) {
      isFirstRunRef.current = false;
    } else if (!isSending && !sendingError) {
      setReview(initialReview);
    }
  }, [initialReview, isSending, sendingError]);

  return (
    <form
      className="reviews__form form"
      onSubmit={(evt: FormEvent) => {
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
            <Fragment key={`input-${i}`}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={ratingStar}
                id={`${ratingStar}-stars`}
                type="radio"
                checked={rating === ratingStar}
                onChange={(evt: ChangeEvent<HTMLInputElement>) => {
                  const value = Number(evt.target.value);
                  setReview((currentReview) => ({
                    ...currentReview,
                    rating: value,
                    isValidRating: !!value
                  }));
                }}
                disabled={isSending}
              />
              <label
                htmlFor={`${ratingStar}-stars`}
                className="reviews__rating-label form__rating-label"
              >
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"/>
                </svg>
              </label>
            </Fragment>
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
        onChange={(evt: ChangeEvent<HTMLTextAreaElement>) => {
          const value = evt.target.value;
          setReview((currentReview) => ({
            ...currentReview,
            comment: value,
            isValidComment: validateComment(value)
          }));
        }}
        disabled={isSending}
      />
      <div className="reviews__button-wrapper">
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isValidForm || isSending}
        >
          Submit
        </button>
        <p className="reviews__help">
          {
            !isValidForm && <>
              To submit review please make sure to set <span className="reviews__star">rating </span>
              and describe your stay with at least <b className="reviews__text-amount">{ReviewLength.MIN} </b>
              but at most <b className="reviews__text-amount">{ReviewLength.MAX} </b>characters
            </>
            || isSending && `Sending review... Please wait`
            || sendingError && `Error ${sendingError.status}: ${sendingError.statusText}. Please try agaian later`
          }
        </p>
      </div>
    </form>
  );
};

export default ReviewForm;
