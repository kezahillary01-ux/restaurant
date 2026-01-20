import React from 'react';
import './App.css'
import Register from './Signup';
import Login from './Login';
import Main from './Main'
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import socketIO from 'socket.io-client'
const socket = socketIO.connect("http://localhost:5000");

function App() {
  
  return (
          <div  >
            <Routes>
              <Route path='/' element={<Login/>}/>
              <Route path='/register' element={<Register/>}/>
            </Routes>
            <Navbar/>
            <Main socket={socket}/>
          </div>
  )
}

export default App