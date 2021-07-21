import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router } from 'react-router-dom';
import {TrainersServiceProvider} from './TrainersServiceContext'
import ErrorBoundry from './components/ErrorBoundry';
import TrainersstoreService from './services/trainers-services'

const trainersService = new TrainersstoreService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <TrainersServiceProvider value={trainersService}>
        <Router>
          <App />
        </Router>
      </TrainersServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('app')
);
