import {
  incrementCounter,
  decrementCounter,
  Login,
  Logout,
  Register,
  RegisterSuccess,
  NavigateToLogoutScreen
} from "./actionTypes";

const incrementAction = () => ({
  type: incrementCounter
});

const decrementAction = () => ({
  type: decrementCounter
});

const login = () => ({
  type: Login
});

const logout = () => ({
  type: Logout
});

const register = () => ({
  type: Register
});

const registerSuccess = () => ({
  type: RegisterSuccess
});

const navigateToLogoutScreen = () => ({
  type: NavigateToLogoutScreen
});

export {
  incrementAction,
  decrementAction,
  login,
  logout,
  register,
  registerSuccess,
  navigateToLogoutScreen
};
