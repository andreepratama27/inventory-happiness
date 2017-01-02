import { ADD_TRANSAKSI, INITIAL_TRANSAKSI } from '../constants'


export function initTransaksi(n){
	return {
		type: INITIAL_TRANSAKSI,
		payload: n
	}
}
export function addTransaksi(n) {
  return {
    type: ADD_TRANSAKSI,
    payload: n
  }
}