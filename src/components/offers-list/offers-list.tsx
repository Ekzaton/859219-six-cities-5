import * as React from "react";

import {offerType} from "../../types";

import OffersItem from "../offers-item/offers-item";

interface Props {
  offers: offerType[];
}

const OffersList: React.FunctionComponent<Props> = (props: Props) => {
  const {offers} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer, i) =>
        <OffersItem
          key={`offer-${i}`}
          offer={offer}
        />
      )}
    </div>
  );
};

export default OffersList;
