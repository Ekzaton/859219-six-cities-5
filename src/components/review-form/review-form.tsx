import React from "react";

import {RATING_STARS_COUNT} from "../../const";
import {getArray} from "../../utils";

const ReviewForm: React.FunctionComponent = () => {
  const [rating, setRating] = React.useState(1);
  const [review, setReview] = React.useState(``);

  return (
    <form className="reviews__form form" action="#" method="post">
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
        value={review}
        required
        onChange={(evt: React.ChangeEvent<HTMLTextAreaElement>) => setReview(evt.target.value)}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span>&nbsp;
          and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit">Submit</button>
      </div>
    </form>
  );
};

export default ReviewForm;
