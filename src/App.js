import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import './App.css';
import Team from './Pages/Team';
import Navbar from './Pages/Home/Navbar';
import ControlCenter from './Pages/ControlCenter/Control';


export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/OurTeams" element={<Team/>}  ></Route>
          <Route path="/ControlCenter" element={<ControlCenter/>}></Route>
          <Route path="*" element={<div>404 Not Found</div>}></Route>
        </Routes>
      </Router>
    </>
  )
}


