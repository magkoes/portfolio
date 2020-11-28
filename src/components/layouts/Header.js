import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import classNames from 'classnames';
// Pages
import Legal from '../pages/Legal';
import Home from '../pages/Home';
import Gallery from '../pages/Gallery';
import About from '../pages/About';
import Contact from '../pages/Contact';

const Header = () => {
    const [burgerIconIsPressed, setBurgerIconIsPressed] = useState(false);
    const [navBurger, setNavBurger] = useState(false);
    

    const handleClickBurgerIcon = () => {
        (burgerIconIsPressed == true) ? setBurgerIconIsPressed(false) : setBurgerIconIsPressed(true);
        (navBurger == true) ?  setNavBurger(false) : setNavBurger(true);
    }

    const handleClickNavLink = () =>{
        (burgerIconIsPressed == true) ? setBurgerIconIsPressed(false) : setBurgerIconIsPressed(true);
        (navBurger == true) ?  setNavBurger(false) : setNavBurger(true);
    }

    const burgerIconClass = classNames({
        'btn-burger-icon--clicked': burgerIconIsPressed,
    })

    const navBurgerClass = classNames({
        'nav-burger--open': burgerIconIsPressed,
    })

    return ( 
        <Router>
            <header className="header">
                <nav className="header__nav">
                    <ul className="header__nav__list" role="navigation" aria-label="main">
                        <li className="header__nav__item">
                            <button className={[`btn-burger-icon ${burgerIconClass}`]} onClick={handleClickBurgerIcon} aria-label="Open the menu" aria-controls="secondary" aria-expanded={burgerIconIsPressed}><span aria-hidden="true"></span></button>
                        </li>
                        <li className="header__nav__item">
                            <Link to="/"><span className="brand">Magalie Koessler <span>Photographe</span></span></Link>       
                        </li>
                        <li className="header__nav__item">
                            <Link to="/series"><span className="link-gallery">Séries</span></Link>
                        </li>
                    </ul>
                </nav>
            </header> 

            <div className={[`nav-burger ${navBurgerClass}`]}>
                <div className="nav-burger__left">
                    <nav className="nav-burger__header">
                        <ul id="secondary" className="nav-burger__header__list" role="navigation" aria-label="secondary">
                            <li className="nav-burger__header__list__item">
                                <Link to="/" onClick={handleClickNavLink}>Accueil</Link>
                            </li>
                            <li className="nav-burger__header__list__item">
                                <Link to="/a-propos" onClick={handleClickNavLink}>A propos</Link>
                            </li>
                            <li>
                                <Link to="/contact" onClick={handleClickNavLink}>Contact</Link>
                            </li>
                        </ul>
                    </nav>
                    <nav className="nav-burger__body" role="navigation" aria-label="tertiary">
                        <ul className="header__nav-burger__list">
                            <li className="nav-burger__header__list__item">
                                Suivez-moi
                                <ul>
                                    <a href="https://www.instagram.com/realitymage/" target="_blank" rel="noreferrer">Instagram</a>
                                    <a href="https://fr.linkedin.com/in/magalie-koessler-995419157" target="_blank"  rel="noreferrer">Linkedin</a>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                    <nav className="nav-burger__footer">
                        <ul className="header__nav-burger__list" role="navigation" aria-label="legal">
                            <li>Tous droits reservé</li>
                            <li className="nav-burger__header__list__item">
                                <Link to="/mentions-legales" onClick={handleClickNavLink}>Mentions légales</Link>
                            </li>
                            <li>
                                <Link to="/politique-de-confidentialite" onClick={handleClickNavLink}>Politique de confidentialité</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="nav-burger__right">
                </div>
            </div>
            
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/series' component={Gallery} />
                <Route path='/a-propos' component={About} />
                <Route path='/contact' component={Contact} />
                <Route path='/mentions-legales' component={Legal} />
                <Route path='/politique-de-confidentialite' component={Legal} />
            </Switch>
        </Router>
    );
}
 
export default Header;