import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'
// import { Switch } from "react-router-dom"
import Home from './components/Home';
import Order from './components/Order';
import Reservation from './components/Reservation';
// import Login from './Login'
// import Register from './Signup'

function Main() {

  return (
    <div className="App">
        <Routes>
            <Route path='/dashboard' element={<Home/>}/>
            <Route path='/dashboard/orders' element={<Order />}/>
            <Route path='/dashboard/reservation' element={<Reservation />} />
        </Routes>
    </div>
  )
}

export default Main;
