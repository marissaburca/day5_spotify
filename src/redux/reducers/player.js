import { SET_DETAILS } from "../actions";


const initialState = {
  details: [],
};

const setDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DETAILS:
      return {
        ...state,
        details : action.payload,
      };
 
    default:
      return state;
  }
};

export default setDetailsReducer;