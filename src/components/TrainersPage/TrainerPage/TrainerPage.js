import React from 'react'
import './TrainerPage.css'
import TrainersPage from '../TrainersPage'

const TrainerPage = () => {

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
                <div className="training-types">
                    <p className="trainer-desc__bold">Виды тренировок</p>
                    <ul class="train-list">
                        <li class="train-list__item">
                                <img class="train__img" src="/fitness.png"></img>
                                <h3 class="train__heading">Фитнес</h3>
                        </li>
                        <li class="train-list__item">
                                <img class="train__img" src="/kardio.png"></img>
                                <h3 class="train__heading">Кардио</h3>
                        </li>
                        <li class="train-list__item">
                                <img class="train__img" src="/kids.png"></img>
                                <h3 class="train__heading">Детский фитнес</h3>
                        </li>
                        <li class="train-list__item">
                                <img class="train__img" src="/ofp.png"></img>
                                <h3 class="train__heading">ОФП</h3>
                        </li>
                        <li class="train-list__item">
                                <img class="train__img" src="/lfp.png"></img>
                                <h3 class="train__heading">ЛФК</h3>
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