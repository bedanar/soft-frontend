import React from 'react'
import Header from './components/Header'
import './App.css'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import TrainersPage from './components/TrainersPage';
import Footer from './components/Footer';
import TrainerPage from './components/TrainersPage/TrainerPage'
function App() {
  return (
    <div className="App">
        <Router>
          <Route path="/trainers" component={TrainersPage}/> 
        </Router>
        <Router>
          <Route path="/trainer-page" component={TrainerPage}/> 
        </Router>
    </div>
  );
}

export default App;
