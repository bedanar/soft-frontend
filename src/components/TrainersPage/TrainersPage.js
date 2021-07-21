import React, { Component } from 'react'
import Header from '../Header/Header'
import './TrainersPage.css'
import Trainers from './Trainers'
import Footer from '../Footer'
import Apply from './ApplyPopup'
import { useState } from 'react'


const TrainersPage = () => {
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
                        <Trainers />
                    </div>
                </div>
                <Footer />
                <Apply trigger={buttonPopup} setTrigger = {setButtonPopup} />
            </div>
        )
}
export default TrainersPage

