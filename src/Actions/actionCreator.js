import {incrementCounter, decrementCounter} from './actionTypes'

const incrementAction = () => ({
    type: incrementCounter
})

const decrementAction = () => ({
    type: decrementCounter
})

const login = () => ({
    type: 'LOGIN'
})

const logout = () => ({
    type: 'LOGOUT'
})

export {
    incrementAction,
    decrementAction,
    login,
    logout
}