import React from 'react'
import { BrowserRouter as BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import './App.css';
import Team from './Pages/Team';
import Navbar from './Pages/Home/Navbar';
import ControlCenter from './Pages/ControlCenter/Control';
import IframeComponent from './Pages/ControlCenter/IframeComponent';
import Chatbox from './Pages/ProjectDev.jsx/Chatbox';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/OurTeams" element={<Team/>} />
          <Route path="/ControlCenter" element={<ControlCenter/>}/>
          <Route path="/ProjectDev" element={<Chatbox/>}/>
          <Route path="*" element={<div>404 Not Found</div>}></Route>
        </Routes>
      </BrowserRouter>
      {/* <IframeComponent/> */}
    </>
  )
}

