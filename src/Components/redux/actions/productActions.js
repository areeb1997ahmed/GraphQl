import { actionType } from '../contents/action-type'
import fakestoreapi from '../../../api/fakestoreapi'
export const setproduct = async (product) => {

    return {
        type: actionType.SET_PRODUCT,
        payload: product
    }
}

export const selectedProduct = (productId) => {
    return async function (dispatch) {
        const response = await fakestoreapi.get(`products/${productId}`)
        console.log(`products/${productId} ${response}`)
        dispatch({
            type: actionType.SELECTED_PRODUCT,
            payload: response.data 
        })
    }
}

export const fetchProducts = () => {
    return async function (dispatch) {

        const response = await fakestoreapi.get("/products")
        dispatch({
            type: actionType.FETCH_PRODUCT,
            payload: response.data
        })
    }


}