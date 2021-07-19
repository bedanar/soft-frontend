import React from 'react'
import './TrainerPage.css'
import TrainersPage from '../TrainersPage'

const TrainerPage = () => {
    const data = [
        {
            trainerStatus: 'Свободен',
            fullName: 'Сергей Крайнов',
            trainerPosition: 'Тренер',
            trainerExperience: 'Более 5 лет',
            trainingCost: '1000 руб / час',
            trainerContacts: 'https://www.instagram.com/krainov_sergei/',
            trainerAbout:
            "Работаю фитнес тренером с 2016 года. В своей работе придерживаюсь правила «фитнес — для здоровья» и «не навреди». Помимо помощи в похудении и наборе мышц так же помогаю людям с болями в коленях, локтях и пояснице.Основная задача, которую я решаю с клиентами каждый день — это устранение последствий сидячего образа жизни (боли в шее и спине). Составляю планы тренировок и питания.Онлайн тренировки.",
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
    ]
    return (
        <div className="trainer-page__flex">
            <div className="trainer-page__information-left">
                <div className="left-flex">
                    <div className="align-left">
                        <button className="close" >
                            <img src="/arrow.svg" />
                        </button>
                    </div>
                    <div className="trainer__person">
                        <img className="trainer__image" src="/kraynov.png"/>
                        <div className="status">
                            <div className="status__circle-green">  </div>
                            <span className="status__description">Свободен</span>
                        </div>
                        <p className="trainer__name">Сергей Крайнов</p>
                        <p className="trainer__description">Тренер</p>
                        
                    </div>
                </div>
                <div>
                    <p className="trainer-desc__bold">Опыт работы</p>
                    <p className="trainer-desc__normal">Более 5 лет</p>
                </div>
                <div className="trainer-price__info">
                    <p className="trainer-desc__bold">Цена</p>
                    <p className="trainer-desc__normal">1000 руб / час</p>
                    <p className="trainer-desc__bold">При покупке:</p>
                    <p className="trainer-desc__normal">5 или более занятий скидка 5%</p>
                    <p className="trainer-desc__normal">10 или более занятий скидка 10%</p>
                </div>
                <div className="trainer__contacts">
                    <p className="trainer-desc__bold">Контакты:</p>
                    <a className="social-site inst">https://www.instagram.com/krainov_sergei/</a>
                    <a className="social-site phone"></a>
                </div>
            </div>
            <div className="trainer-page__information-right">
                <div className="trainer__kredo">Для того, чтобы начать заниматься с тренером, необходимо написать ему напрямую через указанные контакты на странице.</div>
                <div className="trainer__about">
                    <p className="trainer-desc__bold">О себе</p>
                    <p className="trainer-desc__text">Работаю фитнес тренером с 2016 года. В своей работе придерживаюсь правила «фитнес — для здоровья» и «не навреди». Помимо помощи в похудении и наборе мышц так же помогаю людям с болями в коленях, локтях и пояснице.
    Основная задача, которую я решаю с клиентами каждый день — это устранение последствий сидячего образа жизни (боли в шее и спине).
    Составляю планы тренировок и питания.
    Онлайн тренировки.</p>
                </div>
                <div className="training-types-page">
                    <p className="trainer-desc__bold">Виды тренировок</p>
                    <ul class="train-list">
                        <li class="train-list__item-page">
                                <img class="train__img-page" src="/fitness.png"></img>
                                <h3 class="train__heading-page">Фитнес</h3>
                        </li>
                        <li class="train-list__item-page">
                                <img class="train__img-page" src="/kardio.png"></img>
                                <h3 class="train__heading-page">Кардио</h3>
                        </li>
                        <li class="train-list__item-page">
                                <img class="train__img-page" src="/kids.png"></img>
                                <h3 class="train__heading-page">Детский фитнес</h3>
                        </li>
                        <li class="train-list__item-page">
                                <img class="train__img-page" src="/ofp.png"></img>
                                <h3 class="train__heading-page">ОФП</h3>
                        </li>
                        <li class="train-list__item-page">
                                <img class="train__img-page" src="/lfp.png"></img>
                                <h3 class="train__heading-page">ЛФК</h3>
                        </li>
                    </ul>
                </div>
                <div className="sertificates">
                    <p className="trainer-desc__bold">Сертификаты</p>
                    <ul className="sertificates__list">
                        <li className="serteficates__list-item">
                            <img src="/kraynov-1.png" />
                        </li>
                        <li className="serteficates__list-item">
                            <img src="/kraynov-2.png" />
                        </li>
                        <li className="serteficates__list-item">
                            <img src="/kraynov-3.png" />
                        </li>
                        <li className="serteficates__list-item">
                            <img src="/kraynov-4.png" />
                        </li>
                        <li className="serteficates__list-item">
                            <img src="/kraynov-5.png" />
                        </li>
                    </ul>
                </div>
                <div className="education">
                    <p className="trainer-desc__bold">Образовавние</p>
                    <ul className="education__list">
                        <li className="education__list-item">
                            Федерация фитнес-аэробики России, инструктор тренажёрного зала2016 г.
                        </li>
                        <li className="education__list-item">
                        ООО МУЦ ДПО «Образовательный стандарт» , профессиональная переподготовка по программе «Педагогика и методика преподавания физической культуры», квалификация — тренер-преподаватель2019 г
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TrainerPage