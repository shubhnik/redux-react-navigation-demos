import { login } from '../Actions/actionTypes';

const initialState = { isLoggedIn:false }

const loginReducer = (state=initialState, action) => {
    switch (action.type) {
        case login:
            return {...state, isLoggedIn: true}

        case 'LOGOUT':
            return {...state, isLoggedIn: false}    

        default: 
            return state
    }
}

export default loginReducer;