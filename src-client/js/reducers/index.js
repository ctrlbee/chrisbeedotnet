import { combineReducers } from 'redux';
import { reducerGetExample } from './reducerGetExample';

const rootReducer = combineReducers({
  exampleData: reducerGetExample
});

export default rootReducer;
