import Leaflet from "leaflet";
import React, {memo, useEffect, useRef, MutableRefObject} from "react";

import "leaflet/dist/leaflet.css";

import {MapIconSize, MapIconURL, MapLayer, MapType} from "../../consts/components";

import {Offer} from "../../types/common";

type MapProps = {
  activeOfferID: number | null;
  offers: Offer[];
  type: MapType;
}

const Map = (props: MapProps): JSX.Element => {
  const {activeOfferID, offers, type} = props;
  const city = offers[0].city;

  const mapRef = useRef() as MutableRefObject<HTMLElement>;

  useEffect(() => {
    const map = Leaflet.map(mapRef.current, {
      center: [city.location.latitude, city.location.longitude],
      zoom: city.location.zoom,
      scrollWheelZoom: false
    });

    Leaflet.tileLayer(MapLayer.TEMPLATE, {attribution: MapLayer.ATTRIBUTION}).addTo(map);

    offers.forEach((offer) => {
      const icon = Leaflet.icon({
        iconUrl: activeOfferID === offer.id ? MapIconURL.PIN_ACTIVE : MapIconURL.PIN,
        iconSize: [MapIconSize.HEIGHT, MapIconSize.WIDTH]
      });

      Leaflet.marker([offer.location.latitude, offer.location.longitude], {icon}).addTo(map).bindTooltip(offer.title);
    });

    return () => {
      map.remove();
    };
  }, [activeOfferID, city, offers]);

  return (
    <section
      ref={mapRef}
      className={`${type}__map map`}
    />
  );
};

export default memo(Map);
