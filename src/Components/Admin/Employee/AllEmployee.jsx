import React from 'react'
import './AllEmployee.css'
import EmpDetails from '../EmpDetails/EmpDetails'
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import {IoIosAdd} from 'react-icons/io'
import {useNavigate} from 'react-router-dom'

export default function AllEmployee() {
  const navigate=useNavigate()
  console.log('Employee')
  return (
    <div className='employee'>
     <div className='e-title' onClick={()=>navigate('/update')}>
      <span className='add-employee'>add employee</span>
      <span><IoIosAdd/></span>
     </div>
     <div className='e-body'>
          <AdminNavbar/>
       
           <div className='e-content'>
           <div className='e-details e-details-head' >
            <div>
            <span>Employee</span>
            </div>
            <span>Salary</span>
            <span>status</span>
            <span>Domain</span>
            <div>Manage</div>
           </div>
           <div className='e-user-list'>
            <div>
            <EmpDetails/>
            </div>
            <div>
            <EmpDetails/>
            </div>
            <div>
            <EmpDetails/>
            </div>
            <div>
            <EmpDetails/>
            </div>
            <div>
            <EmpDetails/>
            </div>
            <div>
            <EmpDetails/>
            </div>
            <div>
            <EmpDetails/>
            </div>
            <div>
            <EmpDetails/>
            </div>
            <div>
            <EmpDetails/>
            </div>
            <div>
            <EmpDetails/>
            </div>
           
           
           </div>
           
           

     </div>
     </div>
    </div>
  )
}
