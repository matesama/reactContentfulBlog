// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Top from "./components/Top";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Location from "./components/Location"
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import {Route, Routes, Navigate} from "react-router-dom"
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';


function App() {

  return (
    <>
    <div className="background">
      <div className='content-layer'>
      <Top />
      <Nav />
      <div className='cards-container'>
        <Routes>
          <Route path="/" element={<PrivateRoute />}>
            <Route index element={<Header />} />
            <Route path="article/:id" element={<Location />} />
            <Route path="*" element={<Navigate to={'/'} />} />
          </Route>
          <Route path="/*" element={<PublicRoute />}>
            <Route path="register" element={<RegisterForm />} />
            <Route path="login" element={<LoginForm />} />
            <Route path="*" element={<Navigate to={'/login'} />} />
          </Route>
        </Routes>    
      </div>
      </div>
      </div>
    </>
  )
}

export default App
