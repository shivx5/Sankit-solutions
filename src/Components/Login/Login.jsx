import React,{useState,useRef} from 'react'
import './Login.css'
import gradient from '../../assets/g-1.jpg'
import unknown from '../../assets/unknown.png'
import {HiUser} from 'react-icons/hi'
import {BiSolidLockOpen} from 'react-icons/bi'
import {BiSolidLock} from 'react-icons/bi'
import {Link} from 'react-router-dom'

function Login() {
  const username =useRef()
  const password =useRef()
  const[show,setShow]=useState(false);
  function handleSubmit(event) {
    event.preventDefault()
        const data={
          username: username.current.value,
          password: password.current.value
        }
        console.log(data)
  }
  return (
    <div className='login'>
      
      
        <form className='login-component' onSubmit={handleSubmit}>   
        <div className='login-profile'>
          <img src="https://tse2.mm.bing.net/th?id=OIP.lF8ztkPyzv_NrpD7V8YYVAHaHa&pid=Api&P=0&h=180"></img>
        </div>
        <div className='user-input'>
        <span><HiUser/></span>
        <input type='text' placeholder='Username' ref={username}/>
        </div>
        <div>
        { show && <span onClick={()=>{setShow(!show)}} style={{cursor:"pointer"}}><BiSolidLockOpen/></span>}
        { !show && <span onClick={()=>{setShow(!show)}} style={{cursor:"pointer"}}><BiSolidLock/></span>}
        <input type={show?"text":"Password"} minLength='6'  placeholder='password' ref={password}/>
        </div>
        <div className='forget'>
          <div className='login-remember'>
          <input id='select' type='checkbox'/>
          <label htmlFor='select'>Remember me</label>
          </div>

          <div>
            <span style={{color:"whitesmoke",fontStyle:"italic",cursor:"pointer"}}>Forgot Password ?</span>
          </div>

        </div>
        <div className='login-reg'>
        <span style={{color:"white",fontSize:"15px"}}>New User ? </span>
        <span><Link to='/register' style={{color:"white"}}>Register</Link></span>
        </div>

        <input type='submit' value='LOGIN'  className='submit-button'/>
        </form>
     
      
    </div>
  )
}

export default Login