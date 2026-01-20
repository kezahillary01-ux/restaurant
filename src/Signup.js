import React, { useState } from 'react';
// import { UserContext } from '../../../src/App';
 import { Link, useNavigate } from 'react-router-dom';
 import axios from 'axios';
// import {ToastContainer, toast} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css'

function Register() {

  const [ name, setName ] = useState("")
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")
  // const [ user, setUser ] = useState([])

  const handleName =(e)=>{
    setName(e.target.value)
    console.log(`This is your email : ${name}`);

  }

  const handleEmail =(e)=>{
    setEmail(e.target.value)
    console.log(`This is your email : ${email}`);

  }

  const handlePassword =(e)=>{
    setPassword(e.target.value)
    console.log(`This is your email : ${password}`);

  }

  const navigate = useNavigate();

  const registerUser = async(e) => {
    e.preventDefault();
    const user = {name, email, password}
    const responce = await axios.post('http://localhost:5000/api/v1/register', user)
    console.log(responce.data);
    //navigate('/')
  }

  return (
    <div className='signPage'>
        <form 
        className='signForm' 
        >
           <div className='input-label'>
              <label 
              className='name' 
              for='signName'>
              Name
              </label>
              <input 
              type='text' 
              id='signName' 
              className="inputName" 
              name='name'
              placeholder='Enter your name or your username here !'
              onChange={handleName}
              />
            </div>
            <div className='input-label'>
              <label 
              className='email' 
              for='signEmail'>
              Email
              </label>
              <input type='text' 
              id='signEmail' 
              className="inputName" 
              name='email'
              placeholder='Enter your email here'
              onChange={handleEmail}
              />
           </div>
           <div className='input-label'>
              <label 
              className='password' 
              for='signPassword'>
              Password
              </label>
              <input 
              type='password' 
              id='signPassword' 
              className="inputPassword" 
              name='password' 
              placeholder='Enter your password here'
              onChange={handlePassword}
              />
           </div>
           <button 
           className='authBtn'
           onSubmit={registerUser}
           >
           Register
           </button>
            <div className='alter-auth'>
              <span className='prev-link'>Yet in ?</span>
              <Link to={'/'}>
                <a className='link'>Login</a>
              </Link>
            </div>
        </form>
    </div>
  )
}

export default Register