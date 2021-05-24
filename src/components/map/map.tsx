import Leaflet from "leaflet";
import React from "react";
import {useSelector} from "react-redux";

import {selectActiveOfferID} from "../../store/selectors";

import {MapIconUrl, MapIconSize, MapLayer, MapType} from "../const";
import {Offer} from "../types";

import "leaflet/dist/leaflet.css";

type Props = {
  offers: Offer[];
  type: MapType;
}

const Map: React.FunctionComponent<Props> = (props: Props) => {
  const {offers, type} = props;
  const mapRef = React.useRef(null);
  const city = offers[0].city;
  const activeOfferID = useSelector(selectActiveOfferID);

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
        iconUrl: (activeOfferID === offer.id) ? MapIconUrl.PIN_ACTIVE : MapIconUrl.PIN,
        iconSize: [MapIconSize.HEIGHT, MapIconSize.WIDTH]
      });

      Leaflet.marker(offerLocation, {icon}).addTo(map).bindTooltip(offer.title);
    });

    return () => map.remove();
  }, [activeOfferID, city, offers]);

  return (
    <section
      ref={mapRef}
      className={`${type}__map map`}
    />
  );
};

export default Map;
