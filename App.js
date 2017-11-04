/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'
// import store from './store'
import AppNavigation from './src/Navigation'
import configureStore from './store'

const { store, persistor } = configureStore()
console.log(`********PERSIST${JSON.stringify(store.getState())}`)


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate
            loading={<Text>Loading...</Text>}
            persistor={persistor}>
          <AppNavigation />
        </PersistGate>
        {/*<AppNavigation />*/}
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
