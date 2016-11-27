import { List, Map } from 'immutable';
import { INCREASE } from '../constants';

const init = List([]);


export default function update(todos = init, action) {
  switch (action.type) {
    case INCREASE:
      return todos.push(Map(action.payload));
    default:
      return todos;
  }
}
