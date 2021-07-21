import React from 'react'
import TrainerPage from '../TrainersPage'
import './Trainer.css'


const Trainer = ({trainer}) => {
    const { trainerClass, fullName, info } = trainer;
    return (
        <div className={`trainers-list__item ${trainerClass} bg-image`}>
            <div className="trainer__content">
                <h3 className="trainer-heading">{fullName}</h3>
                <p className="trainer-desc">{info}</p>
                <a class="more" href={TrainerPage} >Подробнее</a>
            </div>
        </div>
    )
}

export default Trainer