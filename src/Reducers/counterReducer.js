import { incrementCounter, decrementCounter } from "../Actions/actionTypes";

const initialState = { counter: 0 };

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case incrementCounter:
      return { ...state, counter: state.counter + 1 };

    case decrementCounter:
      return { ...state, counter: state.counter - 1 };

    default:
      return state;
  }
};

export default counterReducer;
