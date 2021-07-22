import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import ErrorBoundry from './components/ErrorBoundry';


ReactDOM.render(
    <ErrorBoundry>
        <Router>
          <App />
        </Router>
    </ErrorBoundry>,
  document.getElementById('app')
);
