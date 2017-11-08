import { incrementCounter, decrementCounter } from "../Actions/actionTypes";

const initialState = { counter: 0, counterString: "1" };

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case incrementCounter:
      return {
        ...state,
        counter: state.counter + 1,
        counterString: state.counterString + "1"
      };

    case decrementCounter:
      return { ...state, counter: state.counter - 1 };

    case "LOGOUT":
      return { ...initialState };

    default:
      return state;
  }
};

export default counterReducer;
