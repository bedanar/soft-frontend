import React from 'react'
import TrainerPage from '../TrainersPage'
import './Trainer.css'


const Trainer = ({trainer}) => {
    return (
        <div className={`trainers-list__item ${trainer.trainerClass} bg-image`}>
            <div className="trainer__content">
                <h3 className="trainer-heading">{trainer.fullName}</h3>
                <p className="trainer-desc">{trainer.info}</p>
                <a class="more" href={TrainerPage} >Подробнее</a>
            </div>
        </div>
    )
}

export default Trainer