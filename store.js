import { createStore } from 'redux';
import {persistCombineReducers, persistStore} from 'redux-persist'
import storage from 'redux-persist/es/storage'
import AppReducer from './src/Reducers'

import CounterReducer from './src/Reducers/counterReducer'
import NavigationReducer from './src/Reducers/navigationReducer'

const config = {
    key: 'root',
    storage,
}

const reducer = {
    CounterReducer,
    NavigationReducer
}

const rootReducer = persistCombineReducers(config, reducer)

function configureStore () {
    let store = createStore(rootReducer)
    let persistor = persistStore(store)
    console.log(`********PERSISTSTORER${JSON.stringify(store)}`)
    console.log(`********PERSISTer${JSON.stringify(persistor)}`)
    return { persistor, store }
}

//const store = createStore(AppReducer);

export default configureStore;
// export default store;