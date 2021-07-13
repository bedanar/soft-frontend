import React from 'react'
import './Apply.css'
const Apply = () => {
    return(
        <div className="apply-bg">
            <div className="container">
                <div className="apply-flex">
                    <form className="signup">
                        <input type="text" placeholder="Имя" className="sign-up__input name__input" />
                        <input type="e-mail" placeholder="Электронная почта" className="sign-up__input mail__input" />
                        <input type="phone" placeholder="Телефон" className="sign-up__input phone__input" />
                        <button className="signup-btn" type="submit" >Регистрация</button>
                    </form>
                    <img src="/signup.png" className="signup__img"/>
                </div>
            </div>
        </div>
    )
}

export default Apply