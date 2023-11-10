import { GET_LOCAL } from "../actions";

const initialState = {
  content: [],
};

const staticSongsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LOCAL:
      return {
        ...state,
        content: action.payload,
      };
    default:
      return state;
  }
};

export default staticSongsReducer;
