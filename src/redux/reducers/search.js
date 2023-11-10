import { GET_SEARCH } from "../actions";

const initialState = {
  search: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SEARCH:
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
