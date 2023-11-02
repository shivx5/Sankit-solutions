import React, { useState } from 'react'
import './ViewEmp.css'
import unknown from '../../../assets/unknown.png'
import { useNavigate } from 'react-router-dom'
function ViewEmp() {
  
  const [edit,setEdit]=useState(false);
  const navigate = useNavigate()
  return (
    <div className='view-emp-details'>
      <div className='view-emp-details-1'>
      <div className='view-1-head'>
        <h3 style={{fontSize:"2rem"}}>Employee Details</h3>
      </div>
      <div className='view-1-profile'>
        <div>
        <img  className='v-e-d-1' src={unknown}></img>
        <div>
          <span>Shiva Ram</span>
          <span>Front End Developer</span>
        </div>
        </div>
       
        <div className='edit-button'>
        <button onClick={()=>setEdit(!edit)}>edit</button>
         </div>
       
        
      </div>
     
      </div>
      <div className='view-emp-details-2'> 
        <div className='view-emp-details-2-1'>
            <img className='v-e-d-2' src="https://tse4.mm.bing.net/th?id=OIP.2kuONkNHcwQ2y7DTyoiX8AHaHa&pid=Api&P=0&h=180"></img>
        </div>
        <div className='view-emp-details-2-2'>
          <div className='pro-head'>
          <h2>Shiva Raman</h2>
          {edit &&  <div className='edit-button edit'>
                      <button>update</button>
                      </div> }
          </div>
             
              {!edit && <div className='emp-view-info'>
                  <div>
                      <div>
                      <span>E-mail</span>
                      <span id='mail'>SivaKongunadu234@gmail.com</span>
                      </div>
                      <div>
                      <span>Domain</span>
                      <span>Front-end-developer</span>
                      </div>
                      <div>
                      <span>status</span>
                      <span>full time</span>
                      </div>
                  </div>
                  <div>
                      <div>
                      <span>Mobile</span>
                      <span>9655055299</span>
                      </div>
                      <div>
                      <span>job title</span>
                      <span>Developer</span>
                      </div>
                      <div>
                      <span>Business Phone</span>
                      <span>+1-24-98593593</span>
                      </div>
                  </div>
                  <div>
                      <div>
                      <span>Birday</span>
                      <span>13-07-2002</span>
                      </div>
                      <div>
                      <span>location</span>
                      <span>Namakkal</span>
                      </div>
                      <div>
                      <span>password</span>
                      <span>1234567</span>
                      </div>
                  </div>
                  <div>

                  </div>
              </div>}

              {edit &&<div className='emp-view-info'>
                  <div>
                      <div>
                      <span>E-mail</span>
                      <input placeholder='email'/>
                      </div>
                      <div>
                      <span>Domain</span>
                      <span>Front-end-developer</span>
                      </div>
                      <div>
                      <span>status</span>
                      <span>full time</span>
                      </div>
                  </div>
                  <div>
                      <div>
                      <span>Mobile</span>
                      <input placeholder='mobileNumber'/>
                      </div>
                      <div>
                      <span>job title</span>
                      <span>Developer</span>
                      </div>
                      <div>
                      <span>Business Phone</span>
                      <input placeholder='Business Phone'/>
                      </div>
                  </div>
                  <div>
                      <div>
                      <span>Birthday</span>
                      <input placeholder='birthday'/>
                      </div>
                      <div>
                      <span>location</span>
                      <input placeholder='location'/>
                      </div>
                      <div>
                      <span>password</span>
                      <input placeholder='password'/>
                      </div>
                  </div>
                  <div>                 
                  </div>
                  
              </div>}
                    
                     
             
        <div className='manager-div'>
          <span>Manager</span>
          <div>
            <div className='m-img'>
              <img src={unknown}></img>
            </div>
            <div className='m-details'>
            <span>Arul</span>
            <span>Founder</span>
            </div>
           
          </div>
        </div>
          </div>
      </div>
     
    </div>
  )
}

export default ViewEmp