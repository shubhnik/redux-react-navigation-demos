import { StackNavigator } from "react-navigation";
import Screen1 from "../Components/screen1";
import Screen2 from "../Components/screen2";

const navigator = StackNavigator({
  screen1: {
    screen: Screen1
  },
  screen2: {
    screen: Screen2
  }
});

export default navigator;
