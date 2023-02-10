import { reducer as toastrReducer } from 'react-redux-toastr'
import { combineReducers } from 'redux'
import { allData } from './reducer';



const reducers = {
    allData: allData,
    toastr: toastrReducer
}
export const reducer = combineReducers(reducers);