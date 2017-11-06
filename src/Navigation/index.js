import React, { Component } from 'react';
import {BackHandler} from 'react-native';
import { connect } from 'react-redux';
import { addNavigationHelpers, NavigationActions } from 'react-navigation';
import NavigationStack from './navigationStack';

class AppNavigation extends Component {

    componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
    }
      
    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
    }
      
    onBackPress = () => {
        const { dispatch, navigationState } = this.props;
        if (navigationState.index === 0) {
          BackHandler.exitApp()
        }
        dispatch(NavigationActions.back());
        return true;
    };

    render() {
        const { navigationState, dispatch, isLoggedIn } = this.props;
        const initialState = isLoggedIn ? navigationState.initialStateForLoggedIn : navigationState.initialStateForLoggedOut
        return(
            <NavigationStack 
                navigation={addNavigationHelpers({ dispatch, state: initialState})}
            />
        )
    }
}

const mapStateToProps = (state) => {
    console.log(`********HELLONAV${JSON.stringify(state)}`)
    return ({
        isLoggedIn: state.LoginReducer.isLoggedIn,
        navigationState: state.NavigationReducer
    })
}


export default connect(mapStateToProps)(AppNavigation)
