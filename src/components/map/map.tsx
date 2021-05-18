import Leaflet from "leaflet";
import React from "react";

import {MapIconUrl, MapIconSize, MapLayer} from "../../const";
import {cityType, offerType} from "../../types";

import "leaflet/dist/leaflet.css";

type Props = {
  offers: offerType[];
  city: cityType;
  type: string;
}

const Map: React.FunctionComponent<Props> = (props: Props) => {
  const {offers, city, type} = props;
  const mapRef = React.useRef(null);

  React.useEffect(() => {
    const cityLocation: Leaflet.LatLngTuple = [city.location.latitude, city.location.longitude];
    const zoom = city.location.zoom;
    const map = Leaflet.map(mapRef.current, {
      center: cityLocation,
      zoom,
      zoomControl: false
    });

    map.setView(cityLocation, zoom);

    Leaflet.tileLayer(MapLayer.TEMPLATE, {attribution: MapLayer.ATTRIBUTION}).addTo(map);

    offers.forEach((offer) => {
      const offerLocation: Leaflet.LatLngTuple = [offer.location.latitude, offer.city.location.longitude];
      const icon = Leaflet.icon({
        iconUrl: MapIconUrl.PIN,
        iconSize: [MapIconSize.HEIGHT, MapIconSize.WIDTH]
      });

      Leaflet.marker(offerLocation, {icon}).addTo(map).bindTooltip(offer.title);
    });

    return () => map.remove();
  });

  return (
    <section
      className={`${type}__map map`}
      ref={mapRef}
    />
  );
};

export default Map;
