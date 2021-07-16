import React from "react";
import {useDispatch} from "react-redux";

import OffersItem from "../offers-item/offers-item";

import {CardType} from "../../consts/components";

import {setActiveOfferID} from "../../store/main/actions";

import {Offer} from "../../types/common";

type OffersListProps = {
  offers: Offer[];
  type: CardType;
}

const OffersList = (props: OffersListProps): JSX.Element => {
  const {offers, type} = props;

  const dispatch = useDispatch();

  return (
    <>
      {offers.map((offer, i) =>
        <OffersItem
          key={`offer-${i}`}
          offer={offer}
          type={type}
          onMouseEnter={() => dispatch(setActiveOfferID(offer.id))}
          onMouseLeave={() => dispatch(setActiveOfferID(null))}
        />
      )}
    </>
  );
};

export default OffersList;
