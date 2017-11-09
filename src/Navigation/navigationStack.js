import { StackNavigator } from "react-navigation";

import Screen1 from "../Components/screen1";
import Logout from "../Components/screen2";
import Login from "../Components/LoginScreen";

const navigator = StackNavigator({
  login: {
    screen: Login
  },
  screen1: {
    screen: Screen1
  },
  screen2: {
    screen: Logout
  }
});

export default navigator;
