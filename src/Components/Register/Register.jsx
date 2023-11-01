import React,{useState,useRef} from 'react'
import './Register.css'
import validator from 'validator'
import unknown from '../../assets/unknown.png'
import {HiUser} from 'react-icons/hi'
import {BiSolidLockOpen} from 'react-icons/bi'
import {BiSolidLock} from 'react-icons/bi'
import {BiLogoGmail} from 'react-icons/bi'
import {Link} from 'react-router-dom'
function Register() {
        const[errorMessage,setErrorMessage] =useState(null);
        const username =useRef()
        const password =useRef()
        const email =useRef()
        const confirmPassword =useRef()

        const[show,setShow]=useState(false);
        
        const validate = (value) => { 
  
                if (validator.isStrongPassword(value, { 
                    minLength: 8, minLowercase: 1, 
                    minUppercase: 1, minNumbers: 1, minSymbols: 1 
                })) { 
                    setErrorMessage('strong') 
                } else { 
                    setErrorMessage('week') 
                } 
            } 
        function handleSubmit(event) {

                event.preventDefault();

                const data={
                        username:username.current.value,
                        password:password.current.value,
                        email:email.current.value,
                        password:password.current.value

                }
                
                if(data.password ==""|| data.username==""|| data.email == "" ||confirmPassword.current.value !== data.password)
                { 
                 console.log("password Does not match")                   
                  
                }
                else if(errorMessage ==''){
                        console.log(data)
                }
                else{
                        console.log("PassWord Strength mismatch");
                        setErrorMessage('');
                }
             
        }
  return (
        <div className='login'>
      
        
                <form className='login-component' onSubmit={handleSubmit}>

              
          <div className='login-profile'>
            <img src="https://tse2.mm.bing.net/th?id=OIP.lF8ztkPyzv_NrpD7V8YYVAHaHa&pid=Api&P=0&h=180"></img>
          </div>
          <div >
          <span><HiUser/></span>
          <input type='text' placeholder='Username' ref={username} required={true}/>
          </div>
          <div >
          <span><BiLogoGmail/></span>
          <input type='email' placeholder='Email' ref={email} required={true}/>
          </div>
          <div className='reg-password'>
          { show && <span onClick={()=>{setShow(!show)}} style={{cursor:"pointer"}}><BiSolidLockOpen/></span>}
          { !show && <span onClick={()=>{setShow(!show)}} style={{cursor:"pointer"}}><BiSolidLock/></span>}
          <input type={show?"text":"Password"} minLength='6'  placeholder='Password' onChange={(e)=>validate(e.target.value)} ref={password} required={true}/>
          {errorMessage &&errorMessage ==="strong"? <span className='password-strength-strong'>{errorMessage}</span>: <span className='password-strength-week'>{errorMessage}</span>}

          </div>
          <div className='reg-password'>
          <span  style={{cursor:"pointer"}}><BiSolidLock/></span>
          <input type="Password" minLength='6'  placeholder='Confirm Password' ref={confirmPassword} required={true}/>
              
          </div>
          <div className='login-reg'>
          <span style={{color:"white",fontSize:"15px"}}>Already Registered ? </span>
          <Link to='/' style={{color:"white"}}>Login</Link>
          </div>
          <input type='submit' value='REGISTER' className='submit-button'/>
          </form>
        
      </div>
  )
}

export default Register