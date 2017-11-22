import { NavigationActions } from "react-navigation";

import AppNavigator, { Tabs } from "../Navigation/navigationStack";
import {
  Login,
  Logout,
  Register,
  RegisterSuccess,
  NavigateToLogoutScreen
} from "../Actions/actionTypes";

const ActionForLoggedOut = AppNavigator.router.getActionForPathAndParams(
  "login"
);

const ActionForLoggedIn = AppNavigator.router.getActionForPathAndParams(
  "mainScreens"
);

const stateForLoggedOut = AppNavigator.router.getStateForAction(
  ActionForLoggedOut
);

const stateForLoggedIn = AppNavigator.router.getStateForAction(
  ActionForLoggedIn,
  stateForLoggedOut
);

const initialState = { stateForLoggedOut, stateForLoggedIn };

const navigationReducer = (state = initialState, action) => {
  let nextState;

  switch (action.type) {
    case Login:
      nextState = {
        ...state,
        stateForLoggedIn: AppNavigator.router.getStateForAction(
          ActionForLoggedIn,
          stateForLoggedOut
        )
      };
      break;

    case Register:
      nextState = {
        ...state,
        stateForLoggedOut: AppNavigator.router.getStateForAction(
          AppNavigator.router.getActionForPathAndParams("signup"),
          stateForLoggedOut
        )
      };
      break;

    case RegisterSuccess:
      nextState = {
        ...state,
        stateForLoggedIn: AppNavigator.router.getStateForAction(
          NavigationActions.reset({
            index: 2,
            actions: [
              NavigationActions.navigate({ routeName: "login" }),
              NavigationActions.navigate({ routeName: "signup" }),
              NavigationActions.navigate({ routeName: "mainScreens" })
            ]
          })
        )
      };
      break;

    /* Another option for RegisterSuccess
        nextState = {
          ...state,
          stateForLoggedIn: AppNavigator.router.getStateForAction(
            ActionForLoggedIn,
            AppNavigator.router.getStateForAction(
              AppNavigator.router.getActionForPathAndParams("signup"),
              stateForLoggedOut
            )
          )
        };
      */

    case "Navigation/BACK":
      nextState = {
        ...state,
        stateForLoggedOut: AppNavigator.router.getStateForAction(
          NavigationActions.back(),
          stateForLoggedOut
        )
      };
      break;

    case Logout:
      nextState = {
        ...state,
        stateForLoggedOut: AppNavigator.router.getStateForAction(
          NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.init({ routeName: "login" })]
          })
        )
      };
      break;

    /* Other logic for logging out, more cleaner but unlike the above isn't telling the reader 
           that navigation is reset, that's why I chose the *reset* one for the article. I prefer
           this one, what about you?
        
        case 'LOGOUT':
            nextState = { ...state, initialStateForLoggedIn, initialStateForLoggedOut}
            break;
    */

    case NavigateToLogoutScreen:
      stateForLogoutScreen = {
        ...state,
        stateForLoggedIn: {
          ...state.stateForLoggedIn,
          routes: state.stateForLoggedIn.routes.map(
            route =>
              route.routeName === "mainScreens"
                ? { ...route, index: 2 }
                : { ...route }
          )
        }
      };
      nextState = { ...stateForLogoutScreen };
      break;

    default:
      console.log(
        `*****DefaultSTate${JSON.stringify(
          AppNavigator.router.getStateForAction(action, state.stateForLoggedIn)
        )}`
      );
      nextState = {
        ...state,
        stateForLoggedIn: AppNavigator.router.getStateForAction(
          action,
          state.stateForLoggedIn
        )
      };
      break;
  }
  return nextState || state;
};

export default navigationReducer;
