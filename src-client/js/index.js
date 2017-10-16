import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import ContainerNewsSources from './containers/containerNewsSources';
import ContainerNewsHeadlines from './containers/containerNewsHeadlines';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )}>
    <BrowserRouter>
      <div>
      <Link to='/'>Sources</Link>
      <Link to='/headlines'>Headlines</Link>
        <Switch>
          <Route exact path='/' component={ContainerNewsSources} />
          <Route path='/headlines/:newsid' component={ContainerNewsHeadlines} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
