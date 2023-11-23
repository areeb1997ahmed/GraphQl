import {createStore ,applyMiddleware ,compose} from 'redux'
import  reducers from './reducers/index'
import thunk from 'redux-thunk'
// const reducer= (state=0,action)=>{
//     switch (action.type){
//         case 'INCREMENT':return state+1;
//         case 'DECREMENT':return state-1;
//         case 'Update':return state+1;
//         case 'reDate':return state-1;
        
//         default:  return state
//     }
// }
// export const store = createStore(reducer)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

 
 const store = createStore(reducers,composeEnhancers(applyMiddleware(thunk)))
 export default store
 