import React from "react";

import {offerType} from "../../types";

import OffersItem from "../offers-item/offers-item";

type Props = {
  offers: offerType[];
}

const OffersList: React.FunctionComponent<Props> = (props: Props) => {
  const {offers} = props;
  const [activeID, setActiveID] = React.useState(null);
  const initialID = activeID;

  const handleMouseEnter = (id: number) => {
    setActiveID(id);
  };

  const handleMouseLeave = () => {
    setActiveID(initialID);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer, i) =>
        <OffersItem
          key={`offer-${i}`}
          offer={offer}
          onMouseEnter={() => handleMouseEnter(offer.id)}
          onMouseLeave={() => handleMouseLeave()}
        />
      )}
    </div>
  );
};

export default OffersList;
