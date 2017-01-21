/**
 * External dependencies
 */
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

/**
 * Internal dependencies
 */
import Application from './containers/Application';
import reducer from './reducers';

/**
 * Create store
 */
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

/**
 * Render application
 */
render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById('root'),
);