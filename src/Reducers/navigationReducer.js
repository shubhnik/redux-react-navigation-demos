import { NavigationActions } from 'react-navigation'
import AppNavigator from '../Navigation/navigationStack'
const ActionForLoggedOut = AppNavigator.router.getActionForPathAndParams('login')
const ActionForLoggedIn = AppNavigator.router.getActionForPathAndParams('screen1')
const initialStateForLoggedOut = AppNavigator.router.getStateForAction(ActionForLoggedOut)
const initialStateForLoggedIn = AppNavigator.router.getStateForAction(ActionForLoggedIn)
const initialState = { initialStateForLoggedOut, initialStateForLoggedIn }
const navigationReducer = (state = initialState, action) => {
    console.log(`**********APPPROUTEr**${JSON.stringify(AppNavigator.router.getScreenConfig)}`)
    console.log(`**********Action**${JSON.stringify(action)}`)
    console.log(`**********INITIALSTATE${JSON.stringify(state)}`)
    let nextState;
    switch (action.type){
        case 'LOGIN':
            nextState = { ...state, initialStateForLoggedOut: AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('screen1'), state.initialStateForLoggedOut)}
            break;

        case 'LOGOUT':
            nextState = { ...state, initialStateForLoggedIn: AppNavigator.router.getStateForAction(NavigationActions.reset({
                index: 0,
                actions: [
                  NavigationActions.init({ routeName: 'login'})
                ]
            })), initialStateForLoggedOut: AppNavigator.router.getStateForAction(NavigationActions.reset({
                index: 0,
                actions: [
                  NavigationActions.navigate({ routeName: 'login'})
                ]
            }))}
            break;
            
        default:
            nextState = { ...state, initialStateForLoggedIn: AppNavigator.router.getStateForAction(action, state.initialStateForLoggedIn), initialStateForLoggedOut: AppNavigator.router.getStateForAction(action, state.initialStateForLoggedOut) };
            //nextState = null
            break;
    }
    console.log(`********MAPSTATETOPROPSNavigationReducer${JSON.stringify(nextState)}`)
    // const newState = AppNavigator.router.getStateForAction(action, state)
    return nextState || state;
}

export default navigationReducer;