import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './view/containers/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './store/store';

ReactDOM.render(
  <React.StrictMode >
      <Provider store={store}>
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);




//todo router

//todo create team page
//todo create occasion page
//todo randomizer page
//todo log page
//todo add Material UI
