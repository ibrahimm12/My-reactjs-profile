import React from 'react';
import { NavLink } from 'react-router-dom';

// fa-youtube

const Footer = () => (
    <div className="footer">
        <div className="footer__icons">
            <a href="https://github.com/ibrahimm12" rel="noopener noreferrer" target="_blank"><i className="fab fa-github footer__icons__icon"></i></a>
            <a href="https://fi.linkedin.com/in/abdirahman-ibrahim-7a2162120" rel="noopener noreferrer" target="_blank"><i className="fab fa-linkedin footer__icons__icon"></i></a>
        </div>

        <ul className="footer__list">
            <li className="footer__list__item"><NavLink to="skills" className="footer__list__item__link">skills</NavLink></li>
            <p className="footer__list__pipe">|</p>
            <li className="footer__list__item"><NavLink to="work-history" className="footer__list__item__link">work history</NavLink></li>
            <p className="footer__list__pipe">|</p>
            <li className="footer__list__item"><NavLink to="projects" className="footer__list__item__link">projects</NavLink></li>
            <p className="footer__list__pipe">|</p>
           
            <li className="footer__list__item"><NavLink to="contact" className="footer__list__item__link">contact</NavLink></li>        </ul>
    </div>
);

export default Footer;