// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Top from "./components/Top";
// import Nav from "./components/Nav";
import Header from "./components/Header";
import Location from "./components/Location"

import {Route, Routes} from "react-router-dom"

function App() {

  return (
    <>
    <div className="background">
      <div className='content-layer'>
      <Top />
      <div className='cards-container'>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/article/:id" element={<Location />} />
        </Routes>    
      </div>
      </div>
      </div>
    </>
  )
}

export default App
