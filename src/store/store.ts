import {AxiosInstance} from "axios";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk, {ThunkAction} from "redux-thunk";

import {redirect} from "../middlewares/redirect";
import {createAPI} from "../services/api";
import {FavoritesAction} from "../types/store/favorites";
import {LoginAction} from "../types/store/login";
import {MainAction} from "../types/store/main";
import {PropertyAction} from "../types/store/property";

import {favoritesReducer} from "./favorites/reducer";
import {loginReducer} from "./login/reducer";
import {mainReducer} from "./main/reducer";
import {propertyReducer} from "./property/reducer";

const api = createAPI();
const thunkWithAPI = thunk.withExtraArgument(api);

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  login: loginReducer,
  main: mainReducer,
  property: propertyReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkWithAPI, redirect)));

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppAction = FavoritesAction | LoginAction | MainAction | PropertyAction;
export type AppThunkAction = ThunkAction<void, AppState, AxiosInstance, AppAction>;
export default store;
