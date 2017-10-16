import { combineReducers } from 'redux';
import { reducerGeneric } from './reducerGeneric';
import { reducerGetNewsSources } from './reducerGetNewsSources';
import { reducerGetHeadlines } from './reducerGetHeadlines';

const rootReducer = combineReducers({
  generic: reducerGeneric,
  newsSources: reducerGetNewsSources,
  headlines: reducerGetHeadlines
});

export default rootReducer;
