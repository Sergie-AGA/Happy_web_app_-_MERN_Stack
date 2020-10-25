import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/global.css';
import logoImg from '../images/logo.svg';
import '../styles/pages/landing.css';
import { FiArrowRight } from 'react-icons/fi';

function Landing() {
    return (   <div id="page-landing">
    <div className="content-wrapper">
      <img src={logoImg} alt="happy"/>
      <main>
        <h1>Bring happiness to the world</h1>
        <p>Visit orphanages and change the day of many children</p>
      </main>
      <div className="location">
        <strong>Manchester</strong>
        <span>United Kingdom</span>
      </div>
      <Link to="/app" className="enter-app">
        <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
      </Link>
    </div>
  </div>)
}

export default Landing;