import {offerType} from "../types";

export const offers: offerType[] = [
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.366667,
        longitude: 4.9,
        zoom: 13
      },
      name: `Amsterdam`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`],
    host: {
      avatarUrl: `img/avatar-angelina.jpg`,
      id: 1,
      isPro: true,
      name: `Angelina`
    },
    id: 1,
    image: [`img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.3509553943508,
      longitude: 4.85309666406198,
      zoom: 13
    },
    maxAdults: 4,
    previewImage: `img/apartment-01.jpg`,
    price: 120,
    rating: 4.8,
    title: `Beautiful & luxurious studio at great location`,
    type: `apartment`
  }, {
    bedrooms: 2,
    city: {
      location: {
        latitude: 52.366667,
        longitude: 4.9,
        zoom: 13
      },
      name: `Amsterdam`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Brussels.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      avatarUrl: `img/avatar-angelina.jpg`,
      id: 2,
      isPro: true,
      name: `Mary`
    },
    id: 2,
    image: [`img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`],
    isFavorite: false,
    isPremium: true,
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
      zoom: 13
    },
    maxAdults: 4,
    previewImage: `img/apartment-02.jpg`,
    price: 180,
    rating: 5.0,
    title: `Wood and stone place`,
    type: `hotel`
  }, {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.366667,
        longitude: 4.9,
        zoom: 13
      },
      name: `Amsterdam`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Cologne.`,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Dishwasher`],
    host: {
      avatarUrl: `img/avatar-angelina.jpg`,
      id: 3,
      isPro: false,
      name: `Elizabeth`
    },
    id: 3,
    image: [`img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`],
    isFavorite: false,
    isPremium: false,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 13
    },
    maxAdults: 6,
    previewImage: `img/apartment-03.jpg`,
    price: 100,
    rating: 4.0,
    title: `Canal View Prinsengracht`,
    type: `house`
  }, {
    bedrooms: 1,
    city: {
      location: {
        latitude: 52.366667,
        longitude: 4.9,
        zoom: 13
      },
      name: `Amsterdam`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Dusseldorf.`,
    goods: [`Heating`, `Cable TV`],
    host: {
      avatarUrl: `img/avatar-angelina.jpg`,
      id: 4,
      isPro: false,
      name: `Jenifer`
    },
    id: 4,
    image: [`img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 13
    },
    maxAdults: 2,
    previewImage: `img/room.jpg`,
    price: 70,
    rating: 4.2,
    title: `Nice, cozy, warm big bed apartment`,
    type: `room`
  }
];
