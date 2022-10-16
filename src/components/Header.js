import React from "react";
import { Link, Route } from 'react-router-dom';

export default function Header({ email, onSignOut }) {
    return (
        <header className="header">
            <div className="logo"></div>
            <Route path="/sign-in">
                <Link to='sign-up' className='header__menu-item'>Регистрация</Link>
            </Route>
            <Route path="/sign-up">
                <Link to='sign-in' className='header__menu-item'>Войти</Link>
            </Route>
            <Route exact path="/">
                <div className='header__loggedIn-container'>
                    <a className='header__email'>{email}</a>
                    <Link to='sign-in' className='header__sign-out' onClick={onSignOut}>Выйти</Link>
                </div>
            </Route>
        </header >
    )
}