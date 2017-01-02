import { List, Map } from 'immutable';
import { INITIAL_TRANSAKSI } from '../constants'

const init = List([]);


export default function update(todos = init, action) {
  switch (action.type) {
  	case INITIAL_TRANSAKSI:
  		return todos = action.payload;
    default:
      return todos;
  }
}
