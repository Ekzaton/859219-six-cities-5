import React from "react";
import {useDispatch} from "react-redux";

import {getActiveOfferID} from "../../store/app/actions";

import {CardType} from "../../consts/components";
import {Offer} from "../../types";

import OffersItem from "../offers-item/offers-item";

type Props = {
  offers: Offer[];
  type: CardType;
}

const OffersList: React.FunctionComponent<Props> = (props: Props) => {
  const {offers, type} = props;
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      {offers.map((offer, i) =>
        <OffersItem
          key={`offer-${i}`}
          offer={offer}
          type={type}
          onMouseEnter={() => dispatch(getActiveOfferID(offer.id))}
          onMouseLeave={() => dispatch(getActiveOfferID(null))}
        />
      )}
    </React.Fragment>
  );
};

export default OffersList;
