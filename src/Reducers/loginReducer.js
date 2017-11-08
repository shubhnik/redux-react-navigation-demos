import { Login, Logout } from "../Actions/actionTypes";

const initialState = { isLoggedIn: false };

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case Login:
      return { ...state, isLoggedIn: true };

    case Logout:
      return { ...state, isLoggedIn: false };

    default:
      return state;
  }
};

export default loginReducer;
