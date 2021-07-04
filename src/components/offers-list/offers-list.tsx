import React from "react";
import {useDispatch} from "react-redux";

import OffersItem from "../offers-item/offers-item";

import {CardType} from "../../consts/components";

import {changeActiveOfferID} from "../../store/all-offers/actions";

import {Offer} from "../../types/common";

type OffersListProps = {
  offers: Offer[];
  type: CardType;
}

const OffersList = (props: OffersListProps): JSX.Element => {
  const {offers, type} = props;
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      {offers.map((offer, i) =>
        <OffersItem
          key={`offer-${i}`}
          offer={offer}
          type={type}
          onMouseEnter={() => dispatch(changeActiveOfferID(offer.id))}
          onMouseLeave={() => dispatch(changeActiveOfferID(null))}
        />
      )}
    </React.Fragment>
  );
};

export default OffersList;
