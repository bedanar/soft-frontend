import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import TrainersPage from './components/TrainersPage';
import TrainerPage from './components/TrainersPage/TrainerPage'
import MainPage from './components/MainPage';



function App() {
  const data = {
    kraynov: {
        trainerStatus: 'Свободен',
        fullName: 'Сергей Крайнов',
        trainerImage: '/kraynov.png',
        trainerPosition: 'Тренер',
        trainerExperience: 'Более 5 лет',
        trainingCost: '1000 руб / час',
        trainerContacts: 'https://www.instagram.com/krainov_sergei/',
        trainerAbout: "Работаю фитнес тренером с 2016 года. В своей работе придерживаюсь правила «фитнес — для здоровья» и «не навреди». Помимо помощи в похудении и наборе мышц так же помогаю людям с болями в коленях, локтях и пояснице.Основная задача, которую я решаю с клиентами каждый день — это устранение последствий сидячего образа жизни (боли в шее и спине). Составляю планы тренировок и питания.Онлайн тренировки.",
        trainingTypes:
        [
            {name: 'Фитнес', image: '/fitness.png'},
            {name: 'Кардио', image: '/kardio.png'},
            {name: 'Детский фитнес', image: '/kids.png'},
            {name: 'ОФП', image: '/ofp.png'},
            {name: 'ЛФК', image: '/lfp.png'},
        ],
        trainerAwards:
        [ '/kraynov-1.png', '/kraynov-2.png', '/kraynov-3.png', '/kraynov-4.png', '/kraynov-4.png'],
        trainerEducation:
        ['Федерация фитнес-аэробики России, инструктор тренажёрного зала2016 г.',
        'ООО МУЦ ДПО «Образовательный стандарт» , профессиональная переподготовка по программе «Педагогика и методика преподавания физической культуры», квалификация — тренер-преподаватель2019 г']
    }
  }
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={MainPage}> 
            </Route>
            <Route  path="/trainers" component={TrainersPage}> 
            </Route>
            <Route  path="/trainer-page" component={TrainerPage}> 
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
