import { StackNavigator, TabNavigator } from "react-navigation";

import Screen1 from "../Components/screen1";
import Logout from "../Components/screen2";
import Login from "../Components/LoginScreen";
import Feed from "../Components/Feed";
import Notification from "../Components/Notification";

const Tabs = TabNavigator({
  feed: {
    screen: Feed
  },
  logout: {
    screen: Logout
  }
});

const navigator = StackNavigator({
  login: {
    screen: Login
  },
  screen1: {
    screen: Screen1
  },
  screen2: {
    screen: Tabs
  }
});

export default navigator;
