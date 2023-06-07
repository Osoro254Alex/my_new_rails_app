// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/configureStore';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);