export const OFFER_IMAGES_COUNT = 6;
export const OFFER_REVIEWS_COUNT = 10;
export const RATING_STARS_COUNT = 5;
export const REG_EXP_EMAIL = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/;
export const REG_EXP_PASSWORD = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
export const DELAY_DURATION = 250;

export enum BtnBigSize {
  WIDTH = 31,
  HEIGHT = 33
}

export enum BtnSize {
  WIDTH = 18,
  HEIGHT = 19
}

export enum BtnType {
  PLACE_CARD = `place-card`,
  PROPERTY = `property`
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

export enum HeaderType {
  MAIN = `main`,
  LOGIN = `login`
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

export enum ReviewDate {
  LOCALE = `en-US`,
  MONTH = `long`,
  YEAR = `numeric`
}

export enum ReviewLehgth {
  MIN = 50,
  MAX = 300
}
