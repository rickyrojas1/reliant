/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable react/button-has-type */
import React from 'react';
import { Route, Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import HomePage from '../HomePage/HomePage';
import ContactPage from '../ContactPage/ContactPage';
import ServicePage from '../ServicePage/ServicePage';
import AboutUsPage from '../AboutUsPage/AboutUsPage';
import useWindowDimensions from '../../hooks/useWindowDimensions';

import './App.scss';

function App() {
  const { width } = useWindowDimensions();

  return (
    <div className="app">

      <header className="header">
        {
          width > 600
            ? (
              <>
                <Link className="nav-btn" to="/">Home</Link>
                <Link className="nav-btn" to="/contact">Contact</Link>
                <Link className="nav-btn" to="/services">Services</Link>
                <Link className="nav-btn" to="/about">About Us</Link>
              </>
            )
            : (
              <Menu disableOverlayClick={false} className="mobile-menu" right>
                <Link className="nav-btn" to="/">Home</Link>
                <Link className="nav-btn" to="/contact">Contact</Link>
                <Link className="nav-btn" to="/services">Services</Link>
                <Link className="nav-btn" to="/about">About Us</Link>
              </Menu>
            )
        }
      </header>

      <Route exact path="/"><HomePage /></Route>
      <Route path="/contact"><ContactPage /></Route>
      <Route path="/services"><ServicePage /></Route>
      <Route path="/about"><AboutUsPage /></Route>

      <footer className="footer">Copyright @2021 | Reliant Fire Hose Testing Inc.</footer>
    </div>
  );
}

export default App;
