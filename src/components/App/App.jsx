/* eslint-disable react/button-has-type */
import React from 'react';
import { Route, Link } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import ContactPage from '../ContactPage/ContactPage';
import ServicePage from '../ServicePage/ServicePage';
import AboutUsPage from '../AboutUsPage/AboutUsPage';

import './App.scss';

function App() {
  return (
    <div className="app">
      <header className="header">
        <Link className="nav-btn" to="/">Home</Link>
        <Link className="nav-btn" to="/contact">Contact</Link>
        <Link className="nav-btn" to="/services">Services</Link>
        <Link className="nav-btn" to="/about">About Us</Link>
      </header>

      <Route exact path="/"><HomePage /></Route>
      <Route path="/contact"><ContactPage /></Route>
      <Route path="/services"><ServicePage /></Route>
      <Route path="/about"><AboutUsPage /></Route>

      <footer className="footer">Footer</footer>
    </div>
  );
}

export default App;
