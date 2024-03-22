import React from 'react'
import CartWidget from './CartWidget'
import "./navbar.css"

const NavBar = () => {
    return (
        <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="index.html"><img className='icon' src="/img/icon.png" alt="Snow Home Icon" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Living Room</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Dining Room</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Bedroom</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home Office</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Decor & Pillows</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Lighting</a>
                        </li>
                    </ul>
                </div>
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar