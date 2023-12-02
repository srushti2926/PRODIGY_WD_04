import './App.css';

import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Components/home';
import Resume from './Components/resume';

function App() {

  return (
    <>
    {/* <Home/> */}
    <BrowserRouter>
    <Routes>
      {<Route index element={<Home/>}/>}
      {<Route path="/resume" element={<Resume/>}/>}
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
