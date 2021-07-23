import { createStore, applyMiddleware } from "redux";
import {favoriteReducer, dataReducer} from "./reducers"

import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { combineReducers } from "@reduxjs/toolkit";

const reducers = combineReducers({favoritePokemon: favoriteReducer, initialData: dataReducer})

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export type FavoriteDispatch = typeof store.dispatch;
export type StoreState = ReturnType<typeof store.getState>;