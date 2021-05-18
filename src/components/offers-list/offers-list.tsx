import React from "react";

import {CardType} from "../../const";
import {offerType} from "../../types";

import OffersItem from "../offers-item/offers-item";

type Props = {
  offers: offerType[];
  type: CardType;
}

const OffersList: React.FunctionComponent<Props> = (props: Props) => {
  const {offers, type} = props;
  // eslint-disable-next-line
  const [activeID, setActiveID] = React.useState(null);

  return (
    <React.Fragment>
      {offers.map((offer, i) =>
        <OffersItem
          key={`offer-${i}`}
          offer={offer}
          type={type}
          onMouseEnter={() => setActiveID(offer.id)}
          onMouseLeave={() => setActiveID(null)}
        />
      )}
    </React.Fragment>
  );
};

export default OffersList;
