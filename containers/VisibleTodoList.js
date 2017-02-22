import {connect} from 'react-redux'
import {toggleTodo} from '../actions'

const getVisibleTodos = (todos, filter) => {
    switch(filter) {
        case "SHOW_ALL":
            
    }
}

const mapStateToProps = (state) => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}

const VisibleTodoList = connect(
    _mapStateToProps,
    _mapDispatchToProps
)(TodoList)