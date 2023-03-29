import { combineReducers } from "redux";
import favoriteReducer from "./favorites";
import moviesReducer from "./movies";
export default combineReducers({

    favorite:favoriteReducer,
    movies:moviesReducer
})