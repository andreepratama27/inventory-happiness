import { ADD_PRODUCT, DELETE_PRODUCT, INITIAL_PRODUCT } from '../constants'

export function addproduct(n) {
  return {
    type: ADD_PRODUCT,
    payload: n
  }
}

export function decrease(n) {
  return {
    type: DELETE_PRODUCT,
    amount: n
  }
}

export function initialproduct(n){
	return {
		type: INITIAL_PRODUCT,
		payload: n
	}
}