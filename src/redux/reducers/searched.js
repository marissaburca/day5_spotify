import { GET_SEARCHED } from "../actions";

const initialState = {
  tracks: [],
};

const getSearchedReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SEARCHED:
      return {
        ...state,
        tracks: action.payload,
      };

    default:
      return state;
  }
};

export default getSearchedReducer;