import { StackNavigator } from "react-navigation";

import Screen1 from "../Containers/screen1";
import Logout from "../Components/screen2";
import login from "../Components/LoginScreen";

const navigator = StackNavigator({
  login: {
    screen: login
  },
  screen1: {
    screen: Screen1
  },
  screen2: {
    screen: Logout
  }
});

export default navigator;
