import { configureStore, combineReducers} from "@reduxjs/toolkit";
import searchReducer from "../reducers/search";
import staticSongsReducer from "../reducers/local";
import setDetailsReducer from "../reducers/player";
import getSearchedReducer from "../reducers/searched";
import favoritesReducer from "../reducers/favorites";


 
const mainReducer= combineReducers({
     searched : searchReducer,
     static : staticSongsReducer,
     details: setDetailsReducer,
     found : getSearchedReducer,
     favorites: favoritesReducer,
})

const store = configureStore({
    reducer : mainReducer
}) 

export default store