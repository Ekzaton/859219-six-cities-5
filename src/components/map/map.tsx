import Leaflet from "leaflet";
import React from "react";

import {MapIconUrl, MapIconSize, MapLayer, MapType} from "../const";
import {Offer} from "../types";

import "leaflet/dist/leaflet.css";

type Props = {
  activeOfferID: number | null;
  offers: Offer[];
  type: MapType;
}

const Map: React.FunctionComponent<Props> = (props: Props) => {
  const {activeOfferID, offers, type} = props;
  const city = offers[0].city;

  React.useEffect(() => {
    const map = Leaflet.map(`map`, {
      center: [city.location.latitude, city.location.longitude],
      zoom: city.location.zoom,
      scrollWheelZoom: false
    });

    Leaflet.tileLayer(MapLayer.TEMPLATE, {attribution: MapLayer.ATTRIBUTION}).addTo(map);

    offers.forEach((offer) => {
      const icon = Leaflet.icon({
        iconUrl: activeOfferID === offer.id ? MapIconUrl.PIN_ACTIVE : MapIconUrl.PIN,
        iconSize: [MapIconSize.HEIGHT, MapIconSize.WIDTH]
      });

      Leaflet.marker([offer.location.latitude, offer.location.longitude], {icon}).addTo(map).bindTooltip(offer.title);
    });

    return () => {
      if (map) {
        map.remove();
      }
    };
  }, [activeOfferID, city, offers]);

  return (
    <section
      id="map"
      className={`${type}__map map`}
    />
  );
};

export default React.memo(Map);
