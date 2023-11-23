
// productReducer.js
import { actionType } from "../contents/action-type"

const initialState = {
    products: []
}

export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionType.SET_PRODUCT:
         
            return {
                ...state,
                products: payload
            };
            case actionType.FETCH_PRODUCT:
                return {
                    ...state,
                    products: payload
                };
        default:
            return state;
    }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  
    switch (type) {
        case actionType.SELECTED_PRODUCT:
            return { ...state, ...payload };
        default:
            return state
    }
}