const initState = {
    todos: [
      {id: 1, name: 'Creacte statuc UI.', isComplete: true},
      {id: 2, name: 'Creacte initial state.', isComplete: true},
      {id: 3, name: 'Use state to Render UI.', isComplete: false},
    ],
    currentTodo: ''
}

const CURRENT_UPDATE = 'CURRENT_UPDATE'

export const updateCurrent = (val) => ({type:CURRENT_UPDATE, payload: val})

export default (state = initState, action) => {
  switch (action.type) {
    case 'TODO_ADD':
      return {...state, todos: state.todos.concat(action.payload)}
    case CURRENT_UPDATE:
      return {...state, currentTodo: action.payload}
    default:
      return state
    }
}
