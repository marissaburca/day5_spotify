import { configureStore, combineReducers} from "@reduxjs/toolkit";
import searchReducer from "../reducers/search";
import staticSongsReducer from "../reducers/local";
 
const mainReducer= combineReducers({
     searched : searchReducer,
     static : staticSongsReducer
})

const store = configureStore({
    reducer : mainReducer
}) 

export default store