import { StackNavigator } from 'react-navigation';
import Screen1 from '../Containers/screen1'

const navigator = StackNavigator({
    screen1: {
        screen: Screen1
    }
})

export default navigator;