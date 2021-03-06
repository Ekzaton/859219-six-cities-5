import {CityName} from "../consts/common";

type City = {
  location: Location;
  name: CityName;
}

type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type Offer = {
  bedrooms: number;
  city: City;
  description: string;
  goods: string[];
  host: User;
  id: number;
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  location: Location;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
}

export type Review = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: User;
}

export type ReviewPost = {
  comment: string;
  rating: number;
}

export type User = {
  avatarUrl: string;
  email: string;
  id: number;
  isPro: boolean;
  name: string;
}

export type UserPost = {
  email: string;
  password: string;
}

