import React, { useRef } from 'react'
import './UpdateAddUser.css'
function UpdateAddUser() {
        const username=useRef()
        const password=useRef()
        const email=useRef()
        const roles=useRef()
        const status=useRef()
        const mobile=useRef()
        const domain=useRef()

        function handleSubmit(event)
        {
            event.preventDefault();
                const data={
                        username:username.current.value,
                        password:password.current.value,
                        email:email.current.value,
                        roles:roles.current.value,
                        status:status.current.value,
                        mobile:mobile.current.value,
                        domain:domain.current.value
                }
                console.log(data);
        }
  return (
    <div className='updateuser'>
        
       <form className='update-form' onSubmit={handleSubmit}>

       <div>
           <span>Add User / Update User</span>
       </div>
       <div className='up-parent'>

      
       <div className='up-1'>
       <div>
           <label>UserName</label>
           <input type='text' placeholder='Full Name' ref={username} required={true} minLength='5'/>
       </div>
       <div>
           <label>Email</label>
           <input type='email' placeholder='Email' ref={email} required={true}/>
       </div>

       <div>
           <label>Password</label>
           <input type='password' placeholder='Password' ref={password} required={true}/>
       </div>

       <div>
           <label for='domain'>Domain</label>
           <select name='Domain' id='domain' ref={domain}>
                <option value="python">python</option>
                <option value="React">react</option>
                <option value="javascript">js</option>
                <option value="java">js</option>
           </select>
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
           <input placeholder='Mobile number' ref={mobile} required={true}/>
       </div>
       <div>
        <label for='status'>status</label>
       <select name='status' id='status' ref={status}>
                <option value="fullTime">full-time</option>
                <option value="partTime">part-time</option>
                <option value="training">training</option>
           </select>
       </div>
      </div>
      </div>
       
       
         <input type='submit' value='add' className='submit'/>
       </form>
        
        </div>
  )
}

export default UpdateAddUser