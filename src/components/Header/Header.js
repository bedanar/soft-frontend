import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import {BrowserRouter as Router} from 'react-router-dom'


const Header = () => {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar
    (!sidebar)

    return (
        <header className="header">
            <div className="container">
                <div className={sidebar ? "menu-burger active" : "menu-burger"}>
                    <div>
                        <a href=""><img src="/SoftLogo.png" alt="" className="logo-1" /></a>
                    </div>
                    <nav className="">
                        <Router>
                            <ul className="nav__list-burger">
                                <li className="list-item-b">
                                    <Link to="/" className="nav__list-item">Главная</Link>
                                </li>
                                <li className="list-item-b">
                                    <Link to="/trainers" className="nav__list-item">Тренировки</Link>
                                </li>
                                <li className="list-item-b">
                                    <a href="" className="nav__list-item">Отзывы</a>
                                </li>
                                <li className="list-item-b">
                                    <a href="" className="nav__list-item">Стоимость</a>
                                </li>
                            </ul>
                        </Router>
                    </nav>
                </div>
                <div className="header__content">
                    <a href=""><img src="/SoftLogo.png" alt="" className="logo" /></a>
                    <nav className="navbar">
                        <Router>
                            <ul className="nav__list">
                                <li className="list-item">
                                    <Link to="/" className="nav__list-item">Главная</Link>
                                </li>
                                <li className="list-item">
                                    <Link to="/trainers" className="nav__list-item">Тренировки</Link>
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
                    <div className="menu" onClick={showSidebar}></div>
                </div> 
            </div>
        </header>
    )
}
export default Header