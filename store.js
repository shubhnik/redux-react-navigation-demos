import { createStore } from 'redux';
import AppReducer from './src/Reducers'

const store = createStore(AppReducer);

export default store;