import {AxiosInstance} from "axios";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk, {ThunkAction, ThunkMiddleware} from "redux-thunk";

import {allOffersReducer} from "./all-offers/reducer";
import {favoriteOffersReducer} from "./favorite-offers/reducer";
import {reviewReducer} from "./review/reducer";
import {singleOfferReducer} from "./single-offer/reducer";
import {userReducer} from "./user/reducer";

import {redirect} from "../middlewares/redirect";
import {createAPI} from "../services/api";

import {AllOffersAction} from "../types/store/all-offers";
import {FavoriteOffersAction} from "../types/store/favorite-offers";
import {SingleOfferAction} from "../types/store/single-offer";
import {ReviewAction} from "../types/store/review";
import {UserAction} from "../types/store/user";

const api = createAPI();
const thunkWithAPI = thunk.withExtraArgument(api);

const rootReducer = combineReducers({
  allOffers: allOffersReducer,
  favoriteOffers: favoriteOffersReducer,
  singleOffer: singleOfferReducer,
  review: reviewReducer,
  user: userReducer
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkWithAPI as APIMiddleware, redirect)));

export type RootState = ReturnType<typeof rootReducer>;
type RootAction = AllOffersAction | FavoriteOffersAction | SingleOfferAction | ReviewAction | UserAction;
type APIMiddleware = ThunkMiddleware<RootState, RootAction, AxiosInstance>;
export type APIAction = ThunkAction<void, RootState, AxiosInstance, RootAction>;

export default store;
