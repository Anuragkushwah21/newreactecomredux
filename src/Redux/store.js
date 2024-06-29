import { createStore, combineReducers, applyMiddleware } from 'redux'
import {thunk} from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
// import { categoriesReducer } from './Reducers/CategoryReducers';

const reducer = combineReducers({
    //cat:categoriesReducer // api ka DATA GAT krne ke liye h  
    
})

let initializeState={}

const Store = createStore(reducer, initializeState, composeWithDevTools(applyMiddleware(thunk)))

export default Store