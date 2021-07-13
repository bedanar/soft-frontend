import React from 'react'
import TrainerPage from '../TrainersPage'
import './Trainer.css'
const Trainer = (props) => {
    return (
        <div class={`trainers-list__item ${props.class} bg-image`}>
            <div class="trainer__content">
                <h3 class="trainer-heading">{props.name}</h3>
                <p class="trainer-desc">{props.info}</p>
                <a class="more" href={TrainerPage} >Подробнее</a>
            </div>
        </div>
    )
}

export default Trainer