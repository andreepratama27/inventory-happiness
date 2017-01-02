import { ADD_TRANSAKSI,INITIAL_TRANSAKSI } from '../constants'


export function intialSupplier(n){
	return {
		type: INITIAL_TRANSAKSI,
		payload: n
	}
}