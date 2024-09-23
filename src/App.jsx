import { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Blue from './components/Blue';
import Red from './components/Red';
import Home from './components/Home';
import './App.css';

export default function App() {
  const [] = useState(null);

  
  return (
    <>
    <div id="container">
      <div id="navbar">
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
        <Link to="/home">Home</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path='/blue' element={<Blue />}></Route>
          <Route path='/red' element={<Red />}></Route>
          <Route path='/home' element={<Home />}></Route>
        </Routes>
      </div>
    </div>
    </>
  )
}