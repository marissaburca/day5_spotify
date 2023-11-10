import { configureStore, combineReducers} from "@reduxjs/toolkit";
import searchReducer from "../reducers/search";
import staticSongsReducer from "../reducers/local";
import detailsReducer from "../reducers/local";
 
const mainReducer= combineReducers({
     searched : searchReducer,
     static : staticSongsReducer,
     details: detailsReducer
})

const store = configureStore({
    reducer : mainReducer
}) 

export default store