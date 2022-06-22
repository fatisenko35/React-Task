import { combineReducers } from 'redux';
import viewReducer from './viewReducer';
import postReducer from './postReducer';

const rootReducer = combineReducers({
    viewReducer,
    postReducer,
});
export default rootReducer;