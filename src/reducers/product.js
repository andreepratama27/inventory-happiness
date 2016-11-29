import { List, Map } from 'immutable';
import { ADD_PRODUCT, INITIAL_PRODUCT } from '../constants';

const init = List([]);


export default function update(todos = init, action) {
  switch (action.type) {
  	case INITIAL_PRODUCT:
  		return todos = action.payload;
    case ADD_PRODUCT:
      return todos.push(Map(action.payload));
    default:
      return todos;
  }
}
