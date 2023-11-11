import { SET_DETAILS } from "../actions";

const initialState = {
  track: [],
};

const setDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DETAILS:
      return {
        ...state,
        track: action.payload,
      };

    default:
      return state;
  }
};

export default setDetailsReducer;
