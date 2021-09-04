import React from 'react'


import loginStyle from '../static/css/loginStyle.css'
import logo from '../static/images/logo.svg'
import banner from '../static/images/banner.png'

function LogIn (props){
        return(
            <div className='containerLogin'>
                <div className='header'>
                    <img className='logo' src={logo} alt='logo' />
                    <div className='navbar'>
                        <a className='link' href='#'>О компании</a>
                        <a className='link' href='#'>Продукты</a>
                        <a className='link' href='#'>Карьера</a>
                    </div>
                </div>
                <div className='content'>
                    <div className='banner'>
                        <img className='banner-img' src={banner} alt='banner' />
                    </div>
                    <div className='login-form'>
                        <p className='form-title'>Войдите в аккаунт</p>
                        <form>
                            <input type='text' placeholder='Логин' />   
                            <input type='text' placeholder='Пароль' />
                            <button className='submit-btn' type='submit'>Войти</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }


export default LogIn;