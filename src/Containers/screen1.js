import {connect} from 'react-redux'
import Screen1View from '../Components/screen1View'
import {incrementAction, decrementAction} from '../Actions/actionCreator'

const mapStateToProps = state => ({
    counterCount: state.CounterReducer.counter
})

const mapDispatchToProps = {
    incrementAction,
    decrementAction
}

const Screen1 = connect(mapStateToProps, mapDispatchToProps)(Screen1View)

export default Screen1;