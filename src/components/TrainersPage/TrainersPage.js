import React, { Component } from 'react'
import Header from '../Header/Header'
import './TrainersPage.css'
import Trainer from './Trainer'
import Footer from '../Footer'
import Apply from './ApplyPopup'
import { useState } from 'react'


const TrainersPage = ({trainers}) => {
    const [buttonPopup, setButtonPopup] = useState(false)
        return (
            <div>
                <Header />
                <div className="trainers">
                    <div className="container">
                        <h1 className="trainers__title">Тренеры</h1>
                        <div className="trainers__description">
                            <p className="trainers__text">Выберите тренера из предложеных или оставьте заявку</p>
                            <button className="btn__apply" onClick={() => setButtonPopup(true)}>Подать заявку</button>
                        </div>
                        <ul className="trainers__list">
                        {
                            trainers.map((trainer) => {
                                return (
                                    <li key={trainer.id} >
                                        <Trainer trainer={trainer} />
                                    </li>
                                )
                            })
                        }
                        </ul>
                    </div>
                </div>
                <Footer />
                <Apply trigger={buttonPopup} setTrigger = {setButtonPopup} />
            </div>
        )
}
export default TrainersPage

