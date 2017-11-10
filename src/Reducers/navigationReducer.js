import AppNavigator from "../Navigation/navigationStack";
const initialState = AppNavigator.router.getStateForAction(
  AppNavigator.router.getActionForPathAndParams("screen1")
);
const navigationReducer = (state = initialState, action) => {
  const newState = AppNavigator.router.getStateForAction(action, state);
  return newState || state;
};

export default navigationReducer;
