import { StackNavigator } from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator'

import Screen1 from '../Containers/screen1'
import Logout from '../Components/screen2'
import login from '../Components/LoginScreen'

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
}, {
    transitionConfig: () => ({
      screenInterpolator: (sceneProps) => {
        // Disable the transition animation when resetting to the home screen.
        if (
          sceneProps.index === 0
        ) return null
  
        // Otherwise, use the usual horizontal animation.
        return CardStackStyleInterpolator.forHorizontal(sceneProps)
      },
    }),
  })

const baseNavigator = (isLoggedIn) => {
    return 
}

export default navigator;