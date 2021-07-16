import {AxiosInstance} from "axios";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk, {ThunkAction, ThunkMiddleware} from "redux-thunk";

import {favoritesReducer} from "./favorites/reducer";
import {loginReducer} from "./login/reducer";
import {mainReducer} from "./main/reducer";
import {propertyReducer} from "./property/reducer";

import {redirect} from "../middlewares/redirect";
import {createAPI} from "../services/api";

import {FavoritesAction} from "../types/store/favorites";
import {LoginAction} from "../types/store/login";
import {MainAction} from "../types/store/main";
import {PropertyAction} from "../types/store/property";


const api = createAPI();
const thunkWithAPI = thunk.withExtraArgument(api);

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  login: loginReducer,
  main: mainReducer,
  property: propertyReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkWithAPI as APIMiddleware, redirect)));

export type RootState = ReturnType<typeof rootReducer>;
type RootAction = FavoritesAction | LoginAction | MainAction | PropertyAction;
type APIMiddleware = ThunkMiddleware<RootState, RootAction, AxiosInstance>;
export type APIAction = ThunkAction<void, RootState, AxiosInstance, RootAction>;

export default store;
