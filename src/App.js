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
  const trainerData = [
    {
      id: 1,
      trainerClass: 'kraynov',
      fullName: 'Сергей Крайнов',
      info: 'Фитнеc, кардио, детский фитнес, ЛФК.',
    },
    {
      id: 2,
      trainerClass: 'isaeva',
      fullName: 'Екатерина Исаева',
      info: 'фитнес, хореография, Стретчинг, ОФП',
    },
    {
      id: 3,
      trainerClass: 'krasnova',
      fullName: 'Наталья Краснова',
      info: 'Фитнеc, кардио, ЛФК, ОФП, для всей семьи',
    },
    {
      id: 4,
      trainerClass: 'timofeev',
      fullName: 'Кирилл Тимофеев',
      info: 'Фитнеc, кардио, ОФП, ЛФК, для всей семьи, Групповые, Детский фитнес',
    },
    {
      id: 5,
      trainerClass: 'bortnik',
      fullName: 'Роман Бортник',
      info: 'фитнес, Стретчинг, ОФП, кроссфит, воркаут',
    },
    {
      id: 6,
      trainerClass: 'samoylova',
      fullName: 'Самойлова Марина',
      info: 'Фитнес, ОФП',
    },
    {
      id: 7,
      trainerClass: 'tsikhorsky',
      fullName: 'Юрий Цихорский',
      info: 'Фитнес',
    },
    {
      id: 8,
      trainerClass: 'pavlov',
      fullName: 'Александр Павлов',
      info: 'Фитнес, пилатес, ОФП.',
    },
    {
      id: 9,
      trainerClass: 'govrova',
      fullName: 'Алиса Говорова',
      info: 'Йога, групповые.',
    },
  ]
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={MainPage}> 
            </Route>
            <Route  path="/trainers" > 
              <TrainersPage trainers = {trainerData} />
            </Route>
            <Route  path="/trainer-page">
              <TrainerPage data = {data} /> 
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
