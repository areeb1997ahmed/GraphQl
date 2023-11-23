
// reducer.js
import { combineReducers } from 'redux';
import { productReducer,selectedProductReducer } from './productReducer';


const reducer = combineReducers({
    allProduct: productReducer,
    product111:selectedProductReducer
});

export default reducer;
