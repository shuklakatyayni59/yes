import React from 'react';
import './Header.css'
import {Link} from "react-router-dom"
import Logo from './NetflixLogo.png'
const Header = () => {
  return (
    <header className = "showcase">
        <div className = "showcase-top">
            <img src = {Logo} alt = " " className = "Log"/>
            <Link to = "/" className ="btn btn-rounded">
             Sign In
             </Link>
  </div>
        <div className="showcase-content">
            <h1>Unlimited Movies</h1>
            <p>Watch anywhere. Cancel Anytime</p>
            <Link to = "/netflix-show" className ="btn btn-xl">
            Watch free for 30 days
            <i className = "fas fa-chevron-right btn-icon"></i>
            </Link>
        </div>
    </header>
  )
}

export default Header
