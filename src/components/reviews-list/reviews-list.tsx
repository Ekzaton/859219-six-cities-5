import React from "react";

import {OFFER_REVIEWS_COUNT} from "../../consts/components";
import {Review} from "../../types/common";

import ReviewsItem from "../reviews-item/reviews-item";

type ReviewsListProps = {
  reviews: Review[];
}

const ReviewsList = (props: ReviewsListProps): JSX.Element => {
  const {reviews} = props;

  return (
    <ul className="reviews__list">
      {reviews.slice(0, OFFER_REVIEWS_COUNT).map((review, i) =>
        <ReviewsItem
          key={`review-${i}`}
          review={review}
        />
      )}
    </ul>
  );
};

export default ReviewsList;
