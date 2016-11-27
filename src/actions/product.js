import { ADD_PRODUCT, DELETE_PRODUCT } from '../constants'

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