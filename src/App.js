import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import TrainersPage from './components/TrainersPage';
import TrainerPage from './components/TrainersPage/TrainerPage'
import MainPage from './components/MainPage';
function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route exact path="/"> 
              <MainPage />
            </Route>
            <Route exact path="/trainers"> 
              <TrainersPage />
            </Route>
            <Route exact path="/trainer-page"> 
              <TrainerPage />
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
