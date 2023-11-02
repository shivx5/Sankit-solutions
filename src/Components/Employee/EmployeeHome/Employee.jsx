import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import ETopBar from '../ETopBar/ETopBar'
import './Employee.css'
function Employee() {
  return (
    <div className='employee'>

    <ETopBar/>
    </div>
   
  )
}

export default Employee