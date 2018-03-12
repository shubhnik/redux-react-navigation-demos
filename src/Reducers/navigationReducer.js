import { NavigationActions } from "react-navigation";

import AppNavigator, {Tabs} from "../Navigation/navigationStack";
import { Login, Logout } from "../Actions/actionTypes";

const ActionForLoggedOut = AppNavigator.router.getActionForPathAndParams(
  "login"
);

const ActionForLoggedIn = Tabs.router.getActionForPathAndParams(
  "feed"
);

const stateForLoggedOut = AppNavigator.router.getStateForAction(
  ActionForLoggedOut
);

const stateForLoggedIn = Tabs.router.getStateForAction(
  ActionForLoggedIn
);

const initialState = { stateForLoggedOut, stateForLoggedIn };

const navigationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "@@redux/INIT":
      return {
        ...state,
        stateForLoggedIn: AppNavigator.router.getStateForAction(
          ActionForLoggedIn,
          stateForLoggedOut
        )
      };

    case Login:
      return {
        ...state,
        stateForLoggedIn: AppNavigator.router.getStateForAction(
          ActionForLoggedIn,
          stateForLoggedOut
        )
      };

    case Logout:
      return {
        ...state,
        stateForLoggedOut: AppNavigator.router.getStateForAction(
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
        stateForLoggedIn: AppNavigator.router.getStateForAction(
          action,
          state.stateForLoggedIn
        )
      };
  }
};

export default navigationReducer;
