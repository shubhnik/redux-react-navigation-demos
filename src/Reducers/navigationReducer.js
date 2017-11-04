import AppNavigator from '../Navigation/navigationStack'
const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('screen1'))
const navigationReducer = (state = initialState, action) => {
    console.log(`********MAPSTATETOP{ROPSNavigationReducer${JSON.stringify(state)}`)
    const newState = AppNavigator.router.getStateForAction(action, state)
    return newState || state;
}

export default navigationReducer;