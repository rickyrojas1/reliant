/* eslint-disable react/button-has-type */
import React from 'react';
import { Route, Link } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import ContactPage from '../ContactPage/ContactPage';

import './App.scss';

function App() {
  return (
    <div className="app">
      <header className="header">
        <Link className="nav-btn" to="/">Home</Link>
        <Link className="nav-btn" to="/contact">Contact</Link>
      </header>

      <Route exact path="/"><HomePage /></Route>
      <Route path="/contact"><ContactPage /></Route>
      <footer className="footer">Footer</footer>
    </div>
  );
}

export default App;
