import { List, Map } from 'immutable';
import { ADD_PRODUCT } from '../constants';

const init = List([]);


export default function update(todos = init, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return todos.push(Map(action.payload));
    default:
      return todos;
  }
}
