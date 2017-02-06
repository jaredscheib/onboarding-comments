import React from 'react';
import { Provider } from 'react-redux';
import Promise from 'promise-polyfill';
import { render } from 'react-dom';
import { createStore,
         applyMiddleware,
         combineReducers } from 'redux';
import { Router,
         Route,
         browserHistory,
         hashHistory,
         IndexRoute } from 'react-router';

import {
  syncHistoryWithStore,
  routerReducer } from 'react-router-redux';

import middlewares from './middleware';
// import {

// } from 'Actions';

import Application from './reducers/Application';
import App from './containers/ApplicationContainer';

const store = createStore(
  combineReducers({
    Application,
    routing: routerReducer
  }),
  applyMiddleware(...middlewares)
);

const history = syncHistoryWithStore(hashHistory, store);

(function() {
    // window.debug = true;
    window.Promise = window.Promise || Promise; //Promise polyfill
    if(window.debug){
        console.log = function(){};
    }
}());


render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app-container')
);
