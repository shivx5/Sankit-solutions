import React, { useRef } from 'react'
import './UpdateAddUser.css'
function UpdateAddUser() {
        const username=useRef()
        const password=useRef()
        const email=useRef()
        const roles=useRef()
        const status=useRef()
        const mobile=useRef()

        function handleSubmit()
        {
                const data={
                        username:username.current.value,
                        password:password.current.value,
                        email:email.current.value,
                        roles:roles.current.value,
                        status:status.current.value,
                        mobile:mobile.current.value
                }
                console.log(data);
        }
  return (
    <div className='updateuser'>
        
       <form className='update-form'>

       <div>
           <span>Add User / Update User</span>
       </div>
       <div className='up-parent'>

      
       <div className='up-1'>
       <div>
           <label>UserName</label>
           <input placeholder='Full Name' ref={username}/>
       </div>
       <div>
           <label>Email</label>
           <input placeholder='Email' ref={email}/>
       </div>

       <div>
           <label>Password</label>
           <input placeholder='Password' ref={password}/>
       </div>
       </div>
      <div className='up-1'>
      <div>
           <label for='roles'>Role</label>
           <select name='roles' id='roles' ref={roles}>
                <option value="Emp">Emp</option>
                <option value="Hr">HR</option>
                <option value="Admin">Admin</option>
           </select>
       </div>
       <div>
           <label>Mobile</label>
           <input placeholder='Mobile number' ref={mobile}/>
       </div>
       <div>
           <label>status</label>
           <input placeholder='status' ref={status}/>
       </div>
      </div>
      </div>
       
       
         <input type='submit' value='add' className='submit'/>
       </form>
        
        </div>
  )
}

export default UpdateAddUser