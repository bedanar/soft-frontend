import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import {BrowserRouter as Router} from 'react-router-dom'
import TrainersPage from '../TrainersPage'

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__content">
                    <a href=""><img src="/SoftLogo.png" alt="" className="logo" /></a>
                    <nav className="navbar">
                        <Router>
                            <ul className="nav__list">
                                <li className="list-item">
                                    <Link to="https://bedanar.github.io/soft-website/" className="nav__list-item">Главная</Link>
                                </li>
                                <li className="list-item">
                                    <Link to={TrainersPage} className="nav__list-item">Тренировки</Link>
                                </li>
                                <li className="list-item">
                                    <a href="" className="nav__list-item">Отзывы</a>
                                </li>
                                <li className="list-item">
                                    <a href="" className="nav__list-item">Стоимость</a>
                                </li>
                            </ul>
                        </Router>
                    </nav>
                </div>
            </div>
        </header>
    )
}
export default Header