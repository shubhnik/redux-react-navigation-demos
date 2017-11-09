import { NavigationActions } from "react-navigation";

import AppNavigator from "../Navigation/navigationStack";
import { Login, Logout } from "../Actions/actionTypes";

const ActionForLoggedOut = AppNavigator.router.getActionForPathAndParams(
  "login"
);

const ActionForLoggedIn = AppNavigator.router.getActionForPathAndParams(
  "screen1"
);

const initialStateForLoggedOut = AppNavigator.router.getStateForAction(
  ActionForLoggedOut
);
const initialStateForLoggedIn = AppNavigator.router.getStateForAction(
  ActionForLoggedIn
);

const initialState = { initialStateForLoggedOut, initialStateForLoggedIn };

const navigationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "@@redux/INIT":
      return {
        ...state,
        initialStateForLoggedIn: AppNavigator.router.getStateForAction(
          AppNavigator.router.getActionForPathAndParams("screen1"),
          state.initialStateForLoggedOut
        )
      };

    case Login:
      return {
        ...state,
        initialStateForLoggedIn: AppNavigator.router.getStateForAction(
          AppNavigator.router.getActionForPathAndParams("screen1"),
          state.initialStateForLoggedOut
        )
      };

    case Logout:
      return {
        ...state,
        initialStateForLoggedOut: AppNavigator.router.getStateForAction(
          NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: "login" })]
          })
        )
      };

    /* Other logic for logging out, more cleaner but unlike the above isn't telling the reader 
           that navigation is reset, that's why I chose the *reset* one for the article. I prefer
           this one, what about you?
        
        case 'LOGOUT':
            nextState = { ...state, initialStateForLoggedIn, initialStateForLoggedOut}
            break;

        */

    default:
      return {
        ...state,
        initialStateForLoggedIn: AppNavigator.router.getStateForAction(
          action,
          state.initialStateForLoggedIn
        )
      };
  }
};

export default navigationReducer;
