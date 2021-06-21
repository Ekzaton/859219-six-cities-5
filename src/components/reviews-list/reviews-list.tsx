import React from "react";

import ReviewsItem from "../reviews-item/reviews-item";

import {OFFER_REVIEWS_COUNT} from "../../consts/components";

import {Review} from "../../types/common";

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
