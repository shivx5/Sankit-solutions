import React from 'react'
import './Employee.css'
import EmpDetails from '../EmpDetails/EmpDetails'
import AdminNavbar from '../AdminNavbar/AdminNavbar'
import {IoIosAdd} from 'react-icons/io'

export default function Employee() {
  console.log('Employee')
  return (
    <div className='employee'>
     <div className='e-title'>
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
