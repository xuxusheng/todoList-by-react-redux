import {connect} from 'react-redux'
import {addTodo} from '../actions'

let AddTodo = ({ dispatch }) => {
    let input;
    return (
        <div>
            <form onSubmit={e => {
                if (!input.value.trim()) {
                    return
                }
                dispatch(addTodo(input.value))
                e.preventDefault()
                e.stopPropagation()
            }}>
                <input type="text" ref={node => {input = node}}/>
                <button type="submit">Add Todo</button>
            </form>
        </div>
    )
}

AddTodo = connect()(AddTodo)

export default AddTodo