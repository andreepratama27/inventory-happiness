import { List, Map } from 'immutable';
import { ADD_SUPPLIER, DELETE_SUPPLIER, INITIAL_SUPPLIER } from '../constants'

const init = List([]);


export default function update(todos = init, action) {
  switch (action.type) {
  	case INITIAL_SUPPLIER:
  		return todos = action.payload;
  	case ADD_SUPPLIER:
  		todos.push(action.payload)
  		return todos
    default:
      return todos;
  }
}
