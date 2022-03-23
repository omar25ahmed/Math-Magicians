import React from 'react';
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import Calculator from './Components/Calculator';
import Home from './Pages/Home';
import Quote from './Pages/Quote';
import './App.css';

const App = () => (
  <Router>
    <nav className="navbar">
      <h1>Math Magicians</h1>
      <div className="btns">
        <Link to="/"> Home </Link>
        <Link to="/calculator" className="u-btn"> Calculator </Link>
        <Link to="/Quote"> Quote </Link>
      </div>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quote" element={<Quote />} />
    </Routes>
  </Router>
);

export default App;
