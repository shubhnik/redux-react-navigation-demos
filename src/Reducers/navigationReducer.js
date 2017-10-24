import AppNavigator from '../Navigation/navigationStack'
const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('screen1'))
console.log(`*****NavState${JSON.stringify(initialState)}`);
const navigationReducer = (state = initialState, action) => {
    return state;
}

export default navigationReducer;