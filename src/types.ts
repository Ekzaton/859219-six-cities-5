export type offerType = {
  bedrooms: number;
  city: cityType;
  description: string;
  goods: string[];
  host: userType;
  id: number;
  image: string[];
  isFavorite: boolean;
  isPremium: boolean;
  location: locationType;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
}

export type cityType = {
  location: locationType;
  name: string;
}

export type userType = {
  avatarUrl: string;
  id: number;
  isPro: true;
  name: string;
}

export type locationType = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type reviewType = {
  comment: string;
  date: InstanceType<typeof Date>;
  id: number;
  rating: number;
  user: userType;
}
