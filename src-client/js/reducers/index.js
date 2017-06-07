import { combineReducers } from 'redux';
import { reducerGeneric } from './reducerGeneric';
import { reducerGetNewsSources } from './reducerGetNewsSources';

const rootReducer = combineReducers({
  generic: reducerGeneric,
  newsSources: reducerGetNewsSources

});

export default rootReducer;
