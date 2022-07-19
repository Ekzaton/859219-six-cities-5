import React from "react";

import {CardType} from "../../consts/components";
import {Offer} from "../../types/common";

import OffersItem from "../offers-item/offers-item";

type OffersListProps = {
  offers: Offer[];
  type: CardType;
}

const OffersList = (props: OffersListProps): JSX.Element => {
  const {offers, type} = props;

  return (
    <>
      {offers.map((offer, i) =>
        <OffersItem
          key={`offer-${i}`}
          offer={offer}
          type={type}
        />
      )}
    </>
  );
};

export default OffersList;
