import { ADD_SUPPLIER, DELETE_SUPPLIER, INITIAL_SUPPLIER } from '../constants'


export function intialSupplier(n){
	return {
		type: INITIAL_SUPPLIER,
		payload: n
	}
}