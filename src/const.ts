export const Page = {
  MAIN: {
    card: `cities__place-card`,
    wrapper: `cities__image-wrapper`,
    info: ``,
    width: 260,
    height: 200
  },
  FAVORITES: {
    card: `favorites__card`,
    wrapper: `favorites__image-wrapper`,
    info: `favorites__card-info`,
    width: 150,
    height: 110
  },
  OFFER: {
    card: `near-places__card`,
    wrapper: `near-places__image-wrapper`,
    info: ``,
    width: 260,
    height: 200
  }
};

export const RATING_STARS_COUNT = 5;

export enum IconUrl {
  PIN = `img/pin.svg`,
  PIN_ACTIVE = `img/pin-active.svg`
}

export enum IconSize {
  WIDTH = 30,
  HEIGHT = 30
}

export enum MapLayer {
  TEMPLATE = `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
  ATTRIBUTION = `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
}
