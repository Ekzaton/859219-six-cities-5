export interface offerType {
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

export interface cityType {
  location: locationType;
  name: string;
}

export interface userType {
  avatarUrl: string;
  id: number;
  isPro: true;
  name: string;
}

export interface locationType {
  latitude: number;
  longitude: number;
  zoom: number;
}

export interface reviewType {
  comment: string;
  date: InstanceType<typeof Date>;
  id: number;
  rating: number;
  user: userType;
}
