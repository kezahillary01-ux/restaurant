import React, { useEffect, useState } from 'react'; 
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
// import {ToastContainer, toast} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css'

function Login() {
  const [ email, setEmail ] = useState("")
  const [password, setPassword] = useState("")
  const [ user, setUser ] = useState([])

  const navigate = useNavigate();


  const handleInputEmail =(e)=>{
    setEmail(e.target.value)
    console.log(`This is your email : ${email}`);

  }

  const handleInputPassword =(e)=>{
    setPassword(e.target.value)
    console.log(`And your password : ${password}`);

  }

  const loginUser = async(e) =>{
    e.preventDefault();
    try {
      const userINF = {email, password}
      const response = await (await axios.post("http://localhost:5000/api/v1/login", userINF)).data;
      setUser(response)
      console.log(response)
      if(response.token) {
        localStorage.setItem('token', response.token);
        localStorage.setItem('userId', response.id);
        localStorage.setItem('userName', response.username);
        navigate('/dashboard')
      }
    
    } catch (error) {
      console.log(error, 'login error');
    }
  }

  useEffect(()=> {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/dashboard')
    } else {
      navigate('/')
    }
  }, [])
  

  return (
        <div className='loginPage auth-container '>
            <form 
            className='loginForm' 
            onSubmit={loginUser}
            >
              <div className='input-label'>
                <label 
                className='email' 
                for='loginEmail'>
                Email
                </label>
                <input 
                type='email' 
                id='loginEmail' 
                className="inputEmail" 
                name='email'
                placeholder='Enter a your email here'
                onChange={handleInputEmail}
                />
              </div>
              <div className='input-label'>
                  <label 
                  className='password'
                  for='loginPassword'>
                  Password
                  </label>
                  <input 
                  type='password' 
                  id='loginPassword' 
                  className="inputPassword" 
                  name='password'
                  placeholder='Enter your password here'
                  onChange={handleInputPassword}
                  />
              </div>
              <button 
              variant="contained" className='authBtn'>
              Login
              </button>
              <div className='alter-auth'>
                <span className='prev-link'>Not  yet in ?</span>
                <Link to={'/register'}>
                  <a className='link'>Register</a>
                </Link>
              </div>
            </form>
            {/* <ToastContainer/> */}
        </div>

  )
}

export default Login