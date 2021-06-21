import Leaflet from "leaflet";
import React from "react";

import "leaflet/dist/leaflet.css";

import {MapIconSize, MapIconUrl, MapLayer, MapType} from "../../consts/components";

import {Offer} from "../../types/common";

type Props = {
  activeOfferID: number | null;
  offers: Offer[];
  type: MapType;
}

const Map: React.FunctionComponent<Props> = (props: Props) => {
  const {activeOfferID, offers, type} = props;
  const city = offers[0].city;
  const mapRef = React.useRef() as React.MutableRefObject<HTMLElement>;

  React.useEffect(() => {
    const map = Leaflet.map(mapRef.current, {
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
      ref={mapRef}
      className={`${type}__map map`}
    />
  );
};

export default React.memo(Map);
