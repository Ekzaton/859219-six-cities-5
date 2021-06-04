import React from "react";

import {OFFER_REVIEWS_COUNT} from "../../const";
import {Review} from "../../types";

import ReviewsItem from "../reviews-item/reviews-item";

type Props = {
  reviews: Review[];
}

const ReviewsList: React.FunctionComponent<Props> = (props: Props) => {
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
