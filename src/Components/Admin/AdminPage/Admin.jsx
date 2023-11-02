import React from 'react'
import TopBar from '../TopBar/TopBar'
import AllEmployee from '../Employee/AllEmployee'
// import { Link } from 'react-router-dom'
import './Admin.css'
import { Link ,Outlet,useNavigate} from 'react-router-dom'

export default function Admin() {
  return (
    <div className='admin'>
      <TopBar/>   
      <Outlet/>
    </div>
  )
}
