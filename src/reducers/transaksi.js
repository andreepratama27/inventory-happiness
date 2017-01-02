import { List, Map } from 'immutable';
import { INITIAL_TRANSAKSI, ADD_TRANSAKSI } from '../constants'

const init = List([]);


export default function update(todos = init, action) {
  switch (action.type) {
  	case INITIAL_TRANSAKSI:
  		return todos = action.payload;
  	 case ADD_TRANSAKSI:
  	 	todos.push(action.payload)
      	return todos;
    default:
      return todos;
  }
}
