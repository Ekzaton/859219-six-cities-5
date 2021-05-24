import React from "react";
import {useDispatch} from "react-redux";

import {ActionCreator} from "../../store/actions";

import {CardType} from "../const";
import {Offer} from "../types";

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
          onMouseEnter={() => dispatch(ActionCreator.getActiveOfferID(offer.id))}
          onMouseLeave={() => dispatch(ActionCreator.getActiveOfferID(null))}
        />
      )}
    </React.Fragment>
  );
};

export default OffersList;
