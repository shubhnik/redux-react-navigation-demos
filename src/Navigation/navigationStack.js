import { StackNavigator, TabNavigator } from "react-navigation";

import Counter from "../Components/Counter";
import Logout from "../Components/Logout";
import Login from "../Components/LoginScreen";
import Feed from "../Components/Feed";
import Notification from "../Components/Notification";
import Signup from "../Components/SignupScreen";

export const Tabs = TabNavigator({
  feed: {
    screen: Feed,
    navigationOptions: {
      tabBarLabel: "Feed",
      title: "Feed"
    }
  },
  counter: {
    screen: Counter,
    navigationOptions: {
      tabBarLabel: "Counter",
      title: "Counter"
    }
  },
  logout: {
    screen: Logout,
    navigationOptions: {
      tabBarLabel: "Logout",
      title: "Logout"
    }
  }
});

const navigator = StackNavigator({
  login: {
    screen: Login
  },
  signup: {
    screen: Signup,
    navigationOptions: {
      title: "Register"
    }
  },
  mainScreens: {
    screen: Tabs,
    navigationOptions: {
      gesturesEnabled: false,
      headerLeft: null
    }
  }
});

export default navigator;
