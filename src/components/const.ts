export const OFFER_IMAGES_COUNT = 6;
export const OFFER_REVIEWS_COUNT = 10;
export const RATING_STARS_COUNT = 5;

export enum AuthStatus {
  AUTH = `auth`,
  NO_AUTH = `no-auth`
}

export enum CardImgSize {
  WIDTH = 260,
  HEIGHT = 200
}

export enum CardType {
  CITIES = `cities`,
  FAVORITES = `favorites`,
  NEAR_PLACES = `near-places`
}

export enum FavCardImgSize {
  WIDTH = 150,
  HEIGHT = 110
}

export enum FilteringType {
  PARIS = `Paris`,
  COLOGNE = `Cologne`,
  BRUSSELS = `Brussels`,
  AMSTERDAM = `Amsterdam`,
  HAMBURG = `Hamburg`,
  DUSSELDORF = `Dusseldorf`
}

export enum MapIconSize {
  WIDTH = 30,
  HEIGHT = WIDTH
}

export enum MapIconUrl {
  PIN = `img/pin.svg`,
  PIN_ACTIVE = `img/pin-active.svg`
}

export enum MapLayer {
  TEMPLATE = `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
  ATTRIBUTION = `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
}

export enum MapType {
  CITIES = `cities`,
  PROPERTY = `property`
}

export enum SortingType {
  POPULAR = `Popular`,
  PRICE_LOW_TO_HIGH = `Price: low to high`,
  PRICE_HIGH_TO_LOW = `Price: high to low`,
  TOP_RATED_FIRST = `Top rated first`
}
