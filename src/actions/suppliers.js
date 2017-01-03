import { INITIAL_SUPPLIER, ADD_SUPPLIER } from '../constants'


export function intialSupplier(n){
	return {
		type: INITIAL_SUPPLIER,
		payload: n
	}
}


export function createSupplier(n){
	return {
		type: ADD_SUPPLIER,
		payload: n
	}
}