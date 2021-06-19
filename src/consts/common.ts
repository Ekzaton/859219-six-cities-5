export enum AppRoute {
  MAIN = `/`,
  LOGIN = `/login/`,
  FAVORITES = `/favorites/`,
  OFFER_ID = `/offer/:id/`,
  OFFER = `/offer/`
}

export enum AuthStatus {
  AUTH = `auth`,
  NO_AUTH = `no-auth`
}

export enum FilteringType {
  PARIS = `Paris`,
  COLOGNE = `Cologne`,
  BRUSSELS = `Brussels`,
  AMSTERDAM = `Amsterdam`,
  HAMBURG = `Hamburg`,
  DUSSELDORF = `Dusseldorf`
}

export enum SortingType {
  POPULAR = `Popular`,
  PRICE_LOW_TO_HIGH = `Price: low to high`,
  PRICE_HIGH_TO_LOW = `Price: high to low`,
  TOP_RATED_FIRST = `Top rated first`
}
